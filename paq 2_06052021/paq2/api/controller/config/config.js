/*------------------------------------------------------
    Propietario:    Estrategia y Conocimiento SAS ©2015
  Producto:         Plantilla integración SCORM 1.2
  Información:  Requiere JSON.
                                Configuración general del curso.
  Derechos:         Derechos totalmente reservados para su
                            distribución, copia o modificación,
                salvo expresa autorización de:
                Estrategia y Conocimiento SAS.
                --------------------------------------------------------*/

/*  VARIABLE QUE DEFINE EL MODO DE EJECUCIÓN DE LA PLANTILLA:
        varConfigModo = 0 VERSIÓN LIBRE/CD
        varConfigModo = 1 VERSIÓN SCORM 1.2
        varConfigModo = 2 VERSIÓN AUTOMÁTICA */
        var varConfigModo = 2;

        /*  NÚMERO DEL MÓDULO, NECESARIO PARA LMS QUE NO PROVEEN RUTA   */
        var fixedNumModulo = 1;

        /*  IDENTIFICADOR ÚNICO DEL CURSO */
        var keyCourseName = "ESTRATCOCURSOGERPAQP2";

        /*  NOMBRE QUE SE MUESTRA EN EL TÍTULO DE LA PÁGINA PARA EL MÓDULO */
        var nombreModulo = "Módulo 2 ";

        /*  TÍTULO DEL CURSO */
        var tituloCurso = "Programa Gerencia de Proyectos";

        /*  TÍTULO DEL MÓDULO */
        var tituloModulo = "Módulo 2 - Inicio y Planeación del Proyecto";

        /* MOSTRAR TÍTULO DEL CURSO EN MIGA DE PAN */
        var showCourseName = false;

        /* MOSTRAR NÚMERO MÓDULO EN MIGA DE PAN */
        var showModuleNumber = false;

        /* MOSTRAR NOMBRE MÓDULO EN MIGA DE PAN */
        var showModuleName = true;

        /* MOSTRAR TEMA EN: (1=>MIGA DE PAN,2=>ÁREA CONTENIDO,0=>NINGÚN LUGAR) */
        var ubicacionNombreTema = 1;

        /* MOSTRAR SUBTEMA EN: (1=>MIGA DE PAN,2=>ÁREA CONTENIDO,0=>NINGÚN LUGAR) */
        var ubicacionNombreSubTema = 1;

        /*  NOMBRE DEL ESTUDIANTE CUANDO EL LMS NO LO REPORTA */
        var nombre_usuario = "Estudiante";

/*  VARIABLE QUE DETERMINA SI SE DEBE PERMANECER UN TIEMPO MÍNIMO
EN LA PÁGINA PARA AVANZAR AL SIGUIENTE CONTENIDO */
var habilitaTiempo = false;

/*  VARIABLE QUE DETERMINA SI SE DEBE HACER UN CONTEO REGRESIVO O 
PROGRESIVO */
var cuentaRegresiva = false;

/*  VARIABLE QUE DETERMINA SI SE MUESTRA O NO EL RELOJ EN LA PÁGINA */
var muestraReloj = true;

/*  VARIABLE QUE DETERMINA SI SE DEBE REVISAR UN MÍNIMO DE RECURSOS
DETERMINADOS POR PÁGINA PARA AVANZAR AL SIGUIENTE CONTENIDO */
var habilitaConteoRecursos = false;

/*  VARIABLE QUE DETERMINA SI SE MUESTRA O NO EL BOTÓN DE ACTIVIDADES.
    PARA MOSTRAR EL BOTÓN habilitaTiempo Y habilitaConteoRecursos DEBEN
    SER false */
    var vMuestraBotonActividades = false;

    /*  VARIABLE QUE DETERMINA SI SE MUESTRAN O NO LAS FLECHAS DE NAVEGACIÓN */
    var vMuestraFlechas = true;

    /*  DETERMINA SI SE HABILITA O NO LA NAVEGACIÓN AL ÚLTIMO CONTENIDO VISTO */
    var vNavegaUltimoContenido = true;

