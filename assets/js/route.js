/**
 * Created by mateu on 02/11/2016.
 */
var approuter = angular.module('App.router',[]);

approuter.config(function ($stateProvider, $urlRouterProvider) {

    const home = {
        name: 'home',
        url: '/home',
        templateUrl: 'app/components/home/home.html'
    };

    $stateProvider.state(home);
    $urlRouterProvider.otherwise('/home');
});
