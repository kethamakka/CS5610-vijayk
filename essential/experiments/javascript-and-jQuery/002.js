jQuery(function () {
    jQuery("h1").css("color", "red");
    jQuery("p#1").css("background-color", "teal");
    jQuery("p#2").css("color", "teal");
    jQuery("p#3")
        .css({
            "color": "white",
            "background-color": "teal"
        }); //JSON notation. Object literal notation.
});

