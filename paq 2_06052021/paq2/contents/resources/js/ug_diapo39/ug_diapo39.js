var diapositiva=39;//diapositiva actual 
    var pre="PR_Mod"+fixedNumModulo+"Diapo"+diapositiva;// prefijo de variable[Mod2Diapo10]
    console.log("Carga de : [ "+pre+" ]");
//////////////////////////////////////
    $Tiempo_Avatar1="3"*Segundos;// X segundos primer tiempo $1 
    $Tiempo_Avatar2="12"*Segundos;// X segundos segundo tiempo $2 
    $Tiempo_Avatar3="6"*Segundos;// X segundos segundo tiempo $2 
    $Tiempo_Avatar4="5"*Segundos;// X segundos segundo tiempo $2 
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
  $("#nubeIzq5").hide();
  
  allTime(); 
  if (localStorage[pre]==null) {
    bloquear("#ContenedorUg");
    setTimeout(function(){
      PrimerEvento();
      setTimeout(function(){
        SegundoEvento();
        setTimeout(function(){
          TercerEvento();
          setTimeout(function(){
            CuartoEvento();
          },$Tiempo_Avatar4);
        },$Tiempo_Avatar3);
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

$NombreAvatar4='jimena';     
$UrlAvatar4='46a_jimena.swf';
$(".avatar4").html(avatar($UrlAvatar4,$NombreAvatar4));
  showAvatar($NombreAvatar4);//estado del avatar


  /**/

  /**/ /**/


/////////////////////////////
}
/**
 * [PrimerEvento evento que ocurre Una vez El primer Avatar habla]
 */
 var PrimerEvento =function(){
//////////////////////////////  
  desbloquear("#ContenedorUg");//desbloqueo de 
/////////////////////////////// 

$("#nubeIzq5").show();

/**/  $NombreAvatar2='santiago';     
$UrlAvatar2='46a_santiago.swf';
$(".avatar2").html(avatar($UrlAvatar2,$NombreAvatar2));
  showAvatar($NombreAvatar2);//estado del avatar

}
/**
 * [SegundoEvento evento que ocurre Una vez El segundo Avatar habla]
 */
 var SegundoEvento =function(){

  $("#nubeDer3").find('.j').attr("id", "nube3");
  $NombreAvatar3='jimena';     
  $UrlAvatar3='46b_jimena.swf';
  $(".avatar4").html(avatar($UrlAvatar3,$NombreAvatar3));
  showAvatar($NombreAvatar3);//estado del avatar
  $("#nube3").html('Cuéntame Santiago, ¿y que debemos tener en cuenta en este proceso para que esa estimación sea efectiva?');

}


var TercerEvento =function(){

  $("#nubeIzq5").find('.j').attr("id", "nube4");
  $NombreAvatar3='santiago';     
  $UrlAvatar3='46b_santiago.swf';
  $(".avatar2").html(avatar($UrlAvatar3,$NombreAvatar3));
  showAvatar($NombreAvatar3);//estado del avatar
  $("#nube4").html('Jimena se debe tener en cuenta los siguientes aspectos.');

}


var CuartoEvento =function(){

  //window.parent.ok(diapositiva);

}