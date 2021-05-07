var diapositiva=103;//diapositiva actual 
    var pre="PR_Mod"+fixedNumModulo+"Diapo"+diapositiva;// prefijo de variable[Mod2Diapo10]
    console.log("Carga de : [ "+pre+" ]");
//////////////////////////////////////
    $Tiempo_Avatar1="10"*Segundos;// X segundos primer tiempo $1 
    $Tiempo_Avatar2="8"*Segundos;// X segundos segundo tiempo $2 
    $Tiempo_Avatar3="4"*Segundos;// X segundos segundo tiempo $2 
    $Tiempo_Avatar4="17"*Segundos;
    $Tiempo_Avatar5 = "11"*Segundos;
    // X segundos segundo tiempo $2 
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
        setTimeout(function(){
          TercerEvento();
          setTimeout(function(){
            CuartoEvento();
            setTimeout(function(){
              QuintoEvento();
            },$Tiempo_Avatar5);
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


/**/
$NombreAvatar4='jimena';     
$UrlAvatar4='117a_jimena.swf';
$(".avatar4").html(avatar($UrlAvatar4,$NombreAvatar4));
  showAvatar($NombreAvatar4);//estado del avatar
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
$("#nubeIzq4").show();

$NombreAvatar2='santiago';     
$UrlAvatar2='117a_santiago.swf';
$(".avatar2").html(avatar($UrlAvatar2,$NombreAvatar2));
  showAvatar($NombreAvatar2);//estado del avatar

}
/**
 * [SegundoEvento evento que ocurre Una vez El segundo Avatar habla]
 */
 var SegundoEvento =function(){

   $("#nubeDer3").find('.j').attr("id", "nube3");
   $NombreAvatar3='jimena';     
   $UrlAvatar3='117b_jimena.swf';
   $(".avatar4").html(avatar($UrlAvatar3,$NombreAvatar3));
  showAvatar($NombreAvatar3);//estado del avatar
  $("#nube3").html('Santiago ¿y en qué consiste este proceso?');


}

var TercerEvento =function(){

 $("#nubeIzq4").find('.j').attr("id", "nube4");
 $NombreAvatar3='santiago';     
 $UrlAvatar3='117b_santiago.swf';
 $(".avatar2").html(avatar($UrlAvatar3,$NombreAvatar3));
  showAvatar($NombreAvatar3);//estado del avatar
  $("#nube4").html('Jimena este proceso consiste en desarrollar estrategias de gestión adecuadas para lograr la participación eficaz de los interesados a lo largo del ciclo de vida del proyecto, con base en el análisis de sus necesidades, intereses y el posible impacto en el éxito del proyecto.');


}


var CuartoEvento =function(){

 $("#nubeDer3").find('.j').attr("id", "nube5");
 $NombreAvatar3='santiago';     
 $UrlAvatar3='117c_jimena.swf';
 $(".avatar4").html(avatar($UrlAvatar3,$NombreAvatar3));
  showAvatar($NombreAvatar3);//estado del avatar
  $("#nube5").html('Santiago, entonces este proceso nos traerá como beneficio un plan claro y factible para interactuar con los interesados del proyecto a fin de apoyar los intereses del mismo.');

}


var QuintoEvento =function(){
  $("#botondoc2").show();
  $("#estrella3").show();


    pulseUnico("botondoc2");
  $("#botondoc2").click(function(){
    $(this).removeClass("pulse");
  })


}
