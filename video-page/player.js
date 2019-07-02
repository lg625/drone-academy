//Creates variables from the attributes that were passed in
var element = document.getElementById("player-code");
var vidID = element.getAttribute("vidID");
var currentTag = element.getAttribute("currentTag");
var vidTime = element.getAttribute("vidTime");
var nextTag = element.getAttribute("nextTag");

//Imports YoutTube IFrame js code 
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;

//Creates YT Player object with set paremeters
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: vidID,
        playerVars: { 'controls': 0, 'showinfo': 0, 'rel': 0, 'disablekb': 1}, //Disables controls for the user
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

//Gives the play/pause buttons functionality once the YT Player object has loaded
function onPlayerReady(event) {
    var playButton = document.getElementById("play-button");
    playButton.addEventListener("click", function() {
      player.playVideo();
    });
    
    var pauseButton = document.getElementById("pause-button");
    pauseButton.addEventListener("click", function() {
      player.pauseVideo();
    });


} 
    
var vidThreshold = 0.2;
var thresholdMet = false;
var videoPlayed = false;
var timer;

function onPlayerStateChange(event) {
    
    // Interval checks every 0.5 seconds to see if the video threshold has been met and to update user progress
    if(videoPlayed == false){
        timer = setInterval(checkPlayTime, 500);
    }

    // 0 = video has ended, reset videoPlayed
    if(event.data == 0){
        videoPlayed = true;
        clearInterval(timer);
    }
}

/* Checks to see if the user has watched enough of the video to advance */
function checkPlayTime(){        
    //If statement checks: if there is a nextTag to enable -> if so, has the threshold been met already -> if not, is the threshold now met
    if (nextTag.length != 0 && !thresholdMet && (vidThreshold * player.getDuration() < player.getCurrentTime())) {
        //Enable the next link in the sidebar
        document.getElementById(nextTag).classList.remove("disabled");

        //Enable the fast forward button and link it to the next video
        document.getElementById("ff-button").classList.remove("disabled");
        document.getElementById("ff-button").setAttribute("href", nextTag+".html");

        //Set thresholdMet to true so this if statement does not run anymore when this method is called
        thresholdMet = true;
    }

    //Update the user progress label
    document.getElementById(currentTag + "-progress").innerHTML = "Progress: " + formatElapsedTime(player.getCurrentTime()) + " of " + vidTime;
}

//Format the elapsed seconds recieved from player.getCurrentTime() into a correctly formatted time
function formatElapsedTime(secondsElapsed) {
    var time = Math.round(secondsElapsed);
    var min = Math.floor(time/60);
    var sec = time%60;

    if(sec < 10){
        sec = "0" + sec;
    }
    return min + ":" + sec;
}