let quoteDisplayEl = document.getElementById("quoteDisplay");
let quoteInputEl = document.getElementById("quoteInput");

let url = "https://apis.ccbp.in/random-quote";
let options = {
    method: "GET",
};
fetch(url, options)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonData) {
        quoteDisplayEl.textContent = jsonData.content;
    });
    
    let spinnerEl = document.getElementById("spinner");
    spinnerEl.classList.remove("d-none");
    let imageEl = document.getElementById("image");
    imageEl.classList.add("d-none");
    let spanEl = document.getElementById("span");
    spanEl.classList.add("d-none");

let timerEl = document.getElementById("timer");
let count=0;
let un = setInterval(function(){
    spanEl.classList.remove("d-none");
    imageEl.classList.remove("d-none");
    spinnerEl.classList.add("d-none");
    timerEl.textContent=count;
    count++;
},1000);


let resultEl = document.getElementById("result");
let submitBtnEl = document.getElementById("submitBtn");
submitBtnEl.addEventListener("click",function(event){
    let quoteVal = quoteInputEl.value;
    let quoteDisVal = quoteDisplayEl.textContent;
    if(quoteVal!==quoteDisVal){
        resultEl.textContent = "You have typed wrongly";
    }
    else{
        clearInterval(un);
        let timerVal = timerEl.textContent;
        resultEl.textContent = "You have typed in "+timerVal+" seconds";
    }
});

let resetBtnEl = document.getElementById("resetBtn");
resetBtnEl.addEventListener("click",function(){
    count=0;
    quoteInputEl.textContent="";
    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        quoteDisplayEl.textContent = jsonData.content;
      });

});

