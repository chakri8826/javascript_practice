let recipeObj = {
  title: "Tomato Pasta",
  imgSrc:
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
  ingredients: [
    "Pasta",
    "Oil",
    "Onions",
    "Salt",
    "Tomato Pasta Sauce",
    "Cheese",
  ],
};

let headingEl = document.getElementById("headingId");
let imgContainerEl = document.getElementById("imgContainer");
let imgEl = document.getElementById("imgId");
let liContEl = document.getElementById("liContainerId");

headingEl.textContent = recipeObj.title;

// imgEl.setAttribute("src", recipeObj.imgSrc);
// imgEl.classList.add("w-100");
// imgContainerEl.appendChild(imgEl);

imgEl.setAttribute("src", recipeObj.imgSrc);
imgEl.classList.add("w-100");
imgContainerEl.appendChild(imgEl);

for (let ingredient of recipeObj.ingredients) {
  let liEl = document.createElement("li");
  liEl.textContent = ingredient;
  liEl.classList.add("ingredients");
  liContEl.appendChild(liEl);
}

