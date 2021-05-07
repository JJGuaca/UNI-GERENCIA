/*------------------------------------------------------
	Propietario:	Estrategia y Conocimiento SAS ©2015
  Producto: 		Plantilla integración SCORM 1.2
  Información:	Requiere jQuery 1.9 mínimo.
								Código para determinar la ubicación del contenido.
	Derechos:			Derechos totalmente reservados para su
  							distribución, copia o modificación,
                salvo expresa autorización de:
                Estrategia y Conocimiento SAS.
--------------------------------------------------------*/

window.CORELocator = (function( window, document, undefined ) {
    var version = '1.0.0',
    vNombrePage = "",                           // Almacena el nombre del contenido actual
    vNumContenidoActual = 0,                // Almacena el número del contenido actual
    vArrContenidoActual = Array(),  // Arreglo con el contenido actual
    varPrefixModulo = "paq",            // Nombre de la carpeta del módulo
    varPrefixContents = "contents", // Nombre de la carpeta que alamcena los contenidos del curso
    varPrefixTema = "tema",                 // Nombre de la carpeta del tema
    varPrefixTxt = "UGPP",                  // Prefijo empleado en cada HTML de contenido
    varPrefixSeparator = "_",           // Texto empleado para separar los niveles de profundidad de información
    vNumMaximoContenido = 0,                // Almacena el número del mayor contenido visto por el usuario en el módulo
    lms_ubicacion_actual = vNumContenidoActual, // Almacena el número del mayor contenido visto por el usuario en el módulo
    lms_puntaje_estudiante = 0,                                 // Almacena la calificación obtenida por el usuario en el módulo
    lms_datos_leccion = "",                                         // Datos almacenados por el sistema en el LMS
    vUserRejected = false,                  // Almacena si el usuario fue o no expulado del contenido actual
    vInternalNavRequest = false,        // Determina si se abandona la página por navegación interna
    CORELocator = {},
    owner = window,
    vDocument = document,
    docElement = document.documentElement;
    
	/* LA ESTRUCTURA DE CONTENIDOS DEL CURSO DEBE SEGUIR LA SIGUIENTE FORMA
		(EJEMPLO CON VALORES DE REFERENCIA):
		
		/modulo1
			/tema1
				/txt.html					contenido del tema 1 (no tiene más divisiones)
			/tema2
				/txt_1.html				contenido del subtema 1 del tema 2 (no tiene más divisiones)
				/txt_2.html				contenido del subtema 2 del tema 2 (no tiene más divisiones)
				/txt_3_1.html			contenido del contenido 1 del subtema 3 del tema 2 (no tiene más divisiones)
				/txt_3_2.html			contenido del contenido 2 del subtema 3 del tema 2 (no tiene más divisiones)
				/txt_3_3_1.html		contenido del subcontenido 1 del contenido 3 del subtema 3 del tema 2 (no tiene más divisiones)
				/txt_3_3_2.html		contenido del subcontenido 2 del contenido 3 del subtema 3 del tema 2 (no tiene más divisiones)
					...							no hay límite de subniveles
				/txt_4.html				contenido del subtema 4 del tema 2 (no tiene más divisiones)
				/txt_n.html				contenido del subtema n del tema 2 (no tiene más divisiones)
			/tema3
				/txt.html					contenido del tema 3 (no tiene más divisiones)
			/temax
				/txt_1.html				contenido del subtema 1 del tema x (no tiene más divisiones)
				/txt_2.html				contenido del subtema 2 del tema x (no tiene más divisiones)
				/txt_3_1.html			contenido del contenido 1 del subtema 3 del tema x (no tiene más divisiones)
				/txt_3_2.html			contenido del contenido 2 del subtema 3 del tema x (no tiene más divisiones)
				/txt_3_3_1.html		contenido del subcontenido 1 del contenido 3 del subtema 3 del tema x (no tiene más divisiones)
				/txt_3_3_2.html		contenido del subcontenido 2 del contenido 3 del subtema 3 del tema x (no tiene más divisiones)
					...							no hay límite de subniveles
				/txt_4.html				contenido del subtema 4 del tema x (no tiene más divisiones)
				/txt_n.html				contenido del subtema n del tema x (no tiene más divisiones)
					...	*/
	
	/*----------------------------------------------------------
	FUNCIÓN QUE LEE LA URL DEL NAVEGADOR Y A PARTIR DE ESTA
	DETERMINA LA UBICACIÓN EXACTA DEL CONTENIDO: TEMA, SUBTEMA
	CONTENIDO, SUBCONTENIDO, ETC.
	
	LA UBICACIÓN ES CARGADA EN LAS VARIABLES:
		vNombrePage: 					STRING CON LA CADENA DEL CONTENIDO 
													ACTUAL
		vNumContenidoActual: 	INTEGER QUE CONTABILIZA EL NÚMERO DEL
												 	CONTENIDO ACTUAL DE ACUERDO AL ÁRBOL
												 	DE TEMAS CARGADO EN EL CONFIG.JS DEL
												 	CURSO.
		vArrContenidoActual: 	ARREGLO QUE POSEE EL NÚMERO DE CADA
													NIVEL DE PROFUNDIDAD DEL CONTENIDO EN
													ESTE ORDEN:
													MODULO (1), TEMA (1), SUBTEMA (2), 
													CONTENIDO (1), SUBCONTENIDO (3)...
	
	ATRIBUTOS: ESTA FUNCIÓN NO POSEE ATRIBUTOS
	------------------------------------------------------------
						
	RETORNO:	ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	CORELocator.getUbicacionActual = function()
	{
		var varRutaDinamica = "";
		var caracter = "/";
		var sURL = window.document.URL.toString();
		vArrContenidoActual = Array();
		
		// Determina el módulo
		var tmpArr = sURL.split(caracter+varPrefixModulo);
		if(tmpArr.length<2)
		{
			caracter = "\\";
			tmpArr = sURL.split(caracter+varPrefixModulo);
		}
		
		tmpArr = tmpArr[tmpArr.length-1].split(caracter);
		if(tmpArr.length<2)
		{
			// No se posee información del módulo y se emplea el dato cargado en el config.js
			vArrContenidoActual.push(fixedNumModulo);
			caracter = "/";
			varRutaDinamica = caracter+varPrefixContents;
		}
		else
		{
			vArrContenidoActual.push(tmpArr[0]);
			varRutaDinamica = caracter+varPrefixModulo+vArrContenidoActual[0]+caracter+varPrefixContents;
		}
		
		sURL = sURL.replace("/",caracter);
		
		COREDebuger.outputMessage("[CORELocator.getUbicacionActual]=>Ubicación-URL:"+sURL, "consola");
		COREDebuger.outputMessage("[CORELocator.getUbicacionActual]=>Ubicación-"+varPrefixModulo+" actual:"+vArrContenidoActual[0], "consola");
		COREDebuger.outputMessage("[CORELocator.getUbicacionActual]=>Ubicación-Ruta dinámica:"+varRutaDinamica, "consola");
		
		COREDebuger.outputMessage("[CORELocator.getUbicacionActual]=>Ubicación-Verifica "+varPrefixTema+":"+varRutaDinamica+caracter+varPrefixTema, "consola");
		
		// Determina el tema
		tmpArr = sURL.split(varRutaDinamica+caracter+varPrefixTema);
		if(tmpArr.length<2) return;
		tmpArr = tmpArr[tmpArr.length-1].split(caracter);
		vArrContenidoActual.push(tmpArr[0]);
		varRutaDinamica += caracter+varPrefixTema+vArrContenidoActual[1];
		
		COREDebuger.outputMessage("[CORELocator.getUbicacionActual]=>Ubicación-"+varPrefixTema+" actual:"+vArrContenidoActual[1], "consola");
		
		vNombrePage = varPrefixTxt;
		
		// Determina si hay múltiples divisiones del contenido o no
		tmpArr = sURL.split(varRutaDinamica+caracter+varPrefixTxt+".");
		if(tmpArr.length<2)
		{
			// Hay múltiples divisiones de contenido
			tmpArr = sURL.split(varRutaDinamica+caracter+varPrefixTxt);
			if(tmpArr.length<2) return;	// La URL está mal formada
			// Se descompone la URL en los subcontenidos
			tmpArr = tmpArr[tmpArr.length-1].split(varPrefixSeparator);
			// Se almacenan los demás niveles de contenido existentes
			for(unNivel in tmpArr)
			{
				var tmpArr2 = tmpArr[unNivel].split(".");
				if(tmpArr2.length<2)
				{
					// Aun no es el último nivel de profundidad del contenido
					vArrContenidoActual.push(tmpArr[unNivel]);
					COREDebuger.outputMessage("[CORELocator.getUbicacionActual]=>Ubicación-profundidad post-"+varPrefixTema+" ("+unNivel+") actual:"+tmpArr[unNivel], "consola");
				}
				else
				{
					// Último nivel de profundidad del contenido
					vArrContenidoActual.push(tmpArr2[0]);
					COREDebuger.outputMessage("[CORELocator.getUbicacionActual]=>Ubicación-profundidad post-"+varPrefixTema+" ("+unNivel+") actual:"+tmpArr2[0], "consola");
				}
				vNombrePage += (unNivel==0)?vArrContenidoActual[vArrContenidoActual.length-1]:varPrefixSeparator+vArrContenidoActual[vArrContenidoActual.length-1];
			}
		}
		
		vNumContenidoActual = arrInfoTemas[varPrefixTema+vArrContenidoActual[1]].data[vNombrePage][0];
		
		COREDebuger.outputMessage("[CORELocator.getUbicacionActual]=>Ubicación-Página:"+vNombrePage, "consola");
		COREDebuger.outputMessage("[CORELocator.getUbicacionActual]=>Fin ubicación-Número contenido:"+vNumContenidoActual, "consola");
	}
	
	/*----------------------------------------------------------
	ESTA FUNCIÓN BUSCA EN EL ARREGLO DE CONTENIDOS DEL MÓDULO EL
	CONTENIDO PASADO POR EL PARÁMETRO pUbicacion PARA NAVEGAR A
	ESE CONTENIDO.
	
	ATRIBUTOS:
	------------------------------------------------------------
	pUbicacion: INTEGER CON EL NÚMERO DEL CONTENIDO A REPOSICIONAR
	
	RETORNO:
	------------------------------------------------------------
	true:		SI SE LOGRA REPOSICIONAR EL CONTENDO
	false:	SI NO SE LOGRA REPOSICIONAR EL CONTENIDO
	------------------------------------------------------------*/
	CORELocator.reposiciona = function(pUbicacion)
	{
		tempTema = 0;
		vInternalNavRequest = true;
		COREDebuger.outputMessage("[CORELocator.reposiciona]=>Inicia reposicionamiento a:"+pUbicacion+" de "+numContenidos+" contenidos", "consola");
		
		for(unTema in arrInfoTemas)
		{
			var tempArrTema = unTema.toString().split(varPrefixTema);
			if(tempArrTema.length < 2)
			{
				COREDebuger.outputMessage("[CORETopicsLoader.init]=>ERROR: El árbol de contenidos en el config.js está mal formado. El prefijo ("+CORELocator.get("varPrefixTema")+") no se encuentra en el elemento del árbol ("+unTema+")", "consola");
				break;
			}
			var tempTema = tempArrTema[1];
			
			for(unaPagina in arrInfoTemas[unTema].data)
			{
				COREDebuger.outputMessage("[CORELocator.reposiciona]=>Revisa contenido "+arrInfoTemas[unTema].data[unaPagina][0]*1+" para reposicionar a "+pUbicacion, "consola");
				if(arrInfoTemas[unTema].data[unaPagina][0]*1 == pUbicacion*1)
				{
					vTempTxtRuta = (tempTema==vArrContenidoActual[1])?"../../contents/":"";
					vTempTxtRuta = (vArrContenidoActual[1]==null)?"contents/":"../../contents/";
					vTempURLReposiciona = vTempTxtRuta+unTema+"/"+unaPagina+".html";
					COREDebuger.outputMessage("[CORELocator.reposiciona]=>Se reposiciona a la página:"+vTempURLReposiciona, "consola");
					if(vDebbug_mode)
					{
						if(confirm("Reposiciono?")) window.location = vTempURLReposiciona;
					}
					else
						window.location = vTempURLReposiciona;
					return true;
				}
			}
		}
		
		// No existe el contenido
		COREDebuger.outputMessage("[CORELocator.reposiciona]=>No se logró reposicionar al contenido:"+pUbicacion, "consola");
		vInternalNavRequest = false;
		return false;
	}
	
	/*----------------------------------------------------------
	FUNCIÓN QUE EVALÚA EL MÁXIMO CONTENIDO VISTO POR EL USUARIO
	Y SI SE DESEA, PUEDE REPOSICIONAR A DICHO CONTENIDO.
	
	ATRIBUTOS:
	------------------------------------------------------------
	pReposiciona: BOOLEANO INIDICA SI SE DEBE REPOSICIONAR (true)
								O NO (false).
		
	RETORNO:
	------------------------------------------------------------
	SI EL PARAMETRO pReposiciona = false, LA FUNCIÓN NO RETORNA
	NINGÚN VALOR, DE LO CONTRARIO RETORNA:
	
		true: 	VALOR LÓGICO QUE INDICA QUE SE REPOSICIONÓ CON ÉXITO
						EL CONTENIDO.
		false:	VALOR LÓGICO QUE INDICA QUE NO SE LOGRÓ REPOSICIONAR
						EL CONTENIDO.
	
	------------------------------------------------------------*/
	CORELocator.readMaxContentData = function(pReposiciona)
	{
		// Si el modo de ejecución es libre se leen los datos localmente
		if(varConfigModo==0)
		{
			var vDataModulo = CORELocalStorage.readData(keyCourseName+vArrContenidoActual[0]);
			COREDebuger.outputMessage("[CORELocator.readMaxContentData]=>vDataModulo= "+vDataModulo+":"+keyCourseName+vArrContenidoActual[0], "consola");
			vNumMaximoContenido = (vDataModulo!=null)?vDataModulo.contenido*1:1;
		}
		else
		{
			COREDebuger.outputMessage("[CORELocator.readMaxContentData]=>Contenido máximo sin procesar: "+lms_ubicacion_actual, "consola");
			vNumMaximoContenido = (lms_ubicacion_actual!=null && lms_ubicacion_actual*1!=0)?lms_ubicacion_actual*1:1;
		}
		
		// Revisa si hay permiso para ver ese contenido y estado de prerrequisitos
		COREDebuger.outputMessage("[CORELocator.readMaxContentData]=>Contenido máximo: "+vNumMaximoContenido, "consola");
		if(!pReposiciona) COREContentController.checkLocalStatus();
		if(vUserRejected) return;
		
		COREDebuger.outputMessage("[CORELocator.readMaxContentData]=>Usuario cumple prerrequisitos para estar en contenido", "consola");
		
		// Asigna el nuevo valor del contenido más avanzado
		vNumMaximoContenido = (vNumContenidoActual>vNumMaximoContenido)?vNumContenidoActual:vNumMaximoContenido;
		
		COREDebuger.outputMessage("[CORELocator.readMaxContentData]=>Nuevo número de contenido más avanzado:"+vNumMaximoContenido, "consola");
		COREDebuger.outputMessage("[CORELocator.readMaxContentData]=>Número contenido actual:"+vNumContenidoActual, "consola");
		
		if(pReposiciona)
		{
			if(vNavegaUltimoContenido && vNumContenidoActual==0)
			{
				if(vNumMaximoContenido*1!=vNumContenidoActual) return CORELocator.reposiciona(vNumMaximoContenido);
			}
			else
				return CORELocator.reposiciona(1);
		}
	}
	
	/*----------------------------------------------------------
	FUNCIÓN QUE EVALÚA SI SE PUEDE NAVEGAR A LA PÁGINA ANTERIOR.
	
	ATRIBUTOS:	ESTA FUNCIÓN NO POSEE ATRIBUTOS
	------------------------------------------------------------
	
	RETORNO:
	------------------------------------------------------------
		false		SI NO SE PUEDE NAVEGAR A LA ANTERIOR PÁGINA
		URL			SI SE PUEDE NAVEGAR A LA ANTERIOR PÁGINA
	
	------------------------------------------------------------*/
	CORELocator.canNavigateBack = function()
	{
		// Se obtiene la posición actual en el arreglo
		var vPosArrActual = $.inArray( vNombrePage, arrInfoTemas[varPrefixTema+vArrContenidoActual[1]].paginas );
		// Revisa si la página actual existe en el arreglo de contenidos
		if(vPosArrActual<=-1) return false;
		// Calcula si hay contenido anterior
		if(vNumContenidoActual<1) return false;
		
		// Flecha anterior
		if(vPosArrActual>0)
			return "../"+varPrefixTema+vArrContenidoActual[1]+"/"+arrInfoTemas[varPrefixTema+vArrContenidoActual[1]].paginas[vPosArrActual-1]+".html";
		else
		{
			if(arrInfoTemas[varPrefixTema+(vArrContenidoActual[1]*1-1)])
				return "../"+varPrefixTema+(vArrContenidoActual[1]*1-1)+"/"+arrInfoTemas[varPrefixTema+(vArrContenidoActual[1]*1-1)].paginas[arrInfoTemas[varPrefixTema+(vArrContenidoActual[1]*1-1)].paginas.length-1]+".html";
			else
				return false;
		}
	}
	
	/*----------------------------------------------------------
	FUNCIÓN QUE EVALÚA SI SE PUEDE NAVEGAR A LA PÁGINA SIGUIENTE.
	
	ATRIBUTOS:	ESTA FUNCIÓN NO POSEE ATRIBUTOS
	------------------------------------------------------------
	
	RETORNO:
	------------------------------------------------------------
		false		SI NO SE PUEDE NAVEGAR A LA SIGUIENTE PÁGINA
		URL			SI SE PUEDE NAVEGAR A LA SIGUIENTE PÁGINA
	
	------------------------------------------------------------*/
	CORELocator.canNavigateForward = function()
	{
		// Se obtiene la posición actual en el arreglo
		var vPosArrActual = $.inArray( vNombrePage, arrInfoTemas[varPrefixTema+vArrContenidoActual[1]].paginas );
		// Revisa si la página actual existe en el arreglo de contenidos
		if(vPosArrActual<=-1) return false;
		// Calcula si hay contenido siguiente
		if(vNumContenidoActual>=numContenidos) return false;
		
		// Flecha siguiente
		if(vPosArrActual<(arrInfoTemas[varPrefixTema+vArrContenidoActual[1]].paginas.length-1))
			return "../"+varPrefixTema+vArrContenidoActual[1]+"/"+arrInfoTemas[varPrefixTema+vArrContenidoActual[1]].paginas[vPosArrActual+1]+".html";
		else
		{
			if(arrInfoTemas[varPrefixTema+(vArrContenidoActual[1]*1+1)])
				return "../"+varPrefixTema+(vArrContenidoActual[1]*1+1)+"/"+arrInfoTemas[varPrefixTema+(vArrContenidoActual[1]*1+1)].paginas[0]+".html";
			else
				return false;
		}
	}

	/*----------------------------------------------------------
	FUNCIÓN PARA ASIGNAR REMOTAMENTE EL VALOR DE LA VARIABLE 
	lms_datos_leccion
	
	ATRIBUTOS:
	------------------------------------------------------------
	pDatos = VALOR A ASIGNAR A LA VARIABLE lms_datos_leccion
	
	RETORNO: ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	CORELocator.setDatosLeccion = function(pDatos)
	{
		lms_datos_leccion = pDatos;
	}
	
	/*----------------------------------------------------------
	FUNCIÓN QUE DEBE SER LLAMADA ANTES DE NAVEGAR A CUALQUIER
	CONTENIDO.
	
	ATRIBUTOS:	ESTA FUNCION NO POSEE ATRIBUTOS.
	------------------------------------------------------------
						
	RETORNO:	ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	CORELocator.requestNavigation = function()
	{
		vInternalNavRequest = true;
		COREDebuger.outputMessage("[CORELocator.requestNavigation]=>Se activó la navegación interna", "consola");
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
	CORELocator.get = function(pParam)
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
	CORELocator.set = function(pParam)
	{
		eval(pParam);
	}
	
	return CORELocator;
	
})(this, this.document);