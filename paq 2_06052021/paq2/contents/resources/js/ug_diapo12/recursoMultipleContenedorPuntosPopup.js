  $(document).ready(function(){

    $("#arMultiplePuntosPopup5").css("z-index","-1");


    var contadorArticulos = 1;
    var art=0;
    var array =[];
    var numBotonesPuntos =0;

    var m = 0;

    // var alturaContenedorPrincipal = $("#contenidoContenedor>article").height()/2;

    $("#contenidoContenedor>article").css("display","none");

    $("#derecha").css("display", "none");
    $("#izquierda").css("display", "none");

    $(".botonContenedor").click(function(){

     $("#contenidoContenedor").css("display", "block");
     var idNum = $(this).attr("id").substring(2);

     aparecer($(this).attr("id").substring(2));

 
     // var color =  $(this).css("background-color");
     // $("#barrita").css("background-color", color);
     $("#barrita").removeClass();

     // $(".botonesPuntos>div").attr("id", "");
     $(".articulosPuntos>article").attr("id", "");
     mostrarContenedoresPuntos(idNum);
     contaArticulosPuntos(idNum);
     contarPuntos(idNum);


     // $(".botonesPuntos>div").css("background-color", color);
     // $(".subtituloMultiple").css("color", color);
     // $(".articulosPuntos>article>ul>li").css("color", color);


     $("#p0").click();
     if (numBotonesPuntos == 0) {
        $("#derecha").css("display", "none");
        $("#izquierda").css("display", "none");
        $(".botonesPuntos").css("display", "none");

    }else
    {
       // $("#derecha").css("display", "block");
       // $("#izquierda").css("display", "block");
       $(".botonesPuntos").css("display", "block");
   }

   m=1;
   $("#menu").click();

})

  function contarArticulos(numeroId)
  {
    $("#contenidoContenedor>article").attr("id","");
    $("#contenedorMultiplePuntosPopup"+numeroId+">#contenidoContenedor>article").each(function(i){
        $(this).attr("id","arMultiplePuntosPopup"+i);
    })
}

function aparecer(id){
   $("#derecha").css("display", "block");
   $("#izquierda").css("display", "block");
   $("#contenidoContenedor>article").css("display","none");
   $("#arMultiplePuntosPopup"+id).css({
    "display":"block"
});

}



function aparecerFlechas(a)
{

    console.log(numBotonesPuntos);
  a =a+1;
  
  if (a==1) {
      $("#izquierda").css("display", "none");

  }else
  {
      $("#izquierda").css("display", "block");
  }

  if (a > numBotonesPuntos) {
      $("#derecha").css("display", "none");
  }else
  {
      $("#derecha").css("display", "block"); 
  }
// alert(numBotonesPuntos);
}







contarArticulos(contadorArticulos);







/*Interaccion de contenedores con puntos*/


function contaArticulosPuntos(id)
{
    $("#articulosPuntos"+id+">article").each(function(i){
        $(this).attr("id", "articuloPunto"+i);
    })

}

function mostrarContenedoresPuntos(id)
{
    $(".articulosPuntos").css("display", "none");
    $("#articulosPuntos"+id).css("display", "block");
    contarPuntos();
    contarCajasPuntos();
    aparecerArticuloPunto(id);
}

function aparecerArticuloPunto(id){
    $(".articulosPuntos>article").css("display","none");
    $("#articuloPunto"+id).css({
        "display":"block"
    });
}

function contarPuntos(id)
{
    array = [];
    $("#botonesPuntos"+id+">div").each(function(j){
        $(this).attr("id", "p"+j);
        numBotonesPuntos = j;
        array.push($(this));
    })

}


var rutasbc0 = Array();
var rutasbc1 = Array();
var rutasbc2 = Array();
var rutasbc3 = Array();
var rutasbc4 = Array();
var rutasbc5 = Array();
var rutasbc6 = Array();
var rutasbc7 = Array();
var rutasbc8 = Array();
var rutasbc9 = Array();
var rutasbc10 = Array();


/*bc0*/
rutasbc0.push("../../contents/tema2/UGPP1_13.html");
rutasbc0.push("../../contents/tema2/UGPP1_13_1.html");
rutasbc0.push("../../contents/tema2/UGPP1_14.html");
rutasbc0.push("../../contents/tema2/UGPP1_14_1.html");


/*bc1*/

rutasbc1.push("../../contents/tema2/UGPP1_15.html");
rutasbc1.push("../../contents/tema2/UGPP1_17.html");
rutasbc1.push("../../contents/tema2/UGPP1_18.html");
rutasbc1.push("../../contents/tema2/UGPP1_19.html");
rutasbc1.push("../../contents/tema2/UGPP1_20.html");
rutasbc1.push("../../contents/tema2/UGPP1_21.html");
rutasbc1.push("../../contents/tema2/UGPP1_22.html");
rutasbc1.push("../../contents/tema2/UGPP1_23.html");
rutasbc1.push("../../contents/tema2/UGPP1_24.html");
rutasbc1.push("../../contents/tema2/UGPP1_24_2.html");
rutasbc1.push("../../contents/tema2/UGPP1_24_3.html");



/*bc2*/
rutasbc2.push("../../contents/tema2/UGPP1_25.html");
rutasbc2.push("../../contents/tema2/UGPP1_26.html");
rutasbc2.push("../../contents/tema2/UGPP1_27.html");
rutasbc2.push("../../contents/tema2/UGPP1_28.html");
rutasbc2.push("../../contents/tema2/UGPP1_29.html");
rutasbc2.push("../../contents/tema2/UGPP1_31.html");
rutasbc2.push("../../contents/tema2/UGPP1_32.html");
rutasbc2.push("../../contents/tema2/UGPP1_33.html");
rutasbc2.push("../../contents/tema2/UGPP1_34.html");
rutasbc2.push("../../contents/tema2/UGPP1_36.html");
rutasbc2.push("../../contents/tema2/UGPP1_37.html");
rutasbc2.push("../../contents/tema2/UGPP1_38.html");
rutasbc2.push("../../contents/tema2/UGPP1_39.html");
rutasbc2.push("../../contents/tema2/UGPP1_40.html");
rutasbc2.push("../../contents/tema2/UGPP1_45.html");
rutasbc2.push("../../contents/tema2/UGPP1_46.html");
rutasbc2.push("../../contents/tema2/UGPP1_47.html");
rutasbc2.push("../../contents/tema2/UGPP1_48.html");
rutasbc2.push("../../contents/tema2/UGPP1_49.html");
rutasbc2.push("../../contents/tema2/UGPP1_50.html");
rutasbc2.push("../../contents/tema2/UGPP1_51.html");

/*bc3*/

rutasbc3.push("../../contents/tema2/UGPP1_53.html");
rutasbc3.push("../../contents/tema2/UGPP1_53_1.html");
rutasbc3.push("../../contents/tema2/UGPP1_54.html");
rutasbc3.push("../../contents/tema2/UGPP1_55.html");
rutasbc3.push("../../contents/tema2/UGPP1_56.html");
rutasbc3.push("../../contents/tema2/UGPP1_57.html");
rutasbc3.push("../../contents/tema2/UGPP1_59.html");
rutasbc3.push("../../contents/tema2/UGPP1_61.html");
rutasbc3.push("../../contents/tema2/UGPP1_63.html");
rutasbc3.push("../../contents/tema2/UGPP1_65.html");
rutasbc3.push("../../contents/tema2/UGPP1_65_1.html");
rutasbc3.push("../../contents/tema2/UGPP1_65_2.html");
rutasbc3.push("../../contents/tema2/UGPP1_65_3.html");
rutasbc3.push("../../contents/tema2/UGPP1_65_5.html");
rutasbc3.push("../../contents/tema2/UGPP1_65_7.html");
rutasbc3.push("../../contents/tema2/UGPP1_65_8.html");
rutasbc3.push("../../contents/tema2/UGPP1_65_9.html");
// rutasbc3.push("../../contents/tema2/UGPP1_66.html");

/*bc4*/
rutasbc4.push("../../contents/tema2/UGPP1_67.html");
rutasbc4.push("../../contents/tema2/UGPP1_68.html");
rutasbc4.push("../../contents/tema2/UGPP1_69.html");
rutasbc4.push("../../contents/tema2/UGPP1_70.html");
rutasbc4.push("../../contents/tema2/UGPP1_71.html");
rutasbc4.push("../../contents/tema2/UGPP1_71_1.html");
rutasbc4.push("../../contents/tema2/UGPP1_71_2.html");

// rutasbc4.push("../../contents/tema2/UGPP1_72.html");
// rutasbc4.push("../../contents/tema2/UGPP1_73.html");
rutasbc4.push("../../contents/tema2/UGPP1_73_1.html");
rutasbc4.push("../../contents/tema2/UGPP1_73_2.html");
// rutasbc4.push("../../contents/tema2/UGPP1_73_3.html");
// rutasbc4.push("../../contents/tema2/UGPP1_73_4.html");



// rutasbc4.push("../../contents/tema2/UGPP1_74.html");


/*bc5*/

rutasbc5.push("../../contents/tema2/UGPP1_75.html");
rutasbc5.push("../../contents/tema2/UGPP1_76.html");
rutasbc5.push("../../contents/tema2/UGPP1_77.html");
rutasbc5.push("../../contents/tema2/UGPP1_81.html");
rutasbc5.push("../../contents/tema2/UGPP1_81_1.html");
rutasbc5.push("../../contents/tema2/UGPP1_81_2.html");
rutasbc5.push("../../contents/tema2/UGPP1_81_3.html");
// rutasbc5.push("../../contents/tema2/UGPP1_81_4.html");
// rutasbc5.push("../../contents/tema2/UGPP1_82.html");

/*bc6*/
rutasbc6.push("../../contents/tema2/UGPP1_83.html");
rutasbc6.push("../../contents/tema2/UGPP1_84.html");
rutasbc6.push("../../contents/tema2/UGPP1_85.html");
rutasbc6.push("../../contents/tema2/UGPP1_86.html");
rutasbc6.push("../../contents/tema2/UGPP1_87_1.html");
rutasbc6.push("../../contents/tema2/UGPP1_87_2.html");
rutasbc6.push("../../contents/tema2/UGPP1_87_3.html");
rutasbc6.push("../../contents/tema2/UGPP1_87.html");
// rutasbc6.push("../../contents/tema2/UGPP1_88.html");
// rutasbc6.push("../../contents/tema2/UGPP1_89.html");
// rutasbc6.push("../../contents/tema2/UGPP1_90.html");
/*bc7*/
rutasbc7.push("../../contents/tema2/UGPP1_91.html");
rutasbc7.push("../../contents/tema2/UGPP1_92.html");
rutasbc7.push("../../contents/tema2/UGPP1_93.html");
rutasbc7.push("../../contents/tema2/UGPP1_94.html");
rutasbc7.push("../../contents/tema2/UGPP1_95.html");
rutasbc7.push("../../contents/tema2/UGPP1_96.html");
rutasbc7.push("../../contents/tema2/UGPP1_97.html");

rutasbc7.push("../../contents/tema2/UGPP1_97_1.html");
rutasbc7.push("../../contents/tema2/UGPP1_97_2.html");
rutasbc7.push("../../contents/tema2/UGPP1_97_3.html");
rutasbc7.push("../../contents/tema2/UGPP1_97_4.html");


rutasbc7.push("../../contents/tema2/UGPP1_98.html");
rutasbc7.push("../../contents/tema2/UGPP1_98_1.html");
rutasbc7.push("../../contents/tema2/UGPP1_98_2.html");
rutasbc7.push("../../contents/tema2/UGPP1_98_3.html");
rutasbc7.push("../../contents/tema2/UGPP1_98_4.html");
rutasbc7.push("../../contents/tema2/UGPP1_98_5.html");

/*bc8*/
rutasbc8.push("../../contents/tema2/UGPP1_99.html");
// rutasbc8.push("../../contents/tema2/UGPP1_100.html");
rutasbc8.push("../../contents/tema2/UGPP1_101.html");
rutasbc8.push("../../contents/tema2/UGPP1_102.html");
/*bc9*/

rutasbc9.push("../../contents/tema2/UGPP1_103.html");
rutasbc9.push("../../contents/tema2/UGPP1_104.html");
rutasbc9.push("../../contents/tema2/UGPP1_104_1.html");
rutasbc9.push("../../contents/tema2/UGPP1_105.html");
// rutasbc9.push("../../contents/tema2/UGPP1_106.html");
// rutasbc9.push("../../contents/tema2/UGPP1_107.html");




$(".botonesPuntos>div").click(function(){
    var idPunto = parseInt($(this).attr("id").substring(1)); 
    $(".botonesPuntos>div").removeClass("pPuntoActivo");
    $(this).addClass("pPuntoActivo");
    aparecerArticuloPunto(idPunto);
    $(".articulosPuntos>article").css("display", "none");
    $("#articuloPunto"+idPunto).css("display", "block");

    art = idPunto;

    var alturaArticleActivo = $("#articuloPunto"+idPunto).height()/2;
    // var alturaTotal = alturaContenedorPrincipal- alturaArticleActivo;
    // $("#articuloPunto"+idPunto).css("margin-top", alturaTotal - 20);
    aparecerFlechas(art);
    


    if($("#arMultiplePuntosPopup0").css("display") == "block")
    {
      $(".frame").attr("src", "");
      $("#framec1p"+idPunto).attr("src", rutasbc0[idPunto]);

      var n = rutasbc0.length-1;
      if (n == idPunto) {
        $("#bc1").show();
        pulseUnico("bc1");
      }
    }

    if($("#arMultiplePuntosPopup1").css("display") == "block")
    {
      $(".frame").attr("src", "");
      $("#framec2p"+idPunto).attr("src", rutasbc1[idPunto]);
        var n = rutasbc1.length-1;
      if (n == idPunto) {
        $("#bc2").show();
        pulseUnico("bc2");
      }
    }

     if($("#arMultiplePuntosPopup2").css("display") == "block")
    {
      $(".frame").attr("src", "");
      $("#framec3p"+idPunto).attr("src", rutasbc2[idPunto]);
        var n = rutasbc2.length-1;
      if (n == idPunto) {

        $("#bc3").show();
        pulseUnico("bc3");
      }
    }

      if($("#arMultiplePuntosPopup3").css("display") == "block")
    {
      $(".frame").attr("src", "");
      $("#framec4p"+idPunto).attr("src", rutasbc3[idPunto]);
        var n = rutasbc3.length-1;
      if (n == idPunto) {
        $("#bc4").show();
            pulseUnico("bc4");

      }

    }

     if($("#arMultiplePuntosPopup4").css("display") == "block")
    {
      $(".frame").attr("src", "");
      $("#framec5p"+idPunto).attr("src", rutasbc4[idPunto]);
        var n = rutasbc4.length-1;
      if (n == idPunto) {
        $("#bc5").show();

        pulseUnico("bc5");
      }
    }
     if($("#arMultiplePuntosPopup5").css("display") == "block")
    {
      $(".frame").attr("src", "");
      $("#framec6p"+idPunto).attr("src", rutasbc5[idPunto]);
        var n = rutasbc5.length-1;
      if (n == idPunto) {
        $("#bc6").show();

        pulseUnico("bc6");
      }
    }
     if($("#arMultiplePuntosPopup6").css("display") == "block")
    {
      $(".frame").attr("src", "");
      $("#framec7p"+idPunto).attr("src", rutasbc6[idPunto]);
        var n = rutasbc6.length-1;
      if (n == idPunto) {
        $("#bc7").show();

        pulseUnico("bc7");
      }
    }
     if($("#arMultiplePuntosPopup7").css("display") == "block")
    {
      $(".frame").attr("src", "");
      $("#framec8p"+idPunto).attr("src", rutasbc7[idPunto]);
        var n = rutasbc7.length-1;
      if (n == idPunto) {
        $("#bc8").show();

        pulseUnico("bc8");
      }
    }
     if($("#arMultiplePuntosPopup8").css("display") == "block")
    {
      $(".frame").attr("src", "");
      $("#framec9p"+idPunto).attr("src", rutasbc8[idPunto]);
        var n = rutasbc8.length-1;
      if (n == idPunto) {
        $("#bc9").show();
        pulseUnico("bc9");
      }
    }
     if($("#arMultiplePuntosPopup9").css("display") == "block")
    {
      $(".frame").attr("src", "");
      $("#framec10p"+idPunto).attr("src", rutasbc9[idPunto]);
        var n = rutasbc9.length-1;
      if (n == idPunto) {
        $("#bc10").show();
        pulseUnico("bc10");
      }
    }
   


})

function contarCajasPuntos()
{
    $("#contenidoContenedor>article>div").each(function(i){
        console.log("Cajas "+i);
    })
}


$("#derecha").click(function(){
    numBotones = parseInt(numBotonesPuntos);
    if (art < numBotones) {
        art = art+1;
        array[art].click();
        
    };
$("#botonesContenedorMultiplePuntosPopup").hide(1000);
   $(this).removeClass("pulse");
})

$("#izquierda").click(function(){

  if (art>0) {
    art=art-1;
    array[art].click();
   

};
 
$("#botonesContenedorMultiplePuntosPopup").hide(1000);
})


$("#botonesContenedorMultiplePuntosPopup").hide();


$("#menu").click(function(){
  $(this).removeClass("pulse");
  if (m == 0) {
$("#botonesContenedorMultiplePuntosPopup").show(1000);
  m=1;
}else
{
$("#botonesContenedorMultiplePuntosPopup").hide(1000);
m=0;
}


})


})

  