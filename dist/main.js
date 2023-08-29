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

.space{
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 15px;
    font-size: 24px;
}

.space:hover{
    cursor: pointer;
}

.space-icon{
    width: 26px ;
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    /* border: 1px solid red; */\n}\n\nbody{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    \n}\n\nheader{\n    width: 100%;\n    box-sizing: border-box;\n    padding: 24px 32px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    place-self: center stretch;\n}\n\nh1{\n    place-self: center start;\n    font-size: 54px;\n}\n\nheader ul{\n    place-self: center end;\n    list-style: none;\n    display: flex;\n    gap: 24px;\n}\n\nheader ul>li{\n    width: max-content;\n    display: flex;\n    align-items: center;\n}\n\nheader ul>li:hover{\n    cursor: pointer;\n}\n\nmain{\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 10fr;\n}\n\n.sidebar{\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    gap: 50px;\n    background-color: #e5e7eb;\n    max-width: 300px;\n    min-width: 250px;\n}\n\n.sidebar-header{\n    font-size: 36px;\n    place-self: start;\n}\n\n.sidebar-content{\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n}\n\n.search-bar{\n    /* border: 2px solid red; */\n    background-color: #d1d5db;\n    width: 100%;\n    border-radius: 10px;\n    display: flex;\n    align-items: center;\n    padding: 4px 10px;\n    gap: 14px;\n}\n\n.search-bar::after{\n    content: \" search\";\n}\n\n.search-bar:hover{\n    cursor: text;\n}\n\n.search-icon{\n    width: 18px;\n}\n\n.space{\n    width: 100%;\n    height: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: start;\n    gap: 15px;\n    font-size: 24px;\n}\n\n.space:hover{\n    cursor: pointer;\n}\n\n.space-icon{\n    width: 26px ;\n}\n\n.task-holder\n{\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    gap: 20px;\n    background-image: url(./images/task-background.jpg);\n    background-size: cover;\n    min-height: 100vh;\n}\n\n.task-header\n{\n    font-size: 36px;\n    font-weight: 900;\n    align-items: center;\n    justify-content: start;\n    color: white;\n}\n\n.tasks-container{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 10px;\n    height: 100%;\n}\n\n.task{\n    height: 64px;\n    display: grid;\n    grid-template-columns: 1fr 200fr 1fr;\n    padding: 5px 15px;\n    gap: 15px;\n    border-radius: 8px;\n    background-color: #f9fafb;\n    transition: height 0.3s ease;\n    overflow: hidden;\n}\n\n.task-notes{\n    display: grid;\n    grid-column: 2/3;\n    font-size: 18px;\n}\n\n.task:hover{\n    cursor: pointer;\n}\n  \n.task-dropdown-active{\n    height: max-content; \n}\n\n.task-marker{\n    border-radius: 50%;\n    height: 20px;\n    width: 20px;\n    place-self: center start;\n}\n\n.task-content{\n    place-self: center start;\n}\n\n.task-parameters{\n    place-self: center end;\n}\n\n.task-content,\n.task-parameters\n{\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    justify-content: space-between;\n    gap: 4px;\n}\n\n.task-title{\n    font-size: 24px;\n    height: 30px;\n}\n\n.task-description{\n    height: 18px;\n    font-size: 14px;\n}\n\n.task-parameters{\n    font-size: 18px;\n}\n\n.add-task::before{\n    content: '+ ';\n    font-size: 30px;\n    color: white;\n    align-items: center;\n}\n\n.add-task{\n    display: flex;\n    align-items: center;\n    justify-content: start;\n    gap: 10px;\n    padding-left: 20px;\n    width: 100%;\n    height: 64px;\n    border-radius: 8px;\n    color: white;\n    background-color: rgba(0, 0, 0, 0.55);\n    font-size: 20px;\n    font-weight: 900;\n    transition: 0.2s;\n    position: sticky;\n    bottom: 10px;\n}\n\n.add-task:hover{\n    cursor: pointer;\n    transform: scale(1.005);\n    background-color: rgba(0, 0, 0, 0.7);\n}\n\n.add-task-form::before{\n    content: 'Task';\n    font-size: 36px;\n    place-self: start center;\n}\n\n.add-task-form{\n    padding: 36px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    width: 420px;\n}\n\nform>div{\n    display: flex;\n    align-items: center;\n    justify-content: start;\n}\n\nform label{\n    width: 100px;\n}\n\nform>div:last-child{\n    display: flex;\n    align-items: center;\n    justify-content: end;\n    gap: 20px;\n}\n\nform button{\n    width: 100px;\n    height: 32px;\n}\n\nfooter{\n    width: 100%;\n    padding: 20px;\n    display: flex;\n    font-size: 24px;\n    align-items: center;\n    justify-content: center;\n    gap: 7px;\n}\n\n.fab{\n    color: black;\n    transition: 0.3s ease-in-out;\n}\n\n.fab:hover{\n    transform: rotate(360deg) scale(1.1);\n}"],"sourceRoot":""}]);
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
/* harmony export */   updateTaskDisplay: () => (/* binding */ updateTaskDisplay)
/* harmony export */ });
/* harmony import */ var _taskDialog_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskDialog.js */ "./src/taskDialog.js");
/* harmony import */ var _taskData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskData.js */ "./src/taskData.js");
/* harmony import */ var _spaces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spaces.js */ "./src/spaces.js");
/* harmony import */ var _images_search_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/search.png */ "./src/images/search.png");




