let data = {
  name: "post",
  email: "post@email.com",
  gender: "male",
  status: "Active",
};

let options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization:
      "Bearer 9d20ff9759f039091f01b85856553d3da51cd6733e491120aa9c1780ceb3104e",
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
