<!-- <template> 
  <el-container> 
    <el-header></el-header> 
      <el-main> 
        <markdown src="D:/校创/markdowns/Server_Config.md"></markdown> 直接写 markdown 语法 
        <vue-markdown class="markdown-body">
      # Hello World!
      This is a markdown text.
        </vue-markdown>
      </el-main> 
    </el-container> 
</template>

<script> 
  import 'github-markdown-css' 
  export default {
     name: 'App' 
  } 
</script> -->
<!-- 
<template>
	<div v-html="msg" />
</template>

<script>
//	静态加载
import Md from '../../read.md'

export default {
	data() {
		return {
			msg: ''
		}
	},
	created() {
		console.log(Md)
	},
	methods: {
			// 动态加载
		loadMd() {
			const str = 'read.md';
			try {
				//	用 require 而不是 import
		        const mdFile = require(`@/md/${str}`);
		        console.log(mdFile);
		        this.msg = mdFile;
		     } catch (err) {
		        console.log(err);
		     }
		}
	}
}
</script> -->
<style scoped type="text/css">
html {
  overflow-x: initial !important;
}
:root {
  --bg-color: #ffffff;
  --text-color: #333333;
  --select-text-bg-color: #b5d6fc;
  --select-text-font-color: auto;
  --monospace: "Lucida Console", Consolas, "Courier", monospace;
  --title-bar-height: 20px;
}
.mac-os-11 {
  --title-bar-height: 28px;
}
html {
  font-size: 14px;
  background-color: var(--bg-color);
  color: var(--text-color);
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}
h1,
h2,
h3,
h4,
h5 {
  white-space: pre-wrap;
}
body {
  margin: 0px;
  padding: 0px;
  height: auto;
  inset: 0px;
  font-size: 1rem;
  line-height: 1.42857;
  overflow-x: hidden;
  background: inherit;
  tab-size: 4;
}
iframe {
  margin: auto;
}
a.url {
  word-break: break-all;
}
a:active,
a:hover {
  outline: 0px;
}
.in-text-selection,
::selection {
  text-shadow: none;
  background: var(--select-text-bg-color);
  color: var(--select-text-font-color);
}
#write {
  margin: 0px auto;
  height: auto;
  width: inherit;
  word-break: normal;
  overflow-wrap: break-word;
  position: relative;
  white-space: normal;
  overflow-x: visible;
  padding-top: 36px;
}
#write.first-line-indent p {
  text-indent: 2em;
}
#write.first-line-indent li p,
#write.first-line-indent p * {
  text-indent: 0px;
}
#write.first-line-indent li {
  margin-left: 2em;
}
.for-image #write {
  padding-left: 8px;
  padding-right: 8px;
}
body.typora-export {
  padding-left: 30px;
  padding-right: 30px;
}
.typora-export .footnote-line,
.typora-export li,
.typora-export p {
  white-space: pre-wrap;
}
.typora-export .task-list-item input {
  pointer-events: none;
}
@media screen and (max-width: 500px) {
  body.typora-export {
    padding-left: 0px;
    padding-right: 0px;
  }
  #write {
    padding-left: 20px;
    padding-right: 20px;
  }
}
#write li > figure:last-child {
  margin-bottom: 0.5rem;
}
#write ol,
#write ul {
  position: relative;
}
img {
  max-width: 100%;
  vertical-align: middle;
  image-orientation: from-image;
}
button,
input,
select,
textarea {
  color: inherit;
  font: inherit;
}
input[type="checkbox"],
input[type="radio"] {
  line-height: normal;
  padding: 0px;
}
*,
::after,
::before {
  box-sizing: border-box;
}
#write h1,
#write h2,
#write h3,
#write h4,
#write h5,
#write h6,
#write p,
#write pre {
  width: inherit;
}
#write h1,
#write h2,
#write h3,
#write h4,
#write h5,
#write h6,
#write p {
  position: relative;
}
p {
  line-height: inherit;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  break-after: avoid-page;
  break-inside: avoid;
  orphans: 4;
}
p {
  orphans: 4;
}
h1 {
  font-size: 1.9rem;
}
h2 {
  font-size: 1.8rem;
}
h3 {
  font-size: 1.6rem;
}
h4 {
  font-size: 1.4rem;
}
h5 {
  font-size: 1.2rem;
}
h6 {
  font-size: 1rem;
}
.md-math-block,
.md-rawblock,
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.hidden {
  display: none;
}
.md-blockmeta {
  color: rgb(204, 204, 204);
  font-weight: 700;
  font-style: italic;
}
a {
  cursor: pointer;
}
sup.md-footnote {
  padding: 2px 4px;
  background-color: rgba(238, 238, 238, 0.7);
  color: rgb(85, 85, 85);
  border-radius: 4px;
  cursor: pointer;
}
sup.md-footnote a,
sup.md-footnote a:hover {
  color: inherit;
  text-transform: inherit;
  text-decoration: inherit;
}
#write input[type="checkbox"] {
  cursor: pointer;
  width: inherit;
  height: inherit;
}
figure {
  overflow-x: auto;
  margin: 1.2em 0px;
  max-width: calc(100% + 16px);
  padding: 0px;
}
figure > table {
  margin: 0px;
}
thead,
tr {
  break-inside: avoid;
  break-after: auto;
}
thead {
  display: table-header-group;
}
table {
  border-collapse: collapse;
  border-spacing: 0px;
  width: 100%;
  overflow: auto;
  break-inside: auto;
  text-align: left;
}
table.md-table td {
  min-width: 32px;
}
.CodeMirror-gutters {
  border-right: 0px;
  background-color: inherit;
}
.CodeMirror-linenumber {
  user-select: none;
}
.CodeMirror {
  text-align: left;
}
.CodeMirror-placeholder {
  opacity: 0.3;
}
.CodeMirror pre {
  padding: 0px 4px;
}
.CodeMirror-lines {
  padding: 0px;
}
div.hr:focus {
  cursor: none;
}
#write pre {
  white-space: pre-wrap;
}
#write.fences-no-line-wrapping pre {
  white-space: pre;
}
#write pre.ty-contain-cm {
  white-space: normal;
}
.CodeMirror-gutters {
  margin-right: 4px;
}
.md-fences {
  font-size: 0.9rem;
  display: block;
  break-inside: avoid;
  text-align: left;
  overflow: visible;
  white-space: pre;
  background: inherit;
  position: relative !important;
}
.md-fences-adv-panel {
  width: 100%;
  margin-top: 10px;
  text-align: center;
  padding-top: 0px;
  padding-bottom: 8px;
  overflow-x: auto;
}
#write .md-fences.mock-cm {
  white-space: pre-wrap;
}
.md-fences.md-fences-with-lineno {
  padding-left: 0px;
}
#write.fences-no-line-wrapping .md-fences.mock-cm {
  white-space: pre;
  overflow-x: auto;
}
.md-fences.mock-cm.md-fences-with-lineno {
  padding-left: 8px;
}
.CodeMirror-line,
twitterwidget {
  break-inside: avoid;
}
svg {
  break-inside: avoid;
}
.footnotes {
  opacity: 0.8;
  font-size: 0.9rem;
  margin-top: 1em;
  margin-bottom: 1em;
}
.footnotes + .footnotes {
  margin-top: 0px;
}
.md-reset {
  margin: 0px;
  padding: 0px;
  border: 0px;
  outline: 0px;
  vertical-align: top;
  background: 0px 0px;
  text-decoration: none;
  text-shadow: none;
  float: none;
  position: static;
  width: auto;
  height: auto;
  white-space: nowrap;
  cursor: inherit;
  -webkit-tap-highlight-color: transparent;
  line-height: normal;
  font-weight: 400;
  text-align: left;
  box-sizing: content-box;
  direction: ltr;
}
li div {
  padding-top: 0px;
}
blockquote {
  margin: 1rem 0px;
}
li .mathjax-block,
li p {
  margin: 0.5rem 0px;
}
li blockquote {
  margin: 1rem 0px;
}
li {
  margin: 0px;
  position: relative;
}
blockquote > :last-child {
  margin-bottom: 0px;
}
blockquote > :first-child,
li > :first-child {
  margin-top: 0px;
}
.footnotes-area {
  color: rgb(136, 136, 136);
  margin-top: 0.714rem;
  padding-bottom: 0.143rem;
  white-space: normal;
}
#write .footnote-line {
  white-space: pre-wrap;
}
@media print {
  body,
  html {
    border: 1px solid transparent;
    height: 99%;
    break-after: avoid;
    break-before: avoid;
    font-variant-ligatures: no-common-ligatures;
  }
  #write {
    margin-top: 0px;
    border-color: transparent !important;
    padding-top: 0px !important;
    padding-bottom: 0px !important;
  }
  .typora-export * {
    -webkit-print-color-adjust: exact;
  }
  .typora-export #write {
    break-after: avoid;
  }
  .typora-export #write::after {
    height: 0px;
  }
  .is-mac table {
    break-inside: avoid;
  }
  #write > p:nth-child(1) {
    margin-top: 0px;
  }
  .typora-export-show-outline .typora-export-sidebar {
    display: none;
  }
  figure {
    overflow-x: visible;
  }
}
.footnote-line {
  margin-top: 0.714em;
  font-size: 0.7em;
}
a img,
img a {
  cursor: pointer;
}
pre.md-meta-block {
  font-size: 0.8rem;
  min-height: 0.8rem;
  white-space: pre-wrap;
  background: rgb(204, 204, 204);
  display: block;
  overflow-x: hidden;
}
p > .md-image:only-child:not(.md-img-error) img,
p > img:only-child {
  display: block;
  margin: auto;
}
#write.first-line-indent p > .md-image:only-child:not(.md-img-error) img {
  left: -2em;
  position: relative;
}
p > .md-image:only-child {
  display: inline-block;
  width: 100%;
}
#write .MathJax_Display {
  margin: 0.8em 0px 0px;
}
.md-math-block {
  width: 100%;
}
.md-math-block:not(:empty)::after {
  display: none;
}
.MathJax_ref {
  fill: currentcolor;
}
[contenteditable="true"]:active,
[contenteditable="true"]:focus,
[contenteditable="false"]:active,
[contenteditable="false"]:focus {
  outline: 0px;
  box-shadow: none;
}
.md-task-list-item {
  position: relative;
  list-style-type: none;
}
.task-list-item.md-task-list-item {
  padding-left: 0px;
}
.md-task-list-item > input {
  position: absolute;
  top: 0px;
  left: 0px;
  margin-left: -1.2em;
  margin-top: calc(1em - 10px);
  border: none;
}
.math {
  font-size: 1rem;
}
.md-toc {
  min-height: 3.58rem;
  position: relative;
  font-size: 0.9rem;
  border-radius: 10px;
}
.md-toc-content {
  position: relative;
  margin-left: 0px;
}
.md-toc-content::after,
.md-toc::after {
  display: none;
}
.md-toc-item {
  display: block;
  color: rgb(65, 131, 196);
}
.md-toc-item a {
  text-decoration: none;
}
.md-toc-inner:hover {
  text-decoration: underline;
}
.md-toc-inner {
  display: inline-block;
  cursor: pointer;
}
.md-toc-h1 .md-toc-inner {
  margin-left: 0px;
  font-weight: 700;
}
.md-toc-h2 .md-toc-inner {
  margin-left: 2em;
}
.md-toc-h3 .md-toc-inner {
  margin-left: 4em;
}
.md-toc-h4 .md-toc-inner {
  margin-left: 6em;
}
.md-toc-h5 .md-toc-inner {
  margin-left: 8em;
}
.md-toc-h6 .md-toc-inner {
  margin-left: 10em;
}
@media screen and (max-width: 48em) {
  .md-toc-h3 .md-toc-inner {
    margin-left: 3.5em;
  }
  .md-toc-h4 .md-toc-inner {
    margin-left: 5em;
  }
  .md-toc-h5 .md-toc-inner {
    margin-left: 6.5em;
  }
  .md-toc-h6 .md-toc-inner {
    margin-left: 8em;
  }
}
a.md-toc-inner {
  font-size: inherit;
  font-style: inherit;
  font-weight: inherit;
  line-height: inherit;
}
.footnote-line a:not(.reversefootnote) {
  color: inherit;
}
.reversefootnote {
  font-family: ui-monospace, sans-serif;
}
.md-attr {
  display: none;
}
.md-fn-count::after {
  content: ".";
}
code,
pre,
samp,
tt {
  font-family: var(--monospace);
}
kbd {
  margin: 0px 0.1em;
  padding: 0.1em 0.6em;
  font-size: 0.8em;
  color: rgb(36, 39, 41);
  background: rgb(255, 255, 255);
  border: 1px solid rgb(173, 179, 185);
  border-radius: 3px;
  box-shadow: rgba(12, 13, 14, 0.2) 0px 1px 0px,
    rgb(255, 255, 255) 0px 0px 0px 2px inset;
  white-space: nowrap;
  vertical-align: middle;
}
.md-comment {
  color: rgb(162, 127, 3);
  opacity: 0.6;
  font-family: var(--monospace);
}
code {
  text-align: left;
  vertical-align: initial;
}
a.md-print-anchor {
  white-space: pre !important;
  border-width: initial !important;
  border-style: none !important;
  border-color: initial !important;
  display: inline-block !important;
  position: absolute !important;
  width: 1px !important;
  right: 0px !important;
  outline: 0px !important;
  background: 0px 0px !important;
  text-decoration: initial !important;
  text-shadow: initial !important;
}
.os-windows.monocolor-emoji .md-emoji {
  font-family: "Segoe UI Symbol", sans-serif;
}
.md-diagram-panel > svg {
  max-width: 100%;
}
[lang="flow"] svg,
[lang="mermaid"] svg {
  max-width: 100%;
  height: auto;
}
[lang="mermaid"] .node text {
  font-size: 1rem;
}
table tr th {
  border-bottom: 0px;
}
video {
  max-width: 100%;
  display: block;
  margin: 0px auto;
}
iframe {
  max-width: 100%;
  width: 100%;
  border: none;
}
.highlight td,
.highlight tr {
  border: 0px;
}
mark {
  background: rgb(255, 255, 0);
  color: rgb(0, 0, 0);
}
.md-html-inline .md-plain,
.md-html-inline strong,
mark .md-inline-math,
mark strong {
  color: inherit;
}
.md-expand mark .md-meta {
  opacity: 0.3 !important;
}
mark .md-meta {
  color: rgb(0, 0, 0);
}
@media print {
  .typora-export h1,
  .typora-export h2,
  .typora-export h3,
  .typora-export h4,
  .typora-export h5,
  .typora-export h6 {
    break-inside: avoid;
  }
}
.md-diagram-panel .messageText {
  stroke: none !important;
}
.md-diagram-panel .start-state {
  fill: var(--node-fill);
}
.md-diagram-panel .edgeLabel rect {
  opacity: 1 !important;
}
.md-fences.md-fences-math {
  font-size: 1em;
}
.md-fences-advanced:not(.md-focus) {
  padding: 0px;
  white-space: nowrap;
  border: 0px;
}
.md-fences-advanced:not(.md-focus) {
  background: inherit;
}
.typora-export-show-outline .typora-export-content {
  max-width: 1440px;
  margin: auto;
  display: flex;
  flex-direction: row;
}
.typora-export-sidebar {
  width: 300px;
  font-size: 0.8rem;
  margin-top: 80px;
  margin-right: 18px;
}
.typora-export-show-outline #write {
  --webkit-flex: 2;
  flex: 2 1 0%;
}
.typora-export-sidebar .outline-content {
  position: fixed;
  top: 0px;
  max-height: 100%;
  overflow: hidden auto;
  padding-bottom: 30px;
  padding-top: 60px;
  width: 300px;
}
@media screen and (max-width: 1024px) {
  .typora-export-sidebar,
  .typora-export-sidebar .outline-content {
    width: 240px;
  }
}
@media screen and (max-width: 800px) {
  .typora-export-sidebar {
    display: none;
  }
}
.outline-content li,
.outline-content ul {
  margin-left: 0px;
  margin-right: 0px;
  padding-left: 0px;
  padding-right: 0px;
  list-style: none;
  overflow-wrap: anywhere;
}
.outline-content ul {
  margin-top: 0px;
  margin-bottom: 0px;
}
.outline-content strong {
  font-weight: 400;
}
.outline-expander {
  width: 1rem;
  height: 1.42857rem;
  position: relative;
  display: table-cell;
  vertical-align: middle;
  cursor: pointer;
  padding-left: 4px;
}
.outline-expander::before {
  content: "";
  position: relative;
  font-family: Ionicons;
  display: inline-block;
  font-size: 8px;
  vertical-align: middle;
}
.outline-item {
  padding-top: 3px;
  padding-bottom: 3px;
  cursor: pointer;
}
.outline-expander:hover::before {
  content: "";
}
.outline-h1 > .outline-item {
  padding-left: 0px;
}
.outline-h2 > .outline-item {
  padding-left: 1em;
}
.outline-h3 > .outline-item {
  padding-left: 2em;
}
.outline-h4 > .outline-item {
  padding-left: 3em;
}
.outline-h5 > .outline-item {
  padding-left: 4em;
}
.outline-h6 > .outline-item {
  padding-left: 5em;
}
.outline-label {
  cursor: pointer;
  display: table-cell;
  vertical-align: middle;
  text-decoration: none;
  color: inherit;
}
.outline-label:hover {
  text-decoration: underline;
}
.outline-item:hover {
  border-color: rgb(245, 245, 245);
  background-color: var(--item-hover-bg-color);
}
.outline-item:hover {
  margin-left: -28px;
  margin-right: -28px;
  border-left: 28px solid transparent;
  border-right: 28px solid transparent;
}
.outline-item-single .outline-expander::before,
.outline-item-single .outline-expander:hover::before {
  display: none;
}
.outline-item-open > .outline-item > .outline-expander::before {
  content: "";
}
.outline-children {
  display: none;
}
.info-panel-tab-wrapper {
  display: none;
}
.outline-item-open > .outline-children {
  display: block;
}
.typora-export .outline-item {
  padding-top: 1px;
  padding-bottom: 1px;
}
.typora-export .outline-item:hover {
  margin-right: -8px;
  border-right: 8px solid transparent;
}
.typora-export .outline-expander::before {
  content: "+";
  font-family: inherit;
  top: -1px;
}
.typora-export .outline-expander:hover::before,
.typora-export .outline-item-open > .outline-item > .outline-expander::before {
  content: "−";
}
.typora-export-collapse-outline .outline-children {
  display: none;
}
.typora-export-collapse-outline .outline-item-open > .outline-children,
.typora-export-no-collapse-outline .outline-children {
  display: block;
}
.typora-export-no-collapse-outline .outline-expander::before {
  content: "" !important;
}
.typora-export-show-outline
  .outline-item-active
  > .outline-item
  .outline-label {
  font-weight: 700;
}
.md-inline-math-container mjx-container {
  zoom: 0.95;
}
mjx-container {
  break-inside: avoid;
}

