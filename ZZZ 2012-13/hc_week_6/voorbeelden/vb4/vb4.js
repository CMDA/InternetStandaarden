/**
* Hoorcollege 7: Voorbeeld 4
*	rollover menu op 2 manieren
* 
* J.P. Sturkenboom <j.p.sturkenboom@hva.nl>
* Copyleft 2011, all wrongs reversed
*/

jQuery(function($) {
	
	$('div#menu li#main1').hover(function() {
		
		$('div#menu ul#sub1').fadeToggle();
		
	});

	$('div#menu li#main2').hover(function() {
		
		$('div#menu ul#sub2').fadeIn();
		$('div#menu ul#sub2 a').css('background', '#ffffff');
		
	}, function() {
		
		$('div#menu ul#sub2').fadeOut();
		$('div#menu ul#sub2 a').css('background', '#000000');
	});
	
});