var diapositiva=0;//diapositiva actual 
var pre="PR_Mod"+fixedNumModulo+"Diapo"+diapositiva;// prefijo de variable[Mod2Diapo10]
console.log('Carga de : [ '+pre+' ]');
//////////////////////////////////////
$Tiempo_Avatar1='0'*Segundos;// X segundos primer tiempo $1 
$Tiempo_Avatar2='0'*Segundos;// X segundos segundo tiempo $2 
$Tiempo_Avatar3='0'*Segundos;// X segundos segundo tiempo $2 
$Tiempo_Avatar4='0'*Segundos;// X segundos segundo tiempo $2 
$NombreAvatar1='';//Nombre del primer avatar[SOLO SE MANEJAN MINUSCULAS]
$NombreAvatar2='';//Nombre del segundo avatar
$NombreAvatar3='';//Nombre del segundo avatar
$NombreAvatar4='';//Nombre del segundo avatar
$UrlAvatar1='';//Nombre de archivo de Primer avatar
$UrlAvatar2='';//Nombre de archivo de Primer avatar
$UrlAvatar3='';//Nombre de archivo de Primer avatar
$UrlAvatar4='';//Nombre de archivo de Primer avatar
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
    bloquear('#ContenedorUg');
    setTimeout(function(){
      PrimerEvento();
      setTimeout(function(){
        SegundoEvento();
      },$Tiempo_Avatar2);
    }, $Tiempo_Avatar1);
  }else{
   visto('.btn',varColorLinkVisitado);
   $('.btn').click(function(event) {
    var color=ColorLinkVisitadoPass;
    $(this).css('color',color+' !important').attr('style','color:'+color+'!important');
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
 temp();
},1000);
$("#editor").hide();
$("#cuadricula").hide();
$("#edita").click(function(event) {
  $("#editor").hide(1000);
  $("#editor").show(1000);
  localStorage['editorHtml']='';
  localStorage['ideditaHtml']="";

});
$("#ciereX").click(function (event) {
  $("#editor").hide(1000);
})
bloquear("#botonera");
$("#refresh").hide().click(function (event) {
  $(this).hide(1000);
});
$("#NuevoBoton").click(function(){
  $("#refresh").show();
})
$('#diapo').change(function (event) {
 desbloquear("#botonera");
})
/////////////////////////////
}
function temp(){
  $("#javier").click(function(event) {
    $NombreAvatar1='javier';     
    $UrlAvatar1='javier.swf';
    $(".avatar1").html(avatar($UrlAvatar1,$NombreAvatar1));
    hideAvatar($NombreAvatar1);//estado del avatar
    $(this).hide();
    $("#javierP").hide();
  });
  $("#santiago").click(function(event) {
    $NombreAvatar2='santiago';     
    $UrlAvatar2='santiago.swf';
    $(".avatar2").html(avatar($UrlAvatar2,$NombreAvatar2));
    hideAvatar($NombreAvatar2);//estado del avatar
    $(this).hide();
    $("#santiagoP").hide();
  });
  $("#victoria").click(function(event) {
    $NombreAvatar3='victoria';     
    $UrlAvatar3='victoria.swf';
    $(".avatar3").html(avatar($UrlAvatar3,$NombreAvatar3));
    hideAvatar($NombreAvatar3);//estado del avatar
    $(this).hide();
    $("#victoriaP").hide(); 
  }); 
  $("#jimena").click(function(event) {
    $NombreAvatar4='jimena';     
    $UrlAvatar4='jimena.swf';
    $(".avatar4").html(avatar($UrlAvatar4,$NombreAvatar4));
    hideAvatar($NombreAvatar4);//estado del avatar
    $(this).hide();
    $("#jimenaP").hide();

  });   
  // --------- //
  $("#javierP").click(function(event) {
    $NombreAvatar1='javier2';     
    $UrlAvatar1='javier2.swf';
    $(".avatar1").html(avatar2($UrlAvatar1,$NombreAvatar1));
    hideAvatar($NombreAvatar1);//estado del avatar
    $(this).hide();
    $("#javier").hide();
  });
  $("#santiagoP").click(function(event) {
    $NombreAvatar2='santiago2';     
    $UrlAvatar2='santiago2.swf';
    $(".avatar2").html(avatar2($UrlAvatar2,$NombreAvatar2));
    hideAvatar($NombreAvatar2);//estado del avatar
    $(this).hide();
    $("#santiago").hide();
  });
  $("#victoriaP").click(function(event) {
    $NombreAvatar3='victoria2';     
    $UrlAvatar3='victoria2.swf';
    $(".avatar3").html(avatar2($UrlAvatar3,$NombreAvatar3));
    hideAvatar($NombreAvatar3);//estado del avatar
    $(this).hide();
    $("#victoria").hide();
  }); 
  $("#jimenaP").click(function(event) {
    $NombreAvatar4='jimena2';     
    $UrlAvatar4='jimena2.swf';
    $(".avatar4").html(avatar2($UrlAvatar4,$NombreAvatar4));
    hideAvatar($NombreAvatar4);//estado del avatar
    $(this).hide();
    $("#jimena").hide();
  });   
}
/**
 * [PrimerEvento evento que ocurre Una vez El primer Avatar habla]
 */
 var PrimerEvento =function(){
//////////////////////////////  
  desbloquear('#ContenedorUg');//desbloqueo de 
/////////////////////////////// 
}
/**
 * [SegundoEvento evento que ocurre Una vez El segundo Avatar habla]
 */
 var SegundoEvento =function(){

 }
 var guardarHT =function(){
                $(localStorage['ideditaHtml']).find("#editable").html(localStorage['editorHtml']);

 }