let quoteDispalyEl = document.getElementById("quoteDisplay");
let url = "https://apis.ccbp.in/random-quote";
let options = {
  method: "GET",
};
fetch(url, options)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonData) {
    quoteDispalyEl.textContent = jsonData.content;
  });
let spinnerEl = document.getElementById("spinner");
spinnerEl.classList.remove("d-none");
let imageEl = document.getElementById("image");
imageEl.classList.add("d-none");
let spanEl = document.getElementById("span");
spanEl.classList.add("d-none");

let timerEl = document.getElementById("timer");
let timerParaEl = document.createElement("p");
timerParaEl.classList.add("timer-para");
timerEl.appendChild(timerParaEl);
let count = 1;
let uniqueNo1 = setInterval(function () {
  spanEl.classList.remove("d-none");
  imageEl.classList.remove("d-none");
  spinnerEl.classList.add("d-none");
  timerEl.textContent = count;
  count += 1;
}, 1000);

let quoteInputEl = document.getElementById("quoteInput");
let submitBtnEl = document.getElementById("submitBtn");
let resultEl = document.getElementById("result");
submitBtnEl.addEventListener("click", function () {
  if (
    quoteInputEl.value === "" ||
    quoteInputEl.value !== quoteDispalyEl.textContent
  ) {
    resultEl.textContent = "You typed incorrect sentence";
  } else {
    count = count - 1;
    clearInterval(uniqueNo1);
    resultEl.textContent = "You typed in " + count;
  }
});

let resetBtnEl = document.getElementById("resetBtn");
resetBtnEl.addEventListener("click", function () {
  quoteInputEl.value = "";
  resultEl.textContent = "";
  clearInterval(uniqueNo1);
  count = 0;
  setInterval(function () {
    timerEl.textContent = count;
    count += 1;
  }, 1000);
  let url = "https://apis.ccbp.in/random-quote";
  let options = {
    method: "GET",
  };
  fetch(url, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonData) {
      quoteDispalyEl.textContent = jsonData.content;
    });
});



