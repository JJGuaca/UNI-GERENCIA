function avatar1(){
// $('#Juan200').attr('src', '../resources/html/avatar_8santiago.html');
 $('#Juan200').attr('src', '../resources/html/AVATARES/10a_1santiago_HTML5 Canvas.html');
}

function avatar2(){
// $('#Juan200').attr('src', '../resources/html/avatar_8santiago.html');
$('#Juan200').hide();
 $('#Juan201').attr('src', '../resources/html/AVATARES/10b_1santiago_HTML5 Canvas.html');
}

var diapositiva='6_1';//diapositiva actual 
    var pre="PR_Mod"+fixedNumModulo+"Diapo"+diapositiva;// prefijo de variable[Mod2Diapo10]
    console.log("Carga de : [ "+pre+" ]");
//////////////////////////////////////
    $Tiempo_Avatar1="29"*Segundos;// X segundos primer tiempo $1 
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
    bloquear("#c1");
    bloquear("#botondoc2");
    $("#c2").hide();
    


  }else{
   visto(".btn",varColorLinkVisitado);
   $(".btn").click(function(event) {
    var color=ColorLinkVisitadoPass;
    $(this).css("color",color+" !important").attr("style","color:"+color+"!important");
    $("#caja5").show();

  });


   $("#texto").css("opacity",1);
   $("#c2").show();


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
/*$NombreAvatar2='santiago';     
$UrlAvatar2='10a_1santiago.swf';
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
  $("#nubeIzq4").find('.j').attr("id", "nube3");
 /* $NombreAvatar3='santiago';     
  $UrlAvatar3='10b_1santiago.swf';*/
  //$(".avatar2").html(avatar($UrlAvatar3,$NombreAvatar3));
  //showAvatar($NombreAvatar3);//estado del avatar
  $("#nube3").html('El beneficio clave de esta proceso es darle un inicio efectivo a nuestro proyecto, definir de manera exacta los limites del mismo y crear de manera formal los registros que soportan la aceptación y ejecución de un proyecto.');

  avatar2();

}


var SegundoEvento =function(){

  // $("#texto").animate({
  //   "opacity":1
  // },2000,function(){
    desbloquear("#botondoc2");
    

    pulseUnico("botondoc2");
    $("#botondoc2").click(function(){
      $(this).removeClass("pulse");
      $("#c2").show();
      pulseUnico("c2");
      $("#c2").click(function(){
        $(this).removeClass("pulse");
        $("#s1").click();
        fin();
      });
    });
  // });

}