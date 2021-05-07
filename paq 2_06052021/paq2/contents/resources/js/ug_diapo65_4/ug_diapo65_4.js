var diapositiva='65_4';//diapositiva actual 
    var pre="PR_Mod"+fixedNumModulo+"Diapo"+diapositiva;// prefijo de variable[Mod2Diapo10]
    console.log("Carga de : [ "+pre+" ]");
//////////////////////////////////////
    $Tiempo_Avatar1="7"*Segundos;// X segundos primer tiempo $1 
    $Tiempo_Avatar2="18"*Segundos;// X segundos segundo tiempo $2 
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
  $("#nubeIzq3").hide();


   $NombreAvatar4='jimena';     
  $UrlAvatar4='65a_4jimena.swf';
  $(".avatar4").html(avatar($UrlAvatar4,$NombreAvatar4));
  showAvatar($NombreAvatar4);//estado del avatar

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
  desbloquear("#ContenedorUg");//desbloqueo de 
/////////////////////////////// 
 $("#nubeIzq3").show();
     $NombreAvatar2='santiago';     
  $UrlAvatar2='65a_4santiago.swf';
  $(".avatar2").html(avatar($UrlAvatar2,$NombreAvatar2));
  showAvatar($NombreAvatar2);//estado del avatar
}
/**
 * [SegundoEvento evento que ocurre Una vez El segundo Avatar habla]
 */
var SegundoEvento =function(){
$("#nubeDer4").find('.j').attr("id", "nube3");
    
  $("#nube3").html("Santiago, ¿y si en el momento de registrar los costos  no son adecuados?."); 
 $NombreAvatar2='jimena';  
  $UrlAvatar2='65b_4jimena.swf';
  $(".avatar4").html(avatar($UrlAvatar2,$NombreAvatar2));
  showAvatar($NombreAvatar2);//estado del avatar
}


var tercerEvento =function(){
// $("#nubeIzq3").find('.j').attr("id", "nube4");
//   $("#nube4").html("A veces somos demasiado optimistas sobre cuánto tiempo durará la determinada tarea, de manera que entramos a comprometernos en tiempos supremamente cortos que después no podremos cumplir. Por eso, desde luego es muy importante revisar la experiencia, valorar adecuadamente los recursos disponibles para cada tarea, y en tercer lugar tratar de incorporar dentro estimación de tiempo un margen razonable de error."); 
//  $NombreAvatar2='santiago';  
//   $UrlAvatar2='65b_4santiago.swf';
//   $(".avatar2").html(avatar($UrlAvatar2,$NombreAvatar2));
//   showAvatar($NombreAvatar2);//estado del avatar


}