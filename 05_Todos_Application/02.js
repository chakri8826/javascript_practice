let todolist = [
    {
        text:"Learn Html"
    },
    {
        text:"Learn CSS"
    },
    {
        text:"Learn JavaScript"

    },
];
function createAndAppendTodo(todo){

    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = "checkboxInput";
    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("d-flex", "flex-row", "label-container");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", "checkboxInput");
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("li");
    deleteIcon.classList.add("delete-icon", "fa-trash-alt","far");
    deleteIconContainer.appendChild(deleteIcon);

}

for(let eachtodo of todolist){
    createAndAppendTodo(eachtodo);
}   
