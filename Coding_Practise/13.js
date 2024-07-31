/* Follow the instructions found in the description to complete the JavaScript functionality.*/

let todoList = [
  {
    text: "Learn HTML",
  },
  {
    text: "Learn CSS",
  },
  {
    text: "Learn JavaScript",
  },
];

let todoItemsContainerEl = document.getElementById("todoItemsContainer");

function todoItemsAdd(todo) {
  let liItemCont = document.createElement("li");
  liItemCont.classList.add("todo-item-container", "d-flex", "flex-row");
  todoItemsContainerEl.appendChild(liItemCont);

  let inputEl = document.createElement("input");
  inputEl.type = "checkbox";
  inputEl.id = "checkboxId";
  inputEl.classList.add("checkbox-input");
  liItemCont.appendChild(inputEl);

  let labelContainer = document.createElement("div");
  labelContainer.classList.add("d-flex", "flex-row", "label-container");
  liItemCont.appendChild(labelContainer);

  let labelEl = document.createElement("label");
  labelEl.setAttribute("for", "checkboxId");
  labelEl.classList.add("checkbox-label");
  labelEl.textContent = todo.text;
  labelContainer.appendChild(labelEl);

  let deleteIconCont = document.createElement("div");
  deleteIconCont.classList.add("delete-icon-container");
  labelContainer.appendChild(deleteIconCont);

  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
  deleteIconCont.appendChild(deleteIcon);
}

for (let eachtodo of todoList) {
  todoItemsAdd(eachtodo);
}
