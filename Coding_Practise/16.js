let addBtnEl = document.getElementById("addBtn");
let cartItemTextInputEl = document.getElementById("cartItemTextInput");
let cartItemsContainer = document.getElementById("cartItemsContainer");

addBtnEl.onclick=function(){
    cartItemTextInputValue = cartItemTextInputEl.value;
    let cartItem = document.createElement("li");
    cartItem.textContent=cartItemTextInputValue;
    cartItem.classList.add("list-style-type:none");
    cartItemsContainer.appendChild(cartItem);
}


