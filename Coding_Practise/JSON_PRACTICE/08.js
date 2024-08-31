let msg = document.getElementById("msg");
let saveBtn = document.getElementById("saveBtn");
let clearBtn = document.getElementById("clearBtn");
let storageKey = "userInput";

saveBtn.onclick=function(){
    let msgVal = msg.value;
    localStorage.setItem(storageKey,msgVal);
}

clearBtn.onclick = function () {
  msg.value = "";
  localStorage.removeItem(storageKey);
};

    let storedUserInputValue = localStorage.getItem(storageKey);

    if(storedUserInputValue!==null){
        msg.value=storedUserInputValue;
    }
    else{
        msg.value="";
    }









