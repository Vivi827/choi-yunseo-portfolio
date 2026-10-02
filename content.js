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
    id: 'pally',
    index: '01',
    category: 'AI SERVICE · PM',
    year: '2026',
    status: '라이브 데모',
    title: 'Pally<br>말투에 따라 성격이 바뀌는 AI 회화 친구',
    summary: '사용자의 말투를 5개 축으로 읽어 캐릭터의 모양·색·말투를 바꾸는<br>음성 영어 회화 서비스. 4인 팀의 PM으로 기획부터 배포까지 이끌었습니다.',
    img: 'assets/work/pally-cover.jpg',
    tags: ['PM · 기획 · QA', 'Gemini 2.5 Flash', 'STT / TTS', '배포 완료', '논문 제1저자'],
    detail: {
      kicker: '이화여대 캡스톤디자인 (산학 트랙) · 팀 퓨터(puter8) · 2026',
      title: 'Pally<br>말투에 따라 성격이 바뀌는 AI 회화 친구',
      video: 'Ptlq6SM4C6g',
      intro: '영어 회화 앱은 질문에 답은 해 주지만, 내가 어떻게 말하는지는 반영하지 않습니다. 그래서 대화가 "정해진 챗봇 응답"처럼 느껴집니다. Pally는 사용자의 말투가 쌓일수록 캐릭터의 성격이 함께 변하는, 정서적 유대감으로 꾸준한 학습을 이끄는 회화 친구입니다.',
      role: 'PM · 서비스 기획 · QA (4인 팀: PM 1, BE·AI 파이프라인 1, AI 엔진·렌더러 1, FE·디자인 1)',
      output: '음성 회화 웹 서비스 MVP(Vercel·Railway 배포) · 데모 영상 · CHARACTER MATRIX 엔진 · 후속 연구 논문(제1저자, 심사 중)',
      sections: [
        ['문제', '기존 회화 서비스는 사용자의 말투, 친밀도, 에너지, 질문 성향을 거의 반영하지 않습니다. 사용자는 "나에게 맞춘 대화"가 아니라 획일적인 응답을 받고, 그래서 학습이 오래 이어지지 않습니다.'],
        ['해결', '사용자 발화를 <b>Formality · Energy · Intimacy · Humor · Curiosity</b> 5개 축으로 수치화하고, 자체 설계한 <b>CHARACTER MATRIX</b>로 캐릭터 파라미터(말투·활발함·유머)로 바꿉니다. EMA 보정으로 성격이 한 턴에 급변하지 않게 했고, 그 결과가 Pally의 모양·색·표정과 응답 말투에 바로 반영됩니다.'],
        ['사용 흐름', '마이크로 영어 한 문장 말하기 → 음성 인식(Google STT) → Gemini 2.5 Flash 응답 → 음성 재생(TTS). 틀린 문장은 지적하지 않고 올바른 표현을 섞어 자연스럽게 되받아 주며, 화면 아래에는 한국어 힌트가 뜹니다. 세션을 끝내면 대화가 쌓여 바뀐 최종 Pally를 공개합니다.'],
        ['내가 맡은 일', 'PM으로서 문제 정의와 서비스 방향, 기능 범위를 정하고 팀 일정과 의사결정을 이끌었습니다. 데모 직전 QA 체크리스트로 전체 흐름을 검증했습니다. 〔직접 내린 핵심 결정 1~2개 추가: 예) 규칙 기반 엔진을 먼저 만든 이유〕'],
        ['후속 연구', 'Pally의 발화 분석이 속어·중의적 표현을 잘못 읽는 문제를 출발점으로 후속 연구를 설계했고, 제1저자로 논문을 투고했습니다. 〔논문 제목·학회명 확인 후 기재〕'],
        ['AI PM으로서의 포인트', '외부 모델 호출에 기대지 않고, "말투 → 5축 점수 → 캐릭터"라는 설명 가능한 변환 구조를 제품의 핵심으로 잡았습니다. 2023년 혼자 만든 영어 회화 앱 MATE에서 시작한 질문을 팀 프로젝트로 키운 결과입니다.']
      ],
      gallery: ['assets/work/pally-screens.jpg', 'assets/work/pally-architecture.png'],
      links: [
        ['라이브 데모 (모바일 화면)', 'https://capstone-eight-virid.vercel.app/home'],
        ['데모 영상', 'https://youtu.be/Ptlq6SM4C6g'],
        ['GitHub', 'https://github.com/Vivi827/capstone']
      ],
      note: '이화여대 캡스톤디자인 팀 프로젝트입니다. 논문은 현재 심사 중이며 게재가 확정된 것이 아닙니다.'
    }
  },
  {
    id: 'actor-ai',
    index: '02',
    category: 'HCI RESEARCH · AI INTERACTION',
    year: '2026',
    status: '진행 중',
    title: '배우의 캐릭터 해석을 돕는<br>드라마투르기 기반 AI',
    summary: '대본 곳곳에 흩어진 인물 정보를 배우가 직접 연결하고,<br>AI가 그 해석에 맞는 레퍼런스로 시야를 넓혀 주는 시스템을 연구합니다.',
    art: 'script',
    tags: ['HCI 연구', '공동연구자', 'Formative Study', 'Think-Aloud'],
    detail: {
      kicker: 'HCI RESEARCH · 이화여대 융합콘텐츠학과 · 2026 – 2027 · 진행 중',
      title: '배우의 캐릭터 해석을 돕는<br>드라마투르기 기반 AI',
      intro: '배우는 인물의 과거, 관계, 사건을 대본 여러 장면에서 찾아 하나의 해석으로 엮습니다. 기존 AI 도구는 배우의 생각을 정리해 주거나 새 자료를 던져 주는 데 그쳐, 해석을 넓히기도 연결하기도 어렵습니다. 배우가 만든 해석을 출발점으로 삼아 드라마투르기(극작법)의 시각으로 확장을 돕는 시스템을 설계하고 평가합니다.',
      role: '공동연구자 · 연구 설계 · 프로토타입 기획 (2인 연구팀, 지도교수 1인) 〔본인 담당 범위 확인〕',
      output: '연구계획서(인간대상연구, v1.1) · Phase 1 형성 연구 설계 · 초기 프로토타입',
      sections: [
        ['연구 질문', '<b>RQ1.</b> 흩어진 캐릭터 정보를 하나의 서사적 흐름으로 연결하는 상호작용은 배우의 해석을 어떻게 돕는가?<br><b>RQ2.</b> 배우의 해석을 바탕으로 AI가 제공하는 드라마투르기적 레퍼런스(관련 작품, 공연 사례, 배우 인터뷰)는 기존 해석을 확장하는 데 어떻게 쓰이는가?'],
        ['연구 설계', '<b>Phase 1 형성 연구</b> — 배우 최대 5명, 반구조화 인터뷰와 초기 프로토타입 Think-Aloud로 해석 과정과 어려움을 파악합니다.<br><b>Phase 2 시스템 개발</b> — 형성 연구에서 도출한 디자인 요구사항을 반영합니다.<br><b>Phase 3 시스템 평가</b> — 배우 최대 33명이 실제 장면으로 전체 흐름을 사용하는 형성적 사용자 평가를 진행합니다.'],
        ['내가 맡은 일', '〔자료 필요: 예) 선행연구 정리, 인터뷰 가이드 작성, 프로토타입 제작 중 본인 담당〕'],
        ['왜 이 연구인가', '희곡을 쓰고 무대에 서는 사람으로서 직접 겪는 문제입니다. AI가 해석을 대신하지 않고, 사람이 판단할 부분과 AI가 거들 부분을 나누는 것이 이 연구의 핵심 설계 결정입니다.']
      ],
      note: '현재 진행 중인 연구입니다. 결과는 아직 발표되지 않았습니다.'
    }
  },
  {
    id: 'mate',
    index: '03',
    category: 'LLM APP · 1인 기획·개발',
    year: '2023',
    title: 'MATE<br>My AI Teacher for English',
    summary: '말하고 들으며 영어 회화를 연습하는 AI 선생님 앱.<br>기획부터 디자인, React Native 개발까지 혼자 했습니다.',
    art: 'chat',
    tags: ['OpenAI API', 'React Native', 'Design System', '1인 프로젝트'],
    video: 'uhS5ZTwNjCY',
    detail: {
      kicker: '1인 프로젝트 · 2023.09 – 2023.12',
      title: 'MATE<br>My AI Teacher for English',
      intro: '대화 상대가 없으면 영어 말하기는 늘지 않습니다. AI 선생님에게 직접 말하고 음성으로 답을 들으며 회화를 연습하는 모바일 앱을 혼자 기획하고 만들었습니다.',
      role: '기획 · 프로덕트 디자인 · 디자인 시스템 · 프론트엔드 개발 (기여도 100%)',
      output: 'React Native 앱 · 디자인 시스템 · 데모 영상 · GitHub 저장소',
      sections: [
        ['만든 것', '음성으로 말하면 OpenAI API가 답하고, 그 답을 다시 음성으로 들려주는 회화 연습 앱입니다. 녹음, 응답 대기, 음성 재생 상태를 화면에서 구분할 수 있게 디자인 시스템을 따로 정리했습니다.'],
        ['만든 방식', '공개 튜토리얼(Code with Nomi)을 참고해 시작하고, 영어 회화 연습이라는 목적에 맞게 화면과 흐름을 직접 설계했습니다. 〔튜토리얼과 달리 직접 바꾼 부분 추가〕'],
        ['이후', '이때 남은 질문, "왜 AI는 내가 어떻게 말하는지는 신경 쓰지 않을까?"가 2026년 팀 프로젝트 Pally로 이어졌습니다.']
      ],
      links: [['데모 영상', 'https://youtu.be/uhS5ZTwNjCY'], ['GitHub', 'https://github.com/yunyun827/My-AI-Teacher-for-English']]
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
  { id: 'pally-demo', title: 'Pally 데모', meta: 'AI SERVICE · 2026', youtube: 'Ptlq6SM4C6g', ar: '16 / 9' },
  { id: 'mate-demo', title: 'MATE 데모', meta: 'LLM APP · 2023', youtube: 'uhS5ZTwNjCY', ar: '16 / 9' },
  { id: 'xr-scene', title: '90°C XR 공간', meta: 'XR · 2024', img: 'assets/work/xr-night.jpg', ar: '1 / 1', open: 'immersyn' },
  { id: 'market-demo', title: '이화마켓 데모', meta: 'WEB · 2023', youtube: 'XjfWpTsjR-g', ar: '16 / 9' },
  { id: 'lego', title: 'LEGO 2022 Highlights', meta: 'WEB DESIGN · 2024', img: 'assets/work/lego-landing.jpg', ar: '9 / 16', open: 'lego' },
  { id: 'stage', title: '〔공연 · 연기 영상〕', meta: 'STAGE', placeholder: true, ar: '4 / 5' }
];

/* ---------- 아카이브 상세 (카드 대신 리스트에서 여는 프로젝트) ---------- */
YS.extra = {
  tiny: {
    kicker: '이화여대 인공지능 프로젝트 수업 · 2026.1학기',
    title: 'Tiny-ImageNet 200<br>처음부터 학습한 이미지 분류 모델',
    intro: '사전학습 가중치 없이, 파라미터 500만 개 이하라는 제약 안에서 200개 클래스 이미지 분류 모델을 직접 설계하고 학습했습니다. 목표는 비공개 테스트셋 top-1 정확도 70%였습니다.',
    role: '모델 설계 · 학습 · 실험 · 보고서 작성',
    output: 'ResNet 계열 모델(447만 파라미터) · 학습 노트북 3버전 · 보고서',
    stats: [[69.18, '%', '리더보드 top-1 정확도<br>(v3 제출본)'], [69.78, '%', '공개 검증셋 정확도<br>(SWA + 10-view TTA)'], [4.47, 'M', '파라미터 수<br>(제약 5M 이하)']],
    statSource: '출처: 프로젝트 보고서',
    sections: [
      ['접근', 'ResNet-18과 같은 블록 구성을 64×64 입력에 맞게 줄이고, 평가용 가중치는 EMA로 따로 유지했습니다.'],
      ['반복 실험', '<b>v1</b> 기본 레시피 68.86% → <b>v2</b> 정규화를 강화했더니 오히려 68.28%로 하락 → <b>v3</b> 정규화를 완화하고 SWA와 10-view TTA를 더해 69.78%. 목표 70% 직전까지 도달했고, 무엇이 효과가 있었고 없었는지를 보고서에 그대로 기록했습니다.'],
      ['배운 것', '모델을 직접 학습시켜 보면서 정확도, 비용, 제약 사이의 트레이드오프를 숫자로 판단하는 법을 익혔습니다. AI 제품을 기획할 때 "어디까지가 가능한가"를 가늠하는 기준이 됩니다.']
    ],
    gallery: ['assets/work/tiny-curve.png'],
    links: [['GitHub', 'https://github.com/Vivi827/tiny-imagenet-scratch']]
  },
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
    links: [['데모 영상', 'https://youtu.be/XjfWpTsjR-g'], ['GitHub', 'https://github.com/yunyun827/ewha-market']]
  }
};

