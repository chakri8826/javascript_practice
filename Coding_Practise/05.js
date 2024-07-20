let billAmountElement = document.getElementById("billAmount");
let percentageTipElement = document.getElementById("percentageTip");
let tipAmountElement=document.getElementById("tipAmount");
let totalAmountElement = document.getElementById("totalAmount");


let errorMessageElement = document.getElementById("errorMessage");
function calculateBtn(){
    if(billAmountElement.value==="" || percentageTipElement.value===""){
        errorMessageElement.textContent="Please Enter a Valid Input";
    }
    else{
        let givenBillAmount = parseInt(billAmountElement.value);
        let givenPercentageTip = parseInt(percentageTipElement.value);
        let calculatedTip = (givenPercentageTip/100) * 100;
        let totalAmount = givenBillAmount +calculatedTip;
        tipAmountElement.value=calculatedTip;
        totalAmountElement.value=totalAmount;
        errorMessageElement.textContent="";
    }
}
