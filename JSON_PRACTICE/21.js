let userInputEl = document.getElementById("userInput");
let requestBodyEl = document.getElementById("requestBody");
let sendPutRequestBtnEl = document.getElementById("sendPutRequestBtn");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");

function update(){
  let data = requestBodyEl.value;
  let reqId = userInputEl.value;
  let url = "https://gorest.co.in/public-api/users/"+reqId;
  let options={
    method:"PUT",
    headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        Authorization:"Bearer 6047f56ab4402686d0bb975ccdb6c028c392d63623729e1306a492e15d849d85"
    },
    body:data
  }
  fetch(url,options)
  .then(function(response){
    return response.json();
  })
  .then(function(jsonData){
    requestStatusEl.textContent=jsonData.code;
    httpResponseEl.textContent=JSON.stringify(jsonData);
  })
}

sendPutRequestBtnEl.addEventListener("click",update);

 
