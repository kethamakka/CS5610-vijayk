jQuery(function () {
    jQuery("h1").css("color", "red");
    jQuery(".redBg").css("background-color", "red");
    jQuery(".blueBg").css("background-color", "blue");

    $("p").append(" This is new content");
    // $("p.sub").css({ "backgroung-color": "black", "color": "white" });
    $("body").append("<p>this is a new pararaph</p>");
    $("body").prepend("<p>this is a new pararaph</p>");
});

