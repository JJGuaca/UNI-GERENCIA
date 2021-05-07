function avatar1(){
  $('#Juan200').attr('src','../resources/htmL/avatar_3javier.html'); 
}

var diapositiva=2;//diapositiva actual 
    var pre="PR_Mod"+fixedNumModulo+"Diapo"+diapositiva;// prefijo de variable[Mod2Diapo10]
    console.log("Carga de : [ "+pre+" ]");
//////////////////////////////////////
    $Tiempo_Avatar1="8"*Segundos;// X segundos primer tiempo $1 
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
    bloquear("#boton3");
    bloquear("#boton4");
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
**/
var allTime =function(){
  /////////////////////////////// 
  hideAvatar($NombreAvatar1);//estado del avatar
  hideAvatar($NombreAvatar2);//estado del avatar
  hideAvatar($NombreAvatar3);//estado del avatar
  hideAvatar($NombreAvatar4);//estado del avatar
  
  /////////////////////////////  
  /* Avatar1 */
  //$NombreAvatar1='javier';     
  //$UrlAvatar1='3_javier.swf';
  //$(".avatar1").html(avatar($UrlAvatar1,$NombreAvatar1));
  //showAvatar($NombreAvatar1);//estado del avatar
  avatar1();
  /* Fin Avatar1 */

  /////////////////////////////  
  /* Funcion para activar eventos de acuerdo al tiempo establecido */
  setTimeout(function(){
      PrimerEvento();
      setTimeout(function(){
        SegundoEvento();
      },$Tiempo_Avatar2);
    }, $Tiempo_Avatar1);
  /* Fin de Funcion para activar eventos */

  /////////////////////////////
  /* Funciones para ajustar tamaño del popup, de acuerdo al contenido */
  $("#c1").click(function(){
    $(".pop").attr('id','pop1');
  });
  $("#c2").click(function(){
    $(".pop").attr('id','pop2');
  });
  /* Fin de las Funciones para ajustar tamaño del popup*/
}

/**
 * [PrimerEvento evento que ocurre Una vez El primer Avatar habla]
 */
var PrimerEvento =function(){
//////////////////////////////  
  desbloquear("#ContenedorUg");//desbloqueo de 
/////////////////////////////// 
  desbloquear("#boton3");//desbloqueo del botón
  
  pulseUnico('boton3');//unicopalpitar
  $("#boton3").click(function(event) {
    $(this).removeClass('pulse');
    desbloquear("#boton4");//desbloqueo del botón
    pulseUnico('boton4');//unicopalpitar
    $("#boton4").click(function(event) {
      $(this).removeClass('pulse');
      fin();
    });
  });
}
/**
 * [SegundoEvento evento que ocurre Una vez El segundo Avatar habla]
 */
var SegundoEvento =function(){

}
