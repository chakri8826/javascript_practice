let options={
    method:"GET"
}
let url="https://gorest.co.in/public-api/users"
fetch(url, options)
  .then(function (response) {
    return response.json();
  })
  .then(function(jsonData) {
    console.log(jsonData);
  });
 