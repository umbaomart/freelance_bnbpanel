/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/_polyfill */ \"./src/js/modules/_polyfill.js\");\n/* harmony import */ var _modules_customSelect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/_customSelect */ \"./src/js/modules/_customSelect.js\");\n/* harmony import */ var _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/_smoothScroll */ \"./src/js/modules/_smoothScroll.js\");\n/* harmony import */ var _modules_myaccordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/_myaccordion */ \"./src/js/modules/_myaccordion.js\");\n/* harmony import */ var _modules_navTopPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/_navTopPage */ \"./src/js/modules/_navTopPage.js\");\n/* harmony import */ var _modules_wowEffects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/_wowEffects */ \"./src/js/modules/_wowEffects.js\");\n // import { viewport } from './modules/_viewport';\n// import { btnClickFunc } from './modules/_btnClickFunc';\n// import { getSearchParams } from './modules/_getSearchParams';\n// import { accordion } from './modules/_accordion';\n// import { backToTop } from './modules/_backToTop';\n// import { checkView } from './modules/_checkView';\n\n // import { modal } from './modules/_modal';\n\n\n\n // import { stickyHeader } from './modules/_stickyHeader';\n// import { swiperSlider } from './modules/_swiperSlider';\n\n // import { smoothScrollVs } from './modules/_smoothScrollVs';\n// import { sampleArray } from './modules/_sampleArray';\n\n$(function () {\n  (0,_modules_polyfill__WEBPACK_IMPORTED_MODULE_0__.polyfill)();\n  (0,_modules_smoothScroll__WEBPACK_IMPORTED_MODULE_2__.smoothScroll)();\n  (0,_modules_myaccordion__WEBPACK_IMPORTED_MODULE_3__.myaccordion)();\n  (0,_modules_navTopPage__WEBPACK_IMPORTED_MODULE_4__.navTopPage)(); // smoothScrollVs()\n  // sampleArray();\n  // viewport();\n  // btnClickFunc();\n\n  (0,_modules_wowEffects__WEBPACK_IMPORTED_MODULE_5__.wowEffects)(); // accordion();\n  // swiperSlider();\n\n  (0,_modules_customSelect__WEBPACK_IMPORTED_MODULE_1__.customSelect)(); // backToTop();\n  // modal();\n}); // $(window).on('load resize scroll', function () {\n//   checkView();\n//   stickyHeader();\n// });\n\n//# sourceURL=webpack://npm-scripts-webpack-test/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/_customSelect.js":
/*!*****************************************!*\
  !*** ./src/js/modules/_customSelect.js ***!
  \*****************************************/
