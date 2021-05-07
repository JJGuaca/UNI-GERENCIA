/*------------------------------------------------------
	Propietario:	Estrategia y Conocimiento SAS ©2015
  Producto: 		Plantilla integración SCORM 1.2
  Información:	Requiere jQuery 1.9 mínimo.
								Archivo que permite visualizar, controlar
								y ocultar las capas flotantes.
	Derechos:			Derechos totalmente reservados para su
  							distribución, copia o modificación,
                salvo expresa autorización de:
                Estrategia y Conocimiento SAS.
--------------------------------------------------------*/

/*
Simple Image Trail script- By JavaScriptKit.com
Visit http://www.javascriptkit.com for this script and more
This notice must stay intact
*/

window.MODCapa = (function( window, document, undefined ) {
	var version = '1.0.0',
	offsetfrommouse=[15,15], //image x,y offsets from cursor position in pixels. Enter 0,0 for no offset
	currentdivwidth = 650,	// maximum div size.
	currentdivheight = 300,	// maximum div size.
	cualNombreCapa=null,
	monitoreoMouseCapa = false,
	capaEstatica = false,
	MODCapa = {},
	owner = window,
	vDocument = document,
	docElement = document.documentElement;
	
	/*********************************************************
	[FUNCIÓN gettrailobj]
	
	Descripción: 	Retorna el objeto estilo del objeto requerido.
	Autor:				eCognex SAS (Iván Gómez).
	Parámetros:
			* cual (String): Nombre del elemento requerido.
	Retorna: 			null. 
	*********************************************************/
	MODCapa.gettrailobj = function(cual)
	{
		if (vDocument.getElementById)
			return vDocument.getElementById(cual).style;
		else if (vDocument.all)
			return vDocument.all.cual.style;
	}
	
	/*********************************************************
	[FUNCIÓN gettrailobjnostyle]
	
	Descripción: 	Retorna el objeto requerido.
	Autor:				eCognex SAS (Iván Gómez).
	Parámetros:
			* cual (String): Nombre del elemento requerido.
	Retorna: 			El objeto requerido. 
	*********************************************************/
	MODCapa.gettrailobjnostyle = function(cual)
	{
		if (vDocument.getElementById)
			return vDocument.getElementById(cual)
		else if (vDocument.all)
			return vDocument.all.cual
	}
	
	/*********************************************************
	[FUNCIÓN truebody]
	
	Descripción: 	Retorna el body según el navegador.
	Autor:				eCognex SAS (Iván Gómez).
	Parámetros:		null.
	Retorna: 			null. 
	*********************************************************/
	MODCapa.truebody = function()
	{
		return (!owner.opera && vDocument.compatMode && vDocument.compatMode!="BackCompat")? vDocument.documentElement : vDocument.body
	}
	
	MODCapa.muestra = function(quien, tLink)
	{
		if(tLink) {
			MODCapa.showtrail(quien,tLink);
		}
		else {
			MODCapa.showtrail(quien,tLink);
		}
	}
	
	MODCapa.showtrail = function(quien, estatico){
		var arrEleIframes = vDocument.getElementsByTagName("iframe");
		// Prevención de múltiples capas
		if(cualNombreCapa!=null && cualNombreCapa!=quien && !capaEstatica)
		{
			MODCapa.gettrailobj(cualNombreCapa).display="none";
			vDocument.onmousemove=null;
			for(unIframe in arrEleIframes)
			{
				var iframeWin = (arrEleIframes[unIframe].contentWindow || arrEleIframes[unIframe].contentDocument)?(arrEleIframes[unIframe].contentWindow || arrEleIframes[unIframe].contentDocument.parentWindow):null;
				if(iframeWin)
				{
					try{iframeWin.vDocument.onmousemove = null;}
					catch(e){	/* Por permisos no es posible */ }
				}
			}
			cualNombreCapa=null;
			monitoreoMouseCapa=false;
		}
		else if(cualNombreCapa!=null)
			return;
		
		capaEstatica = estatico;
		
		var tempWidth =	MODCapa.gettrailobj(quien).width.split("px");
		currentdivwidth =	tempWidth[0]*1;
		
		MODCapa.gettrailobj(quien).left=-currentdivwidth+"px"
		MODCapa.gettrailobj(quien).display="block";
		currentdivheight = MODCapa.gettrailobjnostyle(quien).offsetHeight;
		MODCapa.gettrailobj(quien).display="none";
		
		vDocument.onmousemove=MODCapa.followmouse;
		
		for(unIframe in arrEleIframes)
		{
			var iframeWin = (arrEleIframes[unIframe].contentWindow || arrEleIframes[unIframe].contentDocument)?(arrEleIframes[unIframe].contentWindow || arrEleIframes[unIframe].contentDocument.parentWindow):null;
			if(iframeWin)
			{
				try{iframeWin.vDocument.onmousemove = MODCapa.followmouse;}
				catch(e){	/* Por permisos no es posible */ }
			}
		}
		
		cualNombreCapa = quien;
	}
	
	MODCapa.followmouse = function(e){
		var xcoord=offsetfrommouse[0]
		var ycoord=offsetfrommouse[1]
		
		var scrolly = Math.max(vDocument.body.scrollTop,vDocument.documentElement.scrollTop);
		
		var posX = (typeof e != "undefined")?e.pageX:event.clientX;
		var posY = (typeof e != "undefined")?e.pageY:event.clientY;
		
		var tempDivX = MODCapa.gettrailobj(cualNombreCapa).left.split("px");
		var tempDivY = MODCapa.gettrailobj(cualNombreCapa).top.split("px");
		
		var divX = tempDivX[0]*1;
		var divY = tempDivY[0]*1;
		
		// Revisión de sobreposición de mouse con capa
		if(monitoreoMouseCapa)
		{
			var correccionScroll = (typeof e != "undefined")?0:scrolly;
			if((divX<posX || divX>posX) && ((divY-correccionScroll)<posY || (divY-correccionScroll)>posY)) // Sin conflicto
			{
				MODCapa.cierraLayer((typeof e != "undefined")?e:event);
				return;
			}
			else
				return;
		}
		
		posY = (typeof e != "undefined")?posY-scrolly:posY;
		
		var docwidth=vDocument.all? MODCapa.truebody().scrollLeft+MODCapa.truebody().clientWidth : pageXOffset+owner.innerWidth-15
		var docheight=vDocument.all? Math.min(MODCapa.truebody().scrollHeight, MODCapa.truebody().clientHeight) : Math.min(owner.innerHeight)
		
		// Se revisa horizontalmente
		if(capaEstatica)
		{
			if ((posX + (currentdivwidth/2))>docwidth){
				xcoord = docwidth - currentdivwidth - 2;
			} else if ((posX - (currentdivwidth/2))<0){
				xcoord = 2;
			} else {
				xcoord = posX - (currentdivwidth/2);
			}
			// Se revisa verticalmente
			if ((posY - (currentdivheight/2))<0){
				ycoord = 2;
			} else if ((posY + (currentdivheight/2))>docheight){
				ycoord = docheight - currentdivheight - 2;
			} else {
				ycoord = posY - (currentdivheight/2);
			}
		}
		else
		{
			if ((posX + offsetfrommouse[0] + currentdivwidth)>docwidth){
				xcoord = posX - offsetfrommouse[0] - currentdivwidth;
			} else {
				xcoord = posX + offsetfrommouse[0];
			}
			if (xcoord < 0){
				xcoord = 0;
			}
			// Se revisa verticalmente
			if ((posY - currentdivheight - offsetfrommouse[1])<0){
				ycoord = posY + offsetfrommouse[1];
			} else {
				ycoord = posY - currentdivheight - offsetfrommouse[1];
			}
			if ((ycoord + currentdivheight)>docheight){
				ycoord = docheight - currentdivheight;
			}
		}
	
		if(!$('#'+cualNombreCapa).is(':visible'))
			$('#'+cualNombreCapa).fadeIn(150);
		MODCapa.gettrailobj(cualNombreCapa).left=xcoord+"px"
		MODCapa.gettrailobj(cualNombreCapa).top=ycoord+scrolly+"px"
	}
	
	MODCapa.cierraLayer = function(e) {
		// Se verifica que la capa no esté en conflicto con el mouse
		var posX = (typeof e.pageX != "undefined")?e.pageX:e.clientX;
		var posY = (typeof e.pageY != "undefined")?e.pageY:e.clientY;
		
		var tempDivX = MODCapa.gettrailobj(cualNombreCapa).left.split("px");
		var tempDivY = MODCapa.gettrailobj(cualNombreCapa).top.split("px");
		
		var scrolly = Math.max(vDocument.body.scrollTop,vDocument.documentElement.scrollTop);
		
		var divX = tempDivX[0]*1;
		var divY = tempDivY[0]*1;
		
		if(divX<=posX && (divX+currentdivwidth)>=posX) // Conflicto en x
		{
			var correccionScroll = (typeof e.pageX != "undefined")?0:scrolly;
			if((divY-correccionScroll)<=posY && ((divY-correccionScroll)+currentdivheight)>=posY) // Conflicto en y
			{
				monitoreoMouseCapa = true;
				return;
			}
		}	
		// Se oculta la capa
		MODCapa.cierraLayer2();
	}
	
	MODCapa.cierraLayer2 = function() {
		var arrEleIframes = vDocument.getElementsByTagName("iframe");
		
		// Se oculta la capa
		$('#'+cualNombreCapa).fadeOut(150);
		vDocument.onmousemove=null;
		for(unIframe in arrEleIframes)
		{
			var iframeWin = (arrEleIframes[unIframe].contentWindow || arrEleIframes[unIframe].contentDocument)?(arrEleIframes[unIframe].contentWindow || arrEleIframes[unIframe].contentDocument.parentWindow):null;
			if(iframeWin)
			{
				try{iframeWin.vDocument.onmousemove = null;}
				catch(e){	/* Por permisos no es posible */ }
			}
		}
		cualNombreCapa=null;
		monitoreoMouseCapa=false;
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
	MODCapa.get = function(pParam)
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
	MODCapa.set = function(pParam)
	{
		eval(pParam);
	}
	return MODCapa;
	
})(this, this.document);