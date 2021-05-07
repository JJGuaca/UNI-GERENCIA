/*------------------------------------------------------
	Propietario:	Estrategia y Conocimiento SAS ©2015
  Producto: 		Plantilla integración SCORM 1.2
  Información:	Requiere jQuery 1.9 mínimo.
								Comportamientos navegación en ventana aparte.
	Derechos:			Derechos totalmente reservados para su
  							distribución, copia o modificación,
                salvo expresa autorización de:
                Estrategia y Conocimiento SAS.
--------------------------------------------------------*/

window.CORESmartNav = (function( window, document, undefined ) {
	var version = '1.0.0',
	vVentanaAparte = null,
	vCaller = null,
	vReloj = null,
	CORESmartNav = {},
	owner = window,
	vDocument = document,
	docElement = document.documentElement;
	
	/*----------------------------------------------------------
	FUNCIÓN QUE CONTROLA LA CARGA DEL CONTENIDO DEL CURSO EN 
	VENTANA APARTE O EN LA MISMA VENTANA, SEGÚN SEA CONFIGURADO
	EN EL ARCHIVO DE CONFIGURACIÓN DEL CURSO POR MEDIO DEL
	PARÁMETRO "vSmartStandAloneNav".
	
	ATRIBUTOS:
	------------------------------------------------------------
	
	caller: 	OBJETO DESDE EL QUE SE LLAMA ESTA FUNCIÓN
						
	RETORNO:	ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	CORESmartNav.SmartNavInit = function(caller)
	{
		/* Se verifica si debemos ejecutar el curso en ventana aparte */
		if(vSmartStandAloneNav == 0) return false;
		/* Se verifica si ya estamos en ventana aparte */
		if(owner.opener) return false;
		
		vCaller = caller;
		
		/* Se evalúa si se debe preguntar al usuario dónde cargar el curso */
		if(vSmartStandAloneNav == 2)
		{
			vCaller.ocultaMensajes("mainPregunta");
			vCaller.muestraMensaje("mainPregunta");
			return true;
		}
		
		vCaller.ocultaMensajes("mainCarga");
		vCaller.muestraMensaje("mainCarga");
		
		COREDebuger.outputMessage("[CORESmartNav.SmartNavInit]=>Se inicia la ejecución en modo PopUp", "alert");
		winWidth = $(owner).width();
		winheight = $(owner).height();
		if(owner.screen.availHeight)
		{
			winWidth = owner.screen.availWidth;
			winheight = owner.screen.availHeight;
		}
		
		COREDebuger.outputMessage("[CORESmartNav.SmartNavInit]=>Se intenta abrir PopUp con width="+winWidth+" y height="+winheight, "consola");
		vVentanaAparte = owner.open("index.html","plantilla","fullscreen=no,location=no,menubar=no,resizable=yes,scrollbars=yes,status=no,titlebar=no,toolbar=no,width="+winWidth+",height="+winheight+",left=0,top=0");
		if(vVentanaAparte)
		{
			COREDebuger.outputMessage("[CORESmartNav.SmartNavInit]=>La ventana PopUp se abrió con éxito", "consola");
			vCaller.ocultaMensajes("mainCargadoPopUp");
			vCaller.muestraMensaje("mainCargadoPopUp");
			vVentanaAparte.focus();
			
			// Se detecta si hay comunicación entre las ventanas
			CORESmartNav.detectComunicationConditions();
			return true;
		}
		else
		{
			COREDebuger.outputMessage("[CORESmartNav.SmartNavInit]=>La ventana PopUp fue bloqueada por el navegador", "consola");
			vCaller.ocultaMensajes("mainProblema");
			vCaller.muestraMensaje("mainProblema");
			return true;
		}
	}
	
	/*----------------------------------------------------------
	FUNCIÓN QUE INICIA LA DETECCIÓN DE COMUNICACIÓN ENTRE LAS
	VENTANAS.
	
	ATRIBUTOS:	ESTA FUNCION NO POSEE ATRIBUTOS.
	------------------------------------------------------------
						
	RETORNO:	ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	CORESmartNav.detectComunicationConditions = function()
	{
		// Se evalúa si se está ejecutando localmente
		if(COREBrowserDetection.get("localStatus"))
		{
			/* 	Se determina si hay comunicación entre las ventanas y se da un tiempo
				para cargar el contenido	*/
			vReloj = setInterval(CORESmartNav.checkParentAccess,300);
			COREDebuger.outputMessage("[CORESmartNav.detectComunicationConditions]=>Ejecución local. Se inicia detección de comunicación con vetana popup", "consola");
		}
	}
	
	/*----------------------------------------------------------
	FUNCIÓN QUE ESPERA LA CARGA DE LA VENTANA ABIERTA Y LUEGO
	VERIFICA SI EXISTE O NO COMUNICACIÓN ENTRE LAS VENTANAS.
	
	ATRIBUTOS:	ESTA FUNCION NO POSEE ATRIBUTOS.
	------------------------------------------------------------
						
	RETORNO:	ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	CORESmartNav.checkParentAccess = function()
	{
		try
		{
			// Se evalúa si se puede acceder al título de la ventana abierta
			if(vVentanaAparte.document.title != null && vVentanaAparte.document.title != "")
			{
				// Se detiene el reloj de espera de carga de la ventana
				clearInterval(vReloj);
				vReloj = null;
				try
				{
					// Hay comunicación entre ventanas. No se requiere de alguna acción adicional
					COREDebuger.outputMessage("[CORESmartNav.checkParentAccess]=>Se confirma comunicación con ventana remota", "consola");
				}
				catch(e)
				{
					// No hay comunicación entre las ventanas
					COREDebuger.outputMessage("[CORESmartNav.checkParentAccess]=>No hay acceso a la ventana abierta. Se inicia reloj de monitoreo", "consola");
					// Se inicia reloj de monitoreo de la ventana remota
					vReloj = setInterval(CORESmartNav.checkRemoteWindow,300);
				}
			}
			else
				COREDebuger.outputMessage("[CORESmartNav.checkParentAccess]=>Esperando que cargue la ventana", "consola");
		}
		catch(e)
		{
			// No hay acceso. Se detiene reloj de espera de la ventana
			clearInterval(vReloj);
			vReloj = null;
			COREDebuger.outputMessage("[CORESmartNav.checkParentAccess]=>No hay acceso a la ventana abierta. Se inicia reloj de monitoreo", "consola");
			// Se inicia reloj de monitoreo de la ventana remota
			vReloj = setInterval(CORESmartNav.checkRemoteWindow,300);
		}
	}
	
	/*----------------------------------------------------------
	FUNCIÓN CHEQUEA SI LA VENTANA REMOTA HA SIDO O NO CERRADA.
	
	ATRIBUTOS:	ESTA FUNCION NO POSEE ATRIBUTOS.
	------------------------------------------------------------
						
	RETORNO:	ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	CORESmartNav.checkRemoteWindow = function()
	{
		if(vVentanaAparte.closed)
		{
			// Se detiene reloj de monitoreo
			clearInterval(vReloj);
			vReloj = null;
			COREDebuger.outputMessage("[CORESmartNav.checkRemoteWindow]=>Se detecta que la ventana remota fue cerrada", "consola");
			// Se restablece el escenario para preguntar al usuario que desea hacer
			CORESmartNav.restoreScenario();
		}
	}
	
	/*----------------------------------------------------------
	FUNCIÓN QUE PERMITE CERRAR LA VENTANA EN LA CUAL SE CARGÓ EL
	CONTENIDO.
	
	ATRIBUTOS:	ESTA FUNCION NO POSEE ATRIBUTOS.
	------------------------------------------------------------
						
	RETORNO:	ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	CORESmartNav.closePopUpContent = function()
	{
		if(vVentanaAparte && !vVentanaAparte.closed) vVentanaAparte.close();
		
		if(vReloj != null) 
		{
			clearInterval(vReloj);
			vReloj = null;
			COREDebuger.outputMessage("[CORESmartNav.closePopUpContent]=>Se detiene reloj de monitoreo de ventana remota", "consola");
		}
		CORESmartNav.restoreScenario();
		COREDebuger.outputMessage("[CORESmartNav.closePopUpContent]=>Se cierra la ventana remota", "consola");
	}
	
	/*----------------------------------------------------------
	FUNCIÓN QUE MODIFICA EL MENSAJE EN EL INDEX PARA PERMITIR 
	AL USUARIO REABRIR EL CONTENIDO.
	
	ATRIBUTOS:	ESTA FUNCION NO POSEE ATRIBUTOS.
	------------------------------------------------------------
						
	RETORNO:	ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	CORESmartNav.restoreScenario = function()
	{
		vCaller.ocultaMensajes("mainPregunta");
		vCaller.muestraMensaje("mainPregunta");
		COREDebuger.outputMessage("[CORESmartNav.restoreScenario]=>Se restablece escenario de pregunta a usuario para cargar contenido", "consola");
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
	CORESmartNav.get = function(pParam)
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
	CORESmartNav.set = function(pParam)
	{
		eval(pParam);
	}
	
	return CORESmartNav;
	
})(this, this.document);