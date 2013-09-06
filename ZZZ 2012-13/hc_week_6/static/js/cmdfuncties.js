document.onkeydown = function(evt) {
	evt = evt || window.event;
	
	switch(evt.keyCode){
		case 27:
	  		impress().goto( document.getElementById("overview") );
	  		break; 
	}
};

window.onload = function(){
	impress().init();
}

jQuery(function($){
	
	// Starfield
	var border = 4000;
	for(var i=0; i<500; i++){
		$('#impress').append('<div class="step floater" data-x="'+ (-border + Math.random()*(border*2)) +'" data-y="'+ (-border + Math.random()*(border*2)) +'" data-z="'+ (-border + Math.random()*(border*2)) +'"></div>');
	};
});
