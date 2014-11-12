

function visUndermeny(element){
	var id = element.id;
	
	
	
	var visElement = document.getElementById("undermeny_"+ id);

	if(visElement.className == "undermeny"){
			visElement.className = visElement.className + " synlig";
			element.className = element.className + " active";
		}
	else{
			visElement.className = "undermeny";
			element.className = "undertittel" 
		}
}