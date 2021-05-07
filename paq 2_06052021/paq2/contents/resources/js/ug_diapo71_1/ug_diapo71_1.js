var diapositiva='71_1';//diapositiva actual 
    var pre="PR_Mod"+fixedNumModulo+"Diapo"+diapositiva;// prefijo de variable[Mod2Diapo10]
    console.log("Carga de : [ "+pre+" ]");
//////////////////////////////////////
    $Tiempo_Avatar1="3"*Segundos;// X segundos primer tiempo $1 
    $Tiempo_Avatar2="16"*Segundos;// X segundos segundo tiempo $2 
    $Tiempo_Avatar3="5"*Segundos;// X segundos segundo tiempo $2 
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
        setTimeout(function(){
          TercerEvento();
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
$("#nubeDer4").hide();
$NombreAvatar4='jimena';     
$UrlAvatar4='_jimena11corr.swf';
$(".avatar4").html(avatar($UrlAvatar4,$NombreAvatar4));
  showAvatar($NombreAvatar4);//estado del avatar
/**/  //estado del avatar

/**/

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
$("#nubeDer4").show();
$NombreAvatar2='santiago';     
$UrlAvatar2='_santiago5.3.swf';
$(".avatar2").html(avatar($UrlAvatar2,$NombreAvatar2));
showAvatar($NombreAvatar2);
}
/**
 * [SegundoEvento evento que ocurre Una vez El segundo Avatar habla]
 */
 var SegundoEvento =function(){
  desbloquear("#boton3");//desbloqueo del botón
  desbloquear("#boton4");//desbloqueo del botón


  $("#img1").animate({
    "opacity":1
  },2000,function(){
    //window.parent.ok(diapositiva);
  })

  pulseUnico('boton3');//unicopalpitar
  $("#boton3").click(function(event) {
    $(this).removeClass('pulse');
    pulseUnico('boton4');//unicopalpitar
    $("#boton4").click(function(event) {
      $(this).removeClass('pulse');  
        pulseUnico('boton5');//unicopalpitar
        $("#boton5").click(function(event) {
          $(this).removeClass('pulse');
          pulseUnico('boton6');//unicopalpitar
          $("#boton6").click(function(event) {
            $(this).removeClass('pulse');
            fin();
          });
        });
      });
  });
}
var TercerEvento =function(){

 // $("#nubeDer4").find('.j').attr("id", "nube4");
 //  $NombreAvatar3='santiago';     
 //  $UrlAvatar3='71b_1santiago.swf';
 //  $(".avatar2").html(avatar($UrlAvatar3,$NombreAvatar3));
 //  showAvatar($NombreAvatar3);
 //  $("#nube4").html('Jimena vemos 3 ejemplos de este enfoque de calidad en un proyecto');


}
