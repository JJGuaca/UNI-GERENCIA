var diapositiva=18;//diapositiva actual 
    var pre="PR_Mod"+fixedNumModulo+"Diapo"+diapositiva;// prefijo de variable[Mod2Diapo10]
    console.log("Carga de : [ "+pre+" ]");
//////////////////////////////////////
    $Tiempo_Avatar1="20"*Segundos;// X segundos primer tiempo $1 
    $Tiempo_Avatar2="9"*Segundos;// X segundos segundo tiempo $2 
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
      
      $("#nubeIzq4").hide();
      $("#jimena2").hide();

      allTime(); 
      if (localStorage[pre]==null) {
        bloquear("#ContenedorUg");
       
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

 setTimeout(function(){
          PrimerEvento();
          setTimeout(function(){
            SegundoEvento();
            setTimeout(function(){
            TercerEvento();
          },$Tiempo_Avatar3);
          },$Tiempo_Avatar2);
}, $Tiempo_Avatar1);


    $NombreAvatar2='santiago';     
  $UrlAvatar2='23a_santiago.swf';
  $(".avatar2").html(avatar($UrlAvatar2,$NombreAvatar2));
  showAvatar($NombreAvatar2);//estado del avatar




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
      $("#jimena2").show();
/**/
  $NombreAvatar4='jimena';     
  $UrlAvatar4='18_jimena.swf';
  $(".avatar4").html(avatar($UrlAvatar4,$NombreAvatar4));
  showAvatar($NombreAvatar4);//estado del avatar
/**/

}
/**
 * [SegundoEvento evento que ocurre Una vez El segundo Avatar habla]
 */
var SegundoEvento =function(){

  $("#nubeDer3").find('.j').attr("id", "nube3");
  $NombreAvatar3='santiago';     
  $UrlAvatar3='23b_santiago.swf';
  $(".avatar2").html(avatar($UrlAvatar3,$NombreAvatar3));
  showAvatar($NombreAvatar3);//estado del avatar
  $("#nube3").html('Jimena, la programación adecuada del alcance me permite determinar cuándo se producirán los egresos por la compra de bienes y servicios, contratos y cuando se ejecutan los desembolsos por el avance en el recibo de los entregables.');

}


var TercerEvento =function(){

 //window.parent.ok(diapositiva);
}



