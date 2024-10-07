let addUserFormEl = document.getElementById("addUserForm");
let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let nameErrMsgEl = document.getElementById("nameErrMsg");
let emailErrMsgEl = document.getElementById("emailErrMsg");

nameEl.addEventListener("blur",function(){
    if(nameEl.value===""){
        nameErrMsgEl.textContent="Required*";
    }
    else{
        nameErrMsgEl.textContent="";
    }
});

emailEl.addEventListener("blur", function () {
  if (emailEl.value === "") {
    emailErrMsgEl.textContent = "Required*";
  } else {
    emailErrMsgEl.textContent = "";
  }
});

addUserFormEl.addEventListener("submit",function(event){
    event.preventDefault();
});