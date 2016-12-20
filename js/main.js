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
		var textError = document.createTextNode("Ingresar un apellido es obligatorio");
		apellidoError.appendChild(textError);
		apellidoPadre.appendChild(apellidoError);
		return false;
	}else if(apellido.charAt(0)!== apellido.charAt(0).toUpperCase()){
		var textError = document.createTextNode("La primera letra debe ser mayuscula");
		apellidoError.appendChild(textError);
		apellidoPadre.appendChild(apellidoError);
		return false;
	}
	//email
	var formatoValido = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var email =document.getElementById("input-email").value;
	var emailPadre = document.querySelector('.email-container');
	var emailError= document.createElement('span');
	if(email===null || email.length == 0 || /^\s+$/.test(email)){
		var textError = document.createTextNode("Debes ingresar un email");
		emailError.appendChild(textError);
		emailPadre.appendChild(emailError);
		return false;
	}

	//password
	var pass= document.getElementById("input-password").value;
	var passwordPadre = document.getElementById('input-password').parentNode;
	var passwordError= document.createElement('span');
	if (pass==null || pass.length == 0 || /^\s+$/.test(email)) {
		var textError = document.createTextNode("Debes ingresar una contraseña");
		passwordError.appendChild(textError);
		passwordPadre.appendChild(passwordError);
		return false;
	}
	else if (pass.length < 6) {
		var textError = document.createTextNode("La contraseña debe contener mas de 6 caractéres");
		passwordError.appendChild(textError);
		passwordPadre.appendChild(passwordError);
		return false;
	}
	else if (pass === "password" || pass === "123456" || pass === "098754"){
		var textError = document.createTextNode("La contraseña no debe ser igual a password, 123456 o 098754");
		passwordError.appendChild(textError);
		passwordPadre.appendChild(passwordError);
		return false;
	}

	var indice = document.getElementsByTagName('select')[0].selectedIndex;
		if( indice == null || indice == 0 ) {
			//alert("No haz seleccionado una opción, favor escoge")
			var lista = document.getElementsByClassName('form-group input-box')[1].classList.add('indice')
			var indicePadre = document.getElementsByClassName('indice')[0];
			var indiceError = document.createElement('span');
			var textError = document.createTextNode("Debes seleccionar una bicicleta");
			indiceError.appendChild(textError);
			indicePadre.appendChild(indiceError);
			return false;
		}
}