/*------------------------------------------------------
	Propietario:	Estrategia y Conocimiento SAS ©2015
  Producto: 		Plantilla integración SCORM 1.2
  Información:	Requiere jQuery 1.9 mínimo.
								Código para controlar el comportamiento
								de los recursos del contenido.
	Derechos:			Derechos totalmente reservados para su
  							distribución, copia o modificación,
                salvo expresa autorización de:
                Estrategia y Conocimiento SAS.
--------------------------------------------------------*/

window.COREResourceController = (function( window, document, undefined ) {
	var version = '1.0.0',
	varNumRecursos = 0,								// Número total de recursos marcados para conteo de la página
	varArrRecursos = new Array(),			// Arreglo que contiene el estado de cada recursos marcados para conteo de la página
	varNumRecursosVistos = 0,					// Número total de recursos marcados para conteo de la página visitados por el usuario
	COREResourceController = {},
	owner = window,
	vDocument = document,
	docElement = document.documentElement;
	
	/*----------------------------------------------------------
	EVALÚA CADA LINK DE LA PÁGINA Y AQUELLAS QUE POSEAN EL PARÁMETRO segSCORM
	Y ÉSTE SEA DIFERENTE A "" Y A "no", LOS TIENE EN CUENTA PARA EL CONTEO DE
	RECURSOS Y GENERA EL ARREGLO QUE DETERMINA EL ESTADO DE VISITA DE UNA PÁGINA:
	segSCORM	= ""		NO SE TIENE EN CUENTA
	segSCORM	= "no"	NO SE TIENE EN CUENTA
	segSCORM	= "si"	SE TIENE EN CUENTA
	
	ATRIBUTOS: ESTA FUNCIÓN NO POSEE ATRIBUTOS
	------------------------------------------------------------
						
	RETORNO: ESTA FUNCIÓN NO RETORNA NINGÚN VALOR
	------------------------------------------------------------*/
	COREResourceController.checkResources = function()
	{
		COREDebuger.outputMessage("[COREResourceController.checkResources]=>Se inicia la preparación de todos los hipervínculos identificados para seguimiento en la página", "consola");
		var arrRecursos = COREResourceController.getElementsByAttribute(document,"*","segSCORM","si");
		var conteo = -1;
		
		// Se incorporan las funciones definidas a los códigos ya existentes en los eventos
		for(var i in arrRecursos)
		{
			conteo++;
			varNumRecursos++;
			varArrRecursos.push(false);
			var txtFuncionesSCORM = "COREResourceController.changeClassVisited(this);";
		
			switch(varConfigModo)
			{
				case 0:	// Versión CD/Libre
					txtFuncionesSCORM += "COREResourceController.setResourceStatus("+conteo+",true);	COREResourceController.totalVistos(); ";
					break;
				case 1:	// SCORM 1.2
					txtFuncionesSCORM += "COREResourceController.setResourceStatus("+conteo+",true);	COREResourceController.totalVistos(); ";
					break;
			}
			// Se agrega el atributo al objeto con el número de recurso asignado en la página
			arrRecursos[i].setAttribute("pLinkConteo",conteo);
			
			// Se agregan las acciones almacenadas en txtFuncionesSCORM al comportamiento del enlace
			if(arrRecursos[i].getAttribute("onmouseover")!=null) // onmouseover
			{
				var onMouseOverActual = arrRecursos[i].getAttribute("onmouseover") + "";
				if(onMouseOverActual.toUpperCase().indexOf("FUNCTION")!= -1)
				{
					var inicio=onMouseOverActual.indexOf("{");
					var fin=onMouseOverActual.indexOf("}");
					onMouseOverActual=onMouseOverActual.substr(inicio+2,fin-(inicio+2));
				}
				arrRecursos[i].onmouseover = new Function(txtFuncionesSCORM+onMouseOverActual);
			}
			else if(arrRecursos[i].getAttribute("onclick")!=null) // onclick
			{
				var onclickActual = arrRecursos[i].getAttribute("onclick") + "";
				if(onclickActual.toUpperCase().indexOf("FUNCTION")!= -1)
				{
					var inicio=onclickActual.indexOf("{");
					var fin=onclickActual.indexOf("}");
					onclickActual=onclickActual.substr(inicio+2,fin-(inicio+2));
				}
				arrRecursos[i].onclick = new Function(txtFuncionesSCORM+onclickActual);
			}
			else // href puro sin onclick ni onmouseover
			{
				arrRecursos[i].onclick = new Function(txtFuncionesSCORM);
			}
		}
		COREDebuger.outputMessage("[COREResourceController.checkResources]=>Se prepararón "+conteo+" hipervínculos en la página", "consola");
	}
	
	/*----------------------------------------------------------
	FUNCIÓN QUE DEVUELVE UN ARREGLO CON TODOS LOS ELEMENTOS DEL HTML
	QUE SE ENCUENTREN DENTRO DEL OBJETO INDICADO EN EL PARÁMETRO oElm,
	QUE SEAN DEL TIPO INDICADO EN EL PARÁMETO strTagName, QUE TENGA EL
	ATRIBUTO INDICADO EN EL PARÁMETRO strAttibuteName Y EL VALOR DEL
	PARÁMETRO SEA IGUAL AL INDICADO EN EL PARÁMETRO strAttibuteValue.
	
	ATRIBUTOS:
	------------------------------------------------------------
		oElm = OBJETO A INSPECCIONAR
		strTagName = TIPO DE OBJETOS A RETORNAR
		strAttibuteName = ATRIBUTO QUE DEBE EXISTIR EN EL OBJETO 
											PARA INCLUIRLO EN LOS OBJETOS RETORNADOS.
						
	RETORNO:
	------------------------------------------------------------
	ARREGLO = OBJETOS ENCONTRADOS QUE COINCIDEN CON LOS 
						PARÁMETROS PROPORCIONADOS
	
	------------------------------------------------------------*/

	COREResourceController.getElementsByAttribute = function(oElm, strTagName, strAttributeName, strAttributeValue)
	{
		var arrElements = (strTagName == "*" && oElm.all)? oElm.all : oElm.getElementsByTagName(strTagName);
		var arrReturnElements = new Array();
		var oAttributeValue = (typeof strAttributeValue != "undefined")? new RegExp("(^|\\s)" + strAttributeValue + "(\\s|$)", "i") : null;
		var oCurrent;
		var oAttribute;
		for(var i=0; i<arrElements.length; i++)
		{
			oCurrent = arrElements[i];
			try
			{
				oAttribute = oCurrent.getAttribute(strAttributeName);
			}
			catch(e)
			{
				oAttribute = null;
			}
			if(typeof oAttribute == "string" && oAttribute.length > 0)
			{
				if(typeof strAttributeValue == "undefined" || (oAttributeValue && oAttributeValue.test(oAttribute)))
				{
					arrReturnElements.push(oCurrent);
				}
			}
		}
		return arrReturnElements;
	}
	
	/*----------------------------------------------------------
	FUNCIÓN QUE ASIGNA A LA VARIABLE 'varArrRecursos' EN LA 
	POSICIÓN DEL ARREGLO INDICADA EN EL PARÁMETRO	pPosicion 
	EL VALOR PROPORCIONADO EN EL PARÁMETRO pValor.
	
	ATRIBUTOS:
	------------------------------------------------------------
	pPosicion = POSICIÓN EN EL ARREGLO A MODIFICAR
	pValor 		= VALOR A ALMACENAR EN LA POSICIÓN DEL ARREGLO
	
	RETORNO: ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	COREResourceController.setResourceStatus = function(pPosicion,pValor)
	{
		COREDebuger.outputMessage("[COREResourceController.setResourceStatus]=>Se actualizó el estado del recurso "+pPosicion+" a: "+((pValor)?"Visto":"No visto"), "consola");
		varArrRecursos[pPosicion] = pValor;
	}
	
	/*----------------------------------------------------------
	FUNCIÓN QUE RECORRE TODOS LOS RECURSOS DE LA PÁGINA
	Y EVALÚA CUALES HAN SIDO VISITADOS Y CUALES NO. LA
	FUNCIÓN LLAMA LA FUNCIÓN setBarraProgresoLocal, INFORMÁNDOLE 
	LA CANTIDAD DE RECURSOS QUE HAN SIDO VISTOS.
	
	ATRIBUTOS: ESTA FUNCIÓN NO POSEE ATRIBUTOS
	------------------------------------------------------------
	
	RETORNO: ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	COREResourceController.totalVistos = function()
	{
		var vistos = 0;
		for( i = 0; i < varNumRecursos; i++ )
		{
			if( varArrRecursos[i] )
				vistos++;
		}
		COREDebuger.outputMessage("[COREResourceController.totalVistos]=>Se actualiza el número total de recursos vistos de "+varNumRecursosVistos+" a "+vistos, "consola");
		varNumRecursosVistos = vistos;
		viewContent.setBarraProgresoLocal(varNumRecursosVistos);
	}
	
	/*----------------------------------------------------------
	FUNCIÓN QUE MODIFICA LA APARIENCIA DEL OBJETO QUE SE
	PROPORCIONA Y QUE REPRESENTA EL ENLACE QUE HA SIDO VISITADO
	POR EL ESTUDIANTE EN LA PÁGINA.
	
	ATRIBUTOS:
	------------------------------------------------------------
	pObj = 	OBJETO QUE REPRESENTA EL ENLACE ACTIVADO POR EL 
					USUARIO
	
	RETORNO: ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	COREResourceController.changeClassVisited = function(pObj)
	{
		// Se cambia el color por el indicado en el archivo config.js
		pObj.style.color = varColorLinkVisitado;
		COREDebuger.outputMessage("[COREResourceController.changeClassVisited]=>Se actualiza la apariencia del hipervínculo visitado", "consola");
		if(pObj.hasChildNodes())
		{
			if(pObj.firstChild.tagName!="IMG") return;
			// Si es una imagen, se agrega marco del color visitado
			pObj.firstChild.style.borderTopColor = varColorLinkVisitado;
			pObj.firstChild.style.borderBottomColor = varColorLinkVisitado;
		}
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
	COREResourceController.get = function(pParam)
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
	COREResourceController.set = function(pParam)
	{
		eval(pParam);
	}
	
	return COREResourceController;
	
})(this, this.document);