:root {
  --side-bar-bg-color: #fafafa;
  --control-text-color: #777;
}

@include-when-export url(https://fonts.loli.net/css?family=Open+Sans:400italic,700italic,700,400&subset=latin,latin-ext);

/* open-sans-regular - latin-ext_latin */
/* open-sans-italic - latin-ext_latin */
/* open-sans-700 - latin-ext_latin */
/* open-sans-700italic - latin-ext_latin */
html {
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
}

body {
  font-family: "Open Sans", "Clear Sans", "Helvetica Neue", Helvetica, Arial,
    "Segoe UI Emoji", sans-serif;
  color: rgb(51, 51, 51);
  line-height: 1.6;
}

#write {
  max-width: 860px;
  margin: 0 auto;
  padding: 30px;
  padding-bottom: 100px;
}

@media only screen and (min-width: 1400px) {
  #write {
    max-width: 1024px;
  }
}

@media only screen and (min-width: 1800px) {
  #write {
    max-width: 1200px;
  }
}

#write > ul:first-child,
#write > ol:first-child {
  margin-top: 30px;
}

a {
  color: #4183c4;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  position: relative;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-weight: bold;
  line-height: 1.4;
  cursor: text;
}
h1:hover a.anchor,
h2:hover a.anchor,
h3:hover a.anchor,
h4:hover a.anchor,
h5:hover a.anchor,
h6:hover a.anchor {
  text-decoration: none;
}
h1 tt,
h1 code {
  font-size: inherit;
}
h2 tt,
h2 code {
  font-size: inherit;
}
h3 tt,
h3 code {
  font-size: inherit;
}
h4 tt,
h4 code {
  font-size: inherit;
}
h5 tt,
h5 code {
  font-size: inherit;
}
h6 tt,
h6 code {
  font-size: inherit;
}
h1 {
  font-size: 1.8em;
  line-height: 1.2;
  margin-bottom: 0.2em;
}
h2 {
  font-size: 1.6em;
  line-height: 1.225;
  border-bottom: 2px solid #194d91;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
}

