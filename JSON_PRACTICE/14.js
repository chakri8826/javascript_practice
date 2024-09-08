let twentySecondsBtn = document.getElementById("twentySecondsBtn");
let thirtySecondsBtn = document.getElementById("thirtySecondsBtn");
let fortySecondsBtn = document.getElementById("fortySecondsBtn");
let oneMinuteBtn = document.getElementById("oneMinuteBtn");

let timerText = document.getElementById("timerText");
let timeid;
function clearPrev(){
    clearInterval(timeid);
}

function seconds(secondsLeft){
    timerText.textContent=secondsLeft+" seconds left";
    timeid = setInterval(function(){
        if(secondsLeft>1){
            secondsLeft=secondsLeft-1;
            timerText.textContent = secondsLeft + " seconds left";
        }
        else{
            clearPrev();
            timerText.textContent="Yout Moment is over";
        }
    },1000);
}


twentySecondsBtn.onclick=function(){
    clearPrev();
    seconds(20);
    
};
thirtySecondsBtn.onclick=function(){
    clearPrev();
    seconds(30);
    
};
fortySecondsBtn.onclick=function(){
    clearPrev();
    seconds(40);
    
};
oneMinuteBtn.onclick=function(){
    clearPrev();
    seconds(60)
};


