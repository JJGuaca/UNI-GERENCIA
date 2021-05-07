$(document).ready(function(){


	var arrayChecks = Array();

	//Escribir de menor a mayor los checks

	var arrayRespuestas = ["check1"];

	$(".check").click(function(){


		var id= $(this).attr("id");
		var numId= id.substring(5);


		if ($(this).attr("title") == "") {
			$(this).attr("title","true");

			$(this).css("background", "#52ADD0");

			// $("#check"+numId+">div").css("opacity",1);


		}else
		{
			$(this).attr("title","");
			// $("#check"+numId+">div").css("opacity",0);
			$(this).css("background", "#91BF20");


		}
		// $("#btnRevisar").click();

	});


	$("#btnRevisar").click(function(){
		var c =0;
		arrayChecks = [];
		var bool = "";
		$("#contenedorSeleccion>div").each(function(i){
			var check = $(this).attr("title");
			if (check == "true") {
				arrayChecks.push($(this).attr("id"));
			};
		})


		for (var i = 0; i < arrayChecks.length; i++) {
			if (arrayChecks[i] == arrayRespuestas[i]) {
				c = c+1;
			}
		};
		

				if (c == arrayChecks.length && c>0) {
			console.log("bien");

			$("#mensaje").html("¡Ganaste!");	
			$("#mensaje").animate({
				"opacity":1
			},2000,function(){})

		}else
		{
			$("#mensaje").html("Mal");	
			$("#mensaje").animate({
				"opacity":1
			},2000,function(){
				$("#mensaje").animate({
				"opacity":0
			},1000,function(){})
			})
		}


	// console.log(arrayChecks);


	


	
})





})