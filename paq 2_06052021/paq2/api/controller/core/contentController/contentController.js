/*------------------------------------------------------
	Propietario:	Estrategia y Conocimiento SAS ©2015
  Producto: 		Plantilla integración SCORM 1.2
  Información:	Requiere jQuery 1.9 mínimo.
								Código para conotrolar los comportamientos 
								del contenido.
	Derechos:			Derechos totalmente reservados para su
  							distribución, copia o modificación,
                salvo expresa autorización de:
                Estrategia y Conocimiento SAS.
--------------------------------------------------------*/

window.COREContentController = (function( window, document, undefined ) {
	var version = '1.0.0',
	vContenidosCompletados = false,		// Determina si el usuario ya completo todos los recursos de la página
	vTiempoCompletado = false,				// Variable que indica si el usuario ha o no permanecido el tiempo requerido en la página
	vEvaluacionesAprobadas = false,							// Define si el usuario aprobó o no las evaluaciones de la página
	vContenidosAprobados = false,								// Define si el usuario completó o no todos los requisitos de la página
	vNotasEvaluacionesContenido = new Array(),	// Almacena las notas de las evaluaciones del contenido
	vHayEvaluacion = false,											// Define si si hay o no evaluaciones en el contenido
	COREContentController = {},
	owner = window,
	vDocument = document,
	docElement = document.documentElement;
	
	
	/*----------------------------------------------------------
	FUNCIÓN QUE LEE LOS PROGRESOS POR CONTENIDO DEL MÓDULO
	ALMACENADOS LOCALMENTE O EN EL LMS.
	
	ATRIBUTOS: ESTA FUNCIÓN NO POSEE ATRIBUTOS
	------------------------------------------------------------
						
	RETORNO:
	------------------------------------------------------------
		ARREGLO[0]:	PORCENTAJE DE AVANCE EN CADA PÁGINA DEL MÓDULO
								SEPARADOS POR ","
		ARREGLO[1]:	VALOR DE APROBADO (1) O NO (0) DEL ESTUDIANTE
								PARA CADA PÁGINA DEL MÓDULO SEPARADOS POR ","
	------------------------------------------------------------*/
	COREContentController.readEstadoContenidos = function()
	{
		var vAvancesModulo = null;
		var vAprobadosModulo = null;
		if(varConfigModo==0)
		{
			// Se lee del almacenamiento local
			vDatosModulo = CORELocalStorage.readData(keyCourseName+CORELocator.get("vArrContenidoActual")[0]);
			vAvancesModulo = (vDatosModulo!=null)?vDatosModulo.avances:"";
			vAprobadosModulo = (vDatosModulo!=null)?vDatosModulo.aprobados:"";
		}
		else
		{
			// Se lee desde el LMS
			var varrTempDatosLeccion = CORELocator.get("lms_datos_leccion").toString().split("Z");
			
			vAvancesModulo = (varrTempDatosLeccion.length<2)?"":varrTempDatosLeccion[0];
			vAprobadosModulo = (varrTempDatosLeccion.length<2)?"":varrTempDatosLeccion[1];
		}
		
		COREDebuger.outputMessage("[COREContentController.readEstadoContenidos]=>Lectura datos guardados: % avances["+vAvancesModulo+"] aprobados["+vAprobadosModulo+"]", "consola");
		
		if(vAvancesModulo=="")
		{
			var arrTempAvances = new Array();
			for(vContAvance=0;vContAvance<numContenidos;vContAvance++)
			{
				arrTempAvances.push("0"); 
			}
			vAvancesModulo = arrTempAvances.join(",");
		}
		
		if(vAprobadosModulo=="")
		{
			var arrTempAprobados = new Array();
			for(vContAprobado=0;vContAprobado<numContenidos;vContAprobado++)
			{
				arrTempAprobados.push("0"); 
			}
			vAprobadosModulo = arrTempAprobados.join(",");
		}
		
		return Array(vAvancesModulo,vAprobadosModulo);
	}

	/*----------------------------------------------------------
	FUNCIÓN QUE EVALÚA SI EL USUARIO APROBÓ EL CONTENIDO ANTERIOR
	Y EL ESTADO DEL CONTENIDO ACTUAL, PARA EVALUAR PRERREQUISITOS.
	
	SI EL USUARIO NO POSEE PERMISOS PARA ESTAR EN EL CONTENIDO
	ACTUAL PORQUE NO HA APROBADO LOS CONTENIDOS ANTERIORES
	(ESTO SOLO APLICA CUANDO habilitaConteoRecursos = true o
	CUANDO habilitaTiempo = true EN config.js) SE REPOSISICIONA 
	EL USUARIO EN EL CONTENIDO PERMITIDO.
	
	ATRIBUTOS: ESTA FUNCIÓN NO POSEE ATRIBUTOS
	------------------------------------------------------------
						
	RETORNO:	ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	COREContentController.checkLocalStatus = function()
	{
		/*	EVALÚA CUMPLIMIENTO DE PRERREQUISITOS */
		var vArrTempDatos = COREContentController.readEstadoContenidos();
		COREDebuger.outputMessage("[COREContentController.checkLocalStatus]=>Estado contenidos: avances["+vArrTempDatos[0]+"] aprobados["+vArrTempDatos[1]+"]", "consola");
		var vArrProgresoModulo = vArrTempDatos[0].split(",");
		var vArrAprobadosModulo = vArrTempDatos[1].split(",");
		
		if(vArrAprobadosModulo[CORELocator.get("vNumContenidoActual")-1]=="1")
		{
			vContenidosCompletados = true;
			vTiempoCompletado = true;
			vEvaluacionesAprobadas = true;
			vContenidosAprobados = true;
			habilitaConteoRecursos = false;
			habilitaTiempo = false;
			COREDebuger.outputMessage("[COREContentController.checkLocalStatus]=>Contenido actual completado y aprobado", "consola");
		}
		else
		{
			if(vArrProgresoModulo[CORELocator.get("vNumContenidoActual")-1]*1>=vPorcentajeLocalCompletado*100)
			{
				vContenidosCompletados = true;
				habilitaConteoRecursos = false;
				COREDebuger.outputMessage("[COREContentController.checkLocalStatus]=>Recursos de la página completados, pero no se han aprobado todos las condiciones", "consola");
			}
			else
				COREDebuger.outputMessage("[COREContentController.checkLocalStatus]=>No se han aprobado las condiciones de la página actual", "consola");
		}
		
		/*	EVALÚA CUMPLIMIENTO DE CONTENIDO ANTERIOR */
		if(CORELocator.get("vNumContenidoActual")==1) return;
		if(vArrAprobadosModulo[CORELocator.get("vNumContenidoActual")-2]=="1") return;
		if(!habilitaConteoRecursos && !habilitaTiempo) return;
		// Se expulsa al usuario de este contenido
		COREDebuger.outputMessage("[COREContentController.checkLocalStatus]=>Usuario no aprobó las condiciones del contenido anterior, reposicionando a: "+CORELocator.get("vNumMaximoContenido"), "consola");
		CORELocator.set("vUserRejected = true");
		CORELocator.reposiciona((CORELocator.get("vNumMaximoContenido")==CORELocator.get("vNumContenidoActual"))?1:CORELocator.get("vNumMaximoContenido"));
	}
	
	/*----------------------------------------------------------
	FUNCIÓN QUE ACTUALIZA EL PROGRESO DEL CONTENIDO ACTUAL EN EL
	TEXTO DE AVANCE.
	
	ATRIBUTOS:
	------------------------------------------------------------
	pTxtAvances: 		STRING CON PORCENTAJE DE AVANCE DEL ESTUDIANTE
									EN CADA PÁGINA, SEPARADOS POR ",".
	pTxtAprobados:	STRING CON VALOR DE APROBADO (1) O NO (0) PARA
									CADA PÁGINA, SEPARADOS POR ",".
	
	RETORNO:
	------------------------------------------------------------
	ARREGLO[0]:	STRING CON PORCENTAJE DE AVANCE ACTUALIZADO DEL 
							ESTUDIANTE EN CADA PÁGINA, SEPARADOS POR ",".
	ARREGLO[1]:	STRING CON VALOR DE APROBADO (1) O NO (0)
							ACTUALIZADO PARA CADA PÁGINA, SEPARADOS POR ",".
	------------------------------------------------------------*/
	COREContentController.updateEstadoContenidos = function(pTxtAvances, pTxtAprobados)
	{
		var vArrAvancesModulo = pTxtAvances.split(",");
		var vArrAprobadosModulo = pTxtAprobados.split(",");
		
		// Se calcula el progreso en la página
		vTempVal = (COREResourceController.get("varNumRecursos")==0)?100:Math.floor((COREResourceController.get("varNumRecursosVistos")*100)/COREResourceController.get("varNumRecursos"));
		vArrAvancesModulo[CORELocator.get("vNumContenidoActual")-1] = (vTempVal>vArrAvancesModulo[CORELocator.get("vNumContenidoActual")-1])?vTempVal:vArrAvancesModulo[CORELocator.get("vNumContenidoActual")-1];
		COREDebuger.outputMessage("[COREContentController.updateEstadoContenidos]=>Update estado contenidos-% avances: Recursos vistos["+COREResourceController.get("varNumRecursosVistos")+"] Total recursos["+COREResourceController.get("varNumRecursos")+"] % actual["+vTempVal+"] % nuevo["+vArrAvancesModulo[CORELocator.get("vNumContenidoActual")-1]+"]", "consola");
		
		// Se calcula el estado de aprobación en la página
		vTempVal = (vContenidosAprobados)?"1":"0";
		vArrAprobadosModulo[CORELocator.get("vNumContenidoActual")-1] = (vArrAprobadosModulo[CORELocator.get("vNumContenidoActual")-1]=="1")?"1":vTempVal;
		
		COREDebuger.outputMessage("[COREContentController.updateEstadoContenidos]=>Update estado contenidos-aprobados: Contenidos locales completados actualmente["+vTempVal+"] Valor almacenado["+vArrAprobadosModulo[CORELocator.get("vNumContenidoActual")-1]+"]", "consola");
		
		return Array(vArrAvancesModulo.join(","),vArrAprobadosModulo.join(","));
	}

	/*----------------------------------------------------------
	FUNCIÓN QUE GUARDA EL AVANCE Y ESTADO DE LOS CONTENIDOS
	ACTUALES DEL MÓDULO.
	
	ATRIBUTOS: ESTA FUNCIÓN NO POSEE ATRIBUTOS
	------------------------------------------------------------
						
	RETORNO:	ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	COREContentController.guardarDatosActuales = function()
	{
		vArrTempDatos = COREContentController.readEstadoContenidos();
		COREDebuger.outputMessage("[COREContentController.guardarDatosActuales]=>Guardar datos-datos actuales: % avances["+vArrTempDatos[0]+"] aprobados["+vArrTempDatos[1]+"]", "consola");
		
		vArrTempDatos = COREContentController.updateEstadoContenidos(vArrTempDatos[0],vArrTempDatos[1]);
		
		if(varConfigModo==0)
		{
			// Almacenamiento local
			CORELocalStorage.storeData(keyCourseName+CORELocator.get("vArrContenidoActual")[0],{contenido:CORELocator.get("vNumMaximoContenido"),avances:vArrTempDatos[0],aprobados:vArrTempDatos[1]});
		}
		else
		{
			// Almacenamiento en LMS
			CORELocator.setDatosLeccion(vArrTempDatos[0]+"Z"+vArrTempDatos[1]);
			doLMSSetValue("cmi.core.lesson_location", CORELocator.get("vNumMaximoContenido")+"");
			doLMSSetValue("cmi.suspend_data", CORELocator.get("lms_datos_leccion")+"" );

			tmpLms_datos_leccion = doLMSGetValue("cmi.suspend_data");
			tmpLms_datos_leccion = (tmpLms_datos_leccion=="")?1:tmpLms_datos_leccion;
			COREDebuger.outputMessage("SCORM-lms_datos_leccion: "+tmpLms_datos_leccion, "consola");
			
			if(CORELocator.get("vNumContenidoActual")==numContenidos)
			{
				doLMSSetValue("cmi.core.score.raw", CORELocator.get("lms_puntaje_estudiante")+"");
			}
		}
		COREDebuger.outputMessage("[COREContentController.guardarDatosActuales]=>Guardar datos-datos actualizados y guardados: % avances["+vArrTempDatos[0]+"] aprobados["+vArrTempDatos[1]+"]", "consola");
	}
	
	/*----------------------------------------------------------
	FUNCIÓN LLAMADA ANTES DE CERRAR LA VENTANA DEL CONTENIDO
	O CAMBIAR LA PÁGINA QUE SE ESTABA VIENDO. LA FUNCIÓN
	ALMACENA EL AVANCE DEL ESTUDIANTE Y EN CASO DE ESTAR EN
	MODO DE NAVEGACIÓN SCORM Y NO EFECTURASE UN POSICIONAMIENTO
	INTERNO, SE REALIZA EL LLAMADO AL PROCESO DE DESCARGA DEL
	CONTENIDO SCORM.
	
	ATRIBUTOS: ESTA FUNCIÓN NO POSEE ATRIBUTOS
	------------------------------------------------------------
						
	RETORNO:	ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	COREContentController.templateUnloadPage = function()
	{
		COREDebuger.outputMessage("[COREContentController.templateUnloadPage]=>Voy a guardar datos para salir. Rejected?:"+((CORELocator.get("vUserRejected"))?"Sí":"No"), "consola");
		if(!CORELocator.get("vUserRejected")) COREContentController.guardarDatosActuales();
		/*	Si se abandona la página por navegación interna
				no se registra la salida en SCORM. */
		if(CORELocator.get("vInternalNavRequest")) return;
		
		COREContentController.checkOpener();
		
		if(varConfigModo == 0) return;
		
		if(typeof unloadPageSCORM == 'function')
			unloadPageSCORM();
	}
	
	/*----------------------------------------------------------
	FUNCIÓN QUE DETERMINA SI SE ESTÁ EN VENTANA APARTE. EN ESE
	CASO RESTABLECE EL ESCENARIO DE PREGUNTA AL USUARIO QUE LE
	PERMITE REABRIR EL CONTENIDO.
	
	ATRIBUTOS: ESTA FUNCIÓN NO POSEE ATRIBUTOS
	------------------------------------------------------------
						
	RETORNO:	ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	COREContentController.checkOpener = function()
	{
		if(!owner.opener) return;
		try
		{
			// Hay comunicación con el index
			owner.opener.CORESmartNav.restoreScenario();
			COREDebuger.outputMessage("[COREContentController.checkOpener]=>Se solicita el restablecimiento del escenario de pregunta a usuario en index", "consola");
		}
		catch(e)
		{
			// No hay comunicación con el index
			COREDebuger.outputMessage("[COREContentController.checkOpener]=>No se puede comunicar con ventana index", "consola");
		}
	}
	
	/*----------------------------------------------------------
	FUNCIÓN QUE DETERMINA QUE EL TIEMPO MÍNIMO REQUERIDO EN LA
	PÁGINA SE HA COMPLETADO.
	
	ATRIBUTOS: ESTA FUNCIÓN NO POSEE ATRIBUTOS
	------------------------------------------------------------
						
	RETORNO:	ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	COREContentController.setTiempoCompletado = function()
	{
		vTiempoCompletado = true;
		viewContent.verificarBtnSiguiente();
	}
	
	/*----------------------------------------------------------
	FUNCIÓN QUE ALMACENA LA NOTA DE LA EVALUACIÓN FINAL.
	
	ATRIBUTOS:
	------------------------------------------------------------
	pNota = STRING CON LA NOTA OBTENIDA
						
	RETORNO:
	------------------------------------------------------------
	STRING "OK" QUE INFORMA QUE LA OPERACIÓN HA FINALIZADO
	
	------------------------------------------------------------*/
	COREContentController.setEvaluacionesAprobadas = function(pNota)
	{
		COREDebuger.outputMessage("[COREContentController.setEvaluacionesAprobadas]=>Evaluaciones del contenido aprobadas con nota promedio:"+pNota, "consola");
		vEvaluacionesAprobadas = true;
		if(CORELocator.get("vNumContenidoActual")==numContenidos)
		{
			if(CORELocator.get("lms_puntaje_estudiante")<pNota) CORELocator.set("lms_puntaje_estudiante = "+pNota);
		}
		viewContent.verificarBtnSiguiente();
		return "OK";
	}
	
	/*----------------------------------------------------------
	FUNCIÓN QUE INICIALIZA EL ARREGLO QUE ALMACENA LAS NOTAS
	OBTENIDAS POR EL ESTUDIANTE EN CADA EVALUACIÓN DEL CONTENIDO.
	
	ATRIBUTOS:
	------------------------------------------------------------
	pNumEvaluaciones 	= NÚMERO CON LA CANTIDAD DE EVALUACIONES
											DEL CONTENIDO.
	pNotaMinima				=	NOTA MÍNIMA PARA APROBAR EL CONTENIDO
						
	RETORNO: ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	COREContentController.initEvaluacionesContenido = function(pNumEvaluaciones,pNotaMinima)
	{
		vHayEvaluacion = (pNumEvaluaciones>0)?true:false;
		viewContent.set("vNotaMinima = "+pNotaMinima);
		for(vContEvaluaciones=0;vContEvaluaciones<pNumEvaluaciones;vContEvaluaciones++)
		{
			if(vNotasEvaluacionesContenido.length<=vContEvaluaciones)
				vNotasEvaluacionesContenido.push(-1);	// Se inicializan con nota -1
		}
		COREDebuger.outputMessage("[COREContentController.initEvaluacionesContenido]=>Se inicializó el arreglo de evaluaciones", "consola");
	}
	
	/*----------------------------------------------------------
	FUNCIÓN QUE ASIGNA EL VALOR OBTENIDO POR UN ESTUDIANTE EN
	UNA EVALUACIÓN.
	
	ATRIBUTOS:
	------------------------------------------------------------
	pNumEvaluacion	= NÚMERO DE LA EVALUACIÓN A ASIGNAR LA NOTA.
	pNotaEvaluacion	=	NOTA OBTENIDA POR EL ESTUDIANTE
						
	RETORNO: ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	COREContentController.setEvaluacionContenido = function(pNumEvaluacion, pNotaEvaluacion)
	{
		if(vNotasEvaluacionesContenido.length<=pNumEvaluacion)
			initEvaluacionesContenido(pNumEvaluacion,viewContent.get("vNotaMinima"));
		vNotasEvaluacionesContenido[pNumEvaluacion] = pNotaEvaluacion;
		COREDebuger.outputMessage("[COREContentController.setEvaluacionContenido]=>Se agregó la nota "+pNotaEvaluacion+" a la evaluación "+pNumEvaluacion, "consola");
		// Evalúa si ya están todas las evaluaciones realizadas
		for(vContEvaluaciones=0;vContEvaluaciones<vNotasEvaluacionesContenido.length;vContEvaluaciones++)
		{
			if(vNotasEvaluacionesContenido[vContEvaluaciones]==-1) return;
		}
		// Se obtiene la nota promedio de las evaluaciones
		vTempNotaPromedio = COREContentController.getNotaEvaluacionesContenido();
		COREDebuger.outputMessage("[COREContentController.setEvaluacionContenido]=>La nota promedio es "+vTempNotaPromedio, "consola");
		// Si la nota promedio supera la nota mínima se dan por aprobadas las evaluaciones
		if(vTempNotaPromedio>=viewContent.get("vNotaMinima")*1)
			COREContentController.setEvaluacionesAprobadas(vTempNotaPromedio);
	}
	
	/*----------------------------------------------------------
	FUNCIÓN QUE RETORNA EL VALOR PROMEDIO DE TODAS LAS 
	EVALUACIONES.
	
	ATRIBUTOS: ESTA FUNCIÓN NO POSEE ATRIBUTOS
	------------------------------------------------------------
						
	RETORNO:
	------------------------------------------------------------
	NÚMERO CON EL PROMEDIO DE LAS NOTAS OBTENIDAS EN LA PÁGINA
	
	------------------------------------------------------------*/
	COREContentController.getNotaEvaluacionesContenido = function()
	{
		if(vNotasEvaluacionesContenido.length == 0) return 0;
		vTempNotaAcumulada = 0;
		for(vContEvaluaciones=0;vContEvaluaciones<vNotasEvaluacionesContenido.length;vContEvaluaciones++)
		{
			vTempNotaAcumulada += (vNotasEvaluacionesContenido[vContEvaluaciones]==-1)?0:vNotasEvaluacionesContenido[vContEvaluaciones];
		}
		return Math.floor(vTempNotaAcumulada/vNotasEvaluacionesContenido.length);
	}
	
	/*----------------------------------------------------------
	FUNCIÓN QUE RETORNA EL NOMBRE DEL USUARIO.
	
	ATRIBUTOS: ESTA FUNCIÓN NO POSEE ATRIBUTOS
	------------------------------------------------------------
						
	RETORNO:
	------------------------------------------------------------
	STRING CON EL NOMBRE DEL USUARIO
	
	------------------------------------------------------------*/
	COREContentController.getNombreUsuario = function()
	{
		return nombre_usuario;
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
	COREContentController.get = function(pParam)
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
	COREContentController.set = function(pParam)
	{
		eval(pParam);
	}
	
	return COREContentController;
	
})(this, this.document);