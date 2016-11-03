(function () {
   'use strict';
}());

angular.module('myApp',[]).controller('mainController', ['$scope','$http', function mainController($scope,$http) {  
 
   $scope.config = {
   		sortType:'login',
   		sortReverse:false,
   		searchuser:'' ,
   		numberOfRows:2,
   		begin:'',
   		showOff:'',
   		buttonDisable : true
   }
   
   $http.get("https://api.github.com/users?since=135").then(function(response) {
        $scope.userData = response.data;
        
    }).finally(function() {
    	$scope.config.buttonDisable = false;
	});
    
}]);