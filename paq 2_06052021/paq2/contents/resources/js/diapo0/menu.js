localStorage['id']='one';
/**
 * [caracteristicas especiales(flotar y redimencionar)]
 * @param  {[type]} ) {
 *                    $( ".flota" ).draggable({         [permite flotar]
 *                            cursor: "move",           [cambia el cursos]
 *                            cursorAt: {  } });        [caraceristicas del cursos: null
 *                     $( ".resizable" ).resizable();   [permite remidimencionar]
 *                     $( ".none" ).disableSelection(); [bloquea el arrastre en esa zona]
 * @return {[null]}   [no retorna]
 */
 $(function() {
    $( ".flota" ).draggable({ cursor: "move", cursorAt: {  },cancel: ".ui-widget-header" });
    $( ".resizable" ).resizable();
    $( ".none" ).disableSelection();
});
 var objAttr = new verContenido();
 $letras='';
 $numeroBtn=0;
 $numeroNb=0;

 $fondo='azulOscuro morado verde gris azulClaro aguamarinaOscuro aguamarina violeta cafeClaro cafeOscuro grisClaro azulMarino verdeOliva naranja fresa frambuesa uvaNegra uva moradoOscuro verdeOscuro blanco negro';
 $fd=['azulOscuro','morado','verde','gris','azulClaro','aguamarinaOscuro','aguamarina','violeta','cafeClaro','cafeOscuro','grisClaro','azulMarino','verdeOliva','naranja','fresa','frambuesa','uvaNegra','uva','moradoOscuro','verdeOscuro','blanco','negro']
 $texto='naranjaTexto aguamarinaTexto grisClaroTexto verdeOlivaTexto azulMarinoTexto grisTexto verdeTexto azulClaroTexto moradoTexto azulOscuroTexto aguamarinaOscuroTexto violetaTexto cafeOscuroTexto cafeClaroTexto fresaTexto frambuesaTexto uvaNegraTexto blancoTexto negroTexto';
 $tx=['naranjaTexto','aguamarinaTexto','grisClaroTexto','verdeOlivaTexto','azulMarinoTexto','grisTexto','verdeTexto','azulClaroTexto','moradoTexto','azulOscuroTexto','aguamarinaOscuroTexto','violetaTexto','cafeOscuroTexto','cafeClaroTexto','fresaTexto','frambuesaTexto','uvaNegraTexto','blancoTexto', 'negroTexto'];

 $(function(){
    console.log($storAtrr);
    $.contextMenu.types.fondo = function(item, opt, root) {
        // this === item.$node

        $('<ul>'
            + '<li class="label1 aguamarina" title="aguamarina">aguamarina</li>'
            + '<li class="label1 aguamarinaOscuro" title="aguamarinaOscuro">aguamarinaOscuro</li>'
            + '<li class="label1 azulClaro" title="azulClaro">azulClaro</li>'
            + '<li class="label1 azulMarino" title="azulMarino">azulMarino</li>'
            + '<li class="label1 azulOscuro" title="azulOscuro">azulOscuro</li><br>'
            + '<li class="label1 naranja" title="naranja">naranja</li>'
            + '<li class="label1 cafeClaro" title="cafeClaro">cafeClaro</li>'
            + '<li class="label1 cafeOscuro" title="cafeOscuro">cafeOscuro</li>'
            + '<li class="label1 gris" title="gris">gris</li>'
            + '<li class="label1 grisClaro" title="grisClaro">grisClaro</li><br>'
            + '<li class="label1 fresa" title="fresa">fresa</li>'
            + '<li class="label1 frambuesa" title="frambuesa">frambuesa</li>'
            + '<li class="label1 uvaNegra" title="uvaNegra">uvaNegra</li>'
            + '<li class="label1 morado" title="morado">morado</li>'
            + '<li class="label1 moradoOscuro" title="moradoOscuro">moradoOscuro</li><br>'
            + '<li class="label1 verde" title="verde">verde</li>'
            + '<li class="label1 verdeOliva" title="verdeOliva">verdeOliva</li>'
            + '<li class="label1 verdeOscuro" title="verdeOscuro">verdeOscuro</li>'
            + '<li class="label1 uva" title="uva">uva</li>'
            + '<li class="label1 violeta" title="violeta">violeta</li><br>'
            + '<li class="label1 blanco" title="blanco">blanco</li>'
            + '<li class="label1 negro" title="negro">negro</li>'

            +'</ul>')
.appendTo(this)
.on('click', 'li', function() {
                // do some funky stuff
                console.log('Clicked en '+$(this).text());

                var m = $(this).text();
                for (var i = 0; i < $fd.length; i++) {
                    if(m==$fd[i]){
                        $id='#'+localStorage['id'];
                        $($id)
                        .removeClass($fondo)
                        .addClass(m)
                        .attr('fondo',m);
                        $(".flota").click();
                    }
                }

                // hide the menu
                root.$menu.trigger('contextmenu:hide');
            });

this.addClass('labels').on('contextmenu:focus', function(e) {
            // setup some awesome stuff
        }).on('contextmenu:blur', function(e) {
            // tear down whatever you did
        }).on('keydown', function(e) {
            // some funky key handling, maybe?
        });
    };
    $.contextMenu.types.texto = function(item, opt, root) {
        // this === item.$node

        $('<ul>'
            + '<li class="label1 aguamarina" title="aguamarinaTexto">aguamarinaTexto</li>'
            + '<li class="label1 aguamarinaOscuro" title="aguamarinaOscuroTexto">aguamarinaOscuroTexto</li>'
            + '<li class="label1 azulClaro" title="azulClaroTexto">azulClaroTexto</li>'
            + '<li class="label1 azulMarino" title="azulMarinoTexto">azulMarinoTexto</li>'
            + '<li class="label1 azulOscuro" title="azulOscuroTexto">azulOscuroTexto</li><br>'
            + '<li class="label1 naranja" title="naranjaTexto">naranjaTexto</li>'
            + '<li class="label1 cafeClaro" title="cafeClaroTexto">cafeClaroTexto</li>'
            + '<li class="label1 cafeOscuro" title="cafeOscuroTexto">cafeOscuroTexto</li>'
            + '<li class="label1 gris" title="grisTexto">grisTexto</li>'
            + '<li class="label1 grisClaro" title="grisClaroTexto">grisClaroTexto</li><br>'
            + '<li class="label1 fresa" title="fresaTexto">fresaTexto</li>'
            + '<li class="label1 frambuesa" title="frambuesaTexto">frambuesaTexto</li>'
            + '<li class="label1 uvaNegra" title="uvaNegraTexto">uvaNegraTexto</li>'
            + '<li class="label1 morado" title="moradoTexto">moradoTexto</li>'
            + '<li class="label1 moradoOscuro" title="moradoOscuroTexto">moradoOscuroTexto</li><br>'
            + '<li class="label1 verde" title="verdeTexto">verdeTexto</li>'
            + '<li class="label1 verdeOliva" title="verdeOlivaTexto">verdeOlivaTexto</li>'
            + '<li class="label1 verdeOscuro" title="verdeOscuroTexto">verdeOscuroTexto</li>'
            + '<li class="label1 uva" title="uvaTexto">uvaTexto</li>'
            + '<li class="label1 violeta" title="violetaTexto">violetaTexto</li><br>'
            + '<li class="label1 blanco" title="blancoTexto">blancoTexto</li>'
            + '<li class="label1 negro" title="negroTexto">negroTexto</li>'

            +'</ul>')
.appendTo(this)
.on('click', 'li', function() {
                // do some funky stuff
                console.log('Clicked en '+$(this).text());

                var m = $(this).text();
                for (var i = 0; i < $tx.length; i++) {
                    if(m==$tx[i]){
                       $id='#'+localStorage['id'];
                       $($id)
                       .removeClass($texto)
                       .addClass(m)
                       .attr('texto', m);
                       $(".flota").click();
                   }
               }

                // hide the menu
                root.$menu.trigger('contextmenu:hide');
            });

this.addClass('labels').on('contextmenu:focus', function(e) {
            // setup some awesome stuff
        }).on('contextmenu:blur', function(e) {
            // tear down whatever you did
        }).on('keydown', function(e) {
            // some funky key handling, maybe?
        });
    };
    
    $.contextMenu({
        selector: '.context-menu-one',
        className: 'data-title',
        trigger: 'right',
        // trigger: 'left',
        // trigger: 'hover',
        callback: function(key, options) {
            var m = key;
            //window.console && console.log(m) || alert(m);
            console.log('click en ['+m+']');
            $(this).click();//click que permite refrescar lo hecho en el menu
            $('body').click();//click que permite refrescar lo hecho en el menu
            
            if(m=='edit'){
                $(this).find('#editable').focus(); 
                $(this).find('#editados').focus();
            }
            if(m=='edit2'){
                $(this).find('#editable').focus();
                localStorage['editorHtml']='';
                localStorage['ideditaHtml']="#"+$(this).attr('id'); 
                $("#editor").hide(1000);
                $("#editor").show(1000);
            }
            if(m=='delete'){
               $idM=$(this).attr('id');
               deleteM($idM);
               $(this).addClass('delete').remove();
           }
           for (var i = 0; i < $fd.length; i++) {
            if(m==$fd[i]){
                $(this)
                .removeClass($fondo)
                .addClass(m)
                .attr('fondo',m);
                $(".flota").click();
            }
        }
        for (var i = 0; i < $tx.length; i++) {
            if(m==$tx[i]){
                $(this)
                .removeClass($texto)
                .addClass(m)
                .attr('texto', m);
                $(".flota").click();
            }
        }
        if(m=='Fondo<<None>>'){
         $(this)
         .removeClass($fondo)
         .attr('fondo', '');
         $(".flota").click();
     }
     if(m=='Texto<<none>>'){
         $(this)
         .removeClass($texto)
         .attr('texto', '');
         $(".flota").click();
     }
     if(m=='paste'){
         verContenido('boton');
         $('#caracteristicas').show('slow/400');
         localStorage['mostrar']="ok";
         console.log('exit');
         $(".flota").click();
         $("#Tool").click();

     }
         $(this).click().hover().mouseover().keypress();//click que permite refrescar lo hecho en el menu
        $('body').click();//click que permite refrescar lo hecho en el menu
    },
    items: {
           /* name: {
                name: "Nuevo Id", 
                type: 'text', 
                value: '',
                events: {
                    keyup: function(e) {
                        // add some fancy key handling here?
                        //window.console && console.log('key: '+ e.keyCode);
                        $letras+=String.fromCharCode(e.keyCode);
                        $letras=$letras.toLowerCase();
                        console.log('key: '+ $letras);
                        $('.btn:nth-child(2)').html($letras+$numeroBtn)
                    }
                }
            },*/
            "edit": {name: "Editar", icon: "edit"},
            "edit2": {name: "Editor", icon: "edit2"},
            "delete": {name: "Borrar", icon: "delete"},
            "paste": {name: "Ver codigo", icon: "paste"},
            "sep1": "---------",
            // <select>
            "fold1": {
                "name": "Color",
                className: 'data-titleC',
                "items": {                    
                    "fold1": {
                        "name": "Fondo",
                        "items": {
                            "aguamarina": {"name": "aguamarina"},
                            "aguamarinaOscuro": {"name": "aguamarinaOscuro"},
                            "azulClaro": {"name": "azulClaro"},
                            "azulOscuro": {"name": "azulOscuro"},
                            "azulMarino": {"name": "azulMarino"},
                            "cafeClaro": {"name": "cafeClaro"},
                            "cafeOscuro": {"name": "cafeOscuro"},
                            "grisClaro": {"name": "grisClaro"},
                            "gris": {"name": "gris"},
                            "naranja": {"name": "naranja"},
                            "fresa": {"name": "fresa"},
                            "morado": {"name": "morado"},
                            "verde": {"name": "verde"},
                            "violeta": {"name": "violeta"},
                            "verdeOliva": {"name": "verdeOliva"},
                            "Fondo<<None>>": {"name": "Fondo<<None>>"}
                        }
                    },
                    "fold2": {
                        "name": "Fondo",
                        className: 'data-titleF',
                        "items": {
                            label: {type: "fondo", customName: "Label"},                          
                            "Fondo<<None>>": {"name": "Fondo<<None>>"}               
                        }
                    },
                    "fold3": {
                        "name": "Texto",
                        "items": {
                            "aguamarinaTexto": {"name": "aguamarinaTexto"},
                            "aguamarinaOscuroTexto": {"name": "aguamarinaOscuroTexto"},
                            "azulMarinoTexto": {"name": "azulMarinoTexto"},
                            "azulClaroTexto": {"name": "azulClaroTexto"},
                            "azulOscuroTexto": {"name": "azulOscuroTexto"},
                            "grisTexto": {"name": "grisTexto"},
                            "grisClaroTexto": {"name": "grisClaroTexto"},
                            "cafeClaroTexto": {"name": "cafeClaroTexto"},
                            "fresaTexto": {"name": "fresaTexto"},
                            "moradoTexto": {"name": "moradoTexto"},
                            "naranjaTexto": {"name": "naranjaTexto"},
                            "verdeTexto": {"name": "verdeTexto"},
                            "verdeOlivaTexto": {"name": "verdeOlivaTexto"},
                            "violetaTexto": {"name": "violetaTexto"},
                            "Texto<<none>>": {"name": "Texto<<none>>"}
                        }
                    },
                    "fold4": {
                        "name": "Texto",
                        className: 'data-titleT',
                        "items": {
                            label: {type: "texto", customName: "Label"},                          
                            "Texto<<none>>": {"name": "Texto<<none>>"}              
                        }
                    },
                },
            },
            "sep2": "---------",
            "quit": {name: "Salir", icon: "quit"},
        }
    });
$('.data-title').attr('data-menutitle', " :: Menu Editor :: ");
$('.data-titleC').attr('data-menutitle', " :: Color/Fondo :: ");
$('.data-titleF').attr('data-menutitle', " ¤ Fondo");
$('.data-titleT').attr('data-menutitle', " ¤ Texto");
$('.context-menu-one').on('click', function(e){
    console.log('>>>>'+this);
})
$('#toggle-disabled ').on('click', function(e) {
    e.preventDefault();
    var $this = $(this),
    $trigger = $('.context-menu-one');
    if ($trigger.hasClass('context-menu-disabled')) {
        $this.text("DesHabilitar Menu");
        $trigger.contextMenu(true);
    } else {
        $this.text("Habilitar Menu");
        $trigger.contextMenu(false);
        console.log('sin Menu');

    }
});
// 
$('#radioDM').on( "click", function() {
    document.oncontextmenu=true; 
    $trigger = $('.context-menu-one');
    $trigger.contextMenu(false);
    $(this).addClass('EstadoM');
    $('#radioHM').removeClass('EstadoM');
    
});
$('#radioHM').on( "click", function() {
    document.oncontextmenu=inhabilitar; 
    $trigger = $('.context-menu-one');
    $trigger.contextMenu(true);
    $(this).addClass('EstadoM');
    $('#radioDM').removeClass('EstadoM');
});
// 
$('#radioDC').on( "click", function() {
   $("#cuadricula").fadeTo( "slow", 0 );   
    $(this).addClass('EstadoC');
    $('#radioHC').removeClass('EstadoC');
    
});
$('#radioHC').on( "click", function() {
    $("#cuadricula").fadeTo( "slow", 0.7);
    $(this).addClass('EstadoC');
    $('#radioDC').removeClass('EstadoC');
});


});
function inhabilitar(){ 
    return false 
} 

