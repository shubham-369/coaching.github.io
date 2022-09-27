$(document).ready(function(){
	$('#submit').click(function(){
		var user = $('#name').val();
		if(user == ""){
			$('#show-error1').html('Please enter a name');
			$('#show-error1').css('color','red');
			return false;
		}
		if((user.length<=2) || (user.length>=20)){
			$('#show-error1').html('Name should be between 3-25 letters');
			$('#show-error1').css('color','red');
			return false;
		}
		
	});
	$('#submit').click(function(){
		var number = $('#number').val();
		if(number == ""){
			$('#show-error2').html('Please enter your mobile number');
			$('#show-error2').css('color','red');
			return false;
		}
		if((number.lenght<=9) || (number.length>=11)){
			$('#show-error2').html('Enter a correct 10 digit mobile number');
			$('#show-error2').css('color','red');
			return false;
		}
	});
	$('#submit').click(function(){
		var email = $('#email').val();
		if(email == ""){
			$('#show-error3').html('Please enter your email');
			$('#show-error3').css('color','red');
			return false;
		}
		if(emial.indexof('@')<0 || email.indexof(".")<0){
			('#show-error3').html('Please enter email correctly');
			$('#show-error3').css('color','red');
			return false;
		}
	});
	$('#submit').click(function(){
		var course = $('#course').val();
		if(course == ""){
			$('#show-error4').html('Please select a course');
			$('#show-error4').css('color','red');
			return false;
		}
	});
	$('#submit').click(function(){
		var message = $('#message').val();
		if(message == ""){
			$('#show-error5').html('Please enter your message');
			$('#show-error5').css('color','red');
			return false;
		}
	});
});