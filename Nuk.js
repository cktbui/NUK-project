/*var sjekk = getElementByID("FORSIDEN");
	sjekk.classNamestyle.
if(sjekk.className == "undertittel")
{
	sjekk.className.style.display("none !important");
}
*/

//skjul alle undermenyer
function skjulUndermenyer(){
var undermenyer =  document.getElementsByClassName("undermeny");
for(var i = 0; i < undermenyer.length; i++)
	{
		undermenyer[i].className = "undermeny usynlig";
	}
}

function visUndermeny(element){
	var id = element.id;
	
	
	var visElement = document.getElementById("undermeny_"+ id);

	if(visElement.className == "undermeny usynlig"){
			visElement.className = "undermeny";
			visElement.className = visElement.className + " synlig";
			element.className = element.className + " active";
		}
	else{
			visElement.className = "undermeny usynlig";
			element.className = "undertittel" 
		}
}

function visMeny(){
	
	var visElement = document.getElementById("sidemeny");
	var klasse = document.getElementById("FORSIDEN");
	
	if(visElement.className == "under-nav")
	{
		visElement.className = visElement + "synlig";
		klasse.className = "undertittel";
	}
	else
	{
		visElement.className = "under-nav";
		klasse.className = klasse + " usynlig";
		
	}
}