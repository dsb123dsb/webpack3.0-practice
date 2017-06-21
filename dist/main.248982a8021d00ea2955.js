webpackJsonp([1],{

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(150);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(153);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var determineDate1 = function () {
	var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
		var moment;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 0));

					case 2:
						moment = _context.sent;
						return _context.abrupt('return', moment().format('LLLL'));

					case 4:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	return function determineDate1() {
		return _ref.apply(this, arguments);
	};
}();

var _lodash = __webpack_require__(188);

var _lodash2 = _interopRequireDefault(_lodash);

__webpack_require__(189);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moment = __webpack_require__(0); // 常用时间格式化库
console.log(moment().format());

function componennt() {
	var element = document.createElement('div');

	/* 需要引入lodash，下一行才能正常工作*/
	element.innerHTML = _lodash2.default.join(['hello', 'webpack', ' ']);

	return element;
}

document.body.appendChild(componennt());

// 动态import模块
function determineDate() {
	new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 0)).then(function (moment) {
		return moment().format('LLL');
	}).then(function (str) {
		return console.log(str);
	}).catch(function (err) {
		return console.log('failed to load moment', err);
	});
}
determineDate();

determineDate1().then(function (str) {
	return console.log(str);
});

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[149]);