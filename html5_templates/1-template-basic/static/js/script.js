// Wait for the document to be ready, before executing your code
$(document).ready(function () {
	
	// Assign a reference to all the sections on the page to the variable 'sections'
	var sections = $("section");
	
	// Add the class 'highlight' to all section elements on the page
	sections.addClass("highlight");
	
	// Loop through all te section and add a button child element in each section,  
	// only if the section doesn't have a class 'intro'
	sections.each(function(){
		// $(this) points at each next section in the loop
		if (!$(this).hasClass("intro")){
			$(this).prepend("<button>more info</button>");
		} 	
	});
	
	// Add & remove a class 'hover' to a section every time 
	// the mouse pointer hovers over & out that section
	sections.hover(
		// The first function points to the mouseover event
		function () {
			$(this).addClass("hover");
		},
		//The second function points to the mouseout event
		function () {
			$(this).removeClass("hover");
		}
	);
	
	// Assign a reference to all the newly added buttons in the variable 'button'
	var button = $("button", sections);
	
	// Add a click event for each button 
	button.click(function () {
		// Add the text of the <h2> element (the next element after the button) 
		// to the string 'HTML ' (with a space!!) and store it in the variable 'strSearch'
		var strSearch = "HTML " + $(this).next().html();
		
		// Open http://www.google.nl with the search string prefilled
		window.open("http://www.google.nl/search?hl=nl&site=&source=hp&q="+ strSearch +"&btnG=");
	});
});