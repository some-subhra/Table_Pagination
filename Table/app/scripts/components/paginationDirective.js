
(function () {
   'use strict';
}());

angular.module('myApp').directive('pagination', function($timeout) {
  return {
      restrict: 'AE',
      replace: 'true',
      scope:{
      	maxlength : '=?',
      	configuration : '=?',
      },
      templateUrl: 'views/pagination.html',
      link: function(scope, elem, attrs) {
		scope.configuration.showOff = scope.configuration.numberOfRows;
        scope.callPrev= function() {
            scope.configuration.showOff= scope.configuration.showOff -1;
        	$timeout(function() {
                scope.configuration.begin = scope.configuration.begin-1;
            }, 500);
        };
        
        scope.callNext= function() {
        	scope.configuration.showOff= scope.configuration.showOff +1;
        	$timeout(function() {
                scope.configuration.begin = scope.configuration.begin+1;
            }, 500);
        }
    }
  };
});
