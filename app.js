const colors = ["Aqua", "Azure", "BlanchedAlmond", "Blue", "CadetBlue", "Crimson", "DarkGoldenRod",
"DarkOliveGreen", "DarkOrange", "Gold", "Green", "Red", "Indigo", "LightSalmon", "Maroon", "Navy",
"Olive", "Orange", "Pink", "PowderBlue", "Purple", "Silver", "Tomato", "Violet", "Yellow",
"rgba(133,122,200)", "#f15025"]; 
const btn = document.getElementById("btn"); 
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
	console.log(document.body);
	const randomNumber = getRandomNumber();
	document.body.style.backgroundColor = colors[randomNumber];
	color.textContent= colors[randomNumber];
});

function getRandomNumber() {
	return Math.floor(Math.random()*colors.length);
}