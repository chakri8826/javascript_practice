let options = {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization:"Bearer 9d20ff9759f039091f01b85856553d3da51cd6733e491120aa9c1780ceb3104e",
  },

};
let url = "https://gorest.co.in/public-api/users/7372868";
fetch(url,options)
.then(function(response){
    return response.json();
})
.then(function(jsonData){
    console.log(jsonData);
})
