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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/task-background.jpg */ "./src/images/task-background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* border: 1px solid red; */
}

body{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
}

header{
    width: 100%;
    box-sizing: border-box;
    padding: 24px 32px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-self: center stretch;
}

h1{
    place-self: center start;
    font-size: 54px;
}

header ul{
    place-self: center end;
    list-style: none;
    display: flex;
    gap: 24px;
}

header ul>li{
    width: max-content;
    display: flex;
    align-items: center;
}

header ul>li:hover{
    cursor: pointer;
}

main{
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 10fr;
}

.sidebar{
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 50px;
    background-color: #e5e7eb;
    max-width: 300px;
    min-width: 250px;
}

.sidebar-header{
    font-size: 36px;
    place-self: start;
}

.sidebar-content{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

.search-bar{
    /* border: 2px solid red; */
    background-color: #d1d5db;
    width: 100%;
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding: 4px 10px;
    gap: 14px;
}

.search-bar::after{
    content: " search";
}

.search-bar:hover{
    cursor: text;
}

.search-icon{
    width: 18px;
}

.space-icon{
    width: 26px ;
}

.space{
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 15px;
    font-size: 24px;
    transition: 0.25s ease-in-out;
}

.space:hover{
    cursor: pointer;
    transform: scale(1.03);
}

.space-divider{
    border: 1.7px solid #d1d5db;
    width: 100%;
}

.add-space::before{
    content: "+";
    font-size: 32px;
    align-items: center;
    padding-left: 10px;
}

.add-space{
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 15px;
    width: 100%;
    height: 42px;
    border: 0;
    border-radius: 8px;
    background-color: #e5e7eb;
    color: black;
    font-size: 20px;
    transition: 0.2s;
}

.add-space:hover{
    cursor: pointer;
    transform: scale(1.02);
    background-color: #d1d5db;
}

.add-space-form::before{
    content: 'Label';
    font-size: 36px;
    place-self: start center;
}

.add-space-form{
    padding: 36px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 420px;
}

.task-holder
{
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;
    min-height: 100vh;
}

.task-header
{
    font-size: 36px;
    font-weight: 900;
    align-items: center;
    justify-content: start;
    color: white;
}

.tasks-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    height: 100%;
}

.task{
    height: 64px;
    display: grid;
    grid-template-columns: 1fr 200fr 1fr;
    padding: 5px 15px;
    gap: 15px;
    border-radius: 8px;
    background-color: #f9fafb;
    transition: height 0.3s ease;
    overflow: hidden;
}

.task-notes{
    display: grid;
    grid-column: 2/3;
    font-size: 18px;
}

.task:hover{
    cursor: pointer;
}
  
.task-dropdown-active{
    height: max-content; 
}

.task-marker{
    border-radius: 50%;
    height: 20px;
    width: 20px;
    place-self: center start;
}

.task-content{
    place-self: center start;
}

.task-parameters{
    place-self: center end;
}

.task-content,
.task-parameters
{
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    gap: 4px;
}

.task-title{
    font-size: 24px;
    height: 30px;
}

.task-description{
    height: 18px;
    font-size: 14px;
}

.task-parameters{
    font-size: 18px;
}

.add-task::before{
    content: '+ ';
    font-size: 30px;
    color: white;
    align-items: center;
}

.add-task{
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 10px;
    padding-left: 20px;
    width: 100%;
    height: 64px;
    border-radius: 8px;
    color: white;
    background-color: rgba(0, 0, 0, 0.55);
    font-size: 20px;
    font-weight: 900;
    transition: 0.2s;
    position: sticky;
    bottom: 10px;
}

.add-task:hover{
    cursor: pointer;
    transform: scale(1.005);
    background-color: rgba(0, 0, 0, 0.7);
}

.add-task-form::before{
    content: 'Task';
    font-size: 36px;
    place-self: start center;
}

.add-task-form{
    padding: 36px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 420px;
}

form>div{
    display: flex;
    align-items: center;
    justify-content: start;
}

form label{
    width: 100px;
}

form>div:last-child{
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 20px;
}

form button{
    width: 100px;
    height: 32px;
}

footer{
    width: 100%;
    padding: 20px;
    display: flex;
    font-size: 24px;
    align-items: center;
    justify-content: center;
    gap: 7px;
}

.fab{
    color: black;
    transition: 0.3s ease-in-out;
}

.fab:hover{
    transform: rotate(360deg) scale(1.1);
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    /* border: 1px solid red; */\n}\n\nbody{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    \n}\n\nheader{\n    width: 100%;\n    box-sizing: border-box;\n    padding: 24px 32px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    place-self: center stretch;\n}\n\nh1{\n    place-self: center start;\n    font-size: 54px;\n}\n\nheader ul{\n    place-self: center end;\n    list-style: none;\n    display: flex;\n    gap: 24px;\n}\n\nheader ul>li{\n    width: max-content;\n    display: flex;\n    align-items: center;\n}\n\nheader ul>li:hover{\n    cursor: pointer;\n}\n\nmain{\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 10fr;\n}\n\n.sidebar{\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    gap: 50px;\n    background-color: #e5e7eb;\n    max-width: 300px;\n    min-width: 250px;\n}\n\n.sidebar-header{\n    font-size: 36px;\n    place-self: start;\n}\n\n.sidebar-content{\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n}\n\n.search-bar{\n    /* border: 2px solid red; */\n    background-color: #d1d5db;\n    width: 100%;\n    border-radius: 10px;\n    display: flex;\n    align-items: center;\n    padding: 4px 10px;\n    gap: 14px;\n}\n\n.search-bar::after{\n    content: \" search\";\n}\n\n.search-bar:hover{\n    cursor: text;\n}\n\n.search-icon{\n    width: 18px;\n}\n\n.space-icon{\n    width: 26px ;\n}\n\n.space{\n    width: 100%;\n    height: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: start;\n    gap: 15px;\n    font-size: 24px;\n    transition: 0.25s ease-in-out;\n}\n\n.space:hover{\n    cursor: pointer;\n    transform: scale(1.03);\n}\n\n.space-divider{\n    border: 1.7px solid #d1d5db;\n    width: 100%;\n}\n\n.add-space::before{\n    content: \"+\";\n    font-size: 32px;\n    align-items: center;\n    padding-left: 10px;\n}\n\n.add-space{\n    display: flex;\n    align-items: center;\n    justify-content: start;\n    gap: 15px;\n    width: 100%;\n    height: 42px;\n    border: 0;\n    border-radius: 8px;\n    background-color: #e5e7eb;\n    color: black;\n    font-size: 20px;\n    transition: 0.2s;\n}\n\n.add-space:hover{\n    cursor: pointer;\n    transform: scale(1.02);\n    background-color: #d1d5db;\n}\n\n.add-space-form::before{\n    content: 'Label';\n    font-size: 36px;\n    place-self: start center;\n}\n\n.add-space-form{\n    padding: 36px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    width: 420px;\n}\n\n.task-holder\n{\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    gap: 20px;\n    background-image: url(./images/task-background.jpg);\n    background-size: cover;\n    min-height: 100vh;\n}\n\n.task-header\n{\n    font-size: 36px;\n    font-weight: 900;\n    align-items: center;\n    justify-content: start;\n    color: white;\n}\n\n.tasks-container{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 10px;\n    height: 100%;\n}\n\n.task{\n    height: 64px;\n    display: grid;\n    grid-template-columns: 1fr 200fr 1fr;\n    padding: 5px 15px;\n    gap: 15px;\n    border-radius: 8px;\n    background-color: #f9fafb;\n    transition: height 0.3s ease;\n    overflow: hidden;\n}\n\n.task-notes{\n    display: grid;\n    grid-column: 2/3;\n    font-size: 18px;\n}\n\n.task:hover{\n    cursor: pointer;\n}\n  \n.task-dropdown-active{\n    height: max-content; \n}\n\n.task-marker{\n    border-radius: 50%;\n    height: 20px;\n    width: 20px;\n    place-self: center start;\n}\n\n.task-content{\n    place-self: center start;\n}\n\n.task-parameters{\n    place-self: center end;\n}\n\n.task-content,\n.task-parameters\n{\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    justify-content: space-between;\n    gap: 4px;\n}\n\n.task-title{\n    font-size: 24px;\n    height: 30px;\n}\n\n.task-description{\n    height: 18px;\n    font-size: 14px;\n}\n\n.task-parameters{\n    font-size: 18px;\n}\n\n.add-task::before{\n    content: '+ ';\n    font-size: 30px;\n    color: white;\n    align-items: center;\n}\n\n.add-task{\n    display: flex;\n    align-items: center;\n    justify-content: start;\n    gap: 10px;\n    padding-left: 20px;\n    width: 100%;\n    height: 64px;\n    border-radius: 8px;\n    color: white;\n    background-color: rgba(0, 0, 0, 0.55);\n    font-size: 20px;\n    font-weight: 900;\n    transition: 0.2s;\n    position: sticky;\n    bottom: 10px;\n}\n\n.add-task:hover{\n    cursor: pointer;\n    transform: scale(1.005);\n    background-color: rgba(0, 0, 0, 0.7);\n}\n\n.add-task-form::before{\n    content: 'Task';\n    font-size: 36px;\n    place-self: start center;\n}\n\n.add-task-form{\n    padding: 36px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    width: 420px;\n}\n\nform>div{\n    display: flex;\n    align-items: center;\n    justify-content: start;\n}\n\nform label{\n    width: 100px;\n}\n\nform>div:last-child{\n    display: flex;\n    align-items: center;\n    justify-content: end;\n    gap: 20px;\n}\n\nform button{\n    width: 100px;\n    height: 32px;\n}\n\nfooter{\n    width: 100%;\n    padding: 20px;\n    display: flex;\n    font-size: 24px;\n    align-items: center;\n    justify-content: center;\n    gap: 7px;\n}\n\n.fab{\n    color: black;\n    transition: 0.3s ease-in-out;\n}\n\n.fab:hover{\n    transform: rotate(360deg) scale(1.1);\n}"],"sourceRoot":""}]);
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

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateDisplay: () => (/* binding */ updateDisplay)
/* harmony export */ });
/* harmony import */ var _taskDialog_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskDialog.js */ "./src/taskDialog.js");
/* harmony import */ var _taskData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskData.js */ "./src/taskData.js");
/* harmony import */ var _spaceDialog_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spaceDialog.js */ "./src/spaceDialog.js");
/* harmony import */ var _spaces_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spaces.js */ "./src/spaces.js");
/* harmony import */ var _images_search_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/search.png */ "./src/images/search.png");






