let bgContainer = document.getElementById("bgContainer");
let themeUserInput = document.getElementById("themeUserInput");

function change(event){
    if(event.key==="Enter"){
        let inpVal = themeUserInput.value;
        console.log(inpVal);
        if (inpVal === "Light"){
                bgContainer.style.backgroundImage ="url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
        }
        else if(inpVal === "Dark"){
            bgContainer.style.backgroundImage ="url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";
        }
        else {
            alert("Please enter the Valid Theme");
        }
    } 
}

themeUserInput.addEventListener("keydown",change);



