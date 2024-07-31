let profileDetails = {
  imgSrc:
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
  name: "RAHUL ATTULURI",
  age: 25,
};

let profileContainerEl = document.getElementById("profileContainer");
profileContainerEl.classList.add("text-center","d-flex","flex-column","justify-content-center");

let ImageContainerEl = document.getElementById("imgContainer");

ImageContainerEl.classList.add();
let imgEl = document.createElement("img");
imgEl.setAttribute ("src",  profileDetails.imgSrc);
imgEl.classList.add("profile-img");
ImageContainerEl.appendChild(imgEl);

let headingEl = document.createElement("heading");
headingEl.textContent=profileDetails.name;
headingEl.classList.add("profile-name");
profileContainerEl.appendChild(headingEl);

let paraEl = document.createElement("paragraph");
paraEl.textContent="Age: "+profileDetails.age;
paraEl.classList.add("age");
profileContainerEl.appendChild(paraEl);
