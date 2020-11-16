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


<h1>Tamaños de Input</h1>
  <input class="form-control" type="text" placeholder="Default input">
<input class="form-control input-sm" type="text" placeholder=".input-sm">

<select class="form-control input-lg">...</select>
<select class="form-control">...</select>
<select class="form-control input-sm">...</select>

