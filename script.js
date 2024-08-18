var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".random");
var reset = document.querySelector(".reset");

setGradient()

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";

}

function resetColor(){
	color1.value = "#FF0000";
	color2.value = "#FFFF00";
	setGradient();
}


function randomColor(){
	color1.value = randomHexColor();
	color2.value = randomHexColor();
	setGradient();
}

function randomHexColor(){
	let n = (Math.random() * 0xfffff * 1000000).toString(16);
  	return '#' + n.slice(0, 6);
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", randomColor);

reset.addEventListener("click", resetColor);