function avatar1(){
// $('#Juan200').attr('src', '../resources/html/avatar_8santiago.html');
 $('#Juan200').attr('src', '../resources/html/AVATARES/12a2_santiago_HTML5 Canvas.html');
}

function avatar2(){
// $('#Juan200').attr('src', '../resources/html/avatar_8santiago.html');
 $('#Juan201').attr('src', '../resources/html/AVATARES/12b2_santiago_HTML5 Canvas.html');
}
var diapositiva="6_2";//diapositiva actual 
    var pre="PR_Mod"+fixedNumModulo+"Diapo"+diapositiva;// prefijo de variable[Mod2Diapo10]
    console.log("Carga de : [ "+pre+" ]");
//////////////////////////////////////
    $Tiempo_Avatar1="26"*Segundos;// X segundos primer tiempo $1 
    $Tiempo_Avatar2="10"*Segundos;// X segundos segundo tiempo $2 
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
 
  allTime(); 
  if (localStorage[pre]==null) {
    $("#caja5").hide();
    $("#estrella3").hide();
    
    $("#botondoc2").hide();
    $("#capsula4").hide();

    bloquear("#ContenedorUg");
    
  }else{
   visto(".btn",varColorLinkVisitado);
   $(".btn").click(function(event) {
    var color=ColorLinkVisitadoPass;
    $(this).css("color",color+" !important").attr("style","color:"+color+"!important");
    $("#caja5").show();

  });

   $("#img1").css("opacity",1);
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
/*
$NombreAvatar2='santiago';     
$UrlAvatar2='12a2_santiago.swf';
$(".avatar2").html(avatar($UrlAvatar2,$NombreAvatar2));
  showAvatar($NombreAvatar2);//estado del avatar
*/
  avatar1();

  setTimeout(function(){
    PrimerEvento();
    setTimeout(function(){
      SegundoEvento();
    },$Tiempo_Avatar2);
  }, $Tiempo_Avatar1);


/////////////////////////////
}
/**
 * [PrimerEvento evento que ocurre Una vez El primer Avatar habla]
 */
 var PrimerEvento =function(){
//////////////////////////////  
  desbloquear("#ContenedorUg");//desbloqueo de 
/////////////////////////////// 

$("#img1").animate({
  "opacity":1
},2000,function(){
  fin();
  $("#s1").click();

})
$("#caja5").show();

}
/**
 * [SegundoEvento evento que ocurre Una vez El segundo Avatar habla]
 */
 var SegundoEvento =function(){
   $("#nubeIzq4").find('.j').attr("id", "nube3");
   /*
   $NombreAvatar3='santiago';     
   $UrlAvatar3='12b2_santiago.swf';
   $(".avatar2").html(avatar($UrlAvatar3,$NombreAvatar3));
  showAvatar($NombreAvatar3);//estado del avatar
  */
   

  $("#nube3").html('La primera parte del Acta de Constitución esta claramente relacionada con la identificación del proyecto y la información base en el momento de realizar la formulación del mismo. Estos numerales están ligados en términos generales a las necesidades de la organización,  o en su defecto a los requisitos de un producto o servicio a adquirir.');

  avatar2();
}
