var diapositiva=29;//diapositiva actual 
    var pre="PR_Mod"+fixedNumModulo+"Diapo"+diapositiva;// prefijo de variable[Mod2Diapo10]
    console.log("Carga de : [ "+pre+" ]");
//////////////////////////////////////
  $Tiempo_Avatar1="8"*Segundos;// X segundos primer tiempo $1 
   $Tiempo_Avatar2="9"*Segundos;// X segundos segundo tiempo $2 
  $Tiempo_Avatar3="22"*Segundos;// X segundos segundo tiempo $2 
   $Tiempo_Avatar4="12"*Segundos;// X segundos segundo tiempo $2 
   $Tiempo_Avatar5="0"*Segundos;
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
  $("#nubeDer5").hide();
  $("#c1").hide();

  allTime(); 
  if (localStorage[pre]==null) {
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
$NombreAvatar2='santiago';     
$UrlAvatar2='35a_santiago.swf';
$(".avatar2").html(avatar($UrlAvatar2,$NombreAvatar2));
  showAvatar($NombreAvatar2);//estado del avatar



  /**/ /**/

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
$("#nubeDer5").show();

/**/
$NombreAvatar4='jimena';     
$UrlAvatar4='35a_jimena.swf';
$(".avatar4").html(avatar($UrlAvatar4,$NombreAvatar4));
  showAvatar($NombreAvatar4);//estado del avatar
  /**/

}
/**
 * [SegundoEvento evento que ocurre Una vez El segundo Avatar habla]
 */
 var SegundoEvento =function(){
   $("#nubeIzq3").find('.j').attr("id", "nube3");
   $NombreAvatar3='santiago';     
   $UrlAvatar3='35b_santiago.swf';
   $(".avatar2").html(avatar($UrlAvatar3,$NombreAvatar3));
  showAvatar($NombreAvatar3);//estado del avatar
  $("#nube3").html('Jimena, las tareas,  no se pueden adelantar en cualquier orden, a veces porque no disponemos sino de recursos humanos limitados o de equipos, y nos toca asignar gradualmente las tareas, otras veces porque algunas tareas o actividades tiene, obligatoriamente, que adelantarse antes que otras.');



}


var TercerEvento =function(){

 // $("#nubeDer5").find('.j').attr("id", "nube5");
 // $NombreAvatar3='jimena';     
 // $UrlAvatar3='35b_jimena.swf';
 // $(".avatar4").html(avatar($UrlAvatar3,$NombreAvatar3));
 //  showAvatar($NombreAvatar3);//estado del avatar
 //  $("#nube5").html(' ¿Entonces hay unas tareas mas importantes que otras?.');
 //  
 $("#nubeIzq3").find('.j').attr("id", "nube6");
 $NombreAvatar3='santiago';     
 $UrlAvatar3='35c_santiago.swf';
 $(".avatar2").html(avatar($UrlAvatar3,$NombreAvatar3));
  showAvatar($NombreAvatar3);//estado del avatar
  $("#nube6").html('Hay unas tareas que tienen que hacerse antes que otras, si se atrasan, se detiene todo el proyecto. A estas tareas se las llama '+ "<span id='content_tool1'><span id='tool1' class='capa' segSCORM='si' onMouseOver=MODCapa.muestra('capa1',false); onMouseOut='MODCapa.cierraLayer(event);'>tareas críticas</span></span>"+' y a la ruta o sucesión de tareas críticas, se les '+"<span id='content_tool2'><span id='tool2' class='capa' segSCORM='si' onMouseOver=MODCapa.muestra('capa2',true); onMouseOut='MODCapa.cierraLayer(event);'>ruta crítica</span></span>"+'.');
}



var CuartoEvento =function(){
  pulseUnico("tool1");
  $("#tool1").mouseover(function(){
    $(this).removeClass("pulse");

    pulseUnico("tool2");
    $("#tool2").mouseover(function(){
      $(this).removeClass("pulse");

      $("#c1").show();
      pulseUnico("c1");

      $("#c1").click(function(){
        $(this).removeClass("pulse");
        fin();
      });

    });

  });




  

}

var QuintoEvento =function(){




}



 // ¿Entonces hay unas tareas mas importantes que otras?
