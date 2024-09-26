/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/arsenal/arsenal-regular-webfont.woff2 */ "./src/fonts/arsenal/arsenal-regular-webfont.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/arsenal/arsenal-regular-webfont.woff */ "./src/fonts/arsenal/arsenal-regular-webfont.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*@font-face {
    font-family: 'grupporegular';
    src: url('./fonts/gruppo/gruppo-regular-webfont.woff2') format('woff2'),
         url('./fonts/gruppo/gruppo-regular-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}*/

@font-face {
    font-family: 'arsenalregular';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2'),
         url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('woff');
    font-weight: normal;
    font-style: normal;

}

* {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
	--main-clr: #1c002c;
	--second-clr: #330047;
	--text-clr: #ddd;
	--transit: all 0.2s ease-out;
	--border: 2px outset var(--second-clr);
	--highest: #300;
	--highest-lit: #a00;
	--highest-btn: #200;
	--high: #420;
	--high-lit: #a60;
	--high-btn: #310;
	--low: #030;
	--low-lit: #0a0;
	--low-btn: #020;
	--lowest: #333;
	--lowest-lit: #aaa;
	--lowest-btn: #222;
	font-family: Helvetica, sans-serif;
}

body {
  background: var(--main-clr);
	display: grid;
	grid: 5.5rem 1fr / auto;
	color: var(--text-clr);
	min-height: 100vh;
}

input, button {
	background: #000;
	color: #ccc;
}

header {
	display: grid;
	grid: 1fr 2fr / auto;
	padding: .5rem 1rem;
	background: var(--second-clr);
	border-bottom: 2px ridge var(--second-clr);
}

.upper-tab {
	grid-area: 2 / 1 / 3 / -1;
	display: flex;
	justify-content: space-between;
}

.lower-tab {
	grid-area: 1 / 1 / 2 / -1;
	display: flex;
	padding-block: .5rem;
	justify-content: space-evenly;
	border-bottom: 1px solid #fff4;
}

.title {
	font-size: 2rem;
}

#content {
	grid-area: 2 / 1 / -1 / -1;
	position: relative;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	padding-block: 1.5rem;
}

.portal  {
	width: 300px;
	height: 200px;
	background: linear-gradient( to bottom, var(--second-clr), var(--main-clr) );
	color: var(--text-clr);
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 2rem;
	cursor: pointer;
	border-radius: 1rem;
	border: var(--border);
	transition: var(--transit);
	position: absolute;
	top: 100px;
	&:hover{
		box-shadow: 0 0 4rem -2rem #fff;
		border: 11px ridge var(--second-clr);
	}
}

.home-projects {
	left: 15%;
}

.home-tasks {
	left: 65%;
}

/* Projects page */

.projects-container {
	width: 95vw;
	min-height: 80%;
	background: var(--second-clr);
	color: var(--text-clr);
	border-radius: 1rem;
	border: var(--border);
	display: grid;
	grid: 4rem 1fr / repeat(auto-fill, minmax(180px, 1fr));
	z-index: 1;
}

button.addProjectBtn {
  grid-area: 1 / 1 / 2 / -2;
  background: var(--main-clr);
	border: var(--border);
	width: 110%;
  font-size: 1.5rem;
  text-shadow: 0 0 .5rem #aaa;
	&:hover{
		border-style: inset;
	}
}

button.pFormCloseBtn.project-close-btn {
    grid-area: 1 / -2 / 2 / -1;
    position: relative;
    top: 0;
    width: 5rem;
    right: -7rem;
}

.addProjectDialog {
  background: var(--second-clr);
  color: var(--text-clr);
  padding: 1.5rem;
  border: 1px solid;
	border: 5px ridge var(--second-clr);
  width: 50%;
  height: 85%;
  position: relative;
  top: 7.5%;
  left: 25%;
}

::backdrop {
  background: #000a;
}

.project-form {
  background: var(--main-clr);
  width: 100%;
  padding: 1rem;
	border: .5rem ridge var(--second-clr);
	border-radius: .5rem;
  display: flex;
  flex-flow: column;
  align-items: center;
}

.formWrapper {
  display: flex;
  flex-flow: column;
  gap: .5rem;
	padding: 1rem;
	width: 100%;
	margin-top: 0.5rem;
}

.pWrapperWrapper {
  display: grid;
  grid: repeat(2, max-content) / repeat(2, calc(50% - .375rem));
  gap: .2rem .75rem;
}

.pFormFieldWrapper {
  display: flex;
  flex-flow: row wrap;
  gap: .5rem;
  align-items: center;
}

.formInput {
  background: var(--second-clr);
  color: var(--text-clr);
  border: var(--border);
  padding: .15rem .3rem;
	width: 100%;
	margin-top: 0.3rem;
}

.pFormCloseBtn {
	position: absolute;
	top: 3rem;
	right: 3rem;
	padding: .3rem 1rem;
	border-radius: .5rem;
	font-size: 1.5rem;
	background: var(--main-clr);
	color: var(--text-clr);
	z-index: 2;
	border: 2px outset var(--second-clr);
	&:hover{
		border-style: ridge;
	}
	&:active{
		border-style: inset;
		padding-inline: 1rem;
		background: var(--main-clr);
		color: var(--text-clr);
	}
}

.pFormTitle {
	border: 2px outset var(--second-clr);
  padding: .5rem 1.25rem;
  border-radius: .5rem;
  box-shadow: -1px -1px .3rem #aaa4;
	font-family: 'grupporegular';
}

.infoModal {
	background: var(--second-clr);
	color: var(--text-clr);
	border: var(--border);
	padding: .25rem .5rem;
	position: absolute;
	font-size: .85rem;
	left: 27.5%;
	top: 25%;
}

.priorityWrapper {
	padding-block: .75rem;
}

.formSlidingBtn {
  margin-right: 1rem;
	appearance: none;
	width: 4rem;
	height: 1.25rem;
	background-color: var(--text-clr);
	border-radius: .75rem;
	transition: var(--transit);
	display: flex;
	&::before{
		content: '';
		width: 1.15rem;
		height: 1.15rem;
		background: var(--main-clr);
		border-radius: 50%;
		position: relative;
		top: .05rem;
		left: 2px;
		box-shadow: 0 0 1rem #fff;
		transition: var(--transit);
	}
	&::after {
    content: 'no';
    position: relative;
    color: var(--main-clr);
    font-size: 1.2rem;
    top: -1px;
    left: 1.25rem;
    text-shadow: 0 0 0.1rem var(--second-clr);
		transition: var(--transit);
	}
	&:checked::before{
		left: 2.75rem;
	}
	&:checked::after {
		content: 'yes';
		left: -0.65rem;
	}
}

.createProjectBtn {
  position: relative;
  top: 0;
  left: 0;
	&:hover{
		border-style: inset;
	}
}


/* Project Cards */

.projectsTray {
  grid-area: 2 / 1 / 3 / -1;
	padding: 1rem 2rem;
  display: grid;
  grid:  auto / repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.75rem 1rem;
	margin-top: 1rem;
}

[class*=projectCard] {
  height: 100px;
  padding: .75rem 1.5rem;
  border: var(--border);
  display: flex;
  flex-flow: column;
  gap: .5rem;
  border-radius: .5rem;
	position: relative;
}

.pCardBtn {
  top: 0rem;
  right: 0;
	font-size: 1rem;
}

.projectCard h2{
	font-size: 1.5rem;
	align-self: center;
	font-family: monospace;
}

.projectCard p {
	text-overflow: ellipsis;	
	white-space: nowrap;
	overflow: hidden;
	&::first-letter{
		font-family: monospace;
		font-size: 1.25rem;
		text-shadow: 0 0 .5rem #aaa;
	}
}

/* full detail windows */

dialog.detailWindow {
  width: 80%;
  padding: 1rem 2rem;
  margin: auto;
  background: var(--main-clr);
  color: var(--text-clr);
  border: var(--border);
}

.fullDetailHeader {
  display: flex;
  flex-flow: column;
	align-items: center;
  gap: 1rem;
	margin-bottom: 2rem;
}

.fullDetailHeader > h2 {
  display: flex;
  gap: 0.7rem;
}

.fullDetailWindowWrapper {
  background: var(--main-clr);
  padding: 1rem 2rem;
  border: var(--border);
  border-radius: .5rem;
  display: flex;
  flex-flow: column;
  gap: 1rem;
}

.tagsWrapper {
  display: flex;
  gap: 0.2rem;
	align-items: center;
}

.tagsWrapper > h3 {
  margin-right: 1rem;
  font-family: monospace;
  font-weight: 400;
  border: var(--border);
  padding: .25rem;
}

.fullDetailTag {
  display: flex;
	gap: 0.5rem;
  background: #b5b5b5;
	color: var(--second-clr);
  width: fit-content;
	padding: 0.175rem 0.7rem;
  border-radius: .5rem;
	border: var(--border);
  box-shadow: 0 0 1.5rem -0.75rem #fff;
}

button.fullDetailTagCloseBtn {
  border: var(--border);
  padding-inline: 0.2rem;
  border-radius: .25rem;
	cursor: pointer;
	transition: var(--transit);
	&:hover{
		border-style: ridge;
		padding-inline: .3rem;
	}
	&:active{
		border-style: inset;
	}
}

.fullDetailTask {
  display: grid;
  grid: auto / repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.fullDetailTask > h3 {
  grid-area: 1 / 1 / 2 / -1;
  font-size: 1.5rem;
}

.task-btn {
  right: 0;
  top: -1rem;
	font-size: 1rem;
}

.detailTask {
  height: fit-content;
  padding-block: 1rem;
	&::first-letter{
		font-size: 1.75rem;
	}
}

/* Conditional classes */

.hidden {
	display: none;
}

.priority-card{
	&::after {
    position: absolute;
    top: -1rem;
    left: -1.5px;
    border: var(--border);
    padding: .15rem .3rem;
    border-radius: .25rem;
		font-variant-caps: all-small-caps;
	}
}

.priority-highest {
	background: var(--highest);
	border-color:var(--highest-lit);
	order: -3;
	&::after{
		content: 'highest priority';
		background: var(--highest);
		border-color: var(--highest-lit);
	}
}

.priority-highest-btn {
	background: var(--highest-btn);
	border-color:var(--highest-lit);
}

.priority-high {
	background: var(--high);
	border-color:var(--high-lit);
	order: -2;
	&::after{
		content: 'high priority';
		background: var(--high);
		border-color: var(--high-lit);
	}
}

.priority-high-btn {
	background: var(--high-btn);
	border-color:var(--high-lit);
}

.priority-low {
	background: var(--low);
	border-color:var(--low-lit);
	order: -1;
	&::after{
		content: 'low priority';
		background: var(--low);
		border-color: var(--low-lit);
	}
}

.priority-low-btn{
	background: var(--low-btn);
	border-color: var(--low-lit);
}

.priority-lowest {
	background: var(--lowest);
	border-color:var(--lowest-lit);
	order: 0;
	&::after{
		content: 'lowest priority';
		background: var(--lowest);
		border-color: var(--lowest-lit);
	}
}

.priority-lowest-btn{
	background: var(--lowest-btn);
	border-color: var(--lowest-lit);
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["/*@font-face {\n    font-family: 'grupporegular';\n    src: url('./fonts/gruppo/gruppo-regular-webfont.woff2') format('woff2'),\n         url('./fonts/gruppo/gruppo-regular-webfont.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n\n}*/\n\n@font-face {\n    font-family: 'arsenalregular';\n    src: url('./fonts/arsenal/arsenal-regular-webfont.woff2') format('woff2'),\n         url('./fonts/arsenal/arsenal-regular-webfont.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n\n}\n\n* {\n\tbox-sizing: border-box;\n\tpadding: 0;\n\tmargin: 0;\n\t--main-clr: #1c002c;\n\t--second-clr: #330047;\n\t--text-clr: #ddd;\n\t--transit: all 0.2s ease-out;\n\t--border: 2px outset var(--second-clr);\n\t--highest: #300;\n\t--highest-lit: #a00;\n\t--highest-btn: #200;\n\t--high: #420;\n\t--high-lit: #a60;\n\t--high-btn: #310;\n\t--low: #030;\n\t--low-lit: #0a0;\n\t--low-btn: #020;\n\t--lowest: #333;\n\t--lowest-lit: #aaa;\n\t--lowest-btn: #222;\n\tfont-family: Helvetica, sans-serif;\n}\n\nbody {\n  background: var(--main-clr);\n\tdisplay: grid;\n\tgrid: 5.5rem 1fr / auto;\n\tcolor: var(--text-clr);\n\tmin-height: 100vh;\n}\n\ninput, button {\n\tbackground: #000;\n\tcolor: #ccc;\n}\n\nheader {\n\tdisplay: grid;\n\tgrid: 1fr 2fr / auto;\n\tpadding: .5rem 1rem;\n\tbackground: var(--second-clr);\n\tborder-bottom: 2px ridge var(--second-clr);\n}\n\n.upper-tab {\n\tgrid-area: 2 / 1 / 3 / -1;\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n.lower-tab {\n\tgrid-area: 1 / 1 / 2 / -1;\n\tdisplay: flex;\n\tpadding-block: .5rem;\n\tjustify-content: space-evenly;\n\tborder-bottom: 1px solid #fff4;\n}\n\n.title {\n\tfont-size: 2rem;\n}\n\n#content {\n\tgrid-area: 2 / 1 / -1 / -1;\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: space-evenly;\n\talign-items: center;\n\tpadding-block: 1.5rem;\n}\n\n.portal  {\n\twidth: 300px;\n\theight: 200px;\n\tbackground: linear-gradient( to bottom, var(--second-clr), var(--main-clr) );\n\tcolor: var(--text-clr);\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-size: 2rem;\n\tcursor: pointer;\n\tborder-radius: 1rem;\n\tborder: var(--border);\n\ttransition: var(--transit);\n\tposition: absolute;\n\ttop: 100px;\n\t&:hover{\n\t\tbox-shadow: 0 0 4rem -2rem #fff;\n\t\tborder: 11px ridge var(--second-clr);\n\t}\n}\n\n.home-projects {\n\tleft: 15%;\n}\n\n.home-tasks {\n\tleft: 65%;\n}\n\n/* Projects page */\n\n.projects-container {\n\twidth: 95vw;\n\tmin-height: 80%;\n\tbackground: var(--second-clr);\n\tcolor: var(--text-clr);\n\tborder-radius: 1rem;\n\tborder: var(--border);\n\tdisplay: grid;\n\tgrid: 4rem 1fr / repeat(auto-fill, minmax(180px, 1fr));\n\tz-index: 1;\n}\n\nbutton.addProjectBtn {\n  grid-area: 1 / 1 / 2 / -2;\n  background: var(--main-clr);\n\tborder: var(--border);\n\twidth: 110%;\n  font-size: 1.5rem;\n  text-shadow: 0 0 .5rem #aaa;\n\t&:hover{\n\t\tborder-style: inset;\n\t}\n}\n\nbutton.pFormCloseBtn.project-close-btn {\n    grid-area: 1 / -2 / 2 / -1;\n    position: relative;\n    top: 0;\n    width: 5rem;\n    right: -7rem;\n}\n\n.addProjectDialog {\n  background: var(--second-clr);\n  color: var(--text-clr);\n  padding: 1.5rem;\n  border: 1px solid;\n\tborder: 5px ridge var(--second-clr);\n  width: 50%;\n  height: 85%;\n  position: relative;\n  top: 7.5%;\n  left: 25%;\n}\n\n::backdrop {\n  background: #000a;\n}\n\n.project-form {\n  background: var(--main-clr);\n  width: 100%;\n  padding: 1rem;\n\tborder: .5rem ridge var(--second-clr);\n\tborder-radius: .5rem;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n}\n\n.formWrapper {\n  display: flex;\n  flex-flow: column;\n  gap: .5rem;\n\tpadding: 1rem;\n\twidth: 100%;\n\tmargin-top: 0.5rem;\n}\n\n.pWrapperWrapper {\n  display: grid;\n  grid: repeat(2, max-content) / repeat(2, calc(50% - .375rem));\n  gap: .2rem .75rem;\n}\n\n.pFormFieldWrapper {\n  display: flex;\n  flex-flow: row wrap;\n  gap: .5rem;\n  align-items: center;\n}\n\n.formInput {\n  background: var(--second-clr);\n  color: var(--text-clr);\n  border: var(--border);\n  padding: .15rem .3rem;\n\twidth: 100%;\n\tmargin-top: 0.3rem;\n}\n\n.pFormCloseBtn {\n\tposition: absolute;\n\ttop: 3rem;\n\tright: 3rem;\n\tpadding: .3rem 1rem;\n\tborder-radius: .5rem;\n\tfont-size: 1.5rem;\n\tbackground: var(--main-clr);\n\tcolor: var(--text-clr);\n\tz-index: 2;\n\tborder: 2px outset var(--second-clr);\n\t&:hover{\n\t\tborder-style: ridge;\n\t}\n\t&:active{\n\t\tborder-style: inset;\n\t\tpadding-inline: 1rem;\n\t\tbackground: var(--main-clr);\n\t\tcolor: var(--text-clr);\n\t}\n}\n\n.pFormTitle {\n\tborder: 2px outset var(--second-clr);\n  padding: .5rem 1.25rem;\n  border-radius: .5rem;\n  box-shadow: -1px -1px .3rem #aaa4;\n\tfont-family: 'grupporegular';\n}\n\n.infoModal {\n\tbackground: var(--second-clr);\n\tcolor: var(--text-clr);\n\tborder: var(--border);\n\tpadding: .25rem .5rem;\n\tposition: absolute;\n\tfont-size: .85rem;\n\tleft: 27.5%;\n\ttop: 25%;\n}\n\n.priorityWrapper {\n\tpadding-block: .75rem;\n}\n\n.formSlidingBtn {\n  margin-right: 1rem;\n\tappearance: none;\n\twidth: 4rem;\n\theight: 1.25rem;\n\tbackground-color: var(--text-clr);\n\tborder-radius: .75rem;\n\ttransition: var(--transit);\n\tdisplay: flex;\n\t&::before{\n\t\tcontent: '';\n\t\twidth: 1.15rem;\n\t\theight: 1.15rem;\n\t\tbackground: var(--main-clr);\n\t\tborder-radius: 50%;\n\t\tposition: relative;\n\t\ttop: .05rem;\n\t\tleft: 2px;\n\t\tbox-shadow: 0 0 1rem #fff;\n\t\ttransition: var(--transit);\n\t}\n\t&::after {\n    content: 'no';\n    position: relative;\n    color: var(--main-clr);\n    font-size: 1.2rem;\n    top: -1px;\n    left: 1.25rem;\n    text-shadow: 0 0 0.1rem var(--second-clr);\n\t\ttransition: var(--transit);\n\t}\n\t&:checked::before{\n\t\tleft: 2.75rem;\n\t}\n\t&:checked::after {\n\t\tcontent: 'yes';\n\t\tleft: -0.65rem;\n\t}\n}\n\n.createProjectBtn {\n  position: relative;\n  top: 0;\n  left: 0;\n\t&:hover{\n\t\tborder-style: inset;\n\t}\n}\n\n\n/* Project Cards */\n\n.projectsTray {\n  grid-area: 2 / 1 / 3 / -1;\n\tpadding: 1rem 2rem;\n  display: grid;\n  grid:  auto / repeat(auto-fill, minmax(250px, 1fr));\n  gap: 1.75rem 1rem;\n\tmargin-top: 1rem;\n}\n\n[class*=projectCard] {\n  height: 100px;\n  padding: .75rem 1.5rem;\n  border: var(--border);\n  display: flex;\n  flex-flow: column;\n  gap: .5rem;\n  border-radius: .5rem;\n\tposition: relative;\n}\n\n.pCardBtn {\n  top: 0rem;\n  right: 0;\n\tfont-size: 1rem;\n}\n\n.projectCard h2{\n\tfont-size: 1.5rem;\n\talign-self: center;\n\tfont-family: monospace;\n}\n\n.projectCard p {\n\ttext-overflow: ellipsis;\t\n\twhite-space: nowrap;\n\toverflow: hidden;\n\t&::first-letter{\n\t\tfont-family: monospace;\n\t\tfont-size: 1.25rem;\n\t\ttext-shadow: 0 0 .5rem #aaa;\n\t}\n}\n\n/* full detail windows */\n\ndialog.detailWindow {\n  width: 80%;\n  padding: 1rem 2rem;\n  margin: auto;\n  background: var(--main-clr);\n  color: var(--text-clr);\n  border: var(--border);\n}\n\n.fullDetailHeader {\n  display: flex;\n  flex-flow: column;\n\talign-items: center;\n  gap: 1rem;\n\tmargin-bottom: 2rem;\n}\n\n.fullDetailHeader > h2 {\n  display: flex;\n  gap: 0.7rem;\n}\n\n.fullDetailWindowWrapper {\n  background: var(--main-clr);\n  padding: 1rem 2rem;\n  border: var(--border);\n  border-radius: .5rem;\n  display: flex;\n  flex-flow: column;\n  gap: 1rem;\n}\n\n.tagsWrapper {\n  display: flex;\n  gap: 0.2rem;\n\talign-items: center;\n}\n\n.tagsWrapper > h3 {\n  margin-right: 1rem;\n  font-family: monospace;\n  font-weight: 400;\n  border: var(--border);\n  padding: .25rem;\n}\n\n.fullDetailTag {\n  display: flex;\n\tgap: 0.5rem;\n  background: #b5b5b5;\n\tcolor: var(--second-clr);\n  width: fit-content;\n\tpadding: 0.175rem 0.7rem;\n  border-radius: .5rem;\n\tborder: var(--border);\n  box-shadow: 0 0 1.5rem -0.75rem #fff;\n}\n\nbutton.fullDetailTagCloseBtn {\n  border: var(--border);\n  padding-inline: 0.2rem;\n  border-radius: .25rem;\n\tcursor: pointer;\n\ttransition: var(--transit);\n\t&:hover{\n\t\tborder-style: ridge;\n\t\tpadding-inline: .3rem;\n\t}\n\t&:active{\n\t\tborder-style: inset;\n\t}\n}\n\n.fullDetailTask {\n  display: grid;\n  grid: auto / repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1rem;\n}\n\n.fullDetailTask > h3 {\n  grid-area: 1 / 1 / 2 / -1;\n  font-size: 1.5rem;\n}\n\n.task-btn {\n  right: 0;\n  top: -1rem;\n\tfont-size: 1rem;\n}\n\n.detailTask {\n  height: fit-content;\n  padding-block: 1rem;\n\t&::first-letter{\n\t\tfont-size: 1.75rem;\n\t}\n}\n\n/* Conditional classes */\n\n.hidden {\n\tdisplay: none;\n}\n\n.priority-card{\n\t&::after {\n    position: absolute;\n    top: -1rem;\n    left: -1.5px;\n    border: var(--border);\n    padding: .15rem .3rem;\n    border-radius: .25rem;\n\t\tfont-variant-caps: all-small-caps;\n\t}\n}\n\n.priority-highest {\n\tbackground: var(--highest);\n\tborder-color:var(--highest-lit);\n\torder: -3;\n\t&::after{\n\t\tcontent: 'highest priority';\n\t\tbackground: var(--highest);\n\t\tborder-color: var(--highest-lit);\n\t}\n}\n\n.priority-highest-btn {\n\tbackground: var(--highest-btn);\n\tborder-color:var(--highest-lit);\n}\n\n.priority-high {\n\tbackground: var(--high);\n\tborder-color:var(--high-lit);\n\torder: -2;\n\t&::after{\n\t\tcontent: 'high priority';\n\t\tbackground: var(--high);\n\t\tborder-color: var(--high-lit);\n\t}\n}\n\n.priority-high-btn {\n\tbackground: var(--high-btn);\n\tborder-color:var(--high-lit);\n}\n\n.priority-low {\n\tbackground: var(--low);\n\tborder-color:var(--low-lit);\n\torder: -1;\n\t&::after{\n\t\tcontent: 'low priority';\n\t\tbackground: var(--low);\n\t\tborder-color: var(--low-lit);\n\t}\n}\n\n.priority-low-btn{\n\tbackground: var(--low-btn);\n\tborder-color: var(--low-lit);\n}\n\n.priority-lowest {\n\tbackground: var(--lowest);\n\tborder-color:var(--lowest-lit);\n\torder: 0;\n\t&::after{\n\t\tcontent: 'lowest priority';\n\t\tbackground: var(--lowest);\n\t\tborder-color: var(--lowest-lit);\n\t}\n}\n\n.priority-lowest-btn{\n\tbackground: var(--lowest-btn);\n\tborder-color: var(--lowest-lit);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/goalManager.js":
/*!****************************!*\
  !*** ./src/goalManager.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   Task: () => (/* binding */ Task),
/* harmony export */   clock: () => (/* binding */ clock),
/* harmony export */   dom: () => (/* binding */ dom),
/* harmony export */   tagManager: () => (/* binding */ tagManager)
/* harmony export */ });
class Project {
	constructor(name, description, tasks, dueDate, isImportant = undefined, isUrgent = undefined, tags = []){
		this.name = name;
		this.description = description;
		this.tasks = tasks;
		this.tags = tags;
		this.dueDate = dueDate;
		this.isImportant = isImportant;
		this.isUrgent = isUrgent;
	}

	get priority(){
		return this.isImportant && this.isUrgent ? 'highest'
		: this.isImportant && !this.isUrgent ? 'high'
		: !this.isImportant && this.isUrgent ? 'low'
		: 'lowest'
	}
};

class Task {
  constructor(name, role, description, subgoals, tasks){
    this.name = name;
    this.description = description;
    this.tags = [];
    this.isImportant = undefined;
    this.isUrgent = undefined;
    const currentDate = () => {
      const date = new Date();
      const days = () => date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
      const months = () => date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth();
      const hours = () => date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
      const minutes = () => date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
      const fullDate = [`${days()}-${months()}-${date.getFullYear()}`, `${hours()}:${minutes()}`];
      return fullDate.join(', ')
    };
    this.creationDate = currentDate();
  }

  get priority(){
    if(this.isImportant && this.isUrgent) return 'highest'
    else if (this.isImportant && !this.isUrgent) return 'high'
    else if (!this.isImportant && this.isUrgent) return 'low'
    else return 'lowest';
  }

};

const tagManager = (function (){

  const add = (obj, tag) => {
    return obj.tags.push(tag);
  };

  const remove = (obj, tag) => {
    return obj.tags.splice(obj.tags.indexOf(tag), 1)
  }

  return { add, remove }
})();

const dom = (function (){
  const add = el => document.createElement(el);
  const place = (el, className, textContent = '', reference, domPosition) => {
    let element = add(el);
    element.className = className;
    element.textContent = textContent;
    switch (domPosition){
      case 'before':
        return document.querySelector(reference).before(element);
      case 'prepend':
        return document.querySelector(reference).prepend(element);
      case 'append':
        return document.querySelector(reference).append(element);
      case 'after':
        return document.querySelector(reference).after(element);
    }
  };
  return { place, add }
})();

const clock = ( () => {
  const tictoc = () => {
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    return `${('0' + h).slice(-2)}:${('0' + m).slice(-2)}:${('0' + s).slice(-2)}`
  };

  let timer;

  const start = (ref) => {
    timer = setInterval( () => document.querySelector(ref).textContent = tictoc(), 1000);
  };

  const stop = () => clearInterval(timer);

  return { start, stop }
})();


/***/ }),

