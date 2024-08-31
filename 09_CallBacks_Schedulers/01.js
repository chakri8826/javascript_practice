function displayGreeting(displayName){
    console.log("Hello");
    displayName();
    console.log("Good Morning");
    
}
//FIRST WAY
// displayGreeting(function displayName(){
//     console.log("CHakri");
// });


//SECOND WAY
// function displayChakri(){
//     console.log("chakri");
// }
// displayGreeting(displayChakri);

//THIRD WAY
let displayChak = function(){
    console.log("Chakri");
}
displayGreeting(displayChak);