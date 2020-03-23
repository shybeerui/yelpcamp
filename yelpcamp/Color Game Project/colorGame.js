var randomcolor = document.querySelector("#randomcolor");
var square = document.querySelectorAll(".square");
var replay = document.querySelector(".replay");
var result = document.querySelector("#result");
var hhh = document.querySelector("h1");
var modebutton = document.querySelectorAll(".mode");
var num = 3;
var selectedcolor;
var colors = [];

init();

function init(){
	setupmodebutton();
	setupsquares();
	replay.addEventListener("click",reset);
	reset();
}

function setupsquares(){
	for(var i = 0; i < square.length; i++){
		square[i].addEventListener("click",function(){
			var color = this.style.background;
			if(color == randomcolor.textContent){
				result.textContent = "Correct!";
				rightres();
				hhh.style.background = color;
				replay.textContent = "PLAY AGAIN";
			}
			else{
				this.style.background = "black";
				result.textContent = "Try again!";
			}
		});
	}	
}

function setupmodebutton(){
	for(var i = 0; i < modebutton.length; i++){
		modebutton[i].addEventListener("click",function(){
			modebutton[0].classList.remove("selected");
			modebutton[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent == "EASY" ? num = 3 : num = 6;
			reset();
		});
	}
}

function reset(){
	colors = generatecolor(num);
	for(var i = 0; i < square.length; i++){
		if(colors[i])
			square[i].style.background = colors[i];
		else
			square[i].style.background = "black";
	};
	hhh.style.background = "steelblue";
	replay.textContent = "NEW COLORS";
	selectedcolor = randomize();
	randomcolor.textContent = selectedcolor;
	result.textContent = "";
}

function rightres(){
	for(var i = 0; i < num; i++){
		square[i].style.background = selectedcolor;
	};
}

function randomize(){
	return colors[Math.floor(Math.random() * num)];
}

function generatecolor(num){
	var res_color = [];
	for(var i = 0; i < num; i++){
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		res_color.push("rgb(" + r + ", " + g + ", " + b + ")");
	}	
	return res_color;
}