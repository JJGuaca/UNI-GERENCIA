<?php
// var_dump($_REQUEST);



if(isset($_REQUEST['CSSP'])){
  $Cssp=$_REQUEST['CSSP'];
  $Cssp=str_replace(',',chr(10).'',$Cssp);  
  $Cssp=str_replace('"','',$Cssp);  
  $Cssp=str_replace('{','{'.chr(10).'  ',$Cssp);  
  $Cssp=str_replace('}','}'.chr(10),$Cssp);  
  $Cssp=str_replace(';',';'.chr(10).'  ',$Cssp);  
  $Cssp=''.$Cssp;
  creaCSSp($Cssp,$_REQUEST['diapo']);
}
if(isset($_REQUEST['CSS'])){
  $Cssp=$_REQUEST['CSS'];
  creaCSS($Cssp,$_REQUEST['diapo']);
}
if(isset($_REQUEST['JS'])){
  $JSp=$_REQUEST['JS'];
  creaJS($JSp,$_REQUEST['diapo']);
}
if(isset($_REQUEST['HTML'])){
  $HTMLp=$_REQUEST['HTML2'].$_REQUEST['HTML'].$_REQUEST['HTML3'];

  creaHTML($HTMLp,$_REQUEST['diapo']);
}

function creaCSSp($code,$diapo)
{
  $fp = fopen('../../resources/css/ug_diapo'.$diapo.'/ug_diapo'.$diapo.'_0.css', 'w');
  fwrite($fp, $code);
  fclose($fp);
}
function creaCSS($code,$diapo)
{
  $fp = fopen('../../resources/css/ug_diapo'.$diapo.'/ug_diapo'.$diapo.'.css', 'w');
  fwrite($fp, $code);
  fclose($fp);
}
function creaJS($code,$diapo)
{
  $fp = fopen('../../resources/js/ug_diapo'.$diapo.'/ug_diapo'.$diapo.'.js', 'w');
  fwrite($fp, 'var diapositiva='.$diapo.';//diapositiva actual 
    var pre="PR_Mod"+fixedNumModulo+"Diapo"+diapositiva;// prefijo de variable[Mod2Diapo10]
    console.log("Carga de : [ "+pre+" ]");
//////////////////////////////////////
    $Tiempo_Avatar1="0"*Segundos;// X segundos primer tiempo $1 
    $Tiempo_Avatar2="0"*Segundos;// X segundos segundo tiempo $2 
    $Tiempo_Avatar3="0"*Segundos;// X segundos segundo tiempo $2 
    $Tiempo_Avatar4="0"*Segundos;// X segundos segundo tiempo $2 
    $NombreAvatar1="";//Nombre del primer avatar[SOLO SE MANEJAN MINUSCULAS]
    $NombreAvatar2="";//Nombre del segundo avatar
    $NombreAvatar3="";//Nombre del segundo avatar
    $NombreAvatar4="";//Nombre del segundo avatar
    $UrlAvatar1="";//Nombre de archivo de Primer avatar
    $UrlAvatar2="";//Nombre de archivo de Primer avatar
    $UrlAvatar3="";//Nombre de archivo de Primer avatar
    $UrlAvatar4="";//Nombre de archivo de Primer avatar
/////////////////////////////////////
//-------------------------------------------------------------------------------
    // hideAvatar($NombreAvatar1);//oculta el avatar(swf) y muestra una imagenen
   //showAvatar($NombreAvatar1);//oculta la imagne y muestra el swf
//-------------------------------------------------------------------------------
    jQuery(document).ready(function($) {
      CargaAvatar();
      CargaAvatar2();
      allTime(); 
      if (localStorage[pre]==null) {
        bloquear("#ContenedorUg");
        setTimeout(function(){
          PrimerEvento();
          setTimeout(function(){
            SegundoEvento();
          },$Tiempo_Avatar2);
}, $Tiempo_Avatar1);
}else{
 visto(".btn",varColorLinkVisitado);
 $(".btn").click(function(event) {
  var color=ColorLinkVisitadoPass;
  $(this).css("color",color+" !important").attr("style","color:"+color+"!important");
});
}
});
/**
 * [allTime elementos que siempre apareceran sin importar si es por primera vez o no]
 */
var allTime =function(){
/////////////////////////////// 
  hideAvatar($NombreAvatar1);//estado del avatar
  hideAvatar($NombreAvatar2);//estado del avatar
  hideAvatar($NombreAvatar3);//estado del avatar
  hideAvatar($NombreAvatar4);//estado del avatar
/////////////////////////////  
  ');
fwrite($fp, $code);
fwrite($fp, '
/////////////////////////////
}
/**
 * [PrimerEvento evento que ocurre Una vez El primer Avatar habla]
 */
var PrimerEvento =function(){
//////////////////////////////  
  desbloquear("#ContenedorUg");//desbloqueo de 
/////////////////////////////// 
}
/**
 * [SegundoEvento evento que ocurre Una vez El segundo Avatar habla]
 */
var SegundoEvento =function(){

}
');
fclose($fp);
}


function creaHTML($code,$diapo)
{
  if($diapo=='1'){
  $fp = fopen('../../tema1/UGPP.html', 'w');
  }else{
   $fp = fopen('../../tema2/UGPP1_'.$diapo.'.html', 'w'); 
  }  
   fwrite($fp, '<!DOCTYPE html>
<html>
<head>
<!--//
      _________________________________________________________
      |                                                         |
      |  @Propietario :  Estrategia y Conocimiento SAS ??2015    |
      |  @Producto    :  Plantilla integraci??n SCORM 1.2        |
      |  @Archivo base:  ESTRATCO_SCORM12_CONTENT_v1.dwt v.1.0.0|
      |  @Descripci??n :  Plantilla para integraci??n de cursos   |
      |                  con soporte a ejecuci??n en internet,   |
      |                  local, CD y desde LMS SCORM 1.2.       |
      |  @Navegaci??n  :  L??neal.                                |
      |  @Derechos    :  Derechos totalmente reservados para su |
      |                  distribuci??n, copia o modificaci??n,    |
      |                  salvo expresa autorizaci??n de:         |
      |                  Estrategia y Conocimiento SAS.         |
      |_________________________________________________________|
//-->
<title>M??dulo 1</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
<!-- CARGA DE ARCHIVOS DE ESTILOS DEL CURSO -->
<link href="../../../favicon.ico" rel="shortcut icon" type="image/vnd.microsoft.icon" />
<link href="../../api/view/css/core/general.css" rel="stylesheet" type="text/css"/>
<link href="../../api/view/css/views/content/content.css" rel="stylesheet" type="text/css"/>
<!-- InstanceBeginEditable name="headCSSModules" -->
<link href="../../api/controller/modules/fancybox/jquery.fancybox.css?v=2.1.5" rel="stylesheet" type="text/css" media="screen" />
<link href="../../api/view/css/modules/capa/capa.css" rel="stylesheet" type="text/css" media="screen" />
<link href="../../api/view/css/modules/panels/panels.css" rel="stylesheet" type="text/css" media="screen" />
<link href="../../api/view/css/modules/listSlider/listSlider.css" rel="stylesheet" type="text/css" media="screen" />
<link href="../../api/view/css/modules/scroll/scroll.css" rel="stylesheet" type="text/css" media="screen" />
<link href="../../contents/resources/css/ug_diapo'.$diapo.'/ug_diapo'.$diapo.'.css" rel="stylesheet" type="text/css" media="screen" />
<link href="../../contents/resources/css/ug_diapo'.$diapo.'/ug_diapo'.$diapo.'_0.css" rel="stylesheet" type="text/css" media="screen" />
<link rel="stylesheet" href="../../api/view/css/core/ug_general/reajuste.css">
<!-- CARGA DE COMPORTAMIENTOS DEL CURSO -->
<script src="../../api/controller/core/jquery/jquery-1.10.2.min.js"></script>
<script src="../../api/controller/core/json/json2.js"></script>
<script src="../../api/controller/core/debuger/debuger.js"></script>
<script src="../../api/controller/config/config.js"></script>
<script src="../../api/controller/core/browserFixes/browserFixes.js"></script>
<script src="../../api/controller/core/localStorage/localStorage.js"></script>
<script src="../../api/controller/modules/data_store/amplify.store.min.js"></script>
<script src="../../api/controller/modules/countDown/countDown.js"></script>
<script src="../../api/controller/modules/scroll/scroll.js"></script>
<script src="../../api/controller/core/resourceController/resourceController.js"></script>
<script src="../../api/controller/core/contentController/contentController.js"></script>
<script src="../../api/controller/core/locator/locator.js"></script>
<script src="../../api/controller/core/scorm/APIWrapper12.js"></script>
<script src="../../api/controller/core/scorm/SCOFunctions12.js"></script>
<script src="../../api/controller/core/topicsLoader/topicsLoader.js"></script>
<!-- InstanceBeginEditable name="headJSModules" -->
<script src="../../api/controller/modules/fancybox/jquery.fancybox.js?v=2.1.5"></script>
<script src="../../api/controller/modules/preload_images/preload_images.js"></script>
<script src="../../api/controller/modules/scroll/scroll.js"></script>
<script src="../../api/controller/modules/capa/capa.js"></script>
<script src="../../api/controller/modules/panels/panels.js"></script>
<script src="../../api/controller/modules/listSlider/listSlider.js"></script>
<script src="../../api/controller/modules/modal/modal.js"></script>
<script src="../../api/controller/modules/contentRewriter/contentRewriter.js"></script>
<!-- InstanceEndEditable -->
<script src="../../api/controller/views/content/content.js"></script>
<script src="../../contents/resources/js/ug_diapo'.$diapo.'/ug_diapo'.$diapo.'.js"></script>
<!-- InstanceBeginEditable name="head" -->
<script>
    $(document).ready(function() {
      /* EJECUCI??N DE C??DIGOS AL CARGARSE EL CONTENIDO */
// Porcentaje de recursos que deben ser explorados en la p??gina
      vPorcentajeLocalCompletado = 0.8;
// Inicializa las evaluaciones de esta p??gina
      COREContentController.initEvaluacionesContenido(0 /* N??mero de evaluaciones */, 0 /* Nota promedio m??nima */);
    // Tiempo m??nimo que el usuario debe permanecer en el contenido
          viewContent.initTimeRequiered(0 /* Minutos */, 10 /* Segundos */);
        });
</script>
<!-- InstanceEndEditable -->
<!-- InstanceParam name="capa" type="boolean" value="false" -->
</head>

<body>
  <div id="wrap">
   <div id="wrap_content">
    <!-- HEADER DEL CONTENIDO -->
    <div class="COREHeader">
      <img src="../../api/view/images/content/header/logo-UGPP.jpg" alt="Logo UGPP" class="imgEspecial imgLogoUGPP">
      <div class="CORENavigationMenu">
        <div class="COREToolsContanier">
          <!-- CONTROL DEL TIEMPO EN LA P??GINA -->
          <div class="CORELocalTimeControl"><span>min</span><br>00<br><span>seg</span><br>00</div>
          <img id="imgTimeControl" src="../../api/view/images/content/header/imgClock.png" alt="Tiempo" class="imgEspecial">
          <!-- ACCESO A LAS ACTIVIDADES DEL M??DULO -->
          <a href="#" id="enlaceVerActividades" onMouseOut="MM_swapImgRestore()" 
          onMouseOver="MM_swapImage(

            ');
fwrite($fp, " 'imgActivities','','../../api/view/images/content/header/imgActivities_on.png',1) ");

fwrite($fp, '"
  title="Ver actividades"><img src="../../api/view/images/content/header/imgActivities.png" alt="Actividades" name="imgActivities" class="imgEspecial" id="imgActivities" border="0"></a>
  <!-- BARRA DE PROGRESO LOCAL -->
  <div class="CORELocalProgressBarSeparator"></div>
  <div class="CORELocalProgressBar">
    <div class="CORELocalProgressBarIndicator"></div>
    <div class="CORELocalProgressBarPercentage">0%</div>
  </div>
</div>
<img src="../../api/view/images/content/header/imgSep1.jpg" width="13" height="46" class="imgEspecial">
<!-- ACCESO A LOS TEMAS DEL M??DULO -->
<a id="linkMenuTemas" href="#" title="Ver temas" onClick="return false;" onFocus="this.blur();" class="COREMenu">Temas <img src="../../api/view/images/general/vineta-flecha.png" border="0"></a>
<a id="linkMenuNavegacion" href="#" onClick="return false;" onFocus="this.blur();" title="Ver men?? de navegaci??n" class="COREMenu">Men?? de Navegaci??n <img src="../../api/view/images/general/vineta-flecha.png" border="0">
</a>
<img src="../../api/view/images/content/header/imgSep2.jpg" width="6" height="46" class="imgEspecial">
<!-- CONTROLES DE NAVEGACI??N -->
<div class="CORENavigationMenuControls">
  <!-- HIPERV??NCULO PARA NAVEGAR A LA ANTERIOR P??GINA -->
  <a id="linkBack" href="#" onMouseOut="" onMouseOver="" title="Ir a la anterior p??gina" class="COREMenuControls" onFocus="this.blur();" onClick="CORELocator.requestNavigation();"><img src="../../api/view/images/general/vineta-flecha2.png" border="0"> Anterior</a>
  <img id="imgLinkBack" src="../../api/view/images/content/header/imgSep3.png" width="5" height="36" class="imgEspecial COREMenuControlsSep">
  <!-- HIPERV??NCULO PARA NAVEGAR A LA SIGUIENTE P??GINA -->
  <a id="linkNext" href="#" onMouseOut="" onMouseOver="" title="Ir a la siguiente p??gina" class="COREMenuControls" onFocus="this.blur();" onClick="CORELocator.requestNavigation();">Siguiente <img src="../../api/view/images/general/vineta-flecha.png" border="0"></a>
  <img id="imgLinkNext" src="../../api/view/images/content/header/imgSep3.png" width="5" height="36" class="imgEspecial COREMenuControlsSep">
  <!-- POSICI??N DEL CONTENIDO ACTUAL EN EL M??DULO -->
  <span id="txtPaginaActual">00 de 00</span>
</div>
<img src="../../api/view/images/content/header/imgSep4.png" width="4" height="47" class="imgEspecial">
</div>
<div class="COREMigaPan">
  <!-- NOMBRE DEL CURSO/PROGRAMA -->
  <span id="txtNombreCurso">Programa</span>
  <!-- N??MERO DEL M??DULO -->
  <img src="../../api/view/images/general/vineta-flecha.png">
  <span id="txtNumModulo"> M??dulo X</span>
  <!-- NOMBRE DEL M??DULO -->
  <span class="txtPepaNombreModulo"> &#8226; </span>
  <span id="txtNombreModulo">Nombre m??dulo </span>
  <!-- NOMBRE DEL TEMA -->
  <img src="../../api/view/images/general/vineta-flecha.png">
  <span id="txtNombreTema"> Nombre tema</span>
</div>
</div>
<div class="CORESpaceUnderHeader"></div>
<!-- CONTENIDO DE LA P??GINA -->
<div class="COREContenido">
  <div class="COREInnerContenido">
    <section class="principal">
      <!-- TemplateBeginEditable name="editContenido" -->');
fwrite($fp, $code);
fwrite($fp, '
  <!-- TemplateEndEditable -->
</section>
</div>
</div>
<!-- FOOTER DE LA P??GINA -->
<div class="COREFooter"></div>
</div>
</div>
<!-- HIPERV??NCULO PARA REGRESAR AL INICIO DE LA P??GINA -->
<a href="#" class="back-to-top">
  <img src="../../api/view/images/general/subir.png" alt="Subir" border="0"/>
</a>
<!-- MEN?? DE ACTIVIDADES DESPLEGABLE DEL HEADER -->
<div class="mnMenuActividades mnHide">
  <div class="tituloMenuActividades" title="Cerrar men??" onClick="viewContent.showMenuActividades(false,null); return false;">Men?? de actividades <span>x</span></div>
  <div class="contentMenuActividades">
    <div class="innerMenuActividades">
      <ul>
        <!-- InstanceBeginEditable name="editMenuActividades" -->
        <li><a href="#" title="Actividad 1" onFocus="this.blur();" class="modalActividad">Ver la actividad 1</a></li>
        <li><a href="#" title="Actividad 2" onFocus="this.blur();" class="modalActividad">Ver la actividad 2</a></li>
        <li><a href="#" title="Actividad 3" onFocus="this.blur();" class="modalActividad">Ver la actividad 3</a></li>
        <li><a href="#" title="Actividad 4" onFocus="this.blur();" class="modalActividad">Ver la actividad 4</a></li>
        <li><a href="#" title="Actividad 5" onFocus="this.blur();" class="modalActividad">Ver la actividad 5</a></li>
        <li><a href="#" title="Actividad 6" onFocus="this.blur();" class="modalActividad">Ver la actividad 6</a></li>
        <li><a href="#" title="Actividad 7" onFocus="this.blur();" class="modalActividad">Ver la actividad 7</a></li>
        <li><a href="#" title="Actividad 8" onFocus="this.blur();" class="modalActividad">Ver la actividad 8</a></li>
        <!-- InstanceEndEditable -->
      </ul>
    </div>
  </div>
</div>
<div class="mnMenuActividadesCapa" onMouseOver="viewContent.showMenuActividades(false,null);"></div>
<!-- MEN?? DE NAVEGACI??N DESPLEGABLE DEL HEADER -->
<div class="mnMenuNavegacion mnHide">
  <div class="tituloMenuNavegacion" title="Cerrar men??" onClick="viewContent.showMenuNavegacion(false,null); return false;">Men?? de navegaci??n <span>x</span></div>
  <div class="contentMenuNavegacion">
    <div class="innerMenuNavegacion">
      <ul>
       <!-- InstanceBeginEditable name="editMenuNavegacion" -->
       <li><a href="../tools/bibliografia/index.html" title="Bibliograf??a" onFocus="this.blur();" class="modalAyuda">Bibliograf??a</a></li>
       <li><a href="../tools/glosario/index.html" title="Glosario" onFocus="this.blur();" class="modalAyuda">Glosario</a></li>
       <li><a href="../tools/faq/index.html" title="Preguntas frecuentes" onFocus="this.blur();" class="modalAyuda">Preguntas frecuentes</a></li>
       <li><a href="../tools/normatividad/index.html" title="Normatividad" onFocus="this.blur();" class="modalAyuda">Normatividad</a></li>
       <li><a href="../tools/lecturas/index.html" title="Lecturas" onFocus="this.blur();" class="modalAyuda">Lecturas</a></li>
       <li><a href="../tools/medios/index.html" title="Medios" onFocus="this.blur();" class="modalAyuda">Medios</a></li>
       <li><a href="../tools/guia/index.html" title="Gu??a de navegaci??n" onFocus="this.blur();" class="modalAyuda">Gu??a de navegaci??n</a></li>
       <!-- InstanceEndEditable -->
     </ul>
   </div>
 </div>
</div>
<div class="mnMenuNavegacionCapa" onMouseOver="viewContent.showMenuNavegacion(false,null);"></div>
<!-- MEN?? DE TEMAS DESPLEGABLE DEL HEADER -->
<div class="mnMenuTemas mnHide">
  <div class="tituloMenuTemas" title="Cerrar men??" onClick="viewContent.showMenuTemas(false,null); return false;">Temas <span>x</span></div>
  <div class="contentMenuTemas">
    <div class="innerMenuTemas">
      <ul>
        <li class="liTituloModulo"></li>
      </ul>
    </div>
  </div>
</div>
<div class="mnMenuTemasCapa" onMouseOver="viewContent.showMenuTemas(false,null);"></div>
</body>
</html>');
fclose($fp);
}
?>