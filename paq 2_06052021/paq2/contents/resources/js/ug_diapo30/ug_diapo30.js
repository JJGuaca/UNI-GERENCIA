var diapositiva=30;//diapositiva actual 
    var pre="PR_Mod"+fixedNumModulo+"Diapo"+diapositiva;// prefijo de variable[Mod2Diapo10]
    console.log("Carga de : [ "+pre+" ]");
//////////////////////////////////////
    $Tiempo_Avatar1="10"*Segundos;// X segundos primer tiempo $1 
    $Tiempo_Avatar2="5"*Segundos;// X segundos segundo tiempo $2 
    $Tiempo_Avatar3="26"*Segundos;// X segundos segundo tiempo $2 
    $Tiempo_Avatar4="3"*Segundos;// X segundos segundo tiempo $2 
    $Tiempo_Avatar5="2"*Segundos;
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
$UrlAvatar2='37a_santiago.swf';
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


/**/
$NombreAvatar4='jimena';     
$UrlAvatar4='37a_jimena.swf';
$(".avatar4").html(avatar($UrlAvatar4,$NombreAvatar4));
  showAvatar($NombreAvatar4);//estado del avatar
  /**/

  $("#nubeDer4").show();






}
/**
 * [SegundoEvento evento que ocurre Una vez El segundo Avatar habla]
 */
 var SegundoEvento =function(){

  $("#nubeIzq3").find('.j').attr("id", "nube3");
  $NombreAvatar3='santiago';     
  $UrlAvatar3='37b_santiago.swf';
  $(".avatar2").html(avatar($UrlAvatar3,$NombreAvatar3));
  showAvatar($NombreAvatar3);//estado del avatar
  $("#nube3").html('Jimena, esta es un excelente pregunta. Se debe evaluar el aspecto financiero derivado de las decisiones que se tomen en relación al tiempo. Si se contratan créditos por ejemplo, es necesario tratar de obtener ingresos lo mas rápido posible y hacer gastos lo mas tarde posible, para reducir los costos financieros. También tendremos limitaciones para comenzar algunas actividades, según dispongamos de los desembolsos de recursos.');


}


var TercerEvento =function(){

  $("#nubeDer4").find('.j').attr("id", "nube4");
  $NombreAvatar3='jimena';     
  $UrlAvatar3='37b_jimena.swf';
  $(".avatar4").html(avatar($UrlAvatar3,$NombreAvatar3));
  showAvatar($NombreAvatar3);//estado del avatar
  $("#nube4").html('Ahora entiendo.');


}


var CuartoEvento =function(){

  $("#nubeIzq3").find('.j').attr("id", "nube5");
  $NombreAvatar3='santiago';     
  $UrlAvatar3='37c_santiago.swf';
  $(".avatar2").html(avatar($UrlAvatar3,$NombreAvatar3));
  showAvatar($NombreAvatar3);//estado del avatar
  $("#nube5").html('Jimena, adicional a esto es importante hacer distribución de las cargas de tiempo y esfuerzo, a los recursos y personal disponible.');

}


var QuintoEvento = function()
{
  //window.parent.ok(diapositiva);
}