/**
* Hoorcollege 7: Voorbeeld 3
*	Traversing dmv. find, first en next
*	fadeToggle, slideToggle en aanpassen van
*	css eigenschap background
* 
* J.P. Sturkenboom <j.p.sturkenboom@hva.nl>
* Copyleft 2011, all wrongs reversed
*/

jQuery(function($) {
	
	$('div#header').hover(function(event) {
		
		$(this).find('h1').fadeToggle();
		
	});
	
	$('div#content').click(function(event) {
		
		$(this).find('p').last().prev().css('background', 'silver');
		
	});
	
	$('div#footer').hover(function(event) {
		
		$('p#uitgebreid').slideToggle();
		
	});
	
});