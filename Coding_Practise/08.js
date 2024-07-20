let bgColorsArray = [
  "#e75d7c",
  "#b16cef",
  "#53cca4",
  "#efc84d",
  "#628ef0",
  "#184b73",
  "#883e7f",
  "#ed048b",
];

let bgContainerElement = document.getElementById("bgContainer");
let buttonElement = document.getElementById("button");

bgContainerElement.style.backgroundColor = bgColorsArray[0];

function Clickme() {
  let noOfBgColors = bgColorsArray.length;
  let bgColorIndex = Math.ceil(Math.random() * noOfBgColors);
  if (bgColorIndex == noOfBgColors) {
    bgColorIndex = bgColorIndex - 1;
  } else {
    let bgColor = bgColorsArray[bgColorIndex];
    bgContainerElement.style.backgroundColor = bgColor;
  }
}
