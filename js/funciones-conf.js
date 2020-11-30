function ocultar(){
	document.getElementById("envoltura-Paso1").style.height = "50px";
}

function Paso2(procesador){
	
	if (procesador.trim()=="amd") {
		document.getElementById("imagen-procesadores-amd").style.visibility = "visible"
		document.getElementById("imagen-procesadores-intel").style.display = "none"  //para que no ocupe espacio
	}
	else{
		document.getElementById("imagen-procesadores-intel").style.visibility = "visible"
		document.getElementById("imagen-procesadores-amd").style.display = "none"
	}
	document.getElementById("envoltura-Paso2").style.height = "auto";
	var elem = document.getElementById('envoltura-Paso2');
    var height = window.getComputedStyle(elem,null).getPropertyValue('height');/*Obtendremos la altura exacta del contenedor*/
    document.getElementById("envoltura-Paso2").style.height = height;/*volvemos a colocarla para poder hacer la animacion*/

}
function Paso3(){
	document.getElementById("envoltura-Paso2").style.height = "50px";
	document.getElementById("envoltura-Paso3").style.height = "auto";
	var elem = document.getElementById('envoltura-Paso3');
    var height = window.getComputedStyle(elem,null).getPropertyValue('height');/*Obtendremos la altura exacta del contenedor*/
    document.getElementById("envoltura-Paso3").style.height = height;/*volvemos a colocarla para poder hacer la animacion*/
	
}
function Paso4(){
	document.getElementById("envoltura-Paso3").style.height = "50px";
	document.getElementById("envoltura-Paso4").style.height = "auto";
	var elem = document.getElementById('envoltura-Paso4');
    var height = window.getComputedStyle(elem,null).getPropertyValue('height');/*Obtendremos la altura exacta del contenedor*/
    document.getElementById("envoltura-Paso4").style.height = height;/*volvemos a colocarla para poder hacer la animacion*/
}
function Paso5(){
	document.getElementById("envoltura-Paso4").style.height = "50px";
	document.getElementById("envoltura-Paso5").style.height = "auto";
	var elem = document.getElementById('envoltura-Paso5');
    var height = window.getComputedStyle(elem,null).getPropertyValue('height');/*Obtendremos la altura exacta del contenedor*/
    document.getElementById("envoltura-Paso5").style.height = height;/*volvemos a colocarla para poder hacer la animacion*/
}
function Paso6(){
	document.getElementById("envoltura-Paso5").style.height = "50px";
	document.getElementById("envoltura-Paso6").style.height = "auto";
	var elem = document.getElementById('envoltura-Paso6');
    var height = window.getComputedStyle(elem,null).getPropertyValue('height');/*Obtendremos la altura exacta del contenedor*/
    document.getElementById("envoltura-Paso6").style.height = height;/*volvemos a colocarla para poder hacer la animacion*/
}
function Paso7(){
	document.getElementById("envoltura-Paso6").style.height = "50px";
	document.getElementById("envoltura-Paso7").style.height = "auto";
	var elem = document.getElementById('envoltura-Paso7');
    var height = window.getComputedStyle(elem,null).getPropertyValue('height');/*Obtendremos la altura exacta del contenedor*/
    document.getElementById("envoltura-Paso7").style.height = height;/*volvemos a colocarla para poder hacer la animacion*/
}
function Paso8(){
	document.getElementById("envoltura-Paso7").style.height = "50px";
	document.getElementById("envoltura-Paso8").style.height = "auto";
	var elem = document.getElementById('envoltura-Paso8');
    var height = window.getComputedStyle(elem,null).getPropertyValue('height');/*Obtendremos la altura exacta del contenedor*/
    document.getElementById("envoltura-Paso8").style.height = height;/*volvemos a colocarla para poder hacer la animacion*/
}
function Paso9(){
	document.getElementById("envoltura-Paso8").style.height = "50px";
	document.getElementById("envoltura-Paso9").style.height = "auto";
	var elem = document.getElementById('envoltura-Paso9');
    var height = window.getComputedStyle(elem,null).getPropertyValue('height');/*Obtendremos la altura exacta del contenedor*/
    document.getElementById("envoltura-Paso9").style.height = height;/*volvemos a colocarla para poder hacer la animacion*/
}
function Paso10(){
	document.getElementById("envoltura-Paso9").style.height = "50px";
	document.getElementById("envoltura-Paso10").style.height = "auto";
	var elem = document.getElementById('envoltura-Paso10');
    var height = window.getComputedStyle(elem,null).getPropertyValue('height');/*Obtendremos la altura exacta del contenedor*/
    document.getElementById("envoltura-Paso10").style.height = height;/*volvemos a colocarla para poder hacer la animacion*/
}
function Paso11(){
	document.getElementById("envoltura-Paso10").style.height = "50px";
	document.getElementById("envoltura-Paso11").style.height = "auto";
	var elem = document.getElementById('envoltura-Paso11');
    var height = window.getComputedStyle(elem,null).getPropertyValue('height');/*Obtendremos la altura exacta del contenedor*/
    document.getElementById("envoltura-Paso11").style.height = height;/*volvemos a colocarla para poder hacer la animacion*/
}
function Paso12(){
	document.getElementById("envoltura-Paso11").style.height = "50px";
	document.getElementById("envoltura-Paso12").style.height = "auto";
	var elem = document.getElementById('envoltura-Paso12');
    var height = window.getComputedStyle(elem,null).getPropertyValue('height');/*Obtendremos la altura exacta del contenedor*/
    document.getElementById("envoltura-Paso12").style.height = height;/*volvemos a colocarla para poder hacer la animacion*/
}