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
function saveVariable() {
	// saving example variable numberToSave to localstorage under a unique name 1234
	localStorage.setItem('1234', exampleVariable);
}



function getVariable() {
	// saving example variable numberToSave to localstorage under a unique identifier 01234
	var test = localStorage.getItem('1234')
}



function hideNormalStar(){
		
	var searchId = document.getElementById("normalStar").classList;

	searchId.add("hide-content");}



function showNormalStar(){

	var searchId = document.getElementById("normalStar").classList;
	searchId.add("display-content");
}	



function hideFavStar(){
	
	var searchId = document.getElementById("favStar").classList;
	searchId.add("hide-content");
}



function showFavStar(){	
	var searchId = document.getElementById("favStar").classList;

	searchId.add("display-content");
}





function clearPhotos()
{
	var searchId = document.getElementById("photo-container-id").classList;
	
		searchId.add("hide-content");
		showPhotosFav();
	// var searchId = document.getElementById("photo-container-id").classList;
	// searchId.add("hide-content");

	// hideNormalStar();	
	// showFavStar();	
	// favPhotos();
}

function showPhotosFav(){
	var searchId = document.getElementById("favourite-photos-container-id").classList;
	
		searchId.add("display-content");
}
var barsFlag = false;
function selectSong(songId){
	javascript:play('Music/queen.mp3');
	if (barsFlag == false){
		var searchId = document.getElementById(songId).src="assets/new/musicSongHover.png";
		barsFlag = true;		
	}
	else if (barsFlag == true){
		var searchId = document.getElementById(songId).src="assets/new/musicSong.png";
		barsFlag = false;		
	}
}

var gridFlag = false;
function selectSongGrid(songId){
	javascript:play('Music/queen.mp3');
	var searchId = document.getElementById(songId).src="assets/new/buttonMusicHover.png";

	if (gridFlag == false){
		var searchId = document.getElementById(songId).src="assets/new/buttonMusicHover.png";
		gridFlag = true;		
	}
	else if (gridFlag == true){
		var searchId = document.getElementById(songId).src="assets/new/buttonMusic.png";

		gridFlag = false;		
	}
}

var voiceFlag = false;
function selectVoiceGrid(voiceId){
	javascript:play('Music/voiceRecording.wav');
	var searchId = document.getElementById(voiceId).src="assets/new/buttonVoicesHover.png";

	if (voiceFlag == false){
		var searchId = document.getElementById(voiceId).src="assets/new/buttonVoicesHover.png";
		voiceFlag = true;		
	}
	else if (voiceFlag == true){
		var searchId = document.getElementById(voiceId).src="assets/new/buttonVoices.png";

		voiceFlag = false;		
	}
}


function clearFavPhotos()
{	
	var searchId = document.getElementById("favourite-photos-container-id").classList;
	
	searchId.remove("display-content");

	var photoCont = document.getElementById("photo-container-id").classList;
	
	photoCont.add("display-content");

}


function hideFav(){

var searchId = document.getElementById("favPhotos").classList;
searchId.add("hide-content");
}



function favPhotos()
{
	var searchId = document.getElementById("favPhotos").classList;
	
		searchId.add("display-content");	
}








function showNormalPhotos()
{
	var searchId = document.getElementById("photosContent").classList;
	
		searchId.add("display-content");
}

function showSearch() {
	var searchId = document.getElementById("search").classList;
	var barsId = document.getElementById("bars").classList;
	var gridId = document.getElementById("grid").classList;

	searchId.add("display-content");
	barsId.remove("display-content");
	gridId.remove("display-content");
}
function showBars() {
	var searchId = document.getElementById("search").classList;
	var barsId = document.getElementById("bars").classList;
	var gridId = document.getElementById("grid").classList;

	searchId.remove("display-content");
	barsId.add("display-content");
	gridId.remove("display-content");
}
function showGrid() {
	var searchId = document.getElementById("search").classList;
	var barsId = document.getElementById("bars").classList;
	var gridId = document.getElementById("grid").classList;

	searchId.remove("display-content");
	barsId.remove("display-content");
	gridId.add("display-content");
}

function showSearchResults() {
	var searchId = document.getElementById("search-results").classList;

	searchId.add("display-content");
}
function showSearchFav() {
	var searchId = document.getElementById("favouritesContainer").classList;

	searchId.add("display-content");
}

function openNav(navName) {
	document.getElementById(navName).style.width = "190px";
}

function closeNav(navName) {
	if (document.getElementById(navName) != null){
		document.getElementById(navName).style.width = "0";		
	}
}

function navigateMusic(navName){
	closeNav(navName);
	var searchId = document.getElementById("search").classList;
	searchId.add("display-content");	
	showSearch();	
}

//Roland function to get a random music from the playlist
function play(object) {
	new Audio(object).play()
}

//more functions from Roland
function clearAndFill() {

	var searchId = document.getElementById("videoContainer").classList;

	searchId.add("hide-content");
	showSearchFav();

}


function showNormalMovies() {
	var searchId = document.getElementById("videoContainer").classList;
	searchId.remove("hide-content");
	hideDefault();
}


function hideDefault() {
	var searchId = document.getElementById("favouritesContainer").classList;

	searchId.add("hide-content");

}

function getFavourites() {

	//display new div

}

// on swipe left - transition to next page
$(document).on('swipeleft', '.ui-page', function (event) {
	if (event.handled !== true) // stops event triggering more then once
	{
		var nextpage = $.mobile.activePage.next('[data-role="page"]');

		if ($.mobile.activePage.attr('id') != "first-page-id") {
			if (nextpage.length > 0) {
				$.mobile.changePage(nextpage, { transition: "slide", reverse: false }, true, true);
			}
			event.handled = true;
		}
	}
	return false;
});

// on swipe right - transition to previous page
$(document).on('swiperight', '.ui-page', function (event) {
	if (event.handled !== true) {
		var prevpage = $(this).prev('[data-role="page"]');

		if ($.mobile.activePage.attr('id') != "home") {
			if (prevpage.length > 0) {
				$.mobile.changePage(prevpage, { transition: "slide", reverse: true }, true, true);
			}
			event.handled = true;
		}
	}
	return false;
});

function signIn(){
	document.getElementById("loginContent").style.display="none";
	document.getElementById("ajax-loader").style.display="block";
	
    setTimeout("goHome()", 1500);
}

function goHome(){
	window.location.href = "#home";
}

function showSearchResults(){
	var searchId = document.getElementById("search-results").classList;
	
		searchId.add("display-content");
}
