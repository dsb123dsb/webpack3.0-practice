import _ from "lodash";

function componennt(){
	var element = document.createElement('div');

	/* 需要引入lodash，下一行才能正常工作*/
	element.innerHTML = _.join(['hello', 'webpack', ' ']);

	return element;
}

document.body.appendChild(componennt());