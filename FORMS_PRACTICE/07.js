
// let formData={
//     name:"",
//     email:"",
//     status:"Active",
//     gender:"Male",
// }

// let nameEl = document.getElementById("name");
// let nameErrMsgEl = document.getElementById("nameErrMsg");
// nameEl.addEventListener("change",function(event){
//     if(event.target.value===""){
//         nameErrMsgEl.textContent="Required*";
//     }
//     else{
//         nameErrMsgEl.textContent="";
//     }
//     formData.name=event.target.value;
// });


// let emailEl = document.getElementById("email");
// let emailErrMsgEl = document.getElementById("emailErrMsg");
// emailEl.addEventListener("change", function (event) {
//   if (event.target.value === "") {
//     emailErrMsgEl.textContent = "Required*";
//   } else {
//     emailErrMsgEl.textContent = "";
//   }
//   formData.email=event.target.value;
// });


// let statusEl = document.getElementById("status");
// statusEl.addEventListener("change",function(event){
//     formData.status=event.target.value;
// });

// let gmale = document.getElementById("genderMale");
// gmale.addEventListener("change",function(event){
//     formData.gender=event.target.value;
// });

// let female = document.getElementById("genderFemale");
// female.addEventListener("change", function (event) {
//   formData.gender = event.target.value;
// });

// function validateFormData(formData){
//     let {name,email}=formData;
//     if(name===""){
//         nameErrMsgEl.textContent="Required*";
//     }
//     if(email===""){
//         emailErrMsgEl.textContent="Required*";
//     }
// }

// function onSubmitFormData(formData){
//     let options = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         Authorization:"Bearer 9d20ff9759f039091f01b85856553d3da51cd6733e491120aa9c1780ceb3104e",
//       },
//       body:JSON.stringify(formData),
//     };
//     let url = "https://gorest.co.in/public-api/users";
//     fetch(url,options)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(jsonData){
//         if(jsonData.code===422){
//             if(jsonData.data[0].message==="has already been taken"){
//                 emailErrMsgEl.textContent="Email Already Exists";
//             }
//         }
//         console.log(jsonData);
//     });
// }

// let addUserFormEl = document.getElementById("addUserForm");
// addUserFormEl.addEventListener("submit",function(event){
//     event.preventDefault();
//     validateFormData(formData);
//     onSubmitFormData(formData);
// });


alert(123 + 321);
