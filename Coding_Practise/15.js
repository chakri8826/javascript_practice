let checkboxWithLabelContainerEl = document.getElementById(
  "checkboxWithLabelContainer"
);
checkboxWithLabelContainerEl.classList.add("text-center", "p-5");

let inputEl = document.createElement("input");
inputEl.type = "checkbox";
inputEl.id = "checkbox";
checkboxWithLabelContainerEl.appendChild(inputEl);

let labelEl = document.createElement("label");
labelEl.textContent = "Click Me";
labelEl.setAttribute("for", "checkbox");
labelEl.classList.add("ml-3");
labelEl.id = "checkboxLabel";
checkboxWithLabelContainerEl.appendChild(labelEl);
