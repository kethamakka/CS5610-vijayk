var app = angular.module("HelloWorldApp", []);

app.controller("HelloController",
    function ($scope) {
        var employee = { first: "Saradhi", last: "Kethamakka" };
        $scope.employee = employee;

        var employees = [{ first: "Saradhi", last: "Kethamakka" },
                         { first: "Archana", last: "Durbhaka" },
                         { first: "Kachak", last: "Durbhaka" },
                         { first: "Kichick", last: "Kethamakka" }];
        $scope.employees = employees;
        $scope.hello = "Hello from AngularJS";
        console.log("Hello from controller");
});