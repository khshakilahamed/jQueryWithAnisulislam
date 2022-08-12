$('#showHide').click(function(){
    // $('#div1').hide(1000);
    // $('#div1').hide(1000).show(1000);

    $('#div1').toggle(1000);
});

$('#fadeInFadeOut').click(function(){
    // $('#div1').fadeOut(1000);
    // $('#div1').fadeOut(2000).fadeIn(2000);
    $('#div1').fadeToggle(2000);
});

$('#fadeTo').click(function(){
    /* -----------------------
    $('#div1').fadeTo(time, opacity);
    --------------------------*/
    $('#div1').fadeTo(2000, 0.4);
});

$('#slideUpSlideDown').click(function(){
    // $('#div1').slideUp(2000);
    // $('#div1').slideDown(2000);
    // $('#div1').slideUp(2000).slideDown(2000);
    $('#div1').slideToggle(2000);
});

$('#animateBtn').click(function(){
    $('#div1').animate(
        {opacity: '0.5', 
        width: '400px', 
        height: 'auto',
        padding: '30px',
        marginLeft: '20px',
    }, 2000);
});

