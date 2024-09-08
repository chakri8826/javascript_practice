let options = {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization:
      "Bearer 6047f56ab4402686d0bb975ccdb6c028c392d63623729e1306a492e15d849d85",
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
