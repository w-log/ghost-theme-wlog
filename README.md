# Ghost theme wlog

개발자 개인 포트폴리오 및 블로깅을 위해 만든 Ghost 테마입니다.
이 테마는 Swup과 통합되어 완벽한 Single page application 경험을 제공합니다.

&nbsp;

## 처음으로 Ghost 테마를 사용하시나요?

1. Ghost는 테마 개발을 위해 [Handlebars](http://handlebarsjs.com/)라는 간단한 템플릿 언어를 사용합니다.

2. Ghost 테마 개발에 대해 알아야 할 모든 정보를 담은 공식 [테마 문서](https://ghost.org/docs/themes)

3. 다양한 튜토리얼, 그리고 테마 개발을 도와주는 [Ghost VS Code 확장 프로그램](https://marketplace.visualstudio.com/items?itemName=TryGhost.ghost) 등의 자료를 제공하고 있습니다.

4. 이 테마는 Ghost의 공식 테마와 같이 모두 [오픈 소스](https://github.com/tryghost)입니다.

&nbsp;

## 테마 기능

🔁&nbsp;Docker를 기반으로 한 로컬 테마 개발 환경 제공

🗃️&nbsp;Rollup을 기반으로 한 모듈 번들링으로 vendor 모듈과 app 청크를 분리

🗜️&nbsp;빌드 시 에셋 최적화 및 [Rollup](https://rollupjs.org)을 통한 빠른 번들링 속도 제공

🦋&nbsp;[PostCSS](https://postcss.org/)를 사용하여 차세대 CSS 작성 및 기능 확장[`rollup.config.js`](rollup.config.js)

🚢&nbsp;[Github Actions](.github/workflows/deploy-theme.yml)를 이용한 테마 자동 배포 [자동으로 테마를 배포하는 방법에 대해 자세히 알아보기](https://github.com/TryGhost/action-deploy-theme)

🚀&nbsp;[Swup](https://swup.js.org/) 라이브러리를 통합하여 Ghost 환경에서 Single page application로 동작합니다.

## TODO

-   [x] 관련 게시글/페이지
-   [x] 전용 이력서 및 JD 카테고리 전용 템플릿
-   [x] 단일 페이지 pagination 지원
-   [x] SPA 지원
-   [ ] Color theme custom field 지원
-   [ ] Announcement bar 지원

&nbsp;

## 테마 구조

주요 파일은 다음과 같습니다:

-   [`default.hbs`](default.hbs) - 메인 레이아웃 파일
-   [`index.hbs`](index.hbs) - 블로그 페이지, 태그 페이지 공통 파일
-   [`post.hbs`](post.hbs) - 상세 게시글 파일
-   [`page.hbs`](page.hbs) - 상세 페이지 파일
-   [`home.hbs`](home.hbs) - 메인 홈 페이지 파일

또한, 페이지의 슬러그를 템플릿 파일에 추가함으로써 사용자 정의 템플릿을 만들 수도 있습니다. 예를 들어:

-   `page-about.hbs` - `/about/` 페이지에 대한 사용자 정의 템플릿
-   `tag-news.hbs` - `/tag/news/` 아카이브에 대한 사용자 정의 템플릿
-   `author-jamie.hbs` - `/author/jamie/` 아카이브에 대한 사용자 정의 템플릿

&nbsp;

## 개발 가이드

이 테마는 [Ghost Starter](https://github.com/TryGhost/Starter) 테마를 기반으로하여 개발되었으며, Docker 등의 다양한 개발도구를 통합하여 개발 편의성을 높였습니다.

### 실행 전 필수 설치 항목

-   [Docker 설치](https://docs.docker.com/engine/install/)
-   [Node.js 설치](https://nodejs.org/)

### 테마 실행 패키지 설치

> 실행 전 Docker running 상태인지 꼭 확인해주세요.

```bash
yarn # or npm install
```

### 시작 개발 모드

도커가 실행중인 상태에서 아래 커맨드 입력

```bash
npm run docker:dev
```

스타일, 스크립트 및 Handlebars 파일을 수정하면 변경 사항이 자동으로 브라우저에 표시됩니다. CSS 및 JavaScript는 `built` 폴더에 컴파일되어 출력됩니다.

개발 모드를 종료하려면 터미널에서 `ctrl + c`를 누르세요.

&nbsp;

### 테마 빌드, 압축 및 테스트하기

CSS와 JavaScript 에셋을 프로덕션을 위해 컴파일하려면 다음 명령어를 사용하세요.

```bash
npm run build
```

아래 커맨드는 zip 아카이브를 생성합니다.

```bash
npm run zip
```

Ghost 테마의 호환성을 테스트하기 위해 아래 커맨드를 사용하세요.

```bash
npm run test
```

&nbsp;

## Copyright & License

Copyright (c) 2023-2024 W-log - Released under the [MIT license](LICENSE).