/*  PARÁMETRO QUE DETERMINA SI EL LA PLANTILLA FORZA LA EJECUCIÓN EN
    VENTANA APARTE PARA EVITAR PROBLEMAS DE VISUALIZACIÓN EN LMS Y DE
    FUNCIONAMIENTO EN DISPOSITIVOS MÓVILES. 
    
    0 = EL CONTENIDO CARGA EN LA MISMA VENTANA
    1 = EL CONTENIDO CARGA EN VENTANA EMERGENTE
    2 = SE PERMITE AL USUARIO DECIDIR DÓNDE SE CARGA EL CONTENIDO */
    var vSmartStandAloneNav = 1;

/*  VARIABLE QUE DETERMINA LA CANTIDAD DE ELEMENTOS QUE DEBEN SER
    EXPLORADOS POR EL USUARIO PARA DETERMINAR SI PUEDE O NO SEGUIR
    CON EL SIGUIENTE CONTENIDO */
    var vPorcentajeLocalCompletado = 0.9;

    /*  VARIABLE QUE DETERMINA EL COLOR DADO A LOS VINCULOS VISITADOS */
    var varColorLinkVisitado = "rgba(142, 131, 131, 1)";
    var ColorLinkVisitadoPass = "rgba(80, 80, 80,1)";

/*  VARIABLE QUE DETERMINA SI SE ACTIVA O NO LA SALIDA DE MENSAJES
DE LOS PROCESOS DE LA PLANTILLA PARA DEPURACIÓN DE CODIGO */
var vDebbug_mode = false;

