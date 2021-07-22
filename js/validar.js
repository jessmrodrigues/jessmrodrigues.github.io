function valida(){
	if(document.getElementById("nome").value==""){
		alert("Preencha o campo nome");
		documentgetElementById("nome").focus();
	return false;
	}
	if(document.getElementById("password").value.length<7){
		alert("Informe pelo menos 7 caracteres");
		document.getElementById("password").focus();
		return false;
	}
	return true;
}
