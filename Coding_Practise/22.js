let counterValueEl = document.getElementById("counterValue");
let clickCount=localStorage.getItem("clickCount");

if(clickCount===null){
    counterValueEl.textContent=0;
}
else{
    counterValueEl.textContent=clickCount;
}
 

function count() {
    let prev=counterValueEl.textContent;
    let upda = parseInt(prev)+1;
    localStorage.setItem("clickCount",upda);
    counterValueEl.textContent=upda;
}


