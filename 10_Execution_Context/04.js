let setIntervalbtn = document.getElementById("setInterval");
let clearIntervalbtn = document.getElementById("clearInterval");

let uniqueId=null;
let count=0;
setIntervalbtn.onclick=function(){
    uniqueId=setInterval(function(){
        console.log(count);
        count=count+1;
    },1000);
};

clearIntervalbtn.onclick=function(){
    clearInterval(uniqueId);
}
