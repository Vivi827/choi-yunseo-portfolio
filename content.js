/* =========================================================================
   포트폴리오 내용은 전부 이 파일에서 고칩니다.
   - 〔 〕로 감싼 문구는 아직 자료가 없어 비워 둔 자리입니다. (사이트에서 점선 박스로 보임)
   - <br>은 줄바꿈, <b>는 굵게입니다.
   ========================================================================= */
var YS = window.YS = window.YS || {};

YS.profile = {
  name: '최윤서',
  nameEn: 'CHOI YUNSEO',
  email: 'yunyun827@naver.com',
  links: [
    ['GitHub · Vivi827', 'https://github.com/Vivi827'],
    ['GitHub · yunyun827', 'https://github.com/yunyun827'],
    ['LinkedIn', 'https://www.linkedin.com/in/yunyun827/']
  ]
};

/* ---------- 01. SELECTED WORK : 카드 + 상세 팝업 ---------- */
YS.work = [
  {
    id: 'actor-ai',
    index: '01',
    category: 'AI RESEARCH · PRODUCT',
    year: '2026',
    status: '진행 중',
    title: '배우의 인물 해석을 돕는<br>AI 인터랙션 연구',
    summary: '드라마투르기(작품·인물 분석) 방법론을 바탕으로,<br>배우가 인물을 해석하는 과정을 돕는 AI 시스템을 연구합니다.',
    art: 'script',
    tags: ['AI 인터랙션', 'Formative Study', 'IRB', '프로토타입'],
    detail: {
      kicker: 'AI RESEARCH · 2026 · 진행 중',
      intro: '배우가 대본 속 인물의 동기와 관계를 해석하는 과정은 대부분 혼자, 경험에 기대어 이루어집니다. 이 과정을 AI가 대신하는 것이 아니라, 더 좋은 질문을 던지며 함께 생각하도록 돕는 시스템을 연구하고 있습니다.',
      role: '연구 설계 · 프로토타입 기획 및 제작 〔역할 범위 확인〕',
      output: 'Phase 1 Formative Study 설계 · 프로토타입 · IRB 승인 〔산출물 확인〕',
      sections: [
        ['문제', '〔자료 필요: 배우들이 인물 해석에서 겪는 구체적 어려움 1~2문장〕'],
        ['접근', 'AI가 정답을 주는 대신, 드라마투르기의 분석 틀에 따라 배우에게 질문을 던지고 해석을 정리하도록 돕는 인터랙션을 설계합니다. 1단계에서는 배우들의 실제 해석 과정을 관찰하는 Formative Study를 진행합니다.'],
        ['내가 맡은 일', '〔자료 필요: 연구 질문 설정, 참여자 모집, 프로토타입 제작 등 본인 담당 범위〕'],
        ['AI PM으로서의 포인트', '기술이 아니라 사용자의 작업 흐름에서 출발했습니다. 사람이 판단해야 할 부분과 AI가 거들 부분을 나누는 것이 이 연구의 핵심 설계 결정입니다.']
      ],
      note: '현재 진행 중인 연구입니다. 결과는 아직 발표되지 않았습니다.'
    }
  },
  {
    id: 'pally',
    index: '02',
    category: 'AI SERVICE · PAPER',
    year: '2026',
    status: '논문 심사 중',
    title: 'Pally<br>〔한 줄 소개〕',
    summary: '한이음 팀 프로젝트로 만든 서비스.<br>제1저자로 논문을 작성해 투고했습니다.',
    art: 'paper',
    tags: ['한이음', '제1저자', '서비스 기획', '〔기술 스택〕'],
    detail: {
      kicker: '한이음 프로젝트 · 2026 · 논문 심사 중',
      intro: '〔자료 필요: Pally가 무엇을 하는 서비스인지, 누구의 어떤 문제를 푸는지 2~3문장〕',
      role: '제1저자 · 〔팀 내 역할〕',
      output: '논문 1편(투고, 심사 중) · 〔서비스 / 데모 / 발표 자료〕',
      sections: [
        ['문제', '〔자료 필요〕'],
        ['내가 맡은 일', '〔자료 필요: 기획, 실험 설계, 개발 중 담당한 것〕'],
        ['만든 것', '〔자료 필요: 서비스 화면 또는 시스템 구조도 이미지도 함께〕'],
        ['결과', '〔자료 필요: 실험 결과 수치 등. 논문이 심사 중이라 공개 범위는 확인 후 기재〕']
      ],
      note: '논문은 현재 심사 중입니다. 게재가 확정된 것이 아닙니다.'
    }
  },
  {
    id: 'mate',
    index: '03',
    category: 'LLM APP · 1인 기획·개발',
    year: '2023',
    title: 'MATE<br>My AI Teacher for English',
    summary: 'ChatGPT API로 영어 회화를 연습하는 앱.<br>기획부터 디자인, React Native 개발까지 혼자 했습니다.',
    art: 'chat',
    tags: ['ChatGPT API', 'React Native', 'Product Design', '1인 프로젝트'],
    video: 'uhS5ZTwNjCY',
    detail: {
      kicker: '1인 프로젝트 · 2023.09 – 2023.12',
      intro: '대화 상대가 없으면 영어 말하기는 늘지 않습니다. LLM을 대화 상대로 삼아, 부담 없이 회화를 연습할 수 있는 모바일 앱을 직접 기획하고 만들었습니다.',
      role: '기획 · 프로덕트 디자인 · UI 디자인 · 프론트엔드 개발 (기여도 100%)',
      output: 'React Native 앱 · 데모 영상 · GitHub 저장소',
      sections: [
        ['문제', '〔자료 필요: 기존 회화 학습 앱의 아쉬운 점, 타깃 사용자〕'],
        ['만든 것', 'ChatGPT API를 연결해 사용자와 영어로 대화하는 앱을 React Native로 개발했습니다. 〔주요 기능 2~3개〕'],
        ['AI PM으로서의 포인트', 'LLM을 실제 제품에 연결해 본 첫 경험입니다. 〔프롬프트 설계, 응답 품질, 비용 등 직접 부딪힌 문제가 있다면 여기에〕']
      ],
      links: [['데모 영상', 'https://youtu.be/uhS5ZTwNjCY']]
    }
  },
  {
    id: 'immersyn',
    index: '04',
    category: 'XR BRAND EXPERIENCE · PM',
    year: '2024',
    title: 'ImmerSyn · 90°C<br>차를 오감으로 만나는 XR 팝업',
    summary: '블렌딩 티의 이야기를 XR과 공감각으로 전달하는<br>팝업스토어 경험을 팀장으로 기획했습니다.',
    img: 'assets/work/xr-wide.jpg',
    tags: ['XREAL 학회', '팀장 · PM', 'XR', '유저 플로우'],
    detail: {
      kicker: 'XREAL 학회 공식 프로젝트 · 2024',
      intro: '팝업스토어는 많아졌지만, 브랜드가 무엇을 말하고 싶은지 기억에 남는 곳은 드뭅니다. 차 브랜드의 블렌딩 티 콘셉트를 XR 공간과 소리, 맛으로 함께 느끼게 하는 체험을 설계했습니다.',
      role: '팀장 · PM · 기획',
      output: '서비스 콘셉트 · 5단계 유저 플로우 · VR 공간 디자인',
      stats: [[64.9, '%', '팝업에서만 볼 수 있는<br>콘텐츠가 쏠쏠하다'], [57.6, '%', '브랜드의 정체성을<br>알 수 있어 좋았다'], [55, '%', '방문 후 브랜드에<br>호감이 생겼다']],
      statSource: '출처: 엠브레인 트렌드모니터 팝업스토어 조사',
      sections: [
        ['문제', '소비자는 팝업스토어에서 브랜드의 정체성을 느낄 때 호감을 갖지만, 대부분의 팝업은 상품 진열과 포토존에 머뭅니다. 브랜드 이미지를 감각적으로 기억하게 만드는 경험이 필요했습니다.'],
        ['핵심 콘셉트', '<b>Brand Influence + Sensory Memory.</b> 브랜드 이미지로 구매를 결정하는 소비 경향과, 공감각 경험이 감정적 기억을 강하게 남긴다는 점을 결합했습니다.'],
        ['유저 플로우', '준비하기 → 상상 자극하기(원재료를 표현한 색면추상과 ASMR) → 차를 느껴보기(시음과 함께 바뀌는 VR 공간) → 차를 마주하기(차의 이야기를 담은 티 카드) → 경험 음미하기(후기 작성). 체험 후 후기와 공유가 자연스럽게 이어지도록 설계했습니다.'],
        ['내가 맡은 일', '팀장으로서 문제 정의와 콘셉트 방향을 잡고, 유저 플로우를 설계했습니다. 〔일정 관리, 역할 분배 등 PM으로 한 일 추가〕']
      ],
      gallery: ['assets/work/xr-background.jpg', 'assets/work/xr-flow.jpg'],
      note: '학회 프로젝트로 진행한 콘셉트 제안입니다. 〔실제 브랜드와의 협업 여부 확인 후 수정〕'
    }
  },
  {
    id: 'core',
    index: '05',
    category: 'SOCIAL IMPACT APP · PRODUCT DESIGN',
    year: '2024',
    title: 'CO-RE<br>함께 모으는 우유팩 재활용',
    summary: '동네 우유팩 수거함과 연결된 재활용 커뮤니티 앱.<br>Google GDSC Solution Challenge 출품작입니다.',
    img: 'assets/work/core-cover.jpg',
    tags: ['GDSC Solution Challenge', 'Product Design', 'Design System'],
    detail: {
      kicker: 'GOOGLE GDSC SOLUTION CHALLENGE · 2024',
      intro: '우유팩은 따로 모으면 화장지로 다시 태어나지만, 씻고 말려 수거함까지 가져가는 과정이 번거로워 대부분 일반 쓰레기가 됩니다. 혼자 하면 귀찮은 일을 동네가 함께 하는 일로 바꾸는 앱을 설계했습니다.',
      role: '프로덕트 디자이너 · UI/UX 디자이너',
      output: '앱 UI 전체 · 디자인 시스템(컬러, 타이포, 아이콘, 컴포넌트)',
      sections: [
        ['문제', '우유팩은 종류(멸균팩, 살균팩)에 따라 배출 방법이 다르고, 준비 과정이 번거로워 참여가 꾸준히 이어지지 않습니다.'],
        ['해결', '<b>알려주기:</b> 팩 종류별 구성 성분과 배출 4단계(비우기, 씻기, 펼치기, 말리기)를 카드로 안내합니다.<br><b>함께 하기:</b> 아파트 단위 누적 수거량, 지역 랭킹, 미션과 레벨로 이웃과 함께 참여하는 동기를 만듭니다.'],
        ['만든 것', '홈, 팩 종류 안내, 배출 방법, 지역 랭킹, 미션, 기록 화면과 이를 묶는 디자인 시스템을 만들었습니다.'],
        ['결과', '〔자료 필요: 대회 결과, 사용자 테스트 반응 등〕']
      ],
      gallery: ['assets/work/core-screens.jpg', 'assets/work/core-system.jpg']
    }
  }
];

