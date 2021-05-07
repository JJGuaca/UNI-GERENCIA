var diapositiva=25;//diapositiva actual 
    var pre="PR_Mod"+fixedNumModulo+"Diapo"+diapositiva;// prefijo de variable[Mod2Diapo10]
    console.log("Carga de : [ "+pre+" ]");
//////////////////////////////////////
    $Tiempo_Avatar1="20"*Segundos;// X segundos primer tiempo $1 
    $Tiempo_Avatar2="6"*Segundos;// X segundos segundo tiempo $2 
    $Tiempo_Avatar3="15"*Segundos;// X segundos segundo tiempo $2 
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

$("#caja3").hide();

setTimeout(function(){
  PrimerEvento();
}, $Tiempo_Avatar1);

$NombreAvatar2='santiago';     
$UrlAvatar2='31_santiago.swf';
$(".avatar2").html(avatar($UrlAvatar2,$NombreAvatar2));
  showAvatar($NombreAvatar2);//estado del avatar

  

/////////////////////////////
}

var cont = 0;

/**
 * [PrimerEvento evento que ocurre Una vez El primer Avatar habla]
 */
 var PrimerEvento =function(){
  $("#caja3").show(2000);

  pulseUnico('concepto1');
  $("#concepto1").mouseover(function(event) {
    $(this).removeClass('pulse');

    pulseUnico('concepto2');
    $("#concepto2").mouseover(function(event) {
      $(this).removeClass('pulse');

      pulseUnico('concepto3');
      $("#concepto3").mouseover(function(event) {
        $(this).removeClass('pulse');

        pulseUnico('concepto4');
        $("#concepto4").mouseover(function(event) {
          $(this).removeClass('pulse');

          pulseUnico('concepto5');
          $("#concepto5").mouseover(function(event) {
            $(this).removeClass('pulse');
            if (cont == 0) {
              setTimeout(function(){                
                cont++;
                SegundoEvento();
                setTimeout(function(){
                  TercerEvento();
                },$Tiempo_Avatar3);
              },$Tiempo_Avatar2);
              
            }
          });
        });
      });
    });
  });


//window.parent.ok(diapositiva);
}
/**
 * [SegundoEvento evento que ocurre Una vez El segundo Avatar habla]
 */
 var SegundoEvento =function(){
   $("#nubeIzq2").find('.j').attr("id", "nube3");
   $NombreAvatar2='santiago';     
   $UrlAvatar2='31a_santiago.swf';
   $(".avatar2").html(avatar($UrlAvatar2,$NombreAvatar2));
  showAvatar($NombreAvatar2);//estado del avatar
  $("#nube3").html('El primer proceso denominado, definir las actividades, corresponde a identificar las acciones, recursos y tiempo que se requieren para completar los entregables previstos en el proyecto y demas acciones que permitan que el proyecto avance, por ejemplo:');
}

var TercerEvento = function(){
  desbloquear("#c1");
  pulseUnico('c1');
  $("#c1").click(function(event) {
    $(this).removeClass('pulse');
    fin();
  });
}