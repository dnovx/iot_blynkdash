<!DOCTYPE html>
<html >
<head>
  <meta charset="UTF-8">
  <title>Blynk IoT Dashboard</title>
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <link rel="stylesheet" href="css/style.css">
</head>

<body>
<nav class="navbar navbar-dark bg-dark">
<div class="container-fluid">
	<div class="navbar-header">
		<a class="navbar-brand" href="#"><img src="img/blynk.png" width="40" height="40" alt="">
		Blynk IoT Dashboard
		</a>
	</div>
</div>
</nav>
<br>
<div class="container">
	<div class="form-inline">
		<div class="form-group">
			<legend for="focusedInput">Enter Auth Token</legend>
			<input type="text" class="form-control" id="focusedInput">
			<button id="sub" class="btn btn-success ml-3">Get Data</button></div>
	</div>
</div>
 <br>
<div class="container">
<div class="card bg-dark text-white">
  <div class="card-header">
    <h3 class="card-title">Project Information</h3>
  </div>
<div class="card-body">
<div class="container">
  <div class="col-sm-3"><label>Project Name :</label></div>
   <div class="col-sm-9"><label id="pn">------</label></div>
  
    <div class="col-sm-3"><label>Board Type :</label></div>
   <div class="col-sm-9"><label id="bt">------</label></div>


    <div class="col-sm-3"><label>Hardware Status :</label></div>
   <div class="col-sm-9"><label id="hs">------</label></div>
</div>
</div>
</div>
</div>
</div>
<div id="enterPin" hidden>
<div class="container">

<div class="container">
<div class="col-sm-2"><legend>Enter Pin Number</legend></div>
<div class="col-sm-2"><input class="form-control" id="epin" type="text"></div>
 <div class="col-sm-5">  <button id="subpin"  class="btn btn-primary">Add Button</button>
  <button id="slidepin"  class="btn btn-primary">Add Slider Button</button>
  </div>
</div>
  
  <br>
  
  <div class="text-center" id="adddata">

    
  </div>
  
</div>
</div> 



<script>
  
  function ranchang(element){
     var e =element.id;
         currentvalue = document.getElementById(e).value;
    alert(currentvalue);
    
    
   var t =$('#focusedInput').val();
   var cs =$('#csInput').val();
   if (cs!="" && cs!=null)
     {

       var ashow ="http://"+cs+":8080/"+t+"/update/"+e+"?value="+currentvalue;
     }else
       {
 var ashow ="http://188.166.206.43/"+t+"/update/"+e+"?value="+currentvalue;
       }
   




   $.getJSON(ashow, function (data) {
             
             });
    
    
  }
  
  
  
  
  function toggleCheckbox(element)
 {
     var e =element.id;

     currentvalue = document.getElementById(e).value;
  if(currentvalue == "Off"){
  var c=0
 document.getElementById(e).value="On";
     
  }else{
      var c=1
    document.getElementById(e).value="Off";
  }
   

    var t =$('#focusedInput').val();
   var cs =$('#csInput').val();
   if (cs!="" && cs!=null)
     {

       var ashow ="http://"+cs+":8080/"+t+"/update/"+e+"?value="+c;
     }else
       {
 var ashow ="http://188.166.206.43/"+t+"/update/"+e+"?value="+c;
       }
   




   $.getJSON(ashow, function (data) {
             
             });
 }
  
  
  
  
   function remo(element)
  {
     var e = "#"+element.id;

    $(e).remove();
    
  }
  


  
</script>
	<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
	<script src="js/index.js"></script>
</body>
</html>