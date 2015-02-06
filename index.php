<?php 
	$page = $_GET['p'];
	if($page == "") $page = "main";
?>

<!DOCTYPE xhtml>
<html>
<head>
    <link rel="shortcut icon" href="favicon.ico">
	<!-- Character set -->
	<meta charset="UTF-8">

    <!-- CSS -->
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<link rel="stylesheet" type="text/css" href="css/3cols.css">

    <!-- Google fonts-->
    <link href='http://fonts.googleapis.com/css?family=Poiret+One&subset=latin,latin-ext,cyrillic' rel='stylesheet' type='text/css'>

    <script src="js/BMI.js" type="text/javascript"></script>
	<script src="js/eventListener.js" type="text/javascript"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script src="js/onload.js" type="text/javascript"></script>
    <!-- Responsive listener-->
	<script> 
		$(document).ready(function(){
		  $("#toggelM_menu").click(function(){
		    $("#M_mobil").slideToggle("slow");
		  });
	      $("#M_mobil il").click(function(){
		    $("#M_mobil").slideToggle("slow");
		  });
		});
	</script>
</script>
</head>
<body onresize="onResize()" onload="init()">
    </script>
    <center>
        <div class="M_mobil" id="M_mobil">
    		<!-- Responsive menu content -->
             <ul>
                <a style="text-decoration: none;" href="#mobile_content" data-transition="slide" data-direction="reverse"><il class="menuil">Forside</il></a>

                 <a onclick="hotSwapBox(1)"style="text-decoration: none;" href="#pagetwo" data-transition="slide" data-direction="reverse"><il class="menuil">Fysiologi</il></a>

                 <a style="text-decoration: none;" href="#pagetwo" data-transition="slide" data-direction="reverse"><il class="menuil">Træningsprogram</il></a>
                 <a style="text-decoration: none;" href="#pagetwo" data-transition="slide" data-direction="reverse"><il class="menuil">Løbesko</il></a>
                <a style="text-decoration: none;"href="#pagetwo" data-transition="slide" data-direction="reverse"><il class="menuil">Test dig selv</il></a>
		    </ul>
        </div>
        <div class="top">
        	<center id="center">
		        <div class="menudiv max-width">
		            <img class="logo" src="images/small_logo.png">
		            <img id="toggelM_menu" class="toggelbut" src="images/dropdown.png">
		            <ul>
		                <a style="text-decoration: none;" href="#content" data-transition="slide" data-direction="reverse"><il class=menuil>Forside</il></a>
		                 <a style="text-decoration: none;" href="#pagetwo" data-transition="slide" data-direction="reverse"><il class=menuil>Fysiologi</il></a>
		                 <a style="text-decoration: none;" href="#pagetwo" data-transition="slide" data-direction="reverse"><il class=menuil>Træningsprogram</il></a>
		                 <a style="text-decoration: none;" href="?p=shoes" data-transition="slide" data-direction="reverse"><il class=menuil>Løbesko</il></a>
		                <a style="text-decoration: none;"href="#pagetwo" data-transition="slide" data-direction="reverse"><il class=menuil>Test dig selv</il></a>
		            </ul>
		        </div>
	        </center>
    	</div>
        <div class="mag"></div>
     	<div class="section group max-width">
	        <div class="col span_1_of_3 box">
                
            </div>
	        <div class="col span_1_of_3 box">
                </div>
           
	        <div class="col span_1_of_3 box">
	 			<center>      
	 				<div class="box1"> <h3>BMI beregner</h3>
	    				<form name="bmiForm">
						<input placeholder="Vægt i KG" class="form" type="text" name="weight" value="" size="10"><br />
						<input placeholder="Højde i CM" class="form" type="text" name="height" value="" size="10"><br /><br>
						<input class="form button" type="button" value="Regn mit BMI" onClick="calculateBmi()">
						<br />

						<input maxlength="0" class="big" placeholder="BMItal" class="form" type="text" name="bmi" size="10">
						<br />
						<a name="content">
						<input maxlength="0" placeholder="Betydning af BMI" class="form" type="text" name="meaning" size="25">   
						<br />
						<input class="form" style="display:none;" type="text" name="graf" size="25">
						<br />
						<input class="form button" type="reset" onclick="nulstil()" value="Reset"/> 
						</form>
	       				<div class="holder" name="holder">
	 						<div id="bor"> </div>
	 					</div>
						<a name="mobile_content">
	    			</div>
                    
                    
                    
                    
	            </center>  
            </div>
        </div>


        <div class="fullbox max-width" id="box0">
	        <div class="boxinner">
	        <? include('includes/'.$page.'.php') ?>
	        </div>
        </div>
                <div class="footer">
                    <div class="innerdivfooter max-width">
                       <h1 style="font-size: 15; ">Webdesign af Andreas Krühlmann og Troels Lund</h1> 
                        <p style="font-size: 12;">Lavet i informationsteknologi C undervisningen på Falkonergårdens Gymnasium og HF-kursus</p>
                    </div>
                </div>
    </center>
    
</body>
</html>