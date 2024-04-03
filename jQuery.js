$(document).ready(function(){
    /*$("p").dblclick(function(){
        console.log("U clicked on paragraph");
        $('.even').hide();
    });
    $('#p2').mouseenter(function(){
        alert('You hovered on p2.');
    });
    $('#p3').mousedown(function(){
        alert('You pressed on p3.');
    });
    $('body').mouseleave(function(){
        alert("Your are leaving the page.");
    });
    $('#p1').mouseleave(function(){
        alert("You mouse on p1.");
    });*/
    $('input').focus(function(){
        $(this).css("background-color","grey");
    });
    $('input').blur(function(){
        $(this).css("background-color","white");
    });

});
console.log("I am using jQuery");