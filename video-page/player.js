//Creates variables from the parameters that were passes in
var element = document.getElementById("player-code");
var vidID = element.getAttribute("vidID");
var currentTag = element.getAttribute("currentTag");
var vidTime = element.getAttribute("vidTime");
var nextTag = element.getAttribute("nextTag");

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: vidID,
        playerVars: { 'controls': 0, 'showinfo': 0, 'rel': 0, 'disablekb': 0},
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

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
    
    // Interval checks every 0.5 seconds
    if(videoPlayed == false){
        timer = setInterval(checkPlayTime, 500);
    }

    // 0 = video has ended, reset videoPlayed
    if(event.data == 0){
        intervalPlayed = true;
        clearInterval(timer);
    }
}

/* Checks to see if the user has watched enough of the video to advance */
function checkPlayTime(){        
    if (!thresholdMet && (vidThreshold * player.getDuration() < player.getCurrentTime())) {
        document.getElementById(nextTag).classList.remove("disabled");
        document.getElementById(nextTag).classList.add("active");

        document.getElementById("ff-button").classList.remove("disabled");
    }

    document.getElementById(currentTag + "-progress").innerHTML = "Progress: " + formatElapsedTime(player.getCurrentTime()) + " of " + vidTime;
}

function formatElapsedTime(secondsElapsed) {
    var time = Math.round(secondsElapsed);
    var min = Math.floor(time/60);
    var sec = time%60;

    if(sec < 10)
        sec = "0" + sec;

    return min + ":" + sec;
}