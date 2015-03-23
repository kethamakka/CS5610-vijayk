var app = angular.module("routingApp", ['ngRoute']);

app.controller("routingController", function($scope){
    $scope.hello = "Hello World";
});

app.config(['$routeProvider',
  function($routeProvider) {
      $routeProvider.
        when('/home', {
            templateUrl: 'partials/home.html'
          //  ,controller: 'PhoneListCtrl'
        }).
        when('/about', {
            templateUrl: 'partials/about.html'
            //,controller: 'PhoneDetailCtrl'
        }).
        when('/contact', {
            templateUrl: 'partials/contact.html'
            //,controller: 'PhoneDetailCtrl'
        }).
        otherwise({
            redirectTo: '/home'
        });
  }]);