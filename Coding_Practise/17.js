let checkBoxWithLabelContainerEl = document.getElementById("checkBoxWithLabelContainer");
let checkboxId="checkbox";
let labelId = "checkboxLabel"

function  onTodoStatusChange(){
     let labelElement = document.getElementById(labelId);
     labelElement.classList.toggle("label-text");
}
let inputEl = document.createElement("input");
inputEl.type="checkbox";
inputEl.id= checkboxId;
inputEl.classList.add("checkbod-label");
inputEl.onclick=function(){
    onTodoStatusChange();
};
checkBoxWithLabelContainerEl.appendChild(inputEl);

let labelEl = document.createElement("label");
labelEl.textContent="Iam a Label";
labelEl.setAttribute("for","checkbox");
labelEl.id = labelId;

checkBoxWithLabelContainerEl.appendChild(labelEl);



