let consoleFormEl = document.getElementById("consoleForm");
let requestUrlEl = document.getElementById("requestUrl");
let requestUrlErrMsgEl = document.getElementById("requestUrlErrMsg");
let requestMethodEl = document.getElementById("requestMethod");
let requestBodyEl = document.getElementById("requestBody");
let responseStatusEL = document.getElementById("responseStatus");
let responseBodyEl = document.getElementById("responseBody");


let formData = {
  requestUrl: "https://gorest.co.in/public-api/users",
  requestMethod: "POST",
  requestBody: "",
};

requestUrlEl.addEventListener("change",function(event){
    formData.requestUrl=event.target.value;
}); 
requestMethodEl.addEventListener("change",function(event){
    formData.requestMethod=event.target.value;
});
requestBodyEl.addEventListener("change",function(event){
    formData.requestBody=event.target.value;
});


function validateFormData(formData){
    let {requestUrl}=formData;
    if(requestUrl===""){
        requestUrlErrMsgEl.textContent="Required*";
    }
    else{
        requestUrlErrMsgEl.textContent="";

    }
}
function onSubmitFormData(formData){
    let {requestUrl,requestMethod,requestBody}=formData;

    let options={
        method:requestMethod,
        headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            Authorization:"Bearer 9d20ff9759f039091f01b85856553d3da51cd6733e491120aa9c1780ceb3104e",
        },
        body:requestBody
    };
    fetch(requestUrl,options)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        responseStatusEL.value=jsonData.code;
        responseBodyEl.textContent=JSON.stringify(jsonData);
        console.log(jsonData);
    });
}
consoleFormEl.addEventListener("submit",function(event){
    event.preventDefault();
    validateFormData(formData);
    onSubmitFormData(formData);
});



// {"id":123456,"name":"KommuCHakradhar","email":"kc@gmail.com","gender":"male","status":"inactive"}