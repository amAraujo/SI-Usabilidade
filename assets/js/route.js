/**
 * Created by mateu on 02/11/2016.
 */
angular.module('app.route',[])
    .config(function ($stateProvider, $urlRouterProvider) {

        var HOME = {
            name: 'home',
            url: '/home',
            views:{
                'content':{
                    templateURL: 'components/home/homeasasasa.html',
                    controller: ''
                }
            }
        };

        $stateProvider.state(HOME);
        $urlRouterProvider.otherwise('app/home')
    });
