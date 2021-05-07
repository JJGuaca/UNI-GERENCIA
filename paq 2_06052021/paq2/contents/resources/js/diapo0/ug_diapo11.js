setTimeout(function(){
    $codeX = '';
}, 50);
$Obj = [''];//arreglo
localStorage["Obj"] = JSON.stringify($Obj);//se inicializa erreglo en local storage
jQuery(document).ready(function($) {
    $("#AuxData").hide();
    $("#AuxData").load('code.php');
    $("#refresh").click(function(event) {
        $("#AuxData").load('code.php');
        console.log('Refresh de Codigo Fuente');
    });
    carga();
    if(localStorage.getItem('Carga')==null){
        localStorage.setItem('Carga', '100%');
        location.reload();
    }
    $("#NuevoCodigo").hide();
    NuevoCodigo();
    $("#NuevoBoton").click(function(event) {
        $("#NuevoCodigo").show(500);
        
    });
});
/**
 * [crea funcion que permite complementar el evento de crear archivos, dando codigos fuentes]
 */
function crea() { 
for (var i = 0; i < $Obj.length; i++) {
  $id='#'+$Obj[i];
  $($id).hover().click().mousemove().mouseenter().keypress(); 
};
} 
/**
 * [carga pasa los botones css,html,js]
 *
 * @return  {[type]}
 */
var carga = function(){

    var vcss= $('#botonCss').text();
    var vhtml= $('#botonHtml').text();
    var vjs= $('#botonJs').text();

}
/**
 * [creaObj Crea los objetos para montar en la plantilla]
 * @param   {[localStorage]}  obj  [nombre del LocalStorage que contiene el html respectivo]
 */
 var creaObj = function(obj){
$codeX = JSON.parse(localStorage.getItem(obj));//Inicializa Objeto que contiene el html,css y js base(defaul) 
$numeroBtn++;
localStorage['htmlEdit']='botton';

//------[saca la primera linea y deja el resto del codigo]-------------//
$html2=$codeX.html.split(">",1)+'';
$html1=$codeX.html.split(''+$html2+'')+'';
$html=$html1.replace(",>",'')+'';
////////[sacar primera etiqueta]///////////////////
$html3=$html2.split("<");
$html3=$html3[1].split(" ",1);
//--------------------------------------------------------------------//
$html=$html.replace("editable",'id="editable" contenteditable')+'';//cambia editable por contenteditable propiedad que permite editar en html
$html=$html.replace("editados",'id="editados" contenteditable')+'';//cambia editable por contenteditable propiedad que permite editar en html
localStorage['botonUg2']=$html;
///////////////[ sacamos las class que tenga la primera linea]////////////////////////
$line=$html2.split("class='",2);
$line.reverse();
$line=$line[0].replace("'",'');
////////////////[primera linea]///////////////////////

localStorage['botonUg1']=
'<'+$html3+' id= "'+obj+$numeroBtn+'" '+$verContenido+' title="'+$line+'" class="'+$line+' '+$classEsp+'">';
//////////////[crearcion de Objeto]/////////////////////
$btn=$flota+localStorage['botonUg1']+$html;
$("#ug_boton1").append($btn);
$("#"+obj+$numeroBtn).find("#editable").html('Texto').click();//texto que aparecera por defaul en la creacion del Objeto
$("#"+obj+$numeroBtn).find("#editados").html('N').click();//texto que aparecera por defaul en la creacion del Objeto
$("#Style").html($codeX.css);
$("#Script").html($codeX.js);
////////////////[Guardar el Id de creacion en arreglo]////////////////
$f=$numeroBtn;
$f=$f-1;
$storOBJ = JSON.parse(localStorage["Obj"]);
$Obj[$f]=obj+$numeroBtn;
 localStorage["Obj"] = JSON.stringify($Obj);
////////////////[Guardar el Id de creacion en arreglo]////////////////
setTimeout(function(){
$idV=obj+$numeroBtn;
verContenido($idV);
localStorage['mostrar']='ok';
$("#"+$idV).click();
},10)
console.log('[Creacion de Objeto]='+obj+$numeroBtn);

}
/**
 * [NuevoCodigo crea una ventana para un nuevo codigo]
 */
var NuevoCodigo=function(){
    $("#NuevoCodigo").append('<span class="titulo">Nuevo Codigo &nbsp;</span>'+
        '<div id="equis" onclick="cerrarN()" class="none" >X</div>'+
        ' <br><hr>'+
        '<iframe id="iframeNC" src="Data/NuevoCodigo.php"></iframe>'+
        '');

}
/**
 * [cerrarN funcion que llama evento para cerrar nuevo codigo]
 */
function cerrarN (argument) {
    $("#NuevoCodigo").hide('slow/400');
}