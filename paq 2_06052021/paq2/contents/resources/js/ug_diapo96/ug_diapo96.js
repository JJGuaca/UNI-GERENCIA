var diapositiva=96;//diapositiva actual 
    var pre="PR_Mod"+fixedNumModulo+"Diapo"+diapositiva;// prefijo de variable[Mod2Diapo10]
    console.log("Carga de : [ "+pre+" ]");
//////////////////////////////////////
    $Tiempo_Avatar1="6"*Segundos;// X segundos primer tiempo $1 
    $Tiempo_Avatar2="4"*Segundos;// X segundos segundo tiempo $2 
    $Tiempo_Avatar3="4"*Segundos;// X segundos segundo tiempo $2 
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
  $("#nubeDer4").hide();
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
  
  $NombreAvatar4='jimena';     
  $UrlAvatar4='_jimena7.swf';
  $(".avatar4").html(avatar($UrlAvatar4,$NombreAvatar4));
  showAvatar($NombreAvatar4);//estado del avatar


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
  
/**/  $NombreAvatar2='javier';     
  $UrlAvatar2='_javier1.swf';
  $(".avatar2").html(avatar($UrlAvatar2,$NombreAvatar2));
  showAvatar($NombreAvatar2);//estado del avatar

/**/

}
/**
 * [SegundoEvento evento que ocurre Una vez El segundo Avatar habla]
 */
var SegundoEvento =function(){
  $("#nubeIzq3").find('.j').attr("id", "nube4");
  $NombreAvatar4='jimena';     
  $UrlAvatar4='_jimena8.swf';
  $(".avatar4").html(avatar($UrlAvatar4,$NombreAvatar4));
 showAvatar($NombreAvatar4);//estado del avatar
  $("#nube4").html('??Y qu?? se necesita para identificar los riesgos?');
}


var TercerEvento =function(){
  $("#nubeDer4").find('.j').attr("id", "nube5");
  $NombreAvatar2='javier';     
  $UrlAvatar2='_javier2.swf';
  $(".avatar2").html(avatar($UrlAvatar2,$NombreAvatar2));
 showAvatar($NombreAvatar2);//estado del avatar
  $("#nube5").html('Para cada una de las actividades del proyecto se deben analizar cu??les son las condiciones necesarias para desarrollarse y cu??les ser??an los eventos tanto positivos como negativos que pueden afectar su cumplimiento, para ello se utilizan listas de chequeo en donde se registra este an??lisis. ');
}
