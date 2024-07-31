let GrocerryList = [
  "Milk",
  "Peanut Butter",
  "Choco Chips",
  "Tomato Sauce",
  "Cup Cakes",
  "Fruits",
];

let bgContainerEl = document.createElement("div");
bgContainerEl.classList.add("bg-container");
document.body.appendChild(bgContainerEl);

let headingEl = document.createElement("h1");
headingEl.classList.add("heading");
headingEl.textContent = "Grocerry List";
bgContainerEl.appendChild(headingEl);

let ulContainer = document.createElement("ul");
ulContainer.classList.add("list-container");
bgContainerEl.appendChild(ulContainer);

for (let eachItem of GrocerryList) {
  let item = document.createElement("li");
  item.textContent = eachItem;
  ulContainer.appendChild(item);
}

let inputElement = document.createElement("input");
inputElement.type = "checkbox";
inputElement.id = "myCheckBox";
bgContainerEl.appendChild(inputElement);

let labelElement = document.createElement("label");
labelElement.setAttribute("for", "myCheckBox");
labelElement.textContent = "  Need Home Delivery";
labelElement.classList.add("delivery-text");
bgContainerEl.appendChild(labelElement);

let breakEl = document.createElement("br");
bgContainerEl.appendChild(breakEl);


let btnEl = document.createElement("button");
btnEl.classList.add("btn", "btn-primary");
btnEl.textContent = "Proceed to Pay";
bgContainerEl.appendChild(btnEl);


