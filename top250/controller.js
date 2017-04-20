(function (angular){
  'use strict';

  angular.module('moviecar.top250', ['ngRoute'])

      .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/top250', {
          templateUrl: 'top250/view.html',
          controller: 'ComingSoonController'
        });
      }])

      .controller('ComingSoonController', [function() {
        //$routeProvider.otherwise({redirectTo: '/view2'});
      }]);
})(angular)