/*@media print {
    .typora-export h1,
    .typora-export h2 {
        border-bottom: none;
        padding-bottom: initial;
    }

    .typora-export h1::after,
    .typora-export h2::after {
        content: "";
        display: block;
        height: 100px;
        margin-top: -96px;
        border-top: 1px solid #eee;
    }
}*/

h3 {
  font-size: 1.4em;
  line-height: 1.43;
  border-bottom: 0.5px dashed #2e4d70;
}
h4 {
  font-size: 1.2em;
}
h5 {
  font-size: 1em;
}
h6 {
  font-size: 1em;
  color: #777;
}
p,
blockquote,
ul,
ol,
dl,
table {
  margin: 0.8em 0;
}
li > ol,
li > ul {
  margin: 0 0;
}
hr {
  height: 2px;
  padding: 0;
  margin: 16px 0;
  background-color: #e7e7e7;
  border: 0 none;
  overflow: hidden;
  box-sizing: content-box;
}

li p.first {
  display: inline-block;
}
ul,
ol {
  padding-left: 30px;
}
ul:first-child,
ol:first-child {
  margin-top: 0;
}
ul:last-child,
ol:last-child {
  margin-bottom: 0;
}
blockquote {
  border-left: 4px solid #dfe2e5;
  padding: 0 15px;
  color: #777777;
}
blockquote blockquote {
  padding-right: 0;
}
table {
  padding: 0;
  word-break: initial;
}
table tr {
  border: 1px solid #dfe2e5;
  margin: 0;
  padding: 0;
}
table tr:nth-child(2n),
thead {
  background-color: #f8f8f8;
}
table th {
  font-weight: bold;
  border: 1px solid #dfe2e5;
  border-bottom: 0;
  margin: 0;
  padding: 6px 13px;
}
table td {
  border: 1px solid #dfe2e5;
  margin: 0;
  padding: 6px 13px;
}
table th:first-child,
table td:first-child {
  margin-top: 0;
}
table th:last-child,
table td:last-child {
  margin-bottom: 0;
}

