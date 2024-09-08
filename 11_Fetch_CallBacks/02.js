  let data = {
    name: "la",
    email: "laaaa@email.com",
    gender: "male",
    status: "Active"
  };

let options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization:
      "Bearer 6047f56ab4402686d0bb975ccdb6c028c392d63623729e1306a492e15d849d85",
  },
  body: JSON.stringify(data),
};
let url = "https://gorest.co.in/public-api/users";
fetch(url, options)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonData) {
    console.log(jsonData);
  })
  .catch(function (error) {
    console.error("Error:", error);
  });




