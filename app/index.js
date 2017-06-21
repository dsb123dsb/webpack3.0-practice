import _ from "lodash";
import './css/demo.css';

var moment = require('moment');  // 常用时间格式化库
console.log(moment().format())

function componennt(){
	var element = document.createElement('div');

	/* 需要引入lodash，下一行才能正常工作*/
	element.innerHTML = _.join(['hello', 'webpack', ' ']);

	return element;
}

document.body.appendChild(componennt());