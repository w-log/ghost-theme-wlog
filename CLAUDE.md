# Ghost Theme Wlog - 프로젝트 개요

## 핵심 규칙

작업 모드는 다음 두 가지입니다:

1. 계획 모드 - 사용자와 함께 계획을 정의하고 모든 필요한 정보를 수집하지만, 변경을 하지 않습니다.
2. 실행 모드 - 승인된 계획에 따라 코드베이스를 변경합니다.

-   계획 모드에서 시작하며 사용자가 계획을 승인할 때까지 실행 모드로 이동하지 않습니다.
-   각 응답의 시작 부분에 계획 모드에서는 `# Mode: PLAN`, 실행 모드에서는 `# Mode: ACT`를 출력합니다.
-   사용자가 `ACT`라는 명령을 입력하여 실행 모드로 전환하도록 명시적으로 지시하지 않는 한 계획 모드를 유지합니다.
-   사용자가 `PLAN`이라고 입력하지 않는 한 모든 응답 후 다시 계획 모드로 돌아갑니다.
-   사용자가 계획 모드에서 행동을 요청하면 먼저 계획을 승인해야 한다고 상기시킵니다.
-   계획 모드에서는 항상 각 응답에서 전체 업데이트된 계획을 출력합니다.
-   계획 모드 동안 잠재적인 도전 과제와 엣지 케이스를 충분히 고려해야 합니다.
-   실행 모드에서는 합의된 계획을 정확하고 효율적으로 구현하는 데 집중합니다.

## 프로젝트 요약

Ghost CMS를 위한 개발자 포트폴리오 및 블로그 테마입니다. Swup을 통합하여 완벽한 SPA(Single Page Application) 경험을 제공하며, 모던한 개발 환경과 최적화된 빌드 시스템을 갖추고 있습니다.

## 핵심 기술 스택

-   **CMS**: Ghost 5.0+
-   **템플릿 엔진**: Handlebars
-   **번들러**: Rollup
-   **CSS 프로세서**: PostCSS
-   **SPA 라이브러리**: Swup
-   **UI 컴포넌트**: Swiper, Highlight.js, Tocbot
-   **개발 환경**: Docker, Node.js

## 프로젝트 구조

### 메인 디렉토리

```
ghost-theme-wlog/
├── assets/           # 정적 리소스 (CSS, JS, 폰트, 이미지)
│   ├── built/       # 빌드된 파일 (자동 생성)
│   ├── css/         # 소스 CSS 파일
│   ├── js/          # 소스 JS 파일
│   └── font/        # DM Sans 웹폰트
├── partials/        # 재사용 가능한 Handlebars 컴포넌트
├── members/         # 멤버십 관련 템플릿
├── locales/         # 다국어 지원 (en, ko)
├── data/           # Ghost 데이터베이스
└── docs/           # 문서
```

### 주요 템플릿 파일

-   `default.hbs`: 메인 레이아웃
-   `home.hbs`: 홈페이지
-   `index.hbs`: 블로그 목록
-   `post.hbs`: 포스트 상세
-   `page.hbs`: 페이지 상세
-   `author.hbs`: 작성자 페이지
-   `custom-resume.hbs`: 이력서 전용 템플릿

## 개발 명령어

### 초기 설정

```bash
npm install  # 또는 yarn
```

### 개발 모드 실행

```bash
npm run docker:dev  # Docker + 라이브 리로드
npm run dev        # 라이브 리로드만
```

### 빌드 및 배포

```bash
npm run build      # 프로덕션 빌드
npm run zip        # 테마 압축 파일 생성
npm run test       # Ghost 호환성 테스트
```

## 주요 기능

### SPA 지원

-   Swup 라이브러리를 통한 페이지 전환 애니메이션
-   Fragment 기반 부분 업데이트
-   프로그레스 바 및 오버레이 테마
-   자동 메뉴 상태 업데이트

### 빌드 시스템

-   Rollup을 통한 ES6 모듈 번들링
-   vendor/app 코드 스플리팅
-   PostCSS를 통한 CSS 최적화
-   Terser를 통한 JS 압축
-   소스맵 생성

### UI/UX 기능

-   다크/라이트 테마 자동 감지 및 전환
-   Swiper 기반 캐러셀
-   Highlight.js 코드 하이라이팅
-   Tocbot 목차 자동 생성
-   반응형 디자인
-   지연 로딩 이미지

### 커스터마이징

-   Ghost Admin 커스텀 필드 지원
    -   소셜 미디어 링크 (GitHub, Instagram, Email)
    -   기본 피처 이미지
    -   메인 타이틀
-   다국어 지원 (한국어, 영어)
-   페이지별 커스텀 템플릿

## 개발 환경 설정

### Docker 환경

-   Ghost 5.71 Alpine 이미지 사용
-   SQLite3 데이터베이스
-   포트: 2368
-   테마 파일 자동 마운트

### JavaScript 모듈 구조

```javascript
// assets/js/app.js - 메인 엔트리 포인트
-setupMenu() - // 메뉴 초기화
    setupSwiper() - // 슬라이더 초기화
    setupSwup() - // SPA 라우팅 초기화
    setupPost() - // 포스트 기능 초기화
    setupPagination() - // 페이지네이션 초기화
    setupLetter(); // 레터 기능 초기화
```

### CSS 구조

```css
/* 컴포넌트 기반 스타일 구조 */
- components/      /* 재사용 가능한 컴포넌트 */
- ghost/          /* Ghost 특화 스타일 */
- vars.css        /* CSS 변수 정의 */
- app.css         /* 메인 스타일시트 */
```

## 배포 프로세스

1. GitHub Actions를 통한 자동 배포 지원
2. 테마 파일 압축 및 업로드
3. Ghost Admin을 통한 테마 활성화

## 성능 최적화

-   폰트 프리로드 및 스왑
-   크리티컬 CSS 인라인
-   JavaScript 지연 로딩
-   이미지 최적화 (6단계 크기)
-   캐싱 전략 적용

## 브라우저 지원

-   모던 브라우저 (defaults browserslist)
-   ES6+ 문법 트랜스파일링
-   PostCSS를 통한 CSS 폴리필

## 라이선스

MIT License

## 관련 링크

-   [GitHub 저장소](https://github.com/w-log/ghost-theme-wlog)
-   [데모 사이트](https://w-log.dev)
-   [Ghost 공식 문서](https://ghost.org/docs/themes)
