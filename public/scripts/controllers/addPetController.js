myApp.controller('addPetController', ['$scope', '$http' ,function($scope, $http){
console.log('in addPetController');


  $scope.addThisPet = function(){
      console.log( 'in addThisPet');

      //put new pet into object
      var newPet = {
        name: $scope.petName,
        age: $scope.petAge,
        animalType: $scope.petType,
        petUrl: $scope.petLink
      }; // end newPet object

      this.product = newPet;

      //reset inputs after adding pet
      $scope.petName = null;
      $scope.petAge = null;
      $scope.petType = null;
      $scope.petLink = null;

      console.log( 'sending:', newPet );
      // test send via http to post route

      $http({
      method: 'POST',
      url: '/addNewPet',
      data: newPet
    }).then(function(response){
      console.log('this is from the server', response);

    });

  }; // end addThisPet



}]);//end addPetController
