/*------------------------------------------------------
	Propietario:	Estrategia y Conocimiento SAS ©2015
  Producto: 		Plantilla integración SCORM 1.2
								Plantilla líneal.
  Información:	Requiere jQuery 1.9.
								Comportamientos página contenidos.
  Derechos:			Derechos totalmente reservados para su
  							distribución, copia o modificación,
                salvo expresa autorización de:
                Estrategia y Conocimiento SAS.
--------------------------------------------------------*/

window.viewContent = (function( window, document, undefined ) {
	var version = '1.0.0',
	vNotaMinima = 0,						// Valor de la nota mínima requerida en la página
	vMinutosRequeridos = 0,			// Almacena los minutos requeridos en el contenido
	vSegundosRequeridos = 0,		// Almacena los segundos requeridos en el contenido
	vTemplateLoaded = false,		// Indica si el controlador del contenido ya se inicializó
	vHtmlLoaded = false,				// Indica si el contenido ya se cargo
	vContadorIniciado = false,	// Indica si el contador del tiempo en la página ya se inició
	arrEleIframes = new Array(),// Almacena todos los iFrames de la página
	viewContent = {},
	owner = window,
	vDocument = document,
	docElement = document.documentElement;
	
	/*----------------------------------------------------------
	FUNCIÓN QUE PERMITE INICIALIZAR LOS COMPORTAMIENTOS DEL
	VIEW content.
	
	ATRIBUTOS:	ESTA FUNCION NO POSEE ATRIBUTOS.
	------------------------------------------------------------
						
	RETORNO:	ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	viewContent.init = function()
	{
		COREDebuger.outputMessage("**************************************************", "consola");
		COREDebuger.outputMessage("[viewContent.init]=>Contenido cargado: modo ejecución "+varConfigModo, "consola");
		
		/* Se inicia la pecarga de las imágenes ocultas de la interface */
		if($.isFunction(MM_preloadImages)) MM_preloadImages('../../api/view/images/content/header/imgActivities_on.jpg');
		/* Se inicializa la detección de condiciones del navegador, el dispositivo y el entorno de ejecución */
		if($.isFunction(COREBrowserDetection.init)) COREBrowserDetection.init();
		/* Se inicializa el botón de actividades */
		if($.isFunction(viewContent.initActivitiesButton)) viewContent.initActivitiesButton();
		/* Se lee la ruta actual desde la URL */
		if($.isFunction(CORELocator.getUbicacionActual)) CORELocator.getUbicacionActual();
		/* Se cargan los datos SCORM */
		if(varConfigModo > 0) loadPageSCORM();
		
		/* 	ASIGNACIÓN DE EVENTOS A LA PÁGINA: carga en el documento los controladores
				requeridos para manejar el evento onbeforeunload y onUnload. */				
		if (!viewContent.addEvent(owner, 'unload', COREContentController.templateUnloadPage))
			owner.onunload = COREContentController.templateUnloadPage;
		if (!viewContent.addEvent(owner, 'beforeunload', COREContentController.templateUnloadPage))
			owner.onbeforeunload = COREContentController.templateUnloadPage;
		
		/* Se lee el máximo contenido */
		if($.isFunction(CORELocator.readMaxContentData)) CORELocator.readMaxContentData(false);
		/* Se actualiza el título de la página */
		if($.isFunction(viewContent.updatePageTitle)) viewContent.updatePageTitle();
		/* Se inicializan los evenos de clic de los menús desplegables temas y navegación */
		if($.isFunction(viewContent.initMenus)) viewContent.initMenus();
		/* Se inicializan los temas en la interface gráfica */
		if($.isFunction(viewContent.initTemas)) viewContent.initTemas();
		/* Se inicializan los subtemas en la interface gráfica */
		if($.isFunction(viewContent.initSubtemas)) viewContent.initSubtemas();
		/*	Se revisan los controles de navegación para modificarlos según el modo de la plantilla */
		if($.isFunction(viewContent.checkNavigationLinks)) viewContent.checkNavigationLinks();
		/*	Se presenta el número del contenido actual en la interface gráfica */
		if($.isFunction(viewContent.updateContentNumber)) viewContent.updateContentNumber();
		/*	Se asigna la numeración del contenido actual en los lugares donde se requiera */
		if($.isFunction(contentRewrite.assignNumPack)) contentRewrite.assignNumPack();
		/*	Se inserta el nombre del contenido actual en los lugares donde se requiera */
		if($.isFunction(contentRewrite.insertContentTitle)) contentRewrite.insertContentTitle();
		/*	Se inserta el nombre del usuario en donde se requiera */
		if($.isFunction(contentRewrite.insertUserName)) contentRewrite.insertUserName();
		/*	Se revisan los recursos y capas para agregar código de rastreo SCORM */
		if($.isFunction(COREResourceController.checkResources)) COREResourceController.checkResources();
		/* Se inicializa la barra de progreso local en 0 */
		if($.isFunction(viewContent.setBarraProgresoLocal)) viewContent.setBarraProgresoLocal(0);
		/*	Se leen los iframes de la página */
		arrEleIframes = document.getElementsByTagName("iframe");
		/* Se carga el manejador de ventanas modales */
		if($.isFunction(MODModal.init)) MODModal.init();
		/* Se inicializa el árbol de temas */
		if($.isFunction(CORETopicsLoader.init)) CORETopicsLoader.init();
		/* Se carga el manejador del scroll to top de la página */
		if($.isFunction(scrollController.init)) scrollController.init();
		/* Se solicita el inicio del tiempo regresivo */
		if($.isFunction(viewContent.initPageConditions)) viewContent.initPageConditions(true);
	}
	
	/*----------------------------------------------------------
	FUNCIÓN QUE MODIFICA EL TÍTULO DE LA PÁGINA DE ACUERDO AL
	CONTENIDO QUE SE ESTÁ VISUALIZANDO.
	
	ATRIBUTOS: ESTA FUNCIÓN NO POSEE ATRIBUTOS
	------------------------------------------------------------
						
	RETORNO:	ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	viewContent.updatePageTitle = function()
	{
		var vTempModulo = nombreModulo + CORELocator.get("vArrContenidoActual")[0];
		var vTempTitulo = (CORELocator.get("vArrContenidoActual").length < 3)?arrInfoTemas[CORELocator.get("varPrefixTema")+CORELocator.get("vArrContenidoActual")[1]].titulo:arrInfoTemas[CORELocator.get("varPrefixTema")+CORELocator.get("vArrContenidoActual")[1]].data[CORELocator.get("vNombrePage")][1];
		COREDebuger.outputMessage("[viewContent.updatePageTitle]=>Se actualiza el título de la página a: "+vTempModulo+" - "+vTempTitulo, "consola");
		document.title = vTempModulo+" - "+vTempTitulo;
	}
	
	/*----------------------------------------------------------
	FUNCIÓN QUE INICILAIZA EL BOTÓN DE ACTIVIDADES DEL CURSO.
	
	ATRIBUTOS: ESTA FUNCIÓN NO POSEE ATRIBUTOS
	------------------------------------------------------------
						
	RETORNO:	ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	viewContent.initActivitiesButton = function()
	{
		if((habilitaConteoRecursos || habilitaTiempo) && !vMuestraBotonActividades)
		{
			// Si hay condiciones de navegación se oculta el botón de atividades
			$("#enlaceVerActividades").hide();
			COREDebuger.outputMessage("[viewContent.initActivitiesButton]=>Se oculta el botón de actividades", "consola");
		}
	}
	
	/*----------------------------------------------------------
	FUNCIÓN QUE INICILAIZA LOS LISTENERS DEL CLIC DE LOS
	MENÚS DESPLEGABLES DE LA INTERFACE.
	
	ATRIBUTOS: ESTA FUNCIÓN NO POSEE ATRIBUTOS
	------------------------------------------------------------
						
	RETORNO:	ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	viewContent.initMenus = function()
	{
		COREDebuger.outputMessage("[viewContent.initMenus]=>Se inicializan los eventos clic de los menús", "consola");
		$("#enlaceVerActividades").on("click", function(e){
			viewContent.showMenuActividades(true,e);
		})
		$("#linkMenuNavegacion").on("click", function(e){
			viewContent.showMenuNavegacion(true,e);
		})
		$("#linkMenuTemas").on("click", function(e){
			viewContent.showMenuTemas(true,e);
		})
	}
	
	/*----------------------------------------------------------
	FUNCIÓN QUE INICILAIZA LA INFORMACIÓN DE LOS TEMAS EN 
	LA VISTA.
	
	ATRIBUTOS: ESTA FUNCIÓN NO POSEE ATRIBUTOS
	------------------------------------------------------------
						
	RETORNO:	ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	viewContent.initTemas = function()
	{
		COREDebuger.outputMessage("[viewContent.initTemas]=>Se inicializan los temas", "consola");
		// Se evalúa si se debe mostrar el nombre del curso en la miga de pan
		if(showCourseName)
			$("#txtNombreCurso").text(tituloCurso);
		else
			$("#txtNombreCurso").remove();
		// Se evalúa si se debe mostrar el número del módulo en la miga de pan
		if(showModuleNumber)
			$("#txtNumModulo").text(" "+nombreModulo+" "+ CORELocator.get("vArrContenidoActual")[0]);
		else
		{
			if(!showModuleName) $("#txtNumModulo").prev().remove();
			$("#txtNumModulo").remove();
		}
		// Se evalúa si se debe mostrar el nombre del módulo en la miga de pan
		if(showModuleName)
		{
			if(!showModuleNumber) $(".txtPepaNombreModulo").remove();
			$("#txtNombreModulo").text(tituloModulo);
		}
		else
		{
			$(".txtPepaNombreModulo").remove();
			$("#txtNombreModulo").remove();
		}
		// Se evalúa si se debe mostrar el nombre del tema en la miga de pan
		if(ubicacionNombreTema == 1)
			$("#txtNombreTema").text(" "+arrInfoTemas[CORELocator.get("varPrefixTema")+CORELocator.get("vArrContenidoActual")[1]].titulo);
		else
		{
			$("#txtNombreTema").prev().remove();
			$("#txtNombreTema").remove();
			// Se evalúa si se debe mostrar el nombre del tema en el contenido
			if(ubicacionNombreTema == 2 && $('.COREInnerContenido').html()!=null)
			{
				vTxtInfoTema = '<div><img src="../../api/view/images/general/vineta-flecha.png"><span id="txtNombreTema"> '+arrInfoTemas[CORELocator.get("varPrefixTema")+CORELocator.get("vArrContenidoActual")[1]].titulo+'</span></div><br>';
				$('.COREInnerContenido').prepend(vTxtInfoTema);
			}
		}
	}
	
	/*----------------------------------------------------------
	FUNCIÓN QUE INICILAIZA LA INFORMACIÓN DE LOS SUBTEMAS EN 
	LA VISTA.
	
	ATRIBUTOS: ESTA FUNCIÓN NO POSEE ATRIBUTOS
	------------------------------------------------------------
						
	RETORNO:	ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	viewContent.initSubtemas = function()
	{
		// Si no se está en un subtema se sale de la función
		if(CORELocator.get("vArrContenidoActual").length < 3) return;
		COREDebuger.outputMessage("[viewContent.initSubtemas]=>Se inicializan los subtemas", "consola");
		// Se evalúa si se debe mostrar el nombre del subtema en la miga de pan
		if(ubicacionNombreSubTema == 1)
		{
			vTxtInfoSubtemas = '<img src="../../api/view/images/general/vineta-flecha.png"><span id="txtSubtemas"> '+arrInfoTemas[CORELocator.get("varPrefixTema")+CORELocator.get("vArrContenidoActual")[1]].data[CORELocator.get("vNombrePage")][1]+'</span>';
			$(".COREMigaPan").append(vTxtInfoSubtemas);
		}
		else
		{
			// Se evalúa si se debe mostrar el nombre del subtema en el contenido
			if(ubicacionNombreSubTema == 2 && $('.COREInnerContenido').html()!=null)
			{
				if($('.COREInnerContenido span#txtNombreTema').html()!=null)
				{
					vTxtInfoSubtemas = '<br><span id="txtSubtemas"><img src="../../api/view/images/general/vineta-flecha.png"> '+arrInfoTemas[CORELocator.get("varPrefixTema")+CORELocator.get("vArrContenidoActual")[1]].data[CORELocator.get("vNombrePage")][1]+'</span>';
					$('.COREInnerContenido span#txtNombreTema').append(vTxtInfoSubtemas);
				}
				else
				{
					vTxtInfoSubtemas = '<div><span id="txtSubtemas"><img src="../../api/view/images/general/vineta-flecha.png"> '+arrInfoTemas[CORELocator.get("varPrefixTema")+CORELocator.get("vArrContenidoActual")[1]].data[CORELocator.get("vNombrePage")][1]+'</span></div><br>';
					$('.COREInnerContenido').prepend(vTxtInfoSubtemas);
				}
			}
		}
	}
	
	/*----------------------------------------------------------
	FUNCIÓN QUE DETERMINA SI SE MUESTRA O NO LAS FLECHAS DE 
	AVANCE Y RETROCESO DE LA PÁGINA Y ASIGNA LA ACCIÓN SEGÚN
	EL MODO DE LA PLANTILLA.
	
	ATRIBUTOS: ESTA FUNCIÓN NO POSEE ATRIBUTOS
	------------------------------------------------------------
						
	RETORNO:	ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	viewContent.checkNavigationLinks = function()
	{
		$('#linkBack').hide();
		$('#imgLinkBack').hide();
		$('#linkNext').hide();
		$('#imgLinkNext').hide();
		
		if(vMuestraFlechas)
		{
			// Flecha navegar atrás
			var vTempURLBack = CORELocator.canNavigateBack();
			if(vTempURLBack)
			{
				$('#linkBack').attr("href",vTempURLBack);
				$('#linkBack').show();
				$('#imgLinkBack').show();
				COREDebuger.outputMessage("[viewContent.checkNavigationLinks]=>Se habilita navegar hacia atrás", "consola");
			}
			
			// Flecha navegar adelante
			var vTempURLForward = CORELocator.canNavigateForward();
			if(vTempURLForward)
			{
				$('#linkNext').attr("href",vTempURLForward);
				if(!habilitaTiempo && !habilitaConteoRecursos)
				{
					$('#linkNext').show();
					$('#imgLinkNext').show();
					COREDebuger.outputMessage("[viewContent.checkNavigationLinks]=>Se habilita navegar hacia adelante", "consola");
				}
			}
		}
	}
	
	/*----------------------------------------------------------
	FUNCIÓN QUE PRESENTA EN LA INTERFACE GRÁFICA EL NÚMERO DEL
	CONTENIDO ACTUAL Y EL TOTAL DE CONTENIDOS DEL MÓDULO.
	
	ATRIBUTOS: ESTA FUNCIÓN NO POSEE ATRIBUTOS
	------------------------------------------------------------
						
	RETORNO:	ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	viewContent.updateContentNumber = function()
	{
		$("#txtPaginaActual").text(((CORELocator.get("vNumContenidoActual")>9)?CORELocator.get("vNumContenidoActual"):"0"+CORELocator.get("vNumContenidoActual"))+" de "+((numContenidos>9)?numContenidos:"0"+numContenidos));
	}
	
	/*----------------------------------------------------------
	FUNCIÓN QUE ESCRIBE EN EL CONTENIDO LA NUMERACIÓN DEL
	CONTENIDO ACTUAL, REEPLAZANDO EL CARACTER "#".
	
	ATRIBUTOS: ESTA FUNCIÓN NO POSEE ATRIBUTOS
	------------------------------------------------------------
						
	RETORNO:	ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	viewContent.assignNumPack = function()
	{
		// Verifica si existe algún elemento que solicite el número del tema
		$('[id=spanNumPack]').each(function(ind,obj){
			var formato = obj.innerHTML;
			var separador = obj.getAttribute("separator");
			var arrNumDatos = CORELocator.get("vArrContenidoActual");
			var arrFormato = Array();
			var numDato = 0;
			var arrPartes = formato.split(separador);
			
			for(unaParte in arrPartes)
			{
				if(arrPartes[unaParte]=="#" && numDato<arrNumDatos.length)
				{
					arrFormato.push(arrNumDatos[numDato]);
					numDato++
				}
				else if(arrPartes[unaParte]!="#" && arrPartes[unaParte]*1<arrNumDatos.length)
				{
					arrFormato.push(arrNumDatos[arrPartes[unaParte]*1]);
					numDato = arrPartes[unaParte]*1+1;
				}
			}
			obj.innerHTML = arrFormato.join(separador);
		});
		COREDebuger.outputMessage("[viewContent.assignNumPack]=>Se asigna la numeración del contenido en donde se solicita", "consola");
	}
	
	/*----------------------------------------------------------
	FUNCIÓN QUE ESCRIBE EN EL CONTENIDO EL NOMBRE DEL CONTENIDO
	CORRESPONDIENTE AL NIVEL DE PROFUNDIDAD ESPECÍFICADO EN EL 
	ATRIBUTO "level" DE LOS OBJETOS "spanContentTitle". PARA LOS
	SUBTEMAS SE PUEDE OBTENER EL NOMBRE DE CUALQUIER ANCESTRO (PADRE)
	POR MEDIO DEL ATRIBUTO "parent" (>0=>PARA TRAER EL NOMBRE 
	DEL ANCESTRO CORRESPONDIENTE, 0=>PARA TRAER EL NOMBRE DEL SUBTEMA)
	
	ATRIBUTOS: ESTA FUNCIÓN NO POSEE ATRIBUTOS
	------------------------------------------------------------
						
	RETORNO:	ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	viewContent.insertContentTitle = function()
	{
		// Verifica si existe algún elemento que solicite el número del tema
		$('[id=spanContentTitle]').each(function(ind,obj){
			var localNivel = obj.getAttribute("nivel");
			var localParent = obj.getAttribute("ancestro");
			var tmpNombreContenido = "";
			// Si el parámetro nivel está mal configurado se omite el elemento
			if(isNaN(localNivel*1) || (localNivel*1)<0) return true;
			// Si el nivel es de subtema pero no hay subtemas se modifica a tema el nivel
			if(CORELocator.get("vArrContenidoActual").length<3 && (localNivel*1)>2) localNivel = 2;
			switch(localNivel)
			{
				case "0":
					// Nombre del curso
					tmpNombreContenido = tituloCurso;
					break;
				case "1":
					// Nombre del módulo
					tmpNombreContenido = tituloModulo;
					break;
				case "2":
					// Nombre del tema
					tmpNombreContenido = arrInfoTemas[CORELocator.get("varPrefixTema")+CORELocator.get("vArrContenidoActual")[1]].titulo;
					break;
				default:
					// Nombre del subtema en el nivel correspondiente
					if((localNivel*1)<3) return;
					// Si el parámetro parent no es correcto se inserta el nombre del subtema
					if(isNaN(localParent*1) || (localParent*1)<1)
						tmpNombreContenido = arrInfoTemas[CORELocator.get("varPrefixTema")+CORELocator.get("vArrContenidoActual")[1]].data[CORELocator.get("vNombrePage")][1];
					else
					{
						var tmpNombrePage = CORELocator.get("varPrefixTxt");
						var tmpArrNombrePage = Array();
						// Si se proporciona un subtema ancestro inexistente se inserta el nombre del tema padre
						if(CORELocator.get("vArrContenidoActual").length-(localParent*1)<3)
						{
							tmpNombreContenido = arrInfoTemas[CORELocator.get("varPrefixTema")+CORELocator.get("vArrContenidoActual")[1]].titulo;
						}
						else
						{
							for(vContParent=2;vContParent<CORELocator.get("vArrContenidoActual").length-(localParent*1);vContParent++)
							{
								tmpArrNombrePage.push(CORELocator.get("vArrContenidoActual")[vContParent]);
							}
							tmpNombrePage += tmpArrNombrePage.join(CORELocator.get("varPrefixSeparator"));
							console.log("tmpNombrePage:"+tmpNombrePage);
							if(arrInfoTemas[CORELocator.get("varPrefixTema")+CORELocator.get("vArrContenidoActual")[1]].data[tmpNombrePage])
								tmpNombreContenido = arrInfoTemas[CORELocator.get("varPrefixTema")+CORELocator.get("vArrContenidoActual")[1]].data[tmpNombrePage][1];
						}
					}
					break;
			}
			obj.innerHTML = tmpNombreContenido;
		});
		COREDebuger.outputMessage("[viewContent.insertContentTitle]=>Se inserta el nombre del contenido en donde se solicita", "consola");
	}
	
	/*----------------------------------------------------------
	FUNCIÓN QUE ESCRIBE EN EL CONTENIDO EL NOMBRE DEL USUARIO
	DONDE SE SOLICITE.
	
	ATRIBUTOS: ESTA FUNCIÓN NO POSEE ATRIBUTOS
	------------------------------------------------------------
						
	RETORNO:	ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	viewContent.insertUserName = function()
	{
		// Se actualiza el nombre del usuario donde se requiera
		$('[class=nombre_persona]').each(function(ind,obj){
			var formato = obj.innerHTML;
			var txtFormato = nombre_usuario;
			
			if(formato=="capital")
			{
				txtFormato = '<span class="capital">'+nombre_usuario.substr(0,1)+'</span>';
				txtFormato += nombre_usuario.substr(1,nombre_usuario.length-1);
			}
			obj.innerHTML = txtFormato;
		});
		COREDebuger.outputMessage("[viewContent.insertUserName]=>Se inserta el nombre del usuario en el contenido en donde se solicita", "consola");
	}
	
	/*----------------------------------------------------------
	FUNCIÓN QUE ACTUALIZA EL PORCENTAJE DE AVANCE DE LA BARRA DE 
	PROGRESO LOCAL, LA CUAL MIDE EL NÚMERO DE RECURSOS DE LA 
	PÁGINA EXPLORADOS POR EL USUARIO.
	
	ATRIBUTOS:
	------------------------------------------------------------
	pActual = NÚMERO DE RECURSOS REVISADOS POR EL USUARIO
	
	RETORNO: ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	viewContent.setBarraProgresoLocal = function(pActual)
	{
		var vAnchoBarra = $(".CORELocalProgressBar").width();
		var vBarraProgreso = $(".CORELocalProgressBarIndicator");
		var vTxtAvance = $(".CORELocalProgressBarPercentage");
		var vPorcentajeAvance = (COREResourceController.get("varNumRecursos")<1)?100:(parseInt((pActual*100)/COREResourceController.get("varNumRecursos")));
		
		vTxtAvance.html(vPorcentajeAvance+"%");
		
		vBarraProgreso.attr("title",vPorcentajeAvance+"% de exploración del material disponible");
		vTxtAvance.attr("title",vBarraProgreso.attr("title"));
		vBarraProgreso.animate({width:((vPorcentajeAvance/100)*vAnchoBarra)+'px'},600,'linear');
		
		COREDebuger.outputMessage("[viewContent.setBarraProgresoLocal]=>Se actualiza la barra de progreso local a: "+vPorcentajeAvance+"%", "consola");
		
		if(!habilitaConteoRecursos) return;
		
		if((vPorcentajeAvance/100)>=vPorcentajeLocalCompletado)
		{
			COREDebuger.outputMessage("[viewContent.setBarraProgresoLocal]=>Se completó la visualización de recursos en la página", "consola");
			COREContentController.set("vContenidosCompletados = true");
			viewContent.verificarBtnSiguiente();
		}
	}
	
	/*----------------------------------------------------------
	FUNCIÓN QUE DETERMINA SI SE DEBE MOSTRAR O NO EL BOTÓN PARA
	AVANZAR A LA SIGUIENTE PÁGINA.
	
	ATRIBUTOS: ESTA FUNCIÓN NO POSEE ATRIBUTOS.
	------------------------------------------------------------
	
	RETORNO: ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	viewContent.verificarBtnSiguiente = function()
	{
		if($('#linkNext').is(":visible")) return;
		if(((habilitaTiempo && COREContentController.get("vTiempoCompletado")) || !habilitaTiempo) && ((habilitaConteoRecursos && COREContentController.get("vContenidosCompletados")) || !habilitaConteoRecursos))
		{
			if(!COREContentController.get("vHayEvaluacion") || (COREContentController.get("vHayEvaluacion") && COREContentController.get("vEvaluacionesAprobadas")))
			{
				COREContentController.set("vContenidosAprobados = true");
				if(vMuestraFlechas && CORELocator.get("vNumContenidoActual")<numContenidos)
				{
					$('#linkNext').hide().fadeIn(250);
					$('#imgLinkNext').hide().fadeIn(250);
					COREDebuger.outputMessage("[viewContent.verificarBtnSiguiente]=>Se cumplieron los prerrequisitos para mostrar enlace de avance", "consola");
				}
			}
		}
	}
	
	/*----------------------------------------------------------
	FUNCIÓN QUE OCULTA LOS CONTROLES DEL TIEMPO.
	
	ATRIBUTOS: ESTA FUNCIÓN NO POSEE ATRIBUTOS.
	------------------------------------------------------------
	
	RETORNO: ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	viewContent.hideTimeControl = function()
	{
		$('.CORELocalTimeControl').hide();
		$('#imgTimeControl').hide();
		COREDebuger.outputMessage("[viewContent.hideTimeControl]=>Se oculta el control de tiempo", "consola");
	}
	
	/*----------------------------------------------------------
	FUNCIÓN QUE DETERMINA SI SE DEBE MOSTRAR O NO EL BOTÓN PARA
	AVANZAR A LA SIGUIENTE PÁGINA.
	
	ATRIBUTOS:
	------------------------------------------------------------
		pEsTemplate = VALOR LÓGICO QUE INDICA SI LA FUNCIÓN HA
									SIDO LLAMADA POR EL PROCEDIMIENTO DE INICIO
									DEL content.js O POR OTRA FUNCIÓN
									
	RETORNO: ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	viewContent.initPageConditions = function(pEsTemplate)
	{
		vTemplateLoaded = (pEsTemplate)?true:vTemplateLoaded;
		vHtmlLoaded = (!pEsTemplate)?true:vHtmlLoaded;
		
		if(habilitaTiempo)
		{
			if(vTemplateLoaded && vHtmlLoaded && !vContadorIniciado)
			{
				vContadorIniciado = true;
				if(cuentaRegresiva)
				{
					$(".CORELocalTimeControl").countdown(COREContentController.setTiempoCompletado);
					COREDebuger.outputMessage("[viewContent.initTimeRequiered]=>Se inicia el conteo regresivo con requisito de tiempo de permanencia", "consola");
				}
				else
				{
					$(".CORELocalTimeControl").countup(COREContentController.setTiempoCompletado);
					COREDebuger.outputMessage("[viewContent.initTimeRequiered]=>Se inicia el conteo progresivo con requisito de tiempo de permanencia", "consola");
				}
			}
		}
		else
		{
			if(vTemplateLoaded && vHtmlLoaded)
			{
				vTiempoCompletado = true;
				if(cuentaRegresiva)
				{
					$(".CORELocalTimeControl").countdown(this);
					COREDebuger.outputMessage("[viewContent.initTimeRequiered]=>Se inicia el conteo regresivo sin requisito de tiempo de permanencia", "consola");
				}
				else
				{
					$(".CORELocalTimeControl").countup(this);
					COREDebuger.outputMessage("[viewContent.initTimeRequiered]=>Se inicia el conteo progresivo sin requisito de tiempo de permanencia", "consola");
				}
			}
		}
	}
	
	/*----------------------------------------------------------
	FUNCIÓN INICIALIZA EL CONTADOR REGRESIVO DE TIEMPO EN LA
	PÁGINA.
	
	ATRIBUTOS:
	------------------------------------------------------------
		pMinutos 	= NÚMERO DE MINUTOS
		pSegundos	= NÚMERO DE SEGUNDOS
									
	RETORNO: ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	viewContent.initTimeRequiered = function(pMinutos, pSegundos)
	{
		if(!muestraReloj)
		{
			viewContent.hideTimeControl();
			COREDebuger.outputMessage("[viewContent.initTimeRequiered]=>Se oculta el reloj", "consola");
		}
		
		vMinutosRequeridos = pMinutos;
		vSegundosRequeridos = pSegundos;
	
		viewContent.initPageConditions(false);
	}
	
	/*----------------------------------------------------------
	FUNCIÓN QUE MUESTRA Y OCULTA EL MENÚ DE TEMAS.
	
	ATRIBUTOS:
	------------------------------------------------------------
		pShow = 	VALOR LÓGICO QUE DETEMRINA SI SE MUESTRA (true)
							O SE OCULTA (false) EL MENÚ DE TEMAS
		pEvent = 	EVENTO pasado por el listener del onclick
									
	RETORNO: ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	viewContent.showMenuTemas = function(pShow, pEvent)
	{
		if(pShow && $(".mnMenuTemas").is(":visible")) return;
		
		if(pShow)
		{
			$(".mnMenuTemas").css("left",pEvent.pageX - ($(".mnMenuTemas").width()/2));
			$(".mnMenuTemas").slideDown(200,'linear',function(){
				$(".mnMenuTemasCapa").fadeIn(150,'linear');
			});
		}
		else
		{
			$(".mnMenuTemas").slideUp(200,'linear',function(){
				$(".mnMenuTemasCapa").fadeOut(150,'linear');
			});
		}
	}
	
	/*----------------------------------------------------------
	FUNCIÓN QUE MUESTRA Y OCULTA EL MENÚ DE NAVEGACIÓN.
	
	ATRIBUTOS:
	------------------------------------------------------------
		pShow = 	VALOR LÓGICO QUE DETEMRINA SI SE MUESTRA (true)
							O SE OCULTA (false) EL MENÚ DE NAVEGACIÓN
		pEvent = 	EVENTO pasado por el listener del onclick
									
	RETORNO: ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	viewContent.showMenuNavegacion = function(pShow, pEvent)
	{
		if(pShow && $(".mnMenuNavegacion").is(":visible")) return;
		
		if(pShow)
		{
			$(".mnMenuNavegacion").css("left",pEvent.pageX - ($(".mnMenuNavegacion").width()/2));
			$(".mnMenuNavegacion").slideDown(200,'linear',function(){
				$(".mnMenuNavegacionCapa").fadeIn(150,'linear');
			});
		}
		else
		{
			$(".mnMenuNavegacion").slideUp(200,'linear',function(){
				$(".mnMenuNavegacionCapa").fadeOut(150,'linear');
			});
		}
	}
	
	/*----------------------------------------------------------
	FUNCIÓN QUE MUESTRA Y OCULTA EL MENÚ DE ACTIVIDADES.
	
	ATRIBUTOS:
	------------------------------------------------------------
		pShow = 	VALOR LÓGICO QUE DETEMRINA SI SE MUESTRA (true)
							O SE OCULTA (false) EL MENÚ DE ACTIVIDADES
		pEvent = 	EVENTO pasado por el listener del onclick
									
	RETORNO: ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	viewContent.showMenuActividades = function(pShow, pEvent)
	{
		if(pShow && $(".mnMenuActividades").is(":visible")) return;
		
		if(pShow)
		{
			$(".mnMenuActividades").css("left",pEvent.pageX - ($(".mnMenuActividades").width()/2));
			$(".mnMenuActividades").slideDown(200,'linear',function(){
				$(".mnMenuActividadesCapa").fadeIn(150,'linear');
			});
		}
		else
		{
			$(".mnMenuActividades").slideUp(200,'linear',function(){
				$(".mnMenuActividadesCapa").fadeOut(150,'linear');
			});
		}
	}
	
	/*----------------------------------------------------------
	MANEJADOR DE EVENTOS QUE PERMITE ASIGNAR UN MANEJADOR A UN 
	TIPO DE EVENTO PARA UN OBJETO.
	
	ATRIBUTOS:
	------------------------------------------------------------
	obj			= OBJETO AL QUE SE LE MONITOREA EL EVENTO
	evType	= NOMBRE DEL EVENTO QUE SE DESEA MONITOREAR
	fn			= FUNCION QUE SE LLAMA AL DISPARARSE EL EVENTO EN EL OBJETO DADO
	
	RETORNO:
	------------------------------------------------------------
	true:		SI SE LOGRAR ASOCIAR EL EVENTO A LA FUNCIÓN
	false:	SI NO SE LOGRAR ASOCIAR EL EVENTO A LA FUNCIÓN
	------------------------------------------------------------*/
	viewContent.addEvent = function(obj, evType, fn)
	{ 
		if (obj.addEventListener)
		{ 
			obj.addEventListener(evType, fn, true);
			return true;
		} else if (obj.attachEvent)
		{ 
			var r = obj.attachEvent("on"+evType, fn); 
			return r;
		} else { 
			return false;
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
	viewContent.get = function(pParam)
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
	viewContent.set = function(pParam)
	{
		eval(pParam);
	}
	return viewContent;
	
})(this, this.document);

$(document).ready(function() {
	viewContent.init();


	/* = menu accordeon
      *******************************************************/
      function menu_js() {     
        if(menu_ul.length > 0){
          menu_ul.hide();
          menu_a.click(function(e) {
            e.preventDefault();
            if(!$(this).hasClass('active')) {
              menu_a.removeClass('active');
              menu_ul.filter(':visible').slideUp('normal');
              $(this).addClass('active').next().stop(true,true).slideDown('normal');
              localStorage['clic']='on';
            } else {
              $(this).removeClass('active');
              $(this).next().stop(true,true).slideUp('normal');
              localStorage['clic']='off';
            }
           
          });

          if (menu_current.length > 0){
           if( menu_current.parent().attr('id') != "menu_mob" ){
            menu_current.parent().show();
            menu_current.parent().parent().addClass('activeLi');
          }else{
            menu_current.addClass('activeLi');
          }
        }else{
         menu_ul_first.show();
         menu_parent_open.addClass('active');     
       }
     }
   }

   var menu_ul = $('.liste-produits'),
   menu_a  = $('.categories-item'),
   menu_current = $('.current'),
   menu_ul_first = $('.liste-categories li:first-child .liste-produits'),
   menu_parent_open = $('.liste-categories li:first-child .categories-item');

   menu_js();
      //@ sourceURL=pen.js
});