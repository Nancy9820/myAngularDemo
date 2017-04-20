/**
 * Created by Fire on 2017/4/6.
 */
'use strict';
(function(angular){
//    创建正在热映模块
    var module = angular.module('movie.movie_list',[
        'ngRoute',
        'moviecate.services.http'
    ]);
//    配置模块的路由
    module.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/:category/:page',{
            templateUrl:'movie-list/view.html',//匹配后ngview处显示的页面内容
            controller: 'MovieListController'//匹配后调用的控制器
        })
    }]);
//    配置控制器
    module.controller('MovieListController', [
        '$scope',
        '$route',
        '$routeParams',
        'HttpService',
        'AppConfig',
        function($scope, $route, $routeParams, HttpService, AppConfig) {

            // 控制器 分为两步： 1. 设计暴露数据，2. 设计暴露的行为
            //jsonp形式跨域访问服务器,参数：URL，data，callback
            HttpService.jsonp(
                'http://api.douban.com/v2/movie/'+$routeParams.category,
            //    $routeParams的数据来源：1.路由配置出来的。2.？后边的参数
                {start:start,count:count,q:$routeParams.q},
            //    callback函数
                function(data){
                    console.log(data);
                }
            );

        }
    ]);
}(angular));
