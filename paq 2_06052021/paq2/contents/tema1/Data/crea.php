<img src="../../resources/img/carga.gif" height="300" width="300" alt="" style="position: fixed; top:0;left: 0;  ">
<?php
error_reporting(0);

if(isset($_REQUEST['ok'])){

	$ok=$_REQUEST['ok'];
	if ($ok==1) {
		crea($_REQUEST['diapo']);
	}else if($ok==2){
		borra();
	}
}
function crea($diapo)
{  
// -----------------------------   //css/diapo2/
	$structure11 = '../../resources/css/ug_diapo'.$diapo.'/';
	$structure22 = '../../resources/js/ug_diapo'.$diapo.'/';
	$structure00 = '../../tema2/';
	mkdir($structure11, 0777, true);
	mkdir($structure22, 0777, true);
	mkdir($structure00, 0777, true);

// -----------------------------   //

	$ficha0 = '../../resources/css/ug_diapo'.$diapo.'/ug_diapo'.$diapo.'.css';    
	$ficha2 = '../../resources/css/ug_diapo'.$diapo.'/ug_diapo'.$diapo.'_0.css';    
	$ficha1 = '../../resources/js/ug_diapo'.$diapo.'/ug_diapo'.$diapo.'.js'; 
	if($diapo=='1'){
		$ficha00 = '../../tema1/UGPP.html'; 
	}else{
		$ficha00 = '../../tema2/UGPP1_'.$diapo.'.html'; 	
	}    


	$fp00=fopen($ficha00,"x");
	$fp2=fopen($ficha2,"x");
	$fp0=fopen($ficha0,"x");
	$fp1=fopen($ficha1,"x");

	if($diapo=='1'){
		header('Location: ../../tema1/UGPP.html'); 
	}else{
		header('Location: ../../tema2/UGPP1_'.$diapo.'.html'); 	
	}  
	
}
function borra(){
	$ficha0 = '../../resources/css/ug_diapo2/ug_diapo2.css';    
	$ficha0 = '../../resources/css/ug_diapo2/ug_diapo2_0.css';    
	$ficha1 = '../../resources/js/ug_diapo2/ug_diapo2.js';    
	$ficha2 = '../../tema2/UGPP1_1.html';  

// $structure = '../contents/tema1';
// $structure1 = '../contents/resources/css/';
// $structure11 = '../contents/resources/css/diapo1/';
// $structure22 = '../contents/resources/js/diapo1/';
// $structure2 = '../contents/resources/js/';
// $structure3 = '../contents/resources';
// $structure4 = '../contents/';

	unlink($ficha0);
	unlink($ficha1);
	unlink($ficha2);

// rmdir($structure);
// rmdir($structure11);
// rmdir($structure1);
// rmdir($structure22);
// rmdir($structure2);
// rmdir($structure3);
// rmdir($structure4);
	header("Location: ../../tema1/UGPP1.php"); 

}


?>
<!-- <body onload="window.close();"></body> -->