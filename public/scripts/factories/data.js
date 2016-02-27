myApp.factory('DataFactory', ['$http', function($http){
    var data = ['Kailey', 'Kati', 'Annette'];

    var hobbies = ['Modern Dance', 'Lunching', 'Climbing'];

    //PRIVATE
    //var getData = function(){
    //    return data;
    //};

    var addPerson = function(name) {
        data.push(name);
    };

    var addHobby = function(hobby) {
        hobbies.push(hobby);
    };

    //PUBLIC
    var publicApi = {
        peopleData: function(){
            return data;
        },
        addName: function(name) {
            addPerson(name);
        },
        hobbyData: function() {
            return hobbies;
        },
        addHobby: function(hobby) {
            addHobby(hobby);
        }
    };

    return publicApi;
}]);