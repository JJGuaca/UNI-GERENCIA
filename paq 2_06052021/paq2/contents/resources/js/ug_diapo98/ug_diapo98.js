var diapositiva=98;//diapositiva actual 
    var pre="PR_Mod"+fixedNumModulo+"Diapo"+diapositiva;// prefijo de variable[Mod2Diapo10]
    console.log("Carga de : [ "+pre+" ]");
//////////////////////////////////////
    $Tiempo_Avatar1="9"*Segundos;// X segundos primer tiempo $1 
    $Tiempo_Avatar2="3"*Segundos;// X segundos segundo tiempo $2 
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
$("#nubeIzq2").hide();
  /**/
$("#nubeDer4").show();
/**/  $NombreAvatar2='santiago';     
$UrlAvatar2='_santiago19.swf';
$(".avatar2").html(avatar($UrlAvatar2,$NombreAvatar2));
  showAvatar($NombreAvatar2);//estado del avatar
  /**/

/////////////////////////////
}
/**
 * [PrimerEvento evento que ocurre Una vez El primer Avatar habla]
 */
var PrimerEvento =function(){
//////////////////////////////  
  desbloquear("#ContenedorUg");//desbloqueo de 
/////////////////////////////// 
$("#nubeIzq2").show();
  $NombreAvatar4='jimena';     
$UrlAvatar4='_jimena13.swf';
$(".avatar4").html(avatar($UrlAvatar4,$NombreAvatar4));
  showAvatar($NombreAvatar4);//estado del avatar


}
/**
 * [SegundoEvento evento que ocurre Una vez El segundo Avatar habla]
 */
var SegundoEvento =function(){

  $("#nubeDer4").find('.j').attr("id", "nube4");
  $NombreAvatar2='santiago';     
  $UrlAvatar2='_santiago20.swf';
  $(".avatar2").html(avatar($UrlAvatar2,$NombreAvatar2));
 showAvatar($NombreAvatar2);//estado del avatar
  $("#nube4").html('Consiste el valorar num??ricamente el riesgo, para lo cual acudimos a t??cnicas de recopilaci??n y representaci??n de datos que incluyen modelos de simulaci??n, aplicaci??n de distribuciones de probabilidad y dem??s elementos matem??ticos que nos permitan conocer el grado de impacto sobre tiempos, costos y alcances que puede tener la sucesi??n de un evento en particular.');
}
