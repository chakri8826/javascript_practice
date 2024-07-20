function switchOff(){
    document.getElementById("bulbImage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("catImage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("switch-status").textContent="Switched-Off";
    document.getElementById("onn-switch").style.backgroundColor="#22c55e";
    document.getElementById("off-switch").style.backgroundColor="#cbd2d9";
}
function switchOnn(){
    document.getElementById("bulbImage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catImage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("switch-status").textContent="Switched-Onn";
    document.getElementById("onn-switch").style.backgroundColor="#cbd2d9";
    document.getElementById("off-switch").style.backgroundColor="#e12d39";
}

