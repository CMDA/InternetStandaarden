/**
* Oefening jQuery
* 	Play with jQuery
* 
* Sonja Rouwhorst <s.e.rouwhorst@hva.nl>
* Copyleft 2012, all wrongs reversed
*/

jQuery(function($) {
	
	// select all paragraphs and react to mouse hover
	$('p').hover(
		// handlerIn 
		function(event) {
			// change appearance
			$(this).css('color', 'red');
			$(this).css('border-bottom', '1px solid black');
		},
		// handlerOut 
		function(event) {
			// change back to normal
			$(this).css('color', 'black');
			$(this).css('border-bottom', 'none');
		}
	);

	// select all paragraphs with class 'myclass' and react to click
	$('p.myclass').click(
		function(event) {
			// make hidden paragraphs fade in or out
			$('p.hidden').fadeToggle();
		}
	);

/* VOEG HIERONDER JE CODE TOE */
	

	$('p.different').click(
		function(event) {
			$('p.hidden').slideToggle();
		}
	);



	$('h2').hover(
		function(event) {
			$(this).css('background-color', 'yellow');
		},
		function(event) {
			$(this).css('background-color', 'transparent');
		}
	);


	
	
	
});