/***/ "./src/fonts/arsenal/arsenal-regular-webfont.woff":
/*!********************************************************!*\
  !*** ./src/fonts/arsenal/arsenal-regular-webfont.woff ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fbfdda72f9042e73d072.woff";

/***/ }),

/***/ "./src/fonts/arsenal/arsenal-regular-webfont.woff2":
/*!*********************************************************!*\
  !*** ./src/fonts/arsenal/arsenal-regular-webfont.woff2 ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e221d52cf15415053bbe.woff2";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _goalManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goalManager.js */ "./src/goalManager.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");


;


const $ = (() => {
  const log = console.log;
	const $ = $ => document.querySelector($);
	const attr = (el, atr, value) => el.setAttribute(atr, value);
  return { log, $, attr }
})();

_goalManager_js__WEBPACK_IMPORTED_MODULE_0__.clock.start('.clock');

const renderer = ( function () {

	const renderProjectWindow = ()=>{
		//projects window
		const projectsContainer = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('div');
		projectsContainer.className = 'projects-container';
		$.$('#content').append(projectsContainer);

		// Projects addProject btn
		const addProjectBtn = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('button');
		addProjectBtn.className = 'addProjectBtn';
		addProjectBtn.textContent = 'Add new project';
		projectsContainer.append(addProjectBtn);

		// Projects close window btn
		const closeProjectsContainerBtn = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('button');
		closeProjectsContainerBtn.className = 'pFormCloseBtn project-close-btn';
		closeProjectsContainerBtn.textContent = 'X';
		closeProjectsContainerBtn.addEventListener('click', e => {
			e.preventDefault();
			projectsContainer.classList.add('hidden');
		});
		addProjectBtn.after(closeProjectsContainerBtn);

		//Project cards
		const projectsTray = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('div');
		projectsTray.className = 'projectsTray';
		projectsContainer.append(projectsTray);

		//Projects Modal window to add info
		const projectsModal = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('dialog');
		projectsModal.className = 'addProjectDialog';
		projectsContainer.append(projectsModal);
		//show modal window upon btn click
		addProjectBtn.addEventListener('click', () => {
			$.$('.addProjectDialog').showModal();
		});

		// Projects Form inside modal window
		let pForm = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('form');
		pForm.novalidate = true;
		pForm.action = 'POST';
		pForm.method = '#';
		pForm.className = 'project-form';
		$.$('.addProjectDialog').append(pForm);
		
		// Projects Form close btn
		const pFormCloseBtn = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('button');
		pFormCloseBtn.className = 'pFormCloseBtn';
		pFormCloseBtn.textContent = 'X';
		pFormCloseBtn.addEventListener('click', e => {
			e.preventDefault();
			$.$('.addProjectDialog').close() 
		});
		pForm.prepend(pFormCloseBtn);

		// Projects Form title
		let pFormTitle = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('h2');
		pFormTitle.className = 'pFormTitle';
		pFormTitle.textContent = 'Add new project';
		pForm.append(pFormTitle);

		// Project form wrapper
		const pFormWrapper = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('div');
		pFormWrapper.className = 'formWrapper';
		pForm.append(pFormWrapper);

		// Projects description
		const pDescriptionWrapper = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('div');
		pDescriptionWrapper.className = 'pFormFieldWrapper';
		pFormWrapper.append(pDescriptionWrapper);
		
		const pDescriptionLabel = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('label');
		$.attr(pDescriptionLabel, 'for', 'pDescriptionInput');
		pDescriptionLabel.className = 'formLabel';
		pDescriptionLabel.textContent = 'Description: ';
		pDescriptionWrapper.append(pDescriptionLabel);

		const pDescriptionInput = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('input');
		pDescriptionInput.id = 'pDescriptionInput';
		pDescriptionInput.className = 'formInput';
		$.attr(pDescriptionInput, 'name', 'pDescription');
		pDescriptionLabel.after(pDescriptionInput);

			// Wrapping Name + Tasks
			const pWrapper1 = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('div');
			pWrapper1.className = 'pWrapperWrapper';
			pDescriptionWrapper.after(pWrapper1);

		// Project name field
		const pFormNameWrapper = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('div');
		pFormNameWrapper.className = 'pFormFieldWrapper';
		pWrapper1.append(pFormNameWrapper);

		const pFormNameLabel = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('label');
		pFormNameLabel.textContent = 'Project name: ';
		pFormNameLabel.className = 'formLabel';
		$.attr(pFormNameLabel, 'for', 'pFormNameInput');
		pFormNameWrapper.append(pFormNameLabel);

		const pFormNameInput = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('input');
		pFormNameInput.id = 'pFormNameInput';
		pFormNameInput.className = 'formInput';
		$.attr(pFormNameInput, 'name', 'pName');
		pFormNameLabel.after(pFormNameInput);

		// Project tasks
		const pTasksWrapper = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('div');
		pTasksWrapper.className = 'pFormFieldWrapper';
		pFormNameWrapper.after(pTasksWrapper);
		
		const pTasksLabel = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('label');
		$.attr(pTasksLabel, 'for', 'pTasksInput');
		pTasksLabel.className = 'formLabel';
		pTasksLabel.textContent = 'Tasks: ';
		pTasksWrapper.append(pTasksLabel);

		const pTasksInput = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('input');
		pTasksInput.id = 'pTasksInput';
		pTasksInput.className = 'formInput';
		$.attr(pTasksInput, 'name', 'pTasks');
		pTasksLabel.after(pTasksInput);
		//Extra: modal helper window for tasks input info
		const pTasksInputInfoModal = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('dialog');
		pTasksInputInfoModal.className = 'infoModal';
		pTasksInputInfoModal.textContent = 'Tip: Add multiple tasks by separating them with commas.';
		pTasksWrapper.addEventListener('mouseenter', () => pTasksInputInfoModal.show() );
		pTasksWrapper.addEventListener('mouseleave', () => pTasksInputInfoModal.close() );
		pTasksWrapper.append(pTasksInputInfoModal);

				//Wrapper 2 = Tags + DueDate
				const pWrapper2 = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('div');
				pWrapper2.className = 'pWrapperWrapper';
				pWrapper1.after(pWrapper2);

		// Projects tags
		const pTagsWrapper = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('div');
		pTagsWrapper.className = 'pFormFieldWrapper';
		pWrapper2.append(pTagsWrapper);

		const pTagsLabel = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('label');
		pTagsLabel.className = 'formLabel';
		$.attr(pTagsLabel, 'for', 'pTagsInput');
		pTagsLabel.textContent = 'Tags: ';
		pTagsWrapper.append(pTagsLabel);

		const pTagsInput = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('input');
		pTagsInput.className = 'formInput';
		pTagsInput.id = 'pTagsInput';
		$.attr(pTagsInput, 'name', 'pTags');
		pTagsLabel.after(pTagsInput);

		//Modal helper window for pTags
		const pTagsInputInfoModal = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('dialog');
		pTagsInputInfoModal.className = 'infoModal';
		pTagsInputInfoModal.textContent = 'Tip: Add multiple tags by separating them with commas.';
		pTagsWrapper.addEventListener('mouseenter', () => pTagsInputInfoModal.show() );
		pTagsWrapper.addEventListener('mouseleave', () => pTagsInputInfoModal.close() );
		pTagsWrapper.append(pTagsInputInfoModal);

		// Projects dueDate
		const pDueDateWrapper = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('div');
		pDueDateWrapper.className = 'pFormFieldWrapper';
		pTagsWrapper.after(pDueDateWrapper);

		const pDueDateLabel = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('label');
		pDueDateLabel.class = 'formlabel';
		pDueDateLabel.textContent = 'Due date: ';
		$.attr(pDueDateLabel, 'for', 'pDueDateinput');
		pDueDateWrapper.append(pDueDateLabel);

		const pDueDateinput = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('input');
		pDueDateinput.id = 'pDueDateinput';
		pDueDateinput.className = 'formInput';
		pDueDateinput.type = 'date';
		$.attr(pDueDateinput, 'name', 'pDueDate');
		pDueDateLabel.after(pDueDateinput);

		// Projects isImportant and isUrgent
		const pPriorityWrapper = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('div');
		pPriorityWrapper.className = 'pFormFieldWrapper priorityWrapper';
		pWrapper2.after(pPriorityWrapper);

		// Projects isimportant
		const pIsImportantLabel = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('label');
		pIsImportantLabel.className = 'formLabel';
		pIsImportantLabel.textContent = 'Important: ';
		$.attr(pIsImportantLabel, 'for', 'pIsImportantInput');
		pPriorityWrapper.append(pIsImportantLabel);

		const pIsImportantInput = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('input');
		pIsImportantInput.className = 'formSlidingBtn';
		pIsImportantInput.id = 'pIsImportantInput';
		pIsImportantInput.type = 'checkbox';
		$.attr(pIsImportantInput, 'name', 'pIsimportant');
		pIsImportantLabel.after(pIsImportantInput);

		// Projects isUrgent
		const pIsUrgentLabel = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('label');
		pIsUrgentLabel.className = 'formLabel';
		pIsUrgentLabel.textContent = 'Urgent: ';
		$.attr(pIsUrgentLabel, 'for', 'pIsUrgentInput');
		pIsImportantInput.after(pIsUrgentLabel);

		const pIsUrgentInput = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('input');
		pIsUrgentInput.className = 'formSlidingBtn';
		pIsUrgentInput.id = 'pIsUrgentInput';
		pIsUrgentInput.type = 'checkbox';
		$.attr(pIsUrgentInput, 'name', 'pIsUrgent');
		pIsUrgentLabel.after(pIsUrgentInput);

		// Create new project btn
		const createProjectBtn = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('button');
		createProjectBtn.className = 'pFormCloseBtn createProjectBtn';
		createProjectBtn.textContent = 'Create new project';
		createProjectBtn.type = 'submit';
		pPriorityWrapper.after(createProjectBtn);
		
		//Creating new project Event handler/ listener
		const createProject = () => {
			let project = new _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.Project(pFormNameInput.value, pDescriptionInput.value, pTasksInput.value.split(','), pDueDateinput.value);
			project.tags = pTagsInput.value.split(',');
			pIsImportantInput.checked ? project.isImportant = true : project.isImportant = false;
			pIsUrgentInput.checked ? project.isUrgent = true : project.isUrgent = false;
			projectsShelf.add(project);
			projectsShelf.placeProjects(project);
			projectsShelf.localStorageSet(project);
		};


		createProjectBtn.addEventListener('click', e => {
			e.preventDefault();
			createProject();
			projectsModal.close();
		});

	}; // End of renderProjects function


	return { renderProjectWindow }
} )();

