/*------------------------------------------------------
	Propietario:	Estrategia y Conocimiento SAS ©2015
  Producto: 		Plantilla integración SCORM 1.2
  Información:	Requiere jQuery 1.9 mínimo.
								Controlador para el almacenamiento y 
								lectura de datos localmente.
	Derechos:			Derechos totalmente reservados para su
  							distribución, copia o modificación,
                salvo expresa autorización de:
                Estrategia y Conocimiento SAS.
--------------------------------------------------------*/

window.CORELocalStorage = (function( window, document, undefined ) {
	var version = '1.0.0',
	CORELocalStorage = {},
	owner = window,
	vDocument = document,
	docElement = document.documentElement;
	
	/*----------------------------------------------------------
	FUNCIÓN QUE LEE UN DATO ALMACENADO LOCALMENTE.
	
	ATRIBUTOS:
	------------------------------------------------------------
	pKey: STRING CON LA LLAVE EMPLEADA PARA ALMACENAR EL DATO
						
	RETORNO:
	------------------------------------------------------------
	OBJETO CON LOS DATOS ALMACENADOS O NULL SI NO HAY INFORMACIÓN
	
	------------------------------------------------------------*/
	CORELocalStorage.readData = function(pKey)
	{
		COREDebuger.outputMessage("[CORELocalStorage.readData]=>Se lee los datos locales con la llave: "+pKey, "consola");
		/*	Si el método no encuentra la llave para leer el dato
				almacenado, la función retorna null */
		return amplify.store(pKey);
	}
	
	/*----------------------------------------------------------
	FUNCIÓN QUE ALMACENA UN OBJETO JSON LOCALMENTE.
	
	ATRIBUTOS:
	------------------------------------------------------------
	pKey: STRING CON LA LLAVE EMPLEADA PARA ALMACENAR EL DATO
	pData: JSON CON LOS DATOS A ALMACENAR
						
	RETORNO: ESTA FUNCIÓN NO RETORNA NINGÚN VALOR
	------------------------------------------------------------*/
	CORELocalStorage.storeData = function(pKey, pData)
	{
		amplify.store(pKey, pData);
		COREDebuger.outputMessage("[CORELocalStorage.readData]=>Se guardan los datos localmente con la llave: "+pKey, "consola");
	}
	return CORELocalStorage;
	
})(this, this.document);