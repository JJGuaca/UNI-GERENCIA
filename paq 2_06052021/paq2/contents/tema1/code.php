<script >
    jQuery(document).ready(function($) {
        $i = $(".vHtml").length;
        $botones='';
        for (var i = 1; i <= $i; i++) {

            $name=$('.Vnode'+i).attr('name');

            $idhtml=$('.vHtml.Vnode'+i).attr('id');
            $idcss=$('.vCss.Vnode'+i).attr('id');
            $idjs=$('.vJs.Vnode'+i).attr('id');

            var vhtml= $('#'+$idhtml).text();
            var vcss= $('#'+$idcss).text();
            var vjs= $('#'+$idjs).text();

            var object = { 'html' : vhtml, 'css' : vcss, 'js' : vjs};

            localStorage.setItem($name, JSON.stringify(object));
            console.log('Objeto Cargado y listo para usar:['+$name+']');

//////////////////////////////[crear botones por cada codigo]//////////////////////////////////////////////
$botones=$botones+'<button id="'+$name+'" class="Vbutton"  onclick="creaObj('+"'"+$name+"'"+')"  type="button">'+$name+'</button>';
///////////////////////////////////////////////////////////////////////////           
};
$("#Botones").html($botones);
});
</script>

<section id="Vcode">
    <!-- ////[  editable  = da la opcion de editar en edicion   ]//// -->
    <!-- ////[    ]//// -->
<?php
include 'codigos.php';
?>
</section>



