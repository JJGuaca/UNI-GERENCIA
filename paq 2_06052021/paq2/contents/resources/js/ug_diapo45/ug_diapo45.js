var diapositiva=45;//diapositiva actual 
    var pre="PR_Mod"+fixedNumModulo+"Diapo"+diapositiva;// prefijo de variable[Mod2Diapo10]
    console.log("Carga de : [ "+pre+" ]");
//////////////////////////////////////
    $Tiempo_Avatar1="11"*Segundos;// X segundos primer tiempo $1 
    $Tiempo_Avatar2="5"*Segundos;// X segundos segundo tiempo $2 
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
  $("#nubeDer4").hide();
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
  //////////////////////////////

  setTimeout(function(){
    PrimerEvento();
    setTimeout(function(){
      SegundoEvento();

    },$Tiempo_Avatar2);
  }, $Tiempo_Avatar1);
  $("#nubeDer4").show();
  $("#parrafoPunto6").hide();
  //////////////////////////////
  $NombreAvatar2='santiago';     
  $UrlAvatar2='52a_santiago.swf';
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

$("#nubeDer4").find('.j').attr("id", "nube3");
/**/  $NombreAvatar2='santiago';     
$UrlAvatar2='52_santiago.swf';
$(".avatar2").html(avatar($UrlAvatar2,$NombreAvatar2));
  showAvatar($NombreAvatar2);//estado del avatardel avatar
  $("#nube3").html('Debido a esta relación es necesario que  se adelanten de manera simultanea y sincronizada los proceso de definir y secuenciar actividades, estimar los recursos, y la duración de las actividades. Lo cual conducira al siguiente proceso que veremos, desarrollar el cronograma.');


}
/**
 * [SegundoEvento evento que ocurre Una vez El segundo Avatar habla]
 */
 var SegundoEvento =function(){
  $("#img1").animate({opacity:'1'}, 2000, function(){
    $("#img2").animate({opacity:'1'}, 2000, function(){
    $("#img3").animate({opacity:'1'}, 2000, function(){
    $("#img4").animate({opacity:'1'}, 2000, function(){
      $("#img5").animate({opacity:'1'}, 2000)

    }) 
    }) 
    }) 
  });
 }
