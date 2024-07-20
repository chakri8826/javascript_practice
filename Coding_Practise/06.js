let imageElement = document.getElementById("image");
let imageWidthElement = document.getElementById("imageWidth");
let warningMessageElement = document.getElementById("warningMessage");

let maxImageWidth=300;
let minImageWidth=100;
let originalImageWidth = 200;
let maxWidthWarningMessage = "Too big. Decrease the size of the Image";
let minWidthWarningMessage ="Can't Visible. Increase the size of th Image";

imageElement.style.width = originalImageWidth + "px";
imageWidthElement.textContent = originalImageWidth + "px";

    
function incrementButton(){
    if(originalImageWidth>=maxImageWidth){
        warningMessageElement.textContent=maxWidthWarningMessage;
    }
    else{
        warningMessageElement.textContent="";
        originalImageWidth=originalImageWidth+5;
        let updatedImageWidth = originalImageWidth +"px";
        imageElement.style.width=updatedImageWidth;
        imageWidthElement.textContent=updatedImageWidth;
    }
}




function decrementButton(){
    if(originalImageWidth<=minImageWidth){
        warningMessageElement.textContent=minWidthWarningMessage;
    }
    else{
        warningMessageElement.textContent="";
        originalImageWidth=originalImageWidth-5;
        let updatedImageWidth = originalImageWidth+"px";
        imageElement.style.width=updatedImageWidth;
        imageWidthElement.textContent=updatedImageWidth;
    }
}
