/* $('.my-div h1').text('Hello');

$('#p1').text('hi');

$('h1, p').text('hi'); */

// $('p').html('<b>Good Bye </b>');


/* $('p').append(' Good Bye');
$('p').prepend('Hi, '); */

var myPara1 = $('<p></p>').text("This is a paragraph 0");

// $('#p1').after(myPara1);
$('#p1').before(myPara1);

