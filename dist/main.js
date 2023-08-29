/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    gap: 2vh;
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

.space{
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: start;
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    /* border: 1px solid red; */\n}\n\nbody{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    \n}\n\nheader{\n    width: 100%;\n    box-sizing: border-box;\n    padding: 24px 32px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    place-self: center stretch;\n}\n\nh1{\n    place-self: center start;\n    font-size: 54px;\n}\n\nheader ul{\n    place-self: center end;\n    list-style: none;\n    display: flex;\n    gap: 24px;\n}\n\nheader ul>li{\n    width: max-content;\n    display: flex;\n    align-items: center;\n}\n\nheader ul>li:hover{\n    cursor: pointer;\n}\n\nmain{\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 10fr;\n}\n\n.sidebar{\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    gap: 2vh;\n    background-color: #e5e7eb;\n    max-width: 300px;\n    min-width: 250px;\n}\n\n.sidebar-header{\n    font-size: 36px;\n    place-self: start;\n}\n\n.sidebar-content{\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n}\n\n.space{\n    width: 100%;\n    height: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: start;\n}\n\n.task-holder\n{\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    gap: 20px;\n    background-image: url(./images/task-background.jpg);\n    background-size: cover;\n    min-height: 100vh;\n}\n\n.task-header\n{\n    font-size: 36px;\n    font-weight: 900;\n    align-items: center;\n    justify-content: start;\n    color: white;\n}\n\n.tasks-container{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 10px;\n    height: 100%;\n}\n\n.task{\n    height: 64px;\n    display: grid;\n    grid-template-columns: 1fr 200fr 1fr;\n    padding: 5px 15px;\n    gap: 15px;\n    border-radius: 8px;\n    background-color: #f9fafb;\n    transition: height 0.3s ease;\n    overflow: hidden;\n}\n\n.task-notes{\n    display: grid;\n    grid-column: 2/3;\n}\n\n.task:hover{\n    cursor: pointer;\n}\n  \n.task-dropdown-active{\n    height: max-content; \n}\n\n.task-marker{\n    border-radius: 50%;\n    height: 20px;\n    width: 20px;\n    place-self: center start;\n}\n\n.task-content{\n    place-self: center start;\n}\n\n.task-parameters{\n    place-self: center end;\n}\n\n.task-content,\n.task-parameters\n{\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    justify-content: space-between;\n    gap: 4px;\n}\n\n.task-title{\n    font-size: 24px;\n    height: 30px;\n}\n\n.task-description{\n    height: 18px;\n    font-size: 14px;\n}\n\n.task-parameters{\n    font-size: 18px;\n}\n\n.add-task::before{\n    content: '+ ';\n    font-size: 30px;\n    color: white;\n    align-items: center;\n}\n\n.add-task{\n    display: flex;\n    align-items: center;\n    justify-content: start;\n    gap: 10px;\n    padding-left: 20px;\n    width: 100%;\n    height: 64px;\n    border-radius: 8px;\n    color: white;\n    background-color: rgba(0, 0, 0, 0.55);\n    font-size: 20px;\n    font-weight: 900;\n    transition: 0.2s;\n    position: sticky;\n    bottom: 10px;\n}\n\n.add-task:hover{\n    cursor: pointer;\n    transform: scale(1.005);\n    background-color: rgba(0, 0, 0, 0.7);\n}\n\n.add-task-form::before{\n    content: 'Task';\n    font-size: 36px;\n    place-self: start center;\n}\n\n.add-task-form{\n    padding: 36px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    width: 420px;\n}\n\nform>div{\n    display: flex;\n    align-items: center;\n    justify-content: start;\n}\n\nform label{\n    width: 100px;\n}\n\nform>div:last-child{\n    display: flex;\n    align-items: center;\n    justify-content: end;\n    gap: 20px;\n}\n\nform button{\n    width: 100px;\n    height: 32px;\n}\n\nfooter{\n    width: 100%;\n    padding: 20px;\n    display: flex;\n    font-size: 24px;\n    align-items: center;\n    justify-content: center;\n    gap: 7px;\n}\n\n.fab{\n    color: black;\n    transition: 0.3s ease-in-out;\n}\n\n.fab:hover{\n    transform: rotate(360deg) scale(1.1);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/commonFooter.js":
/*!*****************************!*\
  !*** ./src/commonFooter.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createFooter)
/* harmony export */ });
/* harmony import */ var _kit_fontawesome_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kit.fontawesome.js */ "./src/kit.fontawesome.js");
/* harmony import */ var _kit_fontawesome_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_kit_fontawesome_js__WEBPACK_IMPORTED_MODULE_0__);


function createFooter(){
    const footer = document.createElement('footer');
    footer.textContent = `Copyright © ${new Date().getFullYear()} HarshalShirote`;
    const a = document.createElement('a');
    a.href = 'https://github.com/Harshalshirote2002';
    a.target = '_blank';
    const i = document.createElement('i');
    i.classList.add('fab');
    i.classList.add('fa-github');
    i.ariaHidden = true;
    a.appendChild(i);
    footer.appendChild(a);
    return footer;
}

/***/ }),

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHome)
/* harmony export */ });
/* harmony import */ var _taskDialog_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskDialog.js */ "./src/taskDialog.js");


function taskMaker(title, description, dueDate, priority, notes, check){
    return {title, description, dueDate, priority, notes, check};
}

function callDialog(){
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

function viewDropdown(e){
    const allTasks = Array.from(document.querySelectorAll('.task'));
    allTasks.forEach((task) =>  {
        if(Array.from(task.classList).includes('task-dropdown-active')){
            if(!(e.target==task)){
                task.classList.remove('task-dropdown-active');
            }
        }
    });
    if(Array.from(e.target.classList).includes('task-dropdown-active')){
        e.target.classList.remove('task-dropdown-active');
    }else{
        e.target.classList.add('task-dropdown-active');
    }
}

function createHome(){
    const main = document.createElement('main');
    const sidebar = document.createElement('div');
    const sidebarHead = document.createElement('div');
    const sidebarContent = document.createElement('div');
    const taskHolder = document.createElement('div');
    const taskHead = document.createElement('div');
    const taskContent = document.createElement('div');
    const addTask = document.createElement('button');
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
    
    for (let i = 0; i < 4; i++) {
        const space = document.createElement('div');
        const title = document.createElement('p');
        space.classList.add('space');
        title.classList.add('space-title');
        title.textContent = 'title';
        space.appendChild(title);
        sidebarContent.appendChild(space);
    }

    for (let i = 0; i < 4; i++) {
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
        title.textContent = 'title';
        description.textContent = 'description';
        deadline.textContent = 'd...';
        priority.textContent = 'p...';
        notes.textContent = 'lorem ipsum dolor sasdsada ff erf df f fd d h h hygy fg hghgh ggggg ggggg ggggg ggggg gggg h h hjhj lorem ipsum dolor sasdsada ff erf df f fd d h h hygy fg hghgh ggggg ggggg ggggg ggggg gggg h h hjhj lorem ipsum dolor sasdsada ff erf df f fd d h h hygy fg hghgh ggggg ggggg ggggg ggggg gggg h h hjhj';
        content.append(title, description);
        parameters.append(deadline, priority);
        task.append(marker, content, parameters, notes);
        task.addEventListener('click', viewDropdown);
        taskContent.appendChild(task);
    }
    taskHolder.appendChild(taskContent);
    taskHolder.appendChild(addTask);
    sidebar.appendChild(sidebarContent);
    const dialog = (0,_taskDialog_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    main.append(sidebar, taskHolder, dialog);
    return main;
}

/***/ }),

