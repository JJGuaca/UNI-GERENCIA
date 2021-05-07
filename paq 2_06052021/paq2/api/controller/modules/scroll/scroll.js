/*------------------------------------------------------
	Propietario:	Estrategia y Conocimiento SAS ©2015
  Producto: 		Plantilla integración SCORM 1.2
  Información:	Requiere jQuery 1.9.
								Manejador scroll to top en las páginas.
  Derechos:			Derechos totalmente reservados para su
  							distribución, copia o modificación,
                salvo expresa autorización de:
                Estrategia y Conocimiento SAS.
--------------------------------------------------------*/

window.scrollController = (function( window, document, undefined ) {
	var version = '1.0.0',
	estratcoOffsetPageToScroll = 220,					// VARIABLE QUE ALMACENA EL UMBRAL DEL SCROLL PARA MOSTRAR U OCULTAR EL BOTÓN PARA REGRESAR AL INICIO DE LA PÁGINA
	estratcoDurationTransitionsScroll = 500,	// VARIABLE QUE ALMACENA LA VELOCIDAD EN MILISEGUNDOS CON LA CUAL SE REPRODUCIRÁN LAS ANIMACIONES DE APARICIÓN, SCROLL Y OCULTAMIENTO DEL BOTÓN DE SCROLL.
	scrollController = {},
	owner = window,
	vDocument = document,
	docElement = document.documentElement;
	
	scrollController.init = function() {
		/*********************************************************
		[LISTENER EVENTO scroll]
		
		Descripción: 	Monitorea el scroll de la página para mostrar 
									u ocultar el botón para hacer scroll al inicio 
									de la página.
		Autor:				eCognex SAS (Iván Gómez).
		Parámetros:		null.
		Retorna: 			null. 
		*********************************************************/
		jQuery(window).scroll(function() {
			if (jQuery(this).scrollTop() > estratcoOffsetPageToScroll) {
				jQuery('.back-to-top').fadeIn(estratcoDurationTransitionsScroll);
			} else {
				jQuery('.back-to-top').fadeOut(estratcoDurationTransitionsScroll);
			}
		});
		COREDebuger.outputMessage("[scrollController.init]=>Se agregó listener de scroll a la página", "consola");
		
		/*********************************************************
		[LISTENER EVENTO click]
		
		Descripción: 	Agregar un listener al botón de scroll para
									subir la página y ocultar el botón. 
		Autor:				eCognex SAS (Iván Gómez).
		Parámetros:		null.
		Retorna: 			null. 
		*********************************************************/
		jQuery('.back-to-top').click(function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, 500);
			COREDebuger.outputMessage("[scrollController.back-to-top]=>Se activó el regreso al inicio de la página", "consola");
			return false;
		});
		COREDebuger.outputMessage("[scrollController.init]=>Se agregó listener de clic para regresar al top", "consola");
	};
	return scrollController;
	
})(this, this.document);