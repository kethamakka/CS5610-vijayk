$(function () {
    $("#addPara").click(function () {
        addPara("New Paragraph", 250,150);
    });
});

function addPara(text, x, y){
    var p = $("<p contenteditable = 'true'>");
    $("body").append(p);
    p
        .html(text)
        .draggable({ grid: [20, 20] })
        .resizable()
        .css({
            "position": "absolute",
            "left": x,
            "top": y
        })

}