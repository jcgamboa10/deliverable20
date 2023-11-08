var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.addEventListener("DOMContentLoaded", function() {

	const video = document.getElementById("player1");
    const slider = document.getElementById("slider");
    const volume = document.getElementById("volume");

    // Play: plays video and updates volume information
	document.querySelector("#play").addEventListener("click", function() {
        if (video.paused) {
            video.play();
        }
        volume.textContent = slider.value;

	});

    // Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.  
    document.querySelector("#slower").addEventListener("click", function() {
        video.playbackRate = video.playbackRate - .1;
        console.log(video.playbackRate);
	});

    document.querySelector("#faster").addEventListener("click", function() {
        video.playbackRate = video.playbackRate + .1;
        console.log(video.playbackRate);
	});


    // Pauses the video
	document.querySelector("#pause").addEventListener("click", function() {
        if (!video.paused) {
            video.pause();
        }
	});

    // Skip ahead button
	document.querySelector("#skip").addEventListener("click", function() {
        if (video.currentTime + 10 >= video.duration) {
            video.currentTime = 0;
        } else {
            video.currentTime = video.currentTime + 10;
        }
        console.log(video.currentTime);
	});

    // Mute/unmute the video and update the text in the button
    document.querySelector("#mute").addEventListener("click", function() {
        if (video.muted) {
            video.muted = false;
            document.querySelector("#mute").innerHTML = "Mute";
        } else {
            video.muted = true;
            document.querySelector("#mute").innerHTML = "Unmute";

        }
    });

    // Utilize the existing oldSchool class on the video element
    document.querySelector("#vintage").addEventListener("click", function() {
        video.classList.add("oldSchool");
    });

    // Remove the oldSchool class from the video
    document.querySelector("#orig").addEventListener("click", function() {
        video.classList.remove("oldSchool");
    });


    // Change the volume based on the slider and update the volume information.
    slider.addEventListener("input", function () {
        video.volume = parseFloat(this.value / 100); // volume ranges from 0 - 1
        volume.textContent = this.value;
    });
	
});