/*! namespace exports */
/*! export customSelect [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"customSelect\": function() { return /* binding */ customSelect; }\n/* harmony export */ });\nvar customSelect = function customSelect() {\n  var custom_select = $('.custom-select');\n\n  if (custom_select.length) {\n    var x, i, j, selElmnt, a, b, c;\n\n    (function () {\n      var closeAllSelect = function closeAllSelect(elmnt) {\n        /*a function that will close all select boxes in the document, except the current select box:*/\n        var x,\n            y,\n            i,\n            arrNo = [];\n        x = document.getElementsByClassName('select-items');\n        y = document.getElementsByClassName('select-selected');\n\n        for (i = 0; i < y.length; i++) {\n          if (elmnt == y[i]) {\n            arrNo.push(i);\n          } else {\n            y[i].classList.remove('select-arrow-active');\n          }\n        }\n\n        for (i = 0; i < x.length; i++) {\n          if (arrNo.indexOf(i)) {\n            x[i].classList.add('select-hide');\n          }\n        }\n      };\n      /*if the user clicks anywhere outside the select box, then close all select boxes:*/\n\n\n      /*look for any elements with the class \"custom-select\":*/\n      x = document.getElementsByClassName('custom-select');\n\n      for (i = 0; i < x.length; i++) {\n        selElmnt = x[i].getElementsByTagName('select')[0];\n        /*for each element, create a new DIV that will act as the selected item:*/\n\n        a = document.createElement('DIV');\n        a.setAttribute('class', 'select-selected');\n        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;\n        x[i].appendChild(a);\n        /*for each element, create a new DIV that will contain the option list:*/\n\n        b = document.createElement('DIV');\n        b.setAttribute('class', 'select-items select-hide');\n\n        for (j = 1; j < selElmnt.length; j++) {\n          /*for each option in the original select element, create a new DIV that will act as an option item:*/\n          c = document.createElement('DIV');\n          c.innerHTML = selElmnt.options[j].innerHTML;\n          c.addEventListener('click', function (e) {\n            /*when an item is clicked, update the original select box and the selected item:*/\n            var y, i, k, s, h;\n            s = this.parentNode.parentNode.getElementsByTagName('select')[0];\n            h = this.parentNode.previousSibling;\n\n            for (i = 0; i < s.length; i++) {\n              if (s.options[i].innerHTML == this.innerHTML) {\n                s.selectedIndex = i;\n                h.innerHTML = this.innerHTML;\n                y = this.parentNode.getElementsByClassName('same-as-selected');\n\n                for (k = 0; k < y.length; k++) {\n                  y[k].removeAttribute('class');\n                }\n\n                this.setAttribute('class', 'same-as-selected');\n                break;\n              }\n            }\n\n            h.click();\n          });\n          b.appendChild(c);\n        }\n\n        x[i].appendChild(b);\n        a.addEventListener('click', function (e) {\n          /*when the select box is clicked, close any other select boxes and open/close the current select box:*/\n          e.stopPropagation();\n          closeAllSelect(this);\n          this.nextSibling.classList.toggle('select-hide');\n          this.classList.toggle('select-arrow-active');\n        });\n      }\n\n      document.addEventListener('click', closeAllSelect);\n    })();\n  }\n};\n\n//# sourceURL=webpack://npm-scripts-webpack-test/./src/js/modules/_customSelect.js?");

/***/ }),

/***/ "./src/js/modules/_myaccordion.js":
/*!****************************************!*\
  !*** ./src/js/modules/_myaccordion.js ***!
  \****************************************/
/*! namespace exports */
/*! export myaccordion [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"myaccordion\": function() { return /* binding */ myaccordion; }\n/* harmony export */ });\nvar myaccordion = function myaccordion() {\n  var el = document.querySelectorAll('.faq__listItemQuestionPlus');\n  el.forEach(function (item) {\n    item.addEventListener('click', function () {\n      var parent = this.parentElement.parentElement;\n      var content = parent.querySelector('.faq__listItemContent');\n      $(content).slideToggle();\n      $(parent).toggleClass(\"is-active\");\n    });\n  });\n};\n\n//# sourceURL=webpack://npm-scripts-webpack-test/./src/js/modules/_myaccordion.js?");

/***/ }),

/***/ "./src/js/modules/_navTopPage.js":
/*!***************************************!*\
  !*** ./src/js/modules/_navTopPage.js ***!
  \***************************************/
/*! namespace exports */
/*! export navTopPage [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navTopPage\": function() { return /* binding */ navTopPage; }\n/* harmony export */ });\nvar navTopPage = function navTopPage() {\n  var li = document.querySelectorAll(\".siteHeader__navItemLink\");\n  var sec = document.querySelectorAll(\"section\");\n\n  function activeMenu() {\n    var len = sec.length;\n\n    while (--len && window.scrollY + 97 < sec[len].offsetTop) {}\n\n    li.forEach(function (ltx) {\n      return ltx.classList.remove(\"active\");\n    });\n    li[len].classList.add(\"active\");\n  }\n\n  activeMenu();\n  window.addEventListener(\"scroll\", activeMenu);\n};\n\n//# sourceURL=webpack://npm-scripts-webpack-test/./src/js/modules/_navTopPage.js?");

/***/ }),

