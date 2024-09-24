let spinnerEl = document.getElementById("spinner");
let userInputEl = document.getElementById("userInput");
let factEl = document.getElementById("fact");

function getFact(event){
    if(event.key==="Enter"){
        factEl.textContent="";
        spinnerEl.classList.remove("d-none");
        let userInp = userInputEl.value;
        if(userInp===""){
            alert("Provide Some Number");
            return;
        }
        else{
            let url = "https://apis.ccbp.in/numbers-fact?number="+userInp;
            let options={
                method:"GET"
            };
            fetch(url,options)
            .then(function(response){
                return response.json();
            })
            .then(function(jsonData){
                spinnerEl.classList.add("d-none");
                factEl.textContent=jsonData.fact;
            })
            
        }
    }
}
userInputEl.addEventListener("keydown",getFact);


