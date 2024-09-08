let sendGetRequestBtnEl = document.getElementById("sendGetRequestBtn");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");
let loadingEL = document.getElementById("loading");


sendGetRequestBtnEl.onclick=function(){
    let url = "https://gorest.co.in/public-api/users";
    // loadingEL.classList.toggle("d-none");
    loadingEL.classList.remove("d-none");
    // requestStatusEl.classList.add("d-none");
    let options={
        method:"GET"
    };
    fetch(url,options)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        // loadingEL.classList.toggle("d-none");
        loadingEL.classList.add("d-none");
        // requestStatusEl.classList.remove("d-none");

        let httpres=JSON.stringify(jsonData);
        httpResponseEl.textContent = httpres;
        let reqstat = jsonData.code;
        requestStatusEl.textContent=reqstat;
    });
}






