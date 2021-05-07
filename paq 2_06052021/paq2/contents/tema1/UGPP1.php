<!DOCTYPE html>
<html>
<head>
<!--//
 _________________________________________________________
|                                                         |
|  @Propietario :  Estrategia y Conocimiento SAS ©2015    |
|  @Producto    :  Plantilla integración SCORM 1.2        |
|  @Archivo base:  ESTRATCO_SCORM12_CONTENT_v1.dwt v.1.0.0|
|  @Descripción :  Plantilla para integración de cursos   |
|                  con soporte a ejecución en internet,   |
|                  local, CD y desde LMS SCORM 1.2.       |
|  @Navegación  :  Líneal.                                |
|  @Derechos    :  Derechos totalmente reservados para su |
|                  distribución, copia o modificación,    |
|                  salvo expresa autorización de:         |
|                  Estrategia y Conocimiento SAS.         |
|_________________________________________________________|
//-->
<title>Módulo 1</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
<!-- CARGA DE ARCHIVOS DE ESTILOS DEL CURSO -->
<link href="../../api/view/css/core/general.css" rel="stylesheet" type="text/css"/>
<link href="../../api/view/css/views/content/content.css" rel="stylesheet" type="text/css"/>
<link href="../tema1/src/images/web.ico" rel="shortcut icon" type="image/vnd.microsoft.icon" />
<!-- InstanceBeginEditable name="headCSSModules" -->
<link href="../../api/controller/modules/fancybox/jquery.fancybox.css?v=2.1.5" rel="stylesheet" type="text/css" media="screen" />
<link href="../../api/view/css/modules/capa/capa.css" rel="stylesheet" type="text/css" media="screen" />
<link href="../../api/view/css/modules/panels/panels.css" rel="stylesheet" type="text/css" media="screen" />
<link href="../../api/view/css/modules/listSlider/listSlider.css" rel="stylesheet" type="text/css" media="screen" />
<link href="../../api/view/css/modules/scroll/scroll.css" rel="stylesheet" type="text/css" media="screen" />
<link href="../../contents/resources/css/diapo0/ug_diapo1.css" rel="stylesheet" type="text/css" media="screen" />
<link rel="stylesheet" href="../resources/css/diapo0/recursoPuntos.css">
<link rel="stylesheet" href="../resources/css/diapo0/Ajuste.css">
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
<!-- Editable -->
<!-- Color de codigo -->
<link href="../resources/css/diapo0/code.css" rel="stylesheet" type="text/css" />
<script src="../../contents/resources/js/diapo0/code.js"></script>
<!-- fin de Color de codigo -->
<link href="src/jquery-ui.css" rel="stylesheet" type="text/css">
<script src="../../api/controller/views/content/content.js"></script>
<script src="../resources/js/jquery-ui.js"></script>
<script src="src/jquery.contextMenu.js" type="text/javascript"></script>
<link href="src/jquery.contextMenu.css" rel="stylesheet" type="text/css" />
<script src="../../contents/resources/js/diapo0/ug_diapo1.js"></script>
<script src="../../contents/resources/js/diapo0/menu.js"></script>
<script src="../../contents/resources/js/diapo0/ug_diapo11.js"></script>
<script src="../../contents/resources/js/diapo0/config.js"></script>
<!-- fin de editable-->
<script src="src/tinymce/tinymce.min.js"></script>
<script src="src/tinymce/langs/es.js"></script>
<script type="text/javascript">
  tinymce.PluginManager.load('moxiemanager', '../src/tinymce/plugins/contextmenu/plugin.min.js');
  tinymce.init({
    selector: "bdo",
    plugins: [
    "advlist autolink lists link image charmap print preview anchor",
    "searchreplace visualblocks code fullscreen",
    "insertdatetime media table contextmenu paste moxiemanager imagetools"
    ],
    toolbar: "insertfile undo redo | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image",
    autosave_ask_before_unload: false,
    max_height: 200,
    min_height: 160,
    height : 180
  });
