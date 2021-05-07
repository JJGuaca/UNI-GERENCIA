function avatar1(){
	var uno= $('#santiago200').attr('src','https://google.com'); 
	console.log(uno);
}

function avatar2(){
	setTimeout(function(){
	 $('#jimena200').attr('src','../resources/html/diapo101/avatar2.html');
	 $('#nubeDer4').find('.j').attr("id","nub2");
	 $('#nubDer').html('¿Como se evidencia lo que debo adquirir?');
	 //var nub2= document.getElementById('izq');
	 var nub= document.getElementById('nubeIzq2');
	 nub.style.cssText='width: 25%; height: auto;';
	 //nub2.style.cssText='width: 1%; height: 5%;';
	},21000);
}

function avatar3(){
  setTimeout(function(){
		$('#santiago200').attr('src','../resources/html/diapo101/avatar3.html');
		$('#nubeDer4').find('.j').attr("id","nub2");
		$('#nubDer').html('<p>Veamos el objetivo y plan de estudios del primer módulo el cual hemos llamado <strong>INTRODUCCIÓN</strong>.</p>');
		//var nub2= document.getElementById('izq');
	 var nub= document.getElementById('nubeIzq2');
	 nub.style.cssText='width: 25%; height: auto;';
	 //nub2.style.cssText='width: 1%; height: 5%;';
	},21000);
}