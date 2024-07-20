let counterElement = document.getElementById("counterValue");
console.log(counterElement)
function onDecrement(){
    let previousCounterValue = counterElement.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) - 1;
    counterElement.textContent=updatedCounterValue;
    

    if(updatedCounterValue>0){
        counterElement.style.color="green";
    }
    else if(updatedCounterValue<0){
        counterElement.style.color="red";
    }
    else{
        counterElement.style.color="black";
    }
}
function onIncrement(){
    let previousCounterValue = counterElement.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) + 1;
    counterElement.textContent=updatedCounterValue;
    if(updatedCounterValue>0){
        counterElement.style.color="green";
    }
    else if(updatedCounterValue<0){
        counterElement.style.color="red";
    }
    else{
        counterElement.style.color="black";
    }
}
function onReset(){
    let updatedCounterValue = 0;
    counterElement.textContent=updatedCounterValue;
    counterElement.style.color="black";
}
