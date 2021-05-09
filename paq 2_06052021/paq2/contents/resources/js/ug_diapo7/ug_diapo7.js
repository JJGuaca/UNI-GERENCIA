function avatar1(){
  $('#Juan201').attr('src', '../resources/html/AVATARES/10a_santiago_HTML5 Canvas.html');
}

function avatar2(){
  $('#Juan200').attr('src', '../resources/html/AVATARES/10_jimena_HTML5 Canvas.html');
}

function avatar3(){
  $('#Juan201').attr('src', '../resources/html/AVATARES/10b_santiago_HTML5 Canvas.html ');
}


var diapositiva=7;//diapositiva actual 
    var pre="PR_Mod"+fixedNumModulo+"Diapo"+diapositiva;// prefijo de variable[Mod2Diapo10]
    console.log("Carga de : [ "+pre+" ]");
//////////////////////////////////////
    $Tiempo_Avatar1="29"*Segundos;// X segundos primer tiempo $1 
    $Tiempo_Avatar2="19"*Segundos;// X segundos segundo tiempo $2 
    $Tiempo_Avatar3="22"*Segundos;// X segundos segundo tiempo $2 
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

 $("#nubeIzq4").hide();
 allTime(); 
 if (localStorage[pre]==null) {
  bloquear("#botondoc6");

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
/**/

$("#img1").hide();

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

/**/  
/*
$NombreAvatar2='santiago';     
$UrlAvatar2='10a_santiago.swf';
$(".avatar2").html(avatar($UrlAvatar2,$NombreAvatar2));
showAvatar($NombreAvatar2);//estado del avatar
*/
avatar1();

  pulseUnico('tool1');
  $('#tool1').mouseover(function(){
    $(this).removeClass('pulse');
    fin();
  });

/////////////////////////////
}
/**
 * [PrimerEvento evento que ocurre Una vez El primer Avatar habla]
 */
 var PrimerEvento =function(){
  $("#nubeIzq4").show();

/*
  $NombreAvatar4='jimena';     
  $UrlAvatar4='10_jimena.swf';
  $(".avatar4").html(avatar($UrlAvatar4,$NombreAvatar4));
  showAvatar($NombreAvatar4);//estado del avatar
*/
avatar2();

}

/**
 * [SegundoEvento evento que ocurre Una vez El segundo Avatar habla]
 */
 var SegundoEvento =function(){

   $("#nubeDer3").find('.j').attr("id", "nube3");

/*   
   $NombreAvatar3='santiago';     
   $UrlAvatar3='10b_santiago.swf';
   $(".avatar2").html(avatar($UrlAvatar3,$NombreAvatar3));
   showAvatar($NombreAvatar3);//estado del avatar
*/
avatar3();
  $("#nubeIzq4").hide();
  $("#nube3").html('Efectivamente Jimena, ellos van a actuar a favor o en contra del proyecto si se ven afectados y si tienen poder para hacerlo. Por eso tendremos que establecer, qué tan estrechamente son afectados y qué tanto poder tienen para oponerse o apoyar en la realización del proyecto.');
  $("#s1").click();
}

var TercerEvento =function(){
  desbloquear("#botondoc6");
  pulseUnico('botondoc6');
  $("#botondoc6").click(function(){
  $("#s1").click();

 });

}

var CuartoEvento = function(){
     $("#nubeDer3").hide();
   $("#botondoc6").hide();
   $("#estrella7").hide();

   $("#img1").show();
 $("#s1").click();

}