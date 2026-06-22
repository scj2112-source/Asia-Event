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

  // High-fidelity fallback/default dataset (Korean Localized)
  defaultEvents: [
    {
      id: "ev_sg_1",
      title: "삼성 비스포크 AI 냉장고 싱가포르 출시 및 프로모션",
      date: "2026-06-20",
      country: "싱가포르",
      type: "Competitor Activities",
      source: "싱가포르 테크 리테일 가제트",
      summary: "삼성전자가 싱가포르 시장에 인공지능(AI)을 탑재한 프리미엄 비스포크 냉장고 신제품군을 출시했습니다. 대대적인 중고 보상 판매(Trade-in) 프로모션 및 최대 36개월 무이자 할부를 함께 제공하며 프렌치도어 냉장고 구매 시 공기청정기를 무상 번들 제공 중입니다.",
      products: ["Refrigerator"],
      impactLevel: "High Impact", // Opportunity, Medium Impact, High Impact, Critical Risk
      impactScore: 7,
      businessImpact: "경쟁사의 공격적인 판촉 행사는 싱가포르 가전 대리점 내 당사의 프리미엄 프렌치도어 냉장고 매출에 타격을 줄 우려가 있습니다. 적기 대응이 없을 경우 당사 프리미엄 판매 실적이 8-10%가량 일시 감소할 위험이 있습니다.",
      recommendation: "당사 매칭 캐시백 이벤트('스마트 쿨 업그레이드')를 긴급 기획하고 하비노만(Harvey Norman) 및 베스트덴키(Best Denki) 등 주요 유통 매장의 황금 매대(A급 진열 공간)를 선점 협의하십시오.",
      link: "https://www.google.com/search?q=Samsung+Bespoke+AI+Refrigerator+Singapore"
    },
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
    // New Countries Added Default Events
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
    }
  ]
};
