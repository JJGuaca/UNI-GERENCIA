/*------------------------------------------------------
	Propietario:	Estrategia y Conocimiento SAS ©2015
  Producto: 		Plantilla integración SCORM 1.2
								Plantilla líneal.
  Información:	Requiere jQuery 1.9.
								Inserta contenido especial en etiquetas
								especiales en el área de contenido.
  Derechos:			Derechos totalmente reservados para su
  							distribución, copia o modificación,
                salvo expresa autorización de:
                Estrategia y Conocimiento SAS.
--------------------------------------------------------*/

window.contentRewrite = (function( window, document, undefined ) {
	var version = '1.0.0',
	contentRewrite = {},
	owner = window,
	vDocument = document,
	docElement = document.documentElement;
	
	/*----------------------------------------------------------
	FUNCIÓN QUE ESCRIBE EN EL CONTENIDO LA NUMERACIÓN DEL
	CONTENIDO ACTUAL, REEPLAZANDO EL CARACTER "#".
	
	ATRIBUTOS: ESTA FUNCIÓN NO POSEE ATRIBUTOS
	------------------------------------------------------------
						
	RETORNO:	ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	contentRewrite.assignNumPack = function()
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
		COREDebuger.outputMessage("[contentRewrite.assignNumPack]=>Se asigna la numeración del contenido en donde se solicita", "consola");
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
	contentRewrite.insertContentTitle = function()
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
		COREDebuger.outputMessage("[contentRewrite.insertContentTitle]=>Se inserta el nombre del contenido en donde se solicita", "consola");
	}
	
	/*----------------------------------------------------------
	FUNCIÓN QUE ESCRIBE EN EL CONTENIDO EL NOMBRE DEL USUARIO
	DONDE SE SOLICITE.
	
	ATRIBUTOS: ESTA FUNCIÓN NO POSEE ATRIBUTOS
	------------------------------------------------------------
						
	RETORNO:	ESTA FUNCIÓN NO RETORNA NINGÚN VALOR.
	------------------------------------------------------------*/
	contentRewrite.insertUserName = function()
	{
		// Se actualiza el nombre del usuario donde se requiera
		$('[class=nombre_persona]').each(function(ind,obj){
			var formato = obj.innerHTML;
			var txtFormato = viewContent.get("nombre_usuario");
			
			if(formato=="capital")
			{
				txtFormato = '<span class="capital">'+viewContent.get("nombre_usuario").substr(0,1)+'</span>';
				txtFormato += viewContent.get("nombre_usuario").substr(1,nombre_usuario.length-1);
			}
			obj.innerHTML = txtFormato;
		});
		COREDebuger.outputMessage("[contentRewrite.insertUserName]=>Se inserta el nombre del usuario en el contenido en donde se solicita", "consola");
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
	contentRewrite.get = function(pParam)
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
	contentRewrite.set = function(pParam)
	{
		eval(pParam);
	}
	return contentRewrite;
	
})(this, this.document);