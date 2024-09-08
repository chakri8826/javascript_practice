let startBtn = document.getElementById("startBtn");
let counterText = document.getElementById("counterText");
let fromUserInput = document.getElementById("fromUserInput");
let toUserInput = document.getElementById("toUserInput");


function displayNumbers(from,to){
    counterText.textContent=from;
    let uniqueId = setInterval(function () {
        if (from<to) {
            from = from + 1;
            counterText.textContent = from;
        }
        else{
            clearInterval(uniqueId);
        }
     }, 1000);
}

function onClickStart(){
     if (fromUserInput.value === "") {
       alert("Enter the from value");
     } else if (toUserInput.value === "") {
       alert("Enter the to value");
     }
      else {
        let fromval = parseInt(fromUserInput.value);
        let toval = parseInt(toUserInput.value);
        displayNumbers(fromval,toval);
    }
}




