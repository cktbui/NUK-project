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
var rød =  document.getElementsByClassName("undertittel");

for(var i = 0; i < undermenyer.length; i++)
	{
			if(undermenyer[i].className == "undermeny synlig")
			{
				undermenyer[i].className = "undermeny usynlig";
			}
			else
			{
				undermenyer[i].className = "undermeny usynlig";
			}
	}
}
function goUndermenyer(){
var undermenyer =  document.getElementsByClassName("undermeny");
var rød = document.getElementsByClassName("undertittel");
for(var i = 0; i < undermenyer.length; i++)
	{
		//	if(undermenyer[i].className == "undermeny synlig"){
				undermenyer[i].className = "undermeny usynlig";
				
			//}
			//else if(rød[i].className == "undertittel Fusynlig"){
			//	rød[i].className = "undertittel Fusynlig";
			//}
			//else{
			//	undermenyer[i].className = "undermeny usynlig";
			//	rød[i].className = "undertittel";
			//}
			
	}
for(var i= 0; i < rød.length; i++)
	{
		rød[i].className = "undertittel";
	}
}


function visUndermeny(element){
	goUndermenyer();//denne skjuler de andre åpne menyene.
	
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

function visSokeboks() {
	var vissok = document.getElementsByClassName("sokeboks");
	if(vissok[0].className == "sokeboks"){
		vissok[0].className = "sokeboks synligviktig";
	}
	else{
		vissok[0].className = "sokeboks";
	}
}