/*  ARREGLO QUE ALMACENA LA INFORMACIÓN DE TEMAS Y SUBTEMAS */
var numContenidos =0;
/*Unudad de medida del Tiempo[ 1000 = 1segundo]*/
var Segundos='1000';//Unidad  
/*
Tema 0: Presentación.

Tema 1. Antecedentes del Derecho Administrativo 
    1.1 Época de la Monarquía
    1.2 Época de la Revolución Francesa 
    1.3 Dualidad Jurisdiccional 
    1.4 Antecedentes en Colombia

Tema 2. El Concepto del Derecho Administrativo

Tema 3. Características del Derecho Administrativo 

Tema 4. Generalidades del Derecho Administrativo 
    4.1.  Fuentes del Derecho Administrativo 

Tema 5. Principios Fundamentales del Derecho Administrativo
    5.1  Teoría de La Separación de Poderes
    5.2 Principios Generales del Derecho Administrativo 
    5.3 Principios del Derecho Administrativo contenidos en la Ley 1437 de 2011
    */

    var arrInfoTemas = {
    // Tema 0: presentacion[1]Paginas:(1) Total:{1}
    // tema1:{
    //   titulo : "Presentación",
    //   paginas : ["UGPP"],
    //   data : {
    //     UGPP : [++numContenidos,"Presentación."]
    //   }
    // },
  // Tema 1: 
  tema2:{
    titulo : "",
    paginas : [
    "UGPP1_2"
    ,"UGPP1_3"
    ,"UGPP1_4"
    ,"UGPP1_5"
    ,"UGPP1_6"
    
    ,"UGPP1_6_1"
    ,"UGPP1_6_2"
    ,"UGPP1_6_3"
    ,"UGPP1_6_4"
    // ,"UGPP1_6_5"

    ,"UGPP1_7"
    ,"UGPP1_7_1"
    ,"UGPP1_8"
    // ,"UGPP1_9"
    // ,"UGPP1_10"

    // ,"UGPP1_10_1"
    ,"UGPP1_10_2"
    ,"UGPP1_10_3"


    ,"UGPP1_11"
    ,"UGPP1_12"
    ],
    data : {
      UGPP1 : [null,"Titulo"]
      ,UGPP1_2 : [++numContenidos,"Presentación"]
      ,UGPP1_3 : [++numContenidos,"Bienvenida al módulo 2"]
      ,UGPP1_4 : [++numContenidos,"Introducción a la Metodología PMBOK"]
      ,UGPP1_5 : [++numContenidos,"Grupo de Procesos - Inicio"]
      ,UGPP1_6 : [++numContenidos,"Elaboración del Acta de Constitución del Proyecto"]
      
      ,UGPP1_6_1 : [++numContenidos,"Acta de Constitución del Proyecto"]
      ,UGPP1_6_2 : [++numContenidos,"Acta de Constitución del Proyecto"]
      ,UGPP1_6_3 : [++numContenidos,"Diligenciamiento del Acta - Exclusiones"]
      ,UGPP1_6_4 : [++numContenidos,"Diligenciamiento del Acta - Involucrados "]
      // ,UGPP1_6_5 : [++numContenidos,"Metodologia del Procesador"]

      ,UGPP1_7 : [++numContenidos,"Mapa de Interesados e Involucrados"]
      ,UGPP1_7_1 : [++numContenidos,"Identifcar a los Interesados"]

      ,UGPP1_8 : [++numContenidos,"Diagrama de Interesados"]
      //   ,UGPP1_9 : [++numContenidos,"Mapa de Interesados"]
      // ,UGPP1_10 : [++numContenidos,"Metodologia del Procesador"]

      // ,UGPP1_10_1 : [++numContenidos,"Metodologia del Procesador"]
      ,UGPP1_10_2 : [++numContenidos,"Matriz de Interesados"]

      ,UGPP1_10_3 : [++numContenidos,"Metodologia del Procesador"]      
      ,UGPP1_11 : [++numContenidos,"Fin del Grupo de Procesos de Inicio"]
      ,UGPP1_12 : [++numContenidos,"Grupo de Procesos - Planificación"]
    }
  } 
};
/**
 * [pulseUnico permite realizar un unico 
 *         evento de pulse(que objeto palpite)]
 *         {se coloca ante del evento}
 *
 * @param   {[type]}  obj  [id del objeto]
 * @return  {[pulse]}
 */
 function pulseUnico(obj){
  if(localStorage[pre+obj]==null){
    setTimeout(function(){
      $("#"+obj).addClass('pulse');
      localStorage[pre+obj]=pre+obj;
    },3);   
  }
} 
function visto(obj,color){
  $(obj).css('color',color+' !important').attr('style','color:'+color+'!important');
}
function avatar(url,name){
 var avatar= '<figure name="'+name+'">'+
 '<img class="'+name+'" src="../resources/img/'+name+'.png" height="400" width="135" alt="" style="padding-top: 27px;  padding-left: 9px;">'+
 '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="148" height="425" id="'+name+'" align="middle">'+
 '<param name="movie" value="../resources/swf/'+url+'" />'+
 '<param name="quality" value="high" />'+
 '<param name="bgcolor" value="#ffffff" />'+
 '<param name="play" value="true" />'+
 '<param name="loop" value="true" />'+
 '<param name="wmode" value="transparent" />'+
 '<param name="scale" value="showall" />'+
 '<param name="menu" value="true" />'+
 '<param name="devicefont" value="false" />'+
 '<param name="salign" value="" />'+
 '<param name="allowScriptAccess" value="sameDomain" />'+
 '<!--[if !IE]>-->'+
 '<object type="application/x-shockwave-flash" data="../resources/swf/'+url+'" width="148" height="425">'+
 '<param name="movie" value="../resources/swf/'+url+'" />'+
 '<param name="quality" value="high" />'+
 '<param name="bgcolor" value="#ffffff" />'+
 '<param name="play" value="true" />'+
 '<param name="loop" value="true" />'+
 '<param name="wmode" value="transparent" />'+
 '<param name="scale" value="showall" />'+
 '<param name="menu" value="true" />'+
 '<param name="devicefont" value="false" />'+
 '<param name="salign" value="" />'+
 '<param name="allowScriptAccess" value="sameDomain" />'+
 '<!--<![endif]-->'+
 '<a href="http://www.adobe.com/go/getflash">'+
 '<img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="Get Adobe Flash player" />'+
 '</a>'+
 '<!--[if !IE]>-->'+
 '</object>'+
 '<!--<![endif]-->'+
 '</object>'+
 '</figure>';
 return   avatar; 
}
function avatar2(url,name){

 var avatar= '<figure name="'+name+'">'+
 '<img class="'+name+'" src="../resources/img/'+name+'.png" height="135" width="135" alt="" style="padding-top: 27px;  padding-left: 9px;">'+
 '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" height="135" width="135"  id="'+name+'" align="middle">'+
 '<param name="movie" value="../resources/swf/'+url+'" />'+
 '<param name="quality" value="high" />'+
 '<param name="bgcolor" value="#ffffff" />'+
 '<param name="play" value="true" />'+
 '<param name="loop" value="true" />'+
 '<param name="wmode" value="transparent" />'+
 '<param name="scale" value="showall" />'+
 '<param name="menu" value="true" />'+
 '<param name="devicefont" value="false" />'+
 '<param name="salign" value="" />'+
 '<param name="allowScriptAccess" value="sameDomain" />'+
 '<!--[if !IE]>-->'+
 '<object type="application/x-shockwave-flash" data="../resources/swf/'+url+'" height="135" width="135" >'+
 '<param name="movie" value="../resources/swf/'+url+'" />'+
 '<param name="quality" value="high" />'+
 '<param name="bgcolor" value="#ffffff" />'+
 '<param name="play" value="true" />'+
 '<param name="loop" value="true" />'+
 '<param name="wmode" value="transparent" />'+
 '<param name="scale" value="showall" />'+
 '<param name="menu" value="true" />'+
 '<param name="devicefont" value="false" />'+
 '<param name="salign" value="" />'+
 '<param name="allowScriptAccess" value="sameDomain" />'+
 '<!--<![endif]-->'+
 '<a href="http://www.adobe.com/go/getflash">'+
 '<img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="Get Adobe Flash player" />'+
 '</a>'+
 '<!--[if !IE]>-->'+
 '</object>'+
 '<!--<![endif]-->'+
 '</object>'+
 '</figure>';
 return   avatar; 
}
var CargaAvatar =function(){ 
  if($UrlAvatar1=='' || $UrlAvatar2==''){

  }else{
    $(".avatar1").html(avatar($UrlAvatar1,$NombreAvatar1));
    $(".avatar2").html(avatar($UrlAvatar2,$NombreAvatar2));
  }
}
var CargaAvatar2 =function(){ 
  if($UrlAvatar3=='' || $UrlAvatar4==''){

  }else{
    $(".avatar3").html(avatar2($UrlAvatar3,$NombreAvatar3));
    $(".avatar4").html(avatar2($UrlAvatar4,$NombreAvatar4));
  }
}
function hideAvatar(name){
  if(!name){
    name="ok";
  }
  $('#'+name).hide();   
  $('.'+name).show();   
}
function showAvatar(name){
  if(!name){
    name="ok";
  }
  $('.'+name).hide();   
  $('#'+name).show();   
}
var bloquear =function (idclass){
  var p = $(idclass);
  var position = p.position();
  $w= $(idclass).width();
  $h=$(idclass).height();
  try {
   $t=position.top;
   $l=position.left;
 }
 catch(e) {
  $t=0;
  $l=0;
}

$id=idclass;
$id=$id.replace("#",'');

$(idclass)
.after('<code id="'+$id+'V" class="Vcode" style="width:'+$w+'px; height:'+$h+'px; background-color: #fff;position: absolute;top: '+$t+'px;left: '+$l+'px;opacity: 0.5;cursor: not-allowed;z-index: 2;"></code>');
}
var bloquearVelo =function (idclass){
  $(idclass)
  .after('<code  class="Vcode" style="width:100%; height:100%; background-color: #fff;position: absolute;top: 0;left: 0;opacity: 0.9;cursor: not-allowed;z-index: 0;"></code>');
}

