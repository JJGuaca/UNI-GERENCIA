/*------------------------------------------------------
	Propietario:	Estrategia y Conocimiento SAS ©2015
  Producto: 		Plantilla integración SCORM 1.2
  Información:	Requiere jQuery 1.9 mínimo.
								Archivo que permite controlar el 
								comportamiento de las listas animadas 
								horizontales.
	Derechos:			Derechos totalmente reservados para su
  							distribución, copia o modificación,
                salvo expresa autorización de:
                Estrategia y Conocimiento SAS.
--------------------------------------------------------*/

window.MODListSlider = (function( window, document, undefined ) {
	var version = '1.0.0',
	currentItem = null,	
	MODListSlider = {},
	owner = window,
	vDocument = document,
	docElement = document.documentElement;
	
	/*----------------------------------------------------------
	ESTA FUNCIÓN PERMITE INICIALIZAR LOS PANELES O ACORDEONES
	DETERMINANDO LOS PÁNELES QUE INICIAN VISIBLES, A QUE GRUPO
	PERTENECEN Y SI MUESTRAN O NO SU CONETNIDO. ADICIONALMENTE
	PERMITE DETERMIAR QUE PANEL SE ENCUENTRA ACTIVO EN MEMORIA
	PARA SER CERRADO EN DADO CASO QUE NO SE PERMITAN MÚLTIPLES
	PÁNELES ABIERTOS AL MISMO TIEMPO.
	
	ATRIBUTOS:
	------------------------------------------------------------
	
	grupoPanel: 				STRING CON EL NOMBRE DEL GRUPO AL QUE
											PERTENECEN LOS PÁNELES PASADOS EN EL 
											ARREGLO 'arrPanelsAMostrar'
	
	arrPanelsAMostrar:	ARREGLO DE PÁNELES QUE SERÁN MOSTRADOS
	
	mostrarContenido:		BO0LEANO QUE DETERMINA CUANDO SI SE
											MUESTRA O NO EL CONTENIDO DEL PANEL
	
	activo:							STRING QUE DETERMINA QUE PANEL DEL GRUPO
											ESTARÁ ACTIVO PARA CERRARLO EN CASO DE
											NO PERMITIR MÚLTIPLES PÁNELES ABIERTOS
											SIMULTÁNEAMENTE
	
	RETORNO:	ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	
	MODListSlider.init = function()
	{
		var vTmpItemContent = '<p></p><div class="cMODListSlider">';
		var vTmpContador = 1;
		$('.liMODListSlider').children().each(function(ind,obj){
			var vTmpNumberList = $(this).attr("number");
			var vTmpActiveList = $(this).attr("active");
			var vTmpColorList = $(this).attr("color");
			
			vTmpItemContent += '<table border="0"   cellpadding="0" cellspacing="0" width="auto" class="innerMODListSlider"><tr><td id="pesModListSlider'+vTmpContador+'" class="pesMODListSlider colorMODListSlider'+vTmpColorList+'" valign="middle"   width="'+((vTmpContador==1)?"15":"7")+'"><img src="../../api/view/images/modules/listSlider/flecha.png"></td><td id="numMODListSlider'+vTmpContador+'" class="numMODListSlider colorMODListSlider'+vTmpColorList+'" align="center" width="40" onclick="MODListSlider.showHide(this,true,0);" number="'+vTmpContador+'">'+vTmpNumberList+'</td></tr><tr><td colspan="2" height="5"></td></tr></table>';
			
			vTmpItemContent += '<div id="divMODListSlider'+vTmpContador+'" class="divMODListSlider colorMODListSlider'+vTmpColorList+'" '+((vTmpContador==0)?"style='left:0px;'":"")+'><a href="#" class="aCloseMODListSlider" onclick="MODListSlider.showHide(this,false,0); return false;">x</a><br>'+$(this).html()+'</div>';
			
			vTmpContador++;
		});
		vTmpItemContent += '</div>';
		$(".liMODListSlider").prev().append(vTmpItemContent);
		$(".liMODListSlider").remove();
		
		currentItem = $("#numMODListSlider1");
		
		var tmpMasAlto = 0;
		
		$('.divMODListSlider').each(function(ind,obj){
			tmpMasAlto = (tmpMasAlto<$(this).outerHeight())?$(this).outerHeight():tmpMasAlto;
		});
		
		$(".cMODListSlider").height(tmpMasAlto);
		COREDebuger.outputMessage("[MODListSlider.init]=>Se inicializó el módulo de manejo de listas animadas horizontales", "consola");
	}
	
	/*----------------------------------------------------------
	ESTA FUNCIÓN PERMITE MOSTRAR U OCULTAR UN ÍTEM DEL LIST 
	SLIDER.
	
	ATRIBUTOS:
	------------------------------------------------------------
	
	pObj: 	OBJETO A MOSTRAR U OCULTAR
	
	pShow:	VALOR LÓGICO QUE INDICA SI SE MUESTRA (true) O SE
					OCULTA EL ITEM.
	
	RETORNO:	ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	
	MODListSlider.showHide = function(pObj,pShow,pCual)
	{
		if(pShow)
		{
			if(pObj == currentItem) return;
			if(currentItem != null)
			{
				COREDebuger.outputMessage("[MODListSlider.init]=>Oculto:"+$(currentItem).attr("number"), "consola");
				MODListSlider.showHide(currentItem,false,$(currentItem).attr("number"));
			}
			$("#divMODListSlider"+$(pObj).attr("number")).animate({left: 0});
			$(pObj).prev().animate({width: 15},100,"linear");
			currentItem = pObj;
		}
		else
		{
			if(pCual==0) pCual = $(currentItem).attr("number");
			$("#divMODListSlider"+pCual).animate({left: - $("#divMODListSlider"+pCual).parent().outerWidth(true)});
			$("#pesModListSlider"+pCual).animate({width: 7},100,"linear");
			currentItem = null;
		}
		COREDebuger.outputMessage("[MODListSlider.init]=>Se inicializó el módulo de manejo de listas animadas horizontales", "consola");
	}

	/*----------------------------------------------------------
	FUNCIÓN QUE RETORNA LA VARIABLE LOCAL INDICADA EN EL PARÁMETRO
	pParam.
	
	ATRIBUTOS:
	------------------------------------------------------------
	pParam = NOMBRE DE LA VARIABLE A OBTENER
	
	RETORNO:
	------------------------------------------------------------
	VALOR DE LA VARIABLE REQUERIDA
	
	------------------------------------------------------------*/
	MODListSlider.get = function(pParam)
	{
		return eval(pParam);
	}
	
	/*----------------------------------------------------------
	FUNCIÓN QUE EJECUTA LA OPERACIÓN PASADA EN EL	PARÁMETRO	
	pParam. NORMALMENTE EMPLEADA PARA ACTUALIZAR EL VALOR DE UNA 
	VARIABLE LOCAL.
	
	ATRIBUTOS:
	------------------------------------------------------------
	pParam = NOMBRE DE LA VARIABLE A MODIFICAR
	
	RETORNO: ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	MODListSlider.set = function(pParam)
	{
		eval(pParam);
	}
	return MODListSlider;
	
})(this, this.document);