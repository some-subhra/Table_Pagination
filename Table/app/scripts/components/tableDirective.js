(function () {
   'use strict';
}());

angular.module('myApp').directive('customtable', function() {
  return {
      restrict: 'AE',
      scope: {
            ngModel: '=?',
            configuration : '=?'
        },
      replace: 'true',
      templateUrl: 'views/table.html'
  };
});