var dias_semana=["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

var dia = prompt("Qué día es hoy");
var mensaje = "" 

if(dia == "Miércoles"){
		mensaje = "Día de Club de Chicas"
}

for(var i = 0; i < 7; i++){
	alert(dias_semana[i]);
}

alert(mensaje);
Cinthya Cristina Riveros18:36
var dias_semana=["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

var dia = prompt("Qué día es hoy");
var mensaje = "" 

if(dia == "Miércoles"){
	mensaje = "Día de Club de Chicas"
}

for(var i = 0; i < 7; i++){
	if(dias_semana[i] == "Viernes"){
		mensaje = "Hoy es un día nublado";
	}
	//alert(dias_semana[i]);
}

alert(mensaje);