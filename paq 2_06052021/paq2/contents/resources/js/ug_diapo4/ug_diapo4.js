function avatar1(){
  $('#santiago200').attr('src','../resources/html/diapo3/avatar1.html');
}
function avatar2(){
  setTimeout(function(){
    $('#javier200').attr('src','../resources/html/diapo3/avatar2.html');
    $('#nubeIzq5').find('.j').attr("id","nub2");
    $('#nub2').html('Así es Santiago, pero para poder'+
      ' entenderlo mejor y ver la estructura , lo presentaremos'+
      ' de ahora en adelante a través de la siguiente gráfica, '+
      'en donde podremos observar lo siguiente:');
    var nub= document.getElementById('nubeIzq5');
    var nub2= document.getElementById('izq');
    nub.style.cssText='left: 47%; height: auto;';
    nub2.style.cssText='transform: rotate(176deg);left: 87%;top: 38%;';
    $("#s1").click();
  },29000);

}

var diapositiva=4;//diapositiva actual 
    var pre="PR_Mod"+fixedNumModulo+"Diapo"+diapositiva;// prefijo de variable[Mod2Diapo10]
    console.log("Carga de : [ "+pre+" ]");
//////////////////////////////////////
    $Tiempo_Avatar1="31"*Segundos;// X segundos primer tiempo $1 
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
  CargaAvatar();
  CargaAvatar2();
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
  
     

}/*

 $NombreAvatar2='santiago';     
  $UrlAvatar2='7_santiago.swf';
  $(".avatar2").html(avatar($UrlAvatar2,$NombreAvatar2));
  showAvatar($NombreAvatar2);//estado del avatar
  /////////////////////////////
  /* Ocultar nube derecha 
  $("#nubeDer4").hide();
  /////////////////////////////
}*/
/**
 * [PrimerEvento evento que ocurre Una vez El primer Avatar habla]
 
var PrimerEvento =function(){
//////////////////////////////  
  desbloquear("#ContenedorUg");//desbloqueo de 
/////////////////////////////// 
  $NombreAvatar1='javier';     
  $UrlAvatar1='7_javier.swf';
  $(".avatar1").html(avatar($UrlAvatar1,$NombreAvatar1));
  showAvatar($NombreAvatar1);//estado del avatar
  /* Mostrar nube derecha 
  $("#nubeDer4").show();
}*/
/**
 * [SegundoEvento evento que ocurre Una vez El segundo Avatar habla]
 */
var SegundoEvento =function(){
  /* Dar clic en s1 para llenar el 100% de la Pila */ 
  $("#s1").click();
}
