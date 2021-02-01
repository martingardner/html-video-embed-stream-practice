(function(){
    var videoR = document.getElementById("video")
    var playButton = document.getElementById("play");
    var pauseButton = document.getElementById("pause");
    var jumpTo = document.getElementById("jumpTo");

    videoR.onloadedmetadata = function(){
        console.log('video loaded');
        console.log('video duration is: ', videoR.duration);
    }

    videoR.onplay = function(){
        //on control play button clicked
        console.log('control play');
    }

    videoR.onpause = function(){
        //on control pause button clicked
        console.log('control pause');
    }

    videoR.onended = function(){
        //when video hits end of video
        console.log('video end');
    }

    videoR.ontimeupdate = function(){
        //per tick of time of video
        console.log('ontimeupdate ', videoR.currentTime);
    }

    videoR.onseeking = function(){
        //dragging play around
        console.log('onseeking');
    }

    videoR.onseeked = function(){
        //on mouse up of dragging play around
        console.log('onseeked');
    }

    playButton.addEventListener("click", function(){
        videoR.play();
    });

    pauseButton.addEventListener("click", function(){
        videoR.pause();
    });

    jumpTo.addEventListener("keyup", function(){
        console.log('e', jumpTo.value);
        console.log('jumpTo value', jumpTo.value);
        if(jumpTo.value){
            videoR.currentTime = jumpTo.value;
        }
    });




})()