var diapositiva=26;//diapositiva actual 
    var pre="PR_Mod"+fixedNumModulo+"Diapo"+diapositiva;// prefijo de variable[Mod2Diapo10]
    console.log("Carga de : [ "+pre+" ]");
//////////////////////////////////////
    $Tiempo_Avatar1="5"*Segundos;// X segundos primer tiempo $1 
    $Tiempo_Avatar2="3"*Segundos;// X segundos segundo tiempo $2 
    $Tiempo_Avatar3="8"*Segundos;// X segundos segundo tiempo $2 
    $Tiempo_Avatar4="4"*Segundos;// X segundos segundo tiempo $2 
    $Tiempo_Avatar5="12"*Segundos;
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
      //PrimerEvento();
      setTimeout(function(){
        //SegundoEvento();

        setTimeout(function(){
          //TercerEvento();

          setTimeout(function(){
            //CuartoEvento();
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
var allTime =function(){
/////////////////////////////// 
  hideAvatar($NombreAvatar1);//estado del avatar
  hideAvatar($NombreAvatar2);//estado del avatar
  hideAvatar($NombreAvatar3);//estado del avatar
  hideAvatar($NombreAvatar4);//estado del avatar
/////////////////////////////  
}

/**
 * [allTime elementos que siempre apareceran sin importar si es por primera vez o no]
 
 var allTime =function(){
/////////////////////////////// 
  hideAvatar($NombreAvatar1);//estado del avatar
  hideAvatar($NombreAvatar2);//estado del avatar
  hideAvatar($NombreAvatar3);//estado del avatar
  hideAvatar($NombreAvatar4);//estado del avatar
/////////////////////////////  
}*/
/*
$NombreAvatar2='santiago';     
$UrlAvatar2='32a_santiago.swf';
$(".avatar2").html(avatar($UrlAvatar2,$NombreAvatar2));
  showAvatar($NombreAvatar2);//estado del avatar

  /**/



/////////////////////////////
/*}
/**
 * [PrimerEvento evento que ocurre Una vez El primer Avatar habla]
 
 var PrimerEvento =function(){
//////////////////////////////  
  desbloquear("#ContenedorUg");//desbloqueo de 
/////////////////////////////// 
$("#nubeDer4").show();


$NombreAvatar4='jimena';     
$UrlAvatar4='32a_jimena.swf';
$(".avatar4").html(avatar($UrlAvatar4,$NombreAvatar4));
  showAvatar($NombreAvatar4);//estado del avatar



}
*/
/**
 * [SegundoEvento evento que ocurre Una vez El segundo Avatar habla]
 
 var SegundoEvento =function(){
  $("#nubeIzq2").find('.j').attr("id", "nube3");
  $NombreAvatar3='santiago';     
  $UrlAvatar3='32b_santiago.swf';
  $(".avatar2").html(avatar($UrlAvatar3,$NombreAvatar3));
  showAvatar($NombreAvatar3);//estado del avatar
  $("#nube3").html('Jimena, se debe tener en cuenta que las actividades o tareas que se definan  puedan asignarse a responsables claramente delimitados.');
}

var TercerEvento =function(){
 $("#nubeDer4").find('.j').attr("id", "nube4");
 $NombreAvatar3='jimena';     
 $UrlAvatar3='32b_jimena.swf';
 $(".avatar4").html(avatar($UrlAvatar3,$NombreAvatar3));
  showAvatar($NombreAvatar3);//estado del avatar
  $("#nube4").html(' ¿Hay un número máximo de personas para verificar  que se cumpla la tarea?');

}



var CuartoEvento =function(){
$("#jimena200").attr('src','../resources/avatares/JIMENA_BODY/_jimena Body_HTML5 Canvas.html');
  $("#nubeIzq2").find('.j').attr("id", "nube5");
$("nube5").html('Jimena, para el caso de ***** solo es un responsable el que tiene que reportar el cumplimiento de la tarea, pero no necesariamente esta regla se aplica para proyectos en otras entidades.');
$("#jimena").attr('src','../resourse/avatares html/audios/M2/32b_santiago.mp3');
}


//var CuartoEvento =function(){
 //$("#nubeIzq2").find('.j').attr("id", "nube5");
 //$NombreAvatar3='jimena';
   //<script src='../resourse/avatares html/audios/M2/32b_santiago.mp3'   
 //$UrlAvatar3='32c_santiago.swf';
 //$(".avatar2").html(avatar($UrlAvatar3,$NombreAvatar3));
  //showAvatar($NombreAvatar3);//estado del avatar
  //$("#nube5").html('Jimena, para el caso de ***** solo es un responsable el que tiene que reportar el cumplimiento de la tarea, pero no necesariamente esta regla se aplica para proyectos en otras entidades.');

//}

var QuintoEvento =function(){
 //window.parent.ok(diapositiva);
}
*/