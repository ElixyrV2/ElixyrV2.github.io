jQuery(document).ready(function($){
    $('body').on('click', '.password-control', function(){

     if ($('#password-input').attr('type') == 'password'){

      $(this).addClass('view');
      $('#password-input').attr('type', 'text');

     } 

     else {
      
        $(this).removeClass('view');
        $('#password-input').attr('type', 'password');

     }

     return false;
    });

    $('body').on('click', '.password-control2', function(){

        if ($('#password-input2').attr('type') == 'password'){

         $(this).addClass('view');
         $('#password-input2').attr('type', 'text');

        } 
        
        else {

         $(this).removeClass('view');
         $('#password-input2').attr('type', 'password');
        
        }

        return false;
       });

       $("#password-input2").on("keyup", function() {
	
		let value_input1 = $("#password-input").val();
		let value_input2 = $(this).val(); 
		
		if(value_input1 != value_input2) { 
		
			$(".error").html("Пароли не совпадают!"); 
			$("#submit").attr("disabled", "disabled");
			
		} 
        
        else { 
		
			$("#submit").removeAttr("disabled"); 
			$(".error").html("");
			
		}
		
	});
    });