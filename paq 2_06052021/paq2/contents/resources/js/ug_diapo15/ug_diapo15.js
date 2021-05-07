var diapositiva=15;//diapositiva actual 
    var pre="PR_Mod"+fixedNumModulo+"Diapo"+diapositiva;// prefijo de variable[Mod2Diapo10]
    console.log("Carga de : [ "+pre+" ]");
//////////////////////////////////////
    $Tiempo_Avatar1="29"*Segundos;// X segundos primer tiempo $1 
    $Tiempo_Avatar2="15"*Segundos;// X segundos segundo tiempo $2 
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
     
     $("#jimena3").hide();
     $("#nubeDer4").hide();
      allTime(); 
      if (localStorage[pre]==null) {
        bloquear("#ContenedorUg");
        setTimeout(function(){
          PrimerEvento();
          setTimeout(function(){
            SegundoEvento();
            setTimeout(function(){
            TercerEvento();
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
    $NombreAvatar1='javier';     
  $UrlAvatar1='_santiagonuevogerencia2.swf';
  $(".avatar1").html(avatar($UrlAvatar1,$NombreAvatar1));
  showAvatar($NombreAvatar1);//estado del avatar
/**/

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

  $("#jimena3").show();
     $("#nubeDer4").show();

       $NombreAvatar4='jimena';     
  $UrlAvatar4='_jimenaBOLI1.swf';
  $(".avatar4").html(avatar($UrlAvatar4,$NombreAvatar4));
  showAvatar($NombreAvatar4);//estado del avatar
}
/**
 * [SegundoEvento evento que ocurre Una vez El segundo Avatar habla]
 */
var SegundoEvento =function(){


  // $("#nubeIzq2").find('.j').attr("id", "nube3");
  // $NombreAvatar3='javier';     
  // $UrlAvatar3='20_santiago.swf';
  // $(".avatar1").html(avatar($UrlAvatar3,$NombreAvatar3));
  // showAvatar($NombreAvatar3);//estado del avatar
  // $("#nube3").html("En el grupo de proceso de planificacion del área de conocimiento de gestión del alcance se adelantan los siguientes 3 procesos, planificar la gestion, deifinir el alcance y crear Estructura Desagregada del Trabajo. El primer proceso corresponde a establecer las reglas para definir el alcance asi como para modificarlo durante la ejecución del proyecto."); 

}


var TercerEvento =function(){
 //window.parent.ok(diapositiva);

}