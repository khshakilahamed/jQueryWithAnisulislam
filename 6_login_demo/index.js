$('#loginBtn').click(function(){
    var password1 = $('#pass1').val();
    var password2 = $('#pass2').val();

    if(password1 !="" && password2 !=""){
        if(password1 == password2){
            alert("Successfully login");
        }
        else{
            alert("Please, enter correct password");
        }
    }
    else{
        alert("Please enter password")
    }
});