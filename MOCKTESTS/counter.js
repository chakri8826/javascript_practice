let counterValueEl = document.getElementById("counterValue");

function onDecrement() {
  let counterValue = parseInt(counterValueEl.textContent);
  if (counterValue % 2 !== 0) {
    counterValueEl.textContent = counterValue - 1;
  } else {
    counterValueEl.textContent = counterValue - 2;
  }
}

function onReset() {
  counterValueEl.textContent = 0;
}

function onIncrement() {
  let counterValue = parseInt(counterValueEl.textContent);
  if (counterValue % 2 !== 0) {
    counterValueEl.textContent = counterValue + 10;
  } else {
    counterValueEl.textContent = counterValue + 5;
  }
}
