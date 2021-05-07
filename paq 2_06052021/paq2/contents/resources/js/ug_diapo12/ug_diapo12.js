var diapositiva=12;//diapositiva actual 
    var pre="PR_Mod"+fixedNumModulo+"Diapo"+diapositiva;// prefijo de variable[Mod2Diapo10]
    console.log("Carga de : [ "+pre+" ]");
//////////////////////////////////////
    $Tiempo_Avatar1="0"*Segundos;// X segundos primer tiempo $1 
    $Tiempo_Avatar2="0"*Segundos;// X segundos segundo tiempo $2 
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
      pulseUnico("menu");

   

      CargaAvatar();
      CargaAvatar2();
      allTime(); 
      if (localStorage[pre]==null) {

      //           $("#bc1").hide();
      // $("#bc2").hide();
      // $("#bc3").hide();
      // $("#bc4").hide();
      // $("#bc5").hide();
      // $("#bc6").hide();
      // $("#bc7").hide();
      // $("#bc8").hide();
      // $("#bc9").hide();

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

      $("#bc1").show();
      $("#bc2").show();
      $("#bc3").show();
      $("#bc4").show();
      $("#bc5").show();
      $("#bc6").show();
      $("#bc7").show();
      $("#bc8").show();
      $("#bc9").show();
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
   
  $("#menu").click(function(){
    $("#estrella7").hide();

    pulseUnico("bc0");


  })


$("#bc0").click(function(){
  $(this).removeClass("pulse");
  pulseUnico("derecha");
  $("#tituloTema").html( "&#8226; Gestión de Integración");
});

$("#bc1").click(function(){
  $(this).removeClass("pulse");
  $("#derecha").addClass("pulse");
  $("#tituloTema").html( "&#8226; Gestión del Alcance");

});

$("#bc2").click(function(){
  $(this).removeClass("pulse");
  $("#derecha").addClass("pulse");
  $("#tituloTema").html( "&#8226; Gestión del Tiempo");

});

$("#bc3").click(function(){
  $(this).removeClass("pulse");
  $("#derecha").addClass("pulse");
  $("#tituloTema").html( "&#8226; Gestión de los Costos del Proyecto");

});

$("#bc4").click(function(){
  $(this).removeClass("pulse");
  $("#derecha").addClass("pulse");
  $("#tituloTema").html( "&#8226; Gestión de la Calidad");

});

$("#bc5").click(function(){
  $(this).removeClass("pulse");
  $("#derecha").addClass("pulse");
  $("#tituloTema").html( "&#8226; Gestión de RRHH");

});

$("#bc6").click(function(){
  $(this).removeClass("pulse");
  $("#derecha").addClass("pulse");
  $("#tituloTema").html( "&#8226; Gestión de las Comunicaciones");

});

$("#bc7").click(function(){
  $(this).removeClass("pulse");
  $("#derecha").addClass("pulse");
  $("#tituloTema").html( "&#8226; Gestión y Atención de Riesgos");

});

$("#bc8").click(function(){
  $(this).removeClass("pulse");
  $("#derecha").addClass("pulse");
  $("#tituloTema").html( "&#8226; Gestión de Adquisiciones");

});


$("#bc9").click(function(){
  $(this).removeClass("pulse");
  $("#derecha").addClass("pulse");
  $("#tituloTema").html( "&#8226; Gestión de los Interesados");

});



/////////////////////////////
}
/**
 * [PrimerEvento evento que ocurre Una vez El primer Avatar habla]
 */
var PrimerEvento =function(){
//////////////////////////////  
  desbloquear("#ContenedorUg");//desbloqueo de 
/////////////////////////////// 
}
/**
 * [SegundoEvento evento que ocurre Una vez El segundo Avatar habla]
 */
var SegundoEvento =function(){

}