/* ---------- 02. DEMO & STAGE : 가로 스크롤 카드 ---------- */
YS.reel = [
  { id: 'mate-demo', title: 'MATE 데모', meta: 'LLM APP · 2023', youtube: 'uhS5ZTwNjCY', ar: '16 / 9' },
  { id: 'xr-scene', title: '90°C XR 공간', meta: 'XR · 2024', img: 'assets/work/xr-night.jpg', ar: '1 / 1', open: 'immersyn' },
  { id: 'market-demo', title: '이화마켓 데모', meta: 'WEB · 2023', youtube: 'XjfWpTsjR-g', ar: '16 / 9' },
  { id: 'lego', title: 'LEGO 2022 Highlights', meta: 'WEB DESIGN · 2024', img: 'assets/work/lego-landing.jpg', ar: '9 / 16', open: 'lego' },
  { id: 'stage', title: '〔공연 · 연기 영상〕', meta: 'STAGE', placeholder: true, ar: '4 / 5' }
];

/* ---------- 아카이브 상세 (카드 대신 리스트에서 여는 프로젝트) ---------- */
YS.extra = {
  lego: {
    kicker: '개인 프로젝트 · 2024.02 – 2024.05',
    title: 'LEGO 2022<br>성과 보고 하이라이트 페이지',
    intro: '레고의 연간 보고서는 정보가 너무 많아 읽기 어렵습니다. 핵심 수치만 빠르게 보고 싶은 사람들을 위해 하이라이트 웹페이지를 다시 설계했습니다.',
    role: '기획 · 유저 리서치 · 디자인',
    output: '페르소나 3종 · IA 재설계 · 디자인 시스템 · 랜딩 및 상세 페이지',
    sections: [
      ['리서치', '마케팅 전공생, 레고 입사를 준비하는 취업 준비생, 장난감 업계 실무자. 세 페르소나 모두 "보고서가 너무 방대하다"는 공통 불편을 가졌고, 원하는 정보의 깊이는 서로 달랐습니다.'],
      ['설계', '중요 수치만 강조하도록 정보 위계를 다시 세우고, Strategies, Innovations, Financial Review 세 갈래로 IA를 재구성했습니다. 랜딩에서 실제 보고서로 이어지는 버튼으로 다음 행동을 유도했습니다.'],
      ['디자인', '브릭과 조립이라는 레고의 정체성을 그래픽 요소로 만들고, 컬러풀한 배경과 놀이 같은 인터랙션을 적용했습니다.']
    ],
    gallery: ['assets/work/lego-screens.jpg', 'assets/work/lego-ia.jpg', 'assets/work/lego-persona.jpg']
  },
  travel: {
    kicker: '제작 의뢰 · 〔연도〕',
    title: '360 Travel Days<br>여행 커뮤니티 사이트 재설계',
    intro: '여행 이야기를 나누는 커뮤니티 사이트를, 주 사용층인 40대 이상이 직관적으로 읽을 수 있도록 다시 설계하고 Webflow로 배포했습니다.',
    role: '기획 · 디자인 · Webflow 제작',
    output: '랜딩 · 아티클 목록 · 아티클 상세 · 참여(작성) 페이지',
    sections: [
      ['문제', '기존 사이트는 정보가 흩어져 있고 읽기 어려웠습니다. 꼭 필요한 여행 정보만 남기고 정보 구조를 다시 짰습니다.'],
      ['해결', '랜딩에는 가로로 움직이는 카드와 호버 효과로 클릭을 유도하고, 아티클 페이지는 사진 크기를 세로 기준으로 고정해 가독성을 높였습니다. 참여 페이지에서는 입력할 정보와 안내 문구를 명확히 구분했습니다.']
    ],
    gallery: ['assets/work/travel-pages.jpg']
  },
  market: {
    kicker: '오픈소스 플랫폼 프로젝트 · 2023.09 – 2023.12',
    title: '이화마켓<br>교내 중고거래 웹',
    intro: '커뮤니티 게시판에서 이루어지던 교내 중고거래를, 사진과 상태를 한눈에 보고 믿고 거래할 수 있는 전용 웹으로 만들었습니다.',
    role: '프론트엔드 개발 · 프로덕트 디자인 (기여도 40%)',
    output: '배포된 웹사이트 · 데모 영상 · GitHub 저장소',
    sections: [
      ['문제', '게시판에서는 사진과 상품 정보를 확인하기 어렵고, 중고거래에서 가장 중요한 신뢰를 확인할 방법이 없었습니다.'],
      ['해결', '중고거래 신뢰도 연구를 근거로 리뷰 기능을 추가하고, 마이페이지에 리뷰 작성 바로가기를 넣어 참여를 유도했습니다. 상품 상태 표현은 "상/중/하" 대신 "great/good/so-so"로 바꿔 부정적인 인상을 줄였습니다.']
    ],
    links: [['데모 영상', 'https://youtu.be/XjfWpTsjR-g']]
  }
};

