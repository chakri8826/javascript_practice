let myContainerEl = document.getElementById("myContainer");
function add(){
    let headEl = document.createElement("h1");
    headEl.textContent="Main Heading Element";
    headEl.classList.add("button");
    myContainerEl.appendChild(headEl);
}
