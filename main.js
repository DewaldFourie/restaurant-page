/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/myfont.ttf */ \"./src/assets/myfont.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! assets/background.jpg */ \"./src/assets/background.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n@font-face {\\n    font-family: 'myFont';\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('woff');\\n    font-style: normal;\\n    font-weight: bold;\\n}\\n\\nbody {\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n    background-size: cover;\\n    background-repeat: no-repeat;\\n    background-position: center center;\\n    background-attachment: fixed;\\n}\\n\\n#content {\\n    display: grid;\\n    grid-template-rows: 2fr 10fr 0.5fr;\\n    justify-content: center;\\n    position: absolute;\\n    top: 0;\\n    right: 0;\\n    left: 0;\\n    bottom: 0;\\n}\\n\\n/* Page Load Header */\\n\\n.header {\\n    display: flex;\\n    flex-direction: column;\\n    background-color: rgba(0, 0, 0, 0.7);\\n    width: 100vw;\\n    align-items: center;\\n    justify-content: center;\\n    color: aliceblue;\\n    font-family: 'myFont';\\n    font-size: larger;\\n}\\n\\n.navigation {\\n    display: flex;\\n    justify-content: center;\\n    gap: 3rem;\\n}\\n\\n.button-nav {\\n    width: 120px;\\n    height: 30px;\\n    margin-top: 0;\\n    border: none;\\n    background-color: transparent;\\n    color: aliceblue;\\n}\\n\\n.button-nav:hover {\\n    cursor: grab;\\n}\\n\\n.active {\\n    border-bottom: solid;\\n    border-color: aliceblue;\\n}\\n\\n/* Page Load Middle */\\n\\n.main {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    background-color: rgba(0, 0, 0, 0.7);\\n    margin: 10px;\\n    border-radius: 5px;\\n}\\n\\n.holder {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.side-div {\\n    position: absolute;\\n    right: 20px;\\n    height: 200px;\\n    background-color: rgba(0, 0, 0, 0.7);\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-around;\\n    border-radius: 10px;\\n    padding: 5px;\\n}\\n\\n.side-icon {\\n    width: 40px;\\n    height: 40px;\\n    border-radius: 50%;\\n    background-color: rgba(0, 0, 0, 0.7);\\n}\\n\\n.side-icon:hover {\\n    cursor: grab;\\n}\\n\\n/* Page Load Footer */\\n.footer {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    background-color: rgba(0, 0, 0, 0.7);\\n    color: aliceblue;\\n    bottom: 0;\\n}\\n\\n/* Home Module */\\n\\n.home {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    gap:30px;\\n    color: aliceblue;\\n    padding: 20px 80px;\\n    width: 600px;\\n    font-family: 'myFont';\\n}\\n\\n.home-top {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n}\\n\\n.home-top-text {\\n    text-align: center;\\n    width: 30rem;\\n}\\n\\n.home-image {\\n border-radius: 5%;\\n}\\n\\n.home-middle-text {\\n    text-align: center;\\n}\\n\\n/* Contact Module */\\n.contact {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    gap: 30px;\\n    padding: 40px;\\n    font-family: 'myFont';\\n}\\n\\n.contact-header {\\n    color: aliceblue;\\n}\\n\\n.contact-element {\\n    display: flex;\\n    gap: 20px;\\n    align-items: center;\\n    color: aliceblue;\\n}\\n\\n.contact-icon {\\n    width: 30px;\\n    height: 30px;\\n}\\n\\n.maps-element {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    margin-top: 60px;\\n}\\n\\n.maps-image {\\n    width: 300px;\\n    height: 300px;\\n    border-radius: 5px;\\n}\\n\\n/* Menu Module */\\n.menu {\\n    padding: 15px;\\n    display: grid;\\n    grid-template-columns: 1fr 1fr 1fr;\\n    gap: 15px;\\n}\\n\\n.menu-item {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    max-width: 300px;\\n    background-color: rgba(0, 0, 0, 0.5);\\n    border-radius: 5px;\\n}\\n\\n.food-element {\\n    display: flex;\\n    align-items: center;\\n    gap: 10px;\\n    color: aliceblue;\\n}\\n\\n.food-name {\\n    border-right: solid 1px;\\n    padding-right: 10px;\\n}\\n\\n.food-description {\\n    text-align: center;\\n    margin-top: 0;\\n    padding: 0 3px;\\n    color: aliceblue;\\n}\\n\\n.food-image{\\n    height: 200px;\\n    width: 200px;\\n    border-radius: 50%;\\n    margin-top: 9px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_telephone_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/telephone.png */ \"./src/assets/telephone.png\");\n/* harmony import */ var _assets_location_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/location.png */ \"./src/assets/location.png\");\n/* harmony import */ var _assets_orlando_JPG__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/orlando.JPG */ \"./src/assets/orlando.JPG\");\n\n\n\n\nfunction createContact(){\n    const contact = document.createElement(\"div\");\n    contact.classList.add('contact');\n\n    function createContactTop(){\n        const contactHeader = document.createElement('h1');\n        contactHeader.classList.add('contact-header');\n        contactHeader.textContent = 'Contact Us';\n        return contactHeader;\n    }\n\n    function createContactMiddle(){\n        const contactMiddle = document.createElement('div');\n        contactMiddle.classList.add('contact-middle');\n\n        function createPhone(){\n            const phoneDiv = document.createElement('div');\n            phoneDiv.classList.add('contact-element');\n            const phoneIcon = new Image();\n            phoneIcon.classList.add('contact-icon');\n            phoneIcon.src = _assets_telephone_png__WEBPACK_IMPORTED_MODULE_0__;\n            const phone01 = document.createElement('h3');\n            phone01.classList.add('phone-number');\n            phone01.textContent = \" +0215549698 / +0834568585\";\n\n            phoneDiv.appendChild(phoneIcon);\n            phoneDiv.appendChild(phone01);\n            return phoneDiv;\n        }\n\n        function createLocation(){\n            const locationDiv = document.createElement('div');\n            locationDiv.classList.add('contact-element');\n            const locationIcon = new Image();\n            locationIcon.classList.add('contact-icon');\n            locationIcon.src = _assets_location_png__WEBPACK_IMPORTED_MODULE_1__;\n            const locationText = document.createElement('h3');\n            locationText.classList.add('location-text');\n            locationText.textContent = \"364 Rivonia Drive. Orlando, Florida, USA\";\n            \n            locationDiv.appendChild(locationIcon);\n            locationDiv.appendChild(locationText);\n            return locationDiv;\n        }    \n\n        function createMap(){\n            const mapsDiv = document.createElement('div');\n            mapsDiv.classList.add('maps-element');\n            const mapsImage = new Image();\n            mapsImage.classList.add('maps-image');\n            mapsImage.src = _assets_orlando_JPG__WEBPACK_IMPORTED_MODULE_2__;\n\n            mapsDiv.appendChild(mapsImage);\n            return mapsDiv;\n        }\n        \n\n        contactMiddle.appendChild(createPhone())\n        contactMiddle.appendChild(createLocation())\n        contactMiddle.appendChild(createMap());\n        return contactMiddle;\n    }\n\n\n    contact.appendChild(createContactTop());\n    contact.appendChild(createContactMiddle());\n    return contact;\n}\n\nfunction loadContact(){\n    const main = document.getElementById('main');\n    main.textContent = '';\n    main.appendChild(createContact());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_chef_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/chef.jpeg */ \"./src/assets/chef.jpeg\");\n\n\n\nfunction createHome(){\n    const home = document.createElement(\"div\");\n    home.classList.add('home');\n\n    function createHomeTop(){\n        \n        const homeTop = document.createElement('div');\n        homeTop.classList.add(\"home-top\");\n\n        const homeTopHeading = document.createElement('h2');\n        homeTopHeading.classList.add(\"home-top-heading\");\n        homeTopHeading.textContent = \"Welcome to the Restaurant\";\n\n        const homeTopText = document.createElement('p');\n        homeTopText.classList.add(\"home-top-text\");\n        homeTopText.innerHTML += \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\"\n        homeTopText.innerHTML += \"molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\"\n        homeTopText.innerHTML += \"numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\"\n        homeTopText.innerHTML += \"optio, eaque rerum! Provident similique accusantium nemo autem.\"\n\n        homeTop.appendChild(homeTopHeading);\n        homeTop.appendChild(homeTopText);\n\n        return homeTop\n    }\n\n    function createHomeMiddle(){\n\n        const homeMiddle = document.createElement('div');\n        homeMiddle.classList.add('home-middle');\n\n        const homeImage = new Image();\n        homeImage.classList.add('home-image');\n        homeImage.src = _assets_chef_jpeg__WEBPACK_IMPORTED_MODULE_0__;\n\n        const homeMiddleText = document.createElement('h3');\n        homeMiddleText.classList.add('home-middle-text');\n        homeMiddleText.textContent = \"Visit us online or in store now!\";\n\n        homeMiddle.appendChild(homeImage);\n        homeMiddle.appendChild(homeMiddleText);\n\n        return homeMiddle;\n    }\n\n    \n    home.appendChild(createHomeTop());\n    home.appendChild(createHomeMiddle());\n    return home;\n}\n\n    \n\nfunction loadHome() {\n    const main = document.getElementById('main');\n    main.textContent = '';\n    main.appendChild(createHome());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ \"./src/page-load.js\");\n\n\n(0,_page_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_icecream_strawberry_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/icecream/strawberry.png */ \"./src/assets/icecream/strawberry.png\");\n/* harmony import */ var _assets_icecream_tiramisu_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/icecream/tiramisu.jpg */ \"./src/assets/icecream/tiramisu.jpg\");\n/* harmony import */ var _assets_icecream_oreo_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/icecream/oreo.jpg */ \"./src/assets/icecream/oreo.jpg\");\n/* harmony import */ var _assets_icecream_blackberry_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/icecream/blackberry.jpeg */ \"./src/assets/icecream/blackberry.jpeg\");\n/* harmony import */ var _assets_icecream_chocolate_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/icecream/chocolate.jpg */ \"./src/assets/icecream/chocolate.jpg\");\n/* harmony import */ var _assets_icecream_popCorn_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/icecream/popCorn.jpeg */ \"./src/assets/icecream/popCorn.jpeg\");\n\n\n\n\n\n\n\n\nfunction createMenu(){\n    const menu = document.createElement(\"div\");\n    menu.classList.add(\"menu\");\n\n    menu.appendChild(\n        createMenuItem(\n          \"Strawberry Fla\",\n          \"$ 3,99\",\n          \"A satisfying ice cream of milky vanilla goodness and strawberry sweetness.\",\n          _assets_icecream_strawberry_png__WEBPACK_IMPORTED_MODULE_0__\n        )\n    );\n    menu.appendChild(\n        createMenuItem(\n            \"Tiramisu Caramel\",\n            \"$ 5,50\",\n            \"Mouthwatering ice cream with a sprinkling of sea salt and caramel.\",\n            _assets_icecream_tiramisu_jpg__WEBPACK_IMPORTED_MODULE_1__\n        )\n    );\n    menu.appendChild(\n        createMenuItem(\n            \"Oreo Deluxe\",\n            \"$ 5,50\",\n            \"The ultimate Oreo lover's dream, with smooth vanilla and crispy cookies.\",\n            _assets_icecream_oreo_jpg__WEBPACK_IMPORTED_MODULE_2__\n        )\n    )\n    menu.appendChild(\n        createMenuItem(\n            \"Burst of Blackberry\",\n            \"$ 4,99\",\n            \"A gourmet Blackberry ice cream, with succulant lavender flavours\",\n            _assets_icecream_blackberry_jpeg__WEBPACK_IMPORTED_MODULE_3__\n        )\n    )\n    menu.appendChild(\n        createMenuItem(\n            \"Death by Chocolate\",\n            \"$ 4,99\",\n            \"Combining dark and milky flavours of chocolate to satisfy the cocao lovers.\",\n            _assets_icecream_chocolate_jpg__WEBPACK_IMPORTED_MODULE_4__\n        )\n    )\n    menu.appendChild(\n        createMenuItem(\n            \"Popping Pleasure\",\n            \"$ 5,99\",\n            \"Popcorn and Caramel surprise for the extra sweet tooth with smooth vanilla ice cream.\",\n            _assets_icecream_popCorn_jpeg__WEBPACK_IMPORTED_MODULE_5__\n        )\n    )\n\n\n    return menu;\n}\n\nfunction createMenuItem(name, price, descripttion, image) {\n    const menuItem = document.createElement('div');\n    menuItem.classList.add(\"menu-item\");\n\n    const foodElement = document.createElement('div');\n    foodElement.classList.add(\"food-element\");\n\n    const foodName = document.createElement('h2');\n    foodName.classList.add('food-name')\n    foodName.textContent = name;\n\n    const foodDescription = document.createElement('p');\n    foodDescription.classList.add('food-description');\n    foodDescription.textContent = descripttion;\n\n    const foodImage = new Image()\n    foodImage.classList.add('food-image');\n    foodImage.src = image;\n    foodImage.alt = 'foodimage'\n\n    const foodPrice = document.createElement('h3');\n    foodPrice.classList.add('food-price');\n    foodPrice.textContent = price\n\n    foodElement.appendChild(foodName);\n    foodElement.appendChild(foodPrice);\n\n    menuItem.appendChild(foodImage);\n    menuItem.appendChild(foodElement);\n    menuItem.appendChild(foodDescription);\n\n    return menuItem;\n}\n\n\n\nfunction loadMenu(){\n    const main = document.getElementById('main');\n    main.textContent = '';\n    main.appendChild(createMenu());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _assets_instagram_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/instagram.gif */ \"./src/assets/instagram.gif\");\n/* harmony import */ var _assets_facebook_gif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/facebook.gif */ \"./src/assets/facebook.gif\");\n/* harmony import */ var _assets_twitter_gif__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/twitter.gif */ \"./src/assets/twitter.gif\");\n\n\n\n\n\n\n\n\n\n// header design function\nfunction createHeader() {\n    console.log(\"loading page\");\n\n    const header = document.createElement('div');\n    header.classList.add('header');\n\n    const heading = document.createElement('div');\n    heading.classList.add('heading');\n\n    const title = document.createElement('h1');\n    title.classList.add('title');\n    title.textContent = 'HEAVENLY SCOOPS';\n\n    header.appendChild(heading);\n    heading.appendChild(title);\n    header.appendChild(createNav());\n\n    return header;\n}\n\n// navigation design function\nfunction createNav() {\n    const navigation = document.createElement('div');\n    navigation.classList.add('navigation');\n\n    const homeBtn = document.createElement('button');\n    homeBtn.classList.add(\"button-nav\");\n    homeBtn.textContent = 'HOME';\n    homeBtn.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains('active')) return;\n        setActiveBtn(homeBtn);\n        (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n    })\n\n    const menuBtn = document.createElement('button');\n    menuBtn.classList.add(\"button-nav\");\n    menuBtn.textContent = 'MENU';\n    menuBtn.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains('active')) return;\n        setActiveBtn(menuBtn);\n        (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    })\n\n    const contactBtn = document.createElement('button');\n    contactBtn.classList.add(\"button-nav\");\n    contactBtn.textContent = 'CONTACT';\n    contactBtn.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains('active')) return;\n        setActiveBtn(contactBtn);\n        (0,_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    })\n\n    navigation.appendChild(homeBtn);\n    navigation.appendChild(menuBtn);\n    navigation.appendChild(contactBtn)\n\n    return navigation;\n}\n\n// functionality to control tabs by using \"active\" classes\nfunction setActiveBtn(button) {\n    const buttons = document.querySelectorAll(\".button-nav\");\n\n    buttons.forEach((button) => {\n        if (button !== this) {\n            button.classList.remove(\"active\");\n        }\n    });\n\n    button.classList.add(\"active\");\n}\n\n// the main div function\nfunction createMain() {\n    const main = document.createElement(\"main\");\n    main.classList.add(\"main\");\n    main.setAttribute(\"id\", \"main\");\n    return main;\n}\n\n// function to create sidebar\nfunction createSidebar(){\n    const sideDiv = document.createElement('div');\n    sideDiv.classList.add(\"side-div\");\n\n    const instagram = new Image();\n    instagram.classList.add('side-icon')\n    instagram.src = _assets_instagram_gif__WEBPACK_IMPORTED_MODULE_4__;\n    instagram.alt = 'instagram'\n\n    const facebook = new Image();\n    facebook.classList.add('side-icon')\n    facebook.src = _assets_facebook_gif__WEBPACK_IMPORTED_MODULE_5__;\n    facebook.alt = 'facebook'\n\n    const twitter = new Image();\n    twitter.classList.add('side-icon')\n    twitter.src = _assets_twitter_gif__WEBPACK_IMPORTED_MODULE_6__;\n    twitter.alt = 'twitter'\n\n    sideDiv.appendChild(instagram);\n    sideDiv.appendChild(facebook);\n    sideDiv.appendChild(twitter);\n\n    return sideDiv;\n}\n\nfunction createHolder() {\n    const holder = document.createElement('div');\n    holder.classList.add('holder');\n\n    holder.appendChild(createMain());\n    holder.appendChild(createSidebar());\n    return holder;\n}\n\n// Footer design Function\nfunction createFooter(){\n    const footer = document.createElement('div');\n    footer.classList.add('footer');\n\n    const footerText = document.createElement('span')\n    footerText.classList.add('footer-text')\n    footerText.textContent = \"Copyright © Dewald Fourie 2023\"\n\n    footer.appendChild(footerText);\n\n    return footer;\n}\n    \nfunction initializeWebsite() {\n    const content = document.getElementById(\"content\");\n    \n    content.appendChild(createHeader());\n    content.appendChild(createHolder());\n    content.appendChild(createFooter());\n\n    setActiveBtn(document.querySelector(\".button-nav\"));\n    (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);\n\n//# sourceURL=webpack://restaurant-page/./src/page-load.js?");

