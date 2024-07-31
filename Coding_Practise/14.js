let groceryList = [
  "Apples",
  "Boost Drink",
  "Butterscotch Ice Cream",
  "Tomato Ketchup",
  "Dairy Milk Chocolates",
  "Pasta",
];
let groceryListContainerEl = document.getElementById("groceryListContainer");
let titleEl = document.createElement("h1");
let listCont = document.createElement("div");
let liCont = document.createElement("ul");


groceryListContainerEl.classList.add("bg-cont");

titleEl.classList.add("title");
titleEl.textContent = "Grocery List";
groceryListContainerEl.appendChild(titleEl);

listCont.classList.add("list-cont");
groceryListContainerEl.appendChild(listCont);

listCont.appendChild(liCont);

for(let groceryItem of groceryList){
    let liEl = document.createElement("li");
    liEl.textContent = groceryItem;
    liCont.appendChild(liEl);
}
