/*------------------------------------------------------
	Propietario:	Estrategia y Conocimiento SAS ©2015
  Producto: 		Plantilla integración SCORM 1.2
  Información:	Requiere jQuery 1.9 mínimo.
								Archivo que permite controlar el comportamiento
								de las ventanas modales.
	Derechos:			Derechos totalmente reservados para su
  							distribución, copia o modificación,
                salvo expresa autorización de:
                Estrategia y Conocimiento SAS.
--------------------------------------------------------*/

window.MODModal = (function( window, document, undefined ) {
	var version = '1.0.0',
	MODModal = {},
	owner = window,
	vDocument = document,
	docElement = document.documentElement;
	
	MODModal.init = function()
	{
		COREDebuger.outputMessage("[MODModal.init]=>Se inicializó el manejador de ventanas modales", "consola");
		$(".modalAyuda").fancybox({
			width: 650,
			height: 400,
			padding: 0,
			openEffect: 'elastic',
			openSpeed: 150,
			closeEffect: 'elastic',
			closeSpeed: 150,
			closeClick: true,
			type: 'iframe',
			title: false
		});

		$(".modalNormatividad").fancybox({
			width: 900,
			height: 500,
			padding: 0,
			openEffect: 'elastic',
			openSpeed: 150,
			closeEffect: 'elastic',
			closeSpeed: 150,
			closeClick: true,
			type: 'iframe',
			title: false
		});

		$(".modalActividad").fancybox({
			width: 700,
			height: 300,
			padding: 0,
			openEffect: 'elastic',
			openSpeed: 150,
			closeEffect: 'elastic',
			closeSpeed: 150,
			closeClick: true,
			type: 'iframe',
			helpers: {
				title : {
					type : 'float'
				},
				overlay : {
					speedOut : 0
				}
			}
		});
		$(".modalHtml").fancybox({
			width: 700,
			height: 300,
			padding: 0,
			openEffect: 'elastic',
			openSpeed: 150,
			closeEffect: 'elastic',
			closeSpeed: 150,
			closeClick: true,
			type: 'iframe',
			helpers: {
				title : {
					type : 'float'
				},
				overlay : {
					speedOut : 0
				}
			}
		});
		$(".modalFicha").fancybox({
			width: 740,
			height: 450,
			padding: 0,
			openEffect: 'elastic',
			openSpeed: 150,
			closeEffect: 'elastic',
			closeSpeed: 150,
			closeClick: true,
			type: 'iframe',
			helpers: {
				title : {
					type : 'float'
				},
				overlay : {
					speedOut : 0
				}
			}
		});
		$(".modalSWF").fancybox({
			width: 700,
			height: 300,
			padding: 0,
			openEffect: 'elastic',
			openSpeed: 150,
			closeEffect: 'elastic',
			closeSpeed: 150,
			closeClick: true,
			helpers: {
				title : {
					type : 'float'
				},
				overlay : {
					speedOut : 0
				}
			}
		});
		$(".modalImagen").fancybox({
			width: 700,
			height: 420,
			padding: 0,
			openEffect: 'elastic',
			openSpeed: 150,
			closeEffect: 'elastic',
			closeSpeed: 150,
			closeClick: true,
			helpers: {
				title : {
					type : 'float'
				},
				overlay : {
					speedOut : 0
				}
			}
		});
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
	MODModal.get = function(pParam)
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
	MODModal.set = function(pParam)
	{
		eval(pParam);
	}
	return MODModal;
	
})(this, this.document);