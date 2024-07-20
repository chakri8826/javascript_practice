let firstNumberElement = document.getElementById("firstNumber");
let secondNumberElement = document.getElementById("secondNumber");

let userInputElement = document.getElementById("userInput");
let gameResultElement = document.getElementById("gameResult");

let successMessageText = "Congratulations! you got it right.";
let failuteMessageText = "Please try Again";

function restartButton() {
  let fn = Math.random() * 100;
  let sn = Math.random() * 100;
  firstNumberElement.textContent = Math.ceil(fn);
  secondNumberElement.textContent = Math.ceil(sn);
  gameResultElement.textContent = "";
  userInputElement.value = "";
}

restartButton();


function checkButton() {
  let fn = parseInt(firstNumberElement.textContent);
  let sn = parseInt(secondNumberElement.textContent);
  let sum = fn + sn;
  let val = parseInt(userInputElement.value);
  if (sum === val) {
    gameResultElement.textContent = "Congratulations! you got it right";
    gameResultElement.style.backgroundColor = "#028a0f";
  } else {
    gameResultElement.textContent = "Please Try Again";
    gameResultElement.style.backgroundColor = "#1e217c";
  }
}
