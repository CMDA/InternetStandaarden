document.onkeydown = function(evt) {
	evt = evt || window.event;
	
	switch(evt.keyCode){
		case 27:
	  		impress().goto( document.getElementById("overview") );
	  		break; 
	}
};

$(document).ready(function() {
	$('li#all').click(
		function(event) {
			$('#paragraphs div').css('color', 'red');
		}
	);
	$('li#class').click(
		function(event) {
			$('#paragraphs div').css('color', 'white');
			$('#paragraphs div.showclass').css('color', 'red');
		}
	);
	$('li#id').click(
		function(event) {
			$('#paragraphs div').css('color', 'white');
			$('#paragraphs div#p3').css('color', 'red');
		}
	);
});

/* BRON: http://css3.bradshawenterprises.com/cfimg/ */
$(document).ready(function() {
  $("#cf7_controls").on('click', 'span', function() {
    $("#cf7 img").removeClass("opaque");

    var newImage = $(this).index();

    $("#cf7 img").eq(newImage).addClass("opaque");

    $("#cf7_controls span").removeClass("selected");
    $(this).addClass("selected");
  });
});
