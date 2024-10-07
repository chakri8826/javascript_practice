let petImgEL = document.getElementById("petImg");
let petSelectEl = document.getElementById("petSelect");
let petImgEl = document.getElementById("petSelect");
petSelectEl.addEventListener("change",function(event){
    let pet = event.target.value;
    petImgEL.src ="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-"+pet+"-img.png";

});
    