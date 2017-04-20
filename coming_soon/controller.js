(function (angular){
  'use strict';

  angular.module('moviecar.coming_soon', ['ngRoute'])

      .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/coming_soon', {
          templateUrl: 'coming_soon/view.html',
          controller: 'ComingSoonController'
        });
      }])

      .controller('ComingSoonController', [function() {
        //$routeProvider.otherwise({redirectTo: '/view2'});
      }]);
})(angular)