/***/ }),

/***/ "./src/assets/background.jpg":
/*!***********************************!*\
  !*** ./src/assets/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5b58f85d4f504c1d67c2.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/background.jpg?");

/***/ }),

/***/ "./src/assets/chef.jpeg":
/*!******************************!*\
  !*** ./src/assets/chef.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2b7f5add59ff93ff9dec.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/chef.jpeg?");

/***/ }),

/***/ "./src/assets/facebook.gif":
/*!*********************************!*\
  !*** ./src/assets/facebook.gif ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a033125ad3f4adb4ee18.gif\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/facebook.gif?");

/***/ }),

/***/ "./src/assets/icecream/blackberry.jpeg":
/*!*********************************************!*\
  !*** ./src/assets/icecream/blackberry.jpeg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3c5a7f57a26e07d9940d.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/icecream/blackberry.jpeg?");

/***/ }),

/***/ "./src/assets/icecream/chocolate.jpg":
/*!*******************************************!*\
  !*** ./src/assets/icecream/chocolate.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ec530c5005197ddb57c6.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/icecream/chocolate.jpg?");

/***/ }),

/***/ "./src/assets/icecream/oreo.jpg":
/*!**************************************!*\
  !*** ./src/assets/icecream/oreo.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d1bd81345bd87c78926d.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/icecream/oreo.jpg?");

/***/ }),

