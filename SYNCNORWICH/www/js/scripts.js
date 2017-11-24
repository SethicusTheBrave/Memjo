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

// example of local storage save
function saveVariable(){
	// saving example variable numberToSave to localstorage under a unique name 1234
	localStorage.setItem('1234', exampleVariable);
}

function getVariable(){
	// saving example variable numberToSave to localstorage under a unique identifier 01234
	var test = localStorage.getItem('1234')
}

<<<<<<< HEAD
=======
// find template and compile it
var templateSource = document.getElementById('results-template').innerHTML,
template = Handlebars.compile(templateSource),
resultsPlaceholder = document.getElementById('results'),
playingCssClass = 'playing',
audioObject = null;

var fetchTracks = function (albumId, callback) {
$.ajax({
	url: 'https://api.spotify.com/v1/albums/' + albumId,
	success: function (response) {
		callback(response);
	}
});
};

var searchAlbums = function (query) {
$.ajax({
	url: 'localhost:8000',
	data: {
		q: query,
		type: 'album'
	},
	success: function (response) {
		resultsPlaceholder.innerHTML = template(response);
	}
});
};

results.addEventListener('click', function (e) {
var target = e.target;
if (target !== null && target.classList.contains('cover')) {
	if (target.classList.contains(playingCssClass)) {
		audioObject.pause();
	} else {
		if (audioObject) {
			audioObject.pause();
		}
		fetchTracks(target.getAttribute('data-album-id'), function (data) {
			audioObject = new Audio(data.tracks.items[0].preview_url);
			audioObject.play();
			target.classList.add(playingCssClass);
			audioObject.addEventListener('ended', function () {
				target.classList.remove(playingCssClass);
			});
			audioObject.addEventListener('pause', function () {
				target.classList.remove(playingCssClass);
			});
		});
	}
}
});

document.getElementById('search-form').addEventListener('submit', function (e) {
e.preventDefault();
searchAlbums(document.getElementById('query').value);
}, false);
>>>>>>> 3cfd2c26f0580ac8cb2412597b1307fc549e668d
