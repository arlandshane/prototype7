
$(".btn").click(function () {
    $(".brands").css("opacity", "1");
    $("p").css("margin", "15% 0 0 0");
    $("p").text("O");
    $("p").css("font-family", "Montserrat, serif");
    $("p").css("font-size", "3rem");
    $(".btn").css("background-color", "pink");
    $(".btn").css("border-radius", "100%");
    $(".btn").css("transform", "translate3d(5rem, 18rem, 0)");
    $(".btn").css("transition-duration", "700ms");
    $(".btn").css("width", "2.5rem");
    $(".btn").css("height", "4.3rem");
    $("p").css("font-family", "Montserrat, serif");
    $("p").css("font-size", "2.2rem");
    $("p").text("X");
    $("p").css("margin", "0");
    $("p").css("position", "inherit");
    $("p").css("left", "35%");
    $("p").css("transform", "translate3d(0, 0.77rem, 0)");
    $(".btn").css("background-color", "peachpuff");
    $(".tile>img").css("transition-duration", "700ms").css("opacity", "1");
    $(".tile").css("background", "none");
    $("button").css("transition-duration", "700ms");
    $(".tile, .1").hover(function () {
        $(".1>button").css("opacity", "1").css("background-color", "pink");
    }, function () {
        $(".1>button").css("opacity", "0").css("background-color", "pink");
    });
    $(".tile").hover(function () {
        $("button").css("opacity", "1").css("background-color", "pink");
    }, function () {
        $("button").css("opacity", "0").css("background-color", "pink");
    });
    $("body").css("background-image", "linear-gradient(to right, rgb(255, 192, 249), pink, rgb(255, 192, 249))");
    $(".tile").css("transition-duration", "700ms");
    $(".1").css("transform", "translate3d(23.5rem, 0, 0)");
    $(".2").css("transform", "translate3d(-30%, -23.4rem, 0)");
    $(".3").css("transform", "translate3d(40%, 18.4rem, 0)");
    $(".4").css("transform", "translate3d(-100%, -5rem, 0)");
    $(".5").css("transform", "translate3d(-23.5rem, 0, 0)");
    $(".6").css("transform", "translate3d(100%, -5rem, 0)");
    $(".7").css("transform", "translate3d(30%, -23.2rem, 0)");
    $(".8").css("transform", "translate3d(-40%, 18.4rem, 0)");
});