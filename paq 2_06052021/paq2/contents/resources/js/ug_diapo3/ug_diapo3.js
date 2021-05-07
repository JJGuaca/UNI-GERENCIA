function avatar1(){
  $('#Juan200').attr('src', '../resources/html/AVATARES/6a_javier_HTML5 Canvas.html');
}

function avatar2(){
  $('#Juan201').attr('src', '../resources/html/AVATARES/6a_santiago_HTML5 Canvas.html');
}

function avatar3(){
  $('#Juan202').attr('src', '../resources/html/AVATARES/6b_javier_HTML5 Canvas.html ');


}

var diapositiva=3;//diapositiva actual 
    var pre="PR_Mod"+fixedNumModulo+"Diapo"+diapositiva;// prefijo de variable[Mod2Diapo10]
    console.log("Carga de : [ "+pre+" ]");
//////////////////////////////////////
    $Tiempo_Avatar1="18"*Segundos;// X segundos primer tiempo $1 
    $Tiempo_Avatar2="5"*Segundos;// X segundos segundo tiempo $2 
    $Tiempo_Avatar3="14"*Segundos;// X segundos segundo tiempo $2 
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
  /* Funcion para activar eventos de acuerdo al tiempo establecido */
  setTimeout(function(){
    PrimerEvento();
    setTimeout(function(){
      SegundoEvento();
      setTimeout(function(){
        TercerEvento();
      },$Tiempo_Avatar3);
    },$Tiempo_Avatar2);
  }, $Tiempo_Avatar1);
  /* Fin de Funcion para activar eventos */

  /////////////////////////////  
  /* Avatar1 
  $NombreAvatar1='javier';     
  $UrlAvatar1='6a_javier.swf';
  $(".avatar1").html(avatar($UrlAvatar1,$NombreAvatar1));
  showAvatar($NombreAvatar1);//estado del avatar
   Fin Avatar1 */
  avatar1();

  /////////////////////////////
  /* Ocultar nube derecha */
  $("#nubeDer6").hide();
}
/**
 * [PrimerEvento evento que ocurre Una vez El primer Avatar habla]
 */
 var PrimerEvento =function(){
  //////////////////////////////  
  desbloquear("#ContenedorUg");//desbloqueo de 
  ///////////////////////////////
  /* Avatar1   
  $NombreAvatar2='santiago';     
  $UrlAvatar2='6a_santiago.swf';
  $(".avatar2").html(avatar($UrlAvatar2,$NombreAvatar2));
  showAvatar($NombreAvatar2);//estado del avatar
  /* Fin Avatar1 */
  avatar2();
  /////////////////////////////
  /* Mostrar nube derecha */
  $("#nubeDer6").show();
}
/**
 * [SegundoEvento evento que ocurre Una vez El segundo Avatar habla]
 */
 var SegundoEvento =function(){
  ///////////////////////////////
  /* modificar texto y tamaño de la nube Izquierda*/
  $("#nubeIzq2>.j").html('<p>Bienvenido Santiago! Te cuento que en el módulo anterior trabajamos sobre las metodologías de Gerencia de Proyectos, y ya conocemos los cinco grupos de procesos que contempla el PMI para ejecutar un proyecto. Así que, te damos paso Santiago.</p>');
  ///////////////////////////////
  /* Avatar3   
  $NombreAvatar1='javier';     
  $UrlAvatar1='6b_javier.swf';
  $(".avatar1").html(avatar($UrlAvatar1,$NombreAvatar1));
  showAvatar($NombreAvatar1);//estado del avatar
  /* Fin Avatar3 */
  avatar3();
}
/**
 * [TercerEvento evento que ocurre Una vez El tercer Avatar habla]
 */
 var TercerEvento =function(){
  $("#s1").click();
}
