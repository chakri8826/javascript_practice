let wordCloud = [
  "Hello",
  "hii",
  "how",
  "what",
  "you",
  "yourself",
  "name",
  "victory",
  "food",
  "lovely",
  "beautiful",
  "written",
  "where",
  "who",
  "awesome",
];
let wordsContainer = document.getElementById("wordsContainer");
let userInput = document.getElementById("userInput");
let errorMsg = document.getElementById("errorMsg");
let error = "Please enter valid text";
// if(userinputVal===""){
  //   errorMsg.textContent="
  //   errorMsg.classList.add("error-msg");
  // }
  
  function createAndAddWordToWordCloud(word){
    let spanEl = document.createElement("span");
    let size = Math.ceil(Math.random()*100);
    spanEl.style.fontSize=size+"px";
    spanEl.textContent=word;
    spanEl.classList.add("m-3");
    wordsContainer.appendChild(spanEl);
}
for(let word of wordCloud){
  createAndAddWordToWordCloud(word);
}

function addbtn(){
  let userinputVal = userInput.value;
  if(userinputVal!==""){
    userInput.value="";
    errorMsg.textContent="";
    createAndAddWordToWordCloud(userinputVal);
  }
  else{
    errorMsg.textContent=error;
  }
}
