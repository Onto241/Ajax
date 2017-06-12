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