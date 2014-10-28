function $ (selector) {
	return document.querySelector(selector);
}

window.onload = function () {

	$('nav ul li a').onmouseover = function () {
		$('main img').style.width = '10em';
		$('textarea').style.background = "purple";
	};

	$('nav ul li a').onmouseout = function () {
		$('main img').style.width = '20em';
		$('textarea').style.background = "red";
	};

};