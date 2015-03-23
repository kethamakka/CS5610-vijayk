var app = angular.module("MyMovies", []);

app.controller("MovieController", function ($scope){
    

    var movies = [
        { title: "Avatar", director: "James Camaron", year: 2009, plot: "plot" },
        { title: "Godfather", director: "Francis Ford Coppola", year: 1972, plot: "plot" },
        { title: "Cinema Paradiso", director: "Giusseppe Tornatore", year: 1988, plot: "plot" },
        { title: "One Flew Over the Cockoo's Nest", director: "Milos Foremen", year: 1975, plot: "plot" }
    ];

    $scope.movies = movies;

    $scope.deleteMovie = function (movie) {
        // console.log("removing the movie");
        console.log($scope.movies.indexOf(movie));
        var index = $scope.movies.indexOf(movie);
        $scope.movies.splice(index, 1);
    };

    $scope.addMovie = function (movie) {
        var newMovie = { 
            title: $scope.movie.title, 
            director: $scope.movie.director, 
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