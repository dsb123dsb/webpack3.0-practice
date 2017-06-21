webpackJsonp([1],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_demo_css__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_demo_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__css_demo_css__);



var moment = __webpack_require__(0);  // 常用时间格式化库
console.log(moment().format())

function componennt(){
	var element = document.createElement('div');

	/* 需要引入lodash，下一行才能正常工作*/
	element.innerHTML = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.join(['hello', 'webpack', ' ']);

	return element;
}

document.body.appendChild(componennt());

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[117]);