function generateElement(type, classes=[], options){
    const element = document.createElement(type);
    for(let someClass of classes){
        element.classList.add(someClass);
    }
    for(const key in options){
        if(key==='textContent' || key==='type' || key==='value'){
            element[key] = options[key];
        }else{
            element.setAttribute(key, options[key]);
        }
    }
    return element;
}

const main = generateElement('main');
const sidebar = generateElement('div', ['sidebar']);
const sidebarHead = generateElement('div', ['sidebar-header'], {'textContent': 'John Doe',});
const sidebarContent = generateElement('div', ['sidebar-content']);
const taskHolder = generateElement('div', ['task-holder']);
const taskHead = generateElement('div', ['task-header']);
const taskContent = generateElement('div', ['tasks-container']);
const addTask = generateElement('button', ['add-task']);

function callTaskDialog() {
    const dialog = document.querySelector('.add-task-dialog');
    dialog.showModal();
    const dialogWidth = dialog.offsetWidth;
    const dialogHeight = dialog.offsetHeight;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const leftPosition = viewportWidth / 2 - dialogWidth / 2;
    const topPosition = viewportHeight / 2 - dialogHeight / 2;
    dialog.style.left = `${leftPosition}px`;
    dialog.style.top = `${topPosition}px`;
}

function callSpaceDialog(){
    const dialog = document.querySelector('.add-space-dialog');
    dialog.showModal();
    const dialogWidth = dialog.offsetWidth;
    const dialogHeight = dialog.offsetHeight;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const leftPosition = viewportWidth / 2 - dialogWidth / 2;
    const topPosition = viewportHeight / 2 - dialogHeight / 2;
    dialog.style.left = `${leftPosition}px`;
    dialog.style.top = `${topPosition}px`;
}

function viewDropdown(e) {
    const allTasks = Array.from(document.querySelectorAll('.task'));
    allTasks.forEach((task) => {
        if (Array.from(task.classList).includes('task-dropdown-active')) {
            if (!(e.target == task)) {
                task.classList.remove('task-dropdown-active');
            }
        }
    });
    if (Array.from(e.target.classList).includes('task-dropdown-active')) {
        e.target.classList.remove('task-dropdown-active');
    } else {
        e.target.classList.add('task-dropdown-active');
    }
}

function updateDisplay() {
    main.textContent=''; 

//--------------------------------------------Sidebar--------------------------------------------//

    //add sidebar header
    sidebar.appendChild(sidebarHead);
    taskHolder.appendChild(taskHead);
    //add search bar
    const spaces = (0,_spaces_js__WEBPACK_IMPORTED_MODULE_3__.getSpaces)();
    sidebarContent.textContent='';
    const searchBar = document.createElement('div');
    const icon1 = new Image();
    icon1.src = _images_search_png__WEBPACK_IMPORTED_MODULE_4__;
    searchBar.classList.add('search-bar');
    icon1.classList.add('search-icon');
    searchBar.appendChild(icon1);
    sidebarContent.appendChild(searchBar);
    //add In-built labels
    let i=0;
    for (i; i < 4; i++) {
        const space = generateElement('div', ['space']);
        const title = generateElement('p', ['space-title']);
        const icon = new Image();
        icon.classList.add('space-icon');
        title.textContent = spaces[i].title;
        icon.src = spaces[i].imageSrc;
        space.append(icon, title);
        sidebarContent.appendChild(space);
    }
    //add New divider to separate In-built labels and custom labels
    const divider = generateElement('div', ['space-divider']);
    sidebarContent.appendChild(divider);
    //add custom labels
    for(i; i<spaces.length; i++){
        const space = generateElement('div', ['space']);
        const title = generateElement('p', ['space-title']);
        const icon = new Image();
        icon.classList.add('space-icon');
        title.textContent = spaces[i].title;
        icon.src = spaces[i].imageSrc;
        space.append(icon, title);
        sidebarContent.appendChild(space);
        console.log("I added space!");
    }
    //add button to create new labels
    const addSpace = generateElement('button', ['add-space'], {
        'textContent': 'New label',
    })
    addSpace.addEventListener('click', callSpaceDialog);
    sidebarContent.appendChild(addSpace);

//--------------------------------------------Tasks--------------------------------------------//
    //add tasks header
    taskHead.textContent = 'Tasks';
    //add button to create new task
    addTask.textContent = 'Add a task';
    addTask.addEventListener('click', callTaskDialog);
    //add tasks to display
    const tasks = (0,_taskData_js__WEBPACK_IMPORTED_MODULE_1__.getTasks)();
    taskContent.textContent='';
    for (let i = 0; i < tasks.length; i++) {
        const task = generateElement('div', ['task', `${i}`]);
        const marker = generateElement('button', [`task-marker`]);
        const content = generateElement('div', ['task-content']);
        const parameters = generateElement('div', ['task-parameters']);
        const title = generateElement('p', ['task-title'], {
            'textContent':tasks[i].title,
        });
        const description = generateElement('p', ['task-description'], {
            'textContent': tasks[i].description,
        });
        const deadline = generateElement('p', ['task-deadline'], {
            'textContent': tasks[i].deadline,
        });
        const priority = generateElement('p', ['task-priority'], {
            'textContent': tasks[i].priority,
        });
        const notes = generateElement('div', ['task-notes'], {
            'textContent': tasks[i].notes,
        });
        content.append(title, description);
        parameters.append(deadline, priority);
        task.append(marker, content, parameters, notes);
        task.addEventListener('click', viewDropdown);
        taskContent.appendChild(task);
    }
    taskHolder.appendChild(taskContent);
    taskHolder.appendChild(addTask);
    sidebar.appendChild(sidebarContent);
    const taskDialog = (0,_taskDialog_js__WEBPACK_IMPORTED_MODULE_0__.createTaskDialog)();
    const spaceDialog = (0,_spaceDialog_js__WEBPACK_IMPORTED_MODULE_2__.createSpaceDialog)();
    main.append(sidebar, taskHolder, taskDialog, spaceDialog);
    console.log(tasks);
    return main;
}


/***/ }),

/***/ "./src/spaceDialog.js":
/*!****************************!*\
  !*** ./src/spaceDialog.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSpaceDialog: () => (/* binding */ createSpaceDialog)
/* harmony export */ });
/* harmony import */ var _spaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spaces.js */ "./src/spaces.js");
/* harmony import */ var _homePage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homePage.js */ "./src/homePage.js");
/* harmony import */ var _images_list_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/list.png */ "./src/images/list.png");




function generateElement(type, options){
    let element = document.createElement(type);
    for(const key in options){
        if(key==='textContent' || key==='type' || key==='value'){
            element[key] = options[key];
        }else{
            element.setAttribute(key, options[key]);
        }
    }
    return element;
}

const dialog = document.createElement('dialog');
const form = document.createElement('form');

const title = generateElement('input', {
    'id': 'title',
    'type': 'text',
    'required': true,
});

const color = generateElement('input', {
    'id': 'color',
    'type': 'color',
    'required': true,
});

const titleLabel = generateElement('label', {
    'for': 'title',
    'textContent': 'Title:',
});

const colorLabel = generateElement('label', {
    'for': 'color',
    'textContent': 'color:',
});

const submit = generateElement('button', {
    'type': 'submit',
    'textContent': 'Add',
});

const cancel = generateElement('button', {
    'type': 'reset',
    'textContent': 'Cancel',
});

const titleDiv = document.createElement('div');
const colorDiv = document.createElement('div');
const buttonDiv = document.createElement('div');

cancel.addEventListener('click', cancelEvent);

titleDiv.append(titleLabel, title);
colorDiv.append(colorLabel, color);
buttonDiv.append(submit, cancel);

form.append(titleDiv, colorDiv, buttonDiv);
form.method = 'dialog';
form.classList.add('add-space-form');
dialog.classList.add('add-space-dialog');
form.addEventListener('submit', submitEvent);
dialog.appendChild(form);

function submitEvent(e) {
    e.preventDefault();
    if (form.checkValidity()) {
        console.log("space was added!");
        (0,_spaces_js__WEBPACK_IMPORTED_MODULE_0__.addSpace)({
            title: title.value,
            imageSrc: _images_list_png__WEBPACK_IMPORTED_MODULE_2__,
        });
        (0,_homePage_js__WEBPACK_IMPORTED_MODULE_1__.updateDisplay)();
        form.reset();
        dialog.close();
    }
}

function cancelEvent() {
    form.reset();
    dialog.close();
}

function createSpaceDialog() {
    return dialog;
}


/***/ }),

/***/ "./src/spaces.js":
/*!***********************!*\
  !*** ./src/spaces.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addSpace: () => (/* binding */ addSpace),
/* harmony export */   getSpaces: () => (/* binding */ getSpaces)
/* harmony export */ });
/* harmony import */ var _images_icon3_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/icon3.png */ "./src/images/icon3.png");
/* harmony import */ var _images_icon4_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/icon4.png */ "./src/images/icon4.png");
/* harmony import */ var _images_icon1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/icon1.png */ "./src/images/icon1.png");
/* harmony import */ var _images_icon2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/icon2.png */ "./src/images/icon2.png");





