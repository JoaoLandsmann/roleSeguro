

function disable(){

	alert('Você não possui idade suficiente para entrar neste site!');
	document.getElementById('button-no').disabled = true;
	document.getElementById('button-yes').disabled = true;
	document.getElementById('button-yes').style.background = "rgba(255,0,0,0.2)";
	document.getElementById('button-yes').style.transform = "translateY(0)";
	document.getElementById('button-no').style.background = "rgba(0,0,0,0.2)";
	document.getElementById('button-no').style.transform = "translateY(0)";
}

