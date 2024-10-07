let updatePasswordFormEl = document.getElementById("updatePasswordForm");
let newPasswordEl = document.getElementById("newPassword");
let newPasswordErrMsgEl = document.getElementById("newPasswordErrMsg");
let confirmPasswordEl = document.getElementById("confirmPassword");
let confirmPasswordErrMsg = document.getElementById("confirmPasswordErrMsg");



function validatePassFormData(){
    if(newPasswordEl.value===""){
        newPasswordErrMsgEl.textContent="Requried*";
    }
    else{
        newPasswordErrMsgEl.textContent = "";
    }
}

function validateConfirmPassFormData() {
  if (confirmPasswordEl.value === "") {
    confirmPasswordErrMsg.textContent = "Requried*";
  } else {
    confirmPasswordErrMsg.textContent = "";
  }
}

newPasswordEl.addEventListener("blur", validatePassFormData);
confirmPasswordEl.addEventListener("blur", validateConfirmPassFormData);


updatePasswordFormEl.addEventListener("submit",function(event){
    event.preventDefault();
    validatePassFormData();
    validateConfirmPassFormData();
})