var diapositiva='87_2';//diapositiva actual 
    var pre="PR_Mod"+fixedNumModulo+"Diapo"+diapositiva;// prefijo de variable[Mod2Diapo10]
    console.log("Carga de : [ "+pre+" ]");
//////////////////////////////////////
    $Tiempo_Avatar1="4"*Segundos;// X segundos primer tiempo $1 
    $Tiempo_Avatar2="6"*Segundos;// X segundos segundo tiempo $2 
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

  $("#nubeDer2").hide();
  $("#img1").hide();
bloquear("#boton3");
bloquear("#boton4");
bloquear("#boton5");

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


    $NombreAvatar3='jimena';     
  $UrlAvatar3='_jimena1.swf';
  $(".avatar3").html(avatar($UrlAvatar3,$NombreAvatar3));
  showAvatar($NombreAvatar3);//estado del avatar
/**/

/**/ 
  

/////////////////////////////
}
/**
 * [PrimerEvento evento que ocurre Una vez El primer Avatar habla]
 */
var PrimerEvento =function(){
   $("#nubeDer2").show(); 

      $NombreAvatar2='santiago';     
  $UrlAvatar2='_santiago4.swf';
  $(".avatar2").html(avatar($UrlAvatar2,$NombreAvatar2));
  showAvatar($NombreAvatar2);//estado del avatar

}
/**
 * [SegundoEvento evento que ocurre Una vez El segundo Avatar habla]
 */
var SegundoEvento =function(){




   desbloquear("#boton3");
 pulseUnico('boton3');//unicopalpitar
  $("#boton3").click(function(event) {
    $(this).removeClass('pulse');
    desbloquear("#boton4");
    pulseUnico('boton4');//unicopalpitar
    $("#boton4").click(function(event) {
      $(this).removeClass('pulse');
      desbloquear("#boton5");
      pulseUnico('boton5');//unicopalpitar
  $("#boton5").click(function(event) {
    $(this).removeClass('pulse');
    });
    });
  });
    $("#img1").show();
}
