/*------------------------------------------------------
	Propietario:	Estrategia y Conocimiento SAS ©2015
  Producto: 		Plantilla integración SCORM 1.2
  Información:	Requiere jQuery 1.9 mínimo.
								Código para manejar el conteo regrsivo.
	Derechos:			Derechos totalmente reservados para su
  							distribución, copia o modificación,
                salvo expresa autorización de:
                Estrategia y Conocimiento SAS.
--------------------------------------------------------*/

// Our countdown plugin takes a callback, a duration, and an optional message
$.fn.countdown = function (callback) {
	var minutos = viewContent.get("vMinutosRequeridos");
	var segundos = viewContent.get("vSegundosRequeridos");
	
	var txtMinutos = (minutos>9)?minutos:("0"+minutos);
	var txtSegundos = (segundos>9)?segundos:("0"+segundos);
	
	var container = $(this[0]).html("<span>min</span><br>"+txtMinutos+"<br><span>seg</span><br>"+txtSegundos);
	// Get reference to the interval doing the countdown
	var countdown = setInterval(function () {
		if(segundos>1)
			segundos--;
		else
		{
			if(minutos>0 && segundos==0)
			{
				minutos--;
				segundos=59;
			}
			else
			{
				if(minutos>0 && segundos>0)
					segundos--;
				else
				{
					container.html("<span>min</span><br>00<br><span>seg</span><br>00");
					clearInterval(countdown);
					if(habilitaTiempo)
						callback.call(container);
					return;
				}
			}
		}
		
		txtMinutos = (minutos>9)?minutos:("0"+minutos);
		txtSegundos = (segundos>9)?segundos:("0"+segundos);	
		container.html("<span>min</span><br>"+txtMinutos+"<br><span>seg</span><br>"+txtSegundos);
	}, 1000);
};

$.fn.countup = function (callback) {
	var minutos = 0;
	var segundos = 0;
	
	var container = $(this[0]).html("<span>min</span><br>00<br><span>seg</span><br>00");
	// Get reference to the interval doing the countdown
	var countup = setInterval(function () {
		segundos++;
		if(segundos==60)
		{
			minutos++;
			segundos=00;
		}
		
		if(minutos >= viewContent.get("vMinutosRequeridos") && segundos >= viewContent.get("vSegundosRequeridos") && habilitaTiempo)
		{
			clearInterval(countup);
			callback.call(container);
			return;
		}
		
		txtMinutos = (minutos>9)?minutos:("0"+minutos);
		txtSegundos = (segundos>9)?segundos:("0"+segundos);	
		container.html("<span>min</span><br>"+txtMinutos+"<br><span>seg</span><br>"+txtSegundos);
	}, 1000);
};