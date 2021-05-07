var diapositiva=97;//diapositiva actual 
    var pre="PR_Mod"+fixedNumModulo+"Diapo"+diapositiva;// prefijo de variable[Mod2Diapo10]
    console.log("Carga de : [ "+pre+" ]");
//////////////////////////////////////
    $Tiempo_Avatar1="4"*Segundos;// X segundos primer tiempo $1 
    $Tiempo_Avatar2="9"*Segundos;// X segundos segundo tiempo $2 
    $Tiempo_Avatar3="4"*Segundos;// X segundos segundo tiempo $2 
    $Tiempo_Avatar4="27"*Segundos;// X segundos segundo tiempo $2 
    $Tiempo_Avatar5="5"*Segundos;// X segundos segundo tiempo $2   
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
 

  allTime(); 
  if (localStorage[pre]==null) {
   $("#nubeDer4").hide();
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
  $UrlAvatar4='_jimena9.swf';
  $(".avatar4").html(avatar($UrlAvatar4,$NombreAvatar4));
  showAvatar($NombreAvatar4);//estado del avata      
  

/////////////////////////////
}
/**
 * [PrimerEvento evento que ocurre Una vez El primer Avatar habla]
 */
 var PrimerEvento =function(){
   $("#nubeDer4").show();
$NombreAvatar2='santiago';     
$UrlAvatar2='_santiago12.swf';
$(".avatar2").html(avatar($UrlAvatar2,$NombreAvatar2));
  showAvatar($NombreAvatar2);//estado del avatar


}
/**
 * [SegundoEvento evento que ocurre Una vez El segundo Avatar habla]
 */
 var SegundoEvento =function(){


  $("#nubeIzq2").find('.j').attr("id", "nube4");
  $NombreAvatar4='jimena';     
  $UrlAvatar4='_jimena10.swf';
  $(".avatar4").html(avatar($UrlAvatar4,$NombreAvatar4));
 showAvatar($NombreAvatar4);//estado del avatar
  $("#nube4").html('¿Qué otras herramientas y técnicas debo utilizar?');
 }
 var TercerEvento =function(){


  $("#nubeDer4").find('.j').attr("id", "nube8");
  $NombreAvatar2='santiago';     
  $UrlAvatar2='_santiago13.swf';
  $(".avatar2").html(avatar($UrlAvatar2,$NombreAvatar2));
 showAvatar($NombreAvatar2);//estado del avatar
  $("#nube8").html('Para ello existen técnicas de diagramación donde se visualiza la dependencia entre las tareas de los recursos y se pueden identificar puntos críticos. Otra técnica es acudir a un análisis DOFA aplicado al entorno en el cual se va a desarrollar el proyecto, que permita revelar las debilidades, oportunidades, fortalezas y amenazas.');
 }

    var CuartoEvento =function(){


    $("#nubeIzq2").find('.j').attr("id", "nube4");
    $NombreAvatar4='jimena';     
    $UrlAvatar4='_jimena11.swf';
    $(".avatar4").html(avatar($UrlAvatar4,$NombreAvatar4));
   showAvatar($NombreAvatar4);//estado del avatar
    $("#nube4").html('Y al final, ¿qué producto obtenemos?');
   }

    var QuintoEvento =function(){


    $("#nubeDer4").find('.j').attr("id", "nube6");
    $NombreAvatar2='santiago';     
    $UrlAvatar2='_santiago14.swf';
    $(".avatar2").html(avatar($UrlAvatar2,$NombreAvatar2));
   showAvatar($NombreAvatar2);//estado del avatar
    $("#nube6").html('Jimena, el producto es un documento donde se van a listar los riesgos, posibles respuestas, causas y las categorías de los riesgos.');
   }