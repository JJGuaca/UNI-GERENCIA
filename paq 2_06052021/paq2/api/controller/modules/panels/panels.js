/*------------------------------------------------------
	Propietario:	Estrategia y Conocimiento SAS ©2015
  Producto: 		Plantilla integración SCORM 1.2
  Información:	Requiere jQuery 1.9 mínimo.
								Archivo que permite controlar el comportamiento
								de los páneles y acordeones por medio de
								simples funciones.
	Derechos:			Derechos totalmente reservados para su
  							distribución, copia o modificación,
                salvo expresa autorización de:
                Estrategia y Conocimiento SAS.
--------------------------------------------------------*/

window.MODPanels = (function( window, document, undefined ) {
	var version = '1.0.0',
	arrPanelActualVisible = new Array(), // VARIABLE QUE ALMACENA POR CADA GRUPO EL NOMBRE DEL PANEL ACTIVO
	arrViewedPanels = new Array(),	// VARIABLE QUE ALMACENA LOS PANELES QUE HAN SIDO VISUALIZADOS
	nombrePanelAbierto = "",	// VARIABLE QUE ALMACENA EL NOMBRE DEL PANEL VISIBLE
	MODPanels = {},
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
	
	MODPanels.initPanels = function(grupoPanel, arrPanelsAMostrar, arrMostrarContenidos, activo)
	{
		for(cont = 0; cont<arrPanelsAMostrar.length; cont++)
		{
			if(!$('#'+arrPanelsAMostrar[cont]).hasClass('contPanelAbierto'))
				$('#'+arrPanelsAMostrar[cont]).addClass('contPanelAbierto');
			
			if($.inArray(arrPanelsAMostrar[cont],arrMostrarContenidos)>-1)
			{
				if(!$('#'+arrPanelsAMostrar[cont]+' .tituloPanel').hasClass('panelAbierto'))
					$('#'+arrPanelsAMostrar[cont]+' .tituloPanel').addClass('panelAbierto');
				$('#'+arrPanelsAMostrar[cont]+' .contenidoPanel').css('display','block');
				arrViewedPanels[arrPanelsAMostrar[cont]]=true;
			}
			else
			{
				if($('#'+arrPanelsAMostrar[cont]+' .tituloPanel').hasClass('panelAbierto'))
					$('#'+arrPanelsAMostrar[cont]+' .tituloPanel').removeClass('panelAbierto');
				$('#'+arrPanelsAMostrar[cont]+' .contenidoPanel').css('display','none');
			}
		}
		if(activo!="")
			arrPanelActualVisible[grupoPanel] = activo;
	}
	
	/*----------------------------------------------------------
	ESTA FUNCIÓN PERMITE MOSTRAR U OCULTAR EL PANEL PASADO POR
	EL ATRIBUTO 'panelAMostrar'. ADICIONALMENTE, LA FUNCIÓN
	REVISA DE QUE GRUPO HACE PARTE EL PANEL PARA DETERMINAR EL
	COMPORTAMIENTO EN CASO DE EXISTIR OTRO PANEL VISIBLE EN EL
	MOMENTO Y QUE SEGÚN LA CONFIGURACIÓN NO SE PUEDAN TENER DOS
	PÁNELES ABIERTOS SIMULTÁNEAMENTE EN EL MISMO GRUPO.
	
	LA FUNCIÓN DIFERENCIA SI DEBE COLAPSAR TODO EL PANEL (TÍTULO
	+ CONTENIDO) O SÓLO EL CONTENIDO.
	
	ATRIBUTOS:
	------------------------------------------------------------
	
	grupoPanel: 				STRING CON EL NOMBRE DEL GRUPO AL QUE
											PERTENECE EL PÁNEL PASADO EN EL ATRIBUTO
											'panelAMostrar'.
	
	panelAMostrar:			NOMBRE DEL PÁNEL QUE SERÁ MOSTRADO U
											OCULTADO.
	
	colapsaTodo:				BO0LEANO QUE DETERMINA CUANDO SE COLAPSA
											TODO EL PÁNEL (TÍTULO + CONTENIDO) O
											SÓLO CONTENIDO.
	
	multiPanelVisible:	BO0LEANO QUE DETERMINA SI PUEDE EXISTIR
											MÁS DE UN PÁNEL VISIBLE SIMULTÁNEAMENTE
											EN EL MISMO GRUPO.
	
	RETORNO:	ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	
	MODPanels.controlPanels = function(grupoPanel, panelAMostrar, colapsaTodo, multiPanelVisible)
	{
		if(arrPanelActualVisible[grupoPanel]==null)
			arrPanelActualVisible[grupoPanel] = "";
			
		var panelActualVisible = arrPanelActualVisible[grupoPanel];
		var txtPanelActualVisible = (colapsaTodo)?panelActualVisible:panelActualVisible+' .contenidoPanel';
		var txtPanelAMostrar = (colapsaTodo)?panelAMostrar:panelAMostrar+' .contenidoPanel';
		
		if(!multiPanelVisible && panelActualVisible!="" && panelAMostrar!= panelActualVisible)
		{
			if($('#'+txtPanelActualVisible).is(':visible'))
			{
				$('#'+txtPanelActualVisible).slideToggle();
				$('#'+panelActualVisible+' .tituloPanel').toggleClass('panelAbierto');
				panelActualVisible = "";
			}
		}
		$('#'+txtPanelAMostrar).slideToggle(400,'swing',MODPanels.scrollElemento);
		$('#'+panelAMostrar+' .tituloPanel').toggleClass('panelAbierto');
		if($('#'+txtPanelAMostrar).is(':visible'))
		{
			nombrePanelAbierto = panelAMostrar;
			arrPanelActualVisible[grupoPanel] = panelAMostrar;
			if(arrViewedPanels[panelAMostrar]==null)
			{
				var objPanel = document.getElementById(panelAMostrar);
				var arrIframesPanel = objPanel.getElementsByTagName("iframe");
				
				for(var i in arrIframesPanel)
				{
					arrIframesPanel[i].src = arrIframesPanel[i].src;
				}
				arrViewedPanels[panelAMostrar]=true;
			}
		}
		else
			nombrePanelAbierto = "";
	}
	
	/*----------------------------------------------------------
	ESTA FUNCIÓN PERMITE MOVER EL TÍTULO DEL PANEL AL BORDE
	SUPERIOR DEL CONETNIDO, PARA FCILITAR LA LECTURA DEL MISMO
	Y GARANTIZAR QUE SIEMPRE ESTÉ A LA VISTA LA INFORMACIÓN.
	
	ATRIBUTOS: ESTA FUNCIÓN NO TIENE ATRIBUTOS.
	
	RETORNO:	ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	
	MODPanels.scrollElemento = function()
	{
		if(nombrePanelAbierto=="") return;
		var posYelement = $("#"+nombrePanelAbierto).position();
		jQuery('html, body').animate({scrollTop: posYelement.top-$(".CORESpaceUnderHeader").height()}, 500);
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
	MODPanels.get = function(pParam)
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
	MODPanels.set = function(pParam)
	{
		eval(pParam);
	}
	return MODPanels;
	
})(this, this.document);