</script>
<!--  -->
<script>
  $(document).ready(function() {
    /* EJECUCIÓN DE CÓDIGOS AL CARGARSE EL CONTENIDO */
    // Porcentaje de recursos que deben ser explorados en la página
    vPorcentajeLocalCompletado = 0.8;
    // Inicializa las evaluaciones de esta página
    COREContentController.initEvaluacionesContenido(0 /* Número de evaluaciones */, 0 /* Nota promedio mínima */);
    // Tiempo mínimo que el usuario debe permanecer en el contenido
    viewContent.initTimeRequiered(0 /* Minutos */, 10 /* Segundos */);
    www();
  });
</script>
<!-- InstanceEndEditable -->
<script type="text/javascript">
  window.onbeforeunload = Confirmar;
  function Confirmar()
  { 
   return "Guardo su Proyecto?";
 }
</script>
 <style type="text/css" media="screen">
  code#botoneraV {
    width: 200px !important;
    height: 561px !important;
}
</style>

<!-- InstanceParam name="capa" type="boolean" value="false" -->
</head>
<body>
  <div id="wrap">
   <div id="wrap_content">
    <!-- HEADER DEL CONTENIDO -->
    <div class="COREHeader">
      <h1 class='elegantshadow'style="left: 5%;">|[-_ #virtual cookie  _-]|</h1>
      <img src="../resources/img/logo.png" width="60" alt="Logo UGPP" style="left: 20px;"  class="imgEspecial imgLogoUGPP">
      <div class="CORENavigationMenu">
        <div class="COREToolsContanier">
          <!-- CONTROL DEL TIEMPO EN LA PÁGINA -->
          <div class="CORELocalTimeControl"><span>min</span><br>00<br><span>seg</span><br>00</div>
          <img id="imgTimeControl" src="../../api/view/images/content/header/imgClock.png" alt="Tiempo" class="imgEspecial">
          <!-- ACCESO A LAS ACTIVIDADES DEL MÓDULO -->
          <a href="#" id="enlaceVerActividades" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('imgActivities','','../../api/view/images/content/header/imgActivities_on.png',1)" title="Ver actividades"><img src="../../api/view/images/content/header/imgActivities.png" alt="Actividades" name="imgActivities" class="imgEspecial" id="imgActivities" border="0"></a>
          <!-- BARRA DE PROGRESO LOCAL -->
          <div class="CORELocalProgressBarSeparator"></div>
          <div class="CORELocalProgressBar">
            <div class="CORELocalProgressBarIndicator"></div>
            <div class="CORELocalProgressBarPercentage">0%</div>
          </div>
        </div>
        <img src="../../api/view/images/content/header/imgSep1.jpg" width="13" height="46" class="imgEspecial">
        <!-- ACCESO A LOS TEMAS DEL MÓDULO -->
        <a id="linkMenuTemas" href="#" title="Ver temas" onClick="return false;" onFocus="this.blur();" class="COREMenu">Temas <img src="../../api/view/images/general/vineta-flecha.png" border="0"></a>
        <a id="linkMenuNavegacion" href="#" onClick="return false;" onFocus="this.blur();" title="Ver menú de navegación" class="COREMenu">Menú de Navegación <img src="../../api/view/images/general/vineta-flecha.png" border="0">
        </a>
        <img src="../../api/view/images/content/header/imgSep2.jpg" width="6" height="46" class="imgEspecial">
        <!-- CONTROLES DE NAVEGACIÓN -->
        <div class="CORENavigationMenuControls">
          <!-- HIPERVÍNCULO PARA NAVEGAR A LA ANTERIOR PÁGINA -->
          <a id="linkBack" href="#" onMouseOut="" onMouseOver="" title="Ir a la anterior página" class="COREMenuControls" onFocus="this.blur();" onClick="CORELocator.requestNavigation();"><img src="../../api/view/images/general/vineta-flecha2.png" border="0"> Anterior</a>
          <img id="imgLinkBack" src="../../api/view/images/content/header/imgSep3.png" width="5" height="36" class="imgEspecial COREMenuControlsSep">
          <!-- HIPERVÍNCULO PARA NAVEGAR A LA SIGUIENTE PÁGINA -->
          <a id="linkNext" target="_blanck" href="#" onMouseOut="" onMouseOver="" title="Ir a la siguiente página" class="COREMenuControls" onFocus="this.blur();" onClick="CORELocator.requestNavigation();">Siguiente <img src="../../api/view/images/general/vineta-flecha.png" border="0"></a>
          <img id="imgLinkNext" src="../../api/view/images/content/header/imgSep3.png" width="5" height="36" class="imgEspecial COREMenuControlsSep">
          <!-- POSICIÓN DEL CONTENIDO ACTUAL EN EL MÓDULO -->
          <span id="txtPaginaActual">00 de 00</span>
        </div>
        <img src="../../api/view/images/content/header/imgSep4.png" width="4" height="47" class="imgEspecial">
      </div>
      <div class="COREMigaPan">
        <!-- NOMBRE DEL CURSO/PROGRAMA -->
        <span id="txtNombreCurso">Programa</span>
        <!-- NÚMERO DEL MÓDULO -->
        <img src="../../api/view/images/general/vineta-flecha.png">
        <span id="txtNumModulo"> Módulo X</span>
        <!-- NOMBRE DEL MÓDULO -->
        <span class="txtPepaNombreModulo"> &#8226; </span>
        <span id="txtNombreModulo">Nombre módulo </span>
        <!-- NOMBRE DEL TEMA -->
        <img src="../../api/view/images/general/vineta-flecha.png">
        <span id="txtNombreTema"> Nombre tema</span>
        <form action="Data/crea.php?ok=1" target="_blank" method="get" accept-charset="utf-8">
          <input type="number" min='1' maxlength="99" name="diapo" id="diapo" value="0" placeholder="0" required>
          <button  type="submit" id="b1"  segSCORM="si" onclick="crea();" >Crea Diapositiva
            <img src="../resources/img/play.png" alt="">
          </button>
          <input type="hidden" name="ok" value="1">
        </form>
      </div>
    </div>
    <div class="CORESpaceUnderHeader"></div>
    <!-- CONTENIDO DE LA PÁGINA -->
    <div class="COREContenido">
      <div class="COREInnerContenido">
        <section class="principal">
        <img id="cuadricula" src="src/images/k5sioga.png"  style="display: none" alt="">
          <!-- TemplateBeginEditable name="editContenido" -->
          <!-- creacion de estructura -->      
          <!-- <button  type="button" id="b2" onclick="crea(2)">borra</button> -->
          <div id="crea"></div>
          <!-- fin creacion de estructura -->

          <section class="seccion_principal">
           <style type="text/css" media="screen" id="Style"></style>
           <script id="Script"></script>
           <div id="ug_boton1"></div>
           <!-- cacateristicas  -->
           <section id="caracteristicas"class="flota"></section>
           <!-- nuevo codigo -->
           <section id="NuevoCodigo"class="flota"></section>
           <!--  -->
           <article id="botonera">
            <button id="Tool"  class="Tool" type="button">Ver Codigo</button>
            <button id="refresh"  class="Tool" type="button">Refrescar Codigo</button>
            <button id="NuevoBoton"  class="Tool" type="button">Nuevo Codigo</button>
            <!-- <button id="ModificarBoton"  class="Tool" type="button">Modificar Codigo</button> -->
            <div id="Botones"></div>
          </article>
          <section id="menudemuenu">
            <button id="title"> ::MENU:: </button>
            <div class="radio-group">
              <input type="radio" id="radioDM" class="menu_radio EstadoM" name="type" value="0" checked>
              <label for="radioDM"><span>NO</span></label>
              <input type="radio" id="radioHM" class="menu_radio " name="type" value="1" >
              <label for="radioHM"><span>SI</span></label>
              <div class="radio-switch"></div>
            </div>
            <button id="edita"> :: Editor de :: ::Texto:: </button><br><br>
            <button id="title" class="titleC"> ::Cuadricula:: </button>
            <div class="radio-group cuadriG">
              <input type="radio" id="radioDC" class="menu_radio EstadoC" name="type2" value="0" checked>
              <label for="radioDC"><span>NO</span></label>
              <input type="radio" id="radioHC" class="menu_radio " name="type2" value="1" >
              <label for="radioHC"><span>SI</span></label>
              <div class="radio-switchC"></div>
            </div>
          </section>
          <div id="AuxData"></div>
          <div id="temp"></div>
        </section>
        <!-- pasar los archivos para guardarlos -->
        <div id="guardar"></div>
        <!-- fin pasar los archivos para guardarlos -->
        <!-- editor de texto -->
        <section id="editor" class="flota">
          <div id="ciereX">X</div>
          <bdo></bdo>  
          <!-- <button id="guardarHT" onclick="guardarHT()" >Guardar</button> -->
        </section>
        <!--  -->
        <!--  -->




        <!--  -->


        <!-- TemplateEndEditable -->
      </section>
    </div>
  </div>
  <!-- FOOTER DE LA PÁGINA -->
  <div class="COREFooter"></div>
</div>
</div>
<!-- HIPERVÍNCULO PARA REGRESAR AL INICIO DE LA PÁGINA -->
<a href="#" class="back-to-top">
  <img src="../../api/view/images/general/subir.png" alt="Subir" border="0"/>
</a>
<!-- MENÚ DE ACTIVIDADES DESPLEGABLE DEL HEADER -->
<div class="mnMenuActividades mnHide">
  <div class="tituloMenuActividades" title="Cerrar menú" onClick="viewContent.showMenuActividades(false,null); return false;">Menú de actividades <span>x</span></div>
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
<!-- MENÚ DE NAVEGACIÓN DESPLEGABLE DEL HEADER -->
<div class="mnMenuNavegacion mnHide">
  <div class="tituloMenuNavegacion" title="Cerrar menú" onClick="viewContent.showMenuNavegacion(false,null); return false;">Menú de navegación <span>x</span></div>
  <div class="contentMenuNavegacion">
    <div class="innerMenuNavegacion">
      <ul>
       <!-- InstanceBeginEditable name="editMenuNavegacion" -->
       <li><a href="../tools/bibliografia/index.html" title="Bibliografía" onFocus="this.blur();" class="modalAyuda">Bibliografía</a></li>
       <li><a href="../tools/glosario/index.html" title="Glosario" onFocus="this.blur();" class="modalAyuda">Glosario</a></li>
       <li><a href="../tools/faq/index.html" title="Preguntas frecuentes" onFocus="this.blur();" class="modalAyuda">Preguntas frecuentes</a></li>
       <li><a href="../tools/normatividad/index.html" title="Normatividad" onFocus="this.blur();" class="modalAyuda">Normatividad</a></li>
       <li><a href="../tools/lecturas/index.html" title="Lecturas" onFocus="this.blur();" class="modalAyuda">Lecturas</a></li>
       <li><a href="../tools/medios/index.html" title="Medios" onFocus="this.blur();" class="modalAyuda">Medios</a></li>
       <li><a href="../tools/guia/index.html" title="Guía de navegación" onFocus="this.blur();" class="modalAyuda">Guía de navegación</a></li>
       <!-- InstanceEndEditable -->
     </ul>
   </div>
 </div>
</div>
<div class="mnMenuNavegacionCapa" onMouseOver="viewContent.showMenuNavegacion(false,null);"></div>
<!-- MENÚ DE TEMAS DESPLEGABLE DEL HEADER -->
<div class="mnMenuTemas mnHide">
  <div class="tituloMenuTemas" title="Cerrar menú" onClick="viewContent.showMenuTemas(false,null); return false;">Temas <span>x</span></div>
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
</html>