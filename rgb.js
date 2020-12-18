const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
	let rgbColor = 'rgb('
	rgbColor += getRandomNumber();
	rgbColor += ',';
	rgbColor += getRandomNumber();
	rgbColor += ',';
	rgbColor += getRandomNumber();
	rgbColor += ')';
	color.textContent = rgbColor;
	document.body.style.backgroundColor = rgbColor;
});

function getRandomNumber() {
	return Math.floor(Math.random()*256);
}