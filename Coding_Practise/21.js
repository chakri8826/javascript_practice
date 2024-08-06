let reviewsContainerEl = document.getElementById("reviewsContainer");
let titleInputEl = document.getElementById("titleInput");
let reviewTextAreaEl = document.getElementById("reviewTextArea");

let titleEl = document.createElement("h1");
let reviewEl = document.createElement("p");
function addBut(){
    titleInputVal = titleInputEl.value;
    titleEl.classList.add("title");
    titleEl.textContent = "Movie Title: " + titleInputVal;

    reviewVal =reviewTextAreaEl.value;
    reviewEl.classList.add("review");
    reviewEl.textContent=reviewVal;
    reviewsContainerEl.appendChild(titleEl);
    reviewsContainerEl.appendChild(reviewEl);
}
