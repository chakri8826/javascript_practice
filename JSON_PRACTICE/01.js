let bikes = ["Hero", "Honda", "Bajaj", "Suzuki", "Yamaha"];
let person = {
  name: "Rahul",
  age: 25,
  gender: "Male",
};
let todos = [
  {
    todo: "Attending CCBP sessions",
    todoStatus: "Completed",
  },
  {
    todo: "Completing practice sets",
    todoStatus: "Not Completed",
  },
  {
    todo: "Asking doubts",
    todoStatus: "Completed",
  },
];

let stringifiedBikes=JSON.stringify(bikes);
let stringifiedPerson=JSON.stringify(person);
let stringifiedTodos=JSON.stringify(todos);

let jsonContainerEl = document.getElementById("jsonContainer");
let bikess = document.createElement("h1");
let personss = document.createElement("h1");
let todoss = document.createElement("h1");

bikess.textContent=stringifiedBikes;
bikess.classList.add("styling");

personss.textContent=stringifiedPerson;
personss.classList.add("styling");

todoss.textContent=stringifiedTodos;
todoss.classList.add("styling");

jsonContainerEl.appendChild(bikess);
jsonContainerEl.appendChild(personss);
jsonContainerEl.appendChild(todoss);
