// Uncomment ONE of the below functions as needed

// this fires when app first loads when testing on a mobile device
//document.addEventListener("deviceready", function () {    
//	console.log('device ready');    
//	setup();
//});

// this fires when app first loads when testing in a browser
$(document).ready(function () {
    console.log('ready');
    setup();
});
  
// global variables
var exampleVariable = 1;
var exampleVariable2 = "test";

// example of local storage save
function saveVariable(){
	// saving example variable numberToSave to localstorage under a unique name 1234
	localStorage.setItem('1234', exampleVariable);
}

function getVariable(){
	// saving example variable numberToSave to localstorage under a unique identifier 01234
	var test = localStorage.getItem('1234')
}

