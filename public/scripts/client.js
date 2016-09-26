console.log('js is sourced');

var myApp = angular.module("myApp", ["ngRoute"]);

//directly connects with index.html via the ng-app and ng-controller parts
myApp.controller( 'petsHome', [ '$scope', '$http', function( $scope, $http ){
  console.log( 'NG is sourced' );

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
