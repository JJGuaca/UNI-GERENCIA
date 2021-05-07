/*------------------------------------------------------
	Propietario:	Estrategia y Conocimiento SAS ©2015
  Producto: 		Plantilla integración SCORM 1.2
  Información:	Requiere jQuery 1.9.
								Fixes para Internet Explorer 8 e inferior.
  Derechos:			Derechos totalmente reservados para su
  							distribución, copia o modificación,
                salvo expresa autorización de:
                Estrategia y Conocimiento SAS.
--------------------------------------------------------*/

/* CONTROLADOR PARA AJUSTES MEDIA QUERIES */
window.FIXMediaQueries = (function( window, document, undefined ) {
	var version = '1.0.0',
	altoCORESpaceUnderHeader = 0,
	FIXMediaQueries = {},
	owner = window,
	vDocument = document,
	docElement = document.documentElement;
	
	// Inicializa el ajuste
	FIXMediaQueries.init = function() {
		// Se almacena el alto original del ajuste vertical del Header
		altoCORESpaceUnderHeader = $(".CORESpaceUnderHeader").height();
		// Se verifica si hay que ajustar las propiedades del header
		FIXMediaQueries.checkWindowWidthHeight();
		// Se listener para el resize de la ventana
		$( window ).resize(function() {
			COREDebuger.outputMessage("[FIXMediaQueries.window.resize]=>Se disparó listener del window rezise", "consola");
			FIXMediaQueries.checkWindowWidthHeight();
		});
		COREDebuger.outputMessage("[FIXMediaQueries.init]=>Se agregó listener del window rezise", "consola");
	};
	
	// Evalúa el alto y el ancho del viewport del navegador
	FIXMediaQueries.checkWindowWidthHeight = function() {
		// Se verifica el alto del viewport del navegador
		var altoVentana = $(window).height();
		var anchoVentana = $(window).width();
		COREDebuger.outputMessage("[FIXMediaQueries.checkWindowWidthHeight]=>El alto del viewport del navegador es:"+altoVentana+" y el ancho:"+anchoVentana, "consola");
		if((altoVentana*1)<=550 || (anchoVentana*1)<=1010)
		{
			// El viewport del navegador es muy pequeño. Se deja movible el header
			$(".COREHeader").css("position","relative");
			$(".CORESpaceUnderHeader").height(0);
			COREDebuger.outputMessage("[FIXMediaQueries.checkWindowWidthHeight]=>Se cambió a relative la posición del header", "consola");
		}
		else
		{
			// El viewport del navegador posee buena altura. Se deja fijo el header
			$(".COREHeader").css("position","fixed");
			$(".CORESpaceUnderHeader").height(altoCORESpaceUnderHeader);
			COREDebuger.outputMessage("[FIXMediaQueries.checkWindowWidthHeight]=>Se cambió a fixed la posición del header", "consola");
		}
	};
	return FIXMediaQueries;
	
})(this, this.document);

/* CONTROLADOR PARA AJUSTES REQUISITOS LOCALES */
window.FIXNavRequieriments = (function( window, document, undefined ) {
	var version = '1.0.0',
	FIXNavRequieriments = {},
	owner = window,
	vDocument = document,
	docElement = document.documentElement;
	
	// Inicializa el ajuste
	FIXNavRequieriments.deactivate = function() {
		habilitaTiempo = false;
		habilitaConteoRecursos = false;
		vNavegaUltimoContenido = false;
		COREDebuger.outputMessage("[FIXNavRequieriments.deactivate]=>Se desactivan los requerimientos locales", "consola");
	};
	return FIXNavRequieriments;
	
})(this, this.document);

