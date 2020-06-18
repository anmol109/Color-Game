var numSquares = 6;
var colors =generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var MessageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn =document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

resetButton.addEventListener("click", function(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent= pickedColor;
	resetButton.textContent="New Colors";
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background=colors[i];
	}
	h1.style.background = "steelblue";
	MessageDisplay.textContent=" ";
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++)
{
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.background;
		if(clickedColor === pickedColor) {
			MessageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.background=clickedColor;
			resetButton.textContent="Play Again?"
		} else {
			this.style.background="#232323";
			MessageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background=color;
	}
	
}
function pickColor(){
	var random = Math.floor(Math.random() * colors.length); 
	return colors[random];
}

function generateRandomColors(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}

	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb("+r+", "+g+", "+b+")";
}

easyBtn.addEventListener("click", function(){
	numSquares = 3;
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.background=colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	numSquares = 6;
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
			squares[i].style.background=colors[i];
			squares[i].style.display="block";
		}
	
});