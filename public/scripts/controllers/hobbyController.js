myApp.controller('HobbyController', ['$scope', 'DataFactory', function($scope, DataFactory) {
    console.log('Hobby Controller');

    $scope.message = 'Hobby Controller!';
    $scope.hobbies = [];
    $scope.hobbyName = '';
    $scope.dataFactory = DataFactory;

    $scope.hobbies = $scope.dataFactory.hobbyData();

    $scope.addHobby = function() {
        console.log($scope.hobbyName);
        $scope.dataFactory.addHobby($scope.hobbyName);

        $scope.hobbyName = '';

        //$scope.hobbies = $scope.dataFactory.hobbyData();
    }

    //$scope.people = [];
    //$scope.personName = '';
    //$scope.dataFactory = DataFactory;
    //
    //$scope.people = $scope.dataFactory.peopleData();
    //
    //$scope.addPerson = function() {
    //    console.log($scope.personName);
    //    $scope.dataFactory.addName($scope.personName);
    //
    //    $scope.personName = '';
    //
    //    //$scope.people = $scope.dataFactory.peopleData();
    //}

}]);