/* CONTROLADOR DE DETECCIONES RELACIONADAS CON NAVEGADORES */
window.COREBrowserDetection = (function( window, document, undefined ) {
	var version = '1.0.0',
	browserApp = '',
	browserVersion = 0,
	mobile = false,
	mobileSystem = 'desconocido',
	localStatus = false,
	errMsg = Array(),
	COREBrowserDetection = {},
	owner = window,
	vDocument = document,
	docElement = document.documentElement;
	
	// Se inicializa el controlador
	COREBrowserDetection.init = function()
	{
		COREDebuger.outputMessage("[COREBrowserDetection.init]=>appCodeName: "+navigator.appCodeName, "consola");
		COREDebuger.outputMessage("[COREBrowserDetection.init]=>appName: "+navigator.appName, "consola");
		COREDebuger.outputMessage("[COREBrowserDetection.init]=>appVersion: "+navigator.appVersion, "consola");
		COREDebuger.outputMessage("[COREBrowserDetection.init]=>userAgent: "+navigator.userAgent, "consola");
		COREDebuger.outputMessage("[COREBrowserDetection.init]=>platform: "+navigator.platform, "consola");
		
		// Se cargan los mensajes de error del navegador
		COREBrowserDetection.loadErrMsgs();
		
		// Se detecta si está en modo local
		COREBrowserDetection.localMode();
		
		// Se detecta si está en dispositivo móbil
		COREBrowserDetection.isMobile();
		
		// Se intenta determinar el navegador y la versión
		if(!COREBrowserDetection.checkFireFox())
			if(!COREBrowserDetection.checkInternetExplorer())
				if(!COREBrowserDetection.checkOpera())
					if(!COREBrowserDetection.checkChrome())
					{
						// Navegador y versión sin determinar
						return;
					}
	}
	
	// Se cargan los mensajes de error
	COREBrowserDetection.loadErrMsgs = function()
	{
		// Navegador muy antiguo
		errMsg.push("La versión del navegador que está usando es muy antigua y no permite que tenga una buena experiencia en la consulta de este material. Le recomendamos actualizar el navegador.");
		
		COREDebuger.outputMessage("[COREBrowserDetection.loadErrMsgs]=>Se cargarón los mensajes de error", "consola");
	}
	
	// Se detecta si se está ejecutando localmente o no
	COREBrowserDetection.localMode = function()
	{
		// Se evalúa si existe la etiqueta file
		var resultadoURLTest = window.location.protocol.toString().toLowerCase().indexOf("file");
		localStatus = (resultadoURLTest >= 0)?true:false;
		COREDebuger.outputMessage("[COREBrowserDetection.localMode]=>Modo de ejecución: "+((localStatus)?"local":"en línea"), "consola");
	}
	
	// Detecta si es un dispositivo móbil: iPad, iPhone, iPod, android o WebOS
	COREBrowserDetection.isMobile = function()
	{
		//returns true if user is using one of the following mobile browsers
		var mobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
		if(mobile)
		{
			if(navigator.userAgent.match(/(iPad)/i)) mobileSystem = 'iPad';
			if(navigator.userAgent.match(/(iPhone)/i)) mobileSystem = 'iPhone';
			if(navigator.userAgent.match(/(iPod)/i)) mobileSystem = 'iPod';
			if(navigator.userAgent.match(/(android)/i)) mobileSystem = 'android';
			if(navigator.userAgent.match(/(webOS)/i)) mobileSystem = 'android';
			COREDebuger.outputMessage("[COREBrowserDetection.isMobile]=>Ejecución en dispositivo móbil: "+mobileSystem, "consola");
		}
	}
	
	// Se detecta FireFox
	COREBrowserDetection.checkFireFox = function()
	{
		if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent))
		{ //test for Firefox/x.x or Firefox x.x (ignoring remaining digits);
			// Es FireFox
			browserApp = "Firefox";
			browserVersion = new Number(RegExp.$1); // capture x.x portion and store as a number
			COREDebuger.outputMessage("[COREBrowserDetection.checkFireFox]=>Navegador FireFox versión: "+browserVersion, "consola");
		}
		else
			return false;
		// Acá se deben colocar todas las alternativas posibles para solucionar problemas conocidos
		if (browserVersion<=4)
		{
			COREDebuger.outputMessage(errMsg[0], "alert");
		}
		return true;
	}
	
	// Se detecta Internet Explorer
	COREBrowserDetection.checkInternetExplorer = function()
	{
		if (navigator.userAgent.indexOf('MSIE') != -1)
 			var detectIEregexp = /MSIE (\d+\.\d+);/ //test for MSIE x.x
		else // if no "MSIE" string in userAgent
 			var detectIEregexp = /Trident.*rv[ :]*(\d+\.\d+)/ //test for rv:x.x or rv x.x where Trident string exists

		if (detectIEregexp.test(navigator.userAgent))
		{ //if some form of IE
 			// Es Internet Explorer
			browserApp = "Internet Explorer";
			browserVersion = new Number(RegExp.$1); // capture x.x portion and store as a number
			COREDebuger.outputMessage("[COREBrowserDetection.checkInternetExplorer]=>Navegador Internet Explorer versión: "+browserVersion, "consola");
		}
		else
			return false;
		
		// Acá se deben colocar todas las alternativas posibles para solucionar problemas conocidos
		if (localStatus){
			// Cualquier versión en modo local
			// Se desactivan los chequeos de requerimientos. Navegación libre.
			FIXNavRequieriments.deactivate();
		}
		if (browserVersion<=6){
			COREDebuger.outputMessage(errMsg[0], "alert");
		} else if (browserVersion<=8){
			// Se inicializa corrección
			FIXMediaQueries.init();
		}
		return true;
	}
	
	// Se detecta Opera
	COREBrowserDetection.checkOpera = function()
	{
		var opera15andabovever = /OPR\/(\d+\.\d+)/i.test(navigator.userAgent) // test and capture Opera 15+ version
		if (opera15andabovever)
		{
			// Es Opera
			browserApp = "Opera";
			browserVersion = new Number(RegExp.$1); // contains exact Opera15+ version, such as 25 for Opera 25.0
		}
		else
		{
			if (/Opera[\/\s](\d+\.\d+)/.test(navigator.userAgent))
			{ //test for Opera/x.x or Opera x.x (ignoring remaining decimal places);
				// Es Opera
				browserApp = "Opera";
				browserVersion = new Number(RegExp.$1) // capture x.x portion and store as a number
			}
			else
				return false;
		}
		COREDebuger.outputMessage("[COREBrowserDetection.checkOpera]=>Navegador Opera versión: "+browserVersion, "consola");
		
		// Acá se deben colocar todas las alternativas posibles para solucionar problemas conocidos
		return true;
	}
	
	// Se detecta Opera
	COREBrowserDetection.checkChrome = function()
	{
		var testChrome = /Chrome\/(\d+\.\d+)/i.test(navigator.userAgent) // test and capture Chrome version
		if (testChrome)
		{
			// Es Opera
			browserApp = "Chrome";
			browserVersion = new Number(RegExp.$1); // contains exact Chrome version
		}
		else
			return false;
		COREDebuger.outputMessage("[COREBrowserDetection.checkChrome]=>Navegador Chrome versión: "+browserVersion, "consola");
		// Acá se deben colocar todas las alternativas posibles para solucionar problemas conocidos
		return true;
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
	COREBrowserDetection.get = function(pParam)
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
	COREBrowserDetection.set = function(pParam)
	{
		eval(pParam);
	}
	return COREBrowserDetection;
	
})(this, this.document);