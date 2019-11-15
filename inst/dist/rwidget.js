/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _rwidget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rwidget */ \"./src/rwidget.js\");\n/* harmony import */ var _test_widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test-widget */ \"./src/test-widget.js\");\n\n\n\nglobal.rwidget = _rwidget__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n// Register test widget\n_rwidget__WEBPACK_IMPORTED_MODULE_0__[\"default\"].register({\n  name: \"test\",\n  type: _test_widget__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n\ndocument.addEventListener('DOMContentLoaded', (e) => {\nconst scriptElements = document.getElementsByClassName(\"rwidget\");\n  for (let i = 0; i < scriptElements.length; i++) {\n    _rwidget__WEBPACK_IMPORTED_MODULE_0__[\"default\"].make(scriptElements[i]);\n  }\n});\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/rwidget.js":
/*!************************!*\
  !*** ./src/rwidget.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst widgets = { };\n\n/**\n * Register a widget object\n * @param props properties\n * @param props.name class/widget name\n * @param props.type class or factory function\n * ...\n */\nfunction register(props) {\n  widgets[props.name] = props;\n}\n\nfunction make(scriptElement) {\n  const data = JSON.parse(scriptElement.innerText);\n  const widgetName = scriptElement.classList[1];\n  if (!Object.keys(widgets).includes(widgetName)) {\n    console.log(`widget \"${data.widgetName}\" not registered`);\n    return;\n  }\n\n  const widgetElement = document.createElement(\"div\");\n  widgetElement.id = scriptElement.id.replace(\"data-\", \"\");\n  document.body.appendChild(widgetElement);\n  const makeWidget = widgets[widgetName].type;\n  makeWidget(widgetElement).render(data);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  register: register,\n  make: make,\n  widgets: widgets\n});\n\n\n//# sourceURL=webpack:///./src/rwidget.js?");

/***/ }),

/***/ "./src/test-widget.js":
/*!****************************!*\
  !*** ./src/test-widget.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(widgetElement) {\n  const widget = { };\n\n  widget.render = function(widgetData) {\n    console.log(widgetElement.id);\n    console.log(widgetData);\n    widgetElement.innerText = \"Hello widget!\";\n  };\n\n  return widget;\n\n});\n\n\n//# sourceURL=webpack:///./src/test-widget.js?");

/***/ })

/******/ });