let spaces = [
    {   title: "Personal", 
        imageSrc: _images_icon4_png__WEBPACK_IMPORTED_MODULE_1__,
    },
    {
        title: "Important",
        imageSrc: _images_icon3_png__WEBPACK_IMPORTED_MODULE_0__,
    },
    {
        title: "Completed",
        imageSrc: _images_icon1_png__WEBPACK_IMPORTED_MODULE_2__,
    },
    {
        title: "All",
        imageSrc: _images_icon2_png__WEBPACK_IMPORTED_MODULE_3__,
    },
];

function addSpace(space){
    spaces.push(space);
}

function getSpaces(){
    return spaces;
}

/***/ }),

/***/ "./src/taskData.js":
/*!*************************!*\
  !*** ./src/taskData.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTask: () => (/* binding */ addTask),
/* harmony export */   getTasks: () => (/* binding */ getTasks)
/* harmony export */ });
let tasks = [];

function addTask(task) {
  tasks.push(task);
}

function getTasks() {
  return tasks;
}

/***/ }),

/***/ "./src/taskDialog.js":
/*!***************************!*\
  !*** ./src/taskDialog.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTaskDialog: () => (/* binding */ createTaskDialog)
/* harmony export */ });
/* harmony import */ var _taskFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskFactory.js */ "./src/taskFactory.js");
/* harmony import */ var _taskData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskData.js */ "./src/taskData.js");
/* harmony import */ var _spaces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spaces.js */ "./src/spaces.js");
/* harmony import */ var _homePage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homePage.js */ "./src/homePage.js");





function generateElement(type, options) {
    let element = document.createElement(type);
    for (const key in options) {
        if (key === 'textContent' || key === 'type' || key === 'value') {
            element[key] = options[key];
        } else {
            element.setAttribute(key, options[key]);
        }
    }
    return element;
}

const dialog = document.createElement('dialog');
const form = document.createElement('form');

const title = generateElement('input', {
    'id': 'title',
    'type': 'text',
    'required': true,
});

const description = generateElement('input', {
    'id': 'description',
    'type': 'text',
});

const list = generateElement('select', {
    'id': 'list',
});

const dueDate = generateElement('input', {
    'id': 'dueDate',
    'type': 'date',
});

const priority = generateElement('input', {
    'id': 'priority',
    'type': 'range',
    'min': '1',
    'max': '10',
    'value': '2',

});

const notes = generateElement('input', {
    'id': 'notes',
    'type': 'text',
});

const check = generateElement('input', {
    'id': 'check',
    'type': 'checkbox'
});

const titleLabel = generateElement('label', {
    'for': 'title',
    'textContent': 'Title:',
});

const descriptionLabel = generateElement('label', {
    'for': 'description',
    'textContent': 'Description:',
});

const listLabel = generateElement('label', {
    'for': 'list',
    'textContent': 'Label as:',
});

const dueDateLabel = generateElement('label', {
    'for': 'dueDate',
    'textContent': 'Due date:',
});

const priorityLabel = generateElement('label', {
    'for': 'priority',
    'textContent': 'Priority:',
});

const notesLabel = generateElement('label', {
    'for': 'notes',
    'textContent': 'Notes:',
});

const checkLabel = generateElement('label', {
    'for': 'check',
    'textContent': 'Completed:'
});

const submit = generateElement('button', {
    'type': 'submit',
    'textContent': 'Add',
});

const cancel = generateElement('button', {
    'type': 'reset',
    'textContent': 'Cancel',
});



const titleDiv = document.createElement('div');
const descriptionDiv = document.createElement('div');
const listDiv = document.createElement('div');
const dueDateDiv = document.createElement('div');
const priorityDiv = document.createElement('div');
const notesDiv = document.createElement('div');
const checkDiv = document.createElement('div');
const buttonDiv = document.createElement('div');

cancel.addEventListener('click', cancelEvent);

titleDiv.append(titleLabel, title);
descriptionDiv.append(descriptionLabel, description);
listDiv.append(listLabel, list);
priorityDiv.append(priorityLabel, priority);
dueDateDiv.append(dueDateLabel, dueDate);
notesDiv.append(notesLabel, notes);
checkDiv.append(checkLabel, check);
buttonDiv.append(submit, cancel);

form.append(titleDiv, descriptionDiv, listDiv, priorityDiv, dueDateDiv, notesDiv, checkDiv, buttonDiv);
form.method = 'dialog';
form.classList.add('add-task-form');
dialog.classList.add('add-task-dialog');
form.addEventListener('submit', submitEvent);
dialog.appendChild(form);

function submitEvent(e) {
    e.preventDefault();
    if (form.checkValidity()) {
        console.log("task was added!");
        (0,_taskData_js__WEBPACK_IMPORTED_MODULE_1__.addTask)((0,_taskFactory_js__WEBPACK_IMPORTED_MODULE_0__["default"])(title.value, description.value, list.value, dueDate.value, priority.value, notes.value, check.value));
        (0,_homePage_js__WEBPACK_IMPORTED_MODULE_3__.updateDisplay)();
        form.reset();
        dialog.close();
    }
}

function cancelEvent() {
    form.reset();
    dialog.close();
}

function createTaskDialog() {
    let spaces = (0,_spaces_js__WEBPACK_IMPORTED_MODULE_2__.getSpaces)();
    list.textContent='';
    for (const space of spaces) {
        if (space.title === 'All' || space.title === 'Completed') {
            continue;
        }
        const option = generateElement('option', {
            'value': space.title,
            'textContent': space.title,
        })
        list.appendChild(option);
    }
    return dialog;
}


/***/ }),

/***/ "./src/taskFactory.js":
/*!****************************!*\
  !*** ./src/taskFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ taskMaker)
/* harmony export */ });
function taskMaker(title, description, project, dueDate, priority, notes, check){
    return {title, description, project, dueDate, priority, notes, check};
}

/***/ }),

/***/ "./src/images/icon1.png":
/*!******************************!*\
  !*** ./src/images/icon1.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a8d20cd48e2e0d022083.png";

/***/ }),

/***/ "./src/images/icon2.png":
/*!******************************!*\
  !*** ./src/images/icon2.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "05cf150aa349b39179a0.png";

/***/ }),

/***/ "./src/images/icon3.png":
/*!******************************!*\
  !*** ./src/images/icon3.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "618d11e122cbca3f8e9e.png";

/***/ }),

/***/ "./src/images/icon4.png":
/*!******************************!*\
  !*** ./src/images/icon4.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "961568814dceb733c85a.png";

/***/ }),

/***/ "./src/images/list.png":
/*!*****************************!*\
  !*** ./src/images/list.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4d9c9659390acb1da928.png";

/***/ }),

/***/ "./src/images/search.png":
/*!*******************************!*\
  !*** ./src/images/search.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "57077e0638d143e91df0.png";

/***/ }),

/***/ "./src/images/task-background.jpg":
/*!****************************************!*\
  !*** ./src/images/task-background.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "61485b1cb6099dba3ca0.jpg";

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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homePage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage.js */ "./src/homePage.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");



