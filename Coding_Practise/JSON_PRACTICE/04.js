let arr = [1, 7, 3, 1, 0, 20, 77];

let startIndexInput = document.getElementById("startIndexInput");
let deleteCountInput = document.getElementById("deleteCountInput");
let itemToAddInput = document.getElementById("itemToAddInput");

let spliceBtn = document.getElementById("spliceBtn");
let updatedArray = document.getElementById("updatedArray");

function convertArrtoJSONString(){
    let stringifiedArr = JSON.stringify(arr);
    updatedArray.textContent=stringifiedArr;
}
convertArrtoJSONString();

spliceBtn.onclick=function spliceArray(){
    let startInd = startIndexInput.value;
    let deleteInd = deleteCountInput.value;
    let itemToAdd = itemToAddInput.value;

    if(startInd===""){
        alert("Enter the Start Index");
        return;
    }
    if(deleteInd===""){
        deleteInd=0;
    }
    if(itemToAdd===""){
        arr.splice(parseInt(startInd),parseInt(deleteInd));
    }
    else{
        arr.splice(parseInt(startInd),parseInt(deleteInd),itemToAdd);
    }
    startIndexInput.value="";
    deleteCountInput.value="";
    itemToAddInput.value="";
    convertArrtoJSONString();

};








