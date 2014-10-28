
window.onload = function(){

	function $ (selector) {
		return document.querySelector(selector);
	}

	function $$ (selector) {
		return document.querySelectorAll(selector);
	}

	console.log($('.active'));

	$('nav ul li a.active').onmouseover = function (event) {
		console.log('MUIS OVER HET ITEM!!!')
	}

	$('nav ul li a.active').onmouseout = function (event) {
		console.log('Muis van het item af.')
	}
};