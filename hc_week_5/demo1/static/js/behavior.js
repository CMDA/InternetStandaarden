/**
* Hoorcollege blokweek 6 demo
* 
* Sonja Rouwhorst <s.e.rouwhorst@hva.nl>
* Copyleft 2012, all wrongs reversed
*/
function reset () {
	$('section#project-descriptions section').addClass("hide");
	$('section#project-descriptions section').removeClass("box");
};

jQuery(function($) {

	reset();

	$('#fig1 a').click(function(event) {
		reset();
		$('#description1').removeClass("hide");
		$('#description1').addClass("box");
	} );
	$('#description1').click(function(event) {
		reset();
	} );

	$('#fig2 a').click(function(event) {
		reset();
		$('#description2').removeClass("hide");
		$('#description2').addClass("box");
	} );
	$('#description2').click(function(event) {
		reset();
	} );

	$('#fig3 a').click(function(event) {
		reset();
		$('#description3').removeClass("hide");
		$('#description3').addClass("box");
	} );
	$('#description3').click(function(event) {
		reset();
	} );

	$('#fig4 a').click(function(event) {
		reset();
		$('#description4').removeClass("hide");
		$('#description4').addClass("box");
	} );
	$('#description4').click(function(event) {
		reset();
	} );

	$('#fig5 a').click(function(event) {
		reset();
		$('#description5').removeClass("hide");
		$('#description5').addClass("box");
	} );
	$('#description5').click(function(event) {
		reset();
	} );

	$('#fig6 a').click(function(event) {
		reset();
		$('#description6').removeClass("hide");
		$('#description6').addClass("box");
	} );
	$('#description6').click(function(event) {
		reset();
	} );

	$('#fig7 a').click(function(event) {
		reset();
		$('#description7').removeClass("hide");
		$('#description7').addClass("box");
	} );
	$('#description7').click(function(event) {
		reset();
	} );

	$('#fig8 a').click(function(event) {
		reset();
		$('#description8').removeClass("hide");
		$('#description8').addClass("box");
	} );
	$('#description8').click(function(event) {
		reset();
	} );

	$('#fig9 a').click(function(event) {
		reset();
		$('#description9').removeClass("hide");
		$('#description9').addClass("box");
	} );
	$('#description9').click(function(event) {
		reset();
	} );

	$('#fig10 a').click(function(event) {
		reset();
		$('#description10').removeClass("hide");
		$('#description10').addClass("box");
	} );
	$('#description10').click(function(event) {
		reset();
	} );

	$('#fig11 a').click(function(event) {
		reset();
		$('#description11').removeClass("hide");
		$('#description11').addClass("box");
	} );
	$('#description11').click(function(event) {
		reset();
	} );

	$('#fig12 a').click(function(event) {
		reset();
		$('#description12').removeClass("hide");
		$('#description12').addClass("box");
	} );
	$('#description12').click(function(event) {
		reset();
	} );

} );