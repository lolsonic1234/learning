var set = setInterval(alertThem, 10000)
clearInterval(set)


$('.derp').click(function(){
    set = setInterval(alertThem, 10000)
    $('h1').css({
        "transition": "font-size 10s, color 10s",
        "color": "red",
        "font-size": "50px"
    })
    $('h2').css({
        "transition": "font-size 10s, color 10s",
        "color": "red",
        "font-size": "50px"
    })
    $('h3').css({
        "transition": "font-size 10s, color 10s",
        "color": "red",
        "font-size": "50px"
    })
    $('h4').css({
        "transition": "font-size 10s, color 10s",
        "color": "red",
        "font-size": "50px"
    })
    $('body').css({
        "transition": "background-color 10s",
        "background-color": "black"
    })
});

function alertThem(){
    alert("This was made using only 33 lines!");
    clearInterval(set);
}
