# server.py
# Backend Web Server & News RSS-to-JSON Proxy for Asia Sales Impact Radar

import http.server
import socketserver
import urllib.request
import urllib.parse
import json
import xml.etree.ElementTree as ET
import re
import sys
from datetime import datetime

PORT = 8080

# Country Mapping configuration (gl, hl parameters, local RSS outlets)
COUNTRY_CONFIGS = {
    "싱가포르": { "code": "SG", "englishName": "Singapore", "hl": "en", "gl": "SG", "outlet": "https://www.channelnewsasia.com/api/v1/rss-outbound-feed?category=6511", "outletName": "CNA" },
    "방글라데시": { "code": "BD", "englishName": "Bangladesh", "hl": "en", "gl": "BD", "outlet": "https://www.thedailystar.net/rss.xml", "outletName": "The Daily Star" },
    "네팔": { "code": "NP", "englishName": "Nepal", "hl": "en", "gl": "NP", "outlet": "https://kathmandupost.com/rss", "outletName": "Kathmandu Post" },
    "스리랑카": { "code": "LK", "englishName": "Sri Lanka", "hl": "en", "gl": "LK", "outlet": "https://www.dailymirror.lk/rss/feeds", "outletName": "Daily Mirror" },
    "태국": { "code": "TH", "englishName": "Thailand", "hl": "th", "gl": "TH", "outlet": "https://www.bangkokpost.com/rss/data/topstories.xml", "outletName": "Bangkok Post" },
    "인도네시아": { "code": "ID", "englishName": "Indonesia", "hl": "en", "gl": "ID", "outlet": "https://www.thejakartapost.com/rss/paper", "outletName": "Jakarta Post" },
    "베트남": { "code": "VN", "englishName": "Vietnam", "hl": "vi", "gl": "VN", "outlet": "https://vnexpress.net/rss/tin-moi-nhat.rss", "outletName": "VnExpress" },
    "말레이시아": { "code": "MY", "englishName": "Malaysia", "hl": "en", "gl": "MY", "outlet": "https://www.thestar.com.my/rss/news/nation/", "outletName": "The Star" },
    "필리핀": { "code": "PH", "englishName": "Philippines", "hl": "en", "gl": "PH", "outlet": "https://www.inquirer.net/feed/", "outletName": "Inquirer" },
    "인도": { "code": "IN", "englishName": "India", "hl": "en", "gl": "IN", "outlet": "https://timesofindia.indiatimes.com/rssfeeds/296589292.cms", "outletName": "Times of India" },
    "대만": { "code": "TW", "englishName": "Taiwan", "hl": "zh-TW", "gl": "TW", "outlet": "https://focustaiwan.tw/rss/focus.xml", "outletName": "Focus Taiwan" },
    "중국": { "code": "CN", "englishName": "China", "hl": "zh-CN", "gl": "CN", "outlet": "https://www.caixinglobal.com/rss/index.xml", "outletName": "Caixin Global" },
    "호주": { "code": "AU", "englishName": "Australia", "hl": "en", "gl": "AU", "outlet": "https://www.abc.net.au/news/feed/51120/rss.xml", "outletName": "ABC News" },
    "뉴질랜드": { "code": "NZ", "englishName": "New Zealand", "hl": "en", "gl": "NZ", "outlet": "https://www.rnz.co.nz/rss/news.xml", "outletName": "RNZ News" }
}

# Optional NewsAPI.org Key placeholder
NEWS_API_KEY = "YOUR_NEWSAPI_ORG_KEY_PLACEHOLDER"

def parse_rss_xml(xml_bytes, source_name):
    """
    Parses RSS/Atom XML bytes into standard dictionary lists.
    Has robust regex fallbacks if ElementTree fails due to malformed XML tags/entities.
    """
    items = []
    
    # Clean CDATA declarations if needed to prevent element tree errors
    try:
        root = ET.fromstring(xml_bytes)
        # Check standard RSS <item> structures
        channel = root.find('.//channel')
        if channel is not None:
            for item in root.findall('.//item')[:8]:
                title = item.find('title')
                link = item.find('link')
                pub_date = item.find('pubDate')
                description = item.find('description')
                
                title_text = title.text if title is not None else "No Title"
                link_text = link.text if link is not None else "#"
                date_text = pub_date.text if pub_date is not None else ""
                desc_text = description.text if description is not None else ""
                
                items.append({
                    "title": title_text,
                    "link": link_text,
                    "date": date_text,
                    "summary": desc_text,
                    "source": source_name
                })
        else:
            # Check Atom feed <entry> structures
            entries = root.findall('.//{http://www.w3.org/2005/Atom}entry')
            if len(entries) > 0:
                for entry in entries[:8]:
                    title = entry.find('{http://www.w3.org/2005/Atom}title')
                    link = entry.find('{http://www.w3.org/2005/Atom}link')
                    updated = entry.find('{http://www.w3.org/2005/Atom}updated')
                    summary = entry.find('{http://www.w3.org/2005/Atom}summary')
                    
                    title_text = title.text if title is not None else "No Title"
                    link_text = link.attrib.get('href', '#') if link is not None else "#"
                    date_text = updated.text if updated is not None else ""
                    desc_text = summary.text if summary is not None else ""
                    
                    items.append({
                        "title": title_text,
                        "link": link_text,
                        "date": date_text,
                        "summary": desc_text,
                        "source": source_name
                    })
    except Exception as e:
        print(f"[Parser Debug] ElementTree failed for {source_name}, falling back to Regex. Error: {e}")
        # Robust regex fallback parsing for XML
        xml_str = xml_bytes.decode('utf-8', errors='ignore')
        item_blocks = re.findall(r'<item>(.*?)</item>', xml_str, re.DOTALL)
        for block in item_blocks[:8]:
            title_match = re.search(r'<title>(.*?)</title>', block, re.DOTALL)
            link_match = re.search(r'<link>(.*?)</link>', block, re.DOTALL)
            pub_date_match = re.search(r'<pubDate>(.*?)</pubDate>', block, re.DOTALL)
            desc_match = re.search(r'<description>(.*?)</description>', block, re.DOTALL)
            
            def clean_cdata(s):
                s = s.replace('<![CDATA[', '').replace(']]>', '')
                return re.sub(r'<[^>]*>', '', s).strip() # strip HTML tags
            
            title_text = clean_cdata(title_match.group(1)) if title_match else "No Title"
            link_text = title_match.group(0) # placeholder if link block is empty, or find href link
            if link_match:
                link_text = clean_cdata(link_match.group(1))
            date_text = clean_cdata(pub_date_match.group(1)) if pub_date_match else ""
            desc_text = clean_cdata(desc_match.group(1)) if desc_match else ""
            
            items.append({
                "title": title_text,
                "link": link_text,
                "date": date_text,
                "summary": desc_text,
                "source": source_name
            })
            
    return items

