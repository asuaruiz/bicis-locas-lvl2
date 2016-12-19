function validateForm(){
	/* Escribe tú código aquí */
	//nombre
	var nombre =document.getElementById("name").value;
	var nombrePadre = document.querySelector('.name-container');
	var nombreError= document.createElement('span');
	if(nombre == null ||  nombre.length == 0 || /^\s+$/.test(nombre)){
		var textError = document.createTextNode("Ingresar un nombre es obligatorio");
		nombreError.appendChild(textError);
		nombrePadre.appendChild(nombreError);
		return false;
	}else if(nombre.charAt(0)!== nombre.charAt(0).toUpperCase()){
		//alert("La primera letra del nombre debe ser mayuscula");
		var textError = document.createTextNode("La primera letra debe ser mayuscula");
		nombreError.appendChild(textError);
		nombrePadre.appendChild(nombreError);
		return false;
	}
	//apellido
	var apellido =document.getElementById("lastname").value;
	var apellidoPadre = document.querySelector('.lastname-container');
	var apellidoError= document.createElement('span');
	if(apellido===null||apellido.length==0 || /^\s+$/.test(apellido)){
		notie.alert(3, "Ingresar apellido es obligatorio", 2.5);
		return false;
	}else if(apellido.charAt(0)!== apellido.charAt(0).toUpperCase()){
		notie.alert(3, "La primera letra del apellido debe ser mayuscula", 2.5);
		return false;
	}
	//email
	var formatoValido = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var email =document.getElementById("input-email").value;
	if(email===null || email.length == 0 || /^\s+$/.test(email)){
		notie.alert(3, "Ingresar correo es obligatorio", 2.5);
		return false;
	}

	//password
	var pass= document.getElementById("input-password").value;
	if (pass==null || pass.length == 0 || /^\s+$/.test(email)) {
		notie.alert(3, "Debes ingresar una Contraseña", 2.5);
		return false;
	}
	else if (pass.length < 6) {
		notie.alert(3, "Tu contraseña debe tener al menos 6 caractéres", 2.5);
		return false;
	}
	else if (pass === "password" || pass === "123456" || pass === "098754"){
		notie.alert(3, "La contraseña no puede ser igual a password, 123456 o 098754", 2.5);
		return false;
	}

	//select
	var indice = document.getElementsByTagName('select');
	/*if( select == null || select == 0 ) {
		notie.alert(3, "Debes seleccionar una bicicleta", 2.5);
  		return false;*/
  	for (var i = 0; i < indice.length; ++i){ 
			if(indice[i].value === "0"){
				notie.alert(3, "Debes seleccionar una bicicleta", 2.5);
				return false;
  		}
  	}
  	//checkbox
  	var elemento = document.getElementsByTagName('input[type="checkbox"]');
	if( !elemento.checked ) {
  		return false;
	}
}