var bloquearTransparente =function (idclass){
  $(idclass)
  .after('<code class="Vcode" style="width:100%; height:100%; background-color: transparent;position: absolute;top: 0;left: 0;opacity: 0.5;cursor: not-allowed;z-index: 999;"></code>');
}
var desbloquear =function (idclass){
  $(idclass+'V').remove();
}
/**
 * [fin Evento que realiza una vez todos los eventos finalizan]
 */
 var fin =function(){
   localStorage[pre]='ok';
   console.log(pre+' Terminada');
 }
 var www=function(){
  var i = 1;
  $("#verLinks").click(function(){
    if (i==1){
      $("#links").css("display", "block");
      i=0;
    }else{
      $("#links").css("display", "none");
      i=1;
    }
  });
  $("#links>ul>li>a").click(function(){
    $(this).addClass("revisado");
  });
  $("#links").css("display", "none");
}
jQuery(document).ready(function($) {
  $(".btn").click(function(event) {
    var color=varColorLinkVisitado;
    $(this).css("color",color+" !important").attr("style","color:"+color+"!important");
  });
});
/**
 * [AcordeonnSp permite dinamismo entre acoordeones]
 */
 var AcordeonnSp=function(){
  $('.liste-produits').css('z-index', '2').css('position', 'absolute').css('width','98%');
  var numElem = $('.menu_boutique-area').size(); //numero de elementos 
  // console.log(numElem);

  var ids = [];
  $('.menu_boutique-area').each(function(key, element){
    $id= $(this).attr('id');
  ids.push($id);//todos los ids en un array
 // console.log($id);
});
 // console.log(ids);

 $clic='off';  
 $(".menu_boutique-area").click(function(event) {

    $idAct=$(this).attr('id');//id de acoordeon actual
    // console.log($idAct+'<<-'+ids[0]);

    $idN=$idAct.split("n",2);
    // console.log($idN[1]+'<<idActula');

    setTimeout(function (event) {
      if($clic=='off'){
       $heightV=$('#'+$idAct).find('.liste-produits').height();//tamaño de texto
       // console.log($heightV);
       $clic='on'
     }else{
      $heightV=0;
      $clic='off' 
    }
    // console.log('>>>>'+localStorage['clic']);
    // console.log('++++'+$clic);
    if(localStorage['clic']=='on' && $clic=='off'){
      $("#accordeon"+$idN[1]).css('margin-top', '0px');//tamaño a incrementar
      for (var i = 0; i < numElem; i++) {
        $idN2=ids[i].split("n",2);
        if(ids[i]!=$idAct){
          if($idN[1]<=$idN2[1]){
               $("#"+ids[i]).animate({marginTop: $heightV+'px'},100);//tamaño a incrementar
                $heightV=$('#'+$idAct).find('.liste-produits').height();//tamaño de texto
              }
            }
          }
        }
        if(localStorage['clic']=='on' && $clic=='on'){
          $("#accordeon"+$idN[1]).css('margin-top', '0px');//tamaño a incrementar
        }
        for (var i = 0; i < numElem; i++) {
          $idN2=ids[i].split("n",2);
        // console.log($idN2[1]+'<<id2');
        if(ids[i]!=$idAct){

          if($idN[1]<=$idN2[1]){

           $("#"+ids[i]).animate({marginTop: $heightV+'px'},100);
             // .css('margin-top', $heightV+'px');//tamaño a incrementar
           }

         }
       }

     },400);
  });
}
