/*------------------------------------------------------
	Propietario:	Estrategia y Conocimiento SAS ©2015
  Producto: 		Plantilla integración SCORM 1.2
  Información:	Requiere jQuery 1.9 mínimo.
								Comportamientos de la página index.
	Derechos:			Derechos totalmente reservados para su
  							distribución, copia o modificación,
                salvo expresa autorización de:
                Estrategia y Conocimiento SAS.
--------------------------------------------------------*/

window.viewIndex = (function( window, document, undefined ) {
	var version = '1.0.0',
	viewIndex = {},
	owner = window,
	vDocument = document,
	docElement = document.documentElement;
	
	/*----------------------------------------------------------
	FUNCIÓN QUE PERMITE INICIALIZAR LOS COMPORTAMIENTOS DEL
	VIEW index.
	
	ATRIBUTOS:	ESTA FUNCION NO POSEE ATRIBUTOS.
	------------------------------------------------------------
						
	RETORNO:	ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	viewIndex.init = function()
	{
		/* Se inicializa la detección de condiciones del navegador, el dispositivo y el entorno de ejecución */
		if($.isFunction(COREBrowserDetection.init)) COREBrowserDetection.init();
		
		// Se muestra el escenario inicial de carga
		if($.isFunction(viewIndex.muestraMensaje)) viewIndex.muestraMensaje("mainCarga");
	
		COREDebuger.outputMessage("[CORESmartNav.SmartNavInit]=>Index cargado: modo ejecución "+varConfigModo, "consola");
		
		/* Se lee la ruta actual dese la URL */
		if($.isFunction(CORELocator.getUbicacionActual)) CORELocator.getUbicacionActual();
		
		/* Verifica si se debe lanzar ventana PopUp */
		if(CORESmartNav.SmartNavInit(viewIndex)) return;
		
		/* Se inicializa el control SCORM */
		if(varConfigModo > 0) loadPageSCORM();
		
		// Se verifica si es necesario reposicionar
		if($.isFunction(CORELocator.readMaxContentData)) CORELocator.readMaxContentData(true);
	}
	
	/*----------------------------------------------------------
	FUNCIÓN QUE OCULTA TODOS LOS MENSAJES RELACIONADOS CON LOS
	ESCENARIOS DE EJECUCIÓN DEL CURSO: VENTANA APARTE, MISMA
	VENTANA Y PREGUNTAR AL USUARIO.
	
	ATRIBUTOS:
	------------------------------------------------------------
	
	pExcepto: STRING QUE INDICA QUE ESCENARIO NO SE OCULTA
						
	RETORNO:	ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	viewIndex.ocultaMensajes = function(pExcepto)
	{
		if(pExcepto!="mainCarga") $(".mainCarga").hide();
		if(pExcepto!="mainPregunta") $(".mainPregunta").hide();
		if(pExcepto!="mainProblema") $(".mainProblema").hide();
		if(pExcepto!="mainCargadoPopUp") $(".mainCargadoPopUp").hide();
	}
	
	/*----------------------------------------------------------
	FUNCIÓN QUE MUESTRA EL ESCENARIO RELACIONADO CON EL LUGAR
	DE EJECUCIÓN DEL CURSO: VENTANA APARTE, MISMA VENTANA Y 
	PREGUNTAR AL USUARIO.
	
	ATRIBUTOS:
	------------------------------------------------------------
	
	pCual: 		STRING QUE INDICA CUAL ESCENARIO SE MUESTRA
						
	RETORNO:	ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	viewIndex.muestraMensaje = function(pCual)
	{
		if(!$("."+pCual).is(":visible"))
			$("."+pCual).fadeIn(400);
	}
	
	/*----------------------------------------------------------
	FUNCIÓN QUE PREPARA LA CARGA DEL PRIMER CONTENIDO DEL CURSO.
	
	ATRIBUTOS:	ESTA FUNCION NO POSEE ATRIBUTOS.
	------------------------------------------------------------
						
	RETORNO:	ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	viewIndex.loadContentInside = function()
	{
		// Se modifica el valor para indicar que el contenido debe cargarse en la misma ventana
		vSmartStandAloneNav = 0;
		
		// Se muestra el escenario inicial de carga
		viewIndex.ocultaMensajes("mainCarga");
		viewIndex.muestraMensaje("mainCarga");
		
		/* Se inicializa el control SCORM */
		if(varConfigModo > 0) loadPageSCORM();
		
		// Se verifica si es necesario reposicionar
		CORELocator.readMaxContentData(true);
	}
	
	/*----------------------------------------------------------
	FUNCIÓN QUE PREPARA LA INICIALIZACIÓN DE LA FUNCIÓN QUE 
	EVALÚA LA UBICACIÓN DE LA CARGA DEL CURSO.
	
	ATRIBUTOS:	ESTA FUNCION NO POSEE ATRIBUTOS.
	------------------------------------------------------------
						
	RETORNO:	ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	viewIndex.loadSmartNavInit = function()
	{
		vSmartStandAloneNav = 1;
		viewIndex.ocultaMensajes("mainCarga");
		viewIndex.muestraMensaje("mainCarga");
		CORESmartNav.SmartNavInit(viewIndex);
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
	viewIndex.get = function(pParam)
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
	viewIndex.set = function(pParam)
	{
		eval(pParam);
	}
	
	return viewIndex;
	
})(this, this.document);

/*----------------------------------------------------------
	FUNCIÓN QUE ES LLAMADA AL CARGARSE EL CONTENIDO DEL index.
	
	ATRIBUTOS:	ESTA FUNCION NO POSEE ATRIBUTOS.
	------------------------------------------------------------
						
	RETORNO:	ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
$(document).ready(function() {
	viewIndex.init();
});