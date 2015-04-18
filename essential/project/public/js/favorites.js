﻿$(function(){
    $("#favorites").click(function () {
        var notification = $(".notify").clone();
        notification.show()
        .appendTo(".container")
        .draggable()
        .resizable()
        .css({
            "position": "absolute",
            "left": 400,
            "top": 100
        });

        $(".notify #ndel").click(function () {
            notification.hide();
        });

        var username = localStorage.getItem("dashboard");
        var ul = $(".notify").find(".render")[0];
        var content = $(notification).find(".ncontent")[0];
                
        $.ajax({
            type: "GET",
            url: "/api/favorite/" + username,
            success: function (data) {
                var favList = data.favorites;
                if (favList.length != 0) {
                    for (var i in favList) {
                        var data = favList[i];
                        var kind = data.tileType;
                        var story = data.story;
                        var li = $("<li class='list-group-item-success'><span class='badge' style='margin:3px'>" + kind + "</span>" + story + "</li>");
                        var result = $(ul).append(li);
                        $(content).append(result);
                    }
                }
                else {
                    var li = $("<li class='list-group-item-danger'><span class='badge' style='margin:3px'>Note</span>There are no favorites yet for you.</li>");
                    $(content).append($(ul).append(li));
                }
            },
            dataType: "json"
        });
    }); 
});

