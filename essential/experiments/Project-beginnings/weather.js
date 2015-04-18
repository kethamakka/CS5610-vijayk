var app = angular.module("weatherApp", []);

app.controller("weatherController", function ($scope, $http, $sce) {
    $scope.getWeather = function () {
        console.log("Hi from Controller");
        $http.get(" http://api.wordnik.com:80/v4/word.json/perfect/definitions?limit=10&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5")
        .success(function (response) {
            console.log(response);
//            var result = response.query.results.channel.item.description;
  //          console.log(result);
    //        $scope.results = $sce.trustAsHtml(result);
        });
    };
});

/*var word = $("#inputquery").val();
$.ajax({
    url: "http://api.wordnik.com:80/v4/word.json/" + word + "/definitions?limit=10&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5",
    success: renderData
});*/