/***/ "./src/js/modules/_polyfill.js":
/*!*************************************!*\
  !*** ./src/js/modules/_polyfill.js ***!
  \*************************************/
/*! namespace exports */
/*! export polyfill [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"polyfill\": function() { return /* binding */ polyfill; }\n/* harmony export */ });\nvar polyfill = function polyfill() {\n  //Reference:\n  //reeversedev.com/polyfill-for-foreach-map-filter-reduce\n  // Polyfills\n  // Foreach function\n  if (window.NodeList && !NodeList.prototype.forEach) {\n    NodeList.prototype.forEach = Array.prototype.forEach;\n  } // Map function\n\n\n  Array.prototype.map = function (callback) {\n    var arr = [];\n\n    for (var i = 0; i < this.length; i++) {\n      arr.push(callback(this[i], i, this));\n    }\n\n    return arr;\n  }; // Filter function\n\n\n  Array.prototype.filter = function (callback, context) {\n    var arr = [];\n\n    for (var i = 0; i < this.length; i++) {\n      if (callback.call(context, this[i], i, this)) {\n        arr.push(this[i]);\n      }\n    }\n\n    return arr;\n  }; // Reduce function\n\n\n  Array.prototype.reduce = function (callback, initialValue) {\n    var accumulator = initialValue === undefined ? undefined : initialValue;\n\n    for (var i = 0; i < this.length; i++) {\n      if (accumulator !== undefined) {\n        accumulator = callback.call(undefined, accumulator, this[i], i, this);\n      } else {\n        accumulator = this[i];\n      }\n    }\n\n    return accumulator;\n  };\n};\n\n//# sourceURL=webpack://npm-scripts-webpack-test/./src/js/modules/_polyfill.js?");

/***/ }),

/***/ "./src/js/modules/_smoothScroll.js":
/*!*****************************************!*\
  !*** ./src/js/modules/_smoothScroll.js ***!
  \*****************************************/
/*! namespace exports */
/*! export smoothScroll [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"smoothScroll\": function() { return /* binding */ smoothScroll; }\n/* harmony export */ });\nvar smoothScroll = function smoothScroll() {\n  $('a[href^=\"#\"]').on(\"click\", function (e) {\n    var speed = 600;\n    var href = $(e.currentTarget).attr(\"href\");\n    var target = $(href == \"#\" || href == \"\" ? \"html\" : href);\n    var position = target.offset().top;\n    var navHeight = $('.siteHeader').outerHeight(true);\n    console.log(navHeight);\n    position = position - navHeight;\n    $(\"body, html\").delay(200).animate({\n      scrollTop: position\n    }, speed, \"swing\");\n    return false;\n  });\n};\n\n//# sourceURL=webpack://npm-scripts-webpack-test/./src/js/modules/_smoothScroll.js?");

/***/ }),

/***/ "./src/js/modules/_wowEffects.js":
/*!***************************************!*\
  !*** ./src/js/modules/_wowEffects.js ***!
  \***************************************/
/*! namespace exports */
/*! export wowEffects [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"wowEffects\": function() { return /* binding */ wowEffects; }\n/* harmony export */ });\nvar wowEffects = function wowEffects() {\n  var ua = window.navigator.userAgent;\n\n  var wowInit = function wowInit() {\n    var wow = new WOW({\n      boxClass: 'wow',\n      animateClass: 'animated',\n      offset: 100,\n      mobile: true,\n      live: true,\n      callback: function callback(box) {},\n      scrollContainer: null\n    });\n    wow.init();\n  }; // IE Browser\n\n\n  if (ua.indexOf('Trident') != -1 || ua.indexOf('MSIE') != -1) {\n    $(window).on('load', function (e) {\n      wowInit();\n    });\n  } else {\n    wowInit();\n  }\n};\n\n//# sourceURL=webpack://npm-scripts-webpack-test/./src/js/modules/_wowEffects.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;