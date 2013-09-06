/**
* Hoorcollege 7: Voorbeeld 5
*	Luister naar een click event op de body tag
*	zoek alle child-objecten van de event-target
*	maak daarvan absoluut gepositioneerde objecten
*	stel wat css gedoe in, kies een willekeurige
*	achtergrondkleur en animeer naar een willekeurige
*	positie
* 
* J.P. Sturkenboom <j.p.sturkenboom@hva.nl>
* Copyleft 2011, all wrongs reversed
*/

jQuery(function($) {
	
	$('body').click(function(event) {
		
		$(event.target).find('*').each(function(index) {
			
			$(this).css('position','fixed')
				.css('display', 'block')
				.css('width', Math.random()*400)
				.css('height', Math.random()*400)
				.css('overflow', 'auto')
				.css('background', '#'+Math.round(0xffffff * Math.random()).toString(16))
				.animate({top: Math.random()*600, left: Math.random()*900}, 3000);
			
		});
		
	});
	
});