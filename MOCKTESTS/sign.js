let inputElementName = document.getElementById("inputElement");
let passwordElementPass = document.getElementById("passwordElement");
let messageTextEl = document.getElementById("messageText");

function signIn(){
    if(inputElementName.value===""){
        messageTextEl.textContent = "Please Enter Username";
    }
    else if(passwordElementPass.value===""){
        messageTextEl.textContent = "Please Enter Password";
    }
    else{
        messageTextEl.textContent = "Welcome";
    }
}
    