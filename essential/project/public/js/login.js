var app = angular.module("loginApp", []);

app.controller("logCtrl", function ($scope, $http, $rootScope) {
    console.log("hello")
    $("#getIn").click(function () {
        var un = $scope.unTxt;
        var pwd = $scope.pwTxt;
        var user = { username: un, password: pwd };
        $http.post('/login', user)
        .success(function (response) {
            var errorMsg = "Log In credentials are incorrect. Please try again."
            console.log(response.username);
            localStorage.setItem("dashboard", response.username);
            location.href = "yourSpace.html";
        })
    });
});