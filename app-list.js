/**
 * Created by Fire on 2017/4/6.
 */
'use strict';
angular.module('moviecat',[
    'ngRoute',//路由
    'moviecat.movie_list'
])
    .config('$routeProvider',function($routeProvider){
        $routeProvider.otherwise({
            redirectTo:'/in_theaters/1'});
    })
    .controller('SearchController',[
        '$scope',
        '$route',
        'AppConfig',
        function($scope,$route,AppConfig){
            console.log('SearchController');
        }
    ])
