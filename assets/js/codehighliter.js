import { getHighlighterCore } from 'shiki/core';

import themeTokyoNight from 'shiki/themes/tokyo-night.mjs';
import getWasm from 'shiki/wasm';

import javascript from 'shiki/langs/javascript.mjs';
import typescript from 'shiki/langs/typescript.mjs';
import bash from 'shiki/langs/bash.mjs';
import json from 'shiki/langs/json.mjs';
import yaml from 'shiki/langs/yaml.mjs';
import html from 'shiki/langs/html.mjs';
import css from 'shiki/langs/css.mjs';

const codeHighligthter = getHighlighterCore({
    themes: [themeTokyoNight],
    langs: [javascript, typescript, bash, json, yaml, html, css],
    loadWasm: getWasm,
});

export default codeHighligthter;
