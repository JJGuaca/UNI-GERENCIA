/*------------------------------------------------------
	Propietario:	Estrategia y Conocimiento SAS ©2015
  Producto: 		Plantilla integración SCORM 1.2
  Información:	Requiere jQuery 1.9 mínimo.
								Controlador para cargar el árbol 
								temático del curso.
	Derechos:			Derechos totalmente reservados para su
  							distribución, copia o modificación,
                salvo expresa autorización de:
                Estrategia y Conocimiento SAS.
--------------------------------------------------------*/

window.CORETopicsLoader = (function( window, document, undefined ) {
	var version = '1.0.0',
	pageChar = ".",					// Separador en la numeración de los temas
	showPageNumbers = true,	// Determina si muestra o no los números de las páginas
	showParentsNumbers = true,	// Determina si muestra o no el número de la raíz de cada nivel
	showPageParents = true,	// Determina si muestra o no el nombre de la raíz de cada nivel
	showPageTitles = true,	// Determina si muestra o no el título de cada tema
	showPagePercentage = true,	// Determina si muestra o no el porcentaje de avance de la página
	CORETopicsLoader = {},
	owner = window,
	vDocument = document,
	docElement = document.documentElement;
	
	/*----------------------------------------------------------
	FUNCIÓN QUE LEE EL ESTADO DE TODOS LOS TEMAS DEL MÓDULO Y 
	CONSTRUYE EL ÁRBOL TEMÁTICO.
	
	ATRIBUTOS: ESTA FUNCIÓN NO POSEE ATRIBUTOS
	------------------------------------------------------------
						
	RETORNO: ESTÁ FUNCIÓN NO RETORNA NINGÚN VALOR
	------------------------------------------------------------*/
	CORETopicsLoader.init = function()
	{
		// Se lee el estado de los temas
		COREDebuger.outputMessage("[CORETopicsLoader.init]=>Se inicializa el menú de temas", "consola");
		var arrTempEstados = COREContentController.readEstadoContenidos();
		var arrAvances = arrTempEstados[0].split(",");
		var arrAprobados = arrTempEstados[1].split(",");
		var cont = 0;
		
		// Se asigna el nombre número del módulo
		$(".liTituloModulo").html(nombreModulo+" "+CORELocator.get("vArrContenidoActual")[0]);
		
		for(unTema in arrInfoTemas)
		{
			var tempArrTema = unTema.toString().split(CORELocator.get("varPrefixTema"));
			if(tempArrTema.length < 2)
			{
				COREDebuger.outputMessage("[CORETopicsLoader.init]=>ERROR: El árbol de contenidos en el config.js está mal formado. El prefijo ("+CORELocator.get("varPrefixTema")+") no se encuentra en el elemento del árbol ("+unTema+")", "consola");
				break;
			}
			var tempTema = tempArrTema[1];
			
			var vNombrePadre = "";
			var tmpNameParentPage = arrInfoTemas[unTema].titulo;
			// Se imprime el título del tema actual
			if(tmpNameParentPage!="" && showPageTitles)
			{
				var vActivo = (CORELocator.get("vNumMaximoContenido")>=cont+1)?true:false;
				var vContenido = '<li class="liRootTema'+((vActivo)?"Activo":"")+'">'+((showParentsNumbers)?(tempTema+". "):"")+tmpNameParentPage+'</li>';
				$(".innerMenuTemas ul").append(vContenido);
				COREDebuger.outputMessage("[CORETopicsLoader.init]=>Título tema: "+tmpNameParentPage+" Activo: "+((vActivo)?"Si":"No"), "consola");
			}
			
			for(unaPagina in arrInfoTemas[unTema].data)
			{
				var vActivo = (CORELocator.get("vNumMaximoContenido")>=cont+1)?true:false;
				var vActual = (CORELocator.get("vNumContenidoActual")==cont+1)?true:false;
				var vTmpNumeroPag = arrInfoTemas[unTema].data[unaPagina][0];
				var vTmpNombrePag = arrInfoTemas[unTema].data[unaPagina][1];
				var tmpPageInfo = CORETopicsLoader.getNumeracionPagina(unaPagina,tempTema);
				if(vTmpNumeroPag==null)
				{
					vContenido = '<li class="liRootTema'+((vActivo)?"Activo":"")+'">'+((showParentsNumbers)?(tmpPageInfo+" "):"")+vTmpNombrePag+'</li>';
				}
				else
				{
					// Se imprime el elemento en el menú de temas
					if(vActivo && !vActual)
						vContenido = '<li><a href="#" title="Ir a '+vTmpNombrePag+((showPagePercentage)?" (% de avance: "+arrAvances[cont]+" %)":"")+'" onClick="CORELocator.reposiciona('+(arrInfoTemas[unTema].data[unaPagina][0])+',false); return false;" onFocus="this.blur();">'+((showPageNumbers)?(tmpPageInfo+" "):"")+vTmpNombrePag+'</a></li>';
					else if(vActivo && vActual)
						vContenido = '<li class="liTemaActivo" title="'+((showPagePercentage)?"% de avance: "+arrAvances[cont]+"%":"")+'">'+((showPageNumbers)?(tmpPageInfo+" "):"")+vTmpNombrePag+'</li>';
					else
						vContenido = '<li class="liTemaInactivo" title="'+((showPagePercentage)?"% de avance: "+arrAvances[cont]+"%":"")+'">'+((showPageNumbers)?(tmpPageInfo+" "):"")+vTmpNombrePag+'</li>';
				}
				
				$(".innerMenuTemas ul").append(vContenido);
				
				cont = (vTmpNumeroPag!=null)?vTmpNumeroPag:cont;
				COREDebuger.outputMessage("[CORETopicsLoader.init]=>cod. página:"+unaPagina+" Num. página:"+vTmpNumeroPag+" Nombre página:"+vTmpNombrePag+" Activo: "+((vActivo)?"Si":"No")+" Actual:"+((vActual)?"Si":"No"), "consola");
			}
		}
	}
	
	/*----------------------------------------------------------
	FUNCIÓN QUE OBTIENE LA NUMERACIÓN DE UN NOMBRE DE PÁGINA
	PROPORCIONADO.
	
	ATRIBUTOS:
	------------------------------------------------------------
		pPagina 		= STRING CON EL NOMBRE DE LA PÁGINA
		pTemaActual = NUMBER CON EL NÚMERO DEL TEMA AL QUE 
									CORRESPONDE LA PÁGINA DEL PARÁMETRO
						
	RETORNO:
	------------------------------------------------------------
		STRING CON LA NUMERACIÓN DEL CONTENIDO
	
	------------------------------------------------------------*/
	CORETopicsLoader.getNumeracionPagina = function(pPagina,pTemaActual)
	{
		var pageNumber = pTemaActual+pageChar;
		
		// Determina si hay múltiples divisiones del contenido o no
		if(pPagina != CORELocator.get("varPrefixTxt"))
		{
			tmpArr = pPagina.split(CORELocator.get("varPrefixTxt"));
			if(tmpArr.length<2)
			{
				// El nombre de la página está mal formado
				COREDebuger.outputMessage("[CORETopicsLoader.getNumeracionPagina]=>ERROR: el nombre de la página ("+pPagina+") del tema ("+pTemaActual+") está mal formado. No incluye el prefijo ("+CORELocator.get("varPrefixTxt")+")", "consola");
				return;
			}
			tmpArr = tmpArr[1].split(CORELocator.get("varPrefixSeparator"));
			
			tmpPageNumber = tmpArr.join(pageChar);
			pageNumber += tmpPageNumber+pageChar;
		}
		return pageNumber;
	}
	return CORETopicsLoader;
	
})(this, this.document);