function avatar1(){
	$('#santiago200').attr('src','../resources/html/diapo26/avatar1.html'); 
}

function avatar2(){
	setTimeout(function(){
	 $('#jimena200').attr('src','../resources/html/diapo26/avatar2.html');
	 $('#nubeIzq2').find('.j').attr("id","nub2");
	 $('#nub2').html('¿Y cual es la mejor manera?');
	 //var nub2= document.getElementById('izq');
	 var nub= document.getElementById('nubeIzq2');
  	 var nub2= document.getElementById('izq');
  	 nub.style.cssText='width: 20%;left: 57%;height: 74px;';
   	 nub2.style.cssText='transform: rotate(170deg);left: 86%; top: 22%;';
	},7000);
}

function avatar3(){
  setTimeout(function(){
	 $('#santiago200').attr('src','../resources/html/diapo26/avatar3.html');
	 $('#nubeIzq2').find('.j').attr("id","nub2");
	 $('#nub2').html('<p>Jimena, se debe tener en cuenta que las actividades'+
	 	' o tareas que se definan puedan asignarse a responsables claramente delimitados..</p>');
	 var nub= document.getElementById('nubeIzq2');
  	 var nub2= document.getElementById('izq');
  	 nub.style.cssText='width: 34%; left: 21%; height: auto;';
   	 nub2.style.cssText='transform: rotate(344deg); left: 0%; top: 46%;'; 
	},10000);
}



function avatar4(){
  setTimeout(function(){
	 $('#jimena200').attr('src','../resources/html/diapo26/avatar4.html');
	 $('#nubeIzq2').find('.j').attr("id","nub2");
	 $('#nub2').html('¿Hay un número máximo de personas para verificar que se cumpla la tarea?');
	 var nub= document.getElementById('nubeIzq2');
  	 var nub2= document.getElementById('izq');
  	 nub.style.cssText='width: 20%;left: 57%;height: auto;';
   	 nub2.style.cssText='transform: rotate(170deg);left: 86%; top: 22%;';
   	 
	},20000);
}

function avatar5(){
  setTimeout(function(){
	 $('#santiago200').attr('src','../resources/html/diapo26/avatar5.html');
	 $('#nubeIzq2').find('.j').attr("id","nub2");
	 $('#nub2').html('Jimena, se debe tener en cuenta que las actividades'+
	 	' o tareas que se definan puedan asignarse a responsables claramente delimitados.');
	 var nub= document.getElementById('nubeIzq2');
  	 var nub2= document.getElementById('izq');
  	 nub.style.cssText='width: 34%; left: 21%; height: auto;';
   	 nub2.style.cssText='transform: rotate(344deg); left: 0%; top: 46%;';
   	 
	},25000);
}