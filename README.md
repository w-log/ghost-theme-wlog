# Ghost theme wlog

[![한글](https://img.shields.io/badge/lang-ko--kr-green.svg)](README.ko-kr.md)

A Ghost theme created for personal portfolio and blogging of developers.
<br />
This theme provides a seamless Single Page Application experience integrated with [Swup](https://swup.js.org/).
&nbsp;

## References for using Ghost themes for the first time

1. Ghost uses a simple template language called [Handlebars](http://handlebarsjs.com/) for theme development.
2. Official [theme documentation](https://ghost.org/docs/themes) that contains all the information you need to know about Ghost theme development.
3. Various tutorials and resources such as the [Ghost VS Code extension](https://marketplace.visualstudio.com/items?itemName=TryGhost.ghost) that assist in theme development.
4. This theme is open source, just like Ghost's official themes, and can be found on [GitHub](https://github.com/tryghost).
   &nbsp;

## Theme Features

-   🔁&nbsp;Provides a local theme development environment based on Docker
-   🗃️&nbsp;Separates vendor modules and app chunks through module bundling based on Rollup
-   🗜️&nbsp;Optimizes assets during build and provides fast bundling speed through [Rollup](https://rollupjs.org)

-   🦋&nbsp;Enables writing and extending CSS with [PostCSS](https://postcss.org/) [`rollup.config.js`](rollup.config.js)

-   🚢&nbsp;Automatically deploys the theme using [Github Actions](.github/workflows/deploy-theme.yml) [Learn more about how to automatically deploy themes](https://github.com/TryGhost/action-deploy-theme)

-   🚀&nbsp;Integrates [Swup](https://swup.js.org/) library to enable Single Page Application behavior in Ghost environment.

## TODO

-   [x] Related posts/pages
-   [x] Dedicated resume and JD category templates
-   [x] Single page pagination support
-   [x] SPA support
-   [x] Code highlight support
-   [ ] Color theme custom field support
-   [ ] Announcement bar support
-   [ ] Comment support

&nbsp;

## Theme Structure

The main files are as follows:

-   [`default.hbs`](default.hbs) - Main layout file
-   [`index.hbs`](index.hbs) - Common file for blog pages and tag pages
-   [`post.hbs`](post.hbs) - Detailed post file
-   [`page.hbs`](page.hbs) - Detailed page file
-   [`home.hbs`](home.hbs) - Main home page file

Additionally, you can create custom templates by adding the slug of the page to the template file. For example:

-   `page-about.hbs` - Custom template for the `/about/` page
-   `tag-news.hbs` - Custom template for the `/tag/news/` archive
-   `author-jamie.hbs` - Custom template for the `/author/jamie/` archive
    &nbsp;

## Development Guide

This theme is based on the [Ghost Starter](https://github.com/TryGhost/Starter) theme and integrates various development tools such as Docker to enhance development convenience.

### Prerequisites before running

-   [Install Docker](https://docs.docker.com/engine/install/)
-   [Install Node.js](https://nodejs.org/)

### Installing theme execution packages

> Make sure Docker is running before executing.

```bash
yarn # or npm install
```

### Start Development Mode

Enter the following command while Docker is running.

```bash
npm run docker:dev
```

When you modify the styles, scripts, and Handlebars files, the changes will be automatically displayed in the browser. CSS and JavaScript are compiled and outputted to the `built` folder.

To exit the development mode, press `ctrl + c` in the terminal.

&nbsp;

### Building, compressing, and testing the theme

To compile the CSS and JavaScript assets for production, use the following command:

```bash
npm run build
```

The following command generates a zip archive.

```bash
npm run zip
```

Use the following command to test the compatibility of the Ghost theme.

```bash
npm run test
```

&nbsp;

## Copyright & License

Copyright (c) 2023-2024 W-log - Released under the [MIT license](LICENSE).
