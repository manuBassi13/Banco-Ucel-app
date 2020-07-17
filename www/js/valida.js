function validaReg(){
	var name = $('#name').val();
	var surname = $('#surname').val();
	var dni = $('#dni').val();
	var user = $('#user').val();
	var pass = $('#pass').val();
	
	if ((name.length<1)||(name.length>30)){
		alert("ERROR!\nNOMBRE: requerido, hasta 30 caracteres");
		document.getElementById("surname").style.removeProperty('border');
		document.getElementById("dni").style.removeProperty('border');
		document.getElementById("user").style.removeProperty('border');
		document.getElementById("pass").style.removeProperty('border');
		document.getElementById("name").focus();
		document.getElementById("name").style.border = "4px solid #a00";
		return false;
	}else if ((surname.length<1)||(surname.length>30)){
		alert("ERROR!\nAPELLIDO: requerido, hasta 30 caracteres");
		document.getElementById("name").style.removeProperty('border');
		document.getElementById("dni").style.removeProperty('border');
		document.getElementById("user").style.removeProperty('border');
		document.getElementById("pass").style.removeProperty('border');
		document.getElementById("surname").focus();
		document.getElementById("surname").style.border = "4px solid #a00";
		return false;
	}else if ((dni.length < 7)||(dni.length > 9)){
		alert("ERROR!\nDNI: requerido, entre 7 y 9 caracteres");		
		document.getElementById("name").style.removeProperty('border');
		document.getElementById("surname").style.removeProperty('border');
		document.getElementById("user").style.removeProperty('border');
		document.getElementById("pass").style.removeProperty('border');
		document.getElementById("dni").focus();
		document.getElementById("dni").style.border = "4px solid #a00";
		return false;
	}else if ((user.length<1)||(user.length>15)){
		alert("ERROR!\nUSUARIO: requerido, hasta 15 caracteres");
		document.getElementById("name").style.removeProperty('border');
		document.getElementById("surname").style.removeProperty('border');
		document.getElementById("dni").style.removeProperty('border');
		document.getElementById("pass").style.removeProperty('border');
		document.getElementById("user").focus();
		document.getElementById("user").style.border = "4px solid #a00";
		return false;
	}else if ((pass.length<1)||(pass.length>15)){
	alert("ERROR!\nCONTRASE\u00d1A: requerida, hasta 15 caracteres");
		document.getElementById("name").style.removeProperty('border');
		document.getElementById("surname").style.removeProperty('border');
		document.getElementById("dni").style.removeProperty('border');
		document.getElementById("user").style.removeProperty('border');
		document.getElementById("pass").focus();
		document.getElementById("pass").style.border = "4px solid #a00";
		return false;
	}else {
		return true;
	}
}

function validaLogin(){
	var user=$("#usuario").val();
	var pass=$("#clave").val();
	
	if ((user !== localStorage.getItem('user'))&&(pass !== localStorage.getItem('pass'))){
		alert("ERROR!\nUSUARIO y CONTRASE\u00d1A incorrectos");
		document.getElementById("usuario").focus();
		document.getElementById("usuario").style.border = "4px solid #a00";
		document.getElementById("clave").style.border = "4px solid #a00";
		return false;
	}else if (user !== localStorage.getItem('user')){
		alert("ERROR!\nUSUARIO incorrecto");
		document.getElementById("clave").style.removeProperty('border');
		document.getElementById("usuario").focus();
		document.getElementById("usuario").style.border = "4px solid #a00";	
		return false;
	}else if (pass !== localStorage.getItem('pass')){
		alert("ERROR!\nCONTRASE\u00d1A incorrecta");
		document.getElementById("usuario").style.removeProperty('border');
		document.getElementById("clave").focus();
		document.getElementById("clave").style.border = "4px solid #a00";
		return false;
	} else{
		return true;
	}
}
		
		