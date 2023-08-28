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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 1px solid red;
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
    grid-template-columns: 1fr 4fr;
    gap: 54px;
}

.sidebar{
    grid-column: 1/2;
}

.task-holder
{
    display: grid;
    padding: 20px;
    gap: 20px;
    min-width: 345px;
}

.task-header
{
    font-size: 36px;
    place-self: start;
}

.task{
    height: 72px;
    display: grid;
    grid-template-columns: 1fr 200fr 1fr;
    padding: 5px 15px;
    gap: 15px;
    border-radius: 8px;
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

.workspace-holder{
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.workspace-header{
    font-size: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.space-content{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

.space{
    width: 300px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.space-title{
    font-size: 32px;
}

.add-task::before{
    content: '+ ';
    font-size: 28px;
    font-weight: 900;
    color: rgb(0, 0, 0);
    align-items: center;
}

.add-task{
    grid-column: 1/3;
    width: 150px;
    height: 40px;
    place-self: center;
    border-radius: 15px;
    background-color: rgb(169, 253, 248);
    font-size: 20px;
    font-weight: 900;
    transition: 0.2s;
}

.add-task:hover{
    cursor: pointer;
    transform: scale(1.03);
    background-color: rgb(85, 255, 244);
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,8BAA8B;;AAElC;;AAEA;IACI,WAAW;IACX,sBAAsB;IACtB,kBAAkB;IAClB,aAAa;IACb,8BAA8B;IAC9B,0BAA0B;AAC9B;;AAEA;IACI,wBAAwB;IACxB,eAAe;AACnB;;AAEA;IACI,sBAAsB;IACtB,gBAAgB;IAChB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,8BAA8B;IAC9B,SAAS;AACb;;AAEA;IACI,gBAAgB;AACpB;;AAEA;;IAEI,aAAa;IACb,aAAa;IACb,SAAS;IACT,gBAAgB;AACpB;;AAEA;;IAEI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,oCAAoC;IACpC,iBAAiB;IACjB,SAAS;IACT,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,wBAAwB;AAC5B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;;;IAGI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,8BAA8B;IAC9B,QAAQ;AACZ;;AAEA;IACI,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,eAAe;IACf,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,gBAAgB;IAChB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;IACnB,oCAAoC;IACpC,eAAe;IACf,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,sBAAsB;IACtB,mCAAmC;AACvC;;AAEA;IACI,WAAW;IACX,aAAa;IACb,aAAa;IACb,eAAe;IACf,mBAAmB;IACnB,uBAAuB;IACvB,QAAQ;AACZ;;AAEA;IACI,YAAY;IACZ,4BAA4B;AAChC;;AAEA;IACI,oCAAoC;AACxC","sourcesContent":["*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    border: 1px solid red;\n}\n\nbody{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    \n}\n\nheader{\n    width: 100%;\n    box-sizing: border-box;\n    padding: 24px 32px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    place-self: center stretch;\n}\n\nh1{\n    place-self: center start;\n    font-size: 54px;\n}\n\nheader ul{\n    place-self: center end;\n    list-style: none;\n    display: flex;\n    gap: 24px;\n}\n\nheader ul>li{\n    width: max-content;\n    display: flex;\n    align-items: center;\n}\n\nheader ul>li:hover{\n    cursor: pointer;\n}\n\nmain{\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    gap: 54px;\n}\n\n.sidebar{\n    grid-column: 1/2;\n}\n\n.task-holder\n{\n    display: grid;\n    padding: 20px;\n    gap: 20px;\n    min-width: 345px;\n}\n\n.task-header\n{\n    font-size: 36px;\n    place-self: start;\n}\n\n.task{\n    height: 72px;\n    display: grid;\n    grid-template-columns: 1fr 200fr 1fr;\n    padding: 5px 15px;\n    gap: 15px;\n    border-radius: 8px;\n}\n\n.task-marker{\n    border-radius: 50%;\n    height: 20px;\n    width: 20px;\n    place-self: center start;\n}\n\n.task-content{\n    place-self: center start;\n}\n\n.task-parameters{\n    place-self: center end;\n}\n\n.task-content,\n.task-parameters\n{\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    justify-content: space-between;\n    gap: 4px;\n}\n\n.task-title{\n    font-size: 24px;\n    height: 30px;\n}\n\n.task-description{\n    height: 18px;\n    font-size: 14px;\n}\n\n.task-parameters{\n    font-size: 18px;\n}\n\n.workspace-holder{\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.workspace-header{\n    font-size: 36px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.space-content{\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n}\n\n.space{\n    width: 300px;\n    height: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.space-title{\n    font-size: 32px;\n}\n\n.add-task::before{\n    content: '+ ';\n    font-size: 28px;\n    font-weight: 900;\n    color: rgb(0, 0, 0);\n    align-items: center;\n}\n\n.add-task{\n    grid-column: 1/3;\n    width: 150px;\n    height: 40px;\n    place-self: center;\n    border-radius: 15px;\n    background-color: rgb(169, 253, 248);\n    font-size: 20px;\n    font-weight: 900;\n    transition: 0.2s;\n}\n\n.add-task:hover{\n    cursor: pointer;\n    transform: scale(1.03);\n    background-color: rgb(85, 255, 244);\n}\n\nfooter{\n    width: 100%;\n    padding: 20px;\n    display: flex;\n    font-size: 24px;\n    align-items: center;\n    justify-content: center;\n    gap: 7px;\n}\n\n.fab{\n    color: black;\n    transition: 0.3s ease-in-out;\n}\n\n.fab:hover{\n    transform: rotate(360deg) scale(1.1);\n}"],"sourceRoot":""}]);
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

/***/ "./src/commonHeader.js":
/*!*****************************!*\
  !*** ./src/commonHeader.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHeader)
/* harmony export */ });
function createHeader(){
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = 'QuestQueue';
    const links = document.createElement('ul');
    const home = document.createElement('li');
    const contact = document.createElement('li');
    const about = document.createElement('li');
    home.textContent = 'Home';
    contact.textContent = 'Contact us';
    about.textContent = 'About';
    links.append(home, contact, about);
    header.appendChild(h1);
    header.appendChild(links);
    return header;
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
    sidebarHead.textContent = 'Menu';
    sidebarContent.classList.add('sidebar-content');
    taskHolder.classList.add('task-holder');
    taskHead.classList.add('task-header');
    taskHead.textContent = 'Tasks';
    taskContent.classList.add('task-content');
    addTask.classList.add('add-task')

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

    for (let i = 0; i < 12; i++) {
        const task = document.createElement('div');
        const marker = document.createElement('button');
        const content = document.createElement('div');
        const parameters = document.createElement('div');
        const title = document.createElement('p');
        const description = document.createElement('p');
        const deadline = document.createElement('p');
        const priority = document.createElement('p');
        task.classList.add('task');
        task.classList.add(`${i}`);
        marker.classList.add(`task-marker`);
        content.classList.add('task-content');
        title.classList.add('task-title');
        description.classList.add('task-description');
        parameters.classList.add('task-parameters');
        deadline.classList.add('task-deadline');
        priority.classList.add('task-priority');
        title.textContent = 'title';
        description.textContent = 'description';
        deadline.textContent = 'd...';
        priority.textContent = 'p...';
        content.append(title, description);
        parameters.append(deadline, priority);
        task.append(marker, content, parameters);
        taskHolder.appendChild(task);
    }

    
    sidebar.appendChild(sidebarContent);
    main.append(sidebar, taskHolder, addTask);
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
/* harmony import */ var _commonHeader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commonHeader.js */ "./src/commonHeader.js");
/* harmony import */ var _homePage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homePage.js */ "./src/homePage.js");
/* harmony import */ var _commonFooter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commonFooter.js */ "./src/commonFooter.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");





const header = (0,_commonHeader_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
const main = (0,_homePage_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
const footer = (0,_commonFooter_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
const body = document.querySelector('body');
body.appendChild(header);
body.appendChild(main);
body.appendChild(footer);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksNEJBQTRCLGdCQUFnQixpQkFBaUIsNkJBQTZCLDRCQUE0QixHQUFHLFNBQVMsb0JBQW9CLDZCQUE2QiwwQkFBMEIscUNBQXFDLFNBQVMsV0FBVyxrQkFBa0IsNkJBQTZCLHlCQUF5QixvQkFBb0IscUNBQXFDLGlDQUFpQyxHQUFHLE9BQU8sK0JBQStCLHNCQUFzQixHQUFHLGNBQWMsNkJBQTZCLHVCQUF1QixvQkFBb0IsZ0JBQWdCLEdBQUcsaUJBQWlCLHlCQUF5QixvQkFBb0IsMEJBQTBCLEdBQUcsdUJBQXVCLHNCQUFzQixHQUFHLFNBQVMsa0JBQWtCLG9CQUFvQixxQ0FBcUMsZ0JBQWdCLEdBQUcsYUFBYSx1QkFBdUIsR0FBRyxtQkFBbUIsb0JBQW9CLG9CQUFvQixnQkFBZ0IsdUJBQXVCLEdBQUcsbUJBQW1CLHNCQUFzQix3QkFBd0IsR0FBRyxVQUFVLG1CQUFtQixvQkFBb0IsMkNBQTJDLHdCQUF3QixnQkFBZ0IseUJBQXlCLEdBQUcsaUJBQWlCLHlCQUF5QixtQkFBbUIsa0JBQWtCLCtCQUErQixHQUFHLGtCQUFrQiwrQkFBK0IsR0FBRyxxQkFBcUIsNkJBQTZCLEdBQUcsdUNBQXVDLG9CQUFvQiw2QkFBNkIseUJBQXlCLHFDQUFxQyxlQUFlLEdBQUcsZ0JBQWdCLHNCQUFzQixtQkFBbUIsR0FBRyxzQkFBc0IsbUJBQW1CLHNCQUFzQixHQUFHLHFCQUFxQixzQkFBc0IsR0FBRyxzQkFBc0Isb0JBQW9CLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLEdBQUcsc0JBQXNCLHNCQUFzQixvQkFBb0IsMEJBQTBCLDhCQUE4QixHQUFHLG1CQUFtQixvQkFBb0Isc0JBQXNCLDBCQUEwQiw4QkFBOEIsZ0JBQWdCLEdBQUcsV0FBVyxtQkFBbUIsbUJBQW1CLG9CQUFvQiwwQkFBMEIsOEJBQThCLEdBQUcsaUJBQWlCLHNCQUFzQixHQUFHLHNCQUFzQixvQkFBb0Isc0JBQXNCLHVCQUF1QiwwQkFBMEIsMEJBQTBCLEdBQUcsY0FBYyx1QkFBdUIsbUJBQW1CLG1CQUFtQix5QkFBeUIsMEJBQTBCLDJDQUEyQyxzQkFBc0IsdUJBQXVCLHVCQUF1QixHQUFHLG9CQUFvQixzQkFBc0IsNkJBQTZCLDBDQUEwQyxHQUFHLFdBQVcsa0JBQWtCLG9CQUFvQixvQkFBb0Isc0JBQXNCLDBCQUEwQiw4QkFBOEIsZUFBZSxHQUFHLFNBQVMsbUJBQW1CLG1DQUFtQyxHQUFHLGVBQWUsMkNBQTJDLEdBQUcsbUJBQW1CO0FBQ3JtSjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7QUMzTTFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW9HO0FBQ3BHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJOEM7QUFDdEUsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLHVGQUFPLFVBQVUsdUZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYjhCOztBQUVmO0FBQ2Y7QUFDQSx3Q0FBd0MsMEJBQTBCO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2ZlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNmZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsRUFBRTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDaEVBLGlHQUErQixnQkFBZ0IsZ0JBQWdCLGFBQWEsZUFBZSxpSUFBaUkseURBQXlELGVBQWUsd0NBQXdDLGVBQWUsV0FBVyxlQUFlLG1CQUFtQixnQkFBZ0I7QUFDeFosYUFBYSxLQUFxQyxDQUFDLG9DQUFvQixDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0dBQUMsQ0FBQyxDQUFHLENBQUMsYUFBYSxhQUFhLGdCQUFnQixxQkFBcUIsaUNBQWlDLHNDQUFzQyw0QkFBNEIsdURBQXVELHNCQUFzQixTQUFTLGNBQWMsWUFBWSxtQkFBbUIsS0FBSyx5Q0FBeUMseUNBQXlDLFlBQVkscUlBQXFJLGdFQUFnRSxHQUFHLFNBQVMsY0FBYyxpRkFBaUYsZ0JBQWdCLGFBQWEsb0dBQW9HLEtBQUssa0JBQWtCLHFCQUFxQixvQkFBb0IseUNBQXlDLDRCQUE0QixlQUFlLDZCQUE2QiwrQkFBK0Isb0VBQW9FLHNDQUFzQyxhQUFhLHFDQUFxQyxvQ0FBb0Msa0RBQWtELFdBQVcsZ0JBQWdCLG1CQUFtQiw2QkFBNkIsbUJBQW1CLG1GQUFtRixZQUFZLDJCQUEyQixJQUFJLCtCQUErQix3QkFBd0IsS0FBSyxVQUFVLHdEQUF3RCxPQUFPLFNBQVMsU0FBUyxRQUFRLElBQUksMkRBQTJELFFBQVEsY0FBYyxVQUFVLHFCQUFxQixhQUFhLG9DQUFvQyxvREFBb0Qsb0RBQW9ELDZDQUE2QyxxRkFBcUYsa0JBQWtCLGlLQUFpSyxHQUFHLGdCQUFnQixvQ0FBb0MsMkJBQTJCLElBQUksY0FBYyxTQUFTLGdCQUFnQixrSUFBa0ksd0dBQXdHLGdCQUFnQixnRkFBZ0YsNENBQTRDLDhCQUE4QixxQ0FBcUMsaUZBQWlGLFNBQVMsOEJBQThCLHFGQUFxRixHQUFHLG9CQUFvQix1QkFBdUIscUJBQU0sV0FBVyxxQkFBTSw2QkFBNkIscUJBQU0sOEVBQThFLGFBQWEsWUFBWSxXQUFXLHFCQUFxQixVQUFVLGdCQUFnQiwrQkFBK0IsY0FBYyxtREFBbUQseUJBQXlCLGNBQWMsSUFBSSxPQUFPLFNBQVMsUUFBUSx5REFBeUQsZ0JBQWdCLE1BQU0sSUFBSSxxRkFBcUYsK0NBQStDLGFBQWEscURBQXFELDhCQUE4QixlQUFlLGlCQUFpQixPQUFPLFNBQVMsb0JBQW9CLFNBQVMsZ0JBQWdCLHNCQUFzQixnQkFBZ0IsNERBQTRELGdCQUFnQiw0REFBNEQsY0FBYywyQkFBMkIsY0FBYywwQkFBMEIsY0FBYyx5Q0FBeUMscUJBQU0sOENBQThDLGNBQWMscUJBQU0sb0NBQW9DLGNBQWMsd0ZBQXdGLHNLQUFzSyw0QkFBNEIsY0FBYyxPQUFPLElBQUksZUFBZSxPQUFPLEtBQUssU0FBUyxNQUFNLFNBQVMsYUFBYSxzRkFBc0YsT0FBTyxnRUFBZ0UsNEtBQTRLLG1CQUFtQiwwQkFBMEIsbUJBQW1CLHFGQUFxRiw0QkFBNEIsYUFBYSxjQUFjLHVCQUF1QixrQkFBa0IsY0FBYyxXQUFXLDhEQUE4RCxRQUFRLEdBQUcsb0JBQW9CLHNGQUFzRiw0QkFBNEIsY0FBYyxXQUFXLHlEQUF5RCxHQUFHLHVCQUF1QixrRUFBa0UsS0FBSyxHQUFHLHNCQUFzQiw0QkFBNEIsS0FBSyxJQUFJLDJDQUEyQyxnQkFBZ0IsK0NBQStDLHVCQUF1QixzQ0FBc0MscUpBQXFKLDZCQUE2Qiw0QkFBNEIsb0JBQW9CLHdCQUF3QixvQkFBb0IscUJBQXFCLEtBQUssWUFBWSw4QkFBOEIsWUFBWSx5Q0FBeUMsd0RBQXdELEdBQUcsNkNBQTZDLGlDQUFpQyxpQkFBaUIsR0FBRyw0QkFBNEIsS0FBSyxrQkFBa0IsR0FBRyxrQkFBa0IsUUFBUSxtREFBbUQsNkJBQTZCLDRDQUE0QyxpRUFBaUUseUVBQXlFLDZCQUE2Qix3QkFBd0IsMkJBQTJCLGlCQUFpQixLQUFLLGdCQUFnQix5RUFBeUUsMEVBQTBFLHlCQUF5QixtREFBbUQsZ0NBQWdDLEVBQUUsdUNBQXVDLG1DQUFtQyxzREFBc0QsMkNBQTJDLHNEQUFzRCwyQ0FBMkMsNEJBQTRCLDRHQUE0RyxRQUFRLHlCQUF5QixFQUFFLHlCQUF5Qiw0QkFBNEIsa0JBQWtCLHNDQUFzQyxLQUFLLFFBQVEsc0JBQXNCLFNBQVMsRUFBRSx3RUFBd0UsaUNBQWlDLEVBQUUseUJBQXlCLFVBQVUsWUFBWSxHQUFHLEdBQUcsZ0JBQWdCLGdCQUFnQixxQ0FBcUMsU0FBUyxxRUFBcUUsNExBQTRMLGdCQUFnQiw2TUFBNk0sU0FBUyxxREFBcUQsT0FBTywwQ0FBMEMsdUJBQXVCLFlBQVksTUFBTSxFQUFFLGlCQUFpQixJQUFJLFlBQVksZ0NBQWdDLGlEQUFpRCx3QkFBd0IsdUJBQXVCLGdCQUFnQixNQUFNLEVBQUUsYUFBYSxHQUFHLGdCQUFnQixrR0FBa0csOERBQThELG9NQUFvTSxTQUFTLE9BQU8sWUFBWSxhQUFhLGdCQUFnQixvRUFBb0UsK01BQStNLGNBQWMseUdBQXlHLHNEQUFzRCxvREFBb0QsWUFBWSxLQUFLLDhCQUE4QixjQUFjLGdGQUFnRix3QkFBd0IsRUFBRSxJQUFJLGdDQUFnQyxxQ0FBcUMsNk5BQTZOLDREQUE0RCxZQUFZLCtEQUErRCw2REFBNkQsaUVBQWlFLFVBQVUsVUFBVSx5QkFBeUIsbUJBQW1CLElBQUksdUNBQXVDLFNBQVMsa0JBQWtCLDBDQUEwQyxvRUFBb0Usb0JBQW9CLHVDQUF1QyxnSEFBZ0gsc0ZBQXNGLElBQUksTUFBTSw2QkFBNkIsR0FBRyxzQkFBc0IsNERBQTRELElBQUksU0FBUyw2REFBNkQ7Ozs7OztVQ0QxOFY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBNkM7QUFDTjtBQUNNO0FBQ3ZCOztBQUV0QixlQUFlLDREQUFZO0FBQzNCLGFBQWEsd0RBQVU7QUFDdkIsZUFBZSw0REFBWTtBQUMzQjtBQUNBO0FBQ0E7QUFDQSx5QiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21tb25Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbW1vbkhlYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaG9tZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2tpdC5mb250YXdlc29tZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCp7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG5cbmJvZHl7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIFxufVxuXG5oZWFkZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAyNHB4IDMycHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgcGxhY2Utc2VsZjogY2VudGVyIHN0cmV0Y2g7XG59XG5cbmgxe1xuICAgIHBsYWNlLXNlbGY6IGNlbnRlciBzdGFydDtcbiAgICBmb250LXNpemU6IDU0cHg7XG59XG5cbmhlYWRlciB1bHtcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXIgZW5kO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDI0cHg7XG59XG5cbmhlYWRlciB1bD5saXtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5oZWFkZXIgdWw+bGk6aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5tYWlue1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xuICAgIGdhcDogNTRweDtcbn1cblxuLnNpZGViYXJ7XG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcbn1cblxuLnRhc2staG9sZGVyXG57XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGdhcDogMjBweDtcbiAgICBtaW4td2lkdGg6IDM0NXB4O1xufVxuXG4udGFzay1oZWFkZXJcbntcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgcGxhY2Utc2VsZjogc3RhcnQ7XG59XG5cbi50YXNre1xuICAgIGhlaWdodDogNzJweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDIwMGZyIDFmcjtcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgICBnYXA6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4udGFzay1tYXJrZXJ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXIgc3RhcnQ7XG59XG5cbi50YXNrLWNvbnRlbnR7XG4gICAgcGxhY2Utc2VsZjogY2VudGVyIHN0YXJ0O1xufVxuXG4udGFzay1wYXJhbWV0ZXJze1xuICAgIHBsYWNlLXNlbGY6IGNlbnRlciBlbmQ7XG59XG5cbi50YXNrLWNvbnRlbnQsXG4udGFzay1wYXJhbWV0ZXJzXG57XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZ2FwOiA0cHg7XG59XG5cbi50YXNrLXRpdGxle1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG59XG5cbi50YXNrLWRlc2NyaXB0aW9ue1xuICAgIGhlaWdodDogMThweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi50YXNrLXBhcmFtZXRlcnN7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ud29ya3NwYWNlLWhvbGRlcntcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDIwcHg7XG59XG5cbi53b3Jrc3BhY2UtaGVhZGVye1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zcGFjZS1jb250ZW50e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xufVxuXG4uc3BhY2V7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zcGFjZS10aXRsZXtcbiAgICBmb250LXNpemU6IDMycHg7XG59XG5cbi5hZGQtdGFzazo6YmVmb3Jle1xuICAgIGNvbnRlbnQ6ICcrICc7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWRkLXRhc2t7XG4gICAgZ3JpZC1jb2x1bW46IDEvMztcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjksIDI1MywgMjQ4KTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuXG4uYWRkLXRhc2s6aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg1LCAyNTUsIDI0NCk7XG59XG5cbmZvb3RlcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiA3cHg7XG59XG5cbi5mYWJ7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5mYWI6aG92ZXJ7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjEpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw4QkFBOEI7O0FBRWxDOztBQUVBO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBOzs7SUFHSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFlBQVk7SUFDWiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbmJvZHl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgXFxufVxcblxcbmhlYWRlcntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDI0cHggMzJweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXIgc3RyZXRjaDtcXG59XFxuXFxuaDF7XFxuICAgIHBsYWNlLXNlbGY6IGNlbnRlciBzdGFydDtcXG4gICAgZm9udC1zaXplOiA1NHB4O1xcbn1cXG5cXG5oZWFkZXIgdWx7XFxuICAgIHBsYWNlLXNlbGY6IGNlbnRlciBlbmQ7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjRweDtcXG59XFxuXFxuaGVhZGVyIHVsPmxpe1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciB1bD5saTpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5tYWlue1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgICBnYXA6IDU0cHg7XFxufVxcblxcbi5zaWRlYmFye1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbn1cXG5cXG4udGFzay1ob2xkZXJcXG57XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgbWluLXdpZHRoOiAzNDVweDtcXG59XFxuXFxuLnRhc2staGVhZGVyXFxue1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIHBsYWNlLXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG4udGFza3tcXG4gICAgaGVpZ2h0OiA3MnB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyMDBmciAxZnI7XFxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLnRhc2stbWFya2Vye1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIHBsYWNlLXNlbGY6IGNlbnRlciBzdGFydDtcXG59XFxuXFxuLnRhc2stY29udGVudHtcXG4gICAgcGxhY2Utc2VsZjogY2VudGVyIHN0YXJ0O1xcbn1cXG5cXG4udGFzay1wYXJhbWV0ZXJze1xcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXIgZW5kO1xcbn1cXG5cXG4udGFzay1jb250ZW50LFxcbi50YXNrLXBhcmFtZXRlcnNcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDRweDtcXG59XFxuXFxuLnRhc2stdGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4udGFzay1kZXNjcmlwdGlvbntcXG4gICAgaGVpZ2h0OiAxOHB4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi50YXNrLXBhcmFtZXRlcnN7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLndvcmtzcGFjZS1ob2xkZXJ7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLndvcmtzcGFjZS1oZWFkZXJ7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zcGFjZS1jb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5zcGFjZXtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc3BhY2UtdGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG59XFxuXFxuLmFkZC10YXNrOjpiZWZvcmV7XFxuICAgIGNvbnRlbnQ6ICcrICc7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFkZC10YXNre1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgcGxhY2Utc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY5LCAyNTMsIDI0OCk7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuLmFkZC10YXNrOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4NSwgMjU1LCAyNDQpO1xcbn1cXG5cXG5mb290ZXJ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDdweDtcXG59XFxuXFxuLmZhYntcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZmFiOmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuMSk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9raXQuZm9udGF3ZXNvbWUuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVGb290ZXIoKXtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBmb290ZXIudGV4dENvbnRlbnQgPSBgQ29weXJpZ2h0IMKpICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBIYXJzaGFsU2hpcm90ZWA7XG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBhLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL0hhcnNoYWxzaGlyb3RlMjAwMic7XG4gICAgYS50YXJnZXQgPSAnX2JsYW5rJztcbiAgICBjb25zdCBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIGkuY2xhc3NMaXN0LmFkZCgnZmFiJyk7XG4gICAgaS5jbGFzc0xpc3QuYWRkKCdmYS1naXRodWInKTtcbiAgICBpLmFyaWFIaWRkZW4gPSB0cnVlO1xuICAgIGEuYXBwZW5kQ2hpbGQoaSk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGEpO1xuICAgIHJldHVybiBmb290ZXI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCl7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGgxLnRleHRDb250ZW50ID0gJ1F1ZXN0UXVldWUnO1xuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgaG9tZS50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICBjb250YWN0LnRleHRDb250ZW50ID0gJ0NvbnRhY3QgdXMnO1xuICAgIGFib3V0LnRleHRDb250ZW50ID0gJ0Fib3V0JztcbiAgICBsaW5rcy5hcHBlbmQoaG9tZSwgY29udGFjdCwgYWJvdXQpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoMSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxpbmtzKTtcbiAgICByZXR1cm4gaGVhZGVyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUhvbWUoKXtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzaWRlYmFySGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHNpZGViYXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGFza0hvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRhc2tIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGFza0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJyk7XG4gICAgc2lkZWJhckhlYWQuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1oZWFkZXInKTtcbiAgICBzaWRlYmFySGVhZC50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgICBzaWRlYmFyQ29udGVudC5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWNvbnRlbnQnKTtcbiAgICB0YXNrSG9sZGVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2staG9sZGVyJyk7XG4gICAgdGFza0hlYWQuY2xhc3NMaXN0LmFkZCgndGFzay1oZWFkZXInKTtcbiAgICB0YXNrSGVhZC50ZXh0Q29udGVudCA9ICdUYXNrcyc7XG4gICAgdGFza0NvbnRlbnQuY2xhc3NMaXN0LmFkZCgndGFzay1jb250ZW50Jyk7XG4gICAgYWRkVGFzay5jbGFzc0xpc3QuYWRkKCdhZGQtdGFzaycpXG5cbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHNpZGViYXJIZWFkKTtcbiAgICB0YXNrSG9sZGVyLmFwcGVuZENoaWxkKHRhc2tIZWFkKTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICBjb25zdCBzcGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgc3BhY2UuY2xhc3NMaXN0LmFkZCgnc3BhY2UnKTtcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnc3BhY2UtdGl0bGUnKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSAndGl0bGUnO1xuICAgICAgICBzcGFjZS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIHNpZGViYXJDb250ZW50LmFwcGVuZENoaWxkKHNwYWNlKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBtYXJrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBwYXJhbWV0ZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgZGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgICAgICAgdGFzay5jbGFzc0xpc3QuYWRkKGAke2l9YCk7XG4gICAgICAgIG1hcmtlci5jbGFzc0xpc3QuYWRkKGB0YXNrLW1hcmtlcmApO1xuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGVudCcpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrLXRpdGxlJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGVzY3JpcHRpb24nKTtcbiAgICAgICAgcGFyYW1ldGVycy5jbGFzc0xpc3QuYWRkKCd0YXNrLXBhcmFtZXRlcnMnKTtcbiAgICAgICAgZGVhZGxpbmUuY2xhc3NMaXN0LmFkZCgndGFzay1kZWFkbGluZScpO1xuICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0YXNrLXByaW9yaXR5Jyk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ3RpdGxlJztcbiAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnZGVzY3JpcHRpb24nO1xuICAgICAgICBkZWFkbGluZS50ZXh0Q29udGVudCA9ICdkLi4uJztcbiAgICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSAncC4uLic7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kKHRpdGxlLCBkZXNjcmlwdGlvbik7XG4gICAgICAgIHBhcmFtZXRlcnMuYXBwZW5kKGRlYWRsaW5lLCBwcmlvcml0eSk7XG4gICAgICAgIHRhc2suYXBwZW5kKG1hcmtlciwgY29udGVudCwgcGFyYW1ldGVycyk7XG4gICAgICAgIHRhc2tIb2xkZXIuYXBwZW5kQ2hpbGQodGFzayk7XG4gICAgfVxuXG4gICAgXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyQ29udGVudCk7XG4gICAgbWFpbi5hcHBlbmQoc2lkZWJhciwgdGFza0hvbGRlciwgYWRkVGFzayk7XG4gICAgcmV0dXJuIG1haW47XG59Iiwid2luZG93LkZvbnRBd2Vzb21lS2l0Q29uZmlnID0ge1wiYXN5bmNMb2FkaW5nXCI6e1wiZW5hYmxlZFwiOmZhbHNlfSxcImF1dG9BMTF5XCI6e1wiZW5hYmxlZFwiOnRydWV9LFwiYmFzZVVybFwiOlwiaHR0cHM6Ly9rYS1mLmZvbnRhd2Vzb21lLmNvbVwiLFwiYmFzZVVybEtpdFwiOlwiaHR0cHM6Ly9raXQuZm9udGF3ZXNvbWUuY29tXCIsXCJkZXRlY3RDb25mbGljdHNVbnRpbFwiOm51bGwsXCJpY29uVXBsb2Fkc1wiOnt9LFwiaWRcIjo4MDc2MjY3MyxcImxpY2Vuc2VcIjpcImZyZWVcIixcIm1ldGhvZFwiOlwiY3NzXCIsXCJtaW5pZnlcIjp7XCJlbmFibGVkXCI6dHJ1ZX0sXCJ0b2tlblwiOlwiNGM1MzZhNmJkNVwiLFwidjRGb250RmFjZVNoaW1cIjp7XCJlbmFibGVkXCI6dHJ1ZX0sXCJ2NHNoaW1cIjp7XCJlbmFibGVkXCI6dHJ1ZX0sXCJ2NUZvbnRGYWNlU2hpbVwiOntcImVuYWJsZWRcIjpmYWxzZX0sXCJ2ZXJzaW9uXCI6XCI1LjE1LjRcIn07XG4hZnVuY3Rpb24odCl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcImtpdC1sb2FkZXJcIix0KTp0KCl9KChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHQodCxlKXt2YXIgbj1PYmplY3Qua2V5cyh0KTtpZihPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHQpO2UmJihyPXIuZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LGUpLmVudW1lcmFibGV9KSkpLG4ucHVzaC5hcHBseShuLHIpfXJldHVybiBufWZ1bmN0aW9uIGUoZSl7Zm9yKHZhciBuPTE7bjxhcmd1bWVudHMubGVuZ3RoO24rKyl7dmFyIG89bnVsbCE9YXJndW1lbnRzW25dP2FyZ3VtZW50c1tuXTp7fTtuJTI/dChPYmplY3QobyksITApLmZvckVhY2goKGZ1bmN0aW9uKHQpe3IoZSx0LG9bdF0pfSkpOk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzP09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGUsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMobykpOnQoT2JqZWN0KG8pKS5mb3JFYWNoKChmdW5jdGlvbih0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iobyx0KSl9KSl9cmV0dXJuIGV9ZnVuY3Rpb24gbih0KXtyZXR1cm4obj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24odCl7cmV0dXJuIHR5cGVvZiB0fTpmdW5jdGlvbih0KXtyZXR1cm4gdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZ0LmNvbnN0cnVjdG9yPT09U3ltYm9sJiZ0IT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiB0fSkodCl9ZnVuY3Rpb24gcih0LGUsbil7cmV0dXJuKGU9ZnVuY3Rpb24odCl7dmFyIGU9ZnVuY3Rpb24odCxlKXtpZihcIm9iamVjdFwiIT10eXBlb2YgdHx8bnVsbD09PXQpcmV0dXJuIHQ7dmFyIG49dFtTeW1ib2wudG9QcmltaXRpdmVdO2lmKHZvaWQgMCE9PW4pe3ZhciByPW4uY2FsbCh0LGV8fFwiZGVmYXVsdFwiKTtpZihcIm9iamVjdFwiIT10eXBlb2YgcilyZXR1cm4gcjt0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIil9cmV0dXJuKFwic3RyaW5nXCI9PT1lP1N0cmluZzpOdW1iZXIpKHQpfSh0LFwic3RyaW5nXCIpO3JldHVyblwic3ltYm9sXCI9PXR5cGVvZiBlP2U6U3RyaW5nKGUpfShlKSlpbiB0P09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGUse3ZhbHVlOm4sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTp0W2VdPW4sdH1mdW5jdGlvbiBvKHQsZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe2lmKEFycmF5LmlzQXJyYXkodCkpcmV0dXJuIHR9KHQpfHxmdW5jdGlvbih0LGUpe3ZhciBuPW51bGw9PXQ/bnVsbDpcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZ0W1N5bWJvbC5pdGVyYXRvcl18fHRbXCJAQGl0ZXJhdG9yXCJdO2lmKG51bGwhPW4pe3ZhciByLG8saSxjLGE9W10sdT0hMCxmPSExO3RyeXtpZihpPShuPW4uY2FsbCh0KSkubmV4dCwwPT09ZSl7aWYoT2JqZWN0KG4pIT09bilyZXR1cm47dT0hMX1lbHNlIGZvcig7ISh1PShyPWkuY2FsbChuKSkuZG9uZSkmJihhLnB1c2goci52YWx1ZSksYS5sZW5ndGghPT1lKTt1PSEwKTt9Y2F0Y2godCl7Zj0hMCxvPXR9ZmluYWxseXt0cnl7aWYoIXUmJm51bGwhPW4ucmV0dXJuJiYoYz1uLnJldHVybigpLE9iamVjdChjKSE9PWMpKXJldHVybn1maW5hbGx5e2lmKGYpdGhyb3cgb319cmV0dXJuIGF9fSh0LGUpfHxmdW5jdGlvbih0LGUpe2lmKCF0KXJldHVybjtpZihcInN0cmluZ1wiPT10eXBlb2YgdClyZXR1cm4gaSh0LGUpO3ZhciBuPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KS5zbGljZSg4LC0xKTtcIk9iamVjdFwiPT09biYmdC5jb25zdHJ1Y3RvciYmKG49dC5jb25zdHJ1Y3Rvci5uYW1lKTtpZihcIk1hcFwiPT09bnx8XCJTZXRcIj09PW4pcmV0dXJuIEFycmF5LmZyb20odCk7aWYoXCJBcmd1bWVudHNcIj09PW58fC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKXJldHVybiBpKHQsZSl9KHQsZSl8fGZ1bmN0aW9uKCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKX0oKX1mdW5jdGlvbiBpKHQsZSl7KG51bGw9PWV8fGU+dC5sZW5ndGgpJiYoZT10Lmxlbmd0aCk7Zm9yKHZhciBuPTAscj1uZXcgQXJyYXkoZSk7bjxlO24rKylyW25dPXRbbl07cmV0dXJuIHJ9ZnVuY3Rpb24gYyh0LGUpe3ZhciBuPWUmJmUuYWRkT258fFwiXCIscj1lJiZlLmJhc2VGaWxlbmFtZXx8dC5saWNlbnNlK24sbz1lJiZlLm1pbmlmeT9cIi5taW5cIjpcIlwiLGk9ZSYmZS5maWxlU3VmZml4fHx0Lm1ldGhvZCxjPWUmJmUuc3ViZGlyfHx0Lm1ldGhvZDtyZXR1cm4gdC5iYXNlVXJsK1wiL3JlbGVhc2VzL1wiKyhcImxhdGVzdFwiPT09dC52ZXJzaW9uP1wibGF0ZXN0XCI6XCJ2XCIuY29uY2F0KHQudmVyc2lvbikpK1wiL1wiK2MrXCIvXCIrcitvK1wiLlwiK2l9ZnVuY3Rpb24gYSh0LGUpe3ZhciBuPWV8fFtcImZhXCJdLHI9XCIuXCIrQXJyYXkucHJvdG90eXBlLmpvaW4uY2FsbChuLFwiLC5cIiksbz10LnF1ZXJ5U2VsZWN0b3JBbGwocik7QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChvLChmdW5jdGlvbihlKXt2YXIgbj1lLmdldEF0dHJpYnV0ZShcInRpdGxlXCIpO2Uuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIixcInRydWVcIik7dmFyIHI9IWUubmV4dEVsZW1lbnRTaWJsaW5nfHwhZS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3Itb25seVwiKTtpZihuJiZyKXt2YXIgbz10LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO28uaW5uZXJIVE1MPW4sby5jbGFzc0xpc3QuYWRkKFwic3Itb25seVwiKSxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG8sZS5uZXh0U2libGluZyl9fSkpfXZhciB1LGY9ZnVuY3Rpb24oKXt9LHM9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbCYmdm9pZCAwIT09Z2xvYmFsLnByb2Nlc3MmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGdsb2JhbC5wcm9jZXNzLmVtaXQsbD1cInVuZGVmaW5lZFwiPT10eXBlb2Ygc2V0SW1tZWRpYXRlP3NldFRpbWVvdXQ6c2V0SW1tZWRpYXRlLGQ9W107ZnVuY3Rpb24gaCgpe2Zvcih2YXIgdD0wO3Q8ZC5sZW5ndGg7dCsrKWRbdF1bMF0oZFt0XVsxXSk7ZD1bXSx1PSExfWZ1bmN0aW9uIG0odCxlKXtkLnB1c2goW3QsZV0pLHV8fCh1PSEwLGwoaCwwKSl9ZnVuY3Rpb24gcCh0KXt2YXIgZT10Lm93bmVyLG49ZS5fc3RhdGUscj1lLl9kYXRhLG89dFtuXSxpPXQudGhlbjtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBvKXtuPVwiZnVsZmlsbGVkXCI7dHJ5e3I9byhyKX1jYXRjaCh0KXtnKGksdCl9fXYoaSxyKXx8KFwiZnVsZmlsbGVkXCI9PT1uJiZiKGksciksXCJyZWplY3RlZFwiPT09biYmZyhpLHIpKX1mdW5jdGlvbiB2KHQsZSl7dmFyIHI7dHJ5e2lmKHQ9PT1lKXRocm93IG5ldyBUeXBlRXJyb3IoXCJBIHByb21pc2VzIGNhbGxiYWNrIGNhbm5vdCByZXR1cm4gdGhhdCBzYW1lIHByb21pc2UuXCIpO2lmKGUmJihcImZ1bmN0aW9uXCI9PXR5cGVvZiBlfHxcIm9iamVjdFwiPT09bihlKSkpe3ZhciBvPWUudGhlbjtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBvKXJldHVybiBvLmNhbGwoZSwoZnVuY3Rpb24obil7cnx8KHI9ITAsZT09PW4/eSh0LG4pOmIodCxuKSl9KSwoZnVuY3Rpb24oZSl7cnx8KHI9ITAsZyh0LGUpKX0pKSwhMH19Y2F0Y2goZSl7cmV0dXJuIHJ8fGcodCxlKSwhMH1yZXR1cm4hMX1mdW5jdGlvbiBiKHQsZSl7dCE9PWUmJnYodCxlKXx8eSh0LGUpfWZ1bmN0aW9uIHkodCxlKXtcInBlbmRpbmdcIj09PXQuX3N0YXRlJiYodC5fc3RhdGU9XCJzZXR0bGVkXCIsdC5fZGF0YT1lLG0oQSx0KSl9ZnVuY3Rpb24gZyh0LGUpe1wicGVuZGluZ1wiPT09dC5fc3RhdGUmJih0Ll9zdGF0ZT1cInNldHRsZWRcIix0Ll9kYXRhPWUsbShTLHQpKX1mdW5jdGlvbiB3KHQpe3QuX3RoZW49dC5fdGhlbi5mb3JFYWNoKHApfWZ1bmN0aW9uIEEodCl7dC5fc3RhdGU9XCJmdWxmaWxsZWRcIix3KHQpfWZ1bmN0aW9uIFModCl7dC5fc3RhdGU9XCJyZWplY3RlZFwiLHcodCksIXQuX2hhbmRsZWQmJnMmJmdsb2JhbC5wcm9jZXNzLmVtaXQoXCJ1bmhhbmRsZWRSZWplY3Rpb25cIix0Ll9kYXRhLHQpfWZ1bmN0aW9uIE8odCl7Z2xvYmFsLnByb2Nlc3MuZW1pdChcInJlamVjdGlvbkhhbmRsZWRcIix0KX1mdW5jdGlvbiBqKHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByb21pc2UgcmVzb2x2ZXIgXCIrdCtcIiBpcyBub3QgYSBmdW5jdGlvblwiKTtpZih0aGlzIGluc3RhbmNlb2Ygaj09ITEpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBjb25zdHJ1Y3QgJ1Byb21pc2UnOiBQbGVhc2UgdXNlIHRoZSAnbmV3JyBvcGVyYXRvciwgdGhpcyBvYmplY3QgY29uc3RydWN0b3IgY2Fubm90IGJlIGNhbGxlZCBhcyBhIGZ1bmN0aW9uLlwiKTt0aGlzLl90aGVuPVtdLGZ1bmN0aW9uKHQsZSl7ZnVuY3Rpb24gbih0KXtnKGUsdCl9dHJ5e3QoKGZ1bmN0aW9uKHQpe2IoZSx0KX0pLG4pfWNhdGNoKHQpe24odCl9fSh0LHRoaXMpfWoucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpqLF9zdGF0ZTpcInBlbmRpbmdcIixfdGhlbjpudWxsLF9kYXRhOnZvaWQgMCxfaGFuZGxlZDohMSx0aGVuOmZ1bmN0aW9uKHQsZSl7dmFyIG49e293bmVyOnRoaXMsdGhlbjpuZXcgdGhpcy5jb25zdHJ1Y3RvcihmKSxmdWxmaWxsZWQ6dCxyZWplY3RlZDplfTtyZXR1cm4hZSYmIXR8fHRoaXMuX2hhbmRsZWR8fCh0aGlzLl9oYW5kbGVkPSEwLFwicmVqZWN0ZWRcIj09PXRoaXMuX3N0YXRlJiZzJiZtKE8sdGhpcykpLFwiZnVsZmlsbGVkXCI9PT10aGlzLl9zdGF0ZXx8XCJyZWplY3RlZFwiPT09dGhpcy5fc3RhdGU/bShwLG4pOnRoaXMuX3RoZW4ucHVzaChuKSxuLnRoZW59LGNhdGNoOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnRoZW4obnVsbCx0KX19LGouYWxsPWZ1bmN0aW9uKHQpe2lmKCFBcnJheS5pc0FycmF5KHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJZb3UgbXVzdCBwYXNzIGFuIGFycmF5IHRvIFByb21pc2UuYWxsKCkuXCIpO3JldHVybiBuZXcgaigoZnVuY3Rpb24oZSxuKXt2YXIgcj1bXSxvPTA7ZnVuY3Rpb24gaSh0KXtyZXR1cm4gbysrLGZ1bmN0aW9uKG4pe3JbdF09biwtLW98fGUocil9fWZvcih2YXIgYyxhPTA7YTx0Lmxlbmd0aDthKyspKGM9dFthXSkmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGMudGhlbj9jLnRoZW4oaShhKSxuKTpyW2FdPWM7b3x8ZShyKX0pKX0sai5yYWNlPWZ1bmN0aW9uKHQpe2lmKCFBcnJheS5pc0FycmF5KHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJZb3UgbXVzdCBwYXNzIGFuIGFycmF5IHRvIFByb21pc2UucmFjZSgpLlwiKTtyZXR1cm4gbmV3IGooKGZ1bmN0aW9uKGUsbil7Zm9yKHZhciByLG89MDtvPHQubGVuZ3RoO28rKykocj10W29dKSYmXCJmdW5jdGlvblwiPT10eXBlb2Ygci50aGVuP3IudGhlbihlLG4pOmUocil9KSl9LGoucmVzb2x2ZT1mdW5jdGlvbih0KXtyZXR1cm4gdCYmXCJvYmplY3RcIj09PW4odCkmJnQuY29uc3RydWN0b3I9PT1qP3Q6bmV3IGooKGZ1bmN0aW9uKGUpe2UodCl9KSl9LGoucmVqZWN0PWZ1bmN0aW9uKHQpe3JldHVybiBuZXcgaigoZnVuY3Rpb24oZSxuKXtuKHQpfSkpfTt2YXIgRT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBQcm9taXNlP1Byb21pc2U6ajtmdW5jdGlvbiBQKHQsZSl7dmFyIG49ZS5mZXRjaCxyPWUuWE1MSHR0cFJlcXVlc3Qsbz1lLnRva2VuLGk9dDtyZXR1cm4gbyYmIWZ1bmN0aW9uKHQpe3JldHVybiB0LmluZGV4T2YoXCJraXQtdXBsb2FkLmNzc1wiKT4tMX0odCkmJihcIlVSTFNlYXJjaFBhcmFtc1wiaW4gd2luZG93PyhpPW5ldyBVUkwodCkpLnNlYXJjaFBhcmFtcy5zZXQoXCJ0b2tlblwiLG8pOmk9aStcIj90b2tlbj1cIitlbmNvZGVVUklDb21wb25lbnQobykpLGk9aS50b1N0cmluZygpLG5ldyBFKChmdW5jdGlvbih0LGUpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIG4pbihpLHttb2RlOlwiY29yc1wiLGNhY2hlOlwiZGVmYXVsdFwifSkudGhlbigoZnVuY3Rpb24odCl7aWYodC5vaylyZXR1cm4gdC50ZXh0KCk7dGhyb3cgbmV3IEVycm9yKFwiXCIpfSkpLnRoZW4oKGZ1bmN0aW9uKGUpe3QoZSl9KSkuY2F0Y2goZSk7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiByKXt2YXIgbz1uZXcgcjtvLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkZW5kXCIsKGZ1bmN0aW9uKCl7dGhpcy5yZXNwb25zZVRleHQ/dCh0aGlzLnJlc3BvbnNlVGV4dCk6ZShuZXcgRXJyb3IoXCJcIikpfSkpO1tcImFib3J0XCIsXCJlcnJvclwiLFwidGltZW91dFwiXS5tYXAoKGZ1bmN0aW9uKHQpe28uYWRkRXZlbnRMaXN0ZW5lcih0LChmdW5jdGlvbigpe2UobmV3IEVycm9yKFwiXCIpKX0pKX0pKSxvLm9wZW4oXCJHRVRcIixpKSxvLnNlbmQoKX1lbHNle2UobmV3IEVycm9yKFwiXCIpKX19KSl9ZnVuY3Rpb24gXyh0LGUsbil7dmFyIHI9dDtyZXR1cm5bWy8odXJsXFwoXCI/KVxcLlxcLlxcL1xcLlxcLlxcL1xcLlxcLi9nLGZ1bmN0aW9uKHQsbil7cmV0dXJuXCJcIi5jb25jYXQobikuY29uY2F0KGUpfV0sWy8odXJsXFwoXCI/KVxcLlxcLlxcL3dlYmZvbnRzL2csZnVuY3Rpb24odCxyKXtyZXR1cm5cIlwiLmNvbmNhdChyKS5jb25jYXQoZSxcIi9yZWxlYXNlcy92XCIpLmNvbmNhdChuLFwiL3dlYmZvbnRzXCIpfV0sWy8odXJsXFwoXCI/KWh0dHBzOlxcL1xcL2tpdC1mcmVlKFteLl0pKlxcLmZvbnRhd2Vzb21lXFwuY29tL2csZnVuY3Rpb24odCxuKXtyZXR1cm5cIlwiLmNvbmNhdChuKS5jb25jYXQoZSl9XV0uZm9yRWFjaCgoZnVuY3Rpb24odCl7dmFyIGU9byh0LDIpLG49ZVswXSxpPWVbMV07cj1yLnJlcGxhY2UobixpKX0pKSxyfWZ1bmN0aW9uIEYodCxuKXt2YXIgcj1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06ZnVuY3Rpb24oKXt9LG89bi5kb2N1bWVudHx8byxpPWEuYmluZChhLG8sW1wiZmFcIixcImZhYlwiLFwiZmFzXCIsXCJmYXJcIixcImZhbFwiLFwiZmFkXCIsXCJmYWtcIl0pO3QuYXV0b0ExMXkuZW5hYmxlZCYmcihpKTt2YXIgdT10LnN1YnNldFBhdGgmJnQuYmFzZVVybCtcIi9cIit0LnN1YnNldFBhdGgsZj1be2lkOlwiZmEtbWFpblwiLGFkZE9uOnZvaWQgMCx1cmw6dX1dO2lmKHQudjRzaGltJiZ0LnY0c2hpbS5lbmFibGVkJiZmLnB1c2goe2lkOlwiZmEtdjQtc2hpbXNcIixhZGRPbjpcIi12NC1zaGltc1wifSksdC52NUZvbnRGYWNlU2hpbSYmdC52NUZvbnRGYWNlU2hpbS5lbmFibGVkJiZmLnB1c2goe2lkOlwiZmEtdjUtZm9udC1mYWNlXCIsYWRkT246XCItdjUtZm9udC1mYWNlXCJ9KSx0LnY0Rm9udEZhY2VTaGltJiZ0LnY0Rm9udEZhY2VTaGltLmVuYWJsZWQmJmYucHVzaCh7aWQ6XCJmYS12NC1mb250LWZhY2VcIixhZGRPbjpcIi12NC1mb250LWZhY2VcIn0pLCF1JiZ0LmN1c3RvbUljb25zQ3NzUGF0aCl7dmFyIHM9dC5jdXN0b21JY29uc0Nzc1BhdGguaW5kZXhPZihcImtpdC11cGxvYWQuY3NzXCIpPi0xP3QuYmFzZVVybEtpdDp0LmJhc2VVcmwsbD1zK1wiL1wiK3QuY3VzdG9tSWNvbnNDc3NQYXRoO2YucHVzaCh7aWQ6XCJmYS1raXQtdXBsb2FkXCIsdXJsOmx9KX12YXIgZD1mLm1hcCgoZnVuY3Rpb24ocil7cmV0dXJuIG5ldyBFKChmdW5jdGlvbihvLGkpe3ZhciBhPXIudXJsfHxjKHQse2FkZE9uOnIuYWRkT24sbWluaWZ5OnQubWluaWZ5LmVuYWJsZWR9KSx1PXtpZDpyLmlkfSxmPXQuc3Vic2V0P3U6ZShlKGUoe30sbiksdSkse30se2Jhc2VVcmw6dC5iYXNlVXJsLHZlcnNpb246dC52ZXJzaW9uLGlkOnIuaWQsY29udGVudEZpbHRlcjpmdW5jdGlvbih0LGUpe3JldHVybiBfKHQsZS5iYXNlVXJsLGUudmVyc2lvbil9fSk7UChhLG4pLnRoZW4oKGZ1bmN0aW9uKHQpe28oQyh0LGYpKX0pKS5jYXRjaChpKX0pKX0pKTtyZXR1cm4gRS5hbGwoZCl9ZnVuY3Rpb24gQyh0LGUpe3ZhciBuPWUuY29udGVudEZpbHRlcnx8ZnVuY3Rpb24odCxlKXtyZXR1cm4gdH0scj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiksbz1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuKHQsZSkpO3JldHVybiByLmFwcGVuZENoaWxkKG8pLHIubWVkaWE9XCJhbGxcIixlLmlkJiZyLnNldEF0dHJpYnV0ZShcImlkXCIsZS5pZCksZSYmZS5kZXRlY3RpbmdDb25mbGljdHMmJmUuZGV0ZWN0aW9uSWdub3JlQXR0ciYmci5zZXRBdHRyaWJ1dGVOb2RlKGRvY3VtZW50LmNyZWF0ZUF0dHJpYnV0ZShlLmRldGVjdGlvbklnbm9yZUF0dHIpKSxyfWZ1bmN0aW9uIEkodCxuKXtuLmF1dG9BMTF5PXQuYXV0b0ExMXkuZW5hYmxlZCxcInByb1wiPT09dC5saWNlbnNlJiYobi5hdXRvRmV0Y2hTdmc9ITAsbi5mZXRjaFN2Z0Zyb209dC5iYXNlVXJsK1wiL3JlbGVhc2VzL1wiKyhcImxhdGVzdFwiPT09dC52ZXJzaW9uP1wibGF0ZXN0XCI6XCJ2XCIuY29uY2F0KHQudmVyc2lvbikpK1wiL3N2Z3NcIixuLmZldGNoVXBsb2FkZWRTdmdGcm9tPXQudXBsb2Fkc1VybCk7dmFyIHI9W107cmV0dXJuIHQudjRzaGltLmVuYWJsZWQmJnIucHVzaChuZXcgRSgoZnVuY3Rpb24ocixvKXtQKGModCx7YWRkT246XCItdjQtc2hpbXNcIixtaW5pZnk6dC5taW5pZnkuZW5hYmxlZH0pLG4pLnRoZW4oKGZ1bmN0aW9uKHQpe3IoVSh0LGUoZSh7fSxuKSx7fSx7aWQ6XCJmYS12NC1zaGltc1wifSkpKX0pKS5jYXRjaChvKX0pKSksci5wdXNoKG5ldyBFKChmdW5jdGlvbihyLG8pe1AodC5zdWJzZXRQYXRoJiZ0LmJhc2VVcmwrXCIvXCIrdC5zdWJzZXRQYXRofHxjKHQse21pbmlmeTp0Lm1pbmlmeS5lbmFibGVkfSksbikudGhlbigoZnVuY3Rpb24odCl7dmFyIG89VSh0LGUoZSh7fSxuKSx7fSx7aWQ6XCJmYS1tYWluXCJ9KSk7cihmdW5jdGlvbih0LGUpe3ZhciBuPWUmJnZvaWQgMCE9PWUuYXV0b0ZldGNoU3ZnP2UuYXV0b0ZldGNoU3ZnOnZvaWQgMCxyPWUmJnZvaWQgMCE9PWUuYXV0b0ExMXk/ZS5hdXRvQTExeTp2b2lkIDA7dm9pZCAwIT09ciYmdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWF1dG8tYTExeVwiLHI/XCJ0cnVlXCI6XCJmYWxzZVwiKTtuJiYodC5zZXRBdHRyaWJ1dGVOb2RlKGRvY3VtZW50LmNyZWF0ZUF0dHJpYnV0ZShcImRhdGEtYXV0by1mZXRjaC1zdmdcIikpLHQuc2V0QXR0cmlidXRlKFwiZGF0YS1mZXRjaC1zdmctZnJvbVwiLGUuZmV0Y2hTdmdGcm9tKSx0LnNldEF0dHJpYnV0ZShcImRhdGEtZmV0Y2gtdXBsb2FkZWQtc3ZnLWZyb21cIixlLmZldGNoVXBsb2FkZWRTdmdGcm9tKSk7cmV0dXJuIHR9KG8sbikpfSkpLmNhdGNoKG8pfSkpKSxFLmFsbChyKX1mdW5jdGlvbiBVKHQsZSl7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNDUklQVFwiKSxyPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHQpO3JldHVybiBuLmFwcGVuZENoaWxkKHIpLG4ucmVmZXJyZXJQb2xpY3k9XCJzdHJpY3Qtb3JpZ2luXCIsZS5pZCYmbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLGUuaWQpLGUmJmUuZGV0ZWN0aW5nQ29uZmxpY3RzJiZlLmRldGVjdGlvbklnbm9yZUF0dHImJm4uc2V0QXR0cmlidXRlTm9kZShkb2N1bWVudC5jcmVhdGVBdHRyaWJ1dGUoZS5kZXRlY3Rpb25JZ25vcmVBdHRyKSksbn1mdW5jdGlvbiBUKHQpe3ZhciBlLG49W10scj1kb2N1bWVudCxvPXIuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsLGk9KG8/L15sb2FkZWR8XmMvOi9ebG9hZGVkfF5pfF5jLykudGVzdChyLnJlYWR5U3RhdGUpO2l8fHIuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixlPWZ1bmN0aW9uKCl7Zm9yKHIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixlKSxpPTE7ZT1uLnNoaWZ0KCk7KWUoKX0pLGk/c2V0VGltZW91dCh0LDApOm4ucHVzaCh0KX1mdW5jdGlvbiBMKHQpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBNdXRhdGlvbk9ic2VydmVyJiZuZXcgTXV0YXRpb25PYnNlcnZlcih0KS5vYnNlcnZlKGRvY3VtZW50LHtjaGlsZExpc3Q6ITAsc3VidHJlZTohMH0pfXRyeXtpZih3aW5kb3cuRm9udEF3ZXNvbWVLaXRDb25maWcpe3ZhciBrPXdpbmRvdy5Gb250QXdlc29tZUtpdENvbmZpZyx4PXtkZXRlY3RpbmdDb25mbGljdHM6ay5kZXRlY3RDb25mbGljdHNVbnRpbCYmbmV3IERhdGU8PW5ldyBEYXRlKGsuZGV0ZWN0Q29uZmxpY3RzVW50aWwpLGRldGVjdGlvbklnbm9yZUF0dHI6XCJkYXRhLWZhLWRldGVjdGlvbi1pZ25vcmVcIixmZXRjaDp3aW5kb3cuZmV0Y2gsdG9rZW46ay50b2tlbixYTUxIdHRwUmVxdWVzdDp3aW5kb3cuWE1MSHR0cFJlcXVlc3QsZG9jdW1lbnQ6ZG9jdW1lbnR9LE09ZG9jdW1lbnQuY3VycmVudFNjcmlwdCxOPU0/TS5wYXJlbnRFbGVtZW50OmRvY3VtZW50LmhlYWQ7KGZ1bmN0aW9uKCl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnt9LGU9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnt9O3JldHVyblwianNcIj09PXQubWV0aG9kP0kodCxlKTpcImNzc1wiPT09dC5tZXRob2Q/Rih0LGUsKGZ1bmN0aW9uKHQpe1QodCksTCh0KX0pKTp2b2lkIDB9KShrLHgpLnRoZW4oKGZ1bmN0aW9uKHQpe3QubWFwKChmdW5jdGlvbih0KXt0cnl7Ti5pbnNlcnRCZWZvcmUodCxNP00ubmV4dFNpYmxpbmc6bnVsbCl9Y2F0Y2goZSl7Ti5hcHBlbmRDaGlsZCh0KX19KSkseC5kZXRlY3RpbmdDb25mbGljdHMmJk0mJlQoKGZ1bmN0aW9uKCl7TS5zZXRBdHRyaWJ1dGVOb2RlKGRvY3VtZW50LmNyZWF0ZUF0dHJpYnV0ZSh4LmRldGVjdGlvbklnbm9yZUF0dHIpKTt2YXIgdD1mdW5jdGlvbih0LGUpe3ZhciBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7cmV0dXJuIGUmJmUuZGV0ZWN0aW9uSWdub3JlQXR0ciYmbi5zZXRBdHRyaWJ1dGVOb2RlKGRvY3VtZW50LmNyZWF0ZUF0dHJpYnV0ZShlLmRldGVjdGlvbklnbm9yZUF0dHIpKSxuLnNyYz1jKHQse2Jhc2VGaWxlbmFtZTpcImNvbmZsaWN0LWRldGVjdGlvblwiLGZpbGVTdWZmaXg6XCJqc1wiLHN1YmRpcjpcImpzXCIsbWluaWZ5OnQubWluaWZ5LmVuYWJsZWR9KSxufShrLHgpO2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodCl9KSl9KSkuY2F0Y2goKGZ1bmN0aW9uKHQpe2NvbnNvbGUuZXJyb3IoXCJcIi5jb25jYXQoXCJGb250IEF3ZXNvbWUgS2l0OlwiLFwiIFwiKS5jb25jYXQodCkpfSkpfX1jYXRjaCh0KXtjb25zb2xlLmVycm9yKFwiXCIuY29uY2F0KFwiRm9udCBBd2Vzb21lIEtpdDpcIixcIiBcIikuY29uY2F0KHQpKX19KSk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgY3JlYXRlSGVhZGVyIGZyb20gXCIuL2NvbW1vbkhlYWRlci5qc1wiO1xuaW1wb3J0IGNyZWF0ZUhvbWUgZnJvbSBcIi4vaG9tZVBhZ2UuanNcIjtcbmltcG9ydCBjcmVhdGVGb290ZXIgZnJvbSBcIi4vY29tbW9uRm9vdGVyLmpzXCI7XG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmNvbnN0IGhlYWRlciA9IGNyZWF0ZUhlYWRlcigpO1xuY29uc3QgbWFpbiA9IGNyZWF0ZUhvbWUoKTtcbmNvbnN0IGZvb3RlciA9IGNyZWF0ZUZvb3RlcigpO1xuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbmJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG5ib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9