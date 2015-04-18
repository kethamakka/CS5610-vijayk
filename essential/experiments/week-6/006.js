$(function () {
    $("span").css("color", "blue");
    var mainTitle = "Title generated Dynamically";
    $("#main-title").html(mainTitle);

    var geners = ["dynamic li 1", "dynamic li 2", "dynamic li 3", "dynamic li 4"];

    var ul = $("#geners");
    ul.empty();
    for (var i in geners) {
        var li = $("<li> <b>" + geners[i] + "</b> </li>");
        ul.append(li);
    }

    var employee = { fName : "Saradhi", lName : "Kethamakka" };

    var employ  = $("#employee")
    console.log(employee);
    employ.find("#fName").html(employee.fName);
    employ.find("#lName").html(employee.lName);
})