.CodeMirror-lines {
  padding-left: 4px;
}

.code-tooltip {
  box-shadow: 0 1px 1px 0 rgba(0, 28, 36, 0.3);
  border-top: 1px solid #eef2f2;
}

.md-fences,
code,
tt {
  border: 1px solid #e7eaed;
  background-color: #f8f8f8;
  border-radius: 3px;
  padding: 0;
  padding: 2px 4px 0px 4px;
  font-size: 0.9em;
}

code {
  background-color: #f3f4f4;
  padding: 0 2px 0 2px;
}

.md-fences {
  margin-bottom: 15px;
  margin-top: 15px;
  padding-top: 8px;
  padding-bottom: 6px;
}

.md-task-list-item > input {
  margin-left: -1.3em;
}

@media print {
  html {
    font-size: 13px;
  }
  pre {
    page-break-inside: avoid;
    word-wrap: break-word;
  }
}

.md-fences {
  background-color: #f8f8f8;
}
#write pre.md-meta-block {
  padding: 1rem;
  font-size: 85%;
  line-height: 1.45;
  background-color: #f7f7f7;
  border: 0;
  border-radius: 3px;
  color: #777777;
  margin-top: 0 !important;
}

.mathjax-block > .code-tooltip {
  bottom: 0.375rem;
}