/* ---------- 04. ARCHIVE ---------- */
YS.archive = [
  { year: '2026', label: 'AI와 연구', items: [
    ['배우의 인물 해석을 돕는 AI 인터랙션 연구', 'Formative Study 설계, 프로토타입 제작. IRB 승인.', 'actor-ai'],
    ['Pally 논문 제1저자', '한이음 프로젝트. 투고 후 심사 중.', 'pally'],
    ['〔2025–2026 활동 추가〕', '〔인턴, 대외활동, 공모전 등〕']
  ]},
  { year: '2024', label: '경험을 설계하다', items: [
    ['ImmerSyn · 90°C', 'XREAL 학회. 팀장 · PM. XR 공감각 팝업 기획.', 'immersyn'],
    ['CO-RE', 'Google GDSC Solution Challenge. 프로덕트 디자인, 디자인 시스템.', 'core'],
    ['LEGO 2022 Highlights', '개인 프로젝트. 리서치, IA 재설계, 웹 디자인.', 'lego'],
    ['360 Travel Days', '제작 의뢰. 사이트 재설계 및 Webflow 배포.', 'travel'],
    ['지구의 날 웹사이트 리디자인', '개인 프로젝트. UI/UX, 브랜드 디자인.']
  ]},
  { year: '2023', label: '직접 만들기 시작하다', items: [
    ['MATE', '1인 프로젝트. ChatGPT API 영어 회화 앱 기획 · 개발.', 'mate'],
    ['이화마켓', '오픈소스 팀 프로젝트. 프론트엔드, 프로덕트 디자인.', 'market'],
    ['캠멍', '5인 유저 리서치 팀. 캠퍼스 휴식 공간 UX 리서치.'],
    ['김새싹', '구글 스프린트 프로젝트 6인 팀. 프로덕트 디자인, 유저 테스트.']
  ]}
];
