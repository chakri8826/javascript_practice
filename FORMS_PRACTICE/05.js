let questionsFormEl = document.getElementById("questionsForm");
let cityHyderabadEl = document.getElementById("cityHyderabad");
let cityChennaiEl = document.getElementById("cityChennai");
let cityDelhiEl = document.getElementById("cityDelhi");
let cityMumbaiEl = document.getElementById("cityMumbai");
let resultMsgEl = document.getElementById("resultMsg");

let selectedCity=null;
let capitalCity="Delhi";

cityHyderabadEl.addEventListener("change", function (event) {
  selectedCity = event.target.value;
});

cityChennaiEl.addEventListener("change", function (event) {
  selectedCity = event.target.value;
});
cityDelhiEl.addEventListener("change", function (event) {
  selectedCity = event.target.value;
});

cityMumbaiEl.addEventListener("change", function (event) {
  selectedCity = event.target.value;
});


questionsFormEl.addEventListener("submit", function (event) {
  event.preventDefault();
  if(selectedCity===null){
    resultMsgEl.textContent="Please select something";
    resultMsgEl.style.color = "#dc3545";
}
else if(selectedCity!=capitalCity){
      resultMsgEl.textContent="Wrong Answer";
      resultMsgEl.style.color = "#dc3545";
    }
    else{
      resultMsgEl.textContent="Correct Answer";
      resultMsgEl.style.color = "#2b9a40";

  }
});
