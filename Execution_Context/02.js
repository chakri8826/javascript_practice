let savebutton = document.getElementById("saveButton");
let textAreaElement = document.getElementById("message");
savebutton.onclick=function(){
     let userEnteredText = textAreaElement.value;
     localStorage.setItem("userEnteredText",userEnteredText);
}

let storedUserText = localStorage.getItem("userEnteredText");
if(storedUserText===""){
    textAreaElement.value="";
}
else{
    textAreaElement.value=storedUserText;
}