/***/ "./src/kit.fontawesome.js":
/*!********************************!*\
  !*** ./src/kit.fontawesome.js ***!
  \********************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;window.FontAwesomeKitConfig = {"asyncLoading":{"enabled":false},"autoA11y":{"enabled":true},"baseUrl":"https://ka-f.fontawesome.com","baseUrlKit":"https://kit.fontawesome.com","detectConflictsUntil":null,"iconUploads":{},"id":80762673,"license":"free","method":"css","minify":{"enabled":true},"token":"4c536a6bd5","v4FontFaceShim":{"enabled":true},"v4shim":{"enabled":true},"v5FontFaceShim":{"enabled":false},"version":"5.15.4"};
!function(t){ true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0}((function(){"use strict";function t(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function e(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e,n){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,c,a=[],u=!0,f=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);u=!0);}catch(t){f=!0,o=t}finally{try{if(!u&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(f)throw o}}return a}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t,e){var n=e&&e.addOn||"",r=e&&e.baseFilename||t.license+n,o=e&&e.minify?".min":"",i=e&&e.fileSuffix||t.method,c=e&&e.subdir||t.method;return t.baseUrl+"/releases/"+("latest"===t.version?"latest":"v".concat(t.version))+"/"+c+"/"+r+o+"."+i}function a(t,e){var n=e||["fa"],r="."+Array.prototype.join.call(n,",."),o=t.querySelectorAll(r);Array.prototype.forEach.call(o,(function(e){var n=e.getAttribute("title");e.setAttribute("aria-hidden","true");var r=!e.nextElementSibling||!e.nextElementSibling.classList.contains("sr-only");if(n&&r){var o=t.createElement("span");o.innerHTML=n,o.classList.add("sr-only"),e.parentNode.insertBefore(o,e.nextSibling)}}))}var u,f=function(){},s="undefined"!=typeof __webpack_require__.g&&void 0!==__webpack_require__.g.process&&"function"==typeof __webpack_require__.g.process.emit,l="undefined"==typeof setImmediate?setTimeout:setImmediate,d=[];function h(){for(var t=0;t<d.length;t++)d[t][0](d[t][1]);d=[],u=!1}function m(t,e){d.push([t,e]),u||(u=!0,l(h,0))}function p(t){var e=t.owner,n=e._state,r=e._data,o=t[n],i=t.then;if("function"==typeof o){n="fulfilled";try{r=o(r)}catch(t){g(i,t)}}v(i,r)||("fulfilled"===n&&b(i,r),"rejected"===n&&g(i,r))}function v(t,e){var r;try{if(t===e)throw new TypeError("A promises callback cannot return that same promise.");if(e&&("function"==typeof e||"object"===n(e))){var o=e.then;if("function"==typeof o)return o.call(e,(function(n){r||(r=!0,e===n?y(t,n):b(t,n))}),(function(e){r||(r=!0,g(t,e))})),!0}}catch(e){return r||g(t,e),!0}return!1}function b(t,e){t!==e&&v(t,e)||y(t,e)}function y(t,e){"pending"===t._state&&(t._state="settled",t._data=e,m(A,t))}function g(t,e){"pending"===t._state&&(t._state="settled",t._data=e,m(S,t))}function w(t){t._then=t._then.forEach(p)}function A(t){t._state="fulfilled",w(t)}function S(t){t._state="rejected",w(t),!t._handled&&s&&__webpack_require__.g.process.emit("unhandledRejection",t._data,t)}function O(t){__webpack_require__.g.process.emit("rejectionHandled",t)}function j(t){if("function"!=typeof t)throw new TypeError("Promise resolver "+t+" is not a function");if(this instanceof j==!1)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],function(t,e){function n(t){g(e,t)}try{t((function(t){b(e,t)}),n)}catch(t){n(t)}}(t,this)}j.prototype={constructor:j,_state:"pending",_then:null,_data:void 0,_handled:!1,then:function(t,e){var n={owner:this,then:new this.constructor(f),fulfilled:t,rejected:e};return!e&&!t||this._handled||(this._handled=!0,"rejected"===this._state&&s&&m(O,this)),"fulfilled"===this._state||"rejected"===this._state?m(p,n):this._then.push(n),n.then},catch:function(t){return this.then(null,t)}},j.all=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.all().");return new j((function(e,n){var r=[],o=0;function i(t){return o++,function(n){r[t]=n,--o||e(r)}}for(var c,a=0;a<t.length;a++)(c=t[a])&&"function"==typeof c.then?c.then(i(a),n):r[a]=c;o||e(r)}))},j.race=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.race().");return new j((function(e,n){for(var r,o=0;o<t.length;o++)(r=t[o])&&"function"==typeof r.then?r.then(e,n):e(r)}))},j.resolve=function(t){return t&&"object"===n(t)&&t.constructor===j?t:new j((function(e){e(t)}))},j.reject=function(t){return new j((function(e,n){n(t)}))};var E="function"==typeof Promise?Promise:j;function P(t,e){var n=e.fetch,r=e.XMLHttpRequest,o=e.token,i=t;return o&&!function(t){return t.indexOf("kit-upload.css")>-1}(t)&&("URLSearchParams"in window?(i=new URL(t)).searchParams.set("token",o):i=i+"?token="+encodeURIComponent(o)),i=i.toString(),new E((function(t,e){if("function"==typeof n)n(i,{mode:"cors",cache:"default"}).then((function(t){if(t.ok)return t.text();throw new Error("")})).then((function(e){t(e)})).catch(e);else if("function"==typeof r){var o=new r;o.addEventListener("loadend",(function(){this.responseText?t(this.responseText):e(new Error(""))}));["abort","error","timeout"].map((function(t){o.addEventListener(t,(function(){e(new Error(""))}))})),o.open("GET",i),o.send()}else{e(new Error(""))}}))}function _(t,e,n){var r=t;return[[/(url\("?)\.\.\/\.\.\/\.\./g,function(t,n){return"".concat(n).concat(e)}],[/(url\("?)\.\.\/webfonts/g,function(t,r){return"".concat(r).concat(e,"/releases/v").concat(n,"/webfonts")}],[/(url\("?)https:\/\/kit-free([^.])*\.fontawesome\.com/g,function(t,n){return"".concat(n).concat(e)}]].forEach((function(t){var e=o(t,2),n=e[0],i=e[1];r=r.replace(n,i)})),r}function F(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},o=n.document||o,i=a.bind(a,o,["fa","fab","fas","far","fal","fad","fak"]);t.autoA11y.enabled&&r(i);var u=t.subsetPath&&t.baseUrl+"/"+t.subsetPath,f=[{id:"fa-main",addOn:void 0,url:u}];if(t.v4shim&&t.v4shim.enabled&&f.push({id:"fa-v4-shims",addOn:"-v4-shims"}),t.v5FontFaceShim&&t.v5FontFaceShim.enabled&&f.push({id:"fa-v5-font-face",addOn:"-v5-font-face"}),t.v4FontFaceShim&&t.v4FontFaceShim.enabled&&f.push({id:"fa-v4-font-face",addOn:"-v4-font-face"}),!u&&t.customIconsCssPath){var s=t.customIconsCssPath.indexOf("kit-upload.css")>-1?t.baseUrlKit:t.baseUrl,l=s+"/"+t.customIconsCssPath;f.push({id:"fa-kit-upload",url:l})}var d=f.map((function(r){return new E((function(o,i){var a=r.url||c(t,{addOn:r.addOn,minify:t.minify.enabled}),u={id:r.id},f=t.subset?u:e(e(e({},n),u),{},{baseUrl:t.baseUrl,version:t.version,id:r.id,contentFilter:function(t,e){return _(t,e.baseUrl,e.version)}});P(a,n).then((function(t){o(C(t,f))})).catch(i)}))}));return E.all(d)}function C(t,e){var n=e.contentFilter||function(t,e){return t},r=document.createElement("style"),o=document.createTextNode(n(t,e));return r.appendChild(o),r.media="all",e.id&&r.setAttribute("id",e.id),e&&e.detectingConflicts&&e.detectionIgnoreAttr&&r.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)),r}function I(t,n){n.autoA11y=t.autoA11y.enabled,"pro"===t.license&&(n.autoFetchSvg=!0,n.fetchSvgFrom=t.baseUrl+"/releases/"+("latest"===t.version?"latest":"v".concat(t.version))+"/svgs",n.fetchUploadedSvgFrom=t.uploadsUrl);var r=[];return t.v4shim.enabled&&r.push(new E((function(r,o){P(c(t,{addOn:"-v4-shims",minify:t.minify.enabled}),n).then((function(t){r(U(t,e(e({},n),{},{id:"fa-v4-shims"})))})).catch(o)}))),r.push(new E((function(r,o){P(t.subsetPath&&t.baseUrl+"/"+t.subsetPath||c(t,{minify:t.minify.enabled}),n).then((function(t){var o=U(t,e(e({},n),{},{id:"fa-main"}));r(function(t,e){var n=e&&void 0!==e.autoFetchSvg?e.autoFetchSvg:void 0,r=e&&void 0!==e.autoA11y?e.autoA11y:void 0;void 0!==r&&t.setAttribute("data-auto-a11y",r?"true":"false");n&&(t.setAttributeNode(document.createAttribute("data-auto-fetch-svg")),t.setAttribute("data-fetch-svg-from",e.fetchSvgFrom),t.setAttribute("data-fetch-uploaded-svg-from",e.fetchUploadedSvgFrom));return t}(o,n))})).catch(o)}))),E.all(r)}function U(t,e){var n=document.createElement("SCRIPT"),r=document.createTextNode(t);return n.appendChild(r),n.referrerPolicy="strict-origin",e.id&&n.setAttribute("id",e.id),e&&e.detectingConflicts&&e.detectionIgnoreAttr&&n.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)),n}function T(t){var e,n=[],r=document,o=r.documentElement.doScroll,i=(o?/^loaded|^c/:/^loaded|^i|^c/).test(r.readyState);i||r.addEventListener("DOMContentLoaded",e=function(){for(r.removeEventListener("DOMContentLoaded",e),i=1;e=n.shift();)e()}),i?setTimeout(t,0):n.push(t)}function L(t){"undefined"!=typeof MutationObserver&&new MutationObserver(t).observe(document,{childList:!0,subtree:!0})}try{if(window.FontAwesomeKitConfig){var k=window.FontAwesomeKitConfig,x={detectingConflicts:k.detectConflictsUntil&&new Date<=new Date(k.detectConflictsUntil),detectionIgnoreAttr:"data-fa-detection-ignore",fetch:window.fetch,token:k.token,XMLHttpRequest:window.XMLHttpRequest,document:document},M=document.currentScript,N=M?M.parentElement:document.head;(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"js"===t.method?I(t,e):"css"===t.method?F(t,e,(function(t){T(t),L(t)})):void 0})(k,x).then((function(t){t.map((function(t){try{N.insertBefore(t,M?M.nextSibling:null)}catch(e){N.appendChild(t)}})),x.detectingConflicts&&M&&T((function(){M.setAttributeNode(document.createAttribute(x.detectionIgnoreAttr));var t=function(t,e){var n=document.createElement("script");return e&&e.detectionIgnoreAttr&&n.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)),n.src=c(t,{baseFilename:"conflict-detection",fileSuffix:"js",subdir:"js",minify:t.minify.enabled}),n}(k,x);document.body.appendChild(t)}))})).catch((function(t){console.error("".concat("Font Awesome Kit:"," ").concat(t))}))}}catch(t){console.error("".concat("Font Awesome Kit:"," ").concat(t))}}));

/***/ }),