const projectsShelf = (() => {
	const shelf = [];
	const add = project => shelf.push(project);
	const remove = project => shelf.pop(project);
	const lookup = () => console.table(shelf);
	// naming convention for placing projects in localStorage
	let num = 0;
	const localStorageSet = (project) => {
		if(!localStorage.getItem(`project${num}`)){
			localStorage.setItem('project'+num, JSON.stringify(project));
			num = 0;
		} else {
			num++;
			return localStorageSet(project)
		}
	};
	
	// Mutate JSON objects - retrieve parsed JSON, delete data inside it and replace original obj
	// Should be able to be used in any data inside JSON object
	/* 1 - find JSON containing string
	2 - store JSON in variable
	3 - parse JSON
	4 - remove tag from tag array
	5 - remove old JSON, add mutated JSON in place */
	const deleteJSONData = (key, value) => {
		let newJSON;
		let oldJSON;
		for(let i of Object.entries(localStorage)){
			if(JSON.parse(i[1])[key].includes(value)){
				newJSON = JSON.parse(i[1]);
				oldJSON = i[0];
				break;
			}
		};
		newJSON[key].splice(newJSON[key].indexOf(value), 1);
		localStorage.removeItem(oldJSON);
		localStorage.setItem(oldJSON, JSON.stringify(newJSON));
	};

	// add shelf to localStorage
	const updateLocalStorageOnExit = () => {
		$.log('reloading...');
		localStorage.setItem('projectArray', JSON.stringify(shelf));
	};

	//Function that updates the Project tray with cards for each project in the array
	const placeProjects = (project) => {

		const projectsTray = document.querySelector('.projectsTray');
		// Add coloring classes according to priority
		const priorityColoring = (project, el) => {
			if(project.priority === 'highest'){
				return el.tagName === 'DIV' ? el.classList.add('priority-card', 'priority-highest')
				: el.tagName === 'BUTTON' ? el.classList.add('priority-highest-btn') : null;
			} else if(project.priority === 'high'){
				return el.tagName === 'DIV' ? el.classList.add('priority-card', 'priority-high')
				: el.tagName === 'BUTTON' ? el.classList.add('priority-high-btn') : null;
			} else if(project.priority === 'low'){
				return el.tagName === 'DIV' ? el.classList.add('priority-card', 'priority-low')
				: el.tagName === 'BUTTON' ? el.classList.add('priority-low-btn') : null;
			} else {
				return el.tagName === 'DIV' ? el.classList.add('priority-card', 'priority-lowest')
				: el.tagName === 'BUTTON' ? el.classList.add('priority-lowest-btn') : null;
			}
		};

		
		let pCard = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('div');
		pCard.className = `projectCard-${shelf.length}`;
		priorityColoring(project, pCard);
		
		//Project Card Title
		const pCardTitle = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('h2');
		pCardTitle.textContent = project.name;
		pCard.append(pCardTitle);

		// Project Card description
		const pCardDescription = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('p');
		pCardDescription.textContent = project.description;
		pCardTitle.after(pCardDescription);

		// Project Card remove Btn
		const pCardRemoveBtn = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('button');
		pCardRemoveBtn.className = 'pFormCloseBtn pCardBtn';
		pCardRemoveBtn.textContent = 'X';
		pCardTitle.after(pCardRemoveBtn);
		priorityColoring(project, pCardRemoveBtn);
		pCardRemoveBtn.addEventListener('click', e => {
			e.stopPropagation();
			shelf.splice(shelf.indexOf(project), 1);
			for(let i of Object.entries(localStorage)){
				if(JSON.parse(i[1]).name.includes(project.name) && JSON.parse(i[1]).description.includes(project.description)){
					localStorage.removeItem(i[0])
					console.log(i, i[0], i[1]);
					break;
				}
			};
			pCard.remove();
		});
		
		projectsTray.append(pCard);

		// Full detail window from project Cards
		pCard.addEventListener('click', e => {
			let fullDetailWindow = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('dialog');
			fullDetailWindow.className = 'detailWindow';
			document.body.append(fullDetailWindow);
			fullDetailWindow.showModal();

			let fullDetailWindowWrapper = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('div');
			fullDetailWindowWrapper.className = 'fullDetailWindowWrapper';
			fullDetailWindow.append(fullDetailWindowWrapper);

			let fullDetailHeader = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('div');
			fullDetailHeader.className = 'fullDetailHeader';
			fullDetailWindowWrapper.append(fullDetailHeader);

			let detailTitle = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('h2');
			detailTitle.textContent = project.name;
			fullDetailHeader.prepend(detailTitle);

			let fullDetailWindowCloseBtn = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('button');
			fullDetailWindowCloseBtn.className = 'pFormCloseBtn';
			fullDetailWindowCloseBtn.textContent = 'X';
			detailTitle.after(fullDetailWindowCloseBtn);
			fullDetailWindowCloseBtn.addEventListener('click', () => fullDetailWindow.close());

			let detailDescription = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('h3');
			detailDescription.textContent = project.description;
			detailTitle.after(detailDescription);

			let detailTasksWrapper = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('div');
			detailTasksWrapper.className = 'fullDetailTask';
			fullDetailWindowWrapper.append(detailTasksWrapper);

			let detailTasksTitle = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('h3');
			detailTasksTitle.textContent = 'Tasks';
			detailTasksWrapper.append(detailTasksTitle);

			for(let task of project.tasks) {
				let detailTasksEntry = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('div');
				detailTasksEntry.className = 'projectCard-task';
				detailTasksWrapper.append(detailTasksEntry);

				let detailTasksName = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('p');
				detailTasksName.textContent = task;
				detailTasksEntry.append(detailTasksName);

				let detailTasksBtn = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('button');
				detailTasksBtn.className = 'pFormCloseBtn task-btn';
				detailTasksBtn.textContent = 'X';
				detailTasksName.after(detailTasksBtn);
				detailTasksBtn.addEventListener('click', e => {
					for(let i of project.tasks){
						if(i === task){
							project.tasks.splice(project.tasks.indexOf(task), 1);
							deleteJSONData('tasks', task);
							break;
						}
					}
					detailTasksEntry.remove();
				});
			};

			let detailTagsWrapper = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('div');
			detailTagsWrapper.className = 'tagsWrapper';
			fullDetailHeader.append(detailTagsWrapper);

			let detailTagsTitle = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('h3');
			detailTagsTitle.textContent = 'Tags';
			detailTagsWrapper.append(detailTagsTitle);

			for(let tag of project.tags){
				let detailTagsEntry = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('div');
				detailTagsEntry.className = 'fullDetailTag';
				detailTagsTitle.after(detailTagsEntry);
				
				let detailTagsName = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('p');
				detailTagsName.textContent = tag;
				detailTagsEntry.append(detailTagsName);

				let detailTagsBtn = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('button');
				detailTagsBtn.className = 'fullDetailTagCloseBtn';
				detailTagsBtn.textContent = 'X';
				detailTagsName.after(detailTagsBtn);
				detailTagsBtn.addEventListener('click', () => {
					for(let i of project.tags){
						if(i === tag){
							project.tags.splice(project.tags.indexOf(tag), 1);
							deleteJSONData('tags', tag);
							break;
						}
					};
				detailTagsEntry.remove();
				});
			};

			let detailPriority = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('span');
			detailPriority.textContent = '(priority: ' + project.priority;
			detailTitle.append(detailPriority);

			let detailDueDate = _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.dom.add('span');
			detailDueDate.textContent = ' - due date: ' + project.dueDate + ')';
			detailPriority.after(detailDueDate);

		});
	};
	
const restoreProjects = () => {
	for(let i in localStorage){
		if(i.includes('project')){
			let item = JSON.parse(localStorage.getItem(i));
			let project = new _goalManager_js__WEBPACK_IMPORTED_MODULE_0__.Project( item.name, item.description, item.tasks, item.dueDate, item.isImportant, item.isUrgent, item.tags );
			placeProjects(project);
			add(project);
		}
	}
};


	return { add, remove, lookup, placeProjects, shelf, localStorageSet, restoreProjects, updateLocalStorageOnExit }
})();

$.$('.home-projects').addEventListener('click', ()=>{
	renderer.renderProjectWindow();
	projectsShelf.restoreProjects();
}, { once: true });

$.$('.home-projects').addEventListener('click', () => {
	$.$('.projects-container').classList.remove('hidden');
});

