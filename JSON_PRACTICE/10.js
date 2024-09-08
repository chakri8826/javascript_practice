let chatbotMsgList = [
  "Hi",
  "Hey",
  "Good Morning",
  "Good Evening",
  "How can I help you?",
  "Thank You",
];

let chatContainer = document.getElementById("chatContainer");
let userInput = document.getElementById("userInput");
function sendMsgs(){
    let elCont = document.createElement("div");
    elCont.classList.add("msg-to-chatbot-container");
    chatContainer.appendChild(elCont);

    let el =document.createElement("span");
    el.textContent=userInput.value;
    el.classList.add("msg-to-chatbot");

    elCont.appendChild(el);
    userInput.value="";

    let chatbotListLen=chatbotMsgList.length-1;
    let ran = Math.ceil(Math.random() * chatbotListLen);
    
    
    let chatCont = document.createElement("div");
    chatCont.classList.add("msg-from-chatbot-container");
    chatContainer.appendChild(chatCont);

    let chatMsg = document.createElement("span");
    chatMsg.textContent=chatbotMsgList[ran];
    chatMsg.classList.add("msg-from-chatbot");

    chatCont.appendChild(chatMsg);
}