const main = document.createElement('main');
const sidebar = document.createElement('div');
const sidebarHead = document.createElement('div');
const sidebarContent = document.createElement('div');
const taskHolder = document.createElement('div');
const taskHead = document.createElement('div');
const taskContent = document.createElement('div');
const addTask = document.createElement('button');

function callDialog() {
    const dialog = document.querySelector('dialog');
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

function updateTaskDisplay() {
    main.textContent='';
    sidebar.classList.add('sidebar');
    sidebarHead.classList.add('sidebar-header');
    sidebarHead.textContent = 'John Doe';
    sidebarContent.classList.add('sidebar-content');
    taskHolder.classList.add('task-holder');
    taskHead.classList.add('task-header');
    taskHead.textContent = 'Tasks';
    taskContent.classList.add('tasks-container');
    addTask.classList.add('add-task')
    addTask.textContent = 'Add a task';
    addTask.addEventListener('click', callDialog);

    sidebar.appendChild(sidebarHead);
    taskHolder.appendChild(taskHead);

    const spaces = (0,_spaces_js__WEBPACK_IMPORTED_MODULE_2__.getSpaces)();
    sidebarContent.textContent='';
    const searchBar = document.createElement('div');
    const icon1 = new Image();
    icon1.src = _images_search_png__WEBPACK_IMPORTED_MODULE_3__;
    searchBar.classList.add('search-bar');
    icon1.classList.add('search-icon');
    searchBar.appendChild(icon1);
    sidebarContent.appendChild(searchBar);
    for (let i = 0; i < spaces.length; i++) {
        const space = document.createElement('div');
        const title = document.createElement('p');
        const icon = new Image();
        space.classList.add('space');
        title.classList.add('space-title');
        icon.classList.add('space-icon');
        title.textContent = spaces[i].title;
        icon.src = spaces[i].imageSrc;
        space.append(icon, title);
        sidebarContent.appendChild(space);
    }

    const tasks = (0,_taskData_js__WEBPACK_IMPORTED_MODULE_1__.getTasks)();
    taskContent.textContent='';
    for (let i = 0; i < tasks.length; i++) {
        const task = document.createElement('div');
        const marker = document.createElement('button');
        const content = document.createElement('div');
        const parameters = document.createElement('div');
        const title = document.createElement('p');
        const description = document.createElement('p');
        const deadline = document.createElement('p');
        const priority = document.createElement('p');
        const notes = document.createElement('div');
        task.classList.add('task');
        task.classList.add(`${i}`);
        marker.classList.add(`task-marker`);
        content.classList.add('task-content');
        title.classList.add('task-title');
        description.classList.add('task-description');
        parameters.classList.add('task-parameters');
        deadline.classList.add('task-deadline');
        priority.classList.add('task-priority');
        notes.classList.add('task-notes');
        title.textContent = tasks[i].title;
        description.textContent = tasks[i].description;
        deadline.textContent = tasks[i].deadline;
        priority.textContent = tasks[i].priority;
        notes.textContent = tasks[i].notes;
        content.append(title, description);
        parameters.append(deadline, priority);
        task.append(marker, content, parameters, notes);
        task.addEventListener('click', viewDropdown);
        taskContent.appendChild(task);
    }
    taskHolder.appendChild(taskContent);
    taskHolder.appendChild(addTask);
    sidebar.appendChild(sidebarContent);
    const dialog = (0,_taskDialog_js__WEBPACK_IMPORTED_MODULE_0__.createDialog)();
    main.append(sidebar, taskHolder, dialog);
    console.log(tasks);
    return main;
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
    {   title: "Important", 
        imageSrc: _images_icon3_png__WEBPACK_IMPORTED_MODULE_0__,
    },
    {
        title: "Personal",
        imageSrc: _images_icon4_png__WEBPACK_IMPORTED_MODULE_1__,
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
/* harmony export */   createDialog: () => (/* binding */ createDialog)
/* harmony export */ });
/* harmony import */ var _taskFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskFactory.js */ "./src/taskFactory.js");
/* harmony import */ var _taskData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskData.js */ "./src/taskData.js");
/* harmony import */ var _homePage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homePage.js */ "./src/homePage.js");



