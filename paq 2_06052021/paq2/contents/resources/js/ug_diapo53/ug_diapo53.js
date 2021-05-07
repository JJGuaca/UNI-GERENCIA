var diapositiva=53;//diapositiva actual 
    var pre="PR_Mod"+fixedNumModulo+"Diapo"+diapositiva;// prefijo de variable[Mod2Diapo10]
    console.log("Carga de : [ "+pre+" ]");
//////////////////////////////////////
    $Tiempo_Avatar1="7"*Segundos;// X segundos primer tiempo $1 
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
        setTimeout(function(){
          TercerEvento();
          setTimeout(function(){
            CuartoEvento();
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
  $UrlAvatar2='_jimenabol2_4.swf';
  $(".avatar4").html(avatar($UrlAvatar2,$NombreAvatar2));
  showAvatar($NombreAvatar2);//estado del avatar

/////////////////////////////
}
/**
 * [PrimerEvento evento que ocurre Una vez El primer Avatar habla]
 */
var PrimerEvento =function(){
    $("#nubeDer4").show();
  $("#santiago1").show();
    $NombreAvatar2='santiago';     
  $UrlAvatar2='_santiagoTEMA4.swf';
  $(".avatar2").html(avatar($UrlAvatar2,$NombreAvatar2));
  showAvatar($NombreAvatar2);//estado del avatar
}
/**
 * [SegundoEvento evento que ocurre Una vez El segundo Avatar habla]
 */
var SegundoEvento =function(){


$("#jimena1").hide();  
$("#nubeIzq2").hide();
$("#nubeDer4").hide();
$("#santiago1").hide();
$("#img1").animate({
  "opacity":1
},2000,function(){
 //window.parent.ok(diapositiva);
   });

}
var TercerEvento =function(){
    $("#img1").hide();
    $("#jimena1").show(); 
    $("#nubeIzq2").show();
 $("#nubeIzq2").find('.j').attr("id", "nube5");
 $NombreAvatar2='jimena';     
 $UrlAvatar2='_jimena2corr.swf';
 $(".avatar4").html(avatar($UrlAvatar2,$NombreAvatar2));
  showAvatar($NombreAvatar2);//estado del avatar
  $("#nube5").html('Me puedes explicar, ¿en qué cosiste el proceso de planificar los costos?');

}

var CuartoEvento =function(){


  $("#nubeDer4").show();
  $("#santiago1").show();
$("#nubeDer4").find('.j').attr("id", "nube4");
 $NombreAvatar3='santiago';     
 $UrlAvatar3='_santiagoBOLI2.swf';
 $(".avatar2").html(avatar($UrlAvatar3,$NombreAvatar3));
  showAvatar($NombreAvatar3);//estado del avatar
  $("#nube4").html('Consiste en definir la metodología que se va a usar para estimar los costos, incluyendo los índices de precios y las tasas de cambio. De igual forma los requisitos que se deben seguir para actualizar los costos, quien tiene la autoridad  y responsabilidad para hacerlo y demás detalles para administrar los costos en el proyecto.');




}

