//vidu skal kalle på showMenu for hver skroll
window.addEventListener("scroll", showMenu);

function showMenu(){
	var limitElement = document.getElementById("nyheter-main");
	var scrollValue = window.scrollY;

	if(scrollValue >= limitElement.offsetTop - 100) /*pass på denne!*/
		document.getElementById("second-menu").style.display = "block";
	else
		document.getElementById("second-menu").style.display = "none";	
};