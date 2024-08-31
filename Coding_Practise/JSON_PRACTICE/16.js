let userInputEl = document.getElementById("userInput");
let keyCodeListEl = document.getElementById("keyCodeList");

function keyPrint(event){
    let li = document.createElement("li");
    li.textContent=event.keyCode;
    keyCodeListEl.appendChild(li);
}


userInputEl.addEventListener("keydown",keyPrint);