.md-mathjax-midline {
  background: #fafafa;
}

#write > h3.md-focus:before {
  left: -1.5625rem;
  top: 0.375rem;
}
#write > h4.md-focus:before {
  left: -1.5625rem;
  top: 0.285714286rem;
}
#write > h5.md-focus:before {
  left: -1.5625rem;
  top: 0.285714286rem;
}
#write > h6.md-focus:before {
  left: -1.5625rem;
  top: 0.285714286rem;
}
.md-image > .md-meta {
  /*border: 1px solid #ddd;*/
  border-radius: 3px;
  padding: 2px 0px 0px 4px;
  font-size: 0.9em;
  color: inherit;
}

.md-tag {
  color: #a7a7a7;
  opacity: 1;
}

.md-toc {
  margin-top: 20px;
  padding-bottom: 20px;
}

.sidebar-tabs {
  border-bottom: none;
}

#typora-quick-open {
  border: 1px solid #ddd;
  background-color: #f8f8f8;
}

#typora-quick-open-item {
  background-color: #fafafa;
  border-color: #fefefe #e5e5e5 #e5e5e5 #eee;
  border-style: solid;
  border-width: 1px;
}

/** focus mode */
.on-focus-mode blockquote {
  border-left-color: rgba(85, 85, 85, 0.12);
}

