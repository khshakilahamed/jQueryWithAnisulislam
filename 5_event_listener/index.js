/* document.querySelector('button').addEventListener('click', ()=> {
    document.querySelector('h2').innerHTML = "You have click the button";
}) */

/* -------------------------------------------------
                toggle class and add text
----------------------------------------------------*/

/* $('button').click(function(){
    // $('h2').text("You have clicked the button");
    $('h2').toggleClass('style1');
}); */


$('.myBtn').click(function(){
    var value =  this.innerHTML;

    $('h2').text(value + ' is clicked');
});