let profile = {
  name: "chakri",
  age: 20,
};
let stringifiedProfile = JSON.stringify(profile);
localStorage.setItem("profileDetails",stringifiedProfile);

let profileFromLocalStorage = localStorage.getItem("profileDetails");
let parsedProfile = JSON.parse(profileFromLocalStorage);
console.log(parsedProfile);
console.log(typeof(parsedProfile));
 
