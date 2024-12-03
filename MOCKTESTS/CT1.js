let mainHeadingEL = document.getElementById("mainHeading");
mainHeadingEL.textContent = "Welcome to JS";
mainHeadingEL.style.backgroundColor = "#000000";
mainHeadingEL.style.color = "#b942f5";
mainHeadingEL.style.fontFamily = "Roboto";

let heading1El = document.getElementById("heading1");
let heading2El = document.getElementById("heading2");
function changeText() {
  heading1El.textContent = "Static";
  heading1El.style.color = "#eb34c0";
  heading2El.textContent = "Responsive";
  heading2El.style.backgroundColor = "#197030";
}