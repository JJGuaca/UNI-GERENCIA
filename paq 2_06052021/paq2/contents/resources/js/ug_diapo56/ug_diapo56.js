var diapositiva=56;//diapositiva actual 
    var pre="PR_Mod"+fixedNumModulo+"Diapo"+diapositiva;// prefijo de variable[Mod2Diapo10]
    console.log("Carga de : [ "+pre+" ]");
//////////////////////////////////////
    $Tiempo_Avatar1="6"*Segundos;// X segundos primer tiempo $1 
    $Tiempo_Avatar2="25"*Segundos;// X segundos segundo tiempo $2 
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
      CargaAvatar();
      CargaAvatar2();
      allTime(); 
      if (localStorage[pre]==null) {
        bloquear("#ContenedorUg");
        setTimeout(function(){
          PrimerEvento();
          setTimeout(function(){
            SegundoEvento();
          setTimeout(function(){
            tercerEvento();
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

  $("#nubeIzq3").hide();

/**/
 $NombreAvatar4='jimena';     
  $UrlAvatar4='_jimena6corr.swf';
  $(".avatar4").html(avatar($UrlAvatar4,$NombreAvatar4));
  showAvatar($NombreAvatar4);//estado del avatar
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
  $("#nubeIzq3").show();
    $NombreAvatar2='santiago';     
  $UrlAvatar2='_santiago13corr.swf';
  $(".avatar2").html(avatar($UrlAvatar2,$NombreAvatar2));
  showAvatar($NombreAvatar2);//estado del avatar

}
/**
 * [SegundoEvento evento que ocurre Una vez El segundo Avatar habla]
 */
var SegundoEvento =function(){
// $("#nubeIzq3").find('.j').attr("id", "nube3");
    
//   $("#nube3").html("Jimena, en la practica la construcción del presupuesto se basa en la definición de dos ítems: costos directos y costos indirectos, así:"); 
//  $NombreAvatar2='santiago';  
//   $UrlAvatar2='64b_santiago.swf';
//   $(".avatar2").html(avatar($UrlAvatar2,$NombreAvatar2));
//   showAvatar($NombreAvatar2);
  //estado del avatar


}
var tercerEvento =function(){


 //window.parent.ok(diapositiva);


}