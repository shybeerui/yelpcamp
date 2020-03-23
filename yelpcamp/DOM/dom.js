var button = document.querySelector("button");
var body = document.querySelector("body");

button.addEventListener("click",event1);

function event1(){
	body.classList.toggle("pink");
}

