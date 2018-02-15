/* HOME PAGE SLIDER */

$(document).ready(function(){
 

  $('#but1').click(function(){
				$('#firstChoice').addClass('hideBlock');
                $('#secondChoice').addClass('showBlock');
				$('#secondChoice').removeClass('hideBlock');
				
				
    });
	$('#but2').click(function(){
				$('#firstChoice').addClass('hideBlock');
                $('#secondChoice').addClass('hideBlock');
				$('#thirdChoice').addClass('showBlock');
				$('#secondChoice').removeClass('showBlock');
				$('#thirdChoice').removeClass('hideBlock');
				
				
    });

	$("#firstChoice input[type=radio]").click(function(){
		$('#but1').removeAttr('disabled');	
	 });
	
	$("#secondChoice input[type=radio]").click(function(){
		$('#but2').removeAttr('disabled');	
	 });

  
  
  
  });


