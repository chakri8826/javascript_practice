let inpEl = document.createElement("input");
function printKeyDown(event){
    console.log(event.key);
}
inpEl.addEventListener("keydown",printKeyDown);
document.body.appendChild(inpEl);

