let inputElement = document.createElement("input");
inputElement.type = "checkbox";
inputElement.id = "mycheckbox";
document.body.appendChild(inputElement);

let labelElement = document.createElement("label");
// labelElement.htmlFor = "mycheckbox";
labelElement.setAttribute("for", "mycheckbox");
labelElement.textContent = "Graduated";
document.body.appendChild(labelElement);





