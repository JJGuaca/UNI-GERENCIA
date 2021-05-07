$Objcssp = [''];//arreglo
$Objcss = [''];//arreglo
$Objjs = [''];//arreglo
$Objhtml = [''];//arreglo
$borrar = [''];//arreglo
jQuery(document).ready(function($) {
    $flota='<script>$(function() {$( ".flota" ).draggable({ cursor: "move", cursorAt: {  } }); $(".resizable").resizable()  }); </script>';
    $classEsp='flota  context-menu-one resizable';
    $verContenido=''+
    'onclick       ="verContenido($(this).attr('+"'id'"+'))"'+
    'onkeyup       ="verContenido($(this).attr('+"'id'"+'))"'+
    'onkeypress    ="verContenido($(this).attr('+"'id'"+'))"'+
    'onmouseover   ="verContenido($(this).attr('+"'id'"+'))"'+
    'onmouseenter  ="verContenido($(this).attr('+"'id'"+'))"'+
    'onmousedown   ="verContenido($(this).attr('+"'id'"+'))"'+
    'onmouseup     ="verContenido($(this).attr('+"'id'"+'))" '+
    'onmouseout    ="verContenido($(this).attr('+"'id'"+'))" '+
    'onmouseleave  ="verContenido($(this).attr('+"'id'"+'))" '+
    'onMouseDown   ="verContenido($(this).attr('+"'id'"+'))" '+
    'onMouseUp     ="verContenido($(this).attr('+"'id'"+'))" '+
    'onunload      ="verContenido($(this).attr('+"'id'"+'))" '+
    'onContextMenu ="verContenido($(this).attr('+"'id'"+'))"';
    $('#caracteristicas').hide();
    $("#Tool").click(function(){
        $('#caracteristicas').show('slow/400');
    });       
    caraceristicas();
    $('.attr').click(function(event) {
        $(this).focus();
    });    
});
function componentesHtml() {
    $textbtn=localStorage['id'];

    if($('#'+$textbtn).attr('fondo')){
       $fondo= $('#'+$textbtn).attr('fondo')
   }else{ $fondo='';}

   if($('#'+$textbtn).attr('texto')){
       $texto= $('#'+$textbtn).attr('texto')
   }else{ $texto='';}

///////////////[inicializar]//////////////////
if($textbtn!='one'){
    $htmlEdit=localStorage["EstadoUg"];//id de Objeto
    $codeX = JSON.parse(localStorage.getItem($htmlEdit));
}else{
    $htmlEdit=".";
}

if($htmlEdit!='.'){
    ///////////////[eleccion de codigo]//////////////////
    $codeX.html;
    $codeX.css;
    $html2=$codeX.html.split(">",1)+'';
    $html1=$codeX.html.split(''+$html2+'')+'';

    ////////////////[ectualiza el texto del contenido]////////
    $textoEditable=$('#'+$textbtn).find("#editable").html();
    $textoEditable2=$('#'+$textbtn).find("#editados").html();
    // $textoEditable=$textoEditable.replace("&nbsp;","");
    $html=$html1.replace("editable>",'> '+$textoEditable)+'';
    $html=$html.replace("editados>",'> '+$textoEditable2)+'';
    $html=$html.replace(",>",'')+'';

////////[sacar primera etiqueta]///////////////////
$html3=$html2.split("<");
$html3=$html3[1].split(" ",1);
////////////////////////////////////////
$editable=localStorage['botonUg2'].replace("texto",''+$('#'+$textbtn+'>span').text()+'')+'';
$1erline='<'+$html3+' id="'+localStorage['id']+'" class="'+$('#'+$textbtn).attr('title')+' '+$fondo+' '+$texto+'">';

$boton=$1erline+editable($html);
}else{
 $boton=''; 
 $codeX=''; 
}
////////////////////////////////////
function  editable(code){
    code=code.replace("contenteditable","");
    return code;
}
}
/*
Interface para mostrar
*/
function caraceristicas () {
    LocalArray ();
    var ArrayTemp = [];
    $storAtrr = JSON.parse(localStorage["AtrrUg"]);
    $contenidoP='';
    for (var i = 0; i < $storAtrr.length; i++) {
        $contenidoP+='<li class="cont"> <span class="ug_capital">'
        +$storAtrr[i]+
        ' : </span><input id="'+$storAtrr[i]+
        '" class="attr none" type="text"></li>';
    }
    $car=$("#caracteristicas");
    $car.append('<span class="titulo">Nombre:&nbsp;<div id="ug_title">Titulo Id</div> :</span>'+
        '<div id="equis" onclick="cerrarP()" class="none" >X</div>'+
        ' <br><hr><ul id="cajaA">'+
        $contenidoP+
        '</ul><span id="Codigo" ></span>');
}
function cerrarP (argument) {
    $('#caracteristicas').hide('slow/400');
}
$contadordele=0;
function deleteM(id){

$numero= id.replace(/\D/g,'');
$numero=$numero-1;
$borrar[$contadordele]=$numero;
console.log('Objeto :[ '+id+' ] borrado');
$contadordele++;

}
function verContenido(id){
    $('body').click();
    $('.EstadoM').click();
    if(!id){id="";}
    $numero= id.replace(/\D/g,'');
    $resultado=id.replace($numero,'');
    localStorage["EstadoUg"]=$resultado;

    LocalArray ();
    var ArrayUg = [];
    var ArrayAttr = [];
    $contenido='';
    $storAtrr = JSON.parse(localStorage["AtrrUg"]);
    if(id){
       localStorage['id']=id;
   }
   id=localStorage['id'];
   $('#ug_title').html(id);
   $CssidUbica='';
   $CssidUbicaP = new Array("");

   for (var i = 0; i < $storAtrr.length; i++) {
    ArrayUg[i] = $('#'+$storAtrr[i]).val();
    if(!ArrayUg[i]){ArrayUg[i]=0;}
    ArrayAttr[i]=$('#'+id).css($storAtrr[i]);
    $('#'+$storAtrr[i]).val(ArrayAttr[i]);

    $contenido+='<span class="espacio"></span><span style="color:#52ADD0">'+$storAtrr[i]+'</span>:&nbsp;&nbsp;<span style="color:#BF2056">'+ArrayUg[i]+'</span>;<br>';
    $CssidUbica+=$storAtrr[i]+':'+ArrayUg[i]+';';
}

////////////////[se guardan y envian los css de pocicion y tamaño]///////
if(localStorage['mostrar']=='ok'){
$CssidUbica='#'+id+'{'+$CssidUbica+'}';

$numero=$numero-1;
$Objcssp[$numero]=$CssidUbica;
for($ii=0;$ii<$borrar.length; $ii++){
$Objcssp[$borrar[$ii]]='';
}
$diapo=$("#diapo").val();
$.ajax({
  type:"POST",
  url:"../tema1/Data/agregar.php",
  data:"CSSP="+$Objcssp
        +"&diapo="+$diapo,
  dataType:"json"
});
}

//+++++++++++++++++++++++++++++++//
keyupAttr (id);
componentesHtml();
/////////////[Codigo a Mostrar]///////////////
if(localStorage['mostrar']=='ok'){
    function CodeAttr() {
 $diapo=$("#diapo").val();       
// -----------html-----------//
$Objhtml[$numero]=$boton;

for($ii=0;$ii<$borrar.length; $ii++){
$Objhtml[$borrar[$ii]]=' ';
}
$.ajax({
  type:"POST",
  url:"../tema1/Data/agregar.php",
  data:"HTML="+$Objhtml.join("<!-- -->")
  +"&diapo="+$diapo,
  dataType:"json"
});

// -----------css-----------//
$Objcss[$numero]=$codeX.css;
for($ii=0;$ii<$borrar.length; $ii++){
$Objcss[$borrar[$ii]]=' ';
}
$.ajax({
  type:"POST",
  url:"../tema1/Data/agregar.php",
  data:"CSS="+$Objcss.join("/**/")
  +"&diapo="+$diapo,
  dataType:"json"
});
// -----------js-----------//
$Objjs[$numero]=$codeX.js;
for($ii=0;$ii<$borrar.length; $ii++){
$Objjs[$borrar[$ii]]=' ';
}
$.ajax({
  type:"POST",
  url:"../tema1/Data/agregar.php",
  data:"JS="+$Objjs.join("/**/")
  +"&diapo="+$diapo,
  dataType:"json"
});

// -----------muestra-----------//


        $('#Codigo').html('<hr>'+
            '<span id="cssPPst" class="Noact NoactAct">CSS*</span>'+
            '<span id="htmlPst" class="Noact">HTML</span>'+
            '<span id="cssPst" class="Noact">CSS</span>'+
            '<span id="jsPst" class="Noact">JS</span>'+
            '<div class="none ui-widget-header codeCssp editorV" contenteditable>'+
            '<span style="color:#91BF20">#'+id+'</span>{<br>'+
            $contenido+
            '}</div>'+
            '<div class="none ui-widget-header codeHtml editorV" contenteditable>'+
            '<section><pre><code data-language="php">'+
            $boton+
            '</code></pre></section>'+
            '</div>'+
            '<div class="none ui-widget-header codeCss editorV" contenteditable>'+
            '<section><pre><code data-language="php">'+
            $codeX.css+
            '</code></pre></section>'+
            '</div>'+
            '<div class="none ui-widget-header codeJs editorV" contenteditable>'+
            '<section><pre><code data-language="php">'+
            $codeX.js+
            '</code></pre></section>'+
            '</div>'+
            '');

            // '<textarea id="Vhtml" > '+
            //     $boton+
            //     '</textarea>'+
        }
        CodeAttr();
    }
/////////////////////////////////////////////    
$('.editorV').hide();
$('.codeCssp').show();
$('#cssPPst').click(function(event) {
    $('.editorV').hide('slow/400/fast');
    $('.codeCssp').show('slow/400/fast');

    $('.Noact').removeClass('NoactAct');
    $(this).addClass('NoactAct');
});
$('#htmlPst').click(function(event) {
    $('.editorV').hide('slow/400/fast');
    $('.codeHtml').show('slow/400/fast');

    $('.Noact').removeClass('NoactAct');
    $(this).addClass('NoactAct');
});
$('#cssPst').click(function(event) {
    $('.editorV').hide('slow/400/fast');
    $('.codeCss').show('slow/400/fast');

    $('.Noact').removeClass('NoactAct');
    $(this).addClass('NoactAct');
});
$('#jsPst').click(function(event) {
    $('.editorV').hide('slow/400/fast');
    $('.codeJs').show('slow/400/fast');

    $('.Noact').removeClass('NoactAct');
    $(this).addClass('NoactAct');
});
//////////////////////////////////
}
/**
 * [keyupAttr captura de datos por teclado]
 * @param  {[type]} id [description]
 * @return {[type]}    [description]
 */
 function keyupAttr (id) {
    LocalArray ();
    var ArrayTemp = [];
    $storAtrr = JSON.parse(localStorage["AtrrUg"]);

    $('#'+$storAtrr[0]).keyup(function() {
        localStorage[$storAtrr[0]]=$('#'+$storAtrr[0]).val();
        $('#'+id).css(
            ""+$storAtrr[0]+"", ""+localStorage[$storAtrr[0]]+""
            );
    });

    $('#'+$storAtrr[1]).keyup(function() {
        localStorage[$storAtrr[1]]=$('#'+$storAtrr[1]).val();
        $('#'+id).css(
            ""+$storAtrr[1]+"", ""+localStorage[$storAtrr[1]]+""
            );
    });
    $('#'+$storAtrr[2]).keyup(function() {
        localStorage[$storAtrr[2]]=$('#'+$storAtrr[2]).val();
        $('#'+id).css(
            ""+$storAtrr[2]+"", ""+localStorage[$storAtrr[2]]+""
            );
    });
    $('#'+$storAtrr[3]).keyup(function() { 
        localStorage[$storAtrr[3]]=$('#'+$storAtrr[3]).val();
        $('#'+id).css(
            ""+$storAtrr[3]+"", ""+localStorage[$storAtrr[3]]+""
            );

    });

    $('#'+$storAtrr[4]).keyup(function() {
        localStorage[$storAtrr[4]]=$('#'+$storAtrr[4]).val();
        $('#'+id).css(
            ""+$storAtrr[4]+"", ""+localStorage[$storAtrr[4]]+""
            );
    });
    $('#'+$storAtrr[5]).keyup(function() {
        localStorage[$storAtrr[5]]=$('#'+$storAtrr[5]).val();
        $('#'+id).css(
            ""+$storAtrr[5]+"", ""+localStorage[$storAtrr[5]]+""
            );
    });
    $('#'+$storAtrr[6]).keyup(function() {
        localStorage[$storAtrr[6]]=$('#'+$storAtrr[6]).val();
        $('#'+id).css(
            ""+$storAtrr[6]+"", ""+localStorage[$storAtrr[6]]+""
            );
    });
    $('#'+$storAtrr[7]).keyup(function() {
        localStorage[$storAtrr[7]]=$('#'+$storAtrr[7]).val();
        $('#'+id).css(
            ""+$storAtrr[7]+"", ""+localStorage[$storAtrr[7]]+""
            );
    });
    $('#'+$storAtrr[8]).keyup(function() {
        localStorage[$storAtrr[8]]=$('#'+$storAtrr[8]).val();
        $('#'+id).css(
            ""+$storAtrr[8]+"", ""+localStorage[$storAtrr[8]]+""
            );
    });
    $('#'+$storAtrr[9]).keyup(function() {
        localStorage[$storAtrr[9]]=$('#'+$storAtrr[9]).val();
        $('#'+id).css(
            ""+$storAtrr[9]+"", ""+localStorage[$storAtrr[9]]+""
            );
    });
    $('#'+$storAtrr[10]).keyup(function() {
        localStorage[$storAtrr[10]]=$('#'+$storAtrr[10]).val();
        $('#'+id).css(
            ""+$storAtrr[10]+"", ""+localStorage[$storAtrr[10]]+""
            );
    });
    $('#'+$storAtrr[12]).keyup(function() {
        localStorage[$storAtrr[12]]=$('#'+$storAtrr[12]).val();
        $('#'+id).css(
            ""+$storAtrr[12]+"", ""+localStorage[$storAtrr[12]]+""
            );
    });

}
/**
 * [LocalArray se crea el array con los componentes a usar]
 */
 function LocalArray () {
    var AtrrUg = ['line-height','height','width','font-size','margin','position','left','top'];
    localStorage["AtrrUg"] = JSON.stringify(AtrrUg);
    $storAtrr = JSON.parse(localStorage["AtrrUg"]);
}