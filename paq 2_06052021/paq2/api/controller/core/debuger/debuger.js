/*------------------------------------------------------
	Propietario:	Estrategia y Conocimiento SAS ©2015
  Producto: 		Plantilla integración SCORM 1.2
  Información:	Requiere jQuery 1.9 mínimo.
								Control de mensajes para debug.
	Derechos:			Derechos totalmente reservados para su
  							distribución, copia o modificación,
                salvo expresa autorización de:
                Estrategia y Conocimiento SAS.
--------------------------------------------------------*/

window.COREDebuger = (function( window, document, undefined ) {
	var version = '1.0.0',
	COREDebuger = {},
	owner = window,
	vDocument = document,
	docElement = document.documentElement;
	
	/*----------------------------------------------------------
	FUNCIÓN QUE PERMITE LA SALIDA DE MENSAJES AL NAVEGADOR PARA
	EFECTOS DE DEPURACIÓN SIEMPRE QUE ESTÉ ACTIVADO EL MODO DE
	DEPURACIÓN EN EL ARCHIVO DE CONFIGURACIÓN POR MEDIO DEL
	PARÁMETRO "vDebbug_mode". ADICIONALMENTE PERMITE DETERMIAR SI
	SE MUESTRA EL MENSAJE EN LA CONSOLA O EN MENSAJE DE ALERTA
	DEL NAVEGADOR.
	
	ATRIBUTOS:
	------------------------------------------------------------
	
	pMessage: STRING CON MENSAJE A PRESENTAR
	
	pTipo:		STRING QUE DETERMINA SI EL MENSAJE SE MUESTRA EN 
						LA CONSOLA O EN MENSAJE DE ALERTA DEL NAVEGADOR:
						
						= "consola": 	SALIDA A CONSOLA
						= "alert": 		SALIDA A ALERTA DE NAVEGADOR
						
	RETORNO:	ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	COREDebuger.outputMessage = function(pMessage, pTipo)
	{
		if(!vDebbug_mode) return;
	
		if(pTipo=="consola")
			console.log(pMessage);
		else if(pTipo=="alert")
			alert(pMessage);
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
	COREDebuger.get = function(pParam)
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
	COREDebuger.set = function(pParam)
	{
		eval(pParam);
	}
	
	return COREDebuger;
	
})(this, this.document);