let skillList = [
  {
    skillName: "HTML",
    uniqueNo: 1,
  },
  {
    skillName: "CSS",
    uniqueNo: 2,
  },
  {
    skillName: "JavaScript",
    uniqueNo: 3,
  },
];

let skillListContainerEl = document.getElementById("skillListContainer");


function onTodoStatusChange(labelElid){
  labelValue = document.getElementById(labelElid);
  labelValue.classList.toggle("status");
};

function createAndAppendTodo(eachtodo){
    let todoElement = document.createElement("li");
    let checkboxid="checkbox"+eachtodo.uniqueNo;
    let labelEl = document.createElement("label");
    let labelElid="label"+eachtodo.uniqueNo;
    skillListContainerEl.appendChild(todoElement)

    let checkboxEl = document.createElement("input");
    checkboxEl.type="checkbox";
    checkboxEl.id = checkboxid;
    checkboxEl.onclick=function(){
      onTodoStatusChange(labelElid);
    };
    todoElement.appendChild(checkboxEl);

    labelEl.setAttribute("for", checkboxid);
    labelEl.classList.add("checkbox-label");
    labelEl.id=labelElid;
    labelEl.textContent= eachtodo.skillName;
    todoElement.appendChild(labelEl);
}

for(let eachtodo of skillList){
  createAndAppendTodo(eachtodo);
}