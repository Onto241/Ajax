<<<<<<< HEAD
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
=======
$(document).ready(function() {
    $(".button").click(function() {
        $.getJSON("http://www.colourlovers.com/api/palettes/top?jsonCallback=?", { numResults: 3 }, function(colorPalettes) { printColors(colorPalettes)});
        function printColors(colorPalettes){
            for(var palette in colorPalettes){
                console.log(colorPalettes[palette].title);
                $("body").css("background-color", "#" + colorPalettes[palette].colors[0]);
            }
        }
    });
});

$(document).ready(function(){
    $(".button-two").click(function(){
        $.getJSON("http://www.colourlovers.com/api/palettes/top?jsonCallback=?", { numResults: 3 }, function(colorPalettes) { printColors(colorPalettes)});
        function printColors(colorPalettes){
            for(var palette in colorPalettes){
                console.log(colorPalettes[palette].title);
                $("body").css("background-color", "#" + colorPalettes[palette].colors[1]);
            }
        }
    });
});

$(document).ready(function(){
    $(".button-third").click(function(){
        $.getJSON("http://www.colourlovers.com/api/palettes/top?jsonCallback=?", { numResults: 3 }, function(colorPalettes) { printColors(colorPalettes)});
        function printColors(colorPalettes){
            for(var palette in colorPalettes){
                console.log(colorPalettes[palette].title);
                $("body").css("background-color", "#" + colorPalettes[palette].colors[2]);
            }
        }
    });
});
>>>>>>> origin/master
