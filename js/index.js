$(document).ready(function() {

    $.fn.myFunction = function(buttonlable){ 
var b= '#'+ buttonlable;

   var t =$('#focusedInput').val();
   var cs =$('#csInput').val();
   if (cs!="" && cs!=null)
     {
         var api2 = "http://"+cs+":8080/"+t+"/get/"+buttonlable;
     }else
       {
          var api2 = "http://188.166.206.43/"+t+"/get/"+buttonlable;
       }
 


    $.getJSON(api2,function(data3){      
      var obj = JSON.parse(data3)
      
     
if(obj==1){
   document.getElementById(buttonlable).value="Off";

  $(b).attr('checked', true);

}

});


 

    }
  
  
 $("#sub").click(function(){
   var t =$('#focusedInput').val();
   var cs =$('#csInput').val();
   if (cs!="" && cs!=null)
     {
         var api = "http://"+cs+":8080/"+t+"/project";
        var api3 = "http://"+cs+":8080/"+t+"/isHardwareConnected";
     }else
       {
           var api = "http://188.166.206.43/"+t+"/project";
           var api3 = "http://188.166.206.43/"+t+"/isHardwareConnected";
       }
 
   

    $.getJSON(api,function(data){      
var projectname = data.name;
var board = data.devices[0].boardType;
  $("#pn").html(projectname);
  $("#bt").html(board);
});

        $.getJSON(api3,function(data4){      


 if(data4==true){
           var hs =  "<span class='badge badge-success'>Online</span>";
		   $("#enterPin").attr("hidden",false);
        }else{
            var hs =  "<span class='badge badge-danger'>Offline</span>";
			$("#enterPin").attr("hidden",true);
        }

    $("#hs").html(hs);
});
 });

$('#ok').click(function(e) {
        e.preventDefault();
		var t =$('#focusedInput').val();
		var cs =$('#csInput').val();
		if(t!=null && t!=""){
		if (cs!="" && cs!=null)
		{
        $.ajax({
			dataType: "json",
            url : "http://"+cs+":8080/"+t+"/project",
            data: data,
            success: function (data) {
                var projectname = data.name;
				var board = data.devices[0].boardType;
				$("#pn").html(projectname);
				$("#bt").html(board);
            }
        });
		$.ajax({
			dataType: "json",
            url : "http://"+cs+":8080/"+t+"/isHardwareConnected",
            data: data,
            success: function (data) {
				if(data==true){
					var hs =  "<span class='badge badge-success'>Online</span>";
					$("#enterPin").attr("hidden",false);
				}else{
					var hs =  "<span class='badge badge-danger'>Offline</span>";
					$("#enterPin").attr("hidden",true);
				}
				$("#hs").html(hs);
            }
        });
		}else {
		$.ajax({
			dataType: "json",
            url : "http://188.166.206.43/"+t+"/project",
            success: function (data) {
                var projectname = data.name;
				var board = data.devices[0].boardType;
				$("#pn").html(projectname);
				$("#bt").html(board);
            }
        });
		$.ajax({
			dataType: "json",
            url : "http://188.166.206.43/"+t+"/isHardwareConnected",
            success: function (data) {
				if(data==true){
					var hs =  "<span class='badge badge-success'>Online</span>";
					$("#enterPin").attr("hidden",false);
				}else{
					var hs =  "<span class='badge badge-danger'>Offline</span>";
					$("#enterPin").attr("hidden",true);
				}
				$("#hs").html(hs);
            }
        });	
		}
		}else{
			var nullAlert = "<div class='alert alert-danger alert-dismissible fade show'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>You must</strong> provide your auth token.</div>"
			$('.alert-message').prepend(nullAlert);
			$(".alert").first().hide().fadeIn(500).delay(5000).fadeOut(500, function () { $(this).remove(); });
		}
    });


   $("#subpin").click(function () {
   var t =$('#focusedInput').val();
   var cs =$('#csInput').val();
   if (cs!="" && cs!=null)	{
    var api4 = "http://"+cs+":8080/"+t+"/project";
   }else
   {
    var api4 = "http://188.166.206.43/"+t+"/project";
   }
		$.getJSON(api4, function(dataPin) {
		var pinLabel = dataPin.widgets[0].label
	var buttonlable = $('#epin').val();
    var divid = "div"+buttonlable;
    if(buttonlable!="")
     var bt ="<div id="+divid+" class='alert'><div class='col-sm-2'><legend>"+pinLabel+"</legend></div><div class='col-sm-2'><label class='switch'><input type='checkbox' id="+buttonlable+" value='On'   onclick='toggleCheckbox(this)' ><div class='slider round'></div></label></div><div class='col-sm-2'><a href='#' class='btn btn-danger' id="+divid+"    onclick='remo(this)'>Remove</a></div></div><br>";
     
 $("#adddata").append(bt); 
     $('#epin').val("");
      $.fn.myFunction(buttonlable);
	  });
    });
  
  
  
  
  
   $("#slidepin").click(function () {
     
	var buttonlable = $('#epin').val();
     var divid = "div"+buttonlable;
     if(buttonlable!="")
     var bt ="<div id="+divid+" class='alert'><div class='col-sm-2'><legend>"+buttonlable+"</legend></div><div class='col-sm-2'><input id="+buttonlable+" type='range' min='0' max='100' value='0' onchange='ranchang(this)'  /></div><div class='col-sm-2'><a href='#' class='btn btn-danger' id="+divid+"    onclick='remo(this)'>Remove</a></div></div><br>";
     
 $("#adddata").append(bt); 
     $('#epin').val("");
      $.fn.myFunction(buttonlable);
    });
});