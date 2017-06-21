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

// 动态import模块
function determineDate(){
	import('moment')
		.then(moment =>moment().format('LLL'))
		.then(str => console.log(str))
		.catch(err => console.log('failed to load moment', err));
}
determineDate();

async function determineDate1() {
  const moment = await import('moment');
  return moment().format('LLLL');
}

determineDate1().then(str => console.log(str));