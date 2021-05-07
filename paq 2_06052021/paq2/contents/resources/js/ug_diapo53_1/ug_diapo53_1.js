var diapositiva=53;//diapositiva actual 
    var pre="PR_Mod"+fixedNumModulo+"Diapo"+diapositiva;// prefijo de variable[Mod2Diapo10]
    console.log("Carga de : [ "+pre+" ]");
//////////////////////////////////////
    $Tiempo_Avatar1="5"*Segundos;// X segundos primer tiempo $1 
    $Tiempo_Avatar2="13"*Segundos;// X segundos segundo tiempo $2 
    $Tiempo_Avatar3="5"*Segundos;// X segundos segundo tiempo $2 
    $Tiempo_Avatar4="5"*Segundos;// X segundos segundo tiempo $2 
    $Tiempo_Avatar5="0"*Segundos;// X segundos segundo tiempo $2 
    $NombreAvatar1="";//Nombre del primer avatar[SOLO SE MANEJAN MINUSCULAS]
    $NombreAvatar2="";//Nombre del segundo avatar
    $NombreAvatar3="";//Nombre del segundo avatar
    $NombreAvatar4="";//Nombre del segundo avatar
    $UrlAvatar1="";//Nombre de archivo de Primer avatsSar
    $UrlAvatar2="";//Nombre de archivo de Primer avatar
    $UrlAvatar3="";//Nombre de archivo de Primer avatar
    $UrlAvatar4="";//Nombre de archivo de Primer avatar
/////////////////////////////////////
//-------------------------------------------------------------------------------
    // hideAvatar($NombreAvatar1);//oculta el avatar(swf) y muestra una imagenen
   //showAvatar($NombreAvatar1);//oculta la imagne y muestra el swf
//-------------------------------------------------------------------------------
jQuery(document).ready(function($) {
  $("#nubeIzq4").hide();
  allTime(); 
  if (localStorage[pre]==null) {
     $("#botondoc2").hide();
  $("#estrella3").hide();
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
    $("#nubeIzq2").hide();
/////////////////////////////// 
  hideAvatar($NombreAvatar1);//estado del avatar
  hideAvatar($NombreAvatar2);//estado del avatar
  hideAvatar($NombreAvatar3);//estado del avatar
  hideAvatar($NombreAvatar4);//estado del avatar
/////////////////////////////  
  //      $NombreAvatar2='jimena';     
  // $UrlAvatar2='_jimena53cor.swf';
  // $(".avatar4").html(avatar($UrlAvatar2,$NombreAvatar2));
  // showAvatar($NombreAvatar2);


/**/
  $("#santiago1").hide();
  $("#nubeDer4").hide();
      $("#nubeIzq2").show();
    $NombreAvatar2='jimena';     
  $UrlAvatar2='santiago44.swf';
  $(".avatar4").html(avatar($UrlAvatar2,$NombreAvatar2));
  showAvatar($NombreAvatar2);//estado del avatar

/////////////////////////////
}
/**
 * [PrimerEvento evento que ocurre Una vez El primer Avatar habla]
 */
var PrimerEvento =function(){
//////////////////////////////  
  desbloquear("#ContenedorUg");//desbloqueo de 
/////////////////////////////// 
$("#clm1").animate({
  opacity: 1
}, 2000, function(){
  $("#clm2").animate({
    opacity: 1
  }, 2000, function(){
    $("#clm3").animate({
      opacity: 1
    }, 2000);
  });
});

}
/**
 * [SegundoEvento evento que ocurre Una vez El segundo Avatar habla]
 */
var SegundoEvento =function(){



}
