// js/config.js
// Configuration and seed data for the Asia Sales Impact Radar dashboard (Korean Localized)

const CONFIG = {
  // Phase 1, Phase 2, and Added Countries setup
  countries: {
    // Phase 1 Countries
    "싱가포르": {
      phase: 1,
      englishName: "Singapore",
      center: [1.3521, 103.8198],
      zoom: 11,
      capital: "싱가포르",
      capitalEn: "Singapore",
      currencyCode: "SGD",
      currencyName: "싱가포르 달러",
      regionalManager: "Sophia Chen (sophia.c@company.com)",
      primaryPort: "싱가포르항 (PSA)",
      polygon: [
        [1.45, 103.60], [1.47, 103.75], [1.44, 104.05], [1.32, 104.08], 
        [1.22, 103.80], [1.24, 103.60], [1.45, 103.60]
      ]
    },
    "방글라데시": {
      phase: 1,
      englishName: "Bangladesh",
      center: [23.6850, 90.3563],
      zoom: 7,
      capital: "다카",
      capitalEn: "Dhaka",
      currencyCode: "BDT",
      currencyName: "방글라데시 타카",
      regionalManager: "Rahman Al-Masud (rahman.m@company.com)",
      primaryPort: "치타공항",
      polygon: [
        [26.6, 88.5], [26.3, 89.8], [25.2, 89.8], [25.1, 92.5], 
        [24.0, 92.5], [22.0, 92.3], [20.7, 92.3], [21.8, 89.5], 
        [22.5, 89.0], [24.5, 88.1], [26.6, 88.5]
      ]
    },
    "네팔": {
      phase: 1,
      englishName: "Nepal",
      center: [28.3949, 84.1240],
      zoom: 8,
      capital: "카트만두",
      capitalEn: "Kathmandu",
      currencyCode: "NPR",
      currencyName: "네팔 루피",
      regionalManager: "Anil Shrestha (anil.s@company.com)",
      primaryPort: "비르간지 건조항 (콜카타 경유)",
      polygon: [
        [30.1, 80.1], [30.4, 81.3], [29.2, 82.2], [28.9, 83.1], 
        [27.8, 88.2], [27.0, 88.1], [26.4, 87.3], [27.4, 83.8], 
        [28.6, 80.3], [30.1, 80.1]
      ]
    },
    "스리랑카": {
      phase: 1,
      englishName: "Sri Lanka",
      center: [7.8731, 80.7718],
      zoom: 8,
      capital: "콜롬보",
      capitalEn: "Colombo",
      currencyCode: "LKR",
      currencyName: "스리랑카 루피",
      regionalManager: "Dinesh Fernando (dinesh.f@company.com)",
      primaryPort: "콜롬보항",
      polygon: [
        [9.8, 80.2], [9.3, 80.8], [8.0, 81.3], [7.0, 81.8], 
        [6.0, 81.3], [5.9, 80.5], [6.2, 79.9], [7.3, 79.8], 
        [8.5, 79.7], [9.5, 79.9], [9.8, 80.2]
      ]
    },
    "태국": {
      phase: 1,
      englishName: "Thailand",
      center: [15.8700, 100.9925],
      zoom: 6,
      capital: "방콕",
      capitalEn: "Bangkok",
      currencyCode: "THB",
      currencyName: "태국 바트",
      regionalManager: "Kitti Somboon (kitti.s@company.com)",
      primaryPort: "람차방항",
      polygon: [
        [20.4, 99.9], [20.0, 100.5], [19.2, 100.8], [17.4, 104.8], 
        [15.2, 105.6], [14.4, 105.2], [14.1, 102.5], [11.8, 99.8], 
        [8.0, 98.4], [5.6, 101.2], [6.2, 102.1], [7.2, 100.2], 
        [12.5, 99.9], [13.5, 100.9], [12.6, 102.7], [14.2, 102.7], 
        [16.5, 101.1], [18.2, 97.3], [20.4, 99.9]
      ]
    },
    // Phase 2 Countries
    "인도네시아": {
      phase: 2,
      englishName: "Indonesia",
      center: [-0.7893, 113.9213],
      zoom: 5,
      capital: "자카르타",
      capitalEn: "Jakarta",
      currencyCode: "IDR",
      currencyName: "인도네시아 루피아",
      regionalManager: "Bambang Wijaya (bambang.w@company.com)",
      primaryPort: "탄중프리옥항 (자카르타)",
      polygon: [
        // 수마트라
        [[5.8, 95.3], [4.8, 98.0], [2.5, 100.7], [-1.0, 103.8], [-5.8, 106.0], [-5.3, 104.5], [-2.5, 101.0], [0.8, 97.5], [5.8, 95.3]],
        // 자바
        [[-5.9, 106.0], [-6.4, 108.5], [-6.9, 112.5], [-8.5, 114.3], [-8.7, 114.3], [-7.5, 109.0], [-6.8, 105.2], [-5.9, 106.0]],
        // 칼리만탄
        [[4.0, 115.0], [4.0, 117.5], [1.0, 119.0], [-1.0, 117.0], [-3.5, 114.5], [-3.0, 111.0], [-2.0, 110.0], [1.0, 109.0], [2.0, 112.0], [4.0, 115.0]],
        // 술라웨시
        [[1.8, 120.8], [1.5, 124.8], [0.8, 125.0], [-0.5, 120.5], [-5.5, 120.0], [-5.5, 122.5], [-3.0, 123.0], [-0.8, 121.5], [-0.2, 124.0], [1.8, 120.8]]
      ]
    },
    "베트남": {
      phase: 2,
      englishName: "Vietnam",
      center: [14.0583, 108.2772],
      zoom: 6,
      capital: "하노이",
      capitalEn: "Hanoi",
      currencyCode: "VND",
      currencyName: "베트남 동",
      regionalManager: "Nguyen Minh Tu (minhtu.n@company.com)",
      primaryPort: "깟라이항 (호치민)",
      polygon: [
        [23.3, 105.3], [22.8, 106.8], [21.5, 108.0], [20.0, 106.2], 
        [18.0, 106.3], [16.5, 107.8], [14.0, 109.3], [11.5, 109.2], 
        [10.3, 108.0], [8.5, 104.8], [9.8, 104.5], [11.0, 106.5], 
        [12.5, 107.5], [15.0, 107.7], [17.0, 106.2], [20.0, 104.0], 
        [22.3, 102.2], [22.6, 103.8], [23.3, 105.3]
      ]
    },
    "말레이시아": {
      phase: 2,
      englishName: "Malaysia",
      center: [4.2105, 101.9758],
      zoom: 7,
      capital: "쿠알라룸푸르",
      capitalEn: "Kuala Lumpur",
      currencyCode: "MYR",
      currencyName: "말레이시아 링깃",
      regionalManager: "Haris bin Osman (haris.o@company.com)",
      primaryPort: "클랑항",
      polygon: [
        // 서말레이시아
        [[6.7, 100.1], [6.2, 102.2], [4.8, 103.5], [1.3, 104.3], [1.3, 103.5], [2.5, 102.5], [5.0, 100.3], [6.7, 100.1]],
        // 동말레이시아
        [[4.8, 115.0], [6.0, 116.0], [7.3, 116.8], [5.5, 118.5], [4.2, 118.5], [4.1, 115.0], [2.0, 111.5], [1.5, 109.5], [3.5, 113.0], [4.8, 115.0]]
      ]
    },
    "필리핀": {
      phase: 2,
      englishName: "Philippines",
      center: [12.8797, 121.7740],
      zoom: 6,
      capital: "마닐라",
      capitalEn: "Manila",
      currencyCode: "PHP",
      currencyName: "필리핀 페소",
      regionalManager: "Maria Santos (maria.s@company.com)",
      primaryPort: "마닐라 국제 컨테이너 터미널",
      polygon: [
        // 루손
        [[18.5, 120.8], [18.5, 122.2], [16.0, 122.4], [14.0, 121.0], [12.5, 124.0], [13.0, 120.5], [15.0, 120.0], [18.5, 120.8]],
        // 민다나오
        [[9.5, 125.5], [8.0, 126.5], [6.0, 126.0], [5.5, 125.0], [7.0, 122.0], [8.0, 122.0], [8.5, 124.0], [9.5, 125.5]],
        // 비사야
        [[11.5, 122.0], [11.0, 124.5], [10.0, 125.0], [9.5, 123.0], [10.0, 122.0], [11.5, 122.0]]
      ]
    },
    "인도": {
      phase: 2,
      englishName: "India",
      center: [20.5937, 78.9629],
      zoom: 5,
      capital: "뉴델리",
      capitalEn: "New Delhi",
      currencyCode: "INR",
      currencyName: "인도 루피",
      regionalManager: "Rajesh Kumar (rajesh.k@company.com)",
      primaryPort: "나바셰바항 (JNPT) / 뭄바이",
      polygon: [
        [35.5, 74.5], [37.1, 74.8], [34.5, 78.5], [30.5, 78.5], [30.1, 80.2], 
        [28.9, 80.2], [27.5, 84.5], [27.0, 88.0], [27.8, 88.1], [28.0, 97.4], 
        [26.0, 97.0], [24.0, 94.0], [22.0, 92.2], [22.2, 89.0], [17.5, 83.0], 
        [13.0, 80.2], [10.0, 79.8], [8.1, 77.3], [12.5, 74.8], [16.0, 73.5], 
        [19.0, 72.8], [23.5, 68.5], [24.8, 71.0], [31.0, 74.0], [33.0, 74.0], 
        [35.5, 74.5]
      ]
    },
    // New Countries Added
    "대만": {
      phase: 2,
      englishName: "Taiwan",
      center: [23.6978, 120.9605],
      zoom: 7,
      capital: "타이페이",
      capitalEn: "Taipei",
      currencyCode: "TWD",
      currencyName: "신대만 달러",
      regionalManager: "Chen Wei (wei.c@company.com)",
      primaryPort: "가오슝항",
      polygon: [
        [25.3, 121.5], [25.0, 122.0], [24.0, 121.8], [22.0, 120.8], 
        [21.9, 120.7], [22.4, 120.4], [25.0, 121.0], [25.3, 121.5]
      ]
    },
    "중국": {
      phase: 2,
      englishName: "China",
      center: [35.8617, 104.1954],
      zoom: 4,
      capital: "베이징",
      capitalEn: "Beijing",
      currencyCode: "CNY",
      currencyName: "위안화 (RMB)",
      regionalManager: "Zhang Min (min.z@company.com)",
      primaryPort: "상하이항",
      polygon: [
        [49.5, 117.0], [48.0, 131.0], [43.0, 131.0], [40.0, 120.0], 
        [30.0, 122.0], [22.0, 114.0], [21.5, 108.0], [22.0, 102.0], 
        [28.0, 97.0], [28.0, 80.0], [36.0, 75.0], [42.0, 80.0], 
        [48.0, 86.0], [49.5, 117.0]
      ]
    },
    "호주": {
      phase: 2,
      englishName: "Australia",
      center: [-25.2744, 133.7751],
      zoom: 4,
      capital: "캔버라",
      capitalEn: "Canberra",
      currencyCode: "AUD",
      currencyName: "호주 달러",
      regionalManager: "David Taylor (david.t@company.com)",
      primaryPort: "멜버른항",
      polygon: [
        [-12.0, 131.0], [-11.0, 142.0], [-22.0, 150.0], [-33.0, 152.0], 
        [-38.0, 146.0], [-35.0, 115.0], [-22.0, 113.0], [-15.0, 121.0], 
        [-12.0, 131.0]
      ]
    },
    "뉴질랜드": {
      phase: 2,
      englishName: "New Zealand",
      center: [-40.9006, 174.8860],
      zoom: 5,
      capital: "웰링턴",
      capitalEn: "Wellington",
      currencyCode: "NZD",
      currencyName: "뉴질랜드 달러",
      regionalManager: "Sarah Jenkins (sarah.j@company.com)",
      primaryPort: "오클랜드항",
      polygon: [
        // 북섬
        [[-34.4, 172.7], [-37.5, 178.3], [-41.4, 175.2], [-39.0, 174.0], [-34.4, 172.7]],
        // 남섬
        [[-40.5, 172.8], [-41.5, 174.3], [-46.7, 169.8], [-46.0, 166.5], [-40.5, 172.8]]
      ]
    }
  },

  // 국가별 주요 항구 매핑 데이터베이스
  portMapping: {
    "싱가포르": ["싱가포르항 (PSA)", "케펠 터미널 (Keppel)", "파시르 판장 (Pasir Panjang)"],
    "방글라데시": ["치타공항 (Chittagong)", "몽글라항 (Mongla)"],
    "네팔": ["비르간지 건조항 (Birgunj)", "바이라하와 건조항 (Bhairahawa)"],
    "스리랑카": ["콜롬보항 (Colombo)", "함반토타항 (Hambantota)", "트린코말리항 (Trincomalee)"],
    "태국": ["람차방항 (Laem Chabang)", "방콕항 (Klong Toey)", "송클라항 (Songkhla)"],
    "인도네시아": ["탄중프리옥항 (자카르타)", "탄중페락항 (수라바야)", "벨라완항 (메단)"],
    "베트남": ["호치민 Cat Lai", "하이퐁 (Hai Phong)", "다낭 (Da Nang)"],
    "말레이시아": ["클랑항 (Port Klang)", "페낭항 (Penang)", "조호르항 (Johor Port)"],
    "필리핀": ["마닐라 국제 컨테이너 터미널", "수빅항 (Subic Bay)", "세부항 (Cebu Port)"],
    "인도": ["나바셰바항 (JNPT) / 뭄바이", "첸나이항 (Chennai)", "문드라항 (Mundra)"],
    "대만": ["가오슝항", "키륭항 (Keelung)", "타이중항 (Taichung)"],
    "중국": ["상하이항 (Shanghai)", "닝보-저우산항 (Ningbo)", "심천항 (Shenzhen)", "청도항 (Qingdao)"],
    "호주": ["멜버른항 (Melbourne)", "시드니항 (Sydney)", "브리즈번항 (Brisbane)"],
    "뉴질랜드": ["오클랜드항 (Auckland)", "타우랑가항 (Tauranga)", "리틀턴항 (Lyttelton)"]
  },

  // High-fidelity fallback/default dataset (Korean Localized - 최소 3개 이벤트 보장)
  defaultEvents: [
    // 1. 싱가포르 (3개)
    {
      id: "ev_sg_1",
      title: "삼성 비스포크 AI 냉장고 싱가포르 출시 및 프로모션",
      date: "2026-06-20",
      country: "싱가포르",
      type: "Competitor Activities",
      source: "싱가포르 테크 리테일 가제트",
      summary: "삼성전자가 싱가포르 시장에 인공지능(AI)을 탑재한 프리미엄 비스포크 냉장고 신제품군을 출시했습니다. 대대적인 중고 보상 판매(Trade-in) 프로모션 및 최대 36개월 무이자 할부를 함께 제공하며 프렌치도어 냉장고 구매 시 공기청정기를 무상 번들 제공 중입니다.",
      products: ["Refrigerator"],
      impactLevel: "High Impact",
      impactScore: 7,
      businessImpact: "경쟁사의 공격적인 판촉 행사는 싱가포르 가전 대리점 내 당사의 프리미엄 프렌치도어 냉장고 매출에 타격을 줄 우려가 있습니다. 적기 대응이 없을 경우 당사 프리미엄 판매 실적이 8-10%가량 일시 감소할 위험이 있습니다.",
      recommendation: "당사 매칭 캐시백 이벤트('스마트 쿨 업그레이드')를 긴급 기획하고 하비노만(Harvey Norman) 및 베스트덴키(Best Denki) 등 주요 유통 매장의 황금 매대(A급 진열 공간)를 선점 협의하십시오.",
      link: "https://www.google.com/search?q=Samsung+Bespoke+AI+Refrigerator+Singapore"
    },
    {
      id: "ev_sg_2",
      title: "다이슨 스마트 일렉트로닉스 청소기 가전 번들 프로모션 전개",
      date: "2026-06-18",
      country: "싱가포르",
      type: "Competitor Activities",
      source: "싱가포르 비즈니스 리뷰",
      summary: "다이슨 싱가포르 법인이 프리미엄 청소기 신제품 구매 고객을 대상으로 당사 냉장고/세탁기 경쟁 모델과의 번들 할인을 제공하는 패키지 마케팅을 쇼핑몰에서 개시했습니다.",
      products: ["Refrigerator", "Washing Machine"],
      impactLevel: "Medium Impact",
      impactScore: 6,
      businessImpact: "경쟁사 프리미엄 소형가전 번들 프로모션이 중형 및 드럼 가전 매출에 간접적인 판촉 압박을 줍니다.",
      recommendation: "주요 매장 내 프로모터들에게 아웃도어 가전 번들 혜택 사양을 비교 안내하도록 마케팅 자료를 갱신 배포하십시오.",
      link: "https://www.google.com/search?q=Dyson+Singapore+appliance+bundle"
    },
    {
      id: "ev_sg_3",
      title: "싱가포르 항만 기후 탄소 배출 규제 수수료 인상안 발표",
      date: "2026-06-16",
      country: "싱가포르",
      type: "Regulation",
      source: "싱가포르 해사청 (MPA)",
      summary: "MPA가 친환경 항만 조성을 위해 탄소 저감 비인증 선박에 대한 항만 이용료 및 수입 통관 배출 가산 수수료를 12% 인상한다고 예고했습니다.",
      products: ["Refrigerator", "Washing Machine"],
      impactLevel: "High Impact",
      impactScore: 7,
      businessImpact: "싱가포르를 경유하거나 직송 입항하는 냉장고/세탁기 완제품의 수입 Landed Cost가 컨테이너당 약 4% 상승할 우려가 있습니다.",
      recommendation: "선사별 친환경 인증 선박 배정 여부를 사전 확인하고, 9월 이전 대리점 계약 수입 단가 조건 조정을 준비하십시오.",
      link: "https://www.google.com/search?q=Singapore+MPA+carbon+tax+port"
    },

    // 2. 태국 (3개)
    {
      id: "ev_th_1",
      title: "태국 라용 공장 인근 도로 범람으로 물류 수송 차질",
      date: "2026-06-22",
      country: "태국",
      type: "Weather",
      source: "태국 기상청 & 물류 위클리",
      summary: "강한 몬순성 폭우로 인해 태국 최대 가전 공장 단지가 위치한 라용 지방의 핵심 물류 고속도로가 물에 잠겼습니다. 공장에서 방콕 내 물류 허브 터미널로의 육상 화물 트럭 루트 운행이 중단되었습니다.",
      products: ["Refrigerator", "Washing Machine"],
      impactLevel: "Critical Risk",
      impactScore: 9,
      businessImpact: "라용 제조 공장은 가동 중이나 완성품 출하 및 람차방 항구를 통한 냉장고/세탁기 수출 물량 선적에 심각한 정체가 빚어지고 있습니다. 딜러 납품 주기(Sell-in)가 최소 10-14일 지연될 것으로 예상됩니다.",
      recommendation: "긴급 화물은 남부 임시 우회로를 통해 선적 루트를 조정하고, 해외 유통 법인들에 프론트로드 드럼세탁기의 안전 재고를 최소 2주분 추가 비축하도록 요청하십시오.",
      link: "https://www.google.com/search?q=Rayong+flooding+logistics+appliance"
    },
    {
      id: "ev_th_2",
      title: "태국 내수 경쟁 격화에 따른 베코(Beko) 냉장고 전격 가격 인하",
      date: "2026-06-19",
      country: "태국",
      type: "Competitor Activities",
      source: "방콕 포스트 비즈니스",
      summary: "유럽계 가전 브랜드 Beko가 태국 방콕 및 주요 대도시 양판점에서 프렌치도어 냉장고 라인업의 판매 단가를 최대 15% 전격 인하하며 파격 공세를 개시했습니다.",
      products: ["Refrigerator"],
      impactLevel: "High Impact",
      impactScore: 7,
      businessImpact: "당사 중고가 프리미엄 냉장고 모델과의 가격 차이가 벌어져 고객 유입율이 소폭 하락할 리스크가 있습니다.",
      recommendation: "단순 단가 인하 방어보다는 구매 시 사은품(주방용 소형 인덕션 등)을 즉시 증정하는 패키지 마케팅을 유통점과 연계 실행하십시오.",
      link: "https://www.google.com/search?q=Beko+Thailand+refrigerator+price+cut"
    },
    {
      id: "ev_th_3",
      title: "태국 정부, 고효율 가전 구매자 탄소 중립 보조금 지원책 통과",
      date: "2026-06-21",
      country: "태국",
      type: "Regulation",
      source: "태국 내각 공보",
      summary: "태국 내각이 에너지 고효율 인버터 냉장고 및 세탁기 신규 교체 구매 시 가구당 최대 3,000바트 상당의 그린 보조금을 소득세 감면 형태로 지원하는 안을 확정했습니다.",
      products: ["Refrigerator", "Washing Machine"],
      impactLevel: "Opportunity",
      impactScore: 8,
      businessImpact: "고효율 친환경 가전 모델의 교체 수요가 늘어나며 3분기 내수 판매 실적에 호재로 작용할 예정입니다.",
      recommendation: "보조금 수혜 적용 인버터 드럼 세탁기 및 양문형 냉장고 물량을 주요 쇼핑센터 매장에 긴급 전진 배치하십시오.",
      link: "https://www.google.com/search?q=Thailand+government+energy+saving+subsidy"
    },

    // 3. 방글라데시 (3개)
    {
      id: "ev_bd_1",
      title: "방글라데시 중앙은행, 고가 가전 신용장(LC) 개설 규제 강화",
      date: "2026-06-15",
      country: "방글라데시",
      type: "Regulation",
      source: "다카 파이낸셜 익스프레스",
      summary: "방글라데시 중앙은행이 외환 보유고 보존을 위해 냉장고, 세탁기 등 수입 고급 가전제품에 대한 수입 신용장(LC) 개설 시 보증금(마진) 예치 의무 비율을 100%로 전격 인상했습니다.",
      products: ["Refrigerator", "Washing Machine"],
      impactLevel: "Critical Risk",
      impactScore: 10,
      businessImpact: "완성품 수입 및 현지 반조립(CKD) 부품 도입 비용 부담이 급증하고 수입 승인 프로세스가 기존 3주에서 7주 이상으로 대폭 늘어납니다. 현지 파트너사들의 유동성 리스크가 가중됩니다.",
      recommendation: "상대적으로 마진과 수요가 꾸준한 세탁기 핵심 제어 보드(CKD) 부품의 신용장 개설 승인을 최우선 처리하고, 비필수 냉장고 SKU의 비중을 낮춰 자금 묶임을 최소화하십시오.",
      link: "https://www.google.com/search?q=Bangladesh+Bank+LC+margin+rules+appliance"
    },
    {
      id: "ev_bd_2",
      title: "다카 지역 천연가스 공급 단가 급등에 따른 제조 원가 상승",
      date: "2026-06-17",
      country: "방글라데시",
      type: "Logistics",
      source: "다카 타임스",
      summary: "정부 가스 공사 보고에 따르면 산업용 천연가스 공급 단가가 15% 기습 인상되어 현지 가전 위탁 조립 및 부품 생산 공장의 전력 제조 단가가 대폭 상승했습니다.",
      products: ["Refrigerator", "Washing Machine"],
      impactLevel: "High Impact",
      impactScore: 7,
      businessImpact: "방글라데시 현지 반조립 생산 라인의 냉장고 제조 원가가 약 3.2% 인상되는 비용 압박이 발생합니다.",
      recommendation: "제조 공정 내 야간 가동 비중을 늘려 전력 할인을 적용받고, 고효율 부품을 활용한 단가 보완책을 긴급 수립하십시오.",
      link: "https://www.google.com/search?q=Bangladesh+gas+price+hike+industry"
    },
    {
      id: "ev_bd_3",
      title: "현지 경쟁업체 월튼(Walton), 보급형 직냉식 냉장고 대규모 할인",
      date: "2026-06-21",
      country: "방글라데시",
      type: "Competitor Activities",
      source: "방글라데시 비즈니스 헤럴드",
      summary: "로컬 1위 가전 기업 Walton이 우기 및 농번기 프로모션으로 보급형 직냉식 단문형 냉장고의 전 제품 판매 가격을 10% 일시 인하하고 할부 개월 수를 연장했습니다.",
      products: ["Refrigerator"],
      impactLevel: "High Impact",
      impactScore: 8,
      businessImpact: "당사 중저가 냉장고 판매 대수 실적이 다카 및 외곽 유통망에서 15% 하락할 리스크가 큽니다.",
      recommendation: "Walton 대비 우수한 인버터 컴프레서 무상 10년 보증 마케팅을 전면에 세우고, 로컬 소매점에 5% 특별 딜러 장려금을 지원하십시오.",
      link: "https://www.google.com/search?q=Walton+refrigerator+price+cut+Bangladesh"
    },

    // 4. 스리랑카 (3개)
    {
      id: "ev_lk_1",
      title: "스리랑카 루피화(LKR) 반등으로 수입 가전 원가 부담 경감",
      date: "2026-06-21",
      country: "스리랑카",
      type: "Currency",
      source: "스리랑카 중앙은행 및 금융 데일리",
      summary: "관광 자금 유입 회복과 IMF 금융 구제 지원 정책으로 스리랑카 루피화 가치가 달러화 대비 최근 3주간 5.4% 강세를 보이며 회복세를 기록하고 있습니다. 상업은행의 외환 유동성이 개선되는 추세입니다.",
      products: ["Refrigerator", "Washing Machine"],
      impactLevel: "Opportunity",
      impactScore: 8,
      businessImpact: "수입 완성품 및 CKD 조립 자재의 수입 단가(Landed Cost)가 낮아집니다. 영업 이익률이 약 3.8% 개선되거나 현지 소비층에 매력적인 프로모션 가격을 제안할 여력이 확보됩니다.",
      recommendation: "확보된 원가 마진 여력을 활용해 더블도어 냉장고 구매 고객 대상 대리점 수수료 인센티브를 확대하고, 우기 맞이 '세탁 & 살균 가전 특별전' 가격 할인을 전개하십시오.",
      link: "https://www.google.com/search?q=Sri+Lanka+Rupee+LKR+appreciation+finance"
    },
    {
      id: "ev_lk_2",
      title: "스리랑카 전력청, 순환 정전 조치 가능성 시사",
      date: "2026-06-18",
      country: "스리랑카",
      type: "News",
      source: "콜롬보 가제트",
      summary: "수력 발전 댐 인근 강수량 부족으로 인해 스리랑카 전력청이 하루 2시간의 산업용 순환 정전을 단행할 수 있음을 발표했습니다.",
      products: ["Refrigerator", "Washing Machine"],
      impactLevel: "High Impact",
      impactScore: 7,
      businessImpact: "콜롬보 조립 공장 가동 효율성이 하락하고 정전 우려에 따른 냉장고 신규 구매 수요가 위축될 수 있습니다.",
      recommendation: "자가 발전 설비 연료 비축량을 확보하고, 정전 후 복구 시 전기적 손상을 방지하는 전압 안전 제어기가 포함된 당사 가전의 내구성을 매장 마케팅에 적용하십시오.",
      link: "https://www.google.com/search?q=Sri+Lanka+power+cut+disruption"
    },
    {
      id: "ev_lk_3",
      title: "스리랑카 수입 가전 부품 통관 관세 장벽 완화 조정",
      date: "2026-06-15",
      country: "스리랑카",
      type: "Regulation",
      source: "스리랑카 세관 공보",
      summary: "정부는 가전 산업 육성을 위해 현지 반조립 생산(CKD) 방식으로 수입되는 모터 및 전자 회로 기판의 수입 관세율을 기존 15%에서 7.5%로 대폭 인하했습니다.",
      products: ["Refrigerator", "Washing Machine"],
      impactLevel: "Opportunity",
      impactScore: 8,
      businessImpact: "완성품 직접 수입 모델 대비 현지 조립 냉장고/세탁기 모델의 제조 원가 경쟁력이 크게 개선됩니다.",
      recommendation: "콜롬보 조립 품목(냉장고 중형, 세탁기 통돌이형) 비중을 20% 늘려 영업 이익 극대화를 추진하십시오.",
      link: "https://www.google.com/search?q=Sri+Lanka+appliance+import+tax"
    },

    // 5. 네팔 (3개)
    {
      id: "ev_np_1",
      title: "네팔 비르간지 국경 통관 시스템 장애로 가전 화물 대기",
      date: "2026-06-18",
      country: "네팔",
      type: "Logistics",
      source: "카트만두 포스트",
      summary: "인도-네팔 국경의 최대 통관항인 비르간지(Birgunj) 세관의 통관 위험관리시스템(CRMS) 서버 업그레이드 도중 오류가 발생해 약 400여 대의 화물 트럭이 통관 지체 상태로 억류되어 있습니다.",
      products: ["Refrigerator", "Washing Machine"],
      impactLevel: "Medium Impact",
      impactScore: 6,
      businessImpact: "인도 공장에서 네팔로 이송 중인 보급형 단문형 냉장고와 일반 이조식 세탁기 화물이 7일 이상 묶이게 되었습니다. 카트만두 쇼핑 주간의 재고 품절 리스크가 존재합니다.",
      recommendation: "세관 대리인을 통해 긴급 수동 통관 절차 신청을 완료하고, 카트만두 물류창고에 보유 중인 구형 재고를 시내 매장에 긴급 대체 출하하여 공백을 방어하십시오.",
      link: "https://www.google.com/search?q=Birgunj+customs+Nepal+India+border+delay"
    },
    {
      id: "ev_np_2",
      title: "네팔 몬순 시즌 도로 파손으로 농촌 지역 가전 배송 지연",
      date: "2026-06-20",
      country: "네팔",
      type: "Weather",
      source: "히말라얀 타임스",
      summary: "네팔 서부 지방의 산사태와 도로 유실로 인해 지방 소도시 대리점 향 냉장고 및 세탁기 화물 차량 배송이 무기한 대기 상태에 처했습니다.",
      products: ["Refrigerator", "Washing Machine"],
      impactLevel: "Medium Impact",
      impactScore: 6,
      businessImpact: "지방 딜러점의 가전 재고 부족이 발생하며, 성수기 배송 정체에 따른 취소 수량이 증가할 우려가 있습니다.",
      recommendation: "카트만두 외곽 터미널 물류창고 재고를 활용해 대체 조달하고, 지연 지역 대리점에는 배송 예정일을 투명하게 공유해 이탈을 방지하십시오.",
      link: "https://www.google.com/search?q=Nepal+landslide+road+block+monsoon"
    },
    {
      id: "ev_np_3",
      title: "네팔 정부 가전제품 소비세 감면 혜택 연장 확정",
      date: "2026-06-19",
      country: "네팔",
      type: "Regulation",
      source: "네팔 세무국 비즈니스 리포트",
      summary: "정부가 인플레이션 부담 완화 조치의 일환으로 백색가전 고효율 1등급 제품군에 적용되던 현지 부가세 및 특별 소비세 감면 조항을 1년 더 연장하기로 발표했습니다.",
      products: ["Refrigerator", "Washing Machine"],
      impactLevel: "Opportunity",
      impactScore: 8,
      businessImpact: "당사 인버터 가전 모델의 가격 경쟁력을 유지하고 신규 유입되는 구매층의 세제 혜택 유도가 가능합니다.",
      recommendation: "인버터 프리미엄 냉장고와 드럼 세탁기 판촉 인쇄물 및 홍보물에 '소비세 감면 수혜 모델' 태그를 부착해 판매 매력을 강조하십시오.",
      link: "https://www.google.com/search?q=Nepal+appliance+VAT+tax+policy"
    },

    // 6. 인도네시아 (3개)
    {
      id: "ev_id_1",
      title: "샤프, 인도네시아 맞춤형 절수형 세탁기 출시",
      date: "2026-06-19",
      country: "인도네시아",
      type: "Competitor Activities",
      source: "인도네시아 비즈니스 뉴스",
      summary: "샤프 인도네시아가 건기 물 부족과 수압 저하 문제를 겪는 교외 주택가를 겨냥해 적은 수압에서도 가동되는 '에코 샤워' 탑로드 세탁기 라인업을 출시했습니다. 판매 가격은 평균가 대비 12% 낮췄습니다.",
      products: ["Washing Machine"],
      impactLevel: "High Impact",
      impactScore: 7,
      businessImpact: "자카르타 서부 및 수마트라 교외 지역의 보급형 세탁기 판매 물량 유출이 우려됩니다. 당사의 주력 보급형 세탁기 점유율을 위협할 수 있습니다.",
      recommendation: "당사 세탁기의 저전압 보완 기능(Voltage Control)과 절전 기능을 전면에 내세우는 마케팅 메시지를 구성하고 엘렉트로닉시티(Electronic City)와 공동 프로모션을 개시하십시오.",
      link: "https://www.google.com/search?q=Sharp+Indonesia+Washing+Machine+Eco+Shower"
    },
    {
      id: "ev_id_2",
      title: "인도네시아 루피아화(IDR) 약세 지속에 따른 원가 상승 경보",
      date: "2026-06-20",
      country: "인도네시아",
      type: "Currency",
      source: "자카르타 포스트",
      summary: "글로벌 금리 변동성에 따른 안전 자산 선호로 인도네시아 루피아화 가치가 달러당 16,400루피아 선을 돌파하며 최근 1년 기준 가장 낮은 수치를 유지하고 있습니다.",
      products: ["Refrigerator", "Washing Machine"],
      impactLevel: "High Impact",
      impactScore: 8,
      businessImpact: "해외 공장에서 직수입되는 드럼세탁기 모델의 Landing 원가가 올라가 2분기 현지 영업이익 마진율이 위축됩니다.",
      recommendation: "수입 비중이 낮은 보급형 탑로더 세탁기 판매 확대를 추진하고, 수입 프리미엄 라인은 권장 소비자가 조정을 검토하십시오.",
      link: "https://www.google.com/search?q=Indonesian+Rupiah+IDR+weakness+import"
    },
    {
      id: "ev_id_3",
      title: "자카르타 탄중프리옥 항구 하역 크레인 고장 물류 정체 예보",
      date: "2026-06-18",
      country: "인도네시아",
      type: "Logistics",
      source: "인도네시아 로지스틱스 투데이",
      summary: "자카르타 탄중프리옥 항만 제2터미널의 하역 크레인 2대가 기술 결함으로 고장 나 입항 선박 컨테이너 하역 처리가 평소 대비 3일 이상 지연되고 있습니다.",
      products: ["Refrigerator", "Washing Machine"],
      impactLevel: "Medium Impact",
      impactScore: 6,
      businessImpact: "수출 입항 선박에 적재된 드럼세탁기 핵심 모듈의 공장 적기 운송 지연 우려가 있습니다.",
      recommendation: "수라바야 등 인근 대체 터미널로의 긴급 분산 하역을 선사와 조율하고, 조립 라인의 야간 긴급 근무 편성을 준비하십시오.",
      link: "https://www.google.com/search?q=Tanjung+Priok+port+delay+Jakarta"
    },

    // 7. 베트남 (3개)
    {
      id: "ev_vn_1",
      title: "베트남 정부, 냉장고 고효율 에너지 등급 의무제 시행",
      date: "2026-06-12",
      country: "베트남",
      type: "Regulation",
      source: "베트남 산업통상부(MOIT)",
      summary: "베트남 정부가 올 10월 1일부터 고효율 에너지 등급 최저 가이드라인을 의무 적용하기로 확정했습니다. 기준 성능 미달의 냉장고는 신규 유통이 금지됩니다.",
      products: ["Refrigerator"],
      impactLevel: "High Impact",
      impactScore: 8,
      businessImpact: "주요 가전 양판점(디엔마이싸인 등)에 진열되어 있는 구형 2스타/3스타 냉장고 재고 약 4,500대를 기한 전에 청산해야 하는 긴박한 상황입니다. 미처리 시 평가 손실 우려가 큽니다.",
      recommendation: "7-8월 휴가 시즌에 맞춰 구형 모델 대상 고액 보상 판매 및 땡처리 할인 행사를 전개하고, 신규 수입되는 5스타 인버터 프리미엄 냉장고 마케팅을 선제 조율하십시오.",
      link: "https://www.google.com/search?q=Vietnam+MOIT+refrigerator+energy+standards"
    },
    {
      id: "ev_vn_2",
      title: "베트남 호치민 깟라이 항구 빈 컨테이너 부족에 따른 적체 심화",
      date: "2026-06-19",
      country: "베트남",
      type: "Logistics",
      source: "베트남 익스프레스 비즈니스",
      summary: "깟라이 항만을 중심으로 수출입용 빈 컨테이너 부족 현상이 재발하여, 가전제품을 포함한 완성품 화물의 수출 선적 예약 대기 시간이 2주 이상 길어졌습니다.",
      products: ["Refrigerator", "Washing Machine"],
      impactLevel: "High Impact",
      impactScore: 7,
      businessImpact: "수출 냉장고 모델의 선적 대기 및 보관 창고료 발생 비용 부담이 늘어납니다. 수출 법인의 판매 매출 실적 인식이 미뤄질 리스크가 존재합니다.",
      recommendation: "선사와 벌크 컨테이너 사전 부킹 물량을 확대 확보하고 선적 대기 재고의 보관 조건 상태를 면밀히 점검하십시오.",
      link: "https://www.google.com/search?q=Cat+Lai+port+container+shortage"
    },
    {
      id: "ev_vn_3",
      title: "LG전자 베트남 하이퐁 공장 신규 세탁기 제조 라인 증설 통과",
      date: "2026-06-15",
      country: "베트남",
      type: "Competitor Activities",
      source: "베트남 투자 인베스트",
      summary: "LG전자가 하이퐁 가전 복합 단지 내에 프리미엄 스마트 드럼세탁기 제조 라인의 신규 투자를 정부로부터 승인받고 본격 증설 공사에 들어갔습니다.",
      products: ["Washing Machine"],
      impactLevel: "High Impact",
      impactScore: 8,
      businessImpact: "현지 로컬 가전 유통 채널 내 경쟁사의 공급력 확대로 당사 주력 모델들의 점유율 수성 부담이 늘어납니다.",
      recommendation: "증설 물량이 쏟아지기 전에 베트남 전국 핵심 대리점과의 선구매(Sell-in) 보증 물량 확보 계약을 체결해 시장을 선점하십시오.",
      link: "https://www.google.com/search?q=LG+Hai+Phong+factory+Vietnam"
    },

    // 8. 말레이시아 (3개)
    {
      id: "ev_my_1",
      title: "파나소닉 말레이시아 모터 및 부품 보증 기간 연장 단행",
      date: "2026-06-17",
      country: "말레이시아",
      type: "Competitor Activities",
      source: "스타비즈 말레이시아",
      summary: "파나소닉이 말레이시아 가전 시장 경쟁 우위를 점하기 위해 프리미엄 인버터 냉장고와 세탁기의 컴프레서/모터 무상 보증 기간을 12년으로, 일반 무상 부품 보증을 5년으로 연장 적용하는 프로모션을 한시 진행합니다.",
      products: ["Refrigerator", "Washing Machine"],
      impactLevel: "Medium Impact",
      impactScore: 5,
      businessImpact: "품질 신뢰성을 중시하는 현지 소비자 구매 성향상, 당사의 주력 드럼세탁기와 양문형 냉장고 점유율 방어에 제동이 걸릴 수 있습니다.",
      recommendation: "당사가 제공 중인 기본 10년 인버터 모터 품질 보증을 매장 홍보물(POP)에 강력히 강조하고 대형 체인 유통점 '센헹(Senheng)'과 합작하여 추가 1년 안심 케어 보험을 지원하십시오.",
      link: "https://www.google.com/search?q=Panasonic+Malaysia+compressor+motor+warranty"
    },
    {
      id: "ev_my_2",
      title: "말레이시아 링깃화 강세 반등에 따른 부품 수입 단가 인하 효과",
      date: "2026-06-20",
      country: "말레이시아",
      type: "Currency",
      source: "쿠알라룸푸르 비즈니스 타임스",
      summary: "외국계 포트폴리오 자금 유입 및 유가 반등 호재로 인해 말레이시아 링깃(MYR)화의 USD 대비 가치가 3.5% 상승하며 견조한 흐름을 지속하고 있습니다.",
      products: ["Refrigerator", "Washing Machine"],
      impactLevel: "Opportunity",
      impactScore: 8,
      businessImpact: "해외 핵심 인버터 칩셋 부품 및 수입 완제품 가전의 원화 기준 마진 이익율이 약 2.8% 개선됩니다.",
      recommendation: "원가 이익 상승폭을 활용해 링깃 강세 기념 '메가 셀(Mega Sale) 대축제'를 열어 냉장고/세탁기 판매 점유율 확대를 전개하십시오.",
      link: "https://www.google.com/search?q=Malaysian+Ringgit+MYR+news+forex"
    },
    {
      id: "ev_my_3",
      title: "도시바, 말레이시아 슬림형 프리미엄 세탁기 라인업 전격 투입",
      date: "2026-06-19",
      country: "말레이시아",
      type: "Competitor Activities",
      source: "말레이 메일 비즈",
      summary: "도시바 가전이 주거 공간이 좁은 말레이시아 아파트 환경에 맞춘 초슬림 드럼 세탁기 겸용 건조기 모델을 공식 론칭하고 적극 홍보에 나섰습니다.",
      products: ["Washing Machine"],
      impactLevel: "Medium Impact",
      impactScore: 6,
      businessImpact: "도심 거주 아파트 소비자층의 수요가 도시바 세탁기 신제품으로 이동할 가능성이 존재합니다.",
      recommendation: "당사의 빌트인 특화 슬림 세탁건조 모델을 매장 전면에 진열하고 소형 아파트 거주민 대상 무료 설치 이벤트를 실시하십시오.",
      link: "https://www.google.com/search?q=Toshiba+laundry+slim+washing+machine"
    },

    // 9. 필리핀 (3개)
    {
      id: "ev_ph_1",
      title: "슈퍼 태풍 '페피토' 루손섬 강타로 유통 매장 셧다운",
      date: "2026-06-22",
      country: "필리핀",
      type: "Disaster",
      source: "필리핀 PAGASA 기상국",
      summary: "최대 풍속 195km/h의 강력한 태풍 페피토가 필리핀 최대 인구 밀집 지역인 루손섬을 통과하며 대규모 침수와 전력망 파손 피해가 발생했습니다. 마닐라 등 주요 대도시 가전 매장들이 휴업에 돌입했습니다.",
      products: ["Refrigerator", "Washing Machine"],
      impactLevel: "Critical Risk",
      impactScore: 10,
      businessImpact: "필리핀 전체 가전 매출의 55%를 차지하는 루손 지역의 영업망이 마비되었습니다. 유통 창고가 정전 및 침수 피해 방지를 위해 운영을 중단하여 이번 달 실적이 최소 40% 이상 하락할 위기입니다.",
      recommendation: "해당 유통 딜러들에게 인도 지연 통보서를 신속히 발송하여 면책 처리를 진행하고, 태풍 복구 시즌에 즉각 가동 가능한 '수해 피해 세탁기 무상 서비스 및 케어 캠페인'을 기획해 브랜드 이미지를 제고하십시오.",
      link: "https://www.google.com/search?q=Typhoon+Pepito+Luzon+disruption"
    },
    {
      id: "ev_ph_2",
      title: "필리핀 물가 상승률 둔화세에 따른 가전 소비 심리 개선 조짐",
      date: "2026-06-18",
      country: "필리핀",
      type: "News",
      source: "마닐라 타임스",
      summary: "필리핀 통계청(PSA) 보고서에 따르면 식료품 및 에너지가 안정되면서 5월 필리핀 물가 상승률이 3.4%로 하향 안정화되어 가구 가처분 소득 여력이 늘어났습니다.",
      products: ["Refrigerator", "Washing Machine"],
      impactLevel: "Opportunity",
      impactScore: 8,
      businessImpact: "신규 주택 구입 및 노후 가전 교체 관련 신규 세탁기/냉장고 지출 심리가 확실하게 자극될 것으로 분석됩니다.",
      recommendation: "마닐라 내 백화점 채널들과 협력해 에너지 세이브 가전 특별 구매 기획전(0% 무이자)을 개시하여 소비 촉진을 활용하십시오.",
      link: "https://www.google.com/search?q=Philippines+inflation+rate+economic"
    },
    {
      id: "ev_ph_3",
      title: "필리핀 최대 양판점 아방슨(Abenson), 삼성 가전 파트너십 행사",
      date: "2026-06-20",
      country: "필리핀",
      type: "Competitor Activities",
      source: "마닐라 비즈니스 인콰이어러",
      summary: "삼성전자가 필리핀 전국에 체인을 둔 대표 양판점 Abenson과 손잡고 독점 주말 가전 박람회를 개시해 1등급 프리미엄 냉장고와 로봇 연계 세탁기를 특가 제공 중입니다.",
      products: ["Refrigerator", "Washing Machine"],
      impactLevel: "High Impact",
      impactScore: 7,
      businessImpact: "Abenson 매장 내 당사 진열 구역 방문 빈도가 낮아지고 주말 판매 회전율이 10% 이상 하락할 우려가 있습니다.",
      recommendation: "경쟁 유통 체인인 안손스(Anson's)와 매칭 형태의 특별 론칭 제휴 마케팅을 펼쳐 대응 판촉 밸런스를 맞추십시오.",
      link: "https://www.google.com/search?q=Abenson+Samsung+appliance+Philippines"
    },

    // 10. 인도 (3개)
    {
      id: "ev_in_1",
      title: "인도 재무부, 친환경 가전 소비세 한시 인하 추진",
      date: "2026-06-16",
      country: "인도",
      type: "News",
      source: "이코노믹 타임스 인디아",
      summary: "인도 정부가 디왈리 쇼핑 시즌을 겨냥해 에너지 효율 5성 등급 가전제품(냉장고, 세탁기)에 부과되던 품목별 GST 소비세를 현행 18%에서 12%로 대폭 감면해 주는 법안 도입을 추진 중입니다.",
      products: ["Refrigerator", "Washing Machine"],
      impactLevel: "Opportunity",
      impactScore: 9,
      businessImpact: "인도 최대 가전 성수기를 앞두고 고가 프리미엄 냉장고와 스마트 인버터 세탁기 수요가 대폭 폭발할 것으로 기대됩니다. 약 20-25%의 매출 신장 기회입니다.",
      recommendation: "푸네 및 노이다 제조 라인에서 에너지 등급 5스타 냉장고 모델의 생산 할당량을 늘려 대리점 재고를 조기 공급하고 세제 감면 홍보를 마케팅 캠페인에 즉각 적용하십시오.",
      link: "https://www.google.com/search?q=India+festive+energy+star+GST+rates"
    },
    {
      id: "ev_in_2",
      title: "인도 뭄바이 JNPT 항만 노조 연대 파업 예고로 통관 중단 리스크",
      date: "2026-06-22",
      country: "인도",
      type: "Logistics",
      source: "인디아 익스프레스",
      summary: "뭄바이 냐바셰바(JNPT) 항구의 하역 노조들이 임금 보장 및 복지 처우 개선을 요구하며 다음 주 월요일부터 48시간 전면 연대 파업에 돌입한다고 선언했습니다.",
      products: ["Refrigerator", "Washing Machine"],
      impactLevel: "High Impact",
      impactScore: 8,
      businessImpact: "뭄바이 공장 및 창고로 향하는 수입산 전자동 세탁기 모터 부품 콘트라 화물 처리가 올스톱되어 제조 생산 라인 가동 중지 리스크가 존재합니다.",
      recommendation: "파업 전 세관 통관을 통과한 긴급 부품은 육로로 즉시 수송 조치하고, 첸나이 등 남부 항구로 임시 선적지 변경을 진행하십시오.",
      link: "https://www.google.com/search?q=JNPT+port+strike+India"
    },
    {
      id: "ev_in_3",
      title: "인도 로컬 브랜드 하이얼(Haier), 지능형 스마트 냉장고 론칭 공격적 세일",
      date: "2026-06-20",
      country: "인도",
      type: "Competitor Activities",
      source: "인도 타임스 파이낸셜",
      summary: "Haier India가 로컬 인공지능 제어 냉각 기능을 장착한 지능형 스마트 냉장고 라인업을 파격적인 30% 출시 할인가와 현지 무료 배송 조건으로 대대적인 점유율 확대를 선언했습니다.",
      products: ["Refrigerator"],
      impactLevel: "High Impact",
      impactScore: 7,
      businessImpact: "인도 중산층 소비자의 관심을 선점해 당사의 양문형 스마트 냉장고 판매 상승세에 제동이 걸릴 리스크가 큽니다.",
      recommendation: "당사 냉장고의 더 우수한 에너지 보존 효율성과 위생 살균 스마트 인버터 컴프레서 특허 성능을 비교 홍보하는 바이럴 광고 캠페인을 긴급 전개하십시오.",
      link: "https://www.google.com/search?q=Haier+refrigerator+launch+India"
    },

    // 11. 대만 (3개)
    {
      id: "ev_tw_1",
      title: "LG전자 대만서 프리미엄 세탁기 특별 보증 캠페인 실시",
      date: "2026-06-22",
      country: "대만",
      type: "Competitor Activities",
      source: "대만 상업시보",
      summary: "LG전자가 대만 시장에서 AI DD 세탁기 제품군에 대해 모터 15년 무상 보증 및 스마트 진단 출장비 면제 프로모션을 발표했습니다. 경쟁사 제품 교체 고객에게 추가 할인 제공.",
      products: ["Washing Machine"],
      impactLevel: "High Impact",
      impactScore: 7,
      businessImpact: "경쟁사의 장기 보증 마케팅으로 인해 당사 드럼세탁기 프리미엄 라인의 판매 회전율이 5-7% 감소할 우려가 있습니다.",
      recommendation: "당사 DD 인버터 모터 기술의 우수성과 친환경 세척 인증을 강조하는 디지털 광고를 강화하고, 주요 백화점 채널에서 특별 케어 서비스 패키지 무상 증정 프로모션을 맞불 전개하십시오.",
      link: "https://www.google.com/search?q=LG+Taiwan+washing+machine+AI+DD"
    },
    {
      id: "ev_tw_2",
      title: "대만 경제부, 노후 가전 에너지 절약 보조금 예산 증액안 통과",
      date: "2026-06-18",
      country: "대만",
      type: "Regulation",
      source: "대만 연합보",
      summary: "대만 경제부(MOEA)가 고온 우기철 에너지 사용 감축을 위해 고효율 가전제품(냉장고, 세탁기 포함) 교체 시 가구당 최대 5,000 대만달러 보조금 예산을 추경 통과시켰습니다.",
      products: ["Refrigerator", "Washing Machine"],
      impactLevel: "Opportunity",
      impactScore: 8,
      businessImpact: "친환경 고성능 인버터 가전 모델의 잠재 교체 수요가 늘어나 유통 실적 증대에 호재로 작동합니다.",
      recommendation: "1등급 고성능 냉장고와 드럼 세탁기 제품군 유통 채널 보조금 신청 전담 부서를 조직해 딜러점의 가전 신청 편의성을 지원하십시오.",
      link: "https://www.google.com/search?q=Taiwan+MOEA+energy+saving+subsidy"
    },
    {
      id: "ev_tw_3",
      title: "대만 타이페이 시내 쇼핑몰 경쟁 브랜드 냉장고 로드쇼 활황",
      date: "2026-06-21",
      country: "대만",
      type: "Competitor Activities",
      source: "타이페이 위클리 비즈니스",
      summary: "파나소닉 대만 법인이 타이페이의 대표적인 백화점 쇼핑몰 로비 공간을 임대해 대대적인 프리미엄 냉장고 야외 가전 로드쇼를 열고 시연 판매 및 즉석 사은 혜택을 제공하고 있습니다.",
      products: ["Refrigerator"],
      impactLevel: "Medium Impact",
      impactScore: 6,
      businessImpact: "도심 핵심 유통점 고객 방문이 경쟁 브랜드 홍보관으로 유출되며 당사 냉장고 판매 기회가 일시 소폭 유실될 수 있습니다.",
      recommendation: "당사 매장 매니저들에게 비교 시연 브로셔를 배포하고, 타이페이 매장 방문 고객 대상 추가 무상 서비스 보증서(1년 연장) 증정 프로모션을 긴급 추가하십시오.",
      link: "https://www.google.com/search?q=Panasonic+refrigerator+roadshow+Taipei"
    },

    // 12. 중국 (3개)
    {
      id: "ev_cn_1",
      title: "중국 국가발전개혁위원회 가전제품 탄소 라벨링 신규 규제 발표",
      date: "2026-06-19",
      country: "중국",
      type: "Regulation",
      source: "신화통신",
      summary: "중국 당국이 10월부터 냉장고와 세탁기를 포함한 5대 백색가전 제품에 대해 저탄소 인증 라벨 부착을 의무화하는 법안을 통과시켰습니다. 기준 미달 제품은 판매 금지 처분.",
      products: ["Refrigerator", "Washing Machine"],
      impactLevel: "Critical Risk",
      impactScore: 9,
      businessImpact: "기존 보급형 모델 중 탄소 인증 미취득 제품 약 12,000대의 현지 유통 물량이 차단될 위험이 있습니다. 재고 자산 상각 비용이 발생할 수 있습니다.",
      recommendation: "생산 공장 시스템을 긴급 점검하여 탄소배출 측정 서류 제출을 완료하고, 미인증 보급형 모델의 물량을 8월 말까지 특별 프로모션을 통해 전량 소진하십시오.",
      link: "https://www.google.com/search?q=China+NDRC+carbon+labeling+appliance"
    },
    {
      id: "ev_cn_2",
      title: "중국 상하이 푸동 항만 폭우 영향 통관 적체 심화",
      date: "2026-06-20",
      country: "중국",
      type: "Weather",
      source: "상하이 해무 뉴스",
      summary: "상하이 인근 연안에 내린 돌발성 폭우와 짙은 해무로 인해 푸동 신항 입항 화물선의 하역 프로세스가 4일 이상 정체되며 컨테이너 지연 대란이 일고 있습니다.",
      products: ["Refrigerator", "Washing Machine"],
      impactLevel: "Medium Impact",
      impactScore: 6,
      businessImpact: "공장 생산라인 투입용 반도체 및 핵심 인버터 모듈 자재 수급에 단기 차질 우려가 발생합니다.",
      recommendation: "인접한 닝보항 등 대체 물류 항구 경유 가능성을 검토하고, 공장 안전 자재 보유 현황을 실시간 파악하십시오.",
      link: "https://www.google.com/search?q=Shanghai+port+weather+delay"
    },
    {
      id: "ev_cn_3",
      title: "메이디(Midea), 초슬림 AI 프리미엄 빌트인 냉장고 라인업 대대적 확대",
      date: "2026-06-18",
      country: "중국",
      type: "Competitor Activities",
      source: "중국 가전 경제 정보",
      summary: "중국 메이저 가전 기업 Midea가 벽면에 완전 밀착되는 두께 60cm 초슬림형 프리미엄 인공지능 빌트인 냉장고 모델군을 론칭하고 주요 성시 가전 매장 점유율 확장에 나섰습니다.",
      products: ["Refrigerator"],
      impactLevel: "High Impact",
      impactScore: 7,
      businessImpact: "중국 도심 신규 인테리어 빌트인 시장에서 당사 냉장고의 진열 매력이 뒤처져 매출 증가세가 둔화될 우려가 있습니다.",
      recommendation: "당사의 고효율 저소음 기술을 장착한 프리미엄 빌트인 라인 홍보 웹사이트 및 주요 라이브 커머스 특판 방송을 긴급 추가 전개하십시오.",
      link: "https://www.google.com/search?q=Midea+refrigerator+thin+built-in"
    },

    // 13. 호주 (3개)
    {
      id: "ev_au_1",
      title: "멜버른 및 시드니 주요 항구 파업 조짐으로 물류 운송 차질 예방 조치 필요",
      date: "2026-06-21",
      country: "호주",
      type: "Logistics",
      source: "호주 물류헤럴드",
      summary: "호주 해양항만노조(MUA)가 임금 협상 결렬로 오는 7월 초 주요 컨테이너 터미널에서 경고성 파업을 예고했습니다. 통관 처리 속도가 절반 이하로 감소할 것으로 전망.",
      products: ["Refrigerator", "Washing Machine"],
      impactLevel: "High Impact",
      impactScore: 8,
      businessImpact: "시드니/멜버른 항구에 입항 예정인 냉장고 및 드럼세탁기 초도 물량의 하역 작업이 최소 2주 이상 지연될 수 있습니다. 성수기 공급망 공백 우려.",
      recommendation: "브리즈번 등 대체 항구를 통한 우회 입항 루트를 검토하고, 호주 서부 및 남부 대리점의 안전 재고 비축 물량을 평시 대비 20% 상향 조정하십시오.",
      link: "https://www.google.com/search?q=Australia+maritime+union+MUA+port+strike"
    },
    {
      id: "ev_au_2",
      title: "호주 달러(AUD) 가치 약세로 수입 가전 Landed 단가 상승",
      date: "2026-06-20",
      country: "호주",
      type: "Currency",
      source: "호주 파이낸셜 리뷰",
      summary: "호주 연방은행의 기준금리 동결 여파로 호주 달러 가치가 USD 대비 3%대 하락세를 유지하며 수입 완제품 도매 단가에 경고등이 켜졌습니다.",
      products: ["Refrigerator", "Washing Machine"],
      impactLevel: "Medium Impact",
      impactScore: 6,
      businessImpact: "미국 달러 결제 방식으로 조달되는 세탁기 및 냉장고 수입 원가율 상승에 따라 분기 영업익 마진 보전 대책이 요구됩니다.",
      recommendation: "수입 계약 결제 통화 조건의 분산 변경을 선적 포워더와 재협의하고 고부가 양문형 냉장고 중심 프로모션 집중 전략을 구성하십시오.",
      link: "https://www.google.com/search?q=Australian+Dollar+AUD+forex+rates"
    },
    {
      id: "ev_au_3",
      title: "피셔앤페이켈(Fisher & Paykel), 하이엔드 모던 세탁건조 가전 번들 공세",
      date: "2026-06-19",
      country: "호주",
      type: "Competitor Activities",
      source: "시드니 모닝 헤럴드",
      summary: "뉴질랜드계 하이엔드 가전 메이커 Fisher & Paykel이 호주 대형 리테일러 'Harvey Norman'의 시드니 주요 매장에서 드럼세탁기+건조기 세트 특별 20% 캐시백 캠페인을 개시했습니다.",
      products: ["Washing Machine"],
      impactLevel: "High Impact",
      impactScore: 7,
      businessImpact: "호주 고소득층 드럼 세탁건조 콤보 수요층 유출에 따른 프리미엄 판매 실적 잠식 우려가 큽니다.",
      recommendation: "당사 세탁기의 뛰어난 에너지 효율 등급 및 스마트폰 연동 원격 의류 케어 장점을 매장 프로모터 교육에 강조하고 특별 보상가 판촉을 제안하십시오.",
      link: "https://www.google.com/search?q=Fisher+Paykel+laundry+bundle+Australia"
    },

    // 14. 뉴질랜드 (3개)
    {
      id: "ev_nz_1",
      title: "뉴질랜드 달러 약세로 완제품 수입 비용 상승 압박 가중",
      date: "2026-06-20",
      country: "뉴질랜드",
      type: "Currency",
      source: "뉴질랜드 헤럴드 비즈니스",
      summary: "뉴질랜드 중앙은행의 조기 금리 인하 기대감으로 뉴질랜드 달러(NZD) 가치가 USD 대비 4.2% 하락하여 최근 6개월 내 최저 수준을 기록하고 있습니다.",
      products: ["Refrigerator", "Washing Machine"],
      impactLevel: "Medium Impact",
      impactScore: 6,
      businessImpact: "달러 결제 기반 완제품 냉장고/세탁기 수입 비용이 즉각 상승하여 현지 법인의 영업이익률이 약 2.5% 악화될 수 있습니다.",
      recommendation: "현지 통화 결제 비중을 늘리기 위해 파트너 대리점 계약 조항을 조정하고, 고마진 대용량 냉장고 판매 비중을 넓혀 마진 하락분을 상쇄하십시오.",
      link: "https://www.google.com/search?q=New+Zealand+Dollar+NZD+exchange+rates+retail"
    },
    {
      id: "ev_nz_2",
      title: "뉴질랜드 정부 가전제품 친환경 에코 환급 제도 예산 통과",
      date: "2026-06-19",
      country: "뉴질랜드",
      type: "Regulation",
      source: "뉴질랜드 관보 국무보고",
      summary: "뉴질랜드 국회가 저탄소 친환경 전력망 유지를 위해 에너지스타 고등급 인버터 냉장고/세탁기 수입 관세를 3% 한시 면제해 주는 친환경 에코 법안을 의결했습니다.",
      products: ["Refrigerator", "Washing Machine"],
      impactLevel: "Opportunity",
      impactScore: 8,
      businessImpact: "관세 면제 혜택에 힘입어 수입 원가가 즉시 약 3% 인하되어 영업익이 회복되거나 특별 할인을 제안할 원가적 여건이 형성됩니다.",
      recommendation: "에너지 효율 등급이 가장 높은 프리미엄 모델군 수입 승인을 우선 추진해 현지 유통 마진 확장을 추진하십시오.",
      link: "https://www.google.com/search?q=New+Zealand+energy+star+tax+exemption"
    },
    {
      id: "ev_nz_3",
      title: "하비노만 뉴질랜드 지사, 보증 연장 케어 패키지 독점 전개",
      date: "2026-06-21",
      country: "뉴질랜드",
      type: "Competitor Activities",
      source: "오클랜드 비즈니스 타임스",
      summary: "유통 체인 Harvey Norman 뉴질랜드 지사가 경쟁사 스마트 세탁기 구매 시 무상 가전 점검 및 내부 세척 안심 서비스를 3년 제공하는 특별 패키지 프로모션을 시작했습니다.",
      products: ["Washing Machine"],
      impactLevel: "Medium Impact",
      impactScore: 6,
      businessImpact: "현지 세탁기 구매자의 보증 연장 및 관리 서비스 선호 성향으로 인해 당사 드럼세탁기 판매량이 압박을 받을 우려가 있습니다.",
      recommendation: "당사 인버터 세탁기 전용 10년 모터 기술 신뢰도 및 현지 출장 서비스망의 경쟁 우위를 점주 설득 및 판촉에 집중 활용하십시오.",
      link: "https://www.google.com/search?q=Harvey+Norman+New+Zealand+warranty+washer"
    }
  ]
};