const dialog = document.createElement('dialog');
const form = document.createElement('form');
const title = document.createElement('input');
const description = document.createElement('input');
const project = document.createElement('input');
const dueDate = document.createElement('input');
const priority = document.createElement('input');
const notes = document.createElement('input');
const check = document.createElement('input');
const titleLabel = document.createElement('label');
const descriptionLabel = document.createElement('label');
const projectLabel = document.createElement('label');
const dueDateLabel = document.createElement('label');
const priorityLabel = document.createElement('label');
const notesLabel = document.createElement('label');
const checkLabel = document.createElement('label');
const submit = document.createElement('button');
const cancel = document.createElement('button');
const titleDiv = document.createElement('div');
const descriptionDiv = document.createElement('div');
const projectDiv = document.createElement('div');
const dueDateDiv = document.createElement('div');
const priorityDiv = document.createElement('div');
const notesDiv = document.createElement('div');
const checkDiv = document.createElement('div');
const buttonDiv = document.createElement('div');
title.id = 'title';
description.id = 'description';
project.id = 'project';
dueDate.id = 'dueDate';
priority.id = 'priority';
notes.id = 'notes';
check.id = 'check';
titleLabel.setAttribute('for', 'title');
descriptionLabel.setAttribute('for', 'description');
projectLabel.setAttribute('for', 'project');
dueDateLabel.setAttribute('for', 'dueDate');
priorityLabel.setAttribute('for', 'priority');
notesLabel.setAttribute('for', 'notes');
checkLabel.setAttribute('for', 'check');
titleLabel.textContent = 'title: ';
descriptionLabel.textContent = 'description: ';
projectLabel.textContent = 'project: ';
dueDateLabel.textContent = 'due date: ';
priorityLabel.textContent = 'priority: ';
notesLabel.textContent = 'notes: ';
checkLabel.textContent = 'completed: ';
title.type = 'text';
description.type = 'text';
project.type = 'text';
priority.type = 'range';
priority.min = '1';
priority.max = '10';
priority.value = '3';
dueDate.type = 'date';
notes.type = 'text';
check.type = 'checkbox';
submit.type = 'submit';
cancel.type = 'reset';
submit.textContent = 'add';
cancel.textContent = 'cancel';
cancel.addEventListener('click', cancelEvent);
title.required = true;
titleDiv.append(titleLabel, title);
descriptionDiv.append(descriptionLabel, description);
projectDiv.append(projectLabel, project);
priorityDiv.append(priorityLabel, priority);
dueDateDiv.append(dueDateLabel, dueDate);
notesDiv.append(notesLabel, notes);
checkDiv.append(checkLabel, check);
buttonDiv.append(submit, cancel);
form.append(titleDiv, descriptionDiv, projectDiv, priorityDiv, dueDateDiv, notesDiv, checkDiv, buttonDiv);
form.method = 'dialog';
form.classList.add('add-task-form');
dialog.classList.add('add-task-dialog');
form.addEventListener('submit', submitEvent);
dialog.appendChild(form);

function submitEvent(e) {
    e.preventDefault();
    if (form.checkValidity()) {
        console.log("task was added!");
        (0,_taskData_js__WEBPACK_IMPORTED_MODULE_1__.addTask)((0,_taskFactory_js__WEBPACK_IMPORTED_MODULE_0__["default"])(title.value, description.value, project.value, dueDate.value, priority.value, notes.value, check.value));
        (0,_homePage_js__WEBPACK_IMPORTED_MODULE_2__.updateTaskDisplay)();
        form.reset();
        dialog.close();
    }
}

function cancelEvent() {
    form.reset();
    dialog.close();
}

