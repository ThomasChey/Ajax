$(function(){

    $('.champ').on('input', function(){

        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var errors = false;
        var email = $('#email').val();

        $('.champ').each(function(){

            if($('.champ').val().length == 0){
                errors = true
            }

            if(!emailReg.test(email)){
                errors = true
            }
 
        });

        if(errors){
            $('#submit').attr('disabled','disabled')
        }
        else{
            $('#submit').removeAttr('disabled');
        }
 

        

    });


});