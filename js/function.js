
			
function firstFunction() {

	alert("1st function!");

}
			
function secondFunction() {

	alert("2nd function!");

}

var btn = document.getElementById("myBtn");

btn.addEventListener("click", firstFunction);
btn.addEventListener("click", secondFunction);	