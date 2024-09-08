let jokeTextEl = document.getElementById("jokeText");
let jokeBtnEl = document.getElementById("jokeBtn");
let spinnerEl = document.getElementById("spinner");

function generateJoke(){
    jokeTextEl.classList.add("d-none");
    spinnerEl.classList.remove("d-none");
    
    let url = "https://apis.ccbp.in/jokes/random";
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        // let {value}=jsonData;
        spinnerEl.classList.add("d-none");
        jokeTextEl.classList.remove("d-none");
        jokeTextEl.textContent=jsonData.value;
    });
}

jokeBtnEl.addEventListener("click",generateJoke);