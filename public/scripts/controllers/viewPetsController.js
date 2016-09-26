myApp.controller('viewPetsController', ['$scope', '$http' ,function($scope, $http){
console.log('in viewPetsController');

  //build an array to get all pets from DB
  $scope.showPets = [];

  $http ({
    method: 'GET',
    url:'/viewPets'
  }).then(function(response){
    console.log(response);
    $scope.showPets = response.data;
    //log all the pets being shown
    console.log($scope.showPets);
  });//end all pets


}]);//end viewPetsController
