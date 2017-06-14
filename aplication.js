$(document).ready(function () {
    $.getJSON("http://www.colourlovers.com/api/palettes/top?jsonCallback=?", function (colorPalettes) {
            printColors(colorPalettes);
        });
    function printColors(colorPalettes) {
        var color = "#" + colorPalettes[0].colors[0];
        var color1 = "#" + colorPalettes[0].colors[1];
        var color2 = "#" + colorPalettes[0].colors[2];
        $(".button").on("click", function () {
            $("body").css("background-color", color);
        });
        $(".button-two").on("click", function () {
            $("body").css("background-color", color1);
        });
        $(".button-third").on("click", function () {
            $("body").css("background-color", color2);
        });
    };
});
