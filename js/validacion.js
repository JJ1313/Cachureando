function validarForm()
{
		var verificar=true;
		var expRegNombre= /^([a-z ñáéíóú]{2,60})$/
		var expRegEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

		var Formulario=document.getElementById("contacto-frm");
		var nombre=document.getElementById("nombre");
		var edad=document.getElementById("edad");
		var email=document.getElementById("email");
		var asunto=document.getElementById("asunto");
		var masculino=document.getElementById("M");
		var femenino=document.getElementById("F");
		var comentarios=document.getElementById("comentarios");

		if (!nombre.value) {
			alert("el campo nombre es requerido");
			nombre.focus();
			verificar=false;
		}else if (!expRegNombre.exec(nombre.value)) {
			alert("El campo nombre solo acepta letras y espacios en blanco")
			nombre.focus();
			verificar=false;
		}else if (!edad.value) {
			alert("El campo edad es requerido");
			edad.focus();
			verificar=false;
		}else if (isNaN(edad.value)) {
			alert("El campo edad solo acepta números");
			edad.focus();
			verificar=false;
		}else if (!email.value) {
			alert("El campo email es requerido");
			email.focus();
			verificar=false;
		}else if (!expRegEmail.exec(email.value)) {
			alert("El campo de correo esta mal escrito");
			email.focus();
			verificar=false;
		}else if (!asunto.value) {
			alert("El campo asunto es requerido");
			asunto.focus();
			verificar=false;
		}else if (!comentarios.value) {
			alert("El campo comentarios es requerido");
			comentarios.focus();
			verificar=false;
		}
		if(verificar) {
			alert("Se ha enviado el formulario");
		}
}function limpiarForm(){
	document.getElementById("contacto-frm").reset();
}
window.onload=function(){
	var botonEnviar, botonLimpiar;

	botonLimpiar = document.getElementById("limpiar");
	botonLimpiar.onclick=limpiarForm;

	botonEnviar = document.getElementById("enviar");
	botonEnviar.onclick=validarForm;
}		