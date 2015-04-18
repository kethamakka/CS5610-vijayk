$(function () {
    $("#findPpl").click(function () {
        $.ajax({
            type: "GET",
            url: '/api/findppl',
            dataType: "JSON",
            success: function (data) {
                console.log(data);
            }
        })
    });
});
