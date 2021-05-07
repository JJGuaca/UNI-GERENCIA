$(document).ready(function(){

	var cajas = 0;

  /*variable button*/
  var x = "";

  var imgCajaPopPuntos = Array();


  $("#contenedorGrafico>div>div.cajaPopPunto").each(function(i){
    imgCajaPopPuntos.push(this);
  });

  var tamano = imgCajaPopPuntos.length;

  $("#contenedorGrafico>div").each(function(i){
    cajas++;
  })

  /*Interaccion de cajas*/

  var cont=0;
  var numBotones= 0;
  var idCajaPopPunto="";
  var art=0;
  var array =[];


  $(".cajaPopPunto").click(function()
  {
    idCajaPopPunto=$(this).attr("id");
    idCajaPopPunto = idCajaPopPunto;
    mostrarPop(idCajaPopPunto);

    $("#contenidoTexto>article#ar0").css("display", "block");
  centrarVertical(art);
    
  })

  $("#botones>div").click(function(){
    var idBoton = $(this).attr("id").substring(1);
    var idArticulo = "#ar"+idBoton;
    $("#contenidoTexto>article").css("display", "none");
    $(idArticulo).css("display","block");

    $("#botones>div").removeClass("pActual");
    $(this).addClass("pActual");
    art = parseInt(idBoton);
    aparecerFlechas(art);
  centrarVertical(art);

  })



  function mostrarPop(idCajaPopPunto)
  {
    $("#pop").css("display", "block");
    $("#principal").css("display", "block");

    var numeroId = idCajaPopPunto.substring(1);
    var selector = "#cajaPop"+numeroId;


    var colorTitulo =  $("#cajaPop"+numeroId+">#contenidoTexto>article>.tituloCajaPopPuntos").css("color");


    $(".cajasPop").removeClass("pActivo");
    $(selector).addClass("pActivo");
    contarBotones();

    contarArticulos(numeroId);

    $("#cajaPop"+numeroId+">#botones>div").css("background-color", colorTitulo);


  }

  function contarBotones()
  {
    array = [];
    numBotones =0;
    $(".pActivo>#botones>div").each(function(b){
      array.push($(this));
      $(this).attr("id", "b"+b);
      numBotones=numBotones+1;
    })

    array[0].click();
    if (numBotones == 1) {
      $("#derecha_caja").css("display", "none");
      $("#izquierda_caja").css("display", "none");
      $("#botones>div").css("display", "none");
    }else
    {   
      $("#botones>div").css("display", "inline-block");  
    }
  }

  function contarArticulos(numeroId)
  {
    $("#contenidoTexto>article").attr("id","");
    $("#cajaPop"+numeroId+">#contenidoTexto>article").each(function(i){
      $(this).attr("id","ar"+i);
    })
  }


  $("#equis").click(function(){
    $("#pop").css("display", "none");
    $("#principal").css("display", "none");
  });


  function aparecer(id){
    $("#contenidoTexto>article").css("display", "none");
    $("#ar"+id).css({
      "display":"block"
    });

  }


  function centrarVertical(id)
{
  var alto = $("#pop").height();
  var mitad = alto/2;
  var numeroId = idCajaPopPunto.substring(1);
  var altoArticle = $("#cajaPop"+numeroId+">#contenidoTexto>article#ar"+id+">p").height();
  var altoArticleMitad = altoArticle/2; 
  var total= (mitad-altoArticleMitad)-(48)+"px";
  $("#cajaPop"+numeroId+">#contenidoTexto>article#ar"+id+">p").css("margin-top", total);  

}




  function stopAvatar()
{
  $data=$("#santiagoP1>div>object>#ava").attr('data');
$("#santiagoP1>div>object>#ava").attr('data',$data+'?play=false');
$("#santiagoP1>div>object>#ava>param[name=play]").attr('value', 'false');
console.log('video detenido');

}



  $("#derecha_caja").click(function(){
    numBotones = parseInt(numBotones);
    if (art<numBotones-1) {
      art=art+1;
      array[art].click();
      aparecer(art);
    };
  

  })

  $("#izquierda_caja").click(function(){
    if (art>=1) {
      art=art-1;
      array[art].click();
      aparecer(art);
    };


  })



function aparecerFlechas(a)
{
  a =a+1;
  if (a==1) {
      $("#izquierda_caja").css("display", "none");

  }else
  {
      $("#izquierda_caja").css("display", "block");
  }

  if (a == numBotones) {
      $("#derecha_caja").css("display", "none");
  }else
  {
      $("#derecha_caja").css("display", "block"); 
  }
}




  /*function id button close*/
  $(".cajaPopPunto").click(function(event){
    // x = $(this).attr("id");
  });

  $("#equis").click(function(event){

    switch(x){

  }

  
})


$(document).keyup(function(e) {
  if (e.keyCode == 27)
  {
      $("#equis").click();
  }

});
 
})