/***/ "./src/taskDialog.js":
/*!***************************!*\
  !*** ./src/taskDialog.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createDialog)
/* harmony export */ });


function createDialog(){
    const dialog = document.createElement('dialog');
    const form = document.createElement('form');
    const title = document.createElement('input');
    const description = document.createElement('input');
    const dueDate = document.createElement('input');
    const priority = document.createElement('input');
    const notes = document.createElement('input');
    const check = document.createElement('input');
    const titleLabel = document.createElement('label');
    const descriptionLabel = document.createElement('label');
    const dueDateLabel = document.createElement('label');
    const priorityLabel = document.createElement('label');
    const notesLabel = document.createElement('label');
    const checkLabel = document.createElement('label');
    const submit = document.createElement('button');
    const cancel = document.createElement('button');
    const titleDiv = document.createElement('div');
    const descriptionDiv = document.createElement('div');
    const dueDateDiv = document.createElement('div');
    const priorityDiv = document.createElement('div');
    const notesDiv = document.createElement('div');
    const checkDiv = document.createElement('div');
    const buttonDiv = document.createElement('div');
    title.id = 'title';
    description.id = 'description';
    dueDate.id = 'dueDate';
    priority.id = 'priority';
    notes.id = 'notes';
    check.id = 'check';
    titleLabel.setAttribute('for', 'title');
    descriptionLabel.setAttribute('for', 'description');
    dueDateLabel.setAttribute('for', 'dueDate');
    priorityLabel.setAttribute('for', 'priority');
    notesLabel.setAttribute('for', 'notes');
    checkLabel.setAttribute('for', 'check');
    titleLabel.textContent = 'title: ';
    descriptionLabel.textContent = 'description: ';
    dueDateLabel.textContent = 'due date: ';
    priorityLabel.textContent = 'priority: ';
    notesLabel.textContent = 'notes: ';
    checkLabel.textContent = 'completed: ';
    title.type = 'text';
    description.type = 'text';
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
    titleDiv.append(titleLabel, title);
    descriptionDiv.append(descriptionLabel, description);
    priorityDiv.append(priorityLabel, priority);
    dueDateDiv.append(dueDateLabel, dueDate);
    notesDiv.append(notesLabel, notes);
    checkDiv.append(checkLabel, check);
    buttonDiv.append(submit, cancel);
    form.append(titleDiv, descriptionDiv, priorityDiv, dueDateDiv, notesDiv, checkDiv, buttonDiv);
    form.method = 'dialog';
    form.classList.add('add-task-form');
    dialog.classList.add('add-task-dialog');
    dialog.appendChild(form);
    return dialog;
}

/***/ }),

/***/ "./src/images/task-background.jpg":
/*!****************************************!*\
  !*** ./src/images/task-background.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homePage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage.js */ "./src/homePage.js");
/* harmony import */ var _commonFooter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commonFooter.js */ "./src/commonFooter.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");




