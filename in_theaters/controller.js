(function (angular) {
    'use strict';

    angular.module('moviecat.in_theaters', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/in_theaters', {
                templateUrl: 'in_theaters/view.html',
                controller: 'InTheatersController'
            });
        }])

        .controller('InTheatersController', ['$http', '$scope', function ($http, $scope) {
//      http://api.douban.com/v2/movie/coming_soon
//	控制器设计分两步：1、暴露的属性。2、暴露的功能
//		angularjs获取本地json数据
//            方法一：
//		step1:导入数据，或者读取数据
//            $http.get("./JSON/movieData.json").success(
//                function (importData) {
//                    //		step2：绑定数据
//                    $scope.title = importData.title;
//                    $scope.totalRecord = importData.count;
//                    //$scope.indexPage = importData.
//                    $scope.movieData = importData.subjects;
//                });
        //    方法二：
            $http.get("./JSON/movieData.json").then(
                function (res) {
                    if(res.status == 200){
                    $scope.title = res.data.title;
                    $scope.totalRecord = res.data.count;
                    //$scope.indexPage = importData.
                    $scope.movieData = res.data.subjects;
                    }else{
                        console.log('数据获取失败');
                    }
                }),function(err){
                console.log(err);
            };
        //angularjs跨域获取服务器数据，采用的是jsonp的方法


        }]);
})(angular)
