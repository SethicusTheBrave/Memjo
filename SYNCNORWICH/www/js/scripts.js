// Uncomment ONE of the below functions as needed

// this fires when app first loads when testing on a mobile device
//document.addEventListener("deviceready", function () {    
//	console.log('device ready');    
//	setup();
//});

// this fires when app first loads when testing in a browser
$(document).ready(function () {
    console.log('ready');
});
  
// global variables
var exampleVariable = 1;
var exampleVariable2 = "test";
var x = "Music/queen.mp3";

// example of local storage save
function saveVariable(){
	// saving example variable numberToSave to localstorage under a unique name 1234
	localStorage.setItem('1234', exampleVariable);
}

function getVariable(){
	// saving example variable numberToSave to localstorage under a unique identifier 01234
	var test = localStorage.getItem('1234')
}


function showSearch(){
	var searchId = document.getElementById("search").classList;
	var barsId = document.getElementById("bars").classList;
	var gridId = document.getElementById("grid").classList;
	
	searchId.add("display-content");
	barsId.remove("display-content");
	gridId.remove("display-content");	
}
function showBars(){
	var searchId = document.getElementById("search").classList;
	var barsId = document.getElementById("bars").classList;
	var gridId = document.getElementById("grid").classList;

	searchId.remove("display-content");
	barsId.add("display-content");
	gridId.remove("display-content");
}
function showGrid(){
	var searchId = document.getElementById("search").classList;
	var barsId = document.getElementById("bars").classList;
	var gridId = document.getElementById("grid").classList;
	
	searchId.remove("display-content");
	barsId.remove("display-content");
	gridId.add("display-content");
}

function showSearchResults(){
	var searchId = document.getElementById("search-results").classList;
	
	searchId.add("display-content");
}

//Roland function to get a random music from the playlist
function play(object){
	new Audio(object).play()
}

//more functions from Roland
function clearAndFill(){



}

// on swipe left - transition to next page
$(document).on('swipeleft', '.ui-page', function(event){    
    if(event.handled !== true) // stops event triggering more then once
    {    
        var nextpage = $.mobile.activePage.next('[data-role="page"]');

		if ($.mobile.activePage.attr('id') != "first page id"){
			if (nextpage.length > 0) {
            $.mobile.changePage(nextpage, {transition: "slide", reverse: false}, true, true);
        }
        event.handled = true;
		}        
    }
    return false;         
});

// on swipe right - transition to previous page
$(document).on('swiperight', '.ui-page', function(event){     
    if(event.handled !== true)
    {      
        var prevpage = $(this).prev('[data-role="page"]');

		if ($.mobile.activePage.attr('id') != "last-page-id"){
			if (prevpage.length > 0) {
            $.mobile.changePage(prevpage, {transition: "slide", reverse: true}, true, true);
        }
        event.handled = true;
		}        
    }
    return false;            
});