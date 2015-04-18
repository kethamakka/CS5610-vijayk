var i = $(".tile").length;

$(function () {
    $("#addTile").click(function () {
        addTile(250, 150);
    });
});

function addTile(x, y) {
    var i = $(".tile").length;
    console.log(i);
    //var tile = $('<div class="tile" id="tile' + (i+1) + '"><div class="header"><div class="title"><span>Pick a category here</span></div><div class="btn-group"><button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="true"><span class="caret"></span></button><ul class="dropdown-menu" role="menu"><li><a href="#">Google</a></li><li><a href="#">Maps</a></li><li><a href="#">Dictionary</a></li><li class="divider"></li><li><a href="#">Clock</a></li></ul></div></div><div class="cont-contain"><div class="content"></div></div>');
    var tile = $(".template").clone();
    tile.removeClass("template").addClass("tile");
    tile.removeAttr("id").attr('id', 'tile'+ (i+1));
    tile.appendTo(".container")
        .draggable()
        .resizable()
        .css({
            "position": "absolute",
            "left": x,
            "top": y
        });
    

    $("body").on("click", "#setGoogle", function (event) {
        if ($(".google").length == 0) {
            var targ = $(event.target);
            var content = $(targ.parents(".content")[0]);
            var googleTemplate = $(".googleTemplate").clone();
            googleTemplate.removeClass("googleTemplate").addClass("google disp");
            googleTemplate.show();
            content.empty().append(googleTemplate);
            $(".tile").resizable('destroy');
          //  $(targ.parents(".tile")).empty().html("Google");
            $(".del").show();
            return;
        }
        else {
            $(".warning").show();
            $(".warning").siblings().fadeOut();
        }
        $(".del").click(function () {
            $(this).parents(".tile").remove();
        });



    });

    $("body").on("click", "#setWeather", function (event) {
        var targ = $(event.target);
        var content = $(targ.parents(".content")[0]);
        var weatherTemplate = $(".weatherTemplate").clone();
        weatherTemplate.removeClass("weatherTemplate").addClass("weather");
        weatherTemplate.show();
        content.empty().append(weatherTemplate);
        return;
    });

    $("body").on("click", "#setYelp", function (event) {
        if ($(".yelp").length == 0) {
            var targ = $(event.target);
            var content = $(targ.parents(".content")[0]);
            var yelpTemplate = $(".yelpTemplate").clone();
            yelpTemplate.removeClass("yelpTemplate").addClass("yelp");
            yelpTemplate.show();
            content.empty().append(yelpTemplate);
            return;
        }
        else {
            $(".warning").show();
            $(".warning").siblings().fadeOut();
        }
    });

    $("body").on("click", "#setMaps", function (event) {
        if ($(".maps").length == 0) {
            var targ = $(event.target);
            var content = $(targ.parents(".content")[0]);
            var mapsTemplate = $(".mapsTemplate").clone();
            mapsTemplate.removeClass("mapsTemplate").addClass("maps");
            mapsTemplate.show();
            content.empty().append(mapsTemplate);
            return;
        }
        else {
            $(".warning").show();
            $(".warning").siblings().fadeOut();
        }
    });

    $("body").on("click", "#setDir", function (event) {
        if ($(".directions").length == 0) {
            var targ = $(event.target);
            var content = $(targ.parents(".content")[0]);
            var dirTemplate = $(".dirTemplate").clone();
            dirTemplate.removeClass("dirTemplate").addClass("directions");
            dirTemplate.show();
            content.empty().append(dirTemplate);
            return;
        }
        else {
            $(".warning").show();
            $(".warning").siblings().fadeOut();
        }
    });

    $("body").on("click", "#setNews", function (event) {
        if ($(".news").length == 0) {
            var targ = $(event.target);
            var content = $(targ.parents(".content")[0]);
            var newsTemplate = $(".newsTemplate").clone();
            newsTemplate.removeClass("newsTemplate").addClass("news");
            newsTemplate.show();
            content.empty().append(newsTemplate);
            return;
        }
        else {
            $(".warning").show();
            $(".warning").siblings().fadeOut();
        }
    });

    $("body").on("click", "#setClock", function (event) {
        var targ = $(event.target);
        var content = $(targ.parents(".content")[0]);
        var clockTemplate = $(".clockTemplate").clone();
        clockTemplate.removeClass("clockTemplate").addClass("clock");
        clockTemplate.show();
        content.empty().append(clockTemplate);
    });

    $("body").on("click", "#setImg", function (event) {
        if ($(".img").length == 0) {
            var targ = $(event.target);
            var content = $(targ.parents(".content")[0]);
            var imgTemplate = $(".imgTemplate").clone();
            imgTemplate.removeClass("imgTemplate").addClass("img");
            imgTemplate.show();
            content.empty().append(imgTemplate);
            return;
        }
        else {
            $(".warning").show();
            $(".warning").siblings().fadeOut();
        }
    });

    $("body").on("click", "#setCam", function (event) {
        if ($(".cam").length == 0) {
            var targ = $(event.target);
            var content = $(targ.parents(".content")[0]);
            var camTemplate = $(".camTemplate").clone();
            camTemplate.removeClass("camTemplate").addClass("cam");
            camTemplate.show();
            content.empty().append(camTemplate);
            return;
        }
        else {
            $(".warning").show();
            $(".warning").siblings().fadeOut();
        }
    });

$(".warning").click(function () {
        $(".warning").hide();
        $(".tile").show();
        $(".clock").show();
    });
}