def fetch_rss_feed(url, source_name):
    """
    Fetches the RSS content from a given URL using Chrome browser headers
    to prevent scraping blockages.
    """
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=5) as response:
            return parse_rss_xml(response.read(), source_name)
    except Exception as e:
        print(f"[Fetch Error] Failed to retrieve feed for {source_name} ({url}): {e}")
        return []

def fetch_news_api(country_code):
    """
    Exemplary integration of NewsAPI.org for dynamic integration support.
    """
    if not NEWS_API_KEY or NEWS_API_KEY == "YOUR_NEWSAPI_ORG_KEY_PLACEHOLDER":
        return []
    
    url = f"https://newsapi.org/v2/top-headlines?country={country_code.lower()}&category=business&apiKey={NEWS_API_KEY}"
    headers = { 'User-Agent': 'Mozilla/5.0' }
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=4) as response:
            data = json.loads(response.read().decode('utf-8'))
            articles = data.get('articles', [])
            items = []
            for art in articles[:8]:
                items.append({
                    "title": art.get('title', 'No Title'),
                    "link": art.get('url', '#'),
                    "date": art.get('publishedAt', ''),
                    "summary": art.get('description', '') or '',
                    "source": art.get('source', {}).get('name', 'NewsAPI')
                })
            return items
    except Exception as e:
        print(f"[NewsAPI Error] Failed to fetch news for {country_code}: {e}")
        return []


class ProxyNewsServer(http.server.SimpleHTTPRequestHandler):
    """
    Subclasses SimpleHTTPRequestHandler to serve the frontend portal's assets
    while acting as an API proxy endpoint for `/api/news`.
    """
    def do_GET(self):
        parsed_url = urllib.parse.urlparse(self.path)
        
        # 1. Handle news aggregation endpoint: `/api/news`
        if parsed_url.path == '/api/news':
            query_params = urllib.parse.parse_qs(parsed_url.query)
            country_param = query_params.get('country', [''])[0].strip()
            
            # Resolve matching country profile
            country_profile = None
            for key, config in COUNTRY_CONFIGS.items():
                if key == country_param or config["code"] == country_param or config["englishName"].lower() == country_param.lower():
                    country_profile = (key, config)
                    break
                    
            if not country_profile:
                # Fallback to Singapore if not found
                country_profile = ("싱가포르", COUNTRY_CONFIGS["싱가포르"])
                
            country_name, config = country_profile
            
            # A. Fetch from Google News RSS Search
            # Query standard logic: search for consumer appliances and market risk factors
            query = f'"{config["englishName"]}" ("refrigerator" OR "washing machine" OR "appliance market" OR "consumer electronics" OR "market risk")'
            google_rss_url = f'https://news.google.com/rss/search?q={urllib.parse.quote(query)}&hl={config["hl"]}&gl={config["gl"]}&ceid={config["gl"]}:{config["hl"]}'
            
            google_news_items = fetch_rss_feed(google_rss_url, "Google News")
            
            # B. Fetch from country's designated local outlet RSS Feed
            local_outlet_items = []
            if config.get("outlet"):
                local_outlet_items = fetch_rss_feed(config["outlet"], config["outletName"])
                
            # C. Fetch from NewsAPI.org template (Optional)
            news_api_items = fetch_news_api(config["code"])
            
            # D. Merge and filter out empty items
            combined_news = []
            seen_titles = set()
            
            # Prioritize local outlets and NewsAPI, then fill with Google News
            for item in (local_outlet_items + news_api_items + google_news_items):
                title_clean = item["title"].lower().strip()
                if title_clean and title_clean not in seen_titles:
                    seen_titles.add(title_clean)
                    combined_news.append(item)
                    
            # Return max 12 items to prevent bloating
            response_json = json.dumps(combined_news[:12], ensure_ascii=False)
            
            # Respond to client with CORS headings (just in case)
            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(response_json.encode('utf-8'))
            return
            
        # 2. Serve static assets via default behavior
        return super().do_GET()


if __name__ == '__main__':
    # Allow passing custom port in CLI arguments
    port = PORT
    if len(sys.argv) > 1:
        try:
            port = int(sys.argv[1])
        except ValueError:
            pass
            
    print(f"=========================================================")
    print(f" ASIA SALES IMPACT RADAR - BACKEND PROXY SERVER          ")
    print(f" Serving portal static files and /api/news endpoint       ")
    print(f" Listening on http://localhost:{port}                    ")
    print(f"=========================================================")
    
    # Run the server
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", port), ProxyNewsServer) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server...")
            httpd.server_close()
