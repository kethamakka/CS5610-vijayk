var app = angular.module("MyMovies", []);

app.controller("MovieController", function ($scope, $http) {

    $scope.searchMovies = function () {
        var title = $scope.searchByTitle;
        $http.jsonp("http://www.myapifilms.com/imdb?title="+ title +"&format=JSONP&aka=0&business=0&seasons=0&seasonYear=0&technical=0&filter=N&exactFilter=0&limit=10&lang=en-us&actors=N&biography=0&trailer=0&uniqueName=0&filmography=0&bornDied=0&starSign=0&actorActress=0&actorTrivia=0&movieTrivia=0&awards=0&moviePhotos=N&movieVideos=N&callback=JSON_CALLBACK")
        .success(function (response) {
            console.log(response);
            $scope.movies = response;
        });
    }
/*
    var movies = [
        { title: "Avatar", directors: "James Camaron", year: 2009, plot: "plot" },
        { title: "Godfather", directors: "Francis Ford Coppola", year: 1972, plot: "plot" },
        { title: "Cinema Paradiso", directors: "Giusseppe Tornatore", year: 1988, plot: "plot" },
        { title: "One Flew Over the Cockoo's Nest", directors: "Milos Foremen", year: 1975, plot: "plot" }
    ];

    $scope.movies = movies;
*/
    $scope.deleteMovie = function (movie) {
        // console.log("removing the movie");
        console.log($scope.movies.indexOf(movie));
        var index = $scope.movies.indexOf(movie);
        $scope.movies.splice(index, 2);
    };

    $scope.addMovie = function (movie) {
        var newMovie = {
            title: $scope.movie.title,
            directors: $scope.movie.directors,
            year: $scope.movie.year,
            plot: $scope.movie.plot
        };
        $scope.movies.push(newMovie);
    }

    $scope.editMovie = function (movie) {
        $scope.movie = movie;
    }

    $scope.updateMovie = function (movie) {
        alert($scope.movie.title);
    }
});