function avatar1(){
	$('#santiago200').attr('src','../resources/html/diapo101/avatar1.html'); 
}

function avatar2(){
	setTimeout(function(){
	 $('#jimena200').attr('src','../resources/html/diapo101/avatar2.html');
	 $('#nubeIzq5').find('.j').attr("id","nub2");
	 $('#nub2').html('¿Como se evidencia lo que debo adquirir?');
	 //var nub2= document.getElementById('izq');
	 var nub= document.getElementById('nubeIzq5');
  	 var nub2= document.getElementById('izq');
  	 nub.style.cssText='width: 20%;left: 57%;height: 74px;';
   	 nub2.style.cssText='transform: rotate(170deg);left: 86%; top: 22%;';
	},27000);
}

function avatar3(){
  setTimeout(function(){
	 $('#santiago200').attr('src','../resources/html/diapo101/avatar3.html');
	 $('#nubeIzq5').find('.j').attr("id","nub2");
	 $('#nub2').html('<p>Hay un formato donde se registra que bienes y servicios estan'+
	   'incluidos en este plan de adquisiciones.');
	 var nub= document.getElementById('nubeIzq5');
  	 var nub2= document.getElementById('izq');
  	 nub.style.cssText='width: 30%; left:19% ;height:auto;';
   	 nub2.style.cssText='transform: rotate(344deg) ;left: 9%; top:45px;';
   	 $("#botondoc6").show();
  	 $("#estrella7").show();
		/////////////////////////////// 
  		desbloquear("#botondoc6");//desbloqueo del botón
		pulseUnico('botondoc6');//unicopalpitar
  		$("#botondoc6").click(function(event) {
    	$(this).removeClass('pulse');
		});
	},30000);
}