/* ---------- 04. ARCHIVE ---------- */
YS.archive = [
  { year: '2026', label: 'AI 서비스와 연구', items: [
    ['Pally', '캡스톤디자인(산학). PM · 기획 · QA. 음성 AI 회화 서비스 배포.', 'pally'],
    ['Pally 후속 연구 논문 제1저자', '투고 후 심사 중.', 'pally'],
    ['배우의 캐릭터 해석을 돕는 AI 연구', '공동연구자. 인간대상연구 계획서 작성, 형성 연구 설계.', 'actor-ai'],
    ['Tiny-ImageNet 이미지 분류 모델', '인공지능 프로젝트 수업. 447만 파라미터, top-1 69.18%.', 'tiny'],
    ['〔2025–2026 활동 추가〕', '〔인턴, 대외활동, 공모전 등〕']
  ]},
  { year: '2024', label: '경험을 설계하다', items: [
    ['ImmerSyn · 90°C', 'XREAL 학회. 팀장 · PM. XR 공감각 팝업 기획.', 'immersyn'],
    ['CO-RE', 'Google GDSC Solution Challenge. 프로덕트 디자인, 디자인 시스템.', 'core'],
    ['LEGO 2022 Highlights', '개인 프로젝트. 리서치, IA 재설계, 웹 디자인.', 'lego'],
    ['360 Travel Days', '제작 의뢰. 사이트 재설계 및 Webflow 배포.', 'travel'],
    ['지구의 날 웹사이트 리디자인', '개인 프로젝트. UI/UX, 브랜드 디자인.'],
    ['XREAL 알고리즘 스터디 · 코드트리 TIL', '알고리즘 문제 풀이와 코드 리뷰를 꾸준히 기록.']
  ]},
  { year: '2023', label: '직접 만들기 시작하다', items: [
    ['MATE', '1인 프로젝트. 음성 AI 영어 회화 앱 기획 · 디자인 · 개발.', 'mate'],
    ['이화마켓', '오픈소스 팀 프로젝트. 프론트엔드, 프로덕트 디자인.', 'market'],
    ['두배틀 (DoBattle)', '친구와 배틀하며 목표를 달성하는 서비스 팀 프로젝트. 〔역할〕'],
    ['캠멍', '5인 유저 리서치 팀. 캠퍼스 휴식 공간 UX 리서치.'],
    ['김새싹', '구글 스프린트 프로젝트 6인 팀. 프로덕트 디자인, 유저 테스트.']
  ]}
];
