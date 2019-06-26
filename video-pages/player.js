//Creates variables from the parameters that were passes in
var element = document.getElementById("player-code");
var vidID = element.getAttribute("vidID");
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
        playerVars: { 'controls': 0, 'showinfo': 0, 'rel': 0 },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    //event.target.playVideo();
}
    
var vidThreshold = 0.2;
var intervalPlayed = false;
var timer;

function onPlayerStateChange(event) {
    //var timeLabel = document.getElementById("timeLabel");
    
    // Makes sure setInterval is only called once. Interval checks every second
    if(intervalPlayed == false){
        timer = setInterval(checkPlayTime, 1000);
        intervalPlayed = true;
    }

    // 5 = video has been queued, reset intervalPlayed
    if(event.data == 5){
        intervalPlayed = false;
    }
}

/* Checks to see if the user has watched enough of the video to advance */
function checkPlayTime(){        
    console.log("Current Time = " + player.getCurrentTime());
    console.log("Threshold Duration = " + (vidThreshold * player.getDuration()));

    if (vidThreshold * player.getDuration() < player.getCurrentTime()) {
        clearInterval(timer);
        document.getElementById(nextTag).classList.remove("disabled");
    }
    timeLabel.innerHTML = Math.round(player.getCurrentTime())  + " Seconds";
}