header,
.context-menu,
.megamenu-content,
footer {
  font-family: "Segoe UI", "Arial", sans-serif;
}

.file-node-content:hover .file-node-icon,
.file-node-content:hover .file-node-open-state {
  visibility: visible;
}

.mac-seamless-mode #typora-sidebar {
  background-color: #fafafa;
  background-color: var(--side-bar-bg-color);
}

.md-lang {
  color: #b4654d;
}

/*.html-for-mac {
    --item-hover-bg-color: #E6F0FE;
}*/

#md-notification .btn {
  border: 0;
}

.dropdown-menu .divider {
  border-color: #e5e5e5;
  opacity: 0.4;
}

.ty-preferences .window-content {
  background-color: #fafafa;
}

.ty-preferences .nav-group-item.active {
  color: white;
  background: #999;
}

.menu-item-container a.menu-style-btn {
  background-color: #f5f8fa;
  background-image: linear-gradient(
    180deg,
    hsla(0, 0%, 100%, 0.8),
    hsla(0, 0%, 100%, 0)
  );
}
</style>
<template>
  <el-container>
    <el-main>
      <body class="typora-export os-windows">
        <div class="typora-export-content">
          <div id="write" class="">
            <h1
              id="如何在google-colab--本地windows运行环境中配置视频分析服务器"
            >
              <span
                >如何在Google Colab /
                本地Windows运行环境中配置视频分析服务器</span
              >
            </h1>
            <h2 id="为什么要配置该视频分析服务器">
              <span>为什么要配置该视频分析服务器</span>
            </h2>
            <h3 id="视频分析服务器有什么用">
              <span>视频分析服务器有什么用?</span>
            </h3>
            <p>
              <span>在本项目的架构中，</span
              ><strong><span>视频分析服务器</span></strong
              ><span>用于从部署在</span
              ><a
                href="http://star-eyes.cloud/vstream"
                target="_blank"
                class="url"
                >http://star-eyes.cloud/vstream</a
              ><span> 域名下的nginx服务器下载监控原视频，并</span
              ><strong><span>使用GPU算力</span></strong
              ><span
                >对视频进行分析。在分析出结果后，视频分析服务器将结果（即事件信息）回传至云端数据库。若没有视频分析服务器，则事件提醒模块无法发挥其应有的功能。</span
              >
            </p>
            <h3 id="为什么本项目的视频分析服务器不集成在云端而需手动配置">
              <span
                >为什么本项目的视频分析服务器不集成在云端,而需手动配置?</span
              >
            </h3>
            <p>
              <span>掣肘我们做出这项决策的最主要因素为</span
              ><strong><span>成本因素</span></strong
              ><span
                >。以阿里云的ECS云服务器为例，支持GPU/CUDA计算的云服务器，价格通常需要数千每月。如此高昂的价格，对于我们这个初创团队而言有些难以承受。考虑到我们的目标用户通常具有较为稳定的机房和算力，我们认为将深度学习有关计算转移至用户侧是一个较为妥善的选择。我们为您准备了两</span
              ><strong><span>套深度学习计算部署方案</span></strong
              ><span
                >：第一套方案使用Google
                Colab的算力进行视频分析，第二套方案为在Windows本地部署计算环境。</span
              >
            </p>
            <h3 id="两套方案各有哪些优劣">
              <span>两套方案各有哪些优劣？</span>
            </h3>
            <p>
              <span>若使用第一套方案——使用Colab部署，则您需要有一个</span
              ><strong><span>能够稳定访问Google的网络环境</span></strong
              ><span
                >。由于Colab免费版的限制，您可能会偶尔遇到失去Google云GPU连接的情况。该方案的优点是您无需为GPU付费，可以免费使用Google的资源。</span
              >
            </p>
            <p>
              <span>若使用第二套方案——使用本地Windows部署，您需要准备一个</span
              ><strong><span>Nvidia GeForce 20系或以上</span></strong
              ><span
                >的GPU。需要此系列或更新GPU的原因是我们需要用到GPU中的CUDA计算模块用于深度学习有关计算。该方案的优点是工作时较为稳定、一劳永逸，在配置好后便无需费心。</span
              >
            </p>
            <h3 id="安装的前置文件准备"><span>安装的前置文件准备</span></h3>
            <ul>
              <li>
                <p>
                  <strong><span>DLC</span></strong
                  ><span>文件夹: </span
                  ><a
                    href="https://pan.baidu.com/s/1Kf_RAT4HYF-cHcX_x1k00A?pwd=0000"
                    ><span>点此下载</span></a
                  >
                </p>
              </li>
              <li>
                <p>
                  <strong><span>LSTM_model</span></strong
                  ><span>文件夹：</span
                  ><a
                    href="https://pan.baidu.com/s/1q56phnbLtDjeAZTDn_6jUA?pwd=0000"
                    ><span>点此下载</span></a
                  >
                </p>
              </li>
              <li>
                <p>
                  <strong><span>process.ipynb</span></strong
                  ><span>文件：</span
                  ><a
                    href="https://colab.research.google.com/drive/1c7SMAXN2gJ0TPoXCSJweCcyasul_RDta?usp=sharing"
                    ><span>点击此链接</span></a
                  ><span>，进入后点击</span
                  ><em><span>文件-下载-下载.ipynb</span></em
                  ><span>(需要能够访问Google的网络环境)</span>
                </p>
              </li>
            </ul>
            <h2 id="google-colab环境配置教程">
              <span>Google Colab环境配置教程</span>
            </h2>
            <h3 id="google-colab-是什么--为什么使用google-colab">
              <span>Google Colab 是什么? 为什么使用Google Colab?</span>
            </h3>
            <p>
              <span
                >Google Colab 是一个基于云端的 Jupyter notebook
                环境，它可以在网页浏览器中运行，让任何有网络连接的人都可以实验机器学习和人工智能编程。Google
                Colab 的代码是在 Google 的云服务器上执行的，意味着您可以利用
                Google 的硬件资源，包括 GPU 和 TPU，无论你的机器性能如何。</span
              >
            </p>
            <h3 id="如何配置colab"><span>如何配置Colab?</span></h3>
            <p>
              <span
                >在开始之前，您需要确保自己有一个Google账号，且具有能够稳定访问Google的网络环境。</span
              >
            </p>
            <h4 id="注册登录-google-drive">
              <span>注册/登录 Google Drive</span>
            </h4>
            <ul>
              <li>
                <p>
                  <span
                    >若您没有注册Google
                    云端硬盘，则注册一个免费账号。若有，则登录Drive。</span
                  >
                </p>
              </li>
              <li>
                <p>
                  <span>将</span><strong><span>DLC</span></strong
                  ><span>文件夹（解压后）上传至“我的云端硬盘”目录下。</span>
                </p>
              </li>
              <li>
                <p>
                  <span>将</span><strong><span>LSTM_model</span></strong
                  ><span>文件夹（解压后）上传至“我的云端硬盘”目录下。</span>
                </p>
              </li>
            </ul>
            <h4 id="打开colab并进行配置"><span>打开Colab并进行配置</span></h4>
            <ul>
              <li>
                <p>
                  <span>打开</span
                  ><a
                    href="https://colab.research.google.com/drive/1c7SMAXN2gJ0TPoXCSJweCcyasul_RDta?usp=sharing"
                    ><span>此Notebook</span></a
                  ><span
                    >。若您遇到了无法编辑Notebook的问题，可将其另存为副本再打开。</span
                  >
                </p>
              </li>
              <li>
                <p>
                  <span>编辑第一个代码块中的信息，</span
                  ><strong><span>确保此信息为您的真实信息</span></strong
                  ><span
                    >。该步骤非常重要，若未修改为正确信息，服务器将拒绝承认该进程分析视频后的结果真实性。</span
                  >
                </p>
              </li>
            </ul>
            <p>
              <strong><span>连接环境并运行</span></strong>
            </p>
            <ul>
              <li>
                <p>
                  <span
                    >点击Colab网页右上角的“连接”按钮。请确保您连接的是GPU环境（而非CPU环境）。若您无法确认这一点，可以点击</span
                  ><em><span>连接-查看资源-更改运行时类型</span></em
                  ><span>查看当前的环境。</span>
                </p>
              </li>
              <li>
                <p>
                  <span>点击上方</span
                  ><em><span>代码执行程序-全部运行</span></em
                  ><span>。</span>
                </p>
              </li>
            </ul>
            <p><span>在做完以上操作后，服务器将开始正常运行。</span></p>
            <p>
              <span>若您在运行过程中遇到BUG，请及时向开发者</span
              ><code>chenhao2020@lzu.edu.cn</code><span>发送邮件反馈。</span>
            </p>
            <h2 id="本地windows环境配置教程">
              <span>本地Windows环境配置教程</span>
            </h2>
            <p>
              <span>在进行本教程之前，请先确保您具有一块高于</span
              ><strong><span>Nvidia GeForce 20系</span></strong
              ><span>的GPU。</span>
            </p>
            <h3 id="安装anaconda"><span>安装Anaconda</span></h3>
            <ul>
              <li>
                <p>
                  <span>进入 anaconda 官网</span
                  ><a
                    href="https://www.anaconda.com/products/distribution"
                    target="_blank"
                    class="url"
                    >https://www.anaconda.com/products/distribution</a
                  ><span> </span>
                </p>
              </li>
              <li>
                <p><span>选择 Windows 版本，点击 Download，进行下载</span></p>
              </li>
              <li>
                <p><span>双击下载好的安装文件，启动安装程序</span></p>
              </li>
              <li>
                <p>
                  <span>安装完成后，启动</span
                  ><em><span>Anaconda Powershell Prompt (Conda)</span></em
                  ><span> 应用程序，进入命令行界面</span>
                </p>
              </li>
            </ul>
            <h3 id="在anaconda中新建虚拟环境">
              <span>在Anaconda中新建虚拟环境</span>
            </h3>
            <ul>
              <li>
                <p>
                  <span>使用</span><code>conda create -n dlc</code
                  ><span>
                    创建名为dlc的虚拟环境（若安装过程中出现网络错误，可参照</span
                  ><a
                    href="https://blog.csdn.net/Yuyh131/article/details/102841814"
                    ><span>此教程</span></a
                  ><span>配置pip国内镜像源）</span>
                </p>
              </li>
              <li>
                <p>
                  <span>使用</span><code>conda activate dlc</code
                  ><span> 进入dlc环境</span>
                </p>
              </li>
              <li>
                <p>
                  <span>使用</span><code>pip install deeplabcut[tf]</code
                  ><span> 指令安装deeplabcut环境</span>
                </p>
              </li>
            </ul>
            <h3
              id="安装jupyter-notebook-若该软件随anaconda一同安装则可跳过此步）"
            >
              <span
                >安装Jupyter Notebook
                （若该软件随Anaconda一同安装，则可跳过此步）</span
              >
            </h3>
            <ul>
              <li>
                <p>
                  <span>在</span><code>dlc</code
                  ><span>环境内的命令行界面输入</span
                  ><code>conda install jupyter notebook</code
                  ><span>，等待jupyter notebook安装完成。</span>
                </p>
              </li>
            </ul>
            <h3
              id="使用jupyter-notebook打开processipynb修改其中linux系统下的目录路径为windows系统路径"
            >
              <span
                >使用Jupyter
                Notebook打开process.ipynb，修改其中Linux系统下的目录路径为Windows系统路径</span
              >
            </h3>
            <ul>
              <li>
                <p>
                  <span>确保您具有</span><code>DLC</code><span>文件夹和</span
                  ><code>LSTM_model</code><span>文件夹</span>
                </p>
              </li>
              <li>
                <p>
                  <span
                    >将其中的Linux文件系统路径格式更改为Windows文件系统路径格式</span
                  >
                </p>
              </li>
              <li>
                <p>
                  <span>在</span><code>dlc</code
                  ><span>环境界面的命令行中输入</span
                  ><code>jupyter notebook</code
                  ><span
                    >命令，随后系统会自动在默认浏览器中打开jupyter
                    notebook网页</span
                  >
                </p>
              </li>
              <li>
                <p><span>在网页中打开process.ipynb</span></p>
              </li>
              <li>
                <p>
                  <span>点击上方菜单栏中</span
                  ><em><span>内核-更换内核</span></em
                  ><span>,选择运行环境为</span><code>dlc</code>
                </p>
              </li>
              <li>
                <p>
                  <span>点击上方菜单</span><em><span>单元格-运行所有</span></em>
                </p>
              </li>
            </ul>
            <p><span>在做完以上操作后，服务器将开始正常运行。</span></p>
            <p>
              <span
                >若您在运行过程中遇到BUG，或您对操作过程不甚明确，请及时向开发者</span
              ><code>chenhao2020@lzu.edu.cn</code><span>发送邮件反馈。</span>
            </p>
          </div>
        </div>
      </body>
    </el-main>
  </el-container>
</template>
