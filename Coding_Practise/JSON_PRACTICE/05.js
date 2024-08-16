    let numbers = [17, 31, 77, 20, 63];

    let userInput = document.getElementById("userInput");
    let findBtn = document.getElementById("findBtn");
    let indexOfNumber = document.getElementById("indexOfNumber");

    findBtn.onclick=function(){
        let userInpVal = parseInt(userInput.value);
        let ind = numbers.findIndex(function(eachItem){
            if(eachItem===userInpVal){
                return true;
            }
            else{
                return false;
            }
        });
        indexOfNumber.textContent=ind;
    }

