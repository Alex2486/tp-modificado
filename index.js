document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("formulario").addEventListener('submit', validarCampos);
});

function validarCampos(evento) {
	evento.preventDefault();
	var nombre = document.getElementById('nombre').value;
	if(nombre.length == 0) {
		document.getElementById("error-nombre").innerHTML = "¡Debe completar el campo Nombre!";
	}else {
		document.getElementById("nombre-correcto").innerHTML = "El campo nombre se encuentra completo";
		document.getElementById("error-nombre").remove("error-nombre");
	}
	var apellido = document.getElementById('apellido').value;
	if(apellido.length == 0) {
		document.getElementById("error-apellido").innerHTML = "¡Debe completar el campo Apellido!";
	}else {
		document.getElementById("apellido-correcto").innerHTML = "El campo apellido se encuentra completo";
		document.getElementById("error-apellido").remove("error-apellido");
	}
	var correo = document.getElementById('email').value;
	var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
	var esValido = expReg.test(correo);
	if(esValido !== true || esValido == null) {
		document.getElementById("error-email").innerHTML = "El correo ingresado no es valido o se encuentra vacio";
	}else {
		document.getElementById("email-correcto").innerHTML = "El correo ingresado es correcto";
		document.getElementById("error-email").remove("error-email");
	}
	var ciudad = document.getElementById('ciudad').value;
	if(ciudad.length == 0) {
		document.getElementById("error-ciudad").innerHTML = "¡Debe completar el campo Ciudad!";
	}else {
		document.getElementById("ciudad-correcto").innerHTML = "El campo ciudad se encuentra completo";
		document.getElementById("error-ciudad").remove("error-ciudad");
		return;
	}
};



	
