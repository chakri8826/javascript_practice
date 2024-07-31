let todoItemsContainer = document.getElementById("todoItemsContainer");
let addTodoButton = document.getElementById("addTodoButton");
let todoList = [
  {
    text: "Learn HTML",
    uniqueNo:1,
},
{
    text: "Learn CSS",
    uniqueNo:2,
},
{
    text: "Learn JavaScript",
    uniqueNo:3,
  },
];

addTodoButton.onclick=function(){
    addTodo();
};

function deleting(todoElement){
    todoItemsContainer.removeChild(todoElement);
}
function striking(labelId){
    labelEl = document.getElementById(labelId);
    labelEl.classList.toggle("text");
};
function createAndAppendTodo(todo) {
    let checkboxId="checkbox"+todo.uniqueNo;
    let labelId = "label"+todo.uniqueNo;
  let todoElement = document.createElement("li");
  todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
  todoItemsContainer.appendChild(todoElement);

  let inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  inputElement.id = checkboxId;
  inputElement.classList.add("checkbox-input");
  inputElement.onclick=function(){
    striking(labelId);
  };
  todoElement.appendChild(inputElement);

  let labelContainer = document.createElement("div");
  labelContainer.classList.add("label-container", "d-flex", "flex-row");
  todoElement.appendChild(labelContainer);

  let labelElement = document.createElement("label");
  labelElement.setAttribute("for", checkboxId);
  labelElement.classList.add("checkbox-label");
  labelElement.textContent = todo.text;
  labelElement.id = labelId;
  labelContainer.appendChild(labelElement);

  let deleteIconContainer = document.createElement("div");
  deleteIconContainer.classList.add("delete-icon-container");
  labelContainer.appendChild(deleteIconContainer);

  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
  deleteIcon.onclick=function(){
    deleting(todoElement);
  }
  deleteIconContainer.appendChild(deleteIcon);
}

for (let todo of todoList) {
  createAndAppendTodo(todo);
}

function  addTodo(){
    let todosCount=todoList.length;
    todosCount=todosCount+1;
    let inpEl = document.getElementById("todoUserInput");
    inpValue = inpEl.value;
    if (inpValue === "") {
      alert("Please enter the valid text");
      return;
    }
    let newTodo={
        text:inpValue,
        uniqueNo:todosCount,
    };
    createAndAppendTodo(newTodo);
    inpEl.value="";
}
