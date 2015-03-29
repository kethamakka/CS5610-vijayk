$(function () {
    $("#addTile").click(function () {
        addTile(250, 150);
    });
});

function addTile(x, y) {
    var tile = $('<div class="tile"><div class="header"><div class="title"><span>Pick a category here</span></div><div class="btn-group"><button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="true"><span class="caret"></span></button><ul class="dropdown-menu" role="menu"><li><a href="#">Action</a></li><li><a href="#">Another action</a></li><li><a href="#">Something else here</a></li><li class="divider"></li><li><a href="#">Separated link</a></li></ul></div></div></div>');
    $(".container").append(tile);
    tile
        .draggable()
        .resizable()
        .css({
            "position": "absolute",
            "left" : x,
            "top" : y})
}