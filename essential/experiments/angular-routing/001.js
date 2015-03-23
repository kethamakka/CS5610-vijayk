var app = angular.module("movieApp", ['ngRoute']);

app.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/home', {
            templateUrl: 'movie/home.html'
            ,controller: 'homeCtrl'
        }).
        when('/profile', {
            templateUrl: 'movie/profile.html'
            //,controller: 'PhoneDetailCtrl'
        }).
        when('/details', {
            templateUrl: 'movie/details.html'
            //,controller: 'PhoneDetailCtrl'
        }).
        otherwise({
            redirectTo: '/home'
        });
  }]);

app.controller("homeCtrl", function ($scope, $http, movieService) {
    $scope.searchMovies = function () {
        var title = $scope.searchByTitle;
        movieService.searchMovies(title, function (response) {
            $scope.movies = response;
        });
    };
});