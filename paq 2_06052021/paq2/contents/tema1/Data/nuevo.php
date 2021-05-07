<?php
if(isset($_REQUEST['ok'])){
$file = fopen("data", "r");
while(!feof($file)) {
$numero= fgets($file);

$Code='
<!-- ****************'.$_REQUEST['name'].'********************** -->
<textarea id="'.$_REQUEST['name'].'Html" class="vHtml Vnode'.$numero.'" name="'.$_REQUEST['name'].'">
  '.$_REQUEST['HTML'].'
</textarea>
<textarea id="'.$_REQUEST['name'].'Css" class="vCss Vnode'.$numero.'" name="'.$_REQUEST['name'].'">
  '.$_REQUEST['CSS'].'
</textarea>
<textarea id="'.$_REQUEST['name'].'Js" class="vJs Vnode'.$numero.'" name="'.$_REQUEST['name'].'">
  '.$_REQUEST['JS'].'
</textarea>
<!-- ****************Fin '.$_REQUEST['name'].'********************** -->
';
$numero++;
}
fclose($file);
$fp = fopen('data', 'w');
fwrite($fp,$numero);
fclose($fp);


  $fp = fopen('../codigos.php', 'a');
  fwrite($fp, $Code);
  fclose($fp);


header("Location: NuevoCodigo.php?ok=1"); 


}else{
  ?>
  <!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <title>jQuery UI Tabs - Default functionality</title>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
    <script src="../../../api/controller/core/jquery/jquery-1.10.2.min.js"></script>
    <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
    <script src="../../resources/js/jquery-ui.js"></script>
    <script>
      $(function() {
        $( "#tabs" ).tabs();
      });
    </script>
    <style type="text/css">
      .all{
        background: #333;
        border: none;
        height: 250px;
        left: 0;
        margin: -10px -25px;
        padding: 0;
        padding-top: 10px;
        top: 0;
        width: 110%;
      }
      #html{
        color:#4FD625; 

      }
      #css{
        color:#F77623; 

      }
      #js{
        color:#D71D1D; 

      }
      #submit{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        color: #ffffff;
        padding: 10px 20px;
        background: -moz-linear-gradient(
          top,
          #080708 0%,
          #000000);
        background: -webkit-gradient(
          linear, left top, left bottom,
          from(#080708),
          to(#000000));
        -moz-border-radius: 5px;
        -webkit-border-radius: 5px;
        border-radius: 5px;
        border: 1px solid #000000;
        -moz-box-shadow:
        0px 1px 3px rgba(000,000,000,0.5),
        inset 0px 0px 1px rgba(255,255,255,0.7);
        -webkit-box-shadow:
        0px 1px 3px rgba(000,000,000,0.5),
        inset 0px 0px 1px rgba(255,255,255,0.7);
        box-shadow:
        0px 1px 3px rgba(000,000,000,0.5),
        inset 0px 0px 1px rgba(255,255,255,0.7);
        text-shadow:
        0px -1px 0px rgba(000,000,000,0.4),
        0px 1px 0px rgba(255,255,255,0.3);
        position: absolute;
        z-index: 1;
        right: 31px;
        top: 18px;
        
      }

    </style>

  </head>
  <body>
    <form action="nuevo.php?ok=1" method="POST" accept-charset="utf-8">
      <input type="submit" id="submit" value="Crear Objeto">
      <input type="hidden" name="name" value="<?php echo $_REQUEST['Nombre'] ?>" placeholder="">
    <div id="tabs">
      <ul>
        <li><a href="#tabs-1">HTML</a></li>
        <li><a href="#tabs-2">CSS</a></li>
        <li><a href="#tabs-3">JS</a></li>
      </ul>
      <div id="tabs-1">
        <textarea id="html" name="HTML" class="all">
          
        </textarea>
      </div>
      <div id="tabs-2">
        <textarea id="css" name="CSS" class="all">
         
      </textarea>
    </div>
    <div id="tabs-3">
      <textarea id="js" name="JS" class="all">
       
    </textarea>
  </div>
</div>

</form>
</body>
</html>
<?php
}
?>