let hoursInputEl = document.getElementById("hoursInput");
let minutesInputEl = document.getElementById("minutesInput");
let convertBtnEl = document.getElementById("convertBtn");
let errorMsgEl = document.getElementById("errorMsg");
let timeInSecondsEl = document.getElementById("timeInSeconds");

let hoursError = "Please enter valid number of hours";
let minsError = "Please enter valid number of minutes";
let HrsMinsError = "Please enter valid number of hours and minutes";

function hts(){
        let hours = hoursInputEl.value;
        let mins = minutesInputEl.value;
        timeInSecondsEl.classList.remove("time-in-secs");
        timeInSecondsEl.textContent="";
        errorMsgEl.textContent="";
        if(hours==="" && mins===""){
            errorMsgEl.textContent = HrsMinsError;
            return;
        }
        if(hours===""){
            errorMsgEl.textContent=hoursError;
            return;
        }
        else if(mins==="") {
            errorMsgEl.textContent = minsError;
            return;
        }
        let h=parseInt(hours);
        let m=parseInt(mins);
        let ts = (h*3600) + m*60;
        timeInSecondsEl.classList.add("time-in-secs");
        timeInSecondsEl.textContent=ts+"s";
}

convertBtnEl.addEventListener("click",hts);


// let hoursInputEl = document.getElementById("hoursInput");
// let minutesInputEl = document.getElementById("minutesInput");
// let convertBtnEl = document.getElementById("convertBtn");
// let errorMsgEl = document.getElementById("errorMsg");
// let timeInSecondsEl = document.getElementById("timeInSeconds");

// let hoursError = "Please enter a valid number of hours";
// let minsError = "Please enter a valid number of minutes";

// function convertToSeconds() {
//   let hours = hoursInputEl.value;
//   let mins = minutesInputEl.value;
//   errorMsgEl.textContent = ""; // Clear previous errors

//   if (hours === "") {
//     errorMsgEl.textContent = hoursError;
//     return; // Exit the function early if there's an error
//   } else if (mins === "") {
//     errorMsgEl.textContent = minsError;
//     return; // Exit the function early if there's an error
//   }

//   // Convert to seconds
//   let totalSeconds = parseInt(hours) * 3600 + parseInt(mins) * 60;
//   timeInSecondsEl.textContent = "Time in seconds: " + totalSeconds;
// }

// // Add event listener for the button click
// convertBtnEl.addEventListener("click", convertToSeconds);

// // Optionally, handle "Enter" key in the input fields
// function handleEnterKey(event) {
//   if (event.key === "Enter") {
//     convertToSeconds();
//   }
// }

// hoursInputEl.addEventListener("keydown", handleEnterKey);
// minutesInputEl.addEventListener("keydown", handleEnterKey);
