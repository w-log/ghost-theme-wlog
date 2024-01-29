# Ghost Theme wlog

고스트 개인 개발 블로그 개설을 위한 스타터 템플릿

&nbsp;

## First time using a Ghost theme?

Ghost uses a simple templating language called [Handlebars](http://handlebarsjs.com/) for its themes.

We've documented this starter theme pretty heavily so that it should be possible to work out what's going on just by reading the code and the comments. We also have a robust set of resources to help you build awesome custom themes:

-   The official [theme documentation](https://ghost.org/docs/themes) is the complete resource for everything you need to know about Ghost theme development
-   [Tutorials](https://ghost.org/tutorials/) offer a step-by-step guide to building the most common features in Ghost themes
-   The [Ghost VS Code extension](https://marketplace.visualstudio.com/items?itemName=TryGhost.ghost) speeds up theme development and provides quick access to helpful info
-   All of Ghost's official themes are [open source](https://github.com/tryghost) and are a great reference for learning how to create a theme

&nbsp;

## 테마 기능

🔁&nbsp;Docker를 베이스로한 local 테마 개발환경 제공

🗃️&nbsp;Rollup 기반 모듈 번들링으로 vender 모듈과 app 청크 분리

🗜️&nbsp;빌드 시 에셋 최적화 및 [Rollup](https://rollupjs.org)을 통한 빠른 번들링 속도 제공

🦋&nbsp; [PostCSS](https://postcss.org/)를 통해서 차세대 CSS 작성 및 기능 확장[`rollup.config.js`](rollup.config.js)

🚢&nbsp;[Github Actions](.github/workflows/deploy-theme.yml)를 이용한 테마 자동 배포 [Learn more how to deploy your theme automatically](https://github.com/TryGhost/action-deploy-theme)

&nbsp;

## TODO

-   [ ] 관련 게시글
-   [ ] 이력 및 JD 카테고리 전용 템플릿
-   [ ] 메인 페이지 최근 글 목록

&nbsp;

## 테마 구조

The main files are:

-   [`default.hbs`](default.hbs) - The main template file
-   [`index.hbs`](index.hbs) - Used for the home page
-   [`post.hbs`](post.hbs) - Used for individual posts
-   [`page.hbs`](page.hbs) - Used for individual pages
-   [`tag.hbs`](tag.hbs) - Used for tag archives
-   [`author.hbs`](author.hbs) - Used for author archives

One neat trick is that you can also create custom one-off templates just by adding the slug of a page to a template file. For example:

-   `page-about.hbs` - Custom template for the `/about/` page
-   `tag-news.hbs` - Custom template for `/tag/news/` archive
-   `author-jamie.hbs` - Custom template for `/author/jamie/` archive

&nbsp;

## 개발 가이드

The Starter theme provides a first-class development experience out of the box.

### 실행전 필수설치항목

-   [Docker 설치](https://docs.docker.com/engine/install/)
-   [Node.js 설치](https://nodejs.org/)

### 테마 실행 패키지 설치

```bash
yarn # or npm install
```

### 시작 개발 모드

도커가 실행중인 상태에서 아래 커맨드 입력

```bash
npm run docker:dev
```

Changes you make to your styles, scripts, and Handlebars files will show up automatically in the browser. CSS and Javascript will be compiled and output to the `built` folder.

Press `ctrl + c` in the terminal to exit development mode.

&nbsp;

### Build, zip, and test your theme

Compile your CSS and JavaScript assets for production with the following command:

```bash
npm run build
```

Create a zip archive:

```bash
npm run zip
```

Use `gscan` to test your theme for compatibility with Ghost:

```bash
npm run test
```

&nbsp;

## Copyright & License

Copyright (c) 2013-2023 Ghost Foundation - Released under the [MIT license](LICENSE).
