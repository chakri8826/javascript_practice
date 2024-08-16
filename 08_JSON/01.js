let profile={
    name:"chakri",
    age:20
};
let stringifiedProfile = JSON.stringify(profile);
console.log(profile);
console.log(stringifiedProfile);
console.log(typeof(stringifiedProfile));


let parsedProfile = JSON.parse(stringifiedProfile);
console.log(parsedProfile);
console.log(typeof(parsedProfile));