document.addEventListener('beforeunload',  () => {
	alert('it worked!');
	projectsShelf.updateLocalStorageOnExit()
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHVLQUFnRTtBQUM1Ryw0Q0FBNEMscUtBQStEO0FBQzNHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xELGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx1RkFBdUYsTUFBTSxLQUFLLFlBQVksTUFBTSxPQUFPLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsS0FBSyxZQUFZLE1BQU0sT0FBTyxhQUFhLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxhQUFhLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sWUFB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QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsd0JBQXdCLGdEQUFHO0FBQzNCO0FBQ0E7O0FBRUEsdUJBQXVCLGdEQUFHO0FBQzFCO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixvREFBTztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxVQUFVO0FBQ1YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDLElBQUksWUFBWTs7QUFFakI7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LXRvZG8tYXNzaXN0YW50Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vbXktdG9kby1hc3Npc3RhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL215LXRvZG8tYXNzaXN0YW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9teS10b2RvLWFzc2lzdGFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL215LXRvZG8tYXNzaXN0YW50Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9teS10b2RvLWFzc2lzdGFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9teS10b2RvLWFzc2lzdGFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbXktdG9kby1hc3Npc3RhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbXktdG9kby1hc3Npc3RhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbXktdG9kby1hc3Npc3RhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9teS10b2RvLWFzc2lzdGFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL215LXRvZG8tYXNzaXN0YW50Ly4vc3JjL2dvYWxNYW5hZ2VyLmpzIiwid2VicGFjazovL215LXRvZG8tYXNzaXN0YW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215LXRvZG8tYXNzaXN0YW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL215LXRvZG8tYXNzaXN0YW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teS10b2RvLWFzc2lzdGFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL215LXRvZG8tYXNzaXN0YW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXktdG9kby1hc3Npc3RhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS10b2RvLWFzc2lzdGFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9teS10b2RvLWFzc2lzdGFudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9teS10b2RvLWFzc2lzdGFudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbXktdG9kby1hc3Npc3RhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvYXJzZW5hbC9hcnNlbmFsLXJlZ3VsYXItd2ViZm9udC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvYXJzZW5hbC9hcnNlbmFsLXJlZ3VsYXItd2ViZm9udC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLypAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ2dydXBwb3JlZ3VsYXInO1xuICAgIHNyYzogdXJsKCcuL2ZvbnRzL2dydXBwby9ncnVwcG8tcmVndWxhci13ZWJmb250LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICAgdXJsKCcuL2ZvbnRzL2dydXBwby9ncnVwcG8tcmVndWxhci13ZWJmb250LndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcblxufSovXG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnYXJzZW5hbHJlZ3VsYXInO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcblxufVxuXG4qIHtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0cGFkZGluZzogMDtcblx0bWFyZ2luOiAwO1xuXHQtLW1haW4tY2xyOiAjMWMwMDJjO1xuXHQtLXNlY29uZC1jbHI6ICMzMzAwNDc7XG5cdC0tdGV4dC1jbHI6ICNkZGQ7XG5cdC0tdHJhbnNpdDogYWxsIDAuMnMgZWFzZS1vdXQ7XG5cdC0tYm9yZGVyOiAycHggb3V0c2V0IHZhcigtLXNlY29uZC1jbHIpO1xuXHQtLWhpZ2hlc3Q6ICMzMDA7XG5cdC0taGlnaGVzdC1saXQ6ICNhMDA7XG5cdC0taGlnaGVzdC1idG46ICMyMDA7XG5cdC0taGlnaDogIzQyMDtcblx0LS1oaWdoLWxpdDogI2E2MDtcblx0LS1oaWdoLWJ0bjogIzMxMDtcblx0LS1sb3c6ICMwMzA7XG5cdC0tbG93LWxpdDogIzBhMDtcblx0LS1sb3ctYnRuOiAjMDIwO1xuXHQtLWxvd2VzdDogIzMzMztcblx0LS1sb3dlc3QtbGl0OiAjYWFhO1xuXHQtLWxvd2VzdC1idG46ICMyMjI7XG5cdGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNscik7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQ6IDUuNXJlbSAxZnIgLyBhdXRvO1xuXHRjb2xvcjogdmFyKC0tdGV4dC1jbHIpO1xuXHRtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuaW5wdXQsIGJ1dHRvbiB7XG5cdGJhY2tncm91bmQ6ICMwMDA7XG5cdGNvbG9yOiAjY2NjO1xufVxuXG5oZWFkZXIge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkOiAxZnIgMmZyIC8gYXV0bztcblx0cGFkZGluZzogLjVyZW0gMXJlbTtcblx0YmFja2dyb3VuZDogdmFyKC0tc2Vjb25kLWNscik7XG5cdGJvcmRlci1ib3R0b206IDJweCByaWRnZSB2YXIoLS1zZWNvbmQtY2xyKTtcbn1cblxuLnVwcGVyLXRhYiB7XG5cdGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gLTE7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmxvd2VyLXRhYiB7XG5cdGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gLTE7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdHBhZGRpbmctYmxvY2s6IC41cmVtO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY0O1xufVxuXG4udGl0bGUge1xuXHRmb250LXNpemU6IDJyZW07XG59XG5cbiNjb250ZW50IHtcblx0Z3JpZC1hcmVhOiAyIC8gMSAvIC0xIC8gLTE7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHBhZGRpbmctYmxvY2s6IDEuNXJlbTtcbn1cblxuLnBvcnRhbCAge1xuXHR3aWR0aDogMzAwcHg7XG5cdGhlaWdodDogMjAwcHg7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCggdG8gYm90dG9tLCB2YXIoLS1zZWNvbmQtY2xyKSwgdmFyKC0tbWFpbi1jbHIpICk7XG5cdGNvbG9yOiB2YXIoLS10ZXh0LWNscik7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRmb250LXNpemU6IDJyZW07XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0Ym9yZGVyLXJhZGl1czogMXJlbTtcblx0Ym9yZGVyOiB2YXIoLS1ib3JkZXIpO1xuXHR0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0KTtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDEwMHB4O1xuXHQmOmhvdmVye1xuXHRcdGJveC1zaGFkb3c6IDAgMCA0cmVtIC0ycmVtICNmZmY7XG5cdFx0Ym9yZGVyOiAxMXB4IHJpZGdlIHZhcigtLXNlY29uZC1jbHIpO1xuXHR9XG59XG5cbi5ob21lLXByb2plY3RzIHtcblx0bGVmdDogMTUlO1xufVxuXG4uaG9tZS10YXNrcyB7XG5cdGxlZnQ6IDY1JTtcbn1cblxuLyogUHJvamVjdHMgcGFnZSAqL1xuXG4ucHJvamVjdHMtY29udGFpbmVyIHtcblx0d2lkdGg6IDk1dnc7XG5cdG1pbi1oZWlnaHQ6IDgwJTtcblx0YmFja2dyb3VuZDogdmFyKC0tc2Vjb25kLWNscik7XG5cdGNvbG9yOiB2YXIoLS10ZXh0LWNscik7XG5cdGJvcmRlci1yYWRpdXM6IDFyZW07XG5cdGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZDogNHJlbSAxZnIgLyByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTgwcHgsIDFmcikpO1xuXHR6LWluZGV4OiAxO1xufVxuXG5idXR0b24uYWRkUHJvamVjdEJ0biB7XG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gLTI7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4tY2xyKTtcblx0Ym9yZGVyOiB2YXIoLS1ib3JkZXIpO1xuXHR3aWR0aDogMTEwJTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHRleHQtc2hhZG93OiAwIDAgLjVyZW0gI2FhYTtcblx0Jjpob3Zlcntcblx0XHRib3JkZXItc3R5bGU6IGluc2V0O1xuXHR9XG59XG5cbmJ1dHRvbi5wRm9ybUNsb3NlQnRuLnByb2plY3QtY2xvc2UtYnRuIHtcbiAgICBncmlkLWFyZWE6IDEgLyAtMiAvIDIgLyAtMTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiA1cmVtO1xuICAgIHJpZ2h0OiAtN3JlbTtcbn1cblxuLmFkZFByb2plY3REaWFsb2cge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmQtY2xyKTtcbiAgY29sb3I6IHZhcigtLXRleHQtY2xyKTtcbiAgcGFkZGluZzogMS41cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZDtcblx0Ym9yZGVyOiA1cHggcmlkZ2UgdmFyKC0tc2Vjb25kLWNscik7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogODUlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNy41JTtcbiAgbGVmdDogMjUlO1xufVxuXG46OmJhY2tkcm9wIHtcbiAgYmFja2dyb3VuZDogIzAwMGE7XG59XG5cbi5wcm9qZWN0LWZvcm0ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNscik7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxcmVtO1xuXHRib3JkZXI6IC41cmVtIHJpZGdlIHZhcigtLXNlY29uZC1jbHIpO1xuXHRib3JkZXItcmFkaXVzOiAuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mb3JtV3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBnYXA6IC41cmVtO1xuXHRwYWRkaW5nOiAxcmVtO1xuXHR3aWR0aDogMTAwJTtcblx0bWFyZ2luLXRvcDogMC41cmVtO1xufVxuXG4ucFdyYXBwZXJXcmFwcGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZDogcmVwZWF0KDIsIG1heC1jb250ZW50KSAvIHJlcGVhdCgyLCBjYWxjKDUwJSAtIC4zNzVyZW0pKTtcbiAgZ2FwOiAuMnJlbSAuNzVyZW07XG59XG5cbi5wRm9ybUZpZWxkV3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGdhcDogLjVyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mb3JtSW5wdXQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmQtY2xyKTtcbiAgY29sb3I6IHZhcigtLXRleHQtY2xyKTtcbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xuICBwYWRkaW5nOiAuMTVyZW0gLjNyZW07XG5cdHdpZHRoOiAxMDAlO1xuXHRtYXJnaW4tdG9wOiAwLjNyZW07XG59XG5cbi5wRm9ybUNsb3NlQnRuIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDNyZW07XG5cdHJpZ2h0OiAzcmVtO1xuXHRwYWRkaW5nOiAuM3JlbSAxcmVtO1xuXHRib3JkZXItcmFkaXVzOiAuNXJlbTtcblx0Zm9udC1zaXplOiAxLjVyZW07XG5cdGJhY2tncm91bmQ6IHZhcigtLW1haW4tY2xyKTtcblx0Y29sb3I6IHZhcigtLXRleHQtY2xyKTtcblx0ei1pbmRleDogMjtcblx0Ym9yZGVyOiAycHggb3V0c2V0IHZhcigtLXNlY29uZC1jbHIpO1xuXHQmOmhvdmVye1xuXHRcdGJvcmRlci1zdHlsZTogcmlkZ2U7XG5cdH1cblx0JjphY3RpdmV7XG5cdFx0Ym9yZGVyLXN0eWxlOiBpbnNldDtcblx0XHRwYWRkaW5nLWlubGluZTogMXJlbTtcblx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNscik7XG5cdFx0Y29sb3I6IHZhcigtLXRleHQtY2xyKTtcblx0fVxufVxuXG4ucEZvcm1UaXRsZSB7XG5cdGJvcmRlcjogMnB4IG91dHNldCB2YXIoLS1zZWNvbmQtY2xyKTtcbiAgcGFkZGluZzogLjVyZW0gMS4yNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogLjVyZW07XG4gIGJveC1zaGFkb3c6IC0xcHggLTFweCAuM3JlbSAjYWFhNDtcblx0Zm9udC1mYW1pbHk6ICdncnVwcG9yZWd1bGFyJztcbn1cblxuLmluZm9Nb2RhbCB7XG5cdGJhY2tncm91bmQ6IHZhcigtLXNlY29uZC1jbHIpO1xuXHRjb2xvcjogdmFyKC0tdGV4dC1jbHIpO1xuXHRib3JkZXI6IHZhcigtLWJvcmRlcik7XG5cdHBhZGRpbmc6IC4yNXJlbSAuNXJlbTtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRmb250LXNpemU6IC44NXJlbTtcblx0bGVmdDogMjcuNSU7XG5cdHRvcDogMjUlO1xufVxuXG4ucHJpb3JpdHlXcmFwcGVyIHtcblx0cGFkZGluZy1ibG9jazogLjc1cmVtO1xufVxuXG4uZm9ybVNsaWRpbmdCdG4ge1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG5cdGFwcGVhcmFuY2U6IG5vbmU7XG5cdHdpZHRoOiA0cmVtO1xuXHRoZWlnaHQ6IDEuMjVyZW07XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtY2xyKTtcblx0Ym9yZGVyLXJhZGl1czogLjc1cmVtO1xuXHR0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0KTtcblx0ZGlzcGxheTogZmxleDtcblx0Jjo6YmVmb3Jle1xuXHRcdGNvbnRlbnQ6ICcnO1xuXHRcdHdpZHRoOiAxLjE1cmVtO1xuXHRcdGhlaWdodDogMS4xNXJlbTtcblx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNscik7XG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHR0b3A6IC4wNXJlbTtcblx0XHRsZWZ0OiAycHg7XG5cdFx0Ym94LXNoYWRvdzogMCAwIDFyZW0gI2ZmZjtcblx0XHR0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0KTtcblx0fVxuXHQmOjphZnRlciB7XG4gICAgY29udGVudDogJ25vJztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY29sb3I6IHZhcigtLW1haW4tY2xyKTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB0b3A6IC0xcHg7XG4gICAgbGVmdDogMS4yNXJlbTtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDAuMXJlbSB2YXIoLS1zZWNvbmQtY2xyKTtcblx0XHR0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0KTtcblx0fVxuXHQmOmNoZWNrZWQ6OmJlZm9yZXtcblx0XHRsZWZ0OiAyLjc1cmVtO1xuXHR9XG5cdCY6Y2hlY2tlZDo6YWZ0ZXIge1xuXHRcdGNvbnRlbnQ6ICd5ZXMnO1xuXHRcdGxlZnQ6IC0wLjY1cmVtO1xuXHR9XG59XG5cbi5jcmVhdGVQcm9qZWN0QnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG5cdCY6aG92ZXJ7XG5cdFx0Ym9yZGVyLXN0eWxlOiBpbnNldDtcblx0fVxufVxuXG5cbi8qIFByb2plY3QgQ2FyZHMgKi9cblxuLnByb2plY3RzVHJheSB7XG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gLTE7XG5cdHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZDogIGF1dG8gLyByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjUwcHgsIDFmcikpO1xuICBnYXA6IDEuNzVyZW0gMXJlbTtcblx0bWFyZ2luLXRvcDogMXJlbTtcbn1cblxuW2NsYXNzKj1wcm9qZWN0Q2FyZF0ge1xuICBoZWlnaHQ6IDEwMHB4O1xuICBwYWRkaW5nOiAuNzVyZW0gMS41cmVtO1xuICBib3JkZXI6IHZhcigtLWJvcmRlcik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBnYXA6IC41cmVtO1xuICBib3JkZXItcmFkaXVzOiAuNXJlbTtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucENhcmRCdG4ge1xuICB0b3A6IDByZW07XG4gIHJpZ2h0OiAwO1xuXHRmb250LXNpemU6IDFyZW07XG59XG5cbi5wcm9qZWN0Q2FyZCBoMntcblx0Zm9udC1zaXplOiAxLjVyZW07XG5cdGFsaWduLXNlbGY6IGNlbnRlcjtcblx0Zm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbn1cblxuLnByb2plY3RDYXJkIHAge1xuXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcdFxuXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHQmOjpmaXJzdC1sZXR0ZXJ7XG5cdFx0Zm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcblx0XHRmb250LXNpemU6IDEuMjVyZW07XG5cdFx0dGV4dC1zaGFkb3c6IDAgMCAuNXJlbSAjYWFhO1xuXHR9XG59XG5cbi8qIGZ1bGwgZGV0YWlsIHdpbmRvd3MgKi9cblxuZGlhbG9nLmRldGFpbFdpbmRvdyB7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNscik7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNscik7XG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcbn1cblxuLmZ1bGxEZXRhaWxIZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xuXHRtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4uZnVsbERldGFpbEhlYWRlciA+IGgyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjdyZW07XG59XG5cbi5mdWxsRGV0YWlsV2luZG93V3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4tY2xyKTtcbiAgcGFkZGluZzogMXJlbSAycmVtO1xuICBib3JkZXI6IHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IC41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4udGFnc1dyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuMnJlbTtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRhZ3NXcmFwcGVyID4gaDMge1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcbiAgcGFkZGluZzogLjI1cmVtO1xufVxuXG4uZnVsbERldGFpbFRhZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG5cdGdhcDogMC41cmVtO1xuICBiYWNrZ3JvdW5kOiAjYjViNWI1O1xuXHRjb2xvcjogdmFyKC0tc2Vjb25kLWNscik7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcblx0cGFkZGluZzogMC4xNzVyZW0gMC43cmVtO1xuICBib3JkZXItcmFkaXVzOiAuNXJlbTtcblx0Ym9yZGVyOiB2YXIoLS1ib3JkZXIpO1xuICBib3gtc2hhZG93OiAwIDAgMS41cmVtIC0wLjc1cmVtICNmZmY7XG59XG5cbmJ1dHRvbi5mdWxsRGV0YWlsVGFnQ2xvc2VCdG4ge1xuICBib3JkZXI6IHZhcigtLWJvcmRlcik7XG4gIHBhZGRpbmctaW5saW5lOiAwLjJyZW07XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHR0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0KTtcblx0Jjpob3Zlcntcblx0XHRib3JkZXItc3R5bGU6IHJpZGdlO1xuXHRcdHBhZGRpbmctaW5saW5lOiAuM3JlbTtcblx0fVxuXHQmOmFjdGl2ZXtcblx0XHRib3JkZXItc3R5bGU6IGluc2V0O1xuXHR9XG59XG5cbi5mdWxsRGV0YWlsVGFzayB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQ6IGF1dG8gLyByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XG4gIGdhcDogMXJlbTtcbn1cblxuLmZ1bGxEZXRhaWxUYXNrID4gaDMge1xuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIC0xO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLnRhc2stYnRuIHtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogLTFyZW07XG5cdGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLmRldGFpbFRhc2sge1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBwYWRkaW5nLWJsb2NrOiAxcmVtO1xuXHQmOjpmaXJzdC1sZXR0ZXJ7XG5cdFx0Zm9udC1zaXplOiAxLjc1cmVtO1xuXHR9XG59XG5cbi8qIENvbmRpdGlvbmFsIGNsYXNzZXMgKi9cblxuLmhpZGRlbiB7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG5cbi5wcmlvcml0eS1jYXJke1xuXHQmOjphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTFyZW07XG4gICAgbGVmdDogLTEuNXB4O1xuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcbiAgICBwYWRkaW5nOiAuMTVyZW0gLjNyZW07XG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuXHRcdGZvbnQtdmFyaWFudC1jYXBzOiBhbGwtc21hbGwtY2Fwcztcblx0fVxufVxuXG4ucHJpb3JpdHktaGlnaGVzdCB7XG5cdGJhY2tncm91bmQ6IHZhcigtLWhpZ2hlc3QpO1xuXHRib3JkZXItY29sb3I6dmFyKC0taGlnaGVzdC1saXQpO1xuXHRvcmRlcjogLTM7XG5cdCY6OmFmdGVye1xuXHRcdGNvbnRlbnQ6ICdoaWdoZXN0IHByaW9yaXR5Jztcblx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1oaWdoZXN0KTtcblx0XHRib3JkZXItY29sb3I6IHZhcigtLWhpZ2hlc3QtbGl0KTtcblx0fVxufVxuXG4ucHJpb3JpdHktaGlnaGVzdC1idG4ge1xuXHRiYWNrZ3JvdW5kOiB2YXIoLS1oaWdoZXN0LWJ0bik7XG5cdGJvcmRlci1jb2xvcjp2YXIoLS1oaWdoZXN0LWxpdCk7XG59XG5cbi5wcmlvcml0eS1oaWdoIHtcblx0YmFja2dyb3VuZDogdmFyKC0taGlnaCk7XG5cdGJvcmRlci1jb2xvcjp2YXIoLS1oaWdoLWxpdCk7XG5cdG9yZGVyOiAtMjtcblx0Jjo6YWZ0ZXJ7XG5cdFx0Y29udGVudDogJ2hpZ2ggcHJpb3JpdHknO1xuXHRcdGJhY2tncm91bmQ6IHZhcigtLWhpZ2gpO1xuXHRcdGJvcmRlci1jb2xvcjogdmFyKC0taGlnaC1saXQpO1xuXHR9XG59XG5cbi5wcmlvcml0eS1oaWdoLWJ0biB7XG5cdGJhY2tncm91bmQ6IHZhcigtLWhpZ2gtYnRuKTtcblx0Ym9yZGVyLWNvbG9yOnZhcigtLWhpZ2gtbGl0KTtcbn1cblxuLnByaW9yaXR5LWxvdyB7XG5cdGJhY2tncm91bmQ6IHZhcigtLWxvdyk7XG5cdGJvcmRlci1jb2xvcjp2YXIoLS1sb3ctbGl0KTtcblx0b3JkZXI6IC0xO1xuXHQmOjphZnRlcntcblx0XHRjb250ZW50OiAnbG93IHByaW9yaXR5Jztcblx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1sb3cpO1xuXHRcdGJvcmRlci1jb2xvcjogdmFyKC0tbG93LWxpdCk7XG5cdH1cbn1cblxuLnByaW9yaXR5LWxvdy1idG57XG5cdGJhY2tncm91bmQ6IHZhcigtLWxvdy1idG4pO1xuXHRib3JkZXItY29sb3I6IHZhcigtLWxvdy1saXQpO1xufVxuXG4ucHJpb3JpdHktbG93ZXN0IHtcblx0YmFja2dyb3VuZDogdmFyKC0tbG93ZXN0KTtcblx0Ym9yZGVyLWNvbG9yOnZhcigtLWxvd2VzdC1saXQpO1xuXHRvcmRlcjogMDtcblx0Jjo6YWZ0ZXJ7XG5cdFx0Y29udGVudDogJ2xvd2VzdCBwcmlvcml0eSc7XG5cdFx0YmFja2dyb3VuZDogdmFyKC0tbG93ZXN0KTtcblx0XHRib3JkZXItY29sb3I6IHZhcigtLWxvd2VzdC1saXQpO1xuXHR9XG59XG5cbi5wcmlvcml0eS1sb3dlc3QtYnRue1xuXHRiYWNrZ3JvdW5kOiB2YXIoLS1sb3dlc3QtYnRuKTtcblx0Ym9yZGVyLWNvbG9yOiB2YXIoLS1sb3dlc3QtbGl0KTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7RUFPRTs7QUFFRjtJQUNJLDZCQUE2QjtJQUM3QjsrREFDdUU7SUFDdkUsbUJBQW1CO0lBQ25CLGtCQUFrQjs7QUFFdEI7O0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsVUFBVTtDQUNWLFNBQVM7Q0FDVCxtQkFBbUI7Q0FDbkIscUJBQXFCO0NBQ3JCLGdCQUFnQjtDQUNoQiw0QkFBNEI7Q0FDNUIsc0NBQXNDO0NBQ3RDLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLFdBQVc7Q0FDWCxlQUFlO0NBQ2YsZUFBZTtDQUNmLGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLGtDQUFrQztBQUNuQzs7QUFFQTtFQUNFLDJCQUEyQjtDQUM1QixhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLHNCQUFzQjtDQUN0QixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsV0FBVztBQUNaOztBQUVBO0NBQ0MsYUFBYTtDQUNiLG9CQUFvQjtDQUNwQixtQkFBbUI7Q0FDbkIsNkJBQTZCO0NBQzdCLDBDQUEwQztBQUMzQzs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixhQUFhO0NBQ2IsOEJBQThCO0FBQy9COztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLGFBQWE7Q0FDYixvQkFBb0I7Q0FDcEIsNkJBQTZCO0NBQzdCLDhCQUE4QjtBQUMvQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQywwQkFBMEI7Q0FDMUIsa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYiw2QkFBNkI7Q0FDN0IsbUJBQW1CO0NBQ25CLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixhQUFhO0NBQ2IsNEVBQTRFO0NBQzVFLHNCQUFzQjtDQUN0QixhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQixlQUFlO0NBQ2YsZUFBZTtDQUNmLG1CQUFtQjtDQUNuQixxQkFBcUI7Q0FDckIsMEJBQTBCO0NBQzFCLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1Y7RUFDQywrQkFBK0I7RUFDL0Isb0NBQW9DO0NBQ3JDO0FBQ0Q7O0FBRUE7Q0FDQyxTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxTQUFTO0FBQ1Y7O0FBRUEsa0JBQWtCOztBQUVsQjtDQUNDLFdBQVc7Q0FDWCxlQUFlO0NBQ2YsNkJBQTZCO0NBQzdCLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIscUJBQXFCO0NBQ3JCLGFBQWE7Q0FDYixzREFBc0Q7Q0FDdEQsVUFBVTtBQUNYOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDJCQUEyQjtDQUM1QixxQkFBcUI7Q0FDckIsV0FBVztFQUNWLGlCQUFpQjtFQUNqQiwyQkFBMkI7Q0FDNUI7RUFDQyxtQkFBbUI7Q0FDcEI7QUFDRDs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsaUJBQWlCO0NBQ2xCLG1DQUFtQztFQUNsQyxVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxhQUFhO0NBQ2QscUNBQXFDO0NBQ3JDLG9CQUFvQjtFQUNuQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsVUFBVTtDQUNYLGFBQWE7Q0FDYixXQUFXO0NBQ1gsa0JBQWtCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZEQUE2RDtFQUM3RCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixxQkFBcUI7Q0FDdEIsV0FBVztDQUNYLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixTQUFTO0NBQ1QsV0FBVztDQUNYLG1CQUFtQjtDQUNuQixvQkFBb0I7Q0FDcEIsaUJBQWlCO0NBQ2pCLDJCQUEyQjtDQUMzQixzQkFBc0I7Q0FDdEIsVUFBVTtDQUNWLG9DQUFvQztDQUNwQztFQUNDLG1CQUFtQjtDQUNwQjtDQUNBO0VBQ0MsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQiwyQkFBMkI7RUFDM0Isc0JBQXNCO0NBQ3ZCO0FBQ0Q7O0FBRUE7Q0FDQyxvQ0FBb0M7RUFDbkMsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixpQ0FBaUM7Q0FDbEMsNEJBQTRCO0FBQzdCOztBQUVBO0NBQ0MsNkJBQTZCO0NBQzdCLHNCQUFzQjtDQUN0QixxQkFBcUI7Q0FDckIscUJBQXFCO0NBQ3JCLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsV0FBVztDQUNYLFFBQVE7QUFDVDs7QUFFQTtDQUNDLHFCQUFxQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtDQUNuQixnQkFBZ0I7Q0FDaEIsV0FBVztDQUNYLGVBQWU7Q0FDZixpQ0FBaUM7Q0FDakMscUJBQXFCO0NBQ3JCLDBCQUEwQjtDQUMxQixhQUFhO0NBQ2I7RUFDQyxXQUFXO0VBQ1gsY0FBYztFQUNkLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULHlCQUF5QjtFQUN6QiwwQkFBMEI7Q0FDM0I7Q0FDQTtJQUNHLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsYUFBYTtJQUNiLHlDQUF5QztFQUMzQywwQkFBMEI7Q0FDM0I7Q0FDQTtFQUNDLGFBQWE7Q0FDZDtDQUNBO0VBQ0MsY0FBYztFQUNkLGNBQWM7Q0FDZjtBQUNEOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0NBQ1I7RUFDQyxtQkFBbUI7Q0FDcEI7QUFDRDs7O0FBR0Esa0JBQWtCOztBQUVsQjtFQUNFLHlCQUF5QjtDQUMxQixrQkFBa0I7RUFDakIsYUFBYTtFQUNiLG1EQUFtRDtFQUNuRCxpQkFBaUI7Q0FDbEIsZ0JBQWdCO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1Ysb0JBQW9CO0NBQ3JCLGtCQUFrQjtBQUNuQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxRQUFRO0NBQ1QsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEI7RUFDQyxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtDQUM1QjtBQUNEOztBQUVBLHdCQUF3Qjs7QUFFeEI7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7Q0FDbEIsbUJBQW1CO0VBQ2xCLFNBQVM7Q0FDVixtQkFBbUI7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7Q0FDWixtQkFBbUI7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7Q0FDZCxXQUFXO0VBQ1YsbUJBQW1CO0NBQ3BCLHdCQUF3QjtFQUN2QixrQkFBa0I7Q0FDbkIsd0JBQXdCO0VBQ3ZCLG9CQUFvQjtDQUNyQixxQkFBcUI7RUFDcEIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixxQkFBcUI7Q0FDdEIsZUFBZTtDQUNmLDBCQUEwQjtDQUMxQjtFQUNDLG1CQUFtQjtFQUNuQixxQkFBcUI7Q0FDdEI7Q0FDQTtFQUNDLG1CQUFtQjtDQUNwQjtBQUNEOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlEQUFpRDtFQUNqRCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsUUFBUTtFQUNSLFVBQVU7Q0FDWCxlQUFlO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtDQUNwQjtFQUNDLGtCQUFrQjtDQUNuQjtBQUNEOztBQUVBLHdCQUF3Qjs7QUFFeEI7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQztJQUNHLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIscUJBQXFCO0VBQ3ZCLGlDQUFpQztDQUNsQztBQUNEOztBQUVBO0NBQ0MsMEJBQTBCO0NBQzFCLCtCQUErQjtDQUMvQixTQUFTO0NBQ1Q7RUFDQywyQkFBMkI7RUFDM0IsMEJBQTBCO0VBQzFCLGdDQUFnQztDQUNqQztBQUNEOztBQUVBO0NBQ0MsOEJBQThCO0NBQzlCLCtCQUErQjtBQUNoQzs7QUFFQTtDQUNDLHVCQUF1QjtDQUN2Qiw0QkFBNEI7Q0FDNUIsU0FBUztDQUNUO0VBQ0Msd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2Qiw2QkFBNkI7Q0FDOUI7QUFDRDs7QUFFQTtDQUNDLDJCQUEyQjtDQUMzQiw0QkFBNEI7QUFDN0I7O0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsMkJBQTJCO0NBQzNCLFNBQVM7Q0FDVDtFQUNDLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsNEJBQTRCO0NBQzdCO0FBQ0Q7O0FBRUE7Q0FDQywwQkFBMEI7Q0FDMUIsNEJBQTRCO0FBQzdCOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLDhCQUE4QjtDQUM5QixRQUFRO0NBQ1I7RUFDQywwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLCtCQUErQjtDQUNoQztBQUNEOztBQUVBO0NBQ0MsNkJBQTZCO0NBQzdCLCtCQUErQjtBQUNoQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ2dydXBwb3JlZ3VsYXInO1xcbiAgICBzcmM6IHVybCgnLi9mb250cy9ncnVwcG8vZ3J1cHBvLXJlZ3VsYXItd2ViZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgICB1cmwoJy4vZm9udHMvZ3J1cHBvL2dydXBwby1yZWd1bGFyLXdlYmZvbnQud29mZicpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuXFxufSovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnYXJzZW5hbHJlZ3VsYXInO1xcbiAgICBzcmM6IHVybCgnLi9mb250cy9hcnNlbmFsL2Fyc2VuYWwtcmVndWxhci13ZWJmb250LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgIHVybCgnLi9mb250cy9hcnNlbmFsL2Fyc2VuYWwtcmVndWxhci13ZWJmb250LndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcblxcbn1cXG5cXG4qIHtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0bWFyZ2luOiAwO1xcblxcdC0tbWFpbi1jbHI6ICMxYzAwMmM7XFxuXFx0LS1zZWNvbmQtY2xyOiAjMzMwMDQ3O1xcblxcdC0tdGV4dC1jbHI6ICNkZGQ7XFxuXFx0LS10cmFuc2l0OiBhbGwgMC4ycyBlYXNlLW91dDtcXG5cXHQtLWJvcmRlcjogMnB4IG91dHNldCB2YXIoLS1zZWNvbmQtY2xyKTtcXG5cXHQtLWhpZ2hlc3Q6ICMzMDA7XFxuXFx0LS1oaWdoZXN0LWxpdDogI2EwMDtcXG5cXHQtLWhpZ2hlc3QtYnRuOiAjMjAwO1xcblxcdC0taGlnaDogIzQyMDtcXG5cXHQtLWhpZ2gtbGl0OiAjYTYwO1xcblxcdC0taGlnaC1idG46ICMzMTA7XFxuXFx0LS1sb3c6ICMwMzA7XFxuXFx0LS1sb3ctbGl0OiAjMGEwO1xcblxcdC0tbG93LWJ0bjogIzAyMDtcXG5cXHQtLWxvd2VzdDogIzMzMztcXG5cXHQtLWxvd2VzdC1saXQ6ICNhYWE7XFxuXFx0LS1sb3dlc3QtYnRuOiAjMjIyO1xcblxcdGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jbHIpO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZDogNS41cmVtIDFmciAvIGF1dG87XFxuXFx0Y29sb3I6IHZhcigtLXRleHQtY2xyKTtcXG5cXHRtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuaW5wdXQsIGJ1dHRvbiB7XFxuXFx0YmFja2dyb3VuZDogIzAwMDtcXG5cXHRjb2xvcjogI2NjYztcXG59XFxuXFxuaGVhZGVyIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQ6IDFmciAyZnIgLyBhdXRvO1xcblxcdHBhZGRpbmc6IC41cmVtIDFyZW07XFxuXFx0YmFja2dyb3VuZDogdmFyKC0tc2Vjb25kLWNscik7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMnB4IHJpZGdlIHZhcigtLXNlY29uZC1jbHIpO1xcbn1cXG5cXG4udXBwZXItdGFiIHtcXG5cXHRncmlkLWFyZWE6IDIgLyAxIC8gMyAvIC0xO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubG93ZXItdGFiIHtcXG5cXHRncmlkLWFyZWE6IDEgLyAxIC8gMiAvIC0xO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0cGFkZGluZy1ibG9jazogLjVyZW07XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY0O1xcbn1cXG5cXG4udGl0bGUge1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuI2NvbnRlbnQge1xcblxcdGdyaWQtYXJlYTogMiAvIDEgLyAtMSAvIC0xO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cGFkZGluZy1ibG9jazogMS41cmVtO1xcbn1cXG5cXG4ucG9ydGFsICB7XFxuXFx0d2lkdGg6IDMwMHB4O1xcblxcdGhlaWdodDogMjAwcHg7XFxuXFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCB0byBib3R0b20sIHZhcigtLXNlY29uZC1jbHIpLCB2YXIoLS1tYWluLWNscikgKTtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dC1jbHIpO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRmb250LXNpemU6IDJyZW07XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGJvcmRlci1yYWRpdXM6IDFyZW07XFxuXFx0Ym9yZGVyOiB2YXIoLS1ib3JkZXIpO1xcblxcdHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXQpO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDEwMHB4O1xcblxcdCY6aG92ZXJ7XFxuXFx0XFx0Ym94LXNoYWRvdzogMCAwIDRyZW0gLTJyZW0gI2ZmZjtcXG5cXHRcXHRib3JkZXI6IDExcHggcmlkZ2UgdmFyKC0tc2Vjb25kLWNscik7XFxuXFx0fVxcbn1cXG5cXG4uaG9tZS1wcm9qZWN0cyB7XFxuXFx0bGVmdDogMTUlO1xcbn1cXG5cXG4uaG9tZS10YXNrcyB7XFxuXFx0bGVmdDogNjUlO1xcbn1cXG5cXG4vKiBQcm9qZWN0cyBwYWdlICovXFxuXFxuLnByb2plY3RzLWNvbnRhaW5lciB7XFxuXFx0d2lkdGg6IDk1dnc7XFxuXFx0bWluLWhlaWdodDogODAlO1xcblxcdGJhY2tncm91bmQ6IHZhcigtLXNlY29uZC1jbHIpO1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0LWNscik7XFxuXFx0Ym9yZGVyLXJhZGl1czogMXJlbTtcXG5cXHRib3JkZXI6IHZhcigtLWJvcmRlcik7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkOiA0cmVtIDFmciAvIHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxODBweCwgMWZyKSk7XFxuXFx0ei1pbmRleDogMTtcXG59XFxuXFxuYnV0dG9uLmFkZFByb2plY3RCdG4ge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAtMjtcXG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4tY2xyKTtcXG5cXHRib3JkZXI6IHZhcigtLWJvcmRlcik7XFxuXFx0d2lkdGg6IDExMCU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHRleHQtc2hhZG93OiAwIDAgLjVyZW0gI2FhYTtcXG5cXHQmOmhvdmVye1xcblxcdFxcdGJvcmRlci1zdHlsZTogaW5zZXQ7XFxuXFx0fVxcbn1cXG5cXG5idXR0b24ucEZvcm1DbG9zZUJ0bi5wcm9qZWN0LWNsb3NlLWJ0biB7XFxuICAgIGdyaWQtYXJlYTogMSAvIC0yIC8gMiAvIC0xO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDVyZW07XFxuICAgIHJpZ2h0OiAtN3JlbTtcXG59XFxuXFxuLmFkZFByb2plY3REaWFsb2cge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kLWNscik7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jbHIpO1xcbiAgcGFkZGluZzogMS41cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxuXFx0Ym9yZGVyOiA1cHggcmlkZ2UgdmFyKC0tc2Vjb25kLWNscik7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiA4NSU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDcuNSU7XFxuICBsZWZ0OiAyNSU7XFxufVxcblxcbjo6YmFja2Ryb3Age1xcbiAgYmFja2dyb3VuZDogIzAwMGE7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0ge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jbHIpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtO1xcblxcdGJvcmRlcjogLjVyZW0gcmlkZ2UgdmFyKC0tc2Vjb25kLWNscik7XFxuXFx0Ym9yZGVyLXJhZGl1czogLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9ybVdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgZ2FwOiAuNXJlbTtcXG5cXHRwYWRkaW5nOiAxcmVtO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1hcmdpbi10b3A6IDAuNXJlbTtcXG59XFxuXFxuLnBXcmFwcGVyV3JhcHBlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZDogcmVwZWF0KDIsIG1heC1jb250ZW50KSAvIHJlcGVhdCgyLCBjYWxjKDUwJSAtIC4zNzVyZW0pKTtcXG4gIGdhcDogLjJyZW0gLjc1cmVtO1xcbn1cXG5cXG4ucEZvcm1GaWVsZFdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICBnYXA6IC41cmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvcm1JbnB1dCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmQtY2xyKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNscik7XFxuICBib3JkZXI6IHZhcigtLWJvcmRlcik7XFxuICBwYWRkaW5nOiAuMTVyZW0gLjNyZW07XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bWFyZ2luLXRvcDogMC4zcmVtO1xcbn1cXG5cXG4ucEZvcm1DbG9zZUJ0biB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogM3JlbTtcXG5cXHRyaWdodDogM3JlbTtcXG5cXHRwYWRkaW5nOiAuM3JlbSAxcmVtO1xcblxcdGJvcmRlci1yYWRpdXM6IC41cmVtO1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdGJhY2tncm91bmQ6IHZhcigtLW1haW4tY2xyKTtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dC1jbHIpO1xcblxcdHotaW5kZXg6IDI7XFxuXFx0Ym9yZGVyOiAycHggb3V0c2V0IHZhcigtLXNlY29uZC1jbHIpO1xcblxcdCY6aG92ZXJ7XFxuXFx0XFx0Ym9yZGVyLXN0eWxlOiByaWRnZTtcXG5cXHR9XFxuXFx0JjphY3RpdmV7XFxuXFx0XFx0Ym9yZGVyLXN0eWxlOiBpbnNldDtcXG5cXHRcXHRwYWRkaW5nLWlubGluZTogMXJlbTtcXG5cXHRcXHRiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNscik7XFxuXFx0XFx0Y29sb3I6IHZhcigtLXRleHQtY2xyKTtcXG5cXHR9XFxufVxcblxcbi5wRm9ybVRpdGxlIHtcXG5cXHRib3JkZXI6IDJweCBvdXRzZXQgdmFyKC0tc2Vjb25kLWNscik7XFxuICBwYWRkaW5nOiAuNXJlbSAxLjI1cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICBib3gtc2hhZG93OiAtMXB4IC0xcHggLjNyZW0gI2FhYTQ7XFxuXFx0Zm9udC1mYW1pbHk6ICdncnVwcG9yZWd1bGFyJztcXG59XFxuXFxuLmluZm9Nb2RhbCB7XFxuXFx0YmFja2dyb3VuZDogdmFyKC0tc2Vjb25kLWNscik7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQtY2xyKTtcXG5cXHRib3JkZXI6IHZhcigtLWJvcmRlcik7XFxuXFx0cGFkZGluZzogLjI1cmVtIC41cmVtO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRmb250LXNpemU6IC44NXJlbTtcXG5cXHRsZWZ0OiAyNy41JTtcXG5cXHR0b3A6IDI1JTtcXG59XFxuXFxuLnByaW9yaXR5V3JhcHBlciB7XFxuXFx0cGFkZGluZy1ibG9jazogLjc1cmVtO1xcbn1cXG5cXG4uZm9ybVNsaWRpbmdCdG4ge1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcblxcdGFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0d2lkdGg6IDRyZW07XFxuXFx0aGVpZ2h0OiAxLjI1cmVtO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtY2xyKTtcXG5cXHRib3JkZXItcmFkaXVzOiAuNzVyZW07XFxuXFx0dHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdCk7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHQmOjpiZWZvcmV7XFxuXFx0XFx0Y29udGVudDogJyc7XFxuXFx0XFx0d2lkdGg6IDEuMTVyZW07XFxuXFx0XFx0aGVpZ2h0OiAxLjE1cmVtO1xcblxcdFxcdGJhY2tncm91bmQ6IHZhcigtLW1haW4tY2xyKTtcXG5cXHRcXHRib3JkZXItcmFkaXVzOiA1MCU7XFxuXFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdFxcdHRvcDogLjA1cmVtO1xcblxcdFxcdGxlZnQ6IDJweDtcXG5cXHRcXHRib3gtc2hhZG93OiAwIDAgMXJlbSAjZmZmO1xcblxcdFxcdHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXQpO1xcblxcdH1cXG5cXHQmOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICdubyc7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tY2xyKTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHRvcDogLTFweDtcXG4gICAgbGVmdDogMS4yNXJlbTtcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAwLjFyZW0gdmFyKC0tc2Vjb25kLWNscik7XFxuXFx0XFx0dHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdCk7XFxuXFx0fVxcblxcdCY6Y2hlY2tlZDo6YmVmb3Jle1xcblxcdFxcdGxlZnQ6IDIuNzVyZW07XFxuXFx0fVxcblxcdCY6Y2hlY2tlZDo6YWZ0ZXIge1xcblxcdFxcdGNvbnRlbnQ6ICd5ZXMnO1xcblxcdFxcdGxlZnQ6IC0wLjY1cmVtO1xcblxcdH1cXG59XFxuXFxuLmNyZWF0ZVByb2plY3RCdG4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG5cXHQmOmhvdmVye1xcblxcdFxcdGJvcmRlci1zdHlsZTogaW5zZXQ7XFxuXFx0fVxcbn1cXG5cXG5cXG4vKiBQcm9qZWN0IENhcmRzICovXFxuXFxuLnByb2plY3RzVHJheSB7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIC0xO1xcblxcdHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkOiAgYXV0byAvIHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyNTBweCwgMWZyKSk7XFxuICBnYXA6IDEuNzVyZW0gMXJlbTtcXG5cXHRtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG5bY2xhc3MqPXByb2plY3RDYXJkXSB7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgcGFkZGluZzogLjc1cmVtIDEuNXJlbTtcXG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIGdhcDogLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5wQ2FyZEJ0biB7XFxuICB0b3A6IDByZW07XFxuICByaWdodDogMDtcXG5cXHRmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5wcm9qZWN0Q2FyZCBoMntcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFx0Zm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG59XFxuXFxuLnByb2plY3RDYXJkIHAge1xcblxcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcdFxcblxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHQmOjpmaXJzdC1sZXR0ZXJ7XFxuXFx0XFx0Zm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG5cXHRcXHRmb250LXNpemU6IDEuMjVyZW07XFxuXFx0XFx0dGV4dC1zaGFkb3c6IDAgMCAuNXJlbSAjYWFhO1xcblxcdH1cXG59XFxuXFxuLyogZnVsbCBkZXRhaWwgd2luZG93cyAqL1xcblxcbmRpYWxvZy5kZXRhaWxXaW5kb3cge1xcbiAgd2lkdGg6IDgwJTtcXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4tY2xyKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNscik7XFxuICBib3JkZXI6IHZhcigtLWJvcmRlcik7XFxufVxcblxcbi5mdWxsRGV0YWlsSGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcblxcdG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbi5mdWxsRGV0YWlsSGVhZGVyID4gaDIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC43cmVtO1xcbn1cXG5cXG4uZnVsbERldGFpbFdpbmRvd1dyYXBwZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jbHIpO1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xcbiAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi50YWdzV3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjJyZW07XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhZ3NXcmFwcGVyID4gaDMge1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBib3JkZXI6IHZhcigtLWJvcmRlcik7XFxuICBwYWRkaW5nOiAuMjVyZW07XFxufVxcblxcbi5mdWxsRGV0YWlsVGFnIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kOiAjYjViNWI1O1xcblxcdGNvbG9yOiB2YXIoLS1zZWNvbmQtY2xyKTtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG5cXHRwYWRkaW5nOiAwLjE3NXJlbSAwLjdyZW07XFxuICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG5cXHRib3JkZXI6IHZhcigtLWJvcmRlcik7XFxuICBib3gtc2hhZG93OiAwIDAgMS41cmVtIC0wLjc1cmVtICNmZmY7XFxufVxcblxcbmJ1dHRvbi5mdWxsRGV0YWlsVGFnQ2xvc2VCdG4ge1xcbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xcbiAgcGFkZGluZy1pbmxpbmU6IDAuMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0dHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdCk7XFxuXFx0Jjpob3ZlcntcXG5cXHRcXHRib3JkZXItc3R5bGU6IHJpZGdlO1xcblxcdFxcdHBhZGRpbmctaW5saW5lOiAuM3JlbTtcXG5cXHR9XFxuXFx0JjphY3RpdmV7XFxuXFx0XFx0Ym9yZGVyLXN0eWxlOiBpbnNldDtcXG5cXHR9XFxufVxcblxcbi5mdWxsRGV0YWlsVGFzayB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZDogYXV0byAvIHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmZ1bGxEZXRhaWxUYXNrID4gaDMge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAtMTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4udGFzay1idG4ge1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IC0xcmVtO1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmRldGFpbFRhc2sge1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHBhZGRpbmctYmxvY2s6IDFyZW07XFxuXFx0Jjo6Zmlyc3QtbGV0dGVye1xcblxcdFxcdGZvbnQtc2l6ZTogMS43NXJlbTtcXG5cXHR9XFxufVxcblxcbi8qIENvbmRpdGlvbmFsIGNsYXNzZXMgKi9cXG5cXG4uaGlkZGVuIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJpb3JpdHktY2FyZHtcXG5cXHQmOjphZnRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtMXJlbTtcXG4gICAgbGVmdDogLTEuNXB4O1xcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlcik7XFxuICAgIHBhZGRpbmc6IC4xNXJlbSAuM3JlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xcblxcdFxcdGZvbnQtdmFyaWFudC1jYXBzOiBhbGwtc21hbGwtY2FwcztcXG5cXHR9XFxufVxcblxcbi5wcmlvcml0eS1oaWdoZXN0IHtcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1oaWdoZXN0KTtcXG5cXHRib3JkZXItY29sb3I6dmFyKC0taGlnaGVzdC1saXQpO1xcblxcdG9yZGVyOiAtMztcXG5cXHQmOjphZnRlcntcXG5cXHRcXHRjb250ZW50OiAnaGlnaGVzdCBwcmlvcml0eSc7XFxuXFx0XFx0YmFja2dyb3VuZDogdmFyKC0taGlnaGVzdCk7XFxuXFx0XFx0Ym9yZGVyLWNvbG9yOiB2YXIoLS1oaWdoZXN0LWxpdCk7XFxuXFx0fVxcbn1cXG5cXG4ucHJpb3JpdHktaGlnaGVzdC1idG4ge1xcblxcdGJhY2tncm91bmQ6IHZhcigtLWhpZ2hlc3QtYnRuKTtcXG5cXHRib3JkZXItY29sb3I6dmFyKC0taGlnaGVzdC1saXQpO1xcbn1cXG5cXG4ucHJpb3JpdHktaGlnaCB7XFxuXFx0YmFja2dyb3VuZDogdmFyKC0taGlnaCk7XFxuXFx0Ym9yZGVyLWNvbG9yOnZhcigtLWhpZ2gtbGl0KTtcXG5cXHRvcmRlcjogLTI7XFxuXFx0Jjo6YWZ0ZXJ7XFxuXFx0XFx0Y29udGVudDogJ2hpZ2ggcHJpb3JpdHknO1xcblxcdFxcdGJhY2tncm91bmQ6IHZhcigtLWhpZ2gpO1xcblxcdFxcdGJvcmRlci1jb2xvcjogdmFyKC0taGlnaC1saXQpO1xcblxcdH1cXG59XFxuXFxuLnByaW9yaXR5LWhpZ2gtYnRuIHtcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1oaWdoLWJ0bik7XFxuXFx0Ym9yZGVyLWNvbG9yOnZhcigtLWhpZ2gtbGl0KTtcXG59XFxuXFxuLnByaW9yaXR5LWxvdyB7XFxuXFx0YmFja2dyb3VuZDogdmFyKC0tbG93KTtcXG5cXHRib3JkZXItY29sb3I6dmFyKC0tbG93LWxpdCk7XFxuXFx0b3JkZXI6IC0xO1xcblxcdCY6OmFmdGVye1xcblxcdFxcdGNvbnRlbnQ6ICdsb3cgcHJpb3JpdHknO1xcblxcdFxcdGJhY2tncm91bmQ6IHZhcigtLWxvdyk7XFxuXFx0XFx0Ym9yZGVyLWNvbG9yOiB2YXIoLS1sb3ctbGl0KTtcXG5cXHR9XFxufVxcblxcbi5wcmlvcml0eS1sb3ctYnRue1xcblxcdGJhY2tncm91bmQ6IHZhcigtLWxvdy1idG4pO1xcblxcdGJvcmRlci1jb2xvcjogdmFyKC0tbG93LWxpdCk7XFxufVxcblxcbi5wcmlvcml0eS1sb3dlc3Qge1xcblxcdGJhY2tncm91bmQ6IHZhcigtLWxvd2VzdCk7XFxuXFx0Ym9yZGVyLWNvbG9yOnZhcigtLWxvd2VzdC1saXQpO1xcblxcdG9yZGVyOiAwO1xcblxcdCY6OmFmdGVye1xcblxcdFxcdGNvbnRlbnQ6ICdsb3dlc3QgcHJpb3JpdHknO1xcblxcdFxcdGJhY2tncm91bmQ6IHZhcigtLWxvd2VzdCk7XFxuXFx0XFx0Ym9yZGVyLWNvbG9yOiB2YXIoLS1sb3dlc3QtbGl0KTtcXG5cXHR9XFxufVxcblxcbi5wcmlvcml0eS1sb3dlc3QtYnRue1xcblxcdGJhY2tncm91bmQ6IHZhcigtLWxvd2VzdC1idG4pO1xcblxcdGJvcmRlci1jb2xvcjogdmFyKC0tbG93ZXN0LWxpdCk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuXHRjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbiwgdGFza3MsIGR1ZURhdGUsIGlzSW1wb3J0YW50ID0gdW5kZWZpbmVkLCBpc1VyZ2VudCA9IHVuZGVmaW5lZCwgdGFncyA9IFtdKXtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcblx0XHR0aGlzLnRhc2tzID0gdGFza3M7XG5cdFx0dGhpcy50YWdzID0gdGFncztcblx0XHR0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuXHRcdHRoaXMuaXNJbXBvcnRhbnQgPSBpc0ltcG9ydGFudDtcblx0XHR0aGlzLmlzVXJnZW50ID0gaXNVcmdlbnQ7XG5cdH1cblxuXHRnZXQgcHJpb3JpdHkoKXtcblx0XHRyZXR1cm4gdGhpcy5pc0ltcG9ydGFudCAmJiB0aGlzLmlzVXJnZW50ID8gJ2hpZ2hlc3QnXG5cdFx0OiB0aGlzLmlzSW1wb3J0YW50ICYmICF0aGlzLmlzVXJnZW50ID8gJ2hpZ2gnXG5cdFx0OiAhdGhpcy5pc0ltcG9ydGFudCAmJiB0aGlzLmlzVXJnZW50ID8gJ2xvdydcblx0XHQ6ICdsb3dlc3QnXG5cdH1cbn07XG5cbmV4cG9ydCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IobmFtZSwgcm9sZSwgZGVzY3JpcHRpb24sIHN1YmdvYWxzLCB0YXNrcyl7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy50YWdzID0gW107XG4gICAgdGhpcy5pc0ltcG9ydGFudCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmlzVXJnZW50ID0gdW5kZWZpbmVkO1xuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gKCkgPT4ge1xuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICBjb25zdCBkYXlzID0gKCkgPT4gZGF0ZS5nZXREYXRlKCkgPCAxMCA/ICcwJyArIGRhdGUuZ2V0RGF0ZSgpIDogZGF0ZS5nZXREYXRlKCk7XG4gICAgICBjb25zdCBtb250aHMgPSAoKSA9PiBkYXRlLmdldE1vbnRoKCkgPCAxMCA/ICcwJyArIGRhdGUuZ2V0TW9udGgoKSA6IGRhdGUuZ2V0TW9udGgoKTtcbiAgICAgIGNvbnN0IGhvdXJzID0gKCkgPT4gZGF0ZS5nZXRIb3VycygpIDwgMTAgPyAnMCcgKyBkYXRlLmdldEhvdXJzKCkgOiBkYXRlLmdldEhvdXJzKCk7XG4gICAgICBjb25zdCBtaW51dGVzID0gKCkgPT4gZGF0ZS5nZXRNaW51dGVzKCkgPCAxMCA/ICcwJyArIGRhdGUuZ2V0TWludXRlcygpIDogZGF0ZS5nZXRNaW51dGVzKCk7XG4gICAgICBjb25zdCBmdWxsRGF0ZSA9IFtgJHtkYXlzKCl9LSR7bW9udGhzKCl9LSR7ZGF0ZS5nZXRGdWxsWWVhcigpfWAsIGAke2hvdXJzKCl9OiR7bWludXRlcygpfWBdO1xuICAgICAgcmV0dXJuIGZ1bGxEYXRlLmpvaW4oJywgJylcbiAgICB9O1xuICAgIHRoaXMuY3JlYXRpb25EYXRlID0gY3VycmVudERhdGUoKTtcbiAgfVxuXG4gIGdldCBwcmlvcml0eSgpe1xuICAgIGlmKHRoaXMuaXNJbXBvcnRhbnQgJiYgdGhpcy5pc1VyZ2VudCkgcmV0dXJuICdoaWdoZXN0J1xuICAgIGVsc2UgaWYgKHRoaXMuaXNJbXBvcnRhbnQgJiYgIXRoaXMuaXNVcmdlbnQpIHJldHVybiAnaGlnaCdcbiAgICBlbHNlIGlmICghdGhpcy5pc0ltcG9ydGFudCAmJiB0aGlzLmlzVXJnZW50KSByZXR1cm4gJ2xvdydcbiAgICBlbHNlIHJldHVybiAnbG93ZXN0JztcbiAgfVxuXG59O1xuXG5leHBvcnQgY29uc3QgdGFnTWFuYWdlciA9IChmdW5jdGlvbiAoKXtcblxuICBjb25zdCBhZGQgPSAob2JqLCB0YWcpID0+IHtcbiAgICByZXR1cm4gb2JqLnRhZ3MucHVzaCh0YWcpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZSA9IChvYmosIHRhZykgPT4ge1xuICAgIHJldHVybiBvYmoudGFncy5zcGxpY2Uob2JqLnRhZ3MuaW5kZXhPZih0YWcpLCAxKVxuICB9XG5cbiAgcmV0dXJuIHsgYWRkLCByZW1vdmUgfVxufSkoKTtcblxuZXhwb3J0IGNvbnN0IGRvbSA9IChmdW5jdGlvbiAoKXtcbiAgY29uc3QgYWRkID0gZWwgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbCk7XG4gIGNvbnN0IHBsYWNlID0gKGVsLCBjbGFzc05hbWUsIHRleHRDb250ZW50ID0gJycsIHJlZmVyZW5jZSwgZG9tUG9zaXRpb24pID0+IHtcbiAgICBsZXQgZWxlbWVudCA9IGFkZChlbCk7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICAgIHN3aXRjaCAoZG9tUG9zaXRpb24pe1xuICAgICAgY2FzZSAnYmVmb3JlJzpcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocmVmZXJlbmNlKS5iZWZvcmUoZWxlbWVudCk7XG4gICAgICBjYXNlICdwcmVwZW5kJzpcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocmVmZXJlbmNlKS5wcmVwZW5kKGVsZW1lbnQpO1xuICAgICAgY2FzZSAnYXBwZW5kJzpcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocmVmZXJlbmNlKS5hcHBlbmQoZWxlbWVudCk7XG4gICAgICBjYXNlICdhZnRlcic6XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHJlZmVyZW5jZSkuYWZ0ZXIoZWxlbWVudCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4geyBwbGFjZSwgYWRkIH1cbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBjbG9jayA9ICggKCkgPT4ge1xuICBjb25zdCB0aWN0b2MgPSAoKSA9PiB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgaCA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBjb25zdCBtID0gZGF0ZS5nZXRNaW51dGVzKCk7XG4gICAgY29uc3QgcyA9IGRhdGUuZ2V0U2Vjb25kcygpO1xuICAgIHJldHVybiBgJHsoJzAnICsgaCkuc2xpY2UoLTIpfTokeygnMCcgKyBtKS5zbGljZSgtMil9OiR7KCcwJyArIHMpLnNsaWNlKC0yKX1gXG4gIH07XG5cbiAgbGV0IHRpbWVyO1xuXG4gIGNvbnN0IHN0YXJ0ID0gKHJlZikgPT4ge1xuICAgIHRpbWVyID0gc2V0SW50ZXJ2YWwoICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocmVmKS50ZXh0Q29udGVudCA9IHRpY3RvYygpLCAxMDAwKTtcbiAgfTtcblxuICBjb25zdCBzdG9wID0gKCkgPT4gY2xlYXJJbnRlcnZhbCh0aW1lcik7XG5cbiAgcmV0dXJuIHsgc3RhcnQsIHN0b3AgfVxufSkoKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCB7IFByb2plY3QsIFRhc2ssIHRhZ01hbmFnZXIsIGRvbSwgY2xvY2sgfSBmcm9tICcuL2dvYWxNYW5hZ2VyLmpzJztcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuY29uc3QgJCA9ICgoKSA9PiB7XG4gIGNvbnN0IGxvZyA9IGNvbnNvbGUubG9nO1xuXHRjb25zdCAkID0gJCA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCQpO1xuXHRjb25zdCBhdHRyID0gKGVsLCBhdHIsIHZhbHVlKSA9PiBlbC5zZXRBdHRyaWJ1dGUoYXRyLCB2YWx1ZSk7XG4gIHJldHVybiB7IGxvZywgJCwgYXR0ciB9XG59KSgpO1xuXG5jbG9jay5zdGFydCgnLmNsb2NrJyk7XG5cbmNvbnN0IHJlbmRlcmVyID0gKCBmdW5jdGlvbiAoKSB7XG5cblx0Y29uc3QgcmVuZGVyUHJvamVjdFdpbmRvdyA9ICgpPT57XG5cdFx0Ly9wcm9qZWN0cyB3aW5kb3dcblx0XHRjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvbS5hZGQoJ2RpdicpO1xuXHRcdHByb2plY3RzQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdwcm9qZWN0cy1jb250YWluZXInO1xuXHRcdCQuJCgnI2NvbnRlbnQnKS5hcHBlbmQocHJvamVjdHNDb250YWluZXIpO1xuXG5cdFx0Ly8gUHJvamVjdHMgYWRkUHJvamVjdCBidG5cblx0XHRjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9tLmFkZCgnYnV0dG9uJyk7XG5cdFx0YWRkUHJvamVjdEJ0bi5jbGFzc05hbWUgPSAnYWRkUHJvamVjdEJ0bic7XG5cdFx0YWRkUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9ICdBZGQgbmV3IHByb2plY3QnO1xuXHRcdHByb2plY3RzQ29udGFpbmVyLmFwcGVuZChhZGRQcm9qZWN0QnRuKTtcblxuXHRcdC8vIFByb2plY3RzIGNsb3NlIHdpbmRvdyBidG5cblx0XHRjb25zdCBjbG9zZVByb2plY3RzQ29udGFpbmVyQnRuID0gZG9tLmFkZCgnYnV0dG9uJyk7XG5cdFx0Y2xvc2VQcm9qZWN0c0NvbnRhaW5lckJ0bi5jbGFzc05hbWUgPSAncEZvcm1DbG9zZUJ0biBwcm9qZWN0LWNsb3NlLWJ0bic7XG5cdFx0Y2xvc2VQcm9qZWN0c0NvbnRhaW5lckJ0bi50ZXh0Q29udGVudCA9ICdYJztcblx0XHRjbG9zZVByb2plY3RzQ29udGFpbmVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRwcm9qZWN0c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcblx0XHR9KTtcblx0XHRhZGRQcm9qZWN0QnRuLmFmdGVyKGNsb3NlUHJvamVjdHNDb250YWluZXJCdG4pO1xuXG5cdFx0Ly9Qcm9qZWN0IGNhcmRzXG5cdFx0Y29uc3QgcHJvamVjdHNUcmF5ID0gZG9tLmFkZCgnZGl2Jyk7XG5cdFx0cHJvamVjdHNUcmF5LmNsYXNzTmFtZSA9ICdwcm9qZWN0c1RyYXknO1xuXHRcdHByb2plY3RzQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0c1RyYXkpO1xuXG5cdFx0Ly9Qcm9qZWN0cyBNb2RhbCB3aW5kb3cgdG8gYWRkIGluZm9cblx0XHRjb25zdCBwcm9qZWN0c01vZGFsID0gZG9tLmFkZCgnZGlhbG9nJyk7XG5cdFx0cHJvamVjdHNNb2RhbC5jbGFzc05hbWUgPSAnYWRkUHJvamVjdERpYWxvZyc7XG5cdFx0cHJvamVjdHNDb250YWluZXIuYXBwZW5kKHByb2plY3RzTW9kYWwpO1xuXHRcdC8vc2hvdyBtb2RhbCB3aW5kb3cgdXBvbiBidG4gY2xpY2tcblx0XHRhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0JC4kKCcuYWRkUHJvamVjdERpYWxvZycpLnNob3dNb2RhbCgpO1xuXHRcdH0pO1xuXG5cdFx0Ly8gUHJvamVjdHMgRm9ybSBpbnNpZGUgbW9kYWwgd2luZG93XG5cdFx0bGV0IHBGb3JtID0gZG9tLmFkZCgnZm9ybScpO1xuXHRcdHBGb3JtLm5vdmFsaWRhdGUgPSB0cnVlO1xuXHRcdHBGb3JtLmFjdGlvbiA9ICdQT1NUJztcblx0XHRwRm9ybS5tZXRob2QgPSAnIyc7XG5cdFx0cEZvcm0uY2xhc3NOYW1lID0gJ3Byb2plY3QtZm9ybSc7XG5cdFx0JC4kKCcuYWRkUHJvamVjdERpYWxvZycpLmFwcGVuZChwRm9ybSk7XG5cdFx0XG5cdFx0Ly8gUHJvamVjdHMgRm9ybSBjbG9zZSBidG5cblx0XHRjb25zdCBwRm9ybUNsb3NlQnRuID0gZG9tLmFkZCgnYnV0dG9uJyk7XG5cdFx0cEZvcm1DbG9zZUJ0bi5jbGFzc05hbWUgPSAncEZvcm1DbG9zZUJ0bic7XG5cdFx0cEZvcm1DbG9zZUJ0bi50ZXh0Q29udGVudCA9ICdYJztcblx0XHRwRm9ybUNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHQkLiQoJy5hZGRQcm9qZWN0RGlhbG9nJykuY2xvc2UoKSBcblx0XHR9KTtcblx0XHRwRm9ybS5wcmVwZW5kKHBGb3JtQ2xvc2VCdG4pO1xuXG5cdFx0Ly8gUHJvamVjdHMgRm9ybSB0aXRsZVxuXHRcdGxldCBwRm9ybVRpdGxlID0gZG9tLmFkZCgnaDInKTtcblx0XHRwRm9ybVRpdGxlLmNsYXNzTmFtZSA9ICdwRm9ybVRpdGxlJztcblx0XHRwRm9ybVRpdGxlLnRleHRDb250ZW50ID0gJ0FkZCBuZXcgcHJvamVjdCc7XG5cdFx0cEZvcm0uYXBwZW5kKHBGb3JtVGl0bGUpO1xuXG5cdFx0Ly8gUHJvamVjdCBmb3JtIHdyYXBwZXJcblx0XHRjb25zdCBwRm9ybVdyYXBwZXIgPSBkb20uYWRkKCdkaXYnKTtcblx0XHRwRm9ybVdyYXBwZXIuY2xhc3NOYW1lID0gJ2Zvcm1XcmFwcGVyJztcblx0XHRwRm9ybS5hcHBlbmQocEZvcm1XcmFwcGVyKTtcblxuXHRcdC8vIFByb2plY3RzIGRlc2NyaXB0aW9uXG5cdFx0Y29uc3QgcERlc2NyaXB0aW9uV3JhcHBlciA9IGRvbS5hZGQoJ2RpdicpO1xuXHRcdHBEZXNjcmlwdGlvbldyYXBwZXIuY2xhc3NOYW1lID0gJ3BGb3JtRmllbGRXcmFwcGVyJztcblx0XHRwRm9ybVdyYXBwZXIuYXBwZW5kKHBEZXNjcmlwdGlvbldyYXBwZXIpO1xuXHRcdFxuXHRcdGNvbnN0IHBEZXNjcmlwdGlvbkxhYmVsID0gZG9tLmFkZCgnbGFiZWwnKTtcblx0XHQkLmF0dHIocERlc2NyaXB0aW9uTGFiZWwsICdmb3InLCAncERlc2NyaXB0aW9uSW5wdXQnKTtcblx0XHRwRGVzY3JpcHRpb25MYWJlbC5jbGFzc05hbWUgPSAnZm9ybUxhYmVsJztcblx0XHRwRGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbjogJztcblx0XHRwRGVzY3JpcHRpb25XcmFwcGVyLmFwcGVuZChwRGVzY3JpcHRpb25MYWJlbCk7XG5cblx0XHRjb25zdCBwRGVzY3JpcHRpb25JbnB1dCA9IGRvbS5hZGQoJ2lucHV0Jyk7XG5cdFx0cERlc2NyaXB0aW9uSW5wdXQuaWQgPSAncERlc2NyaXB0aW9uSW5wdXQnO1xuXHRcdHBEZXNjcmlwdGlvbklucHV0LmNsYXNzTmFtZSA9ICdmb3JtSW5wdXQnO1xuXHRcdCQuYXR0cihwRGVzY3JpcHRpb25JbnB1dCwgJ25hbWUnLCAncERlc2NyaXB0aW9uJyk7XG5cdFx0cERlc2NyaXB0aW9uTGFiZWwuYWZ0ZXIocERlc2NyaXB0aW9uSW5wdXQpO1xuXG5cdFx0XHQvLyBXcmFwcGluZyBOYW1lICsgVGFza3Ncblx0XHRcdGNvbnN0IHBXcmFwcGVyMSA9IGRvbS5hZGQoJ2RpdicpO1xuXHRcdFx0cFdyYXBwZXIxLmNsYXNzTmFtZSA9ICdwV3JhcHBlcldyYXBwZXInO1xuXHRcdFx0cERlc2NyaXB0aW9uV3JhcHBlci5hZnRlcihwV3JhcHBlcjEpO1xuXG5cdFx0Ly8gUHJvamVjdCBuYW1lIGZpZWxkXG5cdFx0Y29uc3QgcEZvcm1OYW1lV3JhcHBlciA9IGRvbS5hZGQoJ2RpdicpO1xuXHRcdHBGb3JtTmFtZVdyYXBwZXIuY2xhc3NOYW1lID0gJ3BGb3JtRmllbGRXcmFwcGVyJztcblx0XHRwV3JhcHBlcjEuYXBwZW5kKHBGb3JtTmFtZVdyYXBwZXIpO1xuXG5cdFx0Y29uc3QgcEZvcm1OYW1lTGFiZWwgPSBkb20uYWRkKCdsYWJlbCcpO1xuXHRcdHBGb3JtTmFtZUxhYmVsLnRleHRDb250ZW50ID0gJ1Byb2plY3QgbmFtZTogJztcblx0XHRwRm9ybU5hbWVMYWJlbC5jbGFzc05hbWUgPSAnZm9ybUxhYmVsJztcblx0XHQkLmF0dHIocEZvcm1OYW1lTGFiZWwsICdmb3InLCAncEZvcm1OYW1lSW5wdXQnKTtcblx0XHRwRm9ybU5hbWVXcmFwcGVyLmFwcGVuZChwRm9ybU5hbWVMYWJlbCk7XG5cblx0XHRjb25zdCBwRm9ybU5hbWVJbnB1dCA9IGRvbS5hZGQoJ2lucHV0Jyk7XG5cdFx0cEZvcm1OYW1lSW5wdXQuaWQgPSAncEZvcm1OYW1lSW5wdXQnO1xuXHRcdHBGb3JtTmFtZUlucHV0LmNsYXNzTmFtZSA9ICdmb3JtSW5wdXQnO1xuXHRcdCQuYXR0cihwRm9ybU5hbWVJbnB1dCwgJ25hbWUnLCAncE5hbWUnKTtcblx0XHRwRm9ybU5hbWVMYWJlbC5hZnRlcihwRm9ybU5hbWVJbnB1dCk7XG5cblx0XHQvLyBQcm9qZWN0IHRhc2tzXG5cdFx0Y29uc3QgcFRhc2tzV3JhcHBlciA9IGRvbS5hZGQoJ2RpdicpO1xuXHRcdHBUYXNrc1dyYXBwZXIuY2xhc3NOYW1lID0gJ3BGb3JtRmllbGRXcmFwcGVyJztcblx0XHRwRm9ybU5hbWVXcmFwcGVyLmFmdGVyKHBUYXNrc1dyYXBwZXIpO1xuXHRcdFxuXHRcdGNvbnN0IHBUYXNrc0xhYmVsID0gZG9tLmFkZCgnbGFiZWwnKTtcblx0XHQkLmF0dHIocFRhc2tzTGFiZWwsICdmb3InLCAncFRhc2tzSW5wdXQnKTtcblx0XHRwVGFza3NMYWJlbC5jbGFzc05hbWUgPSAnZm9ybUxhYmVsJztcblx0XHRwVGFza3NMYWJlbC50ZXh0Q29udGVudCA9ICdUYXNrczogJztcblx0XHRwVGFza3NXcmFwcGVyLmFwcGVuZChwVGFza3NMYWJlbCk7XG5cblx0XHRjb25zdCBwVGFza3NJbnB1dCA9IGRvbS5hZGQoJ2lucHV0Jyk7XG5cdFx0cFRhc2tzSW5wdXQuaWQgPSAncFRhc2tzSW5wdXQnO1xuXHRcdHBUYXNrc0lucHV0LmNsYXNzTmFtZSA9ICdmb3JtSW5wdXQnO1xuXHRcdCQuYXR0cihwVGFza3NJbnB1dCwgJ25hbWUnLCAncFRhc2tzJyk7XG5cdFx0cFRhc2tzTGFiZWwuYWZ0ZXIocFRhc2tzSW5wdXQpO1xuXHRcdC8vRXh0cmE6IG1vZGFsIGhlbHBlciB3aW5kb3cgZm9yIHRhc2tzIGlucHV0IGluZm9cblx0XHRjb25zdCBwVGFza3NJbnB1dEluZm9Nb2RhbCA9IGRvbS5hZGQoJ2RpYWxvZycpO1xuXHRcdHBUYXNrc0lucHV0SW5mb01vZGFsLmNsYXNzTmFtZSA9ICdpbmZvTW9kYWwnO1xuXHRcdHBUYXNrc0lucHV0SW5mb01vZGFsLnRleHRDb250ZW50ID0gJ1RpcDogQWRkIG11bHRpcGxlIHRhc2tzIGJ5IHNlcGFyYXRpbmcgdGhlbSB3aXRoIGNvbW1hcy4nO1xuXHRcdHBUYXNrc1dyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHBUYXNrc0lucHV0SW5mb01vZGFsLnNob3coKSApO1xuXHRcdHBUYXNrc1dyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHBUYXNrc0lucHV0SW5mb01vZGFsLmNsb3NlKCkgKTtcblx0XHRwVGFza3NXcmFwcGVyLmFwcGVuZChwVGFza3NJbnB1dEluZm9Nb2RhbCk7XG5cblx0XHRcdFx0Ly9XcmFwcGVyIDIgPSBUYWdzICsgRHVlRGF0ZVxuXHRcdFx0XHRjb25zdCBwV3JhcHBlcjIgPSBkb20uYWRkKCdkaXYnKTtcblx0XHRcdFx0cFdyYXBwZXIyLmNsYXNzTmFtZSA9ICdwV3JhcHBlcldyYXBwZXInO1xuXHRcdFx0XHRwV3JhcHBlcjEuYWZ0ZXIocFdyYXBwZXIyKTtcblxuXHRcdC8vIFByb2plY3RzIHRhZ3Ncblx0XHRjb25zdCBwVGFnc1dyYXBwZXIgPSBkb20uYWRkKCdkaXYnKTtcblx0XHRwVGFnc1dyYXBwZXIuY2xhc3NOYW1lID0gJ3BGb3JtRmllbGRXcmFwcGVyJztcblx0XHRwV3JhcHBlcjIuYXBwZW5kKHBUYWdzV3JhcHBlcik7XG5cblx0XHRjb25zdCBwVGFnc0xhYmVsID0gZG9tLmFkZCgnbGFiZWwnKTtcblx0XHRwVGFnc0xhYmVsLmNsYXNzTmFtZSA9ICdmb3JtTGFiZWwnO1xuXHRcdCQuYXR0cihwVGFnc0xhYmVsLCAnZm9yJywgJ3BUYWdzSW5wdXQnKTtcblx0XHRwVGFnc0xhYmVsLnRleHRDb250ZW50ID0gJ1RhZ3M6ICc7XG5cdFx0cFRhZ3NXcmFwcGVyLmFwcGVuZChwVGFnc0xhYmVsKTtcblxuXHRcdGNvbnN0IHBUYWdzSW5wdXQgPSBkb20uYWRkKCdpbnB1dCcpO1xuXHRcdHBUYWdzSW5wdXQuY2xhc3NOYW1lID0gJ2Zvcm1JbnB1dCc7XG5cdFx0cFRhZ3NJbnB1dC5pZCA9ICdwVGFnc0lucHV0Jztcblx0XHQkLmF0dHIocFRhZ3NJbnB1dCwgJ25hbWUnLCAncFRhZ3MnKTtcblx0XHRwVGFnc0xhYmVsLmFmdGVyKHBUYWdzSW5wdXQpO1xuXG5cdFx0Ly9Nb2RhbCBoZWxwZXIgd2luZG93IGZvciBwVGFnc1xuXHRcdGNvbnN0IHBUYWdzSW5wdXRJbmZvTW9kYWwgPSBkb20uYWRkKCdkaWFsb2cnKTtcblx0XHRwVGFnc0lucHV0SW5mb01vZGFsLmNsYXNzTmFtZSA9ICdpbmZvTW9kYWwnO1xuXHRcdHBUYWdzSW5wdXRJbmZvTW9kYWwudGV4dENvbnRlbnQgPSAnVGlwOiBBZGQgbXVsdGlwbGUgdGFncyBieSBzZXBhcmF0aW5nIHRoZW0gd2l0aCBjb21tYXMuJztcblx0XHRwVGFnc1dyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHBUYWdzSW5wdXRJbmZvTW9kYWwuc2hvdygpICk7XG5cdFx0cFRhZ3NXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiBwVGFnc0lucHV0SW5mb01vZGFsLmNsb3NlKCkgKTtcblx0XHRwVGFnc1dyYXBwZXIuYXBwZW5kKHBUYWdzSW5wdXRJbmZvTW9kYWwpO1xuXG5cdFx0Ly8gUHJvamVjdHMgZHVlRGF0ZVxuXHRcdGNvbnN0IHBEdWVEYXRlV3JhcHBlciA9IGRvbS5hZGQoJ2RpdicpO1xuXHRcdHBEdWVEYXRlV3JhcHBlci5jbGFzc05hbWUgPSAncEZvcm1GaWVsZFdyYXBwZXInO1xuXHRcdHBUYWdzV3JhcHBlci5hZnRlcihwRHVlRGF0ZVdyYXBwZXIpO1xuXG5cdFx0Y29uc3QgcER1ZURhdGVMYWJlbCA9IGRvbS5hZGQoJ2xhYmVsJyk7XG5cdFx0cER1ZURhdGVMYWJlbC5jbGFzcyA9ICdmb3JtbGFiZWwnO1xuXHRcdHBEdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIGRhdGU6ICc7XG5cdFx0JC5hdHRyKHBEdWVEYXRlTGFiZWwsICdmb3InLCAncER1ZURhdGVpbnB1dCcpO1xuXHRcdHBEdWVEYXRlV3JhcHBlci5hcHBlbmQocER1ZURhdGVMYWJlbCk7XG5cblx0XHRjb25zdCBwRHVlRGF0ZWlucHV0ID0gZG9tLmFkZCgnaW5wdXQnKTtcblx0XHRwRHVlRGF0ZWlucHV0LmlkID0gJ3BEdWVEYXRlaW5wdXQnO1xuXHRcdHBEdWVEYXRlaW5wdXQuY2xhc3NOYW1lID0gJ2Zvcm1JbnB1dCc7XG5cdFx0cER1ZURhdGVpbnB1dC50eXBlID0gJ2RhdGUnO1xuXHRcdCQuYXR0cihwRHVlRGF0ZWlucHV0LCAnbmFtZScsICdwRHVlRGF0ZScpO1xuXHRcdHBEdWVEYXRlTGFiZWwuYWZ0ZXIocER1ZURhdGVpbnB1dCk7XG5cblx0XHQvLyBQcm9qZWN0cyBpc0ltcG9ydGFudCBhbmQgaXNVcmdlbnRcblx0XHRjb25zdCBwUHJpb3JpdHlXcmFwcGVyID0gZG9tLmFkZCgnZGl2Jyk7XG5cdFx0cFByaW9yaXR5V3JhcHBlci5jbGFzc05hbWUgPSAncEZvcm1GaWVsZFdyYXBwZXIgcHJpb3JpdHlXcmFwcGVyJztcblx0XHRwV3JhcHBlcjIuYWZ0ZXIocFByaW9yaXR5V3JhcHBlcik7XG5cblx0XHQvLyBQcm9qZWN0cyBpc2ltcG9ydGFudFxuXHRcdGNvbnN0IHBJc0ltcG9ydGFudExhYmVsID0gZG9tLmFkZCgnbGFiZWwnKTtcblx0XHRwSXNJbXBvcnRhbnRMYWJlbC5jbGFzc05hbWUgPSAnZm9ybUxhYmVsJztcblx0XHRwSXNJbXBvcnRhbnRMYWJlbC50ZXh0Q29udGVudCA9ICdJbXBvcnRhbnQ6ICc7XG5cdFx0JC5hdHRyKHBJc0ltcG9ydGFudExhYmVsLCAnZm9yJywgJ3BJc0ltcG9ydGFudElucHV0Jyk7XG5cdFx0cFByaW9yaXR5V3JhcHBlci5hcHBlbmQocElzSW1wb3J0YW50TGFiZWwpO1xuXG5cdFx0Y29uc3QgcElzSW1wb3J0YW50SW5wdXQgPSBkb20uYWRkKCdpbnB1dCcpO1xuXHRcdHBJc0ltcG9ydGFudElucHV0LmNsYXNzTmFtZSA9ICdmb3JtU2xpZGluZ0J0bic7XG5cdFx0cElzSW1wb3J0YW50SW5wdXQuaWQgPSAncElzSW1wb3J0YW50SW5wdXQnO1xuXHRcdHBJc0ltcG9ydGFudElucHV0LnR5cGUgPSAnY2hlY2tib3gnO1xuXHRcdCQuYXR0cihwSXNJbXBvcnRhbnRJbnB1dCwgJ25hbWUnLCAncElzaW1wb3J0YW50Jyk7XG5cdFx0cElzSW1wb3J0YW50TGFiZWwuYWZ0ZXIocElzSW1wb3J0YW50SW5wdXQpO1xuXG5cdFx0Ly8gUHJvamVjdHMgaXNVcmdlbnRcblx0XHRjb25zdCBwSXNVcmdlbnRMYWJlbCA9IGRvbS5hZGQoJ2xhYmVsJyk7XG5cdFx0cElzVXJnZW50TGFiZWwuY2xhc3NOYW1lID0gJ2Zvcm1MYWJlbCc7XG5cdFx0cElzVXJnZW50TGFiZWwudGV4dENvbnRlbnQgPSAnVXJnZW50OiAnO1xuXHRcdCQuYXR0cihwSXNVcmdlbnRMYWJlbCwgJ2ZvcicsICdwSXNVcmdlbnRJbnB1dCcpO1xuXHRcdHBJc0ltcG9ydGFudElucHV0LmFmdGVyKHBJc1VyZ2VudExhYmVsKTtcblxuXHRcdGNvbnN0IHBJc1VyZ2VudElucHV0ID0gZG9tLmFkZCgnaW5wdXQnKTtcblx0XHRwSXNVcmdlbnRJbnB1dC5jbGFzc05hbWUgPSAnZm9ybVNsaWRpbmdCdG4nO1xuXHRcdHBJc1VyZ2VudElucHV0LmlkID0gJ3BJc1VyZ2VudElucHV0Jztcblx0XHRwSXNVcmdlbnRJbnB1dC50eXBlID0gJ2NoZWNrYm94Jztcblx0XHQkLmF0dHIocElzVXJnZW50SW5wdXQsICduYW1lJywgJ3BJc1VyZ2VudCcpO1xuXHRcdHBJc1VyZ2VudExhYmVsLmFmdGVyKHBJc1VyZ2VudElucHV0KTtcblxuXHRcdC8vIENyZWF0ZSBuZXcgcHJvamVjdCBidG5cblx0XHRjb25zdCBjcmVhdGVQcm9qZWN0QnRuID0gZG9tLmFkZCgnYnV0dG9uJyk7XG5cdFx0Y3JlYXRlUHJvamVjdEJ0bi5jbGFzc05hbWUgPSAncEZvcm1DbG9zZUJ0biBjcmVhdGVQcm9qZWN0QnRuJztcblx0XHRjcmVhdGVQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBuZXcgcHJvamVjdCc7XG5cdFx0Y3JlYXRlUHJvamVjdEJ0bi50eXBlID0gJ3N1Ym1pdCc7XG5cdFx0cFByaW9yaXR5V3JhcHBlci5hZnRlcihjcmVhdGVQcm9qZWN0QnRuKTtcblx0XHRcblx0XHQvL0NyZWF0aW5nIG5ldyBwcm9qZWN0IEV2ZW50IGhhbmRsZXIvIGxpc3RlbmVyXG5cdFx0Y29uc3QgY3JlYXRlUHJvamVjdCA9ICgpID0+IHtcblx0XHRcdGxldCBwcm9qZWN0ID0gbmV3IFByb2plY3QocEZvcm1OYW1lSW5wdXQudmFsdWUsIHBEZXNjcmlwdGlvbklucHV0LnZhbHVlLCBwVGFza3NJbnB1dC52YWx1ZS5zcGxpdCgnLCcpLCBwRHVlRGF0ZWlucHV0LnZhbHVlKTtcblx0XHRcdHByb2plY3QudGFncyA9IHBUYWdzSW5wdXQudmFsdWUuc3BsaXQoJywnKTtcblx0XHRcdHBJc0ltcG9ydGFudElucHV0LmNoZWNrZWQgPyBwcm9qZWN0LmlzSW1wb3J0YW50ID0gdHJ1ZSA6IHByb2plY3QuaXNJbXBvcnRhbnQgPSBmYWxzZTtcblx0XHRcdHBJc1VyZ2VudElucHV0LmNoZWNrZWQgPyBwcm9qZWN0LmlzVXJnZW50ID0gdHJ1ZSA6IHByb2plY3QuaXNVcmdlbnQgPSBmYWxzZTtcblx0XHRcdHByb2plY3RzU2hlbGYuYWRkKHByb2plY3QpO1xuXHRcdFx0cHJvamVjdHNTaGVsZi5wbGFjZVByb2plY3RzKHByb2plY3QpO1xuXHRcdFx0cHJvamVjdHNTaGVsZi5sb2NhbFN0b3JhZ2VTZXQocHJvamVjdCk7XG5cdFx0fTtcblxuXG5cdFx0Y3JlYXRlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0Y3JlYXRlUHJvamVjdCgpO1xuXHRcdFx0cHJvamVjdHNNb2RhbC5jbG9zZSgpO1xuXHRcdH0pO1xuXG5cdH07IC8vIEVuZCBvZiByZW5kZXJQcm9qZWN0cyBmdW5jdGlvblxuXG5cblx0cmV0dXJuIHsgcmVuZGVyUHJvamVjdFdpbmRvdyB9XG59ICkoKTtcblxuY29uc3QgcHJvamVjdHNTaGVsZiA9ICgoKSA9PiB7XG5cdGNvbnN0IHNoZWxmID0gW107XG5cdGNvbnN0IGFkZCA9IHByb2plY3QgPT4gc2hlbGYucHVzaChwcm9qZWN0KTtcblx0Y29uc3QgcmVtb3ZlID0gcHJvamVjdCA9PiBzaGVsZi5wb3AocHJvamVjdCk7XG5cdGNvbnN0IGxvb2t1cCA9ICgpID0+IGNvbnNvbGUudGFibGUoc2hlbGYpO1xuXHQvLyBuYW1pbmcgY29udmVudGlvbiBmb3IgcGxhY2luZyBwcm9qZWN0cyBpbiBsb2NhbFN0b3JhZ2Vcblx0bGV0IG51bSA9IDA7XG5cdGNvbnN0IGxvY2FsU3RvcmFnZVNldCA9IChwcm9qZWN0KSA9PiB7XG5cdFx0aWYoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKGBwcm9qZWN0JHtudW19YCkpe1xuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3QnK251bSwgSlNPTi5zdHJpbmdpZnkocHJvamVjdCkpO1xuXHRcdFx0bnVtID0gMDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bnVtKys7XG5cdFx0XHRyZXR1cm4gbG9jYWxTdG9yYWdlU2V0KHByb2plY3QpXG5cdFx0fVxuXHR9O1xuXHRcblx0Ly8gTXV0YXRlIEpTT04gb2JqZWN0cyAtIHJldHJpZXZlIHBhcnNlZCBKU09OLCBkZWxldGUgZGF0YSBpbnNpZGUgaXQgYW5kIHJlcGxhY2Ugb3JpZ2luYWwgb2JqXG5cdC8vIFNob3VsZCBiZSBhYmxlIHRvIGJlIHVzZWQgaW4gYW55IGRhdGEgaW5zaWRlIEpTT04gb2JqZWN0XG5cdC8qIDEgLSBmaW5kIEpTT04gY29udGFpbmluZyBzdHJpbmdcblx0MiAtIHN0b3JlIEpTT04gaW4gdmFyaWFibGVcblx0MyAtIHBhcnNlIEpTT05cblx0NCAtIHJlbW92ZSB0YWcgZnJvbSB0YWcgYXJyYXlcblx0NSAtIHJlbW92ZSBvbGQgSlNPTiwgYWRkIG11dGF0ZWQgSlNPTiBpbiBwbGFjZSAqL1xuXHRjb25zdCBkZWxldGVKU09ORGF0YSA9IChrZXksIHZhbHVlKSA9PiB7XG5cdFx0bGV0IG5ld0pTT047XG5cdFx0bGV0IG9sZEpTT047XG5cdFx0Zm9yKGxldCBpIG9mIE9iamVjdC5lbnRyaWVzKGxvY2FsU3RvcmFnZSkpe1xuXHRcdFx0aWYoSlNPTi5wYXJzZShpWzFdKVtrZXldLmluY2x1ZGVzKHZhbHVlKSl7XG5cdFx0XHRcdG5ld0pTT04gPSBKU09OLnBhcnNlKGlbMV0pO1xuXHRcdFx0XHRvbGRKU09OID0gaVswXTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRuZXdKU09OW2tleV0uc3BsaWNlKG5ld0pTT05ba2V5XS5pbmRleE9mKHZhbHVlKSwgMSk7XG5cdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0ob2xkSlNPTik7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0ob2xkSlNPTiwgSlNPTi5zdHJpbmdpZnkobmV3SlNPTikpO1xuXHR9O1xuXG5cdC8vIGFkZCBzaGVsZiB0byBsb2NhbFN0b3JhZ2Vcblx0Y29uc3QgdXBkYXRlTG9jYWxTdG9yYWdlT25FeGl0ID0gKCkgPT4ge1xuXHRcdCQubG9nKCdyZWxvYWRpbmcuLi4nKTtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdEFycmF5JywgSlNPTi5zdHJpbmdpZnkoc2hlbGYpKTtcblx0fTtcblxuXHQvL0Z1bmN0aW9uIHRoYXQgdXBkYXRlcyB0aGUgUHJvamVjdCB0cmF5IHdpdGggY2FyZHMgZm9yIGVhY2ggcHJvamVjdCBpbiB0aGUgYXJyYXlcblx0Y29uc3QgcGxhY2VQcm9qZWN0cyA9IChwcm9qZWN0KSA9PiB7XG5cblx0XHRjb25zdCBwcm9qZWN0c1RyYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHNUcmF5Jyk7XG5cdFx0Ly8gQWRkIGNvbG9yaW5nIGNsYXNzZXMgYWNjb3JkaW5nIHRvIHByaW9yaXR5XG5cdFx0Y29uc3QgcHJpb3JpdHlDb2xvcmluZyA9IChwcm9qZWN0LCBlbCkgPT4ge1xuXHRcdFx0aWYocHJvamVjdC5wcmlvcml0eSA9PT0gJ2hpZ2hlc3QnKXtcblx0XHRcdFx0cmV0dXJuIGVsLnRhZ05hbWUgPT09ICdESVYnID8gZWwuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktY2FyZCcsICdwcmlvcml0eS1oaWdoZXN0Jylcblx0XHRcdFx0OiBlbC50YWdOYW1lID09PSAnQlVUVE9OJyA/IGVsLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWhpZ2hlc3QtYnRuJykgOiBudWxsO1xuXHRcdFx0fSBlbHNlIGlmKHByb2plY3QucHJpb3JpdHkgPT09ICdoaWdoJyl7XG5cdFx0XHRcdHJldHVybiBlbC50YWdOYW1lID09PSAnRElWJyA/IGVsLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWNhcmQnLCAncHJpb3JpdHktaGlnaCcpXG5cdFx0XHRcdDogZWwudGFnTmFtZSA9PT0gJ0JVVFRPTicgPyBlbC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1oaWdoLWJ0bicpIDogbnVsbDtcblx0XHRcdH0gZWxzZSBpZihwcm9qZWN0LnByaW9yaXR5ID09PSAnbG93Jyl7XG5cdFx0XHRcdHJldHVybiBlbC50YWdOYW1lID09PSAnRElWJyA/IGVsLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWNhcmQnLCAncHJpb3JpdHktbG93Jylcblx0XHRcdFx0OiBlbC50YWdOYW1lID09PSAnQlVUVE9OJyA/IGVsLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWxvdy1idG4nKSA6IG51bGw7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gZWwudGFnTmFtZSA9PT0gJ0RJVicgPyBlbC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1jYXJkJywgJ3ByaW9yaXR5LWxvd2VzdCcpXG5cdFx0XHRcdDogZWwudGFnTmFtZSA9PT0gJ0JVVFRPTicgPyBlbC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1sb3dlc3QtYnRuJykgOiBudWxsO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRcblx0XHRsZXQgcENhcmQgPSBkb20uYWRkKCdkaXYnKTtcblx0XHRwQ2FyZC5jbGFzc05hbWUgPSBgcHJvamVjdENhcmQtJHtzaGVsZi5sZW5ndGh9YDtcblx0XHRwcmlvcml0eUNvbG9yaW5nKHByb2plY3QsIHBDYXJkKTtcblx0XHRcblx0XHQvL1Byb2plY3QgQ2FyZCBUaXRsZVxuXHRcdGNvbnN0IHBDYXJkVGl0bGUgPSBkb20uYWRkKCdoMicpO1xuXHRcdHBDYXJkVGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG5cdFx0cENhcmQuYXBwZW5kKHBDYXJkVGl0bGUpO1xuXG5cdFx0Ly8gUHJvamVjdCBDYXJkIGRlc2NyaXB0aW9uXG5cdFx0Y29uc3QgcENhcmREZXNjcmlwdGlvbiA9IGRvbS5hZGQoJ3AnKTtcblx0XHRwQ2FyZERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC5kZXNjcmlwdGlvbjtcblx0XHRwQ2FyZFRpdGxlLmFmdGVyKHBDYXJkRGVzY3JpcHRpb24pO1xuXG5cdFx0Ly8gUHJvamVjdCBDYXJkIHJlbW92ZSBCdG5cblx0XHRjb25zdCBwQ2FyZFJlbW92ZUJ0biA9IGRvbS5hZGQoJ2J1dHRvbicpO1xuXHRcdHBDYXJkUmVtb3ZlQnRuLmNsYXNzTmFtZSA9ICdwRm9ybUNsb3NlQnRuIHBDYXJkQnRuJztcblx0XHRwQ2FyZFJlbW92ZUJ0bi50ZXh0Q29udGVudCA9ICdYJztcblx0XHRwQ2FyZFRpdGxlLmFmdGVyKHBDYXJkUmVtb3ZlQnRuKTtcblx0XHRwcmlvcml0eUNvbG9yaW5nKHByb2plY3QsIHBDYXJkUmVtb3ZlQnRuKTtcblx0XHRwQ2FyZFJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdHNoZWxmLnNwbGljZShzaGVsZi5pbmRleE9mKHByb2plY3QpLCAxKTtcblx0XHRcdGZvcihsZXQgaSBvZiBPYmplY3QuZW50cmllcyhsb2NhbFN0b3JhZ2UpKXtcblx0XHRcdFx0aWYoSlNPTi5wYXJzZShpWzFdKS5uYW1lLmluY2x1ZGVzKHByb2plY3QubmFtZSkgJiYgSlNPTi5wYXJzZShpWzFdKS5kZXNjcmlwdGlvbi5pbmNsdWRlcyhwcm9qZWN0LmRlc2NyaXB0aW9uKSl7XG5cdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oaVswXSlcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhpLCBpWzBdLCBpWzFdKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdHBDYXJkLnJlbW92ZSgpO1xuXHRcdH0pO1xuXHRcdFxuXHRcdHByb2plY3RzVHJheS5hcHBlbmQocENhcmQpO1xuXG5cdFx0Ly8gRnVsbCBkZXRhaWwgd2luZG93IGZyb20gcHJvamVjdCBDYXJkc1xuXHRcdHBDYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG5cdFx0XHRsZXQgZnVsbERldGFpbFdpbmRvdyA9IGRvbS5hZGQoJ2RpYWxvZycpO1xuXHRcdFx0ZnVsbERldGFpbFdpbmRvdy5jbGFzc05hbWUgPSAnZGV0YWlsV2luZG93Jztcblx0XHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kKGZ1bGxEZXRhaWxXaW5kb3cpO1xuXHRcdFx0ZnVsbERldGFpbFdpbmRvdy5zaG93TW9kYWwoKTtcblxuXHRcdFx0bGV0IGZ1bGxEZXRhaWxXaW5kb3dXcmFwcGVyID0gZG9tLmFkZCgnZGl2Jyk7XG5cdFx0XHRmdWxsRGV0YWlsV2luZG93V3JhcHBlci5jbGFzc05hbWUgPSAnZnVsbERldGFpbFdpbmRvd1dyYXBwZXInO1xuXHRcdFx0ZnVsbERldGFpbFdpbmRvdy5hcHBlbmQoZnVsbERldGFpbFdpbmRvd1dyYXBwZXIpO1xuXG5cdFx0XHRsZXQgZnVsbERldGFpbEhlYWRlciA9IGRvbS5hZGQoJ2RpdicpO1xuXHRcdFx0ZnVsbERldGFpbEhlYWRlci5jbGFzc05hbWUgPSAnZnVsbERldGFpbEhlYWRlcic7XG5cdFx0XHRmdWxsRGV0YWlsV2luZG93V3JhcHBlci5hcHBlbmQoZnVsbERldGFpbEhlYWRlcik7XG5cblx0XHRcdGxldCBkZXRhaWxUaXRsZSA9IGRvbS5hZGQoJ2gyJyk7XG5cdFx0XHRkZXRhaWxUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcblx0XHRcdGZ1bGxEZXRhaWxIZWFkZXIucHJlcGVuZChkZXRhaWxUaXRsZSk7XG5cblx0XHRcdGxldCBmdWxsRGV0YWlsV2luZG93Q2xvc2VCdG4gPSBkb20uYWRkKCdidXR0b24nKTtcblx0XHRcdGZ1bGxEZXRhaWxXaW5kb3dDbG9zZUJ0bi5jbGFzc05hbWUgPSAncEZvcm1DbG9zZUJ0bic7XG5cdFx0XHRmdWxsRGV0YWlsV2luZG93Q2xvc2VCdG4udGV4dENvbnRlbnQgPSAnWCc7XG5cdFx0XHRkZXRhaWxUaXRsZS5hZnRlcihmdWxsRGV0YWlsV2luZG93Q2xvc2VCdG4pO1xuXHRcdFx0ZnVsbERldGFpbFdpbmRvd0Nsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZnVsbERldGFpbFdpbmRvdy5jbG9zZSgpKTtcblxuXHRcdFx0bGV0IGRldGFpbERlc2NyaXB0aW9uID0gZG9tLmFkZCgnaDMnKTtcblx0XHRcdGRldGFpbERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC5kZXNjcmlwdGlvbjtcblx0XHRcdGRldGFpbFRpdGxlLmFmdGVyKGRldGFpbERlc2NyaXB0aW9uKTtcblxuXHRcdFx0bGV0IGRldGFpbFRhc2tzV3JhcHBlciA9IGRvbS5hZGQoJ2RpdicpO1xuXHRcdFx0ZGV0YWlsVGFza3NXcmFwcGVyLmNsYXNzTmFtZSA9ICdmdWxsRGV0YWlsVGFzayc7XG5cdFx0XHRmdWxsRGV0YWlsV2luZG93V3JhcHBlci5hcHBlbmQoZGV0YWlsVGFza3NXcmFwcGVyKTtcblxuXHRcdFx0bGV0IGRldGFpbFRhc2tzVGl0bGUgPSBkb20uYWRkKCdoMycpO1xuXHRcdFx0ZGV0YWlsVGFza3NUaXRsZS50ZXh0Q29udGVudCA9ICdUYXNrcyc7XG5cdFx0XHRkZXRhaWxUYXNrc1dyYXBwZXIuYXBwZW5kKGRldGFpbFRhc2tzVGl0bGUpO1xuXG5cdFx0XHRmb3IobGV0IHRhc2sgb2YgcHJvamVjdC50YXNrcykge1xuXHRcdFx0XHRsZXQgZGV0YWlsVGFza3NFbnRyeSA9IGRvbS5hZGQoJ2RpdicpO1xuXHRcdFx0XHRkZXRhaWxUYXNrc0VudHJ5LmNsYXNzTmFtZSA9ICdwcm9qZWN0Q2FyZC10YXNrJztcblx0XHRcdFx0ZGV0YWlsVGFza3NXcmFwcGVyLmFwcGVuZChkZXRhaWxUYXNrc0VudHJ5KTtcblxuXHRcdFx0XHRsZXQgZGV0YWlsVGFza3NOYW1lID0gZG9tLmFkZCgncCcpO1xuXHRcdFx0XHRkZXRhaWxUYXNrc05hbWUudGV4dENvbnRlbnQgPSB0YXNrO1xuXHRcdFx0XHRkZXRhaWxUYXNrc0VudHJ5LmFwcGVuZChkZXRhaWxUYXNrc05hbWUpO1xuXG5cdFx0XHRcdGxldCBkZXRhaWxUYXNrc0J0biA9IGRvbS5hZGQoJ2J1dHRvbicpO1xuXHRcdFx0XHRkZXRhaWxUYXNrc0J0bi5jbGFzc05hbWUgPSAncEZvcm1DbG9zZUJ0biB0YXNrLWJ0bic7XG5cdFx0XHRcdGRldGFpbFRhc2tzQnRuLnRleHRDb250ZW50ID0gJ1gnO1xuXHRcdFx0XHRkZXRhaWxUYXNrc05hbWUuYWZ0ZXIoZGV0YWlsVGFza3NCdG4pO1xuXHRcdFx0XHRkZXRhaWxUYXNrc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuXHRcdFx0XHRcdGZvcihsZXQgaSBvZiBwcm9qZWN0LnRhc2tzKXtcblx0XHRcdFx0XHRcdGlmKGkgPT09IHRhc2spe1xuXHRcdFx0XHRcdFx0XHRwcm9qZWN0LnRhc2tzLnNwbGljZShwcm9qZWN0LnRhc2tzLmluZGV4T2YodGFzayksIDEpO1xuXHRcdFx0XHRcdFx0XHRkZWxldGVKU09ORGF0YSgndGFza3MnLCB0YXNrKTtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGRldGFpbFRhc2tzRW50cnkucmVtb3ZlKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fTtcblxuXHRcdFx0bGV0IGRldGFpbFRhZ3NXcmFwcGVyID0gZG9tLmFkZCgnZGl2Jyk7XG5cdFx0XHRkZXRhaWxUYWdzV3JhcHBlci5jbGFzc05hbWUgPSAndGFnc1dyYXBwZXInO1xuXHRcdFx0ZnVsbERldGFpbEhlYWRlci5hcHBlbmQoZGV0YWlsVGFnc1dyYXBwZXIpO1xuXG5cdFx0XHRsZXQgZGV0YWlsVGFnc1RpdGxlID0gZG9tLmFkZCgnaDMnKTtcblx0XHRcdGRldGFpbFRhZ3NUaXRsZS50ZXh0Q29udGVudCA9ICdUYWdzJztcblx0XHRcdGRldGFpbFRhZ3NXcmFwcGVyLmFwcGVuZChkZXRhaWxUYWdzVGl0bGUpO1xuXG5cdFx0XHRmb3IobGV0IHRhZyBvZiBwcm9qZWN0LnRhZ3Mpe1xuXHRcdFx0XHRsZXQgZGV0YWlsVGFnc0VudHJ5ID0gZG9tLmFkZCgnZGl2Jyk7XG5cdFx0XHRcdGRldGFpbFRhZ3NFbnRyeS5jbGFzc05hbWUgPSAnZnVsbERldGFpbFRhZyc7XG5cdFx0XHRcdGRldGFpbFRhZ3NUaXRsZS5hZnRlcihkZXRhaWxUYWdzRW50cnkpO1xuXHRcdFx0XHRcblx0XHRcdFx0bGV0IGRldGFpbFRhZ3NOYW1lID0gZG9tLmFkZCgncCcpO1xuXHRcdFx0XHRkZXRhaWxUYWdzTmFtZS50ZXh0Q29udGVudCA9IHRhZztcblx0XHRcdFx0ZGV0YWlsVGFnc0VudHJ5LmFwcGVuZChkZXRhaWxUYWdzTmFtZSk7XG5cblx0XHRcdFx0bGV0IGRldGFpbFRhZ3NCdG4gPSBkb20uYWRkKCdidXR0b24nKTtcblx0XHRcdFx0ZGV0YWlsVGFnc0J0bi5jbGFzc05hbWUgPSAnZnVsbERldGFpbFRhZ0Nsb3NlQnRuJztcblx0XHRcdFx0ZGV0YWlsVGFnc0J0bi50ZXh0Q29udGVudCA9ICdYJztcblx0XHRcdFx0ZGV0YWlsVGFnc05hbWUuYWZ0ZXIoZGV0YWlsVGFnc0J0bik7XG5cdFx0XHRcdGRldGFpbFRhZ3NCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdFx0Zm9yKGxldCBpIG9mIHByb2plY3QudGFncyl7XG5cdFx0XHRcdFx0XHRpZihpID09PSB0YWcpe1xuXHRcdFx0XHRcdFx0XHRwcm9qZWN0LnRhZ3Muc3BsaWNlKHByb2plY3QudGFncy5pbmRleE9mKHRhZyksIDEpO1xuXHRcdFx0XHRcdFx0XHRkZWxldGVKU09ORGF0YSgndGFncycsIHRhZyk7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdGRldGFpbFRhZ3NFbnRyeS5yZW1vdmUoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9O1xuXG5cdFx0XHRsZXQgZGV0YWlsUHJpb3JpdHkgPSBkb20uYWRkKCdzcGFuJyk7XG5cdFx0XHRkZXRhaWxQcmlvcml0eS50ZXh0Q29udGVudCA9ICcocHJpb3JpdHk6ICcgKyBwcm9qZWN0LnByaW9yaXR5O1xuXHRcdFx0ZGV0YWlsVGl0bGUuYXBwZW5kKGRldGFpbFByaW9yaXR5KTtcblxuXHRcdFx0bGV0IGRldGFpbER1ZURhdGUgPSBkb20uYWRkKCdzcGFuJyk7XG5cdFx0XHRkZXRhaWxEdWVEYXRlLnRleHRDb250ZW50ID0gJyAtIGR1ZSBkYXRlOiAnICsgcHJvamVjdC5kdWVEYXRlICsgJyknO1xuXHRcdFx0ZGV0YWlsUHJpb3JpdHkuYWZ0ZXIoZGV0YWlsRHVlRGF0ZSk7XG5cblx0XHR9KTtcblx0fTtcblx0XG5jb25zdCByZXN0b3JlUHJvamVjdHMgPSAoKSA9PiB7XG5cdGZvcihsZXQgaSBpbiBsb2NhbFN0b3JhZ2Upe1xuXHRcdGlmKGkuaW5jbHVkZXMoJ3Byb2plY3QnKSl7XG5cdFx0XHRsZXQgaXRlbSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oaSkpO1xuXHRcdFx0bGV0IHByb2plY3QgPSBuZXcgUHJvamVjdCggaXRlbS5uYW1lLCBpdGVtLmRlc2NyaXB0aW9uLCBpdGVtLnRhc2tzLCBpdGVtLmR1ZURhdGUsIGl0ZW0uaXNJbXBvcnRhbnQsIGl0ZW0uaXNVcmdlbnQsIGl0ZW0udGFncyApO1xuXHRcdFx0cGxhY2VQcm9qZWN0cyhwcm9qZWN0KTtcblx0XHRcdGFkZChwcm9qZWN0KTtcblx0XHR9XG5cdH1cbn07XG5cblxuXHRyZXR1cm4geyBhZGQsIHJlbW92ZSwgbG9va3VwLCBwbGFjZVByb2plY3RzLCBzaGVsZiwgbG9jYWxTdG9yYWdlU2V0LCByZXN0b3JlUHJvamVjdHMsIHVwZGF0ZUxvY2FsU3RvcmFnZU9uRXhpdCB9XG59KSgpO1xuXG4kLiQoJy5ob21lLXByb2plY3RzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuXHRyZW5kZXJlci5yZW5kZXJQcm9qZWN0V2luZG93KCk7XG5cdHByb2plY3RzU2hlbGYucmVzdG9yZVByb2plY3RzKCk7XG59LCB7IG9uY2U6IHRydWUgfSk7XG5cbiQuJCgnLmhvbWUtcHJvamVjdHMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0JC4kKCcucHJvamVjdHMtY29udGFpbmVyJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgICgpID0+IHtcblx0YWxlcnQoJ2l0IHdvcmtlZCEnKTtcblx0cHJvamVjdHNTaGVsZi51cGRhdGVMb2NhbFN0b3JhZ2VPbkV4aXQoKVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=