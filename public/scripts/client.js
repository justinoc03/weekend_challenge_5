console.log('js is sourced');

var myApp = angular.module("myApp", ["ngRoute"]);

myApp.controller( 'poeDameron', [ '$scope', '$http', function( $scope, $http ){
  console.log( 'NG' );

}]);

myApp.config(["$routeProvider", function($routeProvider){
    $routeProvider.
      when("/home", {
        templateUrl: "partials/home.html",
        controller: "homeController"
      }).
      when("/addPet", {
        templateUrl: "partials/addPet.html",
        controller: "addPetController"
      }).
      when("/viewPets", {
        templateUrl: "partials/viewPets.html",
        controller: "viewPetsController"
      }).
      otherwise({
        redirectTo: "/home"
      });
}]);
