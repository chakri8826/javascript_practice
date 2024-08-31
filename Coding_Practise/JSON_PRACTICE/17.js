let defuser = document.getElementById("defuser");
let timer = document.getElementById("timer");
let time =  parseInt(timer.textContent);

let uniqueId = setInterval(function () {
  time = time - 1;
  timer.textContent = time;
  if (time < 1) {
    timer.textContent = "BOOM!!!";
    clearInterval(uniqueId);
  }
}, 1000);

function bomb(event){
    if(event.key==="Enter" && defuser.value==="defuse" && time!==0){
        timer.textContent="You did it!";
        clearInterval(uniqueId);
    }
}

defuser.addEventListener("keydown",bomb);




