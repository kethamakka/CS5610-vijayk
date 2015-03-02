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

    var employee = { fName: "Saradhi", lName: "Kethamakka" };

    var employ = $("#employee")
    employ.find("#fName").html(employee.fName);
    employ.find("#lName").html(employee.lName);

    var employees = [ 
        { fName: "Saradhi", lName: "Kethamakka" },
        { fName: "Pavan", lName: "Putcha" },
        { fName: "Bapi", lName: "Akula" },
        { fName: "Altaf", lName: "Mohammad" }
    ];

    var employs = $("#employees");
    employs.empty();
    for (var j in employees) {
        var e = employees[j];
        var tr = $("<tr>");
        var td = $("<td>");
        td.append(e.fName);
        tr.append(td);
        td = $("<td>");
        td.append(e.lName);
        tr.append(td);
        employs.append(tr);
    }

})