function createDialog() {
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



const main = (0,_homePage_js__WEBPACK_IMPORTED_MODULE_0__.updateTaskDisplay)();
const body = document.querySelector('body');
body.appendChild(main);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHFJQUErQztBQUMzRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFB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Ozs7Ozs7OztBQ0FnRDtBQUMxQjs7QUFFdEIsYUFBYSwrREFBaUI7QUFDOUI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hvbWVQYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zcGFjZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2tEYXRhLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrRGlhbG9nLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvdGFzay1iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKntcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cbn1cblxuYm9keXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgXG59XG5cbmhlYWRlcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDI0cHggMzJweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXIgc3RyZXRjaDtcbn1cblxuaDF7XG4gICAgcGxhY2Utc2VsZjogY2VudGVyIHN0YXJ0O1xuICAgIGZvbnQtc2l6ZTogNTRweDtcbn1cblxuaGVhZGVyIHVse1xuICAgIHBsYWNlLXNlbGY6IGNlbnRlciBlbmQ7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMjRweDtcbn1cblxuaGVhZGVyIHVsPmxpe1xuICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmhlYWRlciB1bD5saTpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbm1haW57XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxMGZyO1xufVxuXG4uc2lkZWJhcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBnYXA6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTdlYjtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgIG1pbi13aWR0aDogMjUwcHg7XG59XG5cbi5zaWRlYmFyLWhlYWRlcntcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgcGxhY2Utc2VsZjogc3RhcnQ7XG59XG5cbi5zaWRlYmFyLWNvbnRlbnR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG59XG5cbi5zZWFyY2gtYmFye1xuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIHJlZDsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFkNWRiO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDRweCAxMHB4O1xuICAgIGdhcDogMTRweDtcbn1cblxuLnNlYXJjaC1iYXI6OmFmdGVye1xuICAgIGNvbnRlbnQ6IFwiIHNlYXJjaFwiO1xufVxuXG4uc2VhcmNoLWJhcjpob3ZlcntcbiAgICBjdXJzb3I6IHRleHQ7XG59XG5cbi5zZWFyY2gtaWNvbntcbiAgICB3aWR0aDogMThweDtcbn1cblxuLnNwYWNle1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICBnYXA6IDE1cHg7XG4gICAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uc3BhY2U6aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc3BhY2UtaWNvbntcbiAgICB3aWR0aDogMjZweCA7XG59XG5cbi50YXNrLWhvbGRlclxue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGdhcDogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLnRhc2staGVhZGVyXG57XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRhc2tzLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLnRhc2t7XG4gICAgaGVpZ2h0OiA2NHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMjAwZnIgMWZyO1xuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgIGdhcDogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYjtcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4zcyBlYXNlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50YXNrLW5vdGVze1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1jb2x1bW46IDIvMztcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi50YXNrOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiAgXG4udGFzay1kcm9wZG93bi1hY3RpdmV7XG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDsgXG59XG5cbi50YXNrLW1hcmtlcntcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIHBsYWNlLXNlbGY6IGNlbnRlciBzdGFydDtcbn1cblxuLnRhc2stY29udGVudHtcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXIgc3RhcnQ7XG59XG5cbi50YXNrLXBhcmFtZXRlcnN7XG4gICAgcGxhY2Utc2VsZjogY2VudGVyIGVuZDtcbn1cblxuLnRhc2stY29udGVudCxcbi50YXNrLXBhcmFtZXRlcnNcbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6IDRweDtcbn1cblxuLnRhc2stdGl0bGV7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGhlaWdodDogMzBweDtcbn1cblxuLnRhc2stZGVzY3JpcHRpb257XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnRhc2stcGFyYW1ldGVyc3tcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5hZGQtdGFzazo6YmVmb3Jle1xuICAgIGNvbnRlbnQ6ICcrICc7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWRkLXRhc2t7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgZ2FwOiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDY0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTUpO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICBib3R0b206IDEwcHg7XG59XG5cbi5hZGQtdGFzazpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAwNSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xufVxuXG4uYWRkLXRhc2stZm9ybTo6YmVmb3Jle1xuICAgIGNvbnRlbnQ6ICdUYXNrJztcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgcGxhY2Utc2VsZjogc3RhcnQgY2VudGVyO1xufVxuXG4uYWRkLXRhc2stZm9ybXtcbiAgICBwYWRkaW5nOiAzNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDIwcHg7XG4gICAgd2lkdGg6IDQyMHB4O1xufVxuXG5mb3JtPmRpdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbn1cblxuZm9ybSBsYWJlbHtcbiAgICB3aWR0aDogMTAwcHg7XG59XG5cbmZvcm0+ZGl2Omxhc3QtY2hpbGR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgIGdhcDogMjBweDtcbn1cblxuZm9ybSBidXR0b257XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMzJweDtcbn1cblxuZm9vdGVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDdweDtcbn1cblxuLmZhYntcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLmZhYjpob3ZlcntcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuMSk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFB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QUNmLHVCQUF1QjtJQUN2QixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcbn1cXG5cXG5ib2R5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIFxcbn1cXG5cXG5oZWFkZXJ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAyNHB4IDMycHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgcGxhY2Utc2VsZjogY2VudGVyIHN0cmV0Y2g7XFxufVxcblxcbmgxe1xcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXIgc3RhcnQ7XFxuICAgIGZvbnQtc2l6ZTogNTRweDtcXG59XFxuXFxuaGVhZGVyIHVse1xcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXIgZW5kO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDI0cHg7XFxufVxcblxcbmhlYWRlciB1bD5saXtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIgdWw+bGk6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubWFpbntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwZnI7XFxufVxcblxcbi5zaWRlYmFye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBnYXA6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU3ZWI7XFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxuICAgIG1pbi13aWR0aDogMjUwcHg7XFxufVxcblxcbi5zaWRlYmFyLWhlYWRlcntcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBwbGFjZS1zZWxmOiBzdGFydDtcXG59XFxuXFxuLnNpZGViYXItY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uc2VhcmNoLWJhcntcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgcmVkOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFkNWRiO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNHB4IDEwcHg7XFxuICAgIGdhcDogMTRweDtcXG59XFxuXFxuLnNlYXJjaC1iYXI6OmFmdGVye1xcbiAgICBjb250ZW50OiBcXFwiIHNlYXJjaFxcXCI7XFxufVxcblxcbi5zZWFyY2gtYmFyOmhvdmVye1xcbiAgICBjdXJzb3I6IHRleHQ7XFxufVxcblxcbi5zZWFyY2gtaWNvbntcXG4gICAgd2lkdGg6IDE4cHg7XFxufVxcblxcbi5zcGFjZXtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi5zcGFjZTpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc3BhY2UtaWNvbntcXG4gICAgd2lkdGg6IDI2cHggO1xcbn1cXG5cXG4udGFzay1ob2xkZXJcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL3Rhc2stYmFja2dyb3VuZC5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLnRhc2staGVhZGVyXFxue1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRhc2tzLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnRhc2t7XFxuICAgIGhlaWdodDogNjRweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMjAwZnIgMWZyO1xcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWZhZmI7XFxuICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjNzIGVhc2U7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi50YXNrLW5vdGVze1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi50YXNrOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiAgXFxuLnRhc2stZHJvcGRvd24tYWN0aXZle1xcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50OyBcXG59XFxuXFxuLnRhc2stbWFya2Vye1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIHBsYWNlLXNlbGY6IGNlbnRlciBzdGFydDtcXG59XFxuXFxuLnRhc2stY29udGVudHtcXG4gICAgcGxhY2Utc2VsZjogY2VudGVyIHN0YXJ0O1xcbn1cXG5cXG4udGFzay1wYXJhbWV0ZXJze1xcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXIgZW5kO1xcbn1cXG5cXG4udGFzay1jb250ZW50LFxcbi50YXNrLXBhcmFtZXRlcnNcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDRweDtcXG59XFxuXFxuLnRhc2stdGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4udGFzay1kZXNjcmlwdGlvbntcXG4gICAgaGVpZ2h0OiAxOHB4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi50YXNrLXBhcmFtZXRlcnN7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLmFkZC10YXNrOjpiZWZvcmV7XFxuICAgIGNvbnRlbnQ6ICcrICc7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWRkLXRhc2t7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGdhcDogMTBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA2NHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU1KTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICBib3R0b206IDEwcHg7XFxufVxcblxcbi5hZGQtdGFzazpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDA1KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbn1cXG5cXG4uYWRkLXRhc2stZm9ybTo6YmVmb3Jle1xcbiAgICBjb250ZW50OiAnVGFzayc7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgcGxhY2Utc2VsZjogc3RhcnQgY2VudGVyO1xcbn1cXG5cXG4uYWRkLXRhc2stZm9ybXtcXG4gICAgcGFkZGluZzogMzZweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogNDIwcHg7XFxufVxcblxcbmZvcm0+ZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG5mb3JtIGxhYmVse1xcbiAgICB3aWR0aDogMTAwcHg7XFxufVxcblxcbmZvcm0+ZGl2Omxhc3QtY2hpbGR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbmZvcm0gYnV0dG9ue1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogMzJweDtcXG59XFxuXFxuZm9vdGVye1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA3cHg7XFxufVxcblxcbi5mYWJ7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmZhYjpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjEpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY3JlYXRlRGlhbG9nIH0gZnJvbSAnLi90YXNrRGlhbG9nLmpzJztcbmltcG9ydCB7IGdldFRhc2tzIH0gZnJvbSAnLi90YXNrRGF0YS5qcyc7XG5pbXBvcnQgeyBnZXRTcGFjZXMgfSBmcm9tICcuL3NwYWNlcy5qcyc7XG5pbXBvcnQgc2VhcmNoSWNvbiBmcm9tICcuL2ltYWdlcy9zZWFyY2gucG5nJ1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IHNpZGViYXJIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBzaWRlYmFyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgdGFza0hvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgdGFza0hlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IHRhc2tDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBhZGRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbmZ1bmN0aW9uIGNhbGxEaWFsb2coKSB7XG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nJyk7XG4gICAgZGlhbG9nLnNob3dNb2RhbCgpO1xuICAgIGNvbnN0IGRpYWxvZ1dpZHRoID0gZGlhbG9nLm9mZnNldFdpZHRoO1xuICAgIGNvbnN0IGRpYWxvZ0hlaWdodCA9IGRpYWxvZy5vZmZzZXRIZWlnaHQ7XG4gICAgY29uc3Qgdmlld3BvcnRXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGNvbnN0IHZpZXdwb3J0SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGNvbnN0IGxlZnRQb3NpdGlvbiA9IHZpZXdwb3J0V2lkdGggLyAyIC0gZGlhbG9nV2lkdGggLyAyO1xuICAgIGNvbnN0IHRvcFBvc2l0aW9uID0gdmlld3BvcnRIZWlnaHQgLyAyIC0gZGlhbG9nSGVpZ2h0IC8gMjtcbiAgICBkaWFsb2cuc3R5bGUubGVmdCA9IGAke2xlZnRQb3NpdGlvbn1weGA7XG4gICAgZGlhbG9nLnN0eWxlLnRvcCA9IGAke3RvcFBvc2l0aW9ufXB4YDtcbn1cblxuZnVuY3Rpb24gdmlld0Ryb3Bkb3duKGUpIHtcbiAgICBjb25zdCBhbGxUYXNrcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKSk7XG4gICAgYWxsVGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICBpZiAoQXJyYXkuZnJvbSh0YXNrLmNsYXNzTGlzdCkuaW5jbHVkZXMoJ3Rhc2stZHJvcGRvd24tYWN0aXZlJykpIHtcbiAgICAgICAgICAgIGlmICghKGUudGFyZ2V0ID09IHRhc2spKSB7XG4gICAgICAgICAgICAgICAgdGFzay5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrLWRyb3Bkb3duLWFjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKEFycmF5LmZyb20oZS50YXJnZXQuY2xhc3NMaXN0KS5pbmNsdWRlcygndGFzay1kcm9wZG93bi1hY3RpdmUnKSkge1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrLWRyb3Bkb3duLWFjdGl2ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stZHJvcGRvd24tYWN0aXZlJyk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVGFza0Rpc3BsYXkoKSB7XG4gICAgbWFpbi50ZXh0Q29udGVudD0nJztcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXInKTtcbiAgICBzaWRlYmFySGVhZC5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWhlYWRlcicpO1xuICAgIHNpZGViYXJIZWFkLnRleHRDb250ZW50ID0gJ0pvaG4gRG9lJztcbiAgICBzaWRlYmFyQ29udGVudC5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWNvbnRlbnQnKTtcbiAgICB0YXNrSG9sZGVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2staG9sZGVyJyk7XG4gICAgdGFza0hlYWQuY2xhc3NMaXN0LmFkZCgndGFzay1oZWFkZXInKTtcbiAgICB0YXNrSGVhZC50ZXh0Q29udGVudCA9ICdUYXNrcyc7XG4gICAgdGFza0NvbnRlbnQuY2xhc3NMaXN0LmFkZCgndGFza3MtY29udGFpbmVyJyk7XG4gICAgYWRkVGFzay5jbGFzc0xpc3QuYWRkKCdhZGQtdGFzaycpXG4gICAgYWRkVGFzay50ZXh0Q29udGVudCA9ICdBZGQgYSB0YXNrJztcbiAgICBhZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbERpYWxvZyk7XG5cbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHNpZGViYXJIZWFkKTtcbiAgICB0YXNrSG9sZGVyLmFwcGVuZENoaWxkKHRhc2tIZWFkKTtcblxuICAgIGNvbnN0IHNwYWNlcyA9IGdldFNwYWNlcygpO1xuICAgIHNpZGViYXJDb250ZW50LnRleHRDb250ZW50PScnO1xuICAgIGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGljb24xID0gbmV3IEltYWdlKCk7XG4gICAgaWNvbjEuc3JjID0gc2VhcmNoSWNvbjtcbiAgICBzZWFyY2hCYXIuY2xhc3NMaXN0LmFkZCgnc2VhcmNoLWJhcicpO1xuICAgIGljb24xLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1pY29uJyk7XG4gICAgc2VhcmNoQmFyLmFwcGVuZENoaWxkKGljb24xKTtcbiAgICBzaWRlYmFyQ29udGVudC5hcHBlbmRDaGlsZChzZWFyY2hCYXIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BhY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHNwYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBpY29uID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHNwYWNlLmNsYXNzTGlzdC5hZGQoJ3NwYWNlJyk7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3NwYWNlLXRpdGxlJyk7XG4gICAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgnc3BhY2UtaWNvbicpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHNwYWNlc1tpXS50aXRsZTtcbiAgICAgICAgaWNvbi5zcmMgPSBzcGFjZXNbaV0uaW1hZ2VTcmM7XG4gICAgICAgIHNwYWNlLmFwcGVuZChpY29uLCB0aXRsZSk7XG4gICAgICAgIHNpZGViYXJDb250ZW50LmFwcGVuZENoaWxkKHNwYWNlKTtcbiAgICB9XG5cbiAgICBjb25zdCB0YXNrcyA9IGdldFRhc2tzKCk7XG4gICAgdGFza0NvbnRlbnQudGV4dENvbnRlbnQ9Jyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IG1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHBhcmFtZXRlcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBkZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoYCR7aX1gKTtcbiAgICAgICAgbWFya2VyLmNsYXNzTGlzdC5hZGQoYHRhc2stbWFya2VyYCk7XG4gICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgndGFzay1jb250ZW50Jyk7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUnKTtcbiAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndGFzay1kZXNjcmlwdGlvbicpO1xuICAgICAgICBwYXJhbWV0ZXJzLmNsYXNzTGlzdC5hZGQoJ3Rhc2stcGFyYW1ldGVycycpO1xuICAgICAgICBkZWFkbGluZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWRlYWRsaW5lJyk7XG4gICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3Rhc2stcHJpb3JpdHknKTtcbiAgICAgICAgbm90ZXMuY2xhc3NMaXN0LmFkZCgndGFzay1ub3RlcycpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2tzW2ldLnRpdGxlO1xuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2tzW2ldLmRlc2NyaXB0aW9uO1xuICAgICAgICBkZWFkbGluZS50ZXh0Q29udGVudCA9IHRhc2tzW2ldLmRlYWRsaW5lO1xuICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2tzW2ldLnByaW9yaXR5O1xuICAgICAgICBub3Rlcy50ZXh0Q29udGVudCA9IHRhc2tzW2ldLm5vdGVzO1xuICAgICAgICBjb250ZW50LmFwcGVuZCh0aXRsZSwgZGVzY3JpcHRpb24pO1xuICAgICAgICBwYXJhbWV0ZXJzLmFwcGVuZChkZWFkbGluZSwgcHJpb3JpdHkpO1xuICAgICAgICB0YXNrLmFwcGVuZChtYXJrZXIsIGNvbnRlbnQsIHBhcmFtZXRlcnMsIG5vdGVzKTtcbiAgICAgICAgdGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHZpZXdEcm9wZG93bik7XG4gICAgICAgIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKHRhc2spO1xuICAgIH1cbiAgICB0YXNrSG9sZGVyLmFwcGVuZENoaWxkKHRhc2tDb250ZW50KTtcbiAgICB0YXNrSG9sZGVyLmFwcGVuZENoaWxkKGFkZFRhc2spO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoc2lkZWJhckNvbnRlbnQpO1xuICAgIGNvbnN0IGRpYWxvZyA9IGNyZWF0ZURpYWxvZygpO1xuICAgIG1haW4uYXBwZW5kKHNpZGViYXIsIHRhc2tIb2xkZXIsIGRpYWxvZyk7XG4gICAgY29uc29sZS5sb2codGFza3MpO1xuICAgIHJldHVybiBtYWluO1xufVxuIiwiaW1wb3J0IGljb24zIGZyb20gJy4vaW1hZ2VzL2ljb24zLnBuZyc7XG5pbXBvcnQgaWNvbjQgZnJvbSAnLi9pbWFnZXMvaWNvbjQucG5nJztcbmltcG9ydCBpY29uMSBmcm9tICcuL2ltYWdlcy9pY29uMS5wbmcnO1xuaW1wb3J0IGljb24yIGZyb20gJy4vaW1hZ2VzL2ljb24yLnBuZyc7XG5cbmxldCBzcGFjZXMgPSBbXG4gICAgeyAgIHRpdGxlOiBcIkltcG9ydGFudFwiLCBcbiAgICAgICAgaW1hZ2VTcmM6IGljb24zLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJQZXJzb25hbFwiLFxuICAgICAgICBpbWFnZVNyYzogaWNvbjQsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIkNvbXBsZXRlZFwiLFxuICAgICAgICBpbWFnZVNyYzogaWNvbjEsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIkFsbFwiLFxuICAgICAgICBpbWFnZVNyYzogaWNvbjIsXG4gICAgfSxcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRTcGFjZShzcGFjZSl7XG4gICAgc3BhY2VzLnB1c2goc3BhY2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3BhY2VzKCl7XG4gICAgcmV0dXJuIHNwYWNlcztcbn0iLCJsZXQgdGFza3MgPSBbXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRhc2sodGFzaykge1xuICB0YXNrcy5wdXNoKHRhc2spO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFza3MoKSB7XG4gIHJldHVybiB0YXNrcztcbn0iLCJpbXBvcnQgdGFza01ha2VyIGZyb20gXCIuL3Rhc2tGYWN0b3J5LmpzXCI7XG5pbXBvcnQgeyBhZGRUYXNrIH0gZnJvbSBcIi4vdGFza0RhdGEuanNcIjtcbmltcG9ydCB7IHVwZGF0ZVRhc2tEaXNwbGF5IH0gZnJvbSBcIi4vaG9tZVBhZ2UuanNcIjtcbmNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5jb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5jb25zdCBub3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5jb25zdCBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5jb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbmNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuY29uc3QgcHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbmNvbnN0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5jb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbmNvbnN0IG5vdGVzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuY29uc3QgY2hlY2tMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5jb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3Qgbm90ZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGNoZWNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBidXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnRpdGxlLmlkID0gJ3RpdGxlJztcbmRlc2NyaXB0aW9uLmlkID0gJ2Rlc2NyaXB0aW9uJztcbnByb2plY3QuaWQgPSAncHJvamVjdCc7XG5kdWVEYXRlLmlkID0gJ2R1ZURhdGUnO1xucHJpb3JpdHkuaWQgPSAncHJpb3JpdHknO1xubm90ZXMuaWQgPSAnbm90ZXMnO1xuY2hlY2suaWQgPSAnY2hlY2snO1xudGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0aXRsZScpO1xuZGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkZXNjcmlwdGlvbicpO1xucHJvamVjdExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Byb2plY3QnKTtcbmR1ZURhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkdWVEYXRlJyk7XG5wcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yaXR5Jyk7XG5ub3Rlc0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25vdGVzJyk7XG5jaGVja0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2NoZWNrJyk7XG50aXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ3RpdGxlOiAnO1xuZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9ICdkZXNjcmlwdGlvbjogJztcbnByb2plY3RMYWJlbC50ZXh0Q29udGVudCA9ICdwcm9qZWN0OiAnO1xuZHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ2R1ZSBkYXRlOiAnO1xucHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdwcmlvcml0eTogJztcbm5vdGVzTGFiZWwudGV4dENvbnRlbnQgPSAnbm90ZXM6ICc7XG5jaGVja0xhYmVsLnRleHRDb250ZW50ID0gJ2NvbXBsZXRlZDogJztcbnRpdGxlLnR5cGUgPSAndGV4dCc7XG5kZXNjcmlwdGlvbi50eXBlID0gJ3RleHQnO1xucHJvamVjdC50eXBlID0gJ3RleHQnO1xucHJpb3JpdHkudHlwZSA9ICdyYW5nZSc7XG5wcmlvcml0eS5taW4gPSAnMSc7XG5wcmlvcml0eS5tYXggPSAnMTAnO1xucHJpb3JpdHkudmFsdWUgPSAnMyc7XG5kdWVEYXRlLnR5cGUgPSAnZGF0ZSc7XG5ub3Rlcy50eXBlID0gJ3RleHQnO1xuY2hlY2sudHlwZSA9ICdjaGVja2JveCc7XG5zdWJtaXQudHlwZSA9ICdzdWJtaXQnO1xuY2FuY2VsLnR5cGUgPSAncmVzZXQnO1xuc3VibWl0LnRleHRDb250ZW50ID0gJ2FkZCc7XG5jYW5jZWwudGV4dENvbnRlbnQgPSAnY2FuY2VsJztcbmNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbmNlbEV2ZW50KTtcbnRpdGxlLnJlcXVpcmVkID0gdHJ1ZTtcbnRpdGxlRGl2LmFwcGVuZCh0aXRsZUxhYmVsLCB0aXRsZSk7XG5kZXNjcmlwdGlvbkRpdi5hcHBlbmQoZGVzY3JpcHRpb25MYWJlbCwgZGVzY3JpcHRpb24pO1xucHJvamVjdERpdi5hcHBlbmQocHJvamVjdExhYmVsLCBwcm9qZWN0KTtcbnByaW9yaXR5RGl2LmFwcGVuZChwcmlvcml0eUxhYmVsLCBwcmlvcml0eSk7XG5kdWVEYXRlRGl2LmFwcGVuZChkdWVEYXRlTGFiZWwsIGR1ZURhdGUpO1xubm90ZXNEaXYuYXBwZW5kKG5vdGVzTGFiZWwsIG5vdGVzKTtcbmNoZWNrRGl2LmFwcGVuZChjaGVja0xhYmVsLCBjaGVjayk7XG5idXR0b25EaXYuYXBwZW5kKHN1Ym1pdCwgY2FuY2VsKTtcbmZvcm0uYXBwZW5kKHRpdGxlRGl2LCBkZXNjcmlwdGlvbkRpdiwgcHJvamVjdERpdiwgcHJpb3JpdHlEaXYsIGR1ZURhdGVEaXYsIG5vdGVzRGl2LCBjaGVja0RpdiwgYnV0dG9uRGl2KTtcbmZvcm0ubWV0aG9kID0gJ2RpYWxvZyc7XG5mb3JtLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrLWZvcm0nKTtcbmRpYWxvZy5jbGFzc0xpc3QuYWRkKCdhZGQtdGFzay1kaWFsb2cnKTtcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0Jywgc3VibWl0RXZlbnQpO1xuZGlhbG9nLmFwcGVuZENoaWxkKGZvcm0pO1xuXG5mdW5jdGlvbiBzdWJtaXRFdmVudChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChmb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInRhc2sgd2FzIGFkZGVkIVwiKTtcbiAgICAgICAgYWRkVGFzayh0YXNrTWFrZXIodGl0bGUudmFsdWUsIGRlc2NyaXB0aW9uLnZhbHVlLCBwcm9qZWN0LnZhbHVlLCBkdWVEYXRlLnZhbHVlLCBwcmlvcml0eS52YWx1ZSwgbm90ZXMudmFsdWUsIGNoZWNrLnZhbHVlKSk7XG4gICAgICAgIHVwZGF0ZVRhc2tEaXNwbGF5KCk7XG4gICAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICAgICAgZGlhbG9nLmNsb3NlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjYW5jZWxFdmVudCgpIHtcbiAgICBmb3JtLnJlc2V0KCk7XG4gICAgZGlhbG9nLmNsb3NlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEaWFsb2coKSB7XG4gICAgcmV0dXJuIGRpYWxvZztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRhc2tNYWtlcih0aXRsZSwgZGVzY3JpcHRpb24sIHByb2plY3QsIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcywgY2hlY2spe1xuICAgIHJldHVybiB7dGl0bGUsIGRlc2NyaXB0aW9uLCBwcm9qZWN0LCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMsIGNoZWNrfTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7dXBkYXRlVGFza0Rpc3BsYXl9IGZyb20gXCIuL2hvbWVQYWdlLmpzXCI7XG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmNvbnN0IG1haW4gPSB1cGRhdGVUYXNrRGlzcGxheSgpO1xuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=