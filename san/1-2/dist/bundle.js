/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/app.js","vendors~app"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/san-loader/lib/selector.js?type=script&index=0!./src/ui/hello.san":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/san-loader/lib/selector.js?type=script&index=0!./src/ui/hello.san ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// <template>
//   <div class="a">{{value}}</div>
// </template>
//
// <script>
exports.default = {
  initData: function initData() {
    return {
      value: 'hello world!'
    };
  }
};
// </script>
//
// <style>
// .a{
//   color: red;
// }
// </style>

/* generated by san-loader */

/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/san-loader/lib/style-rewriter.js!./node_modules/san-loader/lib/selector.js?type=style&index=0!./src/ui/hello.san":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap!./node_modules/san-loader/lib/style-rewriter.js!./node_modules/san-loader/lib/selector.js?type=style&index=0!./src/ui/hello.san ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.a{\n  color: red;\n}\n", "", {"version":3,"sources":["D:/project/ife2018/san/2/src/ui/hello.san?3712ae66"],"names":[],"mappings":";;;;;;;;;;;;;;;AAeA;EACA,WAAA;CACA","file":"hello.san","sourcesContent":["<template>\n  <div class=\"a\">{{value}}</div>\n</template>\n\n<script>\nexport default {\n  initData() {\n    return {\n      value: 'hello world!'\n    };\n  }\n}\n</script>\n\n<style>\n.a{\n  color: red;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/html-loader/index.js?minimize=false!./node_modules/san-loader/lib/selector.js?type=template&index=0!./src/ui/hello.san":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/html-loader?minimize=false!./node_modules/san-loader/lib/selector.js?type=template&index=0!./src/ui/hello.san ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"a\">{{value}}</div>\n";

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/san-loader/lib/style-rewriter.js!./node_modules/san-loader/lib/selector.js?type=style&index=0!./src/ui/hello.san":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader?sourceMap!./node_modules/san-loader/lib/style-rewriter.js!./node_modules/san-loader/lib/selector.js?type=style&index=0!./src/ui/hello.san ***!
  \*******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader?sourceMap!../../node_modules/san-loader/lib/style-rewriter.js!../../node_modules/san-loader/lib/selector.js?type=style&index=0!./hello.san */ "./node_modules/css-loader/index.js?sourceMap!./node_modules/san-loader/lib/style-rewriter.js!./node_modules/san-loader/lib/selector.js?type=style&index=0!./src/ui/hello.san");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _san = __webpack_require__(/*! san */ "./node_modules/san/dist/san.dev.js");

var _san2 = _interopRequireDefault(_san);

var _hello = __webpack_require__(/*! @/ui/hello.san */ "./src/ui/hello.san");

var _hello2 = _interopRequireDefault(_hello);

var _sanRouter = __webpack_require__(/*! san-router */ "./node_modules/san-router/dist/san-router.source.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_sanRouter.router.add({
  rule: '/',
  Component: _hello2.default,
  target: '#app'
});

_sanRouter.router.start();

/***/ }),

/***/ "./src/ui/hello.san":
/*!**************************!*\
  !*** ./src/ui/hello.san ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __san_script__, __san_template__
var __san_styles__ = {}
__webpack_require__(/*! !style-loader!css-loader?sourceMap!../../node_modules/san-loader/lib/style-rewriter.js!../../node_modules/san-loader/lib/selector.js?type=style&index=0!./hello.san */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/san-loader/lib/style-rewriter.js!./node_modules/san-loader/lib/selector.js?type=style&index=0!./src/ui/hello.san")
__san_script__ = __webpack_require__(/*! !babel-loader!../../node_modules/san-loader/lib/selector.js?type=script&index=0!./hello.san */ "./node_modules/babel-loader/lib/index.js!./node_modules/san-loader/lib/selector.js?type=script&index=0!./src/ui/hello.san")
if (__san_script__ &&
    __san_script__.__esModule &&
    Object.keys(__san_script__).length > 1) {
  console.warn("[san-loader] src\\ui\\hello.san: named exports in *.san files are ignored.")}
__san_template__ = __webpack_require__(/*! !html-loader?minimize=false!../../node_modules/san-loader/lib/selector.js?type=template&index=0!./hello.san */ "./node_modules/html-loader/index.js?minimize=false!./node_modules/san-loader/lib/selector.js?type=template&index=0!./src/ui/hello.san")
var __san_proto__ = {}
if (__san_script__) {
  __san_proto__ = __san_script__.__esModule
    ? __san_script__['default']
    : __san_script__
}
if (__san_template__) {
  __san_proto__.template = __san_template__
}
var san = __webpack_require__(/*! san */ "./node_modules/san/dist/san.dev.js")
var __san_exports__ = san.defineComponent(__san_proto__)
module.exports = __san_exports__
if (module.exports.__esModule) module.exports = module.exports['default']
if (!__san_exports__.computed) __san_exports__.computed = {}
Object.keys(__san_styles__).forEach(function (key) {
var module = __san_styles__[key]
__san_exports__.computed[key] = function () { return module }
})


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map