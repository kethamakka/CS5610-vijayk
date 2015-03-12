$(function () {
    $("#addPara").click(function () {
        addPara("New Paragraph", 250, 150);
    });
    $("#save").click(save);
    $("#load").click(load);
});

function load() {
    var rPage = localStorage.getItem("page");
    if (rPage == null)
        return
    rPage = JSON.parse(rPage);
    console.log(rPage);
    for (var p in rPage) {
        var rPar = rPage[p];
        var text = rPar.text;
        var x = rPar.x;
        var y = rPar.y;
        addPara(text, x, y);
    }
}


function save() {
    var paragraphs = [];
    var allPs = $("p"); // grabbing hold of all the paragraphs
    allPs.each(function (index, item) { // iterating over the received array which contains raw DOM.
        var p = $(item); // converting the DOM element to a jQuery element
        var posi = p.position(); //
        var cont = p.text(); // querying the actual cotent inside the item. 
        var Pobj = { //constructing the object to be stored in localstorage
            text: cont,
            x: posi.left,
            y: posi.top
        };
        paragraphs.push(Pobj);  //adding the object of all the paragraphs to the array created for this
    });
    // now that we have an array of the objects, we are ready to store them in. But the local storage only accepts strings
    // so we use JSON functions which are inherant in every browser. 
    var str = JSON.stringify(paragraphs); // stringify will converst any object notation to string.
    localStorage.setItem("page", str); //then the local storage is used to store the elements using setItem()
}

function addPara(text, x, y) {
    var p = $("<p contenteditable = 'true'>");
    $("body").append(p);
    p.html(text)
      .draggable({ grid: [20, 20] })
      .resizable()
      .css({
          "position": "absolute",
          "left": x,
          "top": y
      });
};