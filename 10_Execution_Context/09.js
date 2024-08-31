let timer = document.getElementById("timer");
let defuserEl = document.getElementById("defuser");
let countdown = 10;



let intervalId = setInterval(function (){
  countdown = countdown - 1;  
  timer.textContent = countdown;
  if(countdown===0){
    timer.textContent="BOOM";  
    clearInterval(intervalId);
  }  
}, 1000);  


 
defuserEl.addEventListener("keydown",function(event){
    let defuserText = defuserEl.value;
    if(event.key==="Enter"  && defuserText==="defuse" && countdown!=0){
        timer.textContent="You did it!";
        clearInterval(intervalId);

    }
    // console.log(defuserText);
});