let itemList = [
  {
    itemName: "Veg Biryani",
    uniqueNo: 1,
  },
  {
    itemName: "Chicken 65",
    uniqueNo: 2,
  },
  {
    itemName: "Paratha",
    uniqueNo: 3,
  },
];

let itemListContainerEl = document.getElementById("itemListContainer");

function onDeleteItem(itemid){
    itemEl = document.getElementById(itemid);
    itemListContainerEl.removeChild(itemEl);
}

function addAppendItem(eachitem){
    let itemid = "item"+eachitem.uniqueNo;
    let buttonid = "button"+eachitem.uniqueNo;
    let itemEl = document.createElement("li");

    itemEl.id=itemid;
    itemEl.classList.add("ordered-item")
    itemEl.textContent=eachitem.itemName;
    itemListContainerEl.appendChild(itemEl);

    let buttonEl = document.createElement("button");
    buttonEl.id=buttonid;
    buttonEl.classList.add("btn","btn-danger","ml-3");
    buttonEl.textContent="Cancel";
    buttonEl.onclick=function(){
        onDeleteItem(itemid);
    }
    itemEl.appendChild(buttonEl);
}


for(let eachitem of itemList){
    addAppendItem(eachitem);
}