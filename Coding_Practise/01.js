    let colorPickerContainerElement = document.getElementById("colorPickerContainer");
    let selectedColorHexCodeElement = document.getElementById("selectedColorHexCode");
    let but1 = document.getElementById("button1");
    let but2 = document.getElementById("button2");
    let but3 = document.getElementById("button3");
    let but4 = document.getElementById("button4");
    
    function changeBgToGreyAndUpdateText(){
        colorPickerContainerElement.style.backgroundColor = but1.textContent;
        selectedColorHexCodeElement.textContent = but1.textContent;
    }
    function changeBgToGreenAndUpdateText() {
    colorPickerContainerElement.style.backgroundColor = but2.textContent;
    selectedColorHexCodeElement.textContent = but2.textContent;
    }
    function changeBgToBlueAndUpdateText() {
    colorPickerContainerElement.style.backgroundColor = but3.textContent;
    selectedColorHexCodeElement.textContent = but3.textContent;
    }
    function changeBgToPurpleAndUpdateText() {
    colorPickerContainerElement.style.backgroundColor = but4.textContent;
    selectedColorHexCodeElement.textContent = but4.textContent;
    }