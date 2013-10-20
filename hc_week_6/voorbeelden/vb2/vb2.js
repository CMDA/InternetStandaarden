/**
* Hoorcollege 7: Voorbeeld 2
* 	Manipulatie van een CSS eigenschap en
*	dynamisch toekennen en verwijderen van
*	een class.
*
* J.P. Sturkenboom <j.p.sturkenboom@hva.nl>
* Copyleft 2011, all wrongs reversed
*/

jQuery(function($) {

	$('h1, h2').click(function(event) {

		$(this).css('color', '#ff0000');

	});

	$('p').click(function(event) {

		$(this).toggleClass('cursief');

	});

});