/***/ "./src/assets/icecream/popCorn.jpeg":
/*!******************************************!*\
  !*** ./src/assets/icecream/popCorn.jpeg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4a648a9ada5e5fb6f8c5.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/icecream/popCorn.jpeg?");

/***/ }),

/***/ "./src/assets/icecream/strawberry.png":
/*!********************************************!*\
  !*** ./src/assets/icecream/strawberry.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"64b439d8faae615fff34.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/icecream/strawberry.png?");

/***/ }),

/***/ "./src/assets/icecream/tiramisu.jpg":
/*!******************************************!*\
  !*** ./src/assets/icecream/tiramisu.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"800c5e5d3d0cae11ed5b.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/icecream/tiramisu.jpg?");

/***/ }),

/***/ "./src/assets/instagram.gif":
/*!**********************************!*\
  !*** ./src/assets/instagram.gif ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7b45b5c66dd0c38e9200.gif\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/instagram.gif?");

/***/ }),

/***/ "./src/assets/location.png":
/*!*********************************!*\
  !*** ./src/assets/location.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e1e0ba4f5a69aaeccd36.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/location.png?");

/***/ }),

/***/ "./src/assets/myfont.ttf":
/*!*******************************!*\
  !*** ./src/assets/myfont.ttf ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d715efaee03330cadfda.ttf\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/myfont.ttf?");

/***/ }),

/***/ "./src/assets/orlando.JPG":
/*!********************************!*\
  !*** ./src/assets/orlando.JPG ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ddb3c58bb701d9c27c57.JPG\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/orlando.JPG?");

/***/ }),

/***/ "./src/assets/telephone.png":
/*!**********************************!*\
  !*** ./src/assets/telephone.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5e30441b2348c65b3c72.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/telephone.png?");

/***/ }),

/***/ "./src/assets/twitter.gif":
/*!********************************!*\
  !*** ./src/assets/twitter.gif ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"54d28f3c552a998a7267.gif\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/twitter.gif?");

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
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;