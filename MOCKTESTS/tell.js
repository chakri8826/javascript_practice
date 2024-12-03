let text = document.getElementById("text");
let button = document.getElementById("button");
button.onclick = function () {
  let val = text.value;
  localStorage.setItem("yourStory", val);
};
let val = localStorage.getItem("yourStory");
text.textContent=val;