const main = (0,_homePage_js__WEBPACK_IMPORTED_MODULE_0__.updateDisplay)();
const body = document.querySelector('body');
body.appendChild(main);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHFJQUErQztBQUMzRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8saUZBQWlGLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxPQUFPLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLDRCQUE0QixnQkFBZ0IsaUJBQWlCLDZCQUE2QixnQ0FBZ0MsS0FBSyxTQUFTLG9CQUFvQiw2QkFBNkIsMEJBQTBCLHFDQUFxQyxTQUFTLFdBQVcsa0JBQWtCLDZCQUE2Qix5QkFBeUIsb0JBQW9CLHFDQUFxQyxpQ0FBaUMsR0FBRyxPQUFPLCtCQUErQixzQkFBc0IsR0FBRyxjQUFjLDZCQUE2Qix1QkFBdUIsb0JBQW9CLGdCQUFnQixHQUFHLGlCQUFpQix5QkFBeUIsb0JBQW9CLDBCQUEwQixHQUFHLHVCQUF1QixzQkFBc0IsR0FBRyxTQUFTLGtCQUFrQixvQkFBb0Isc0NBQXNDLEdBQUcsYUFBYSxvQkFBb0IsNkJBQTZCLG9CQUFvQixnQkFBZ0IsZ0NBQWdDLHVCQUF1Qix1QkFBdUIsR0FBRyxvQkFBb0Isc0JBQXNCLHdCQUF3QixHQUFHLHFCQUFxQixvQkFBb0Isc0JBQXNCLDBCQUEwQiw4QkFBOEIsZ0JBQWdCLEdBQUcsZ0JBQWdCLGdDQUFnQyxrQ0FBa0Msa0JBQWtCLDBCQUEwQixvQkFBb0IsMEJBQTBCLHdCQUF3QixnQkFBZ0IsR0FBRyx1QkFBdUIsMkJBQTJCLEdBQUcsc0JBQXNCLG1CQUFtQixHQUFHLGlCQUFpQixrQkFBa0IsR0FBRyxnQkFBZ0IsbUJBQW1CLEdBQUcsV0FBVyxrQkFBa0IsbUJBQW1CLG9CQUFvQiwwQkFBMEIsNkJBQTZCLGdCQUFnQixzQkFBc0Isb0NBQW9DLEdBQUcsaUJBQWlCLHNCQUFzQiw2QkFBNkIsR0FBRyxtQkFBbUIsa0NBQWtDLGtCQUFrQixHQUFHLHVCQUF1QixxQkFBcUIsc0JBQXNCLDBCQUEwQix5QkFBeUIsR0FBRyxlQUFlLG9CQUFvQiwwQkFBMEIsNkJBQTZCLGdCQUFnQixrQkFBa0IsbUJBQW1CLGdCQUFnQix5QkFBeUIsZ0NBQWdDLG1CQUFtQixzQkFBc0IsdUJBQXVCLEdBQUcscUJBQXFCLHNCQUFzQiw2QkFBNkIsZ0NBQWdDLEdBQUcsNEJBQTRCLHVCQUF1QixzQkFBc0IsK0JBQStCLEdBQUcsb0JBQW9CLG9CQUFvQixvQkFBb0IsNkJBQTZCLGdCQUFnQixtQkFBbUIsR0FBRyxtQkFBbUIsb0JBQW9CLDZCQUE2QixvQkFBb0IsZ0JBQWdCLDBEQUEwRCw2QkFBNkIsd0JBQXdCLEdBQUcsbUJBQW1CLHNCQUFzQix1QkFBdUIsMEJBQTBCLDZCQUE2QixtQkFBbUIsR0FBRyxxQkFBcUIsb0JBQW9CLDZCQUE2QiwwQkFBMEIsa0NBQWtDLGdCQUFnQixtQkFBbUIsR0FBRyxVQUFVLG1CQUFtQixvQkFBb0IsMkNBQTJDLHdCQUF3QixnQkFBZ0IseUJBQXlCLGdDQUFnQyxtQ0FBbUMsdUJBQXVCLEdBQUcsZ0JBQWdCLG9CQUFvQix1QkFBdUIsc0JBQXNCLEdBQUcsZ0JBQWdCLHNCQUFzQixHQUFHLDRCQUE0QiwyQkFBMkIsR0FBRyxpQkFBaUIseUJBQXlCLG1CQUFtQixrQkFBa0IsK0JBQStCLEdBQUcsa0JBQWtCLCtCQUErQixHQUFHLHFCQUFxQiw2QkFBNkIsR0FBRyx1Q0FBdUMsb0JBQW9CLDZCQUE2Qix5QkFBeUIscUNBQXFDLGVBQWUsR0FBRyxnQkFBZ0Isc0JBQXNCLG1CQUFtQixHQUFHLHNCQUFzQixtQkFBbUIsc0JBQXNCLEdBQUcscUJBQXFCLHNCQUFzQixHQUFHLHNCQUFzQixvQkFBb0Isc0JBQXNCLG1CQUFtQiwwQkFBMEIsR0FBRyxjQUFjLG9CQUFvQiwwQkFBMEIsNkJBQTZCLGdCQUFnQix5QkFBeUIsa0JBQWtCLG1CQUFtQix5QkFBeUIsbUJBQW1CLDRDQUE0QyxzQkFBc0IsdUJBQXVCLHVCQUF1Qix1QkFBdUIsbUJBQW1CLEdBQUcsb0JBQW9CLHNCQUFzQiw4QkFBOEIsMkNBQTJDLEdBQUcsMkJBQTJCLHNCQUFzQixzQkFBc0IsK0JBQStCLEdBQUcsbUJBQW1CLG9CQUFvQixvQkFBb0IsNkJBQTZCLGdCQUFnQixtQkFBbUIsR0FBRyxhQUFhLG9CQUFvQiwwQkFBMEIsNkJBQTZCLEdBQUcsZUFBZSxtQkFBbUIsR0FBRyx3QkFBd0Isb0JBQW9CLDBCQUEwQiwyQkFBMkIsZ0JBQWdCLEdBQUcsZ0JBQWdCLG1CQUFtQixtQkFBbUIsR0FBRyxXQUFXLGtCQUFrQixvQkFBb0Isb0JBQW9CLHNCQUFzQiwwQkFBMEIsOEJBQThCLGVBQWUsR0FBRyxTQUFTLG1CQUFtQixtQ0FBbUMsR0FBRyxlQUFlLDJDQUEyQyxHQUFHLG1CQUFtQjtBQUN2eFE7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNqVzFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW9HO0FBQ3BHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJOEM7QUFDdEUsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLHVGQUFPLFVBQVUsdUZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNibUQ7QUFDVjtBQUNZO0FBQ2I7QUFDSTs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnRUFBZ0UsMkJBQTJCO0FBQzNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEMsMEJBQTBCLFlBQVk7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEMsMEJBQTBCLFlBQVk7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFTztBQUNQOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFEQUFTO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwrQ0FBVTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHNEQUFRO0FBQzFCO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0Qyx3REFBd0QsRUFBRTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdFQUFnQjtBQUN2Qyx3QkFBd0Isa0VBQWlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2S3VDO0FBQ087QUFDTDs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBUTtBQUNoQjtBQUNBLHNCQUFzQiw2Q0FBUTtBQUM5QixTQUFTO0FBQ1QsUUFBUSwyREFBYTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekZ1QztBQUNBO0FBQ0E7QUFDQTs7QUFFdkM7QUFDQSxRQUFRO0FBQ1Isa0JBQWtCLDhDQUFLO0FBQ3ZCLEtBQUs7QUFDTDtBQUNBO0FBQ0Esa0JBQWtCLDhDQUFLO0FBQ3ZCLEtBQUs7QUFDTDtBQUNBO0FBQ0Esa0JBQWtCLDhDQUFLO0FBQ3ZCLEtBQUs7QUFDTDtBQUNBO0FBQ0Esa0JBQWtCLDhDQUFLO0FBQ3ZCLEtBQUs7QUFDTDs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUnlDO0FBQ0Q7QUFDQTtBQUNNOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7OztBQUlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFEQUFPLENBQUMsMkRBQVM7QUFDekIsUUFBUSwyREFBYTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLGlCQUFpQixxREFBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuS2U7QUFDZixZQUFZO0FBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQTRDO0FBQ3RCOztBQUV0QixhQUFhLDJEQUFhO0FBQzFCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ob21lUGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3BhY2VEaWFsb2cuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NwYWNlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFza0RhdGEuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2tEaWFsb2cuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2tGYWN0b3J5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy90YXNrLWJhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqe1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xufVxuXG5ib2R5e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBcbn1cblxuaGVhZGVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMjRweCAzMnB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIHBsYWNlLXNlbGY6IGNlbnRlciBzdHJldGNoO1xufVxuXG5oMXtcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXIgc3RhcnQ7XG4gICAgZm9udC1zaXplOiA1NHB4O1xufVxuXG5oZWFkZXIgdWx7XG4gICAgcGxhY2Utc2VsZjogY2VudGVyIGVuZDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAyNHB4O1xufVxuXG5oZWFkZXIgdWw+bGl7XG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaGVhZGVyIHVsPmxpOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxubWFpbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwZnI7XG59XG5cbi5zaWRlYmFye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGdhcDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlN2ViO1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgbWluLXdpZHRoOiAyNTBweDtcbn1cblxuLnNpZGViYXItaGVhZGVye1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBwbGFjZS1zZWxmOiBzdGFydDtcbn1cblxuLnNpZGViYXItY29udGVudHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMjBweDtcbn1cblxuLnNlYXJjaC1iYXJ7XG4gICAgLyogYm9yZGVyOiAycHggc29saWQgcmVkOyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWQ1ZGI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNHB4IDEwcHg7XG4gICAgZ2FwOiAxNHB4O1xufVxuXG4uc2VhcmNoLWJhcjo6YWZ0ZXJ7XG4gICAgY29udGVudDogXCIgc2VhcmNoXCI7XG59XG5cbi5zZWFyY2gtYmFyOmhvdmVye1xuICAgIGN1cnNvcjogdGV4dDtcbn1cblxuLnNlYXJjaC1pY29ue1xuICAgIHdpZHRoOiAxOHB4O1xufVxuXG4uc3BhY2UtaWNvbntcbiAgICB3aWR0aDogMjZweCA7XG59XG5cbi5zcGFjZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgZ2FwOiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB0cmFuc2l0aW9uOiAwLjI1cyBlYXNlLWluLW91dDtcbn1cblxuLnNwYWNlOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xufVxuXG4uc3BhY2UtZGl2aWRlcntcbiAgICBib3JkZXI6IDEuN3B4IHNvbGlkICNkMWQ1ZGI7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5hZGQtc3BhY2U6OmJlZm9yZXtcbiAgICBjb250ZW50OiBcIitcIjtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5hZGQtc3BhY2V7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgZ2FwOiAxNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDJweDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU3ZWI7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuXG4uYWRkLXNwYWNlOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWQ1ZGI7XG59XG5cbi5hZGQtc3BhY2UtZm9ybTo6YmVmb3Jle1xuICAgIGNvbnRlbnQ6ICdMYWJlbCc7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIHBsYWNlLXNlbGY6IHN0YXJ0IGNlbnRlcjtcbn1cblxuLmFkZC1zcGFjZS1mb3Jte1xuICAgIHBhZGRpbmc6IDM2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMjBweDtcbiAgICB3aWR0aDogNDIwcHg7XG59XG5cbi50YXNrLWhvbGRlclxue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGdhcDogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLnRhc2staGVhZGVyXG57XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRhc2tzLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLnRhc2t7XG4gICAgaGVpZ2h0OiA2NHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMjAwZnIgMWZyO1xuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgIGdhcDogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYjtcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4zcyBlYXNlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50YXNrLW5vdGVze1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1jb2x1bW46IDIvMztcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi50YXNrOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiAgXG4udGFzay1kcm9wZG93bi1hY3RpdmV7XG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDsgXG59XG5cbi50YXNrLW1hcmtlcntcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIHBsYWNlLXNlbGY6IGNlbnRlciBzdGFydDtcbn1cblxuLnRhc2stY29udGVudHtcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXIgc3RhcnQ7XG59XG5cbi50YXNrLXBhcmFtZXRlcnN7XG4gICAgcGxhY2Utc2VsZjogY2VudGVyIGVuZDtcbn1cblxuLnRhc2stY29udGVudCxcbi50YXNrLXBhcmFtZXRlcnNcbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6IDRweDtcbn1cblxuLnRhc2stdGl0bGV7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGhlaWdodDogMzBweDtcbn1cblxuLnRhc2stZGVzY3JpcHRpb257XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnRhc2stcGFyYW1ldGVyc3tcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5hZGQtdGFzazo6YmVmb3Jle1xuICAgIGNvbnRlbnQ6ICcrICc7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWRkLXRhc2t7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgZ2FwOiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDY0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTUpO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICBib3R0b206IDEwcHg7XG59XG5cbi5hZGQtdGFzazpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAwNSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xufVxuXG4uYWRkLXRhc2stZm9ybTo6YmVmb3Jle1xuICAgIGNvbnRlbnQ6ICdUYXNrJztcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgcGxhY2Utc2VsZjogc3RhcnQgY2VudGVyO1xufVxuXG4uYWRkLXRhc2stZm9ybXtcbiAgICBwYWRkaW5nOiAzNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDIwcHg7XG4gICAgd2lkdGg6IDQyMHB4O1xufVxuXG5mb3JtPmRpdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbn1cblxuZm9ybSBsYWJlbHtcbiAgICB3aWR0aDogMTAwcHg7XG59XG5cbmZvcm0+ZGl2Omxhc3QtY2hpbGR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgIGdhcDogMjBweDtcbn1cblxuZm9ybSBidXR0b257XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMzJweDtcbn1cblxuZm9vdGVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDdweDtcbn1cblxuLmZhYntcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLmZhYjpob3ZlcntcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuMSk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBw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SUFDSSxZQUFZO0lBQ1osNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcbn1cXG5cXG5ib2R5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIFxcbn1cXG5cXG5oZWFkZXJ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAyNHB4IDMycHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgcGxhY2Utc2VsZjogY2VudGVyIHN0cmV0Y2g7XFxufVxcblxcbmgxe1xcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXIgc3RhcnQ7XFxuICAgIGZvbnQtc2l6ZTogNTRweDtcXG59XFxuXFxuaGVhZGVyIHVse1xcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXIgZW5kO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDI0cHg7XFxufVxcblxcbmhlYWRlciB1bD5saXtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIgdWw+bGk6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubWFpbntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwZnI7XFxufVxcblxcbi5zaWRlYmFye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBnYXA6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU3ZWI7XFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxuICAgIG1pbi13aWR0aDogMjUwcHg7XFxufVxcblxcbi5zaWRlYmFyLWhlYWRlcntcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBwbGFjZS1zZWxmOiBzdGFydDtcXG59XFxuXFxuLnNpZGViYXItY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uc2VhcmNoLWJhcntcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgcmVkOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFkNWRiO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNHB4IDEwcHg7XFxuICAgIGdhcDogMTRweDtcXG59XFxuXFxuLnNlYXJjaC1iYXI6OmFmdGVye1xcbiAgICBjb250ZW50OiBcXFwiIHNlYXJjaFxcXCI7XFxufVxcblxcbi5zZWFyY2gtYmFyOmhvdmVye1xcbiAgICBjdXJzb3I6IHRleHQ7XFxufVxcblxcbi5zZWFyY2gtaWNvbntcXG4gICAgd2lkdGg6IDE4cHg7XFxufVxcblxcbi5zcGFjZS1pY29ue1xcbiAgICB3aWR0aDogMjZweCA7XFxufVxcblxcbi5zcGFjZXtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIHRyYW5zaXRpb246IDAuMjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uc3BhY2U6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG59XFxuXFxuLnNwYWNlLWRpdmlkZXJ7XFxuICAgIGJvcmRlcjogMS43cHggc29saWQgI2QxZDVkYjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5hZGQtc3BhY2U6OmJlZm9yZXtcXG4gICAgY29udGVudDogXFxcIitcXFwiO1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxuLmFkZC1zcGFjZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA0MnB4O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTdlYjtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi5hZGQtc3BhY2U6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QxZDVkYjtcXG59XFxuXFxuLmFkZC1zcGFjZS1mb3JtOjpiZWZvcmV7XFxuICAgIGNvbnRlbnQ6ICdMYWJlbCc7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgcGxhY2Utc2VsZjogc3RhcnQgY2VudGVyO1xcbn1cXG5cXG4uYWRkLXNwYWNlLWZvcm17XFxuICAgIHBhZGRpbmc6IDM2cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAgd2lkdGg6IDQyMHB4O1xcbn1cXG5cXG4udGFzay1ob2xkZXJcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL3Rhc2stYmFja2dyb3VuZC5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLnRhc2staGVhZGVyXFxue1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRhc2tzLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnRhc2t7XFxuICAgIGhlaWdodDogNjRweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMjAwZnIgMWZyO1xcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWZhZmI7XFxuICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjNzIGVhc2U7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi50YXNrLW5vdGVze1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi50YXNrOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiAgXFxuLnRhc2stZHJvcGRvd24tYWN0aXZle1xcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50OyBcXG59XFxuXFxuLnRhc2stbWFya2Vye1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIHBsYWNlLXNlbGY6IGNlbnRlciBzdGFydDtcXG59XFxuXFxuLnRhc2stY29udGVudHtcXG4gICAgcGxhY2Utc2VsZjogY2VudGVyIHN0YXJ0O1xcbn1cXG5cXG4udGFzay1wYXJhbWV0ZXJze1xcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXIgZW5kO1xcbn1cXG5cXG4udGFzay1jb250ZW50LFxcbi50YXNrLXBhcmFtZXRlcnNcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDRweDtcXG59XFxuXFxuLnRhc2stdGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4udGFzay1kZXNjcmlwdGlvbntcXG4gICAgaGVpZ2h0OiAxOHB4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi50YXNrLXBhcmFtZXRlcnN7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLmFkZC10YXNrOjpiZWZvcmV7XFxuICAgIGNvbnRlbnQ6ICcrICc7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWRkLXRhc2t7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGdhcDogMTBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA2NHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU1KTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICBib3R0b206IDEwcHg7XFxufVxcblxcbi5hZGQtdGFzazpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDA1KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbn1cXG5cXG4uYWRkLXRhc2stZm9ybTo6YmVmb3Jle1xcbiAgICBjb250ZW50OiAnVGFzayc7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgcGxhY2Utc2VsZjogc3RhcnQgY2VudGVyO1xcbn1cXG5cXG4uYWRkLXRhc2stZm9ybXtcXG4gICAgcGFkZGluZzogMzZweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogNDIwcHg7XFxufVxcblxcbmZvcm0+ZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG5mb3JtIGxhYmVse1xcbiAgICB3aWR0aDogMTAwcHg7XFxufVxcblxcbmZvcm0+ZGl2Omxhc3QtY2hpbGR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbmZvcm0gYnV0dG9ue1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogMzJweDtcXG59XFxuXFxuZm9vdGVye1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA3cHg7XFxufVxcblxcbi5mYWJ7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmZhYjpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjEpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY3JlYXRlVGFza0RpYWxvZyB9IGZyb20gJy4vdGFza0RpYWxvZy5qcyc7XG5pbXBvcnQgeyBnZXRUYXNrcyB9IGZyb20gJy4vdGFza0RhdGEuanMnO1xuaW1wb3J0IHsgY3JlYXRlU3BhY2VEaWFsb2cgfSBmcm9tICcuL3NwYWNlRGlhbG9nLmpzJztcbmltcG9ydCB7IGdldFNwYWNlcyB9IGZyb20gJy4vc3BhY2VzLmpzJztcbmltcG9ydCBzZWFyY2hJY29uIGZyb20gJy4vaW1hZ2VzL3NlYXJjaC5wbmcnXG5cbmZ1bmN0aW9uIGdlbmVyYXRlRWxlbWVudCh0eXBlLCBjbGFzc2VzPVtdLCBvcHRpb25zKXtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICBmb3IobGV0IHNvbWVDbGFzcyBvZiBjbGFzc2VzKXtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHNvbWVDbGFzcyk7XG4gICAgfVxuICAgIGZvcihjb25zdCBrZXkgaW4gb3B0aW9ucyl7XG4gICAgICAgIGlmKGtleT09PSd0ZXh0Q29udGVudCcgfHwga2V5PT09J3R5cGUnIHx8IGtleT09PSd2YWx1ZScpe1xuICAgICAgICAgICAgZWxlbWVudFtrZXldID0gb3B0aW9uc1trZXldO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgb3B0aW9uc1trZXldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuY29uc3QgbWFpbiA9IGdlbmVyYXRlRWxlbWVudCgnbWFpbicpO1xuY29uc3Qgc2lkZWJhciA9IGdlbmVyYXRlRWxlbWVudCgnZGl2JywgWydzaWRlYmFyJ10pO1xuY29uc3Qgc2lkZWJhckhlYWQgPSBnZW5lcmF0ZUVsZW1lbnQoJ2RpdicsIFsnc2lkZWJhci1oZWFkZXInXSwgeyd0ZXh0Q29udGVudCc6ICdKb2huIERvZScsfSk7XG5jb25zdCBzaWRlYmFyQ29udGVudCA9IGdlbmVyYXRlRWxlbWVudCgnZGl2JywgWydzaWRlYmFyLWNvbnRlbnQnXSk7XG5jb25zdCB0YXNrSG9sZGVyID0gZ2VuZXJhdGVFbGVtZW50KCdkaXYnLCBbJ3Rhc2staG9sZGVyJ10pO1xuY29uc3QgdGFza0hlYWQgPSBnZW5lcmF0ZUVsZW1lbnQoJ2RpdicsIFsndGFzay1oZWFkZXInXSk7XG5jb25zdCB0YXNrQ29udGVudCA9IGdlbmVyYXRlRWxlbWVudCgnZGl2JywgWyd0YXNrcy1jb250YWluZXInXSk7XG5jb25zdCBhZGRUYXNrID0gZ2VuZXJhdGVFbGVtZW50KCdidXR0b24nLCBbJ2FkZC10YXNrJ10pO1xuXG5mdW5jdGlvbiBjYWxsVGFza0RpYWxvZygpIHtcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stZGlhbG9nJyk7XG4gICAgZGlhbG9nLnNob3dNb2RhbCgpO1xuICAgIGNvbnN0IGRpYWxvZ1dpZHRoID0gZGlhbG9nLm9mZnNldFdpZHRoO1xuICAgIGNvbnN0IGRpYWxvZ0hlaWdodCA9IGRpYWxvZy5vZmZzZXRIZWlnaHQ7XG4gICAgY29uc3Qgdmlld3BvcnRXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGNvbnN0IHZpZXdwb3J0SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGNvbnN0IGxlZnRQb3NpdGlvbiA9IHZpZXdwb3J0V2lkdGggLyAyIC0gZGlhbG9nV2lkdGggLyAyO1xuICAgIGNvbnN0IHRvcFBvc2l0aW9uID0gdmlld3BvcnRIZWlnaHQgLyAyIC0gZGlhbG9nSGVpZ2h0IC8gMjtcbiAgICBkaWFsb2cuc3R5bGUubGVmdCA9IGAke2xlZnRQb3NpdGlvbn1weGA7XG4gICAgZGlhbG9nLnN0eWxlLnRvcCA9IGAke3RvcFBvc2l0aW9ufXB4YDtcbn1cblxuZnVuY3Rpb24gY2FsbFNwYWNlRGlhbG9nKCl7XG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1zcGFjZS1kaWFsb2cnKTtcbiAgICBkaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgY29uc3QgZGlhbG9nV2lkdGggPSBkaWFsb2cub2Zmc2V0V2lkdGg7XG4gICAgY29uc3QgZGlhbG9nSGVpZ2h0ID0gZGlhbG9nLm9mZnNldEhlaWdodDtcbiAgICBjb25zdCB2aWV3cG9ydFdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgY29uc3Qgdmlld3BvcnRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgY29uc3QgbGVmdFBvc2l0aW9uID0gdmlld3BvcnRXaWR0aCAvIDIgLSBkaWFsb2dXaWR0aCAvIDI7XG4gICAgY29uc3QgdG9wUG9zaXRpb24gPSB2aWV3cG9ydEhlaWdodCAvIDIgLSBkaWFsb2dIZWlnaHQgLyAyO1xuICAgIGRpYWxvZy5zdHlsZS5sZWZ0ID0gYCR7bGVmdFBvc2l0aW9ufXB4YDtcbiAgICBkaWFsb2cuc3R5bGUudG9wID0gYCR7dG9wUG9zaXRpb259cHhgO1xufVxuXG5mdW5jdGlvbiB2aWV3RHJvcGRvd24oZSkge1xuICAgIGNvbnN0IGFsbFRhc2tzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzaycpKTtcbiAgICBhbGxUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIGlmIChBcnJheS5mcm9tKHRhc2suY2xhc3NMaXN0KS5pbmNsdWRlcygndGFzay1kcm9wZG93bi1hY3RpdmUnKSkge1xuICAgICAgICAgICAgaWYgKCEoZS50YXJnZXQgPT0gdGFzaykpIHtcbiAgICAgICAgICAgICAgICB0YXNrLmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stZHJvcGRvd24tYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoQXJyYXkuZnJvbShlLnRhcmdldC5jbGFzc0xpc3QpLmluY2x1ZGVzKCd0YXNrLWRyb3Bkb3duLWFjdGl2ZScpKSB7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stZHJvcGRvd24tYWN0aXZlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgndGFzay1kcm9wZG93bi1hY3RpdmUnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVEaXNwbGF5KCkge1xuICAgIG1haW4udGV4dENvbnRlbnQ9Jyc7IFxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tU2lkZWJhci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAgIC8vYWRkIHNpZGViYXIgaGVhZGVyXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFySGVhZCk7XG4gICAgdGFza0hvbGRlci5hcHBlbmRDaGlsZCh0YXNrSGVhZCk7XG4gICAgLy9hZGQgc2VhcmNoIGJhclxuICAgIGNvbnN0IHNwYWNlcyA9IGdldFNwYWNlcygpO1xuICAgIHNpZGViYXJDb250ZW50LnRleHRDb250ZW50PScnO1xuICAgIGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGljb24xID0gbmV3IEltYWdlKCk7XG4gICAgaWNvbjEuc3JjID0gc2VhcmNoSWNvbjtcbiAgICBzZWFyY2hCYXIuY2xhc3NMaXN0LmFkZCgnc2VhcmNoLWJhcicpO1xuICAgIGljb24xLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1pY29uJyk7XG4gICAgc2VhcmNoQmFyLmFwcGVuZENoaWxkKGljb24xKTtcbiAgICBzaWRlYmFyQ29udGVudC5hcHBlbmRDaGlsZChzZWFyY2hCYXIpO1xuICAgIC8vYWRkIEluLWJ1aWx0IGxhYmVsc1xuICAgIGxldCBpPTA7XG4gICAgZm9yIChpOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHNwYWNlID0gZ2VuZXJhdGVFbGVtZW50KCdkaXYnLCBbJ3NwYWNlJ10pO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGdlbmVyYXRlRWxlbWVudCgncCcsIFsnc3BhY2UtdGl0bGUnXSk7XG4gICAgICAgIGNvbnN0IGljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdzcGFjZS1pY29uJyk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gc3BhY2VzW2ldLnRpdGxlO1xuICAgICAgICBpY29uLnNyYyA9IHNwYWNlc1tpXS5pbWFnZVNyYztcbiAgICAgICAgc3BhY2UuYXBwZW5kKGljb24sIHRpdGxlKTtcbiAgICAgICAgc2lkZWJhckNvbnRlbnQuYXBwZW5kQ2hpbGQoc3BhY2UpO1xuICAgIH1cbiAgICAvL2FkZCBOZXcgZGl2aWRlciB0byBzZXBhcmF0ZSBJbi1idWlsdCBsYWJlbHMgYW5kIGN1c3RvbSBsYWJlbHNcbiAgICBjb25zdCBkaXZpZGVyID0gZ2VuZXJhdGVFbGVtZW50KCdkaXYnLCBbJ3NwYWNlLWRpdmlkZXInXSk7XG4gICAgc2lkZWJhckNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2aWRlcik7XG4gICAgLy9hZGQgY3VzdG9tIGxhYmVsc1xuICAgIGZvcihpOyBpPHNwYWNlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvbnN0IHNwYWNlID0gZ2VuZXJhdGVFbGVtZW50KCdkaXYnLCBbJ3NwYWNlJ10pO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGdlbmVyYXRlRWxlbWVudCgncCcsIFsnc3BhY2UtdGl0bGUnXSk7XG4gICAgICAgIGNvbnN0IGljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdzcGFjZS1pY29uJyk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gc3BhY2VzW2ldLnRpdGxlO1xuICAgICAgICBpY29uLnNyYyA9IHNwYWNlc1tpXS5pbWFnZVNyYztcbiAgICAgICAgc3BhY2UuYXBwZW5kKGljb24sIHRpdGxlKTtcbiAgICAgICAgc2lkZWJhckNvbnRlbnQuYXBwZW5kQ2hpbGQoc3BhY2UpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkkgYWRkZWQgc3BhY2UhXCIpO1xuICAgIH1cbiAgICAvL2FkZCBidXR0b24gdG8gY3JlYXRlIG5ldyBsYWJlbHNcbiAgICBjb25zdCBhZGRTcGFjZSA9IGdlbmVyYXRlRWxlbWVudCgnYnV0dG9uJywgWydhZGQtc3BhY2UnXSwge1xuICAgICAgICAndGV4dENvbnRlbnQnOiAnTmV3IGxhYmVsJyxcbiAgICB9KVxuICAgIGFkZFNwYWNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbFNwYWNlRGlhbG9nKTtcbiAgICBzaWRlYmFyQ29udGVudC5hcHBlbmRDaGlsZChhZGRTcGFjZSk7XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1UYXNrcy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cbiAgICAvL2FkZCB0YXNrcyBoZWFkZXJcbiAgICB0YXNrSGVhZC50ZXh0Q29udGVudCA9ICdUYXNrcyc7XG4gICAgLy9hZGQgYnV0dG9uIHRvIGNyZWF0ZSBuZXcgdGFza1xuICAgIGFkZFRhc2sudGV4dENvbnRlbnQgPSAnQWRkIGEgdGFzayc7XG4gICAgYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGxUYXNrRGlhbG9nKTtcbiAgICAvL2FkZCB0YXNrcyB0byBkaXNwbGF5XG4gICAgY29uc3QgdGFza3MgPSBnZXRUYXNrcygpO1xuICAgIHRhc2tDb250ZW50LnRleHRDb250ZW50PScnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdGFzayA9IGdlbmVyYXRlRWxlbWVudCgnZGl2JywgWyd0YXNrJywgYCR7aX1gXSk7XG4gICAgICAgIGNvbnN0IG1hcmtlciA9IGdlbmVyYXRlRWxlbWVudCgnYnV0dG9uJywgW2B0YXNrLW1hcmtlcmBdKTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGdlbmVyYXRlRWxlbWVudCgnZGl2JywgWyd0YXNrLWNvbnRlbnQnXSk7XG4gICAgICAgIGNvbnN0IHBhcmFtZXRlcnMgPSBnZW5lcmF0ZUVsZW1lbnQoJ2RpdicsIFsndGFzay1wYXJhbWV0ZXJzJ10pO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGdlbmVyYXRlRWxlbWVudCgncCcsIFsndGFzay10aXRsZSddLCB7XG4gICAgICAgICAgICAndGV4dENvbnRlbnQnOnRhc2tzW2ldLnRpdGxlLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBnZW5lcmF0ZUVsZW1lbnQoJ3AnLCBbJ3Rhc2stZGVzY3JpcHRpb24nXSwge1xuICAgICAgICAgICAgJ3RleHRDb250ZW50JzogdGFza3NbaV0uZGVzY3JpcHRpb24sXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBkZWFkbGluZSA9IGdlbmVyYXRlRWxlbWVudCgncCcsIFsndGFzay1kZWFkbGluZSddLCB7XG4gICAgICAgICAgICAndGV4dENvbnRlbnQnOiB0YXNrc1tpXS5kZWFkbGluZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZ2VuZXJhdGVFbGVtZW50KCdwJywgWyd0YXNrLXByaW9yaXR5J10sIHtcbiAgICAgICAgICAgICd0ZXh0Q29udGVudCc6IHRhc2tzW2ldLnByaW9yaXR5LFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgbm90ZXMgPSBnZW5lcmF0ZUVsZW1lbnQoJ2RpdicsIFsndGFzay1ub3RlcyddLCB7XG4gICAgICAgICAgICAndGV4dENvbnRlbnQnOiB0YXNrc1tpXS5ub3RlcyxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kKHRpdGxlLCBkZXNjcmlwdGlvbik7XG4gICAgICAgIHBhcmFtZXRlcnMuYXBwZW5kKGRlYWRsaW5lLCBwcmlvcml0eSk7XG4gICAgICAgIHRhc2suYXBwZW5kKG1hcmtlciwgY29udGVudCwgcGFyYW1ldGVycywgbm90ZXMpO1xuICAgICAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdmlld0Ryb3Bkb3duKTtcbiAgICAgICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQodGFzayk7XG4gICAgfVxuICAgIHRhc2tIb2xkZXIuYXBwZW5kQ2hpbGQodGFza0NvbnRlbnQpO1xuICAgIHRhc2tIb2xkZXIuYXBwZW5kQ2hpbGQoYWRkVGFzayk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyQ29udGVudCk7XG4gICAgY29uc3QgdGFza0RpYWxvZyA9IGNyZWF0ZVRhc2tEaWFsb2coKTtcbiAgICBjb25zdCBzcGFjZURpYWxvZyA9IGNyZWF0ZVNwYWNlRGlhbG9nKCk7XG4gICAgbWFpbi5hcHBlbmQoc2lkZWJhciwgdGFza0hvbGRlciwgdGFza0RpYWxvZywgc3BhY2VEaWFsb2cpO1xuICAgIGNvbnNvbGUubG9nKHRhc2tzKTtcbiAgICByZXR1cm4gbWFpbjtcbn1cbiIsImltcG9ydCB7IGFkZFNwYWNlIH0gZnJvbSBcIi4vc3BhY2VzLmpzXCI7XG5pbXBvcnQgeyB1cGRhdGVEaXNwbGF5IH0gZnJvbSBcIi4vaG9tZVBhZ2UuanNcIjtcbmltcG9ydCBsaXN0SWNvbiBmcm9tICcuL2ltYWdlcy9saXN0LnBuZyc7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlRWxlbWVudCh0eXBlLCBvcHRpb25zKXtcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgZm9yKGNvbnN0IGtleSBpbiBvcHRpb25zKXtcbiAgICAgICAgaWYoa2V5PT09J3RleHRDb250ZW50JyB8fCBrZXk9PT0ndHlwZScgfHwga2V5PT09J3ZhbHVlJyl7XG4gICAgICAgICAgICBlbGVtZW50W2tleV0gPSBvcHRpb25zW2tleV07XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBvcHRpb25zW2tleV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5jb25zdCBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cbmNvbnN0IHRpdGxlID0gZ2VuZXJhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAnaWQnOiAndGl0bGUnLFxuICAgICd0eXBlJzogJ3RleHQnLFxuICAgICdyZXF1aXJlZCc6IHRydWUsXG59KTtcblxuY29uc3QgY29sb3IgPSBnZW5lcmF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuICAgICdpZCc6ICdjb2xvcicsXG4gICAgJ3R5cGUnOiAnY29sb3InLFxuICAgICdyZXF1aXJlZCc6IHRydWUsXG59KTtcblxuY29uc3QgdGl0bGVMYWJlbCA9IGdlbmVyYXRlRWxlbWVudCgnbGFiZWwnLCB7XG4gICAgJ2Zvcic6ICd0aXRsZScsXG4gICAgJ3RleHRDb250ZW50JzogJ1RpdGxlOicsXG59KTtcblxuY29uc3QgY29sb3JMYWJlbCA9IGdlbmVyYXRlRWxlbWVudCgnbGFiZWwnLCB7XG4gICAgJ2Zvcic6ICdjb2xvcicsXG4gICAgJ3RleHRDb250ZW50JzogJ2NvbG9yOicsXG59KTtcblxuY29uc3Qgc3VibWl0ID0gZ2VuZXJhdGVFbGVtZW50KCdidXR0b24nLCB7XG4gICAgJ3R5cGUnOiAnc3VibWl0JyxcbiAgICAndGV4dENvbnRlbnQnOiAnQWRkJyxcbn0pO1xuXG5jb25zdCBjYW5jZWwgPSBnZW5lcmF0ZUVsZW1lbnQoJ2J1dHRvbicsIHtcbiAgICAndHlwZSc6ICdyZXNldCcsXG4gICAgJ3RleHRDb250ZW50JzogJ0NhbmNlbCcsXG59KTtcblxuY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGNvbG9yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBidXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FuY2VsRXZlbnQpO1xuXG50aXRsZURpdi5hcHBlbmQodGl0bGVMYWJlbCwgdGl0bGUpO1xuY29sb3JEaXYuYXBwZW5kKGNvbG9yTGFiZWwsIGNvbG9yKTtcbmJ1dHRvbkRpdi5hcHBlbmQoc3VibWl0LCBjYW5jZWwpO1xuXG5mb3JtLmFwcGVuZCh0aXRsZURpdiwgY29sb3JEaXYsIGJ1dHRvbkRpdik7XG5mb3JtLm1ldGhvZCA9ICdkaWFsb2cnO1xuZm9ybS5jbGFzc0xpc3QuYWRkKCdhZGQtc3BhY2UtZm9ybScpO1xuZGlhbG9nLmNsYXNzTGlzdC5hZGQoJ2FkZC1zcGFjZS1kaWFsb2cnKTtcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0Jywgc3VibWl0RXZlbnQpO1xuZGlhbG9nLmFwcGVuZENoaWxkKGZvcm0pO1xuXG5mdW5jdGlvbiBzdWJtaXRFdmVudChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChmb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInNwYWNlIHdhcyBhZGRlZCFcIik7XG4gICAgICAgIGFkZFNwYWNlKHtcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZS52YWx1ZSxcbiAgICAgICAgICAgIGltYWdlU3JjOiBsaXN0SWNvbixcbiAgICAgICAgfSk7XG4gICAgICAgIHVwZGF0ZURpc3BsYXkoKTtcbiAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNhbmNlbEV2ZW50KCkge1xuICAgIGZvcm0ucmVzZXQoKTtcbiAgICBkaWFsb2cuY2xvc2UoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNwYWNlRGlhbG9nKCkge1xuICAgIHJldHVybiBkaWFsb2c7XG59XG4iLCJpbXBvcnQgaWNvbjMgZnJvbSAnLi9pbWFnZXMvaWNvbjMucG5nJztcbmltcG9ydCBpY29uNCBmcm9tICcuL2ltYWdlcy9pY29uNC5wbmcnO1xuaW1wb3J0IGljb24xIGZyb20gJy4vaW1hZ2VzL2ljb24xLnBuZyc7XG5pbXBvcnQgaWNvbjIgZnJvbSAnLi9pbWFnZXMvaWNvbjIucG5nJztcblxubGV0IHNwYWNlcyA9IFtcbiAgICB7ICAgdGl0bGU6IFwiUGVyc29uYWxcIiwgXG4gICAgICAgIGltYWdlU3JjOiBpY29uNCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiSW1wb3J0YW50XCIsXG4gICAgICAgIGltYWdlU3JjOiBpY29uMyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiQ29tcGxldGVkXCIsXG4gICAgICAgIGltYWdlU3JjOiBpY29uMSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiQWxsXCIsXG4gICAgICAgIGltYWdlU3JjOiBpY29uMixcbiAgICB9LFxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFNwYWNlKHNwYWNlKXtcbiAgICBzcGFjZXMucHVzaChzcGFjZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTcGFjZXMoKXtcbiAgICByZXR1cm4gc3BhY2VzO1xufSIsImxldCB0YXNrcyA9IFtdO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkVGFzayh0YXNrKSB7XG4gIHRhc2tzLnB1c2godGFzayk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUYXNrcygpIHtcbiAgcmV0dXJuIHRhc2tzO1xufSIsImltcG9ydCB0YXNrTWFrZXIgZnJvbSBcIi4vdGFza0ZhY3RvcnkuanNcIjtcbmltcG9ydCB7IGFkZFRhc2sgfSBmcm9tIFwiLi90YXNrRGF0YS5qc1wiO1xuaW1wb3J0IHsgZ2V0U3BhY2VzIH0gZnJvbSBcIi4vc3BhY2VzLmpzXCI7XG5pbXBvcnQgeyB1cGRhdGVEaXNwbGF5IH0gZnJvbSBcIi4vaG9tZVBhZ2UuanNcIjtcblxuZnVuY3Rpb24gZ2VuZXJhdGVFbGVtZW50KHR5cGUsIG9wdGlvbnMpIHtcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gb3B0aW9ucykge1xuICAgICAgICBpZiAoa2V5ID09PSAndGV4dENvbnRlbnQnIHx8IGtleSA9PT0gJ3R5cGUnIHx8IGtleSA9PT0gJ3ZhbHVlJykge1xuICAgICAgICAgICAgZWxlbWVudFtrZXldID0gb3B0aW9uc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBvcHRpb25zW2tleV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5jb25zdCBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cbmNvbnN0IHRpdGxlID0gZ2VuZXJhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAnaWQnOiAndGl0bGUnLFxuICAgICd0eXBlJzogJ3RleHQnLFxuICAgICdyZXF1aXJlZCc6IHRydWUsXG59KTtcblxuY29uc3QgZGVzY3JpcHRpb24gPSBnZW5lcmF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuICAgICdpZCc6ICdkZXNjcmlwdGlvbicsXG4gICAgJ3R5cGUnOiAndGV4dCcsXG59KTtcblxuY29uc3QgbGlzdCA9IGdlbmVyYXRlRWxlbWVudCgnc2VsZWN0Jywge1xuICAgICdpZCc6ICdsaXN0Jyxcbn0pO1xuXG5jb25zdCBkdWVEYXRlID0gZ2VuZXJhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAnaWQnOiAnZHVlRGF0ZScsXG4gICAgJ3R5cGUnOiAnZGF0ZScsXG59KTtcblxuY29uc3QgcHJpb3JpdHkgPSBnZW5lcmF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuICAgICdpZCc6ICdwcmlvcml0eScsXG4gICAgJ3R5cGUnOiAncmFuZ2UnLFxuICAgICdtaW4nOiAnMScsXG4gICAgJ21heCc6ICcxMCcsXG4gICAgJ3ZhbHVlJzogJzInLFxuXG59KTtcblxuY29uc3Qgbm90ZXMgPSBnZW5lcmF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuICAgICdpZCc6ICdub3RlcycsXG4gICAgJ3R5cGUnOiAndGV4dCcsXG59KTtcblxuY29uc3QgY2hlY2sgPSBnZW5lcmF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuICAgICdpZCc6ICdjaGVjaycsXG4gICAgJ3R5cGUnOiAnY2hlY2tib3gnXG59KTtcblxuY29uc3QgdGl0bGVMYWJlbCA9IGdlbmVyYXRlRWxlbWVudCgnbGFiZWwnLCB7XG4gICAgJ2Zvcic6ICd0aXRsZScsXG4gICAgJ3RleHRDb250ZW50JzogJ1RpdGxlOicsXG59KTtcblxuY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGdlbmVyYXRlRWxlbWVudCgnbGFiZWwnLCB7XG4gICAgJ2Zvcic6ICdkZXNjcmlwdGlvbicsXG4gICAgJ3RleHRDb250ZW50JzogJ0Rlc2NyaXB0aW9uOicsXG59KTtcblxuY29uc3QgbGlzdExhYmVsID0gZ2VuZXJhdGVFbGVtZW50KCdsYWJlbCcsIHtcbiAgICAnZm9yJzogJ2xpc3QnLFxuICAgICd0ZXh0Q29udGVudCc6ICdMYWJlbCBhczonLFxufSk7XG5cbmNvbnN0IGR1ZURhdGVMYWJlbCA9IGdlbmVyYXRlRWxlbWVudCgnbGFiZWwnLCB7XG4gICAgJ2Zvcic6ICdkdWVEYXRlJyxcbiAgICAndGV4dENvbnRlbnQnOiAnRHVlIGRhdGU6Jyxcbn0pO1xuXG5jb25zdCBwcmlvcml0eUxhYmVsID0gZ2VuZXJhdGVFbGVtZW50KCdsYWJlbCcsIHtcbiAgICAnZm9yJzogJ3ByaW9yaXR5JyxcbiAgICAndGV4dENvbnRlbnQnOiAnUHJpb3JpdHk6Jyxcbn0pO1xuXG5jb25zdCBub3Rlc0xhYmVsID0gZ2VuZXJhdGVFbGVtZW50KCdsYWJlbCcsIHtcbiAgICAnZm9yJzogJ25vdGVzJyxcbiAgICAndGV4dENvbnRlbnQnOiAnTm90ZXM6Jyxcbn0pO1xuXG5jb25zdCBjaGVja0xhYmVsID0gZ2VuZXJhdGVFbGVtZW50KCdsYWJlbCcsIHtcbiAgICAnZm9yJzogJ2NoZWNrJyxcbiAgICAndGV4dENvbnRlbnQnOiAnQ29tcGxldGVkOidcbn0pO1xuXG5jb25zdCBzdWJtaXQgPSBnZW5lcmF0ZUVsZW1lbnQoJ2J1dHRvbicsIHtcbiAgICAndHlwZSc6ICdzdWJtaXQnLFxuICAgICd0ZXh0Q29udGVudCc6ICdBZGQnLFxufSk7XG5cbmNvbnN0IGNhbmNlbCA9IGdlbmVyYXRlRWxlbWVudCgnYnV0dG9uJywge1xuICAgICd0eXBlJzogJ3Jlc2V0JyxcbiAgICAndGV4dENvbnRlbnQnOiAnQ2FuY2VsJyxcbn0pO1xuXG5cblxuY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBsaXN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3Qgbm90ZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGNoZWNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBidXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FuY2VsRXZlbnQpO1xuXG50aXRsZURpdi5hcHBlbmQodGl0bGVMYWJlbCwgdGl0bGUpO1xuZGVzY3JpcHRpb25EaXYuYXBwZW5kKGRlc2NyaXB0aW9uTGFiZWwsIGRlc2NyaXB0aW9uKTtcbmxpc3REaXYuYXBwZW5kKGxpc3RMYWJlbCwgbGlzdCk7XG5wcmlvcml0eURpdi5hcHBlbmQocHJpb3JpdHlMYWJlbCwgcHJpb3JpdHkpO1xuZHVlRGF0ZURpdi5hcHBlbmQoZHVlRGF0ZUxhYmVsLCBkdWVEYXRlKTtcbm5vdGVzRGl2LmFwcGVuZChub3Rlc0xhYmVsLCBub3Rlcyk7XG5jaGVja0Rpdi5hcHBlbmQoY2hlY2tMYWJlbCwgY2hlY2spO1xuYnV0dG9uRGl2LmFwcGVuZChzdWJtaXQsIGNhbmNlbCk7XG5cbmZvcm0uYXBwZW5kKHRpdGxlRGl2LCBkZXNjcmlwdGlvbkRpdiwgbGlzdERpdiwgcHJpb3JpdHlEaXYsIGR1ZURhdGVEaXYsIG5vdGVzRGl2LCBjaGVja0RpdiwgYnV0dG9uRGl2KTtcbmZvcm0ubWV0aG9kID0gJ2RpYWxvZyc7XG5mb3JtLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrLWZvcm0nKTtcbmRpYWxvZy5jbGFzc0xpc3QuYWRkKCdhZGQtdGFzay1kaWFsb2cnKTtcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0Jywgc3VibWl0RXZlbnQpO1xuZGlhbG9nLmFwcGVuZENoaWxkKGZvcm0pO1xuXG5mdW5jdGlvbiBzdWJtaXRFdmVudChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChmb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInRhc2sgd2FzIGFkZGVkIVwiKTtcbiAgICAgICAgYWRkVGFzayh0YXNrTWFrZXIodGl0bGUudmFsdWUsIGRlc2NyaXB0aW9uLnZhbHVlLCBsaXN0LnZhbHVlLCBkdWVEYXRlLnZhbHVlLCBwcmlvcml0eS52YWx1ZSwgbm90ZXMudmFsdWUsIGNoZWNrLnZhbHVlKSk7XG4gICAgICAgIHVwZGF0ZURpc3BsYXkoKTtcbiAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNhbmNlbEV2ZW50KCkge1xuICAgIGZvcm0ucmVzZXQoKTtcbiAgICBkaWFsb2cuY2xvc2UoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2tEaWFsb2coKSB7XG4gICAgbGV0IHNwYWNlcyA9IGdldFNwYWNlcygpO1xuICAgIGxpc3QudGV4dENvbnRlbnQ9Jyc7XG4gICAgZm9yIChjb25zdCBzcGFjZSBvZiBzcGFjZXMpIHtcbiAgICAgICAgaWYgKHNwYWNlLnRpdGxlID09PSAnQWxsJyB8fCBzcGFjZS50aXRsZSA9PT0gJ0NvbXBsZXRlZCcpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGdlbmVyYXRlRWxlbWVudCgnb3B0aW9uJywge1xuICAgICAgICAgICAgJ3ZhbHVlJzogc3BhY2UudGl0bGUsXG4gICAgICAgICAgICAndGV4dENvbnRlbnQnOiBzcGFjZS50aXRsZSxcbiAgICAgICAgfSlcbiAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH1cbiAgICByZXR1cm4gZGlhbG9nO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGFza01ha2VyKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJvamVjdCwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBjaGVjayl7XG4gICAgcmV0dXJuIHt0aXRsZSwgZGVzY3JpcHRpb24sIHByb2plY3QsIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcywgY2hlY2t9O1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHt1cGRhdGVEaXNwbGF5fSBmcm9tIFwiLi9ob21lUGFnZS5qc1wiO1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5jb25zdCBtYWluID0gdXBkYXRlRGlzcGxheSgpO1xuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=