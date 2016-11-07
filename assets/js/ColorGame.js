//************VARIABLES*****************************
var numColors = 6
var colors = generateRandomColors(numColors);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1Display = document.querySelector("h1");
var resetButton = document.getElementById("reset");
// var easyButton = document.getElementById("easy");
// var hardButton = document.getElementById("hard");
var modeBtns = document.querySelectorAll(".mode");

for(var i = 0 ; i < modeBtns.length; i++) {
	modeBtns[i].addEventListener("click", function(){
		modeBtns[0].classList.remove("selected");
		modeBtns[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent === "Easy"){
			numColors = 3;
		} else {
			numColors = 6;
		}
		resetGame();
	});
	
}

//************LOGIC*****************************
colorDisplay.textContent = pickedColor;

// easyButton.addEventListener("click", function(){
// 	numColors = 3;
// 	easyButton.classList.add("selected");
// 	hardButton.classList.remove("selected");
// 	resetGame();
// 	for(var i = 3; i <= 5; i++){
// 		squares[i].style.display = "none";
// 	}
// });

// hardButton.addEventListener("click", function(){
// 	numColors = 6;
// 	easyButton.classList.remove("selected");
// 	hardButton.classList.add("selected");
// 	resetGame();
// 	for(var i = 0; i < numColors; i++){
// 		squares[i].style.display = "block";
// 	}
// });

resetButton.addEventListener("click", function(){
	resetGame();
	// colors = generateRandomColors(numColors);
	// pickedColor = pickColor();
	// colorDisplay.textContent = pickedColor;
	// for(var i = 0; i < squares.length; i++){
	// 	squares[i].style.background = colors[i]
	// };
	// h1Display.style.background = "#232323";
});

for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];
	//
	squares[i].addEventListener("click",function(){
	//
		var clickedColor = this.style.background;
	//
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1Display.style.background = clickedColor;
			resetButton.textContent = "Play Again?";
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}


//************FUNCTIONS*****************************

function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for(var i = 0; i < num; i++){
		arr.push(randomColor())
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function resetGame(){
	colors = generateRandomColors(numColors);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i]
	};
	h1Display.style.background = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
	for(var i = numColors; i <= 5; i++){
		squares[i].style.display = "none";
	};
	for(var i = 0; i < numColors; i++){
		squares[i].style.display = "block";
	}

}