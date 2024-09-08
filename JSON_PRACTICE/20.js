let sendPostRequestBtnEl = document.getElementById("sendPostRequestBtn");
let requestBodyEl = document.getElementById("requestBody");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");
let loadingEl = document.getElementById("loading");

function postmeth(){
    let url = "https://gorest.co.in/public-api/users";
    let data = requestBodyEl.value;
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
          "Bearer 6047f56ab4402686d0bb975ccdb6c028c392d63623729e1306a492e15d849d85",
      },
      body:data,
    };
    loadingEl.classList.remove("d-none");
    requestStatusEl.classList.add("d-none");

    fetch(url,options)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        requestStatusEl.classList.remove("d-none");
        loadingEl.classList.add("d-none");

        let requestStatus = jsonData.code;
        let httpResponse = JSON.stringify(jsonData);
        requestStatusEl.textContent=requestStatus;
        httpResponseEl.textContent=httpResponse;
    });
}
sendPostRequestBtnEl.addEventListener("click",postmeth);







