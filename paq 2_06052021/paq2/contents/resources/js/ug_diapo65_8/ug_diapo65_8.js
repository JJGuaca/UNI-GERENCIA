var diapositiva='65_8';//diapositiva actual 
    var pre="PR_Mod"+fixedNumModulo+"Diapo"+diapositiva;// prefijo de variable[Mod2Diapo10]
    console.log("Carga de : [ "+pre+" ]");
//////////////////////////////////////
    $Tiempo_Avatar1="8"*Segundos;// X segundos primer tiempo $1 
    $Tiempo_Avatar2="21"*Segundos;// X segundos segundo tiempo $2 
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
$("#botondoc2").hide();
$("#estrella3").hide();


        bloquear("#botondoc2");

        setTimeout(function(){
          PrimerEvento();
          setTimeout(function(){
            SegundoEvento();
          setTimeout(function(){
            tercerEvento();
          },$Tiempo_Avatar3);
          },$Tiempo_Avatar2);
}, $Tiempo_Avatar1);
}else{
 visto(".btn",varColorLinkVisitado);
 $(".btn").click(function(event) {
  var color=ColorLinkVisitadoPass;
  $(this).css("color",color+" !important").attr("style","color:"+color+"!important");
});
$("#botondoc2").show();
$("#estrella3").show();
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
  $("#nubeDer4").hide();
    $NombreAvatar2='santiago';     
  $UrlAvatar2='_santiago17boli1.swf';
  $(".avatar2").html(avatar($UrlAvatar2,$NombreAvatar2));
  showAvatar($NombreAvatar2);//estado del avatar

/**/
 
/**/

/**/


/////////////////////////////
}
/**
 * [PrimerEvento evento que ocurre Una vez El primer Avatar habla]
 */
var PrimerEvento =function(){

    //////////////////////////////  
  desbloquear("#botondoc2");//desbloqueo de 
/////////////////////////////// 
$("#estrella3").show();

$("#botondoc2").show();
  pulseUnico("botondoc2");
  $("#botondoc2").click(function(){
    $(this).removeClass("pulse");
  })

}
/**
 * [SegundoEvento evento que ocurre Una vez El segundo Avatar habla]
 */
var SegundoEvento =function(){

 $("#nubeIzq3").find('.j').attr("id", "nube3");
  $NombreAvatar3='santiago';     
  $UrlAvatar3='_santiago17boli2.swf';
  $(".avatar2").html(avatar($UrlAvatar3,$NombreAvatar3));
  showAvatar($NombreAvatar3);//estado del avatar
  $("#nube3").html('En la práctica, se incluye un porcentaje adicional ya sea en costos, en duracion de las actividades, o sobre el total del proyecto; porcentanjes que se pueden incluir todos en un mismo proyecto los cuales deben ser visibles, justificados, monitoreados y que permita su control.');


}
var tercerEvento =function(){

}