const main = (0,_homePage_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
const footer = (0,_commonFooter_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
const body = document.querySelector('body');
body.appendChild(main);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHFJQUErQztBQUMzRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8saUZBQWlGLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlB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QTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBdUM7QUFDTTtBQUN2Qjs7QUFFdEIsYUFBYSx3REFBVTtBQUN2QixlQUFlLDREQUFZO0FBQzNCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21tb25Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hvbWVQYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9raXQuZm9udGF3ZXNvbWUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2tEaWFsb2cuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL3Rhc2stYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCp7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXG59XG5cbmJvZHl7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIFxufVxuXG5oZWFkZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAyNHB4IDMycHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgcGxhY2Utc2VsZjogY2VudGVyIHN0cmV0Y2g7XG59XG5cbmgxe1xuICAgIHBsYWNlLXNlbGY6IGNlbnRlciBzdGFydDtcbiAgICBmb250LXNpemU6IDU0cHg7XG59XG5cbmhlYWRlciB1bHtcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXIgZW5kO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDI0cHg7XG59XG5cbmhlYWRlciB1bD5saXtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5oZWFkZXIgdWw+bGk6aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5tYWlue1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTBmcjtcbn1cblxuLnNpZGViYXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZ2FwOiAydmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTdlYjtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgIG1pbi13aWR0aDogMjUwcHg7XG59XG5cbi5zaWRlYmFyLWhlYWRlcntcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgcGxhY2Utc2VsZjogc3RhcnQ7XG59XG5cbi5zaWRlYmFyLWNvbnRlbnR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG59XG5cbi5zcGFjZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG59XG5cbi50YXNrLWhvbGRlclxue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGdhcDogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLnRhc2staGVhZGVyXG57XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRhc2tzLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLnRhc2t7XG4gICAgaGVpZ2h0OiA2NHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMjAwZnIgMWZyO1xuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgIGdhcDogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYjtcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4zcyBlYXNlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50YXNrLW5vdGVze1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1jb2x1bW46IDIvMztcbn1cblxuLnRhc2s6aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuICBcbi50YXNrLWRyb3Bkb3duLWFjdGl2ZXtcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50OyBcbn1cblxuLnRhc2stbWFya2Vye1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgcGxhY2Utc2VsZjogY2VudGVyIHN0YXJ0O1xufVxuXG4udGFzay1jb250ZW50e1xuICAgIHBsYWNlLXNlbGY6IGNlbnRlciBzdGFydDtcbn1cblxuLnRhc2stcGFyYW1ldGVyc3tcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXIgZW5kO1xufVxuXG4udGFzay1jb250ZW50LFxuLnRhc2stcGFyYW1ldGVyc1xue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGdhcDogNHB4O1xufVxuXG4udGFzay10aXRsZXtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuXG4udGFzay1kZXNjcmlwdGlvbntcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4udGFzay1wYXJhbWV0ZXJze1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmFkZC10YXNrOjpiZWZvcmV7XG4gICAgY29udGVudDogJysgJztcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hZGQtdGFza3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICBnYXA6IDEwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjRweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NSk7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIGJvdHRvbTogMTBweDtcbn1cblxuLmFkZC10YXNrOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDA1KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG59XG5cbi5hZGQtdGFzay1mb3JtOjpiZWZvcmV7XG4gICAgY29udGVudDogJ1Rhc2snO1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBwbGFjZS1zZWxmOiBzdGFydCBjZW50ZXI7XG59XG5cbi5hZGQtdGFzay1mb3Jte1xuICAgIHBhZGRpbmc6IDM2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMjBweDtcbiAgICB3aWR0aDogNDIwcHg7XG59XG5cbmZvcm0+ZGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xufVxuXG5mb3JtIGxhYmVse1xuICAgIHdpZHRoOiAxMDBweDtcbn1cblxuZm9ybT5kaXY6bGFzdC1jaGlsZHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gICAgZ2FwOiAyMHB4O1xufVxuXG5mb3JtIGJ1dHRvbntcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xufVxuXG5mb290ZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogN3B4O1xufVxuXG4uZmFie1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4uZmFiOmhvdmVye1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4xKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsOEJBQThCOztBQUVsQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0JB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O0lBQ2IsYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFlBQVk7SUFDWiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxufVxcblxcbmJvZHl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgXFxufVxcblxcbmhlYWRlcntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDI0cHggMzJweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXIgc3RyZXRjaDtcXG59XFxuXFxuaDF7XFxuICAgIHBsYWNlLXNlbGY6IGNlbnRlciBzdGFydDtcXG4gICAgZm9udC1zaXplOiA1NHB4O1xcbn1cXG5cXG5oZWFkZXIgdWx7XFxuICAgIHBsYWNlLXNlbGY6IGNlbnRlciBlbmQ7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjRweDtcXG59XFxuXFxuaGVhZGVyIHVsPmxpe1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciB1bD5saTpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5tYWlue1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTBmcjtcXG59XFxuXFxuLnNpZGViYXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGdhcDogMnZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlN2ViO1xcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xcbn1cXG5cXG4uc2lkZWJhci1oZWFkZXJ7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgcGxhY2Utc2VsZjogc3RhcnQ7XFxufVxcblxcbi5zaWRlYmFyLWNvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLnNwYWNle1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG4udGFzay1ob2xkZXJcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL3Rhc2stYmFja2dyb3VuZC5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLnRhc2staGVhZGVyXFxue1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRhc2tzLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnRhc2t7XFxuICAgIGhlaWdodDogNjRweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMjAwZnIgMWZyO1xcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWZhZmI7XFxuICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjNzIGVhc2U7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi50YXNrLW5vdGVze1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbn1cXG5cXG4udGFzazpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4gIFxcbi50YXNrLWRyb3Bkb3duLWFjdGl2ZXtcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDsgXFxufVxcblxcbi50YXNrLW1hcmtlcntcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXIgc3RhcnQ7XFxufVxcblxcbi50YXNrLWNvbnRlbnR7XFxuICAgIHBsYWNlLXNlbGY6IGNlbnRlciBzdGFydDtcXG59XFxuXFxuLnRhc2stcGFyYW1ldGVyc3tcXG4gICAgcGxhY2Utc2VsZjogY2VudGVyIGVuZDtcXG59XFxuXFxuLnRhc2stY29udGVudCxcXG4udGFzay1wYXJhbWV0ZXJzXFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiA0cHg7XFxufVxcblxcbi50YXNrLXRpdGxle1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxuXFxuLnRhc2stZGVzY3JpcHRpb257XFxuICAgIGhlaWdodDogMThweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4udGFzay1wYXJhbWV0ZXJze1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5hZGQtdGFzazo6YmVmb3Jle1xcbiAgICBjb250ZW50OiAnKyAnO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFkZC10YXNre1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNjRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NSk7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uYWRkLXRhc2s6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAwNSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG59XFxuXFxuLmFkZC10YXNrLWZvcm06OmJlZm9yZXtcXG4gICAgY29udGVudDogJ1Rhc2snO1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIHBsYWNlLXNlbGY6IHN0YXJ0IGNlbnRlcjtcXG59XFxuXFxuLmFkZC10YXNrLWZvcm17XFxuICAgIHBhZGRpbmc6IDM2cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAgd2lkdGg6IDQyMHB4O1xcbn1cXG5cXG5mb3JtPmRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuZm9ybSBsYWJlbHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG5mb3JtPmRpdjpsYXN0LWNoaWxke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG5mb3JtIGJ1dHRvbntcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDMycHg7XFxufVxcblxcbmZvb3RlcntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogN3B4O1xcbn1cXG5cXG4uZmFie1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5mYWI6aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4xKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9raXQuZm9udGF3ZXNvbWUuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVGb290ZXIoKXtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBmb290ZXIudGV4dENvbnRlbnQgPSBgQ29weXJpZ2h0IMKpICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBIYXJzaGFsU2hpcm90ZWA7XG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBhLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL0hhcnNoYWxzaGlyb3RlMjAwMic7XG4gICAgYS50YXJnZXQgPSAnX2JsYW5rJztcbiAgICBjb25zdCBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIGkuY2xhc3NMaXN0LmFkZCgnZmFiJyk7XG4gICAgaS5jbGFzc0xpc3QuYWRkKCdmYS1naXRodWInKTtcbiAgICBpLmFyaWFIaWRkZW4gPSB0cnVlO1xuICAgIGEuYXBwZW5kQ2hpbGQoaSk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGEpO1xuICAgIHJldHVybiBmb290ZXI7XG59IiwiaW1wb3J0IGNyZWF0ZURpYWxvZyBmcm9tICcuL3Rhc2tEaWFsb2cuanMnO1xuXG5mdW5jdGlvbiB0YXNrTWFrZXIodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMsIGNoZWNrKXtcbiAgICByZXR1cm4ge3RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBjaGVja307XG59XG5cbmZ1bmN0aW9uIGNhbGxEaWFsb2coKXtcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaWFsb2cnKTtcbiAgICBkaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgY29uc3QgZGlhbG9nV2lkdGggPSBkaWFsb2cub2Zmc2V0V2lkdGg7XG4gICAgY29uc3QgZGlhbG9nSGVpZ2h0ID0gZGlhbG9nLm9mZnNldEhlaWdodDtcbiAgICBjb25zdCB2aWV3cG9ydFdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgY29uc3Qgdmlld3BvcnRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgY29uc3QgbGVmdFBvc2l0aW9uID0gdmlld3BvcnRXaWR0aCAvIDIgLSBkaWFsb2dXaWR0aCAvIDI7XG4gICAgY29uc3QgdG9wUG9zaXRpb24gPSB2aWV3cG9ydEhlaWdodCAvIDIgLSBkaWFsb2dIZWlnaHQgLyAyO1xuICAgIGRpYWxvZy5zdHlsZS5sZWZ0ID0gYCR7bGVmdFBvc2l0aW9ufXB4YDtcbiAgICBkaWFsb2cuc3R5bGUudG9wID0gYCR7dG9wUG9zaXRpb259cHhgO1xufVxuXG5mdW5jdGlvbiB2aWV3RHJvcGRvd24oZSl7XG4gICAgY29uc3QgYWxsVGFza3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJykpO1xuICAgIGFsbFRhc2tzLmZvckVhY2goKHRhc2spID0+ICB7XG4gICAgICAgIGlmKEFycmF5LmZyb20odGFzay5jbGFzc0xpc3QpLmluY2x1ZGVzKCd0YXNrLWRyb3Bkb3duLWFjdGl2ZScpKXtcbiAgICAgICAgICAgIGlmKCEoZS50YXJnZXQ9PXRhc2spKXtcbiAgICAgICAgICAgICAgICB0YXNrLmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stZHJvcGRvd24tYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZihBcnJheS5mcm9tKGUudGFyZ2V0LmNsYXNzTGlzdCkuaW5jbHVkZXMoJ3Rhc2stZHJvcGRvd24tYWN0aXZlJykpe1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrLWRyb3Bkb3duLWFjdGl2ZScpO1xuICAgIH1lbHNle1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCd0YXNrLWRyb3Bkb3duLWFjdGl2ZScpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSG9tZSgpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHNpZGViYXJIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc2lkZWJhckNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0YXNrSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGFza0hlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0YXNrQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXInKTtcbiAgICBzaWRlYmFySGVhZC5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWhlYWRlcicpO1xuICAgIHNpZGViYXJIZWFkLnRleHRDb250ZW50ID0gJ0pvaG4gRG9lJztcbiAgICBzaWRlYmFyQ29udGVudC5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWNvbnRlbnQnKTtcbiAgICB0YXNrSG9sZGVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2staG9sZGVyJyk7XG4gICAgdGFza0hlYWQuY2xhc3NMaXN0LmFkZCgndGFzay1oZWFkZXInKTtcbiAgICB0YXNrSGVhZC50ZXh0Q29udGVudCA9ICdUYXNrcyc7XG4gICAgdGFza0NvbnRlbnQuY2xhc3NMaXN0LmFkZCgndGFza3MtY29udGFpbmVyJyk7XG4gICAgYWRkVGFzay5jbGFzc0xpc3QuYWRkKCdhZGQtdGFzaycpXG4gICAgYWRkVGFzay50ZXh0Q29udGVudCA9ICdBZGQgYSB0YXNrJztcbiAgICBhZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbERpYWxvZyk7XG5cbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHNpZGViYXJIZWFkKTtcbiAgICB0YXNrSG9sZGVyLmFwcGVuZENoaWxkKHRhc2tIZWFkKTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICBjb25zdCBzcGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgc3BhY2UuY2xhc3NMaXN0LmFkZCgnc3BhY2UnKTtcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnc3BhY2UtdGl0bGUnKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSAndGl0bGUnO1xuICAgICAgICBzcGFjZS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIHNpZGViYXJDb250ZW50LmFwcGVuZENoaWxkKHNwYWNlKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IG1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHBhcmFtZXRlcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBkZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoYCR7aX1gKTtcbiAgICAgICAgbWFya2VyLmNsYXNzTGlzdC5hZGQoYHRhc2stbWFya2VyYCk7XG4gICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgndGFzay1jb250ZW50Jyk7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUnKTtcbiAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndGFzay1kZXNjcmlwdGlvbicpO1xuICAgICAgICBwYXJhbWV0ZXJzLmNsYXNzTGlzdC5hZGQoJ3Rhc2stcGFyYW1ldGVycycpO1xuICAgICAgICBkZWFkbGluZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWRlYWRsaW5lJyk7XG4gICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3Rhc2stcHJpb3JpdHknKTtcbiAgICAgICAgbm90ZXMuY2xhc3NMaXN0LmFkZCgndGFzay1ub3RlcycpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9ICd0aXRsZSc7XG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ2Rlc2NyaXB0aW9uJztcbiAgICAgICAgZGVhZGxpbmUudGV4dENvbnRlbnQgPSAnZC4uLic7XG4gICAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gJ3AuLi4nO1xuICAgICAgICBub3Rlcy50ZXh0Q29udGVudCA9ICdsb3JlbSBpcHN1bSBkb2xvciBzYXNkc2FkYSBmZiBlcmYgZGYgZiBmZCBkIGggaCBoeWd5IGZnIGhnaGdoIGdnZ2dnIGdnZ2dnIGdnZ2dnIGdnZ2dnIGdnZ2cgaCBoIGhqaGogbG9yZW0gaXBzdW0gZG9sb3Igc2FzZHNhZGEgZmYgZXJmIGRmIGYgZmQgZCBoIGggaHlneSBmZyBoZ2hnaCBnZ2dnZyBnZ2dnZyBnZ2dnZyBnZ2dnZyBnZ2dnIGggaCBoamhqIGxvcmVtIGlwc3VtIGRvbG9yIHNhc2RzYWRhIGZmIGVyZiBkZiBmIGZkIGQgaCBoIGh5Z3kgZmcgaGdoZ2ggZ2dnZ2cgZ2dnZ2cgZ2dnZ2cgZ2dnZ2cgZ2dnZyBoIGggaGpoaic7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kKHRpdGxlLCBkZXNjcmlwdGlvbik7XG4gICAgICAgIHBhcmFtZXRlcnMuYXBwZW5kKGRlYWRsaW5lLCBwcmlvcml0eSk7XG4gICAgICAgIHRhc2suYXBwZW5kKG1hcmtlciwgY29udGVudCwgcGFyYW1ldGVycywgbm90ZXMpO1xuICAgICAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdmlld0Ryb3Bkb3duKTtcbiAgICAgICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQodGFzayk7XG4gICAgfVxuICAgIHRhc2tIb2xkZXIuYXBwZW5kQ2hpbGQodGFza0NvbnRlbnQpO1xuICAgIHRhc2tIb2xkZXIuYXBwZW5kQ2hpbGQoYWRkVGFzayk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyQ29udGVudCk7XG4gICAgY29uc3QgZGlhbG9nID0gY3JlYXRlRGlhbG9nKCk7XG4gICAgbWFpbi5hcHBlbmQoc2lkZWJhciwgdGFza0hvbGRlciwgZGlhbG9nKTtcbiAgICByZXR1cm4gbWFpbjtcbn0iLCJ3aW5kb3cuRm9udEF3ZXNvbWVLaXRDb25maWcgPSB7XCJhc3luY0xvYWRpbmdcIjp7XCJlbmFibGVkXCI6ZmFsc2V9LFwiYXV0b0ExMXlcIjp7XCJlbmFibGVkXCI6dHJ1ZX0sXCJiYXNlVXJsXCI6XCJodHRwczovL2thLWYuZm9udGF3ZXNvbWUuY29tXCIsXCJiYXNlVXJsS2l0XCI6XCJodHRwczovL2tpdC5mb250YXdlc29tZS5jb21cIixcImRldGVjdENvbmZsaWN0c1VudGlsXCI6bnVsbCxcImljb25VcGxvYWRzXCI6e30sXCJpZFwiOjgwNzYyNjczLFwibGljZW5zZVwiOlwiZnJlZVwiLFwibWV0aG9kXCI6XCJjc3NcIixcIm1pbmlmeVwiOntcImVuYWJsZWRcIjp0cnVlfSxcInRva2VuXCI6XCI0YzUzNmE2YmQ1XCIsXCJ2NEZvbnRGYWNlU2hpbVwiOntcImVuYWJsZWRcIjp0cnVlfSxcInY0c2hpbVwiOntcImVuYWJsZWRcIjp0cnVlfSxcInY1Rm9udEZhY2VTaGltXCI6e1wiZW5hYmxlZFwiOmZhbHNlfSxcInZlcnNpb25cIjpcIjUuMTUuNFwifTtcbiFmdW5jdGlvbih0KXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwia2l0LWxvYWRlclwiLHQpOnQoKX0oKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gdCh0LGUpe3ZhciBuPU9iamVjdC5rZXlzKHQpO2lmKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpe3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModCk7ZSYmKHI9ci5maWx0ZXIoKGZ1bmN0aW9uKGUpe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsZSkuZW51bWVyYWJsZX0pKSksbi5wdXNoLmFwcGx5KG4scil9cmV0dXJuIG59ZnVuY3Rpb24gZShlKXtmb3IodmFyIG49MTtuPGFyZ3VtZW50cy5sZW5ndGg7bisrKXt2YXIgbz1udWxsIT1hcmd1bWVudHNbbl0/YXJndW1lbnRzW25dOnt9O24lMj90KE9iamVjdChvKSwhMCkuZm9yRWFjaCgoZnVuY3Rpb24odCl7cihlLHQsb1t0XSl9KSk6T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnM/T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZSxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvKSk6dChPYmplY3QobykpLmZvckVhY2goKGZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvLHQpKX0pKX1yZXR1cm4gZX1mdW5jdGlvbiBuKHQpe3JldHVybihuPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbih0KXtyZXR1cm4gdHlwZW9mIHR9OmZ1bmN0aW9uKHQpe3JldHVybiB0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJnQuY29uc3RydWN0b3I9PT1TeW1ib2wmJnQhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIHR9KSh0KX1mdW5jdGlvbiByKHQsZSxuKXtyZXR1cm4oZT1mdW5jdGlvbih0KXt2YXIgZT1mdW5jdGlvbih0LGUpe2lmKFwib2JqZWN0XCIhPXR5cGVvZiB0fHxudWxsPT09dClyZXR1cm4gdDt2YXIgbj10W1N5bWJvbC50b1ByaW1pdGl2ZV07aWYodm9pZCAwIT09bil7dmFyIHI9bi5jYWxsKHQsZXx8XCJkZWZhdWx0XCIpO2lmKFwib2JqZWN0XCIhPXR5cGVvZiByKXJldHVybiByO3Rocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKX1yZXR1cm4oXCJzdHJpbmdcIj09PWU/U3RyaW5nOk51bWJlcikodCl9KHQsXCJzdHJpbmdcIik7cmV0dXJuXCJzeW1ib2xcIj09dHlwZW9mIGU/ZTpTdHJpbmcoZSl9KGUpKWluIHQ/T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsZSx7dmFsdWU6bixlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOnRbZV09bix0fWZ1bmN0aW9uIG8odCxlKXtyZXR1cm4gZnVuY3Rpb24odCl7aWYoQXJyYXkuaXNBcnJheSh0KSlyZXR1cm4gdH0odCl8fGZ1bmN0aW9uKHQsZSl7dmFyIG49bnVsbD09dD9udWxsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJnRbU3ltYm9sLml0ZXJhdG9yXXx8dFtcIkBAaXRlcmF0b3JcIl07aWYobnVsbCE9bil7dmFyIHIsbyxpLGMsYT1bXSx1PSEwLGY9ITE7dHJ5e2lmKGk9KG49bi5jYWxsKHQpKS5uZXh0LDA9PT1lKXtpZihPYmplY3QobikhPT1uKXJldHVybjt1PSExfWVsc2UgZm9yKDshKHU9KHI9aS5jYWxsKG4pKS5kb25lKSYmKGEucHVzaChyLnZhbHVlKSxhLmxlbmd0aCE9PWUpO3U9ITApO31jYXRjaCh0KXtmPSEwLG89dH1maW5hbGx5e3RyeXtpZighdSYmbnVsbCE9bi5yZXR1cm4mJihjPW4ucmV0dXJuKCksT2JqZWN0KGMpIT09YykpcmV0dXJufWZpbmFsbHl7aWYoZil0aHJvdyBvfX1yZXR1cm4gYX19KHQsZSl8fGZ1bmN0aW9uKHQsZSl7aWYoIXQpcmV0dXJuO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXJldHVybiBpKHQsZSk7dmFyIG49T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpLnNsaWNlKDgsLTEpO1wiT2JqZWN0XCI9PT1uJiZ0LmNvbnN0cnVjdG9yJiYobj10LmNvbnN0cnVjdG9yLm5hbWUpO2lmKFwiTWFwXCI9PT1ufHxcIlNldFwiPT09bilyZXR1cm4gQXJyYXkuZnJvbSh0KTtpZihcIkFyZ3VtZW50c1wiPT09bnx8L14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpcmV0dXJuIGkodCxlKX0odCxlKXx8ZnVuY3Rpb24oKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpfSgpfWZ1bmN0aW9uIGkodCxlKXsobnVsbD09ZXx8ZT50Lmxlbmd0aCkmJihlPXQubGVuZ3RoKTtmb3IodmFyIG49MCxyPW5ldyBBcnJheShlKTtuPGU7bisrKXJbbl09dFtuXTtyZXR1cm4gcn1mdW5jdGlvbiBjKHQsZSl7dmFyIG49ZSYmZS5hZGRPbnx8XCJcIixyPWUmJmUuYmFzZUZpbGVuYW1lfHx0LmxpY2Vuc2UrbixvPWUmJmUubWluaWZ5P1wiLm1pblwiOlwiXCIsaT1lJiZlLmZpbGVTdWZmaXh8fHQubWV0aG9kLGM9ZSYmZS5zdWJkaXJ8fHQubWV0aG9kO3JldHVybiB0LmJhc2VVcmwrXCIvcmVsZWFzZXMvXCIrKFwibGF0ZXN0XCI9PT10LnZlcnNpb24/XCJsYXRlc3RcIjpcInZcIi5jb25jYXQodC52ZXJzaW9uKSkrXCIvXCIrYytcIi9cIityK28rXCIuXCIraX1mdW5jdGlvbiBhKHQsZSl7dmFyIG49ZXx8W1wiZmFcIl0scj1cIi5cIitBcnJheS5wcm90b3R5cGUuam9pbi5jYWxsKG4sXCIsLlwiKSxvPXQucXVlcnlTZWxlY3RvckFsbChyKTtBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKG8sKGZ1bmN0aW9uKGUpe3ZhciBuPWUuZ2V0QXR0cmlidXRlKFwidGl0bGVcIik7ZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLFwidHJ1ZVwiKTt2YXIgcj0hZS5uZXh0RWxlbWVudFNpYmxpbmd8fCFlLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoXCJzci1vbmx5XCIpO2lmKG4mJnIpe3ZhciBvPXQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7by5pbm5lckhUTUw9bixvLmNsYXNzTGlzdC5hZGQoXCJzci1vbmx5XCIpLGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobyxlLm5leHRTaWJsaW5nKX19KSl9dmFyIHUsZj1mdW5jdGlvbigpe30scz1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsJiZ2b2lkIDAhPT1nbG9iYWwucHJvY2VzcyYmXCJmdW5jdGlvblwiPT10eXBlb2YgZ2xvYmFsLnByb2Nlc3MuZW1pdCxsPVwidW5kZWZpbmVkXCI9PXR5cGVvZiBzZXRJbW1lZGlhdGU/c2V0VGltZW91dDpzZXRJbW1lZGlhdGUsZD1bXTtmdW5jdGlvbiBoKCl7Zm9yKHZhciB0PTA7dDxkLmxlbmd0aDt0KyspZFt0XVswXShkW3RdWzFdKTtkPVtdLHU9ITF9ZnVuY3Rpb24gbSh0LGUpe2QucHVzaChbdCxlXSksdXx8KHU9ITAsbChoLDApKX1mdW5jdGlvbiBwKHQpe3ZhciBlPXQub3duZXIsbj1lLl9zdGF0ZSxyPWUuX2RhdGEsbz10W25dLGk9dC50aGVuO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIG8pe249XCJmdWxmaWxsZWRcIjt0cnl7cj1vKHIpfWNhdGNoKHQpe2coaSx0KX19dihpLHIpfHwoXCJmdWxmaWxsZWRcIj09PW4mJmIoaSxyKSxcInJlamVjdGVkXCI9PT1uJiZnKGkscikpfWZ1bmN0aW9uIHYodCxlKXt2YXIgcjt0cnl7aWYodD09PWUpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkEgcHJvbWlzZXMgY2FsbGJhY2sgY2Fubm90IHJldHVybiB0aGF0IHNhbWUgcHJvbWlzZS5cIik7aWYoZSYmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGV8fFwib2JqZWN0XCI9PT1uKGUpKSl7dmFyIG89ZS50aGVuO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIG8pcmV0dXJuIG8uY2FsbChlLChmdW5jdGlvbihuKXtyfHwocj0hMCxlPT09bj95KHQsbik6Yih0LG4pKX0pLChmdW5jdGlvbihlKXtyfHwocj0hMCxnKHQsZSkpfSkpLCEwfX1jYXRjaChlKXtyZXR1cm4gcnx8Zyh0LGUpLCEwfXJldHVybiExfWZ1bmN0aW9uIGIodCxlKXt0IT09ZSYmdih0LGUpfHx5KHQsZSl9ZnVuY3Rpb24geSh0LGUpe1wicGVuZGluZ1wiPT09dC5fc3RhdGUmJih0Ll9zdGF0ZT1cInNldHRsZWRcIix0Ll9kYXRhPWUsbShBLHQpKX1mdW5jdGlvbiBnKHQsZSl7XCJwZW5kaW5nXCI9PT10Ll9zdGF0ZSYmKHQuX3N0YXRlPVwic2V0dGxlZFwiLHQuX2RhdGE9ZSxtKFMsdCkpfWZ1bmN0aW9uIHcodCl7dC5fdGhlbj10Ll90aGVuLmZvckVhY2gocCl9ZnVuY3Rpb24gQSh0KXt0Ll9zdGF0ZT1cImZ1bGZpbGxlZFwiLHcodCl9ZnVuY3Rpb24gUyh0KXt0Ll9zdGF0ZT1cInJlamVjdGVkXCIsdyh0KSwhdC5faGFuZGxlZCYmcyYmZ2xvYmFsLnByb2Nlc3MuZW1pdChcInVuaGFuZGxlZFJlamVjdGlvblwiLHQuX2RhdGEsdCl9ZnVuY3Rpb24gTyh0KXtnbG9iYWwucHJvY2Vzcy5lbWl0KFwicmVqZWN0aW9uSGFuZGxlZFwiLHQpfWZ1bmN0aW9uIGoodCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJvbWlzZSByZXNvbHZlciBcIit0K1wiIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO2lmKHRoaXMgaW5zdGFuY2VvZiBqPT0hMSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGNvbnN0cnVjdCAnUHJvbWlzZSc6IFBsZWFzZSB1c2UgdGhlICduZXcnIG9wZXJhdG9yLCB0aGlzIG9iamVjdCBjb25zdHJ1Y3RvciBjYW5ub3QgYmUgY2FsbGVkIGFzIGEgZnVuY3Rpb24uXCIpO3RoaXMuX3RoZW49W10sZnVuY3Rpb24odCxlKXtmdW5jdGlvbiBuKHQpe2coZSx0KX10cnl7dCgoZnVuY3Rpb24odCl7YihlLHQpfSksbil9Y2F0Y2godCl7bih0KX19KHQsdGhpcyl9ai5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOmosX3N0YXRlOlwicGVuZGluZ1wiLF90aGVuOm51bGwsX2RhdGE6dm9pZCAwLF9oYW5kbGVkOiExLHRoZW46ZnVuY3Rpb24odCxlKXt2YXIgbj17b3duZXI6dGhpcyx0aGVuOm5ldyB0aGlzLmNvbnN0cnVjdG9yKGYpLGZ1bGZpbGxlZDp0LHJlamVjdGVkOmV9O3JldHVybiFlJiYhdHx8dGhpcy5faGFuZGxlZHx8KHRoaXMuX2hhbmRsZWQ9ITAsXCJyZWplY3RlZFwiPT09dGhpcy5fc3RhdGUmJnMmJm0oTyx0aGlzKSksXCJmdWxmaWxsZWRcIj09PXRoaXMuX3N0YXRlfHxcInJlamVjdGVkXCI9PT10aGlzLl9zdGF0ZT9tKHAsbik6dGhpcy5fdGhlbi5wdXNoKG4pLG4udGhlbn0sY2F0Y2g6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMudGhlbihudWxsLHQpfX0sai5hbGw9ZnVuY3Rpb24odCl7aWYoIUFycmF5LmlzQXJyYXkodCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIllvdSBtdXN0IHBhc3MgYW4gYXJyYXkgdG8gUHJvbWlzZS5hbGwoKS5cIik7cmV0dXJuIG5ldyBqKChmdW5jdGlvbihlLG4pe3ZhciByPVtdLG89MDtmdW5jdGlvbiBpKHQpe3JldHVybiBvKyssZnVuY3Rpb24obil7clt0XT1uLC0tb3x8ZShyKX19Zm9yKHZhciBjLGE9MDthPHQubGVuZ3RoO2ErKykoYz10W2FdKSYmXCJmdW5jdGlvblwiPT10eXBlb2YgYy50aGVuP2MudGhlbihpKGEpLG4pOnJbYV09YztvfHxlKHIpfSkpfSxqLnJhY2U9ZnVuY3Rpb24odCl7aWYoIUFycmF5LmlzQXJyYXkodCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIllvdSBtdXN0IHBhc3MgYW4gYXJyYXkgdG8gUHJvbWlzZS5yYWNlKCkuXCIpO3JldHVybiBuZXcgaigoZnVuY3Rpb24oZSxuKXtmb3IodmFyIHIsbz0wO288dC5sZW5ndGg7bysrKShyPXRbb10pJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiByLnRoZW4/ci50aGVuKGUsbik6ZShyKX0pKX0sai5yZXNvbHZlPWZ1bmN0aW9uKHQpe3JldHVybiB0JiZcIm9iamVjdFwiPT09bih0KSYmdC5jb25zdHJ1Y3Rvcj09PWo/dDpuZXcgaigoZnVuY3Rpb24oZSl7ZSh0KX0pKX0sai5yZWplY3Q9ZnVuY3Rpb24odCl7cmV0dXJuIG5ldyBqKChmdW5jdGlvbihlLG4pe24odCl9KSl9O3ZhciBFPVwiZnVuY3Rpb25cIj09dHlwZW9mIFByb21pc2U/UHJvbWlzZTpqO2Z1bmN0aW9uIFAodCxlKXt2YXIgbj1lLmZldGNoLHI9ZS5YTUxIdHRwUmVxdWVzdCxvPWUudG9rZW4saT10O3JldHVybiBvJiYhZnVuY3Rpb24odCl7cmV0dXJuIHQuaW5kZXhPZihcImtpdC11cGxvYWQuY3NzXCIpPi0xfSh0KSYmKFwiVVJMU2VhcmNoUGFyYW1zXCJpbiB3aW5kb3c/KGk9bmV3IFVSTCh0KSkuc2VhcmNoUGFyYW1zLnNldChcInRva2VuXCIsbyk6aT1pK1wiP3Rva2VuPVwiK2VuY29kZVVSSUNvbXBvbmVudChvKSksaT1pLnRvU3RyaW5nKCksbmV3IEUoKGZ1bmN0aW9uKHQsZSl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgbiluKGkse21vZGU6XCJjb3JzXCIsY2FjaGU6XCJkZWZhdWx0XCJ9KS50aGVuKChmdW5jdGlvbih0KXtpZih0Lm9rKXJldHVybiB0LnRleHQoKTt0aHJvdyBuZXcgRXJyb3IoXCJcIil9KSkudGhlbigoZnVuY3Rpb24oZSl7dChlKX0pKS5jYXRjaChlKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHIpe3ZhciBvPW5ldyByO28uYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRlbmRcIiwoZnVuY3Rpb24oKXt0aGlzLnJlc3BvbnNlVGV4dD90KHRoaXMucmVzcG9uc2VUZXh0KTplKG5ldyBFcnJvcihcIlwiKSl9KSk7W1wiYWJvcnRcIixcImVycm9yXCIsXCJ0aW1lb3V0XCJdLm1hcCgoZnVuY3Rpb24odCl7by5hZGRFdmVudExpc3RlbmVyKHQsKGZ1bmN0aW9uKCl7ZShuZXcgRXJyb3IoXCJcIikpfSkpfSkpLG8ub3BlbihcIkdFVFwiLGkpLG8uc2VuZCgpfWVsc2V7ZShuZXcgRXJyb3IoXCJcIikpfX0pKX1mdW5jdGlvbiBfKHQsZSxuKXt2YXIgcj10O3JldHVybltbLyh1cmxcXChcIj8pXFwuXFwuXFwvXFwuXFwuXFwvXFwuXFwuL2csZnVuY3Rpb24odCxuKXtyZXR1cm5cIlwiLmNvbmNhdChuKS5jb25jYXQoZSl9XSxbLyh1cmxcXChcIj8pXFwuXFwuXFwvd2ViZm9udHMvZyxmdW5jdGlvbih0LHIpe3JldHVyblwiXCIuY29uY2F0KHIpLmNvbmNhdChlLFwiL3JlbGVhc2VzL3ZcIikuY29uY2F0KG4sXCIvd2ViZm9udHNcIil9XSxbLyh1cmxcXChcIj8paHR0cHM6XFwvXFwva2l0LWZyZWUoW14uXSkqXFwuZm9udGF3ZXNvbWVcXC5jb20vZyxmdW5jdGlvbih0LG4pe3JldHVyblwiXCIuY29uY2F0KG4pLmNvbmNhdChlKX1dXS5mb3JFYWNoKChmdW5jdGlvbih0KXt2YXIgZT1vKHQsMiksbj1lWzBdLGk9ZVsxXTtyPXIucmVwbGFjZShuLGkpfSkpLHJ9ZnVuY3Rpb24gRih0LG4pe3ZhciByPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTpmdW5jdGlvbigpe30sbz1uLmRvY3VtZW50fHxvLGk9YS5iaW5kKGEsbyxbXCJmYVwiLFwiZmFiXCIsXCJmYXNcIixcImZhclwiLFwiZmFsXCIsXCJmYWRcIixcImZha1wiXSk7dC5hdXRvQTExeS5lbmFibGVkJiZyKGkpO3ZhciB1PXQuc3Vic2V0UGF0aCYmdC5iYXNlVXJsK1wiL1wiK3Quc3Vic2V0UGF0aCxmPVt7aWQ6XCJmYS1tYWluXCIsYWRkT246dm9pZCAwLHVybDp1fV07aWYodC52NHNoaW0mJnQudjRzaGltLmVuYWJsZWQmJmYucHVzaCh7aWQ6XCJmYS12NC1zaGltc1wiLGFkZE9uOlwiLXY0LXNoaW1zXCJ9KSx0LnY1Rm9udEZhY2VTaGltJiZ0LnY1Rm9udEZhY2VTaGltLmVuYWJsZWQmJmYucHVzaCh7aWQ6XCJmYS12NS1mb250LWZhY2VcIixhZGRPbjpcIi12NS1mb250LWZhY2VcIn0pLHQudjRGb250RmFjZVNoaW0mJnQudjRGb250RmFjZVNoaW0uZW5hYmxlZCYmZi5wdXNoKHtpZDpcImZhLXY0LWZvbnQtZmFjZVwiLGFkZE9uOlwiLXY0LWZvbnQtZmFjZVwifSksIXUmJnQuY3VzdG9tSWNvbnNDc3NQYXRoKXt2YXIgcz10LmN1c3RvbUljb25zQ3NzUGF0aC5pbmRleE9mKFwia2l0LXVwbG9hZC5jc3NcIik+LTE/dC5iYXNlVXJsS2l0OnQuYmFzZVVybCxsPXMrXCIvXCIrdC5jdXN0b21JY29uc0Nzc1BhdGg7Zi5wdXNoKHtpZDpcImZhLWtpdC11cGxvYWRcIix1cmw6bH0pfXZhciBkPWYubWFwKChmdW5jdGlvbihyKXtyZXR1cm4gbmV3IEUoKGZ1bmN0aW9uKG8saSl7dmFyIGE9ci51cmx8fGModCx7YWRkT246ci5hZGRPbixtaW5pZnk6dC5taW5pZnkuZW5hYmxlZH0pLHU9e2lkOnIuaWR9LGY9dC5zdWJzZXQ/dTplKGUoZSh7fSxuKSx1KSx7fSx7YmFzZVVybDp0LmJhc2VVcmwsdmVyc2lvbjp0LnZlcnNpb24saWQ6ci5pZCxjb250ZW50RmlsdGVyOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIF8odCxlLmJhc2VVcmwsZS52ZXJzaW9uKX19KTtQKGEsbikudGhlbigoZnVuY3Rpb24odCl7byhDKHQsZikpfSkpLmNhdGNoKGkpfSkpfSkpO3JldHVybiBFLmFsbChkKX1mdW5jdGlvbiBDKHQsZSl7dmFyIG49ZS5jb250ZW50RmlsdGVyfHxmdW5jdGlvbih0LGUpe3JldHVybiB0fSxyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKSxvPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG4odCxlKSk7cmV0dXJuIHIuYXBwZW5kQ2hpbGQobyksci5tZWRpYT1cImFsbFwiLGUuaWQmJnIuc2V0QXR0cmlidXRlKFwiaWRcIixlLmlkKSxlJiZlLmRldGVjdGluZ0NvbmZsaWN0cyYmZS5kZXRlY3Rpb25JZ25vcmVBdHRyJiZyLnNldEF0dHJpYnV0ZU5vZGUoZG9jdW1lbnQuY3JlYXRlQXR0cmlidXRlKGUuZGV0ZWN0aW9uSWdub3JlQXR0cikpLHJ9ZnVuY3Rpb24gSSh0LG4pe24uYXV0b0ExMXk9dC5hdXRvQTExeS5lbmFibGVkLFwicHJvXCI9PT10LmxpY2Vuc2UmJihuLmF1dG9GZXRjaFN2Zz0hMCxuLmZldGNoU3ZnRnJvbT10LmJhc2VVcmwrXCIvcmVsZWFzZXMvXCIrKFwibGF0ZXN0XCI9PT10LnZlcnNpb24/XCJsYXRlc3RcIjpcInZcIi5jb25jYXQodC52ZXJzaW9uKSkrXCIvc3Znc1wiLG4uZmV0Y2hVcGxvYWRlZFN2Z0Zyb209dC51cGxvYWRzVXJsKTt2YXIgcj1bXTtyZXR1cm4gdC52NHNoaW0uZW5hYmxlZCYmci5wdXNoKG5ldyBFKChmdW5jdGlvbihyLG8pe1AoYyh0LHthZGRPbjpcIi12NC1zaGltc1wiLG1pbmlmeTp0Lm1pbmlmeS5lbmFibGVkfSksbikudGhlbigoZnVuY3Rpb24odCl7cihVKHQsZShlKHt9LG4pLHt9LHtpZDpcImZhLXY0LXNoaW1zXCJ9KSkpfSkpLmNhdGNoKG8pfSkpKSxyLnB1c2gobmV3IEUoKGZ1bmN0aW9uKHIsbyl7UCh0LnN1YnNldFBhdGgmJnQuYmFzZVVybCtcIi9cIit0LnN1YnNldFBhdGh8fGModCx7bWluaWZ5OnQubWluaWZ5LmVuYWJsZWR9KSxuKS50aGVuKChmdW5jdGlvbih0KXt2YXIgbz1VKHQsZShlKHt9LG4pLHt9LHtpZDpcImZhLW1haW5cIn0pKTtyKGZ1bmN0aW9uKHQsZSl7dmFyIG49ZSYmdm9pZCAwIT09ZS5hdXRvRmV0Y2hTdmc/ZS5hdXRvRmV0Y2hTdmc6dm9pZCAwLHI9ZSYmdm9pZCAwIT09ZS5hdXRvQTExeT9lLmF1dG9BMTF5OnZvaWQgMDt2b2lkIDAhPT1yJiZ0LnNldEF0dHJpYnV0ZShcImRhdGEtYXV0by1hMTF5XCIscj9cInRydWVcIjpcImZhbHNlXCIpO24mJih0LnNldEF0dHJpYnV0ZU5vZGUoZG9jdW1lbnQuY3JlYXRlQXR0cmlidXRlKFwiZGF0YS1hdXRvLWZldGNoLXN2Z1wiKSksdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWZldGNoLXN2Zy1mcm9tXCIsZS5mZXRjaFN2Z0Zyb20pLHQuc2V0QXR0cmlidXRlKFwiZGF0YS1mZXRjaC11cGxvYWRlZC1zdmctZnJvbVwiLGUuZmV0Y2hVcGxvYWRlZFN2Z0Zyb20pKTtyZXR1cm4gdH0obyxuKSl9KSkuY2F0Y2gobyl9KSkpLEUuYWxsKHIpfWZ1bmN0aW9uIFUodCxlKXt2YXIgbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU0NSSVBUXCIpLHI9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodCk7cmV0dXJuIG4uYXBwZW5kQ2hpbGQociksbi5yZWZlcnJlclBvbGljeT1cInN0cmljdC1vcmlnaW5cIixlLmlkJiZuLnNldEF0dHJpYnV0ZShcImlkXCIsZS5pZCksZSYmZS5kZXRlY3RpbmdDb25mbGljdHMmJmUuZGV0ZWN0aW9uSWdub3JlQXR0ciYmbi5zZXRBdHRyaWJ1dGVOb2RlKGRvY3VtZW50LmNyZWF0ZUF0dHJpYnV0ZShlLmRldGVjdGlvbklnbm9yZUF0dHIpKSxufWZ1bmN0aW9uIFQodCl7dmFyIGUsbj1bXSxyPWRvY3VtZW50LG89ci5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGwsaT0obz8vXmxvYWRlZHxeYy86L15sb2FkZWR8Xml8XmMvKS50ZXN0KHIucmVhZHlTdGF0ZSk7aXx8ci5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLGU9ZnVuY3Rpb24oKXtmb3Ioci5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLGUpLGk9MTtlPW4uc2hpZnQoKTspZSgpfSksaT9zZXRUaW1lb3V0KHQsMCk6bi5wdXNoKHQpfWZ1bmN0aW9uIEwodCl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXImJm5ldyBNdXRhdGlvbk9ic2VydmVyKHQpLm9ic2VydmUoZG9jdW1lbnQse2NoaWxkTGlzdDohMCxzdWJ0cmVlOiEwfSl9dHJ5e2lmKHdpbmRvdy5Gb250QXdlc29tZUtpdENvbmZpZyl7dmFyIGs9d2luZG93LkZvbnRBd2Vzb21lS2l0Q29uZmlnLHg9e2RldGVjdGluZ0NvbmZsaWN0czprLmRldGVjdENvbmZsaWN0c1VudGlsJiZuZXcgRGF0ZTw9bmV3IERhdGUoay5kZXRlY3RDb25mbGljdHNVbnRpbCksZGV0ZWN0aW9uSWdub3JlQXR0cjpcImRhdGEtZmEtZGV0ZWN0aW9uLWlnbm9yZVwiLGZldGNoOndpbmRvdy5mZXRjaCx0b2tlbjprLnRva2VuLFhNTEh0dHBSZXF1ZXN0OndpbmRvdy5YTUxIdHRwUmVxdWVzdCxkb2N1bWVudDpkb2N1bWVudH0sTT1kb2N1bWVudC5jdXJyZW50U2NyaXB0LE49TT9NLnBhcmVudEVsZW1lbnQ6ZG9jdW1lbnQuaGVhZDsoZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e30sZT1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e307cmV0dXJuXCJqc1wiPT09dC5tZXRob2Q/SSh0LGUpOlwiY3NzXCI9PT10Lm1ldGhvZD9GKHQsZSwoZnVuY3Rpb24odCl7VCh0KSxMKHQpfSkpOnZvaWQgMH0pKGsseCkudGhlbigoZnVuY3Rpb24odCl7dC5tYXAoKGZ1bmN0aW9uKHQpe3RyeXtOLmluc2VydEJlZm9yZSh0LE0/TS5uZXh0U2libGluZzpudWxsKX1jYXRjaChlKXtOLmFwcGVuZENoaWxkKHQpfX0pKSx4LmRldGVjdGluZ0NvbmZsaWN0cyYmTSYmVCgoZnVuY3Rpb24oKXtNLnNldEF0dHJpYnV0ZU5vZGUoZG9jdW1lbnQuY3JlYXRlQXR0cmlidXRlKHguZGV0ZWN0aW9uSWdub3JlQXR0cikpO3ZhciB0PWZ1bmN0aW9uKHQsZSl7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtyZXR1cm4gZSYmZS5kZXRlY3Rpb25JZ25vcmVBdHRyJiZuLnNldEF0dHJpYnV0ZU5vZGUoZG9jdW1lbnQuY3JlYXRlQXR0cmlidXRlKGUuZGV0ZWN0aW9uSWdub3JlQXR0cikpLG4uc3JjPWModCx7YmFzZUZpbGVuYW1lOlwiY29uZmxpY3QtZGV0ZWN0aW9uXCIsZmlsZVN1ZmZpeDpcImpzXCIsc3ViZGlyOlwianNcIixtaW5pZnk6dC5taW5pZnkuZW5hYmxlZH0pLG59KGsseCk7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0KX0pKX0pKS5jYXRjaCgoZnVuY3Rpb24odCl7Y29uc29sZS5lcnJvcihcIlwiLmNvbmNhdChcIkZvbnQgQXdlc29tZSBLaXQ6XCIsXCIgXCIpLmNvbmNhdCh0KSl9KSl9fWNhdGNoKHQpe2NvbnNvbGUuZXJyb3IoXCJcIi5jb25jYXQoXCJGb250IEF3ZXNvbWUgS2l0OlwiLFwiIFwiKS5jb25jYXQodCkpfX0pKTsiLCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRGlhbG9nKCl7XG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBub3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGNvbnN0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3Qgbm90ZXNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3QgY2hlY2tMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGR1ZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG5vdGVzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2hlY2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBidXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZS5pZCA9ICd0aXRsZSc7XG4gICAgZGVzY3JpcHRpb24uaWQgPSAnZGVzY3JpcHRpb24nO1xuICAgIGR1ZURhdGUuaWQgPSAnZHVlRGF0ZSc7XG4gICAgcHJpb3JpdHkuaWQgPSAncHJpb3JpdHknO1xuICAgIG5vdGVzLmlkID0gJ25vdGVzJztcbiAgICBjaGVjay5pZCA9ICdjaGVjayc7XG4gICAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0aXRsZScpO1xuICAgIGRlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZGVzY3JpcHRpb24nKTtcbiAgICBkdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZHVlRGF0ZScpO1xuICAgIHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHknKTtcbiAgICBub3Rlc0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25vdGVzJyk7XG4gICAgY2hlY2tMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdjaGVjaycpO1xuICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSAndGl0bGU6ICc7XG4gICAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9ICdkZXNjcmlwdGlvbjogJztcbiAgICBkdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnZHVlIGRhdGU6ICc7XG4gICAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdwcmlvcml0eTogJztcbiAgICBub3Rlc0xhYmVsLnRleHRDb250ZW50ID0gJ25vdGVzOiAnO1xuICAgIGNoZWNrTGFiZWwudGV4dENvbnRlbnQgPSAnY29tcGxldGVkOiAnO1xuICAgIHRpdGxlLnR5cGUgPSAndGV4dCc7XG4gICAgZGVzY3JpcHRpb24udHlwZSA9ICd0ZXh0JztcbiAgICBwcmlvcml0eS50eXBlID0gJ3JhbmdlJztcbiAgICBwcmlvcml0eS5taW4gPSAnMSc7XG4gICAgcHJpb3JpdHkubWF4ID0gJzEwJztcbiAgICBwcmlvcml0eS52YWx1ZSA9ICczJztcbiAgICBkdWVEYXRlLnR5cGUgPSAnZGF0ZSc7XG4gICAgbm90ZXMudHlwZSA9ICd0ZXh0JztcbiAgICBjaGVjay50eXBlID0gJ2NoZWNrYm94JztcbiAgICBzdWJtaXQudHlwZSA9ICdzdWJtaXQnO1xuICAgIGNhbmNlbC50eXBlID0gJ3Jlc2V0JztcbiAgICBzdWJtaXQudGV4dENvbnRlbnQgPSAnYWRkJztcbiAgICBjYW5jZWwudGV4dENvbnRlbnQgPSAnY2FuY2VsJztcbiAgICB0aXRsZURpdi5hcHBlbmQodGl0bGVMYWJlbCwgdGl0bGUpO1xuICAgIGRlc2NyaXB0aW9uRGl2LmFwcGVuZChkZXNjcmlwdGlvbkxhYmVsLCBkZXNjcmlwdGlvbik7XG4gICAgcHJpb3JpdHlEaXYuYXBwZW5kKHByaW9yaXR5TGFiZWwsIHByaW9yaXR5KTtcbiAgICBkdWVEYXRlRGl2LmFwcGVuZChkdWVEYXRlTGFiZWwsIGR1ZURhdGUpO1xuICAgIG5vdGVzRGl2LmFwcGVuZChub3Rlc0xhYmVsLCBub3Rlcyk7XG4gICAgY2hlY2tEaXYuYXBwZW5kKGNoZWNrTGFiZWwsIGNoZWNrKTtcbiAgICBidXR0b25EaXYuYXBwZW5kKHN1Ym1pdCwgY2FuY2VsKTtcbiAgICBmb3JtLmFwcGVuZCh0aXRsZURpdiwgZGVzY3JpcHRpb25EaXYsIHByaW9yaXR5RGl2LCBkdWVEYXRlRGl2LCBub3Rlc0RpdiwgY2hlY2tEaXYsIGJ1dHRvbkRpdik7XG4gICAgZm9ybS5tZXRob2QgPSAnZGlhbG9nJztcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrLWZvcm0nKTtcbiAgICBkaWFsb2cuY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2stZGlhbG9nJyk7XG4gICAgZGlhbG9nLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIHJldHVybiBkaWFsb2c7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgY3JlYXRlSG9tZSBmcm9tIFwiLi9ob21lUGFnZS5qc1wiO1xuaW1wb3J0IGNyZWF0ZUZvb3RlciBmcm9tIFwiLi9jb21tb25Gb290ZXIuanNcIjtcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuY29uc3QgbWFpbiA9IGNyZWF0ZUhvbWUoKTtcbmNvbnN0IGZvb3RlciA9IGNyZWF0ZUZvb3RlcigpO1xuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=