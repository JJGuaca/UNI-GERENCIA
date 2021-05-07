$(function() {
  /*objetos con la carecteristica de arrastre*/
  $( "#draggable1,#draggable2,#draggable3,#draggable4,#draggable5" )
  .draggable({ 
      cancel: "a.ui-icon", // clicking an icon won't initiate dragging
      revert: "invalid", // when not dropped, the item will revert back to its initial position
      containment: "document",
      helper: "clone",
      cursor: "move",
      revert: "invalid"
    });/*propiedad de arrastre*/
  /*objetos con la carecteristica de arrastre*/
  $( "#draggable-nonvalid" )
  .draggable({ 
    revert: "valid",
    containment: "document",
    helper: "clone",
    cursor: "move"
  });/*propiedad de arrastre*/

  $( "#droppable1" ).droppable({
    accept: "#draggable1",
    activeClass: "ui-state-hover",
    hoverClass: "ui-state-active",
    drop: function( event, ui ) {
      $( this )
      .addClass( "ui-state-highlight" )
      .removeClass('ui-droppable')
      .removeClass('ui-widget-header')
      .attr('id', 'droppable')
      .append('<span class="ui"><br><strong>* Lista de actividades</strong><br><strong>* Estimación de costos de las actividades</strong></span>')
      // .hide();
      recycleImage( ui.draggable );
      // localStorage[pre+'id']='droppable1';

    }
  });
  

  $( "#droppable2" ).droppable({
    accept: "#draggable2",
    activeClass: "ui-state-hover",
    hoverClass: "ui-state-active",
    drop: function( event, ui ) {
      $( this )
      .addClass( "ui-state-highlight" )
      .removeClass('ui-droppable')
      .removeClass('ui-widget-header')
      .attr('id', 'droppable')
      .append('<span class="ui"><br><strong>* Juicio de expertos</strong><br><strong>* Análisis de alternativas</strong></span>')
      // .hide();
      recycleImage( ui.draggable );
      // localStorage[pre+'id']='droppable2';

    }
  });
  $( "#droppable3" ).droppable({
    accept: "#draggable3",
    activeClass: "ui-state-hover",
    hoverClass: "ui-state-active",
    drop: function( event, ui ) {
      $( this )
      .addClass( "ui-state-highlight" )
      .removeClass('ui-droppable')
      .removeClass('ui-widget-header')
      .attr('id', 'droppable')
      .append('<span class="ui"><br><strong>* Recursos requeridos para las actividades</strong><br><strong>* Actualizaciones a los documentos del proyecto</strong></span>')
      // .hide();
      recycleImage( ui.draggable );
      // localStorage[pre+'id']='droppable3';
    }

  });


// image recycle function
var trash_icon = "";
var trash = 0;
function recycleImage( $item ) {
  $item.fadeOut(function() {


   console.log($(this).attr('id'));

   if($(this).attr('id')=='draggable-nonvalid'){
    $(this)
    .after('<img id="mal" src="../resources/img/diapo21/9-03.png" width="150">')
    .remove();

  }else{
    trash++;
    $item
    .find( "a.ui-icon-refresh" )
    .remove()
    .end()
    .css( "width", "96px")
    .append( trash_icon )
    .find( "img" )
    .css( "height", "72px" )
    .end()
    .appendTo('')
    .fadeIn();
    $id=localStorage[pre+'id'];
    $("#"+$id)
    .after('<div id="a1" class="ui-widget-header ui-droppable"></div>')
    .hide();
  }
  console.log(trash);
  if(trash==3){
    $("#caja")
    .click()
    .append('<img id="Over" src="../resources/img/GANASTE.png">')
    .addClass('game');
    $("#estrella6").hide();
  }

});
}

$(".ui-draggable").css('opacity', '0');
setTimeout(function () {
  $a1='332px';
  $a2='632px';
  $a3='184px';
  $a4='33px';
  $a5='482px';

$("#draggable1").css('left',$a2)
$("#draggable2").css('left',$a3)
$("#draggable3").css('left',$a4)
$("#draggable4").css('left',$a5)
$("#draggable5").css('left',$a1)
    console.log(ramdon());                     
  $(".ui-draggable").animate({
    opacity: 1
  },2000);

},500)

});

function ramdon (r) {
$i=0;
do {
var aleatorio = Math.round(Math.random()*5);
      if(aleatorio==1||aleatorio==2){
          $i=1;
      }else if(aleatorio==0){
         $i=1;
      }else{
          $i=0;
      }
} while ($i > 0);

 return  aleatorio;
   

  }
