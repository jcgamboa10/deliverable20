var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.addEventListener("DOMContentLoaded", function() {

	const video = document.getElementById("player1");

	document.querySelector("#play").addEventListener("click", function() {
        if (video.paused) {
            video.play();
        }
	});

	document.querySelector("#pause").addEventListener("click", function() {
        if (!video.paused) {
            video.pause();
        }
	});
	
});