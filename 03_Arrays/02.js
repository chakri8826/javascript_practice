let h1Element = document.createElement("h1");
h1Element.textContent = "WebTechnologies";

// --4-- ADDING STYLES USING ClassList.add()
// h1Element.classList.add("heading");

//-1- APPENDING ELEMENT TO DOCUMENT BODY OBJECT
// document.body.appendChild(h1Element);

// --2-- APPENDING ELEMENT TO EXISTING CONTAINER ELEMENT
let containerElement = document.getElementById("mycontainer");
containerElement.appendChild(h1Element);

let btnElement = document.createElement("button");
btnElement.textContent = "Change Heading";
containerElement.appendChild(btnElement);

// --3-- FUNCTION EXPRESSION
btnElement.onclick = function () {
  h1Element.textContent = "HI CHAKRI";
  h1Element.classList.add("heading");
};

let removeStylesBtnElement = document.createElement("button");
removeStylesBtnElement.textContent = "Remove Styles";
removeStylesBtnElement.onclick = function () {
  h1Element.classList.remove("heading");
};
containerElement.appendChild(removeStylesBtnElement);