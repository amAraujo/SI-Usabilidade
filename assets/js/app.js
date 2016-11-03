/**
 * Created by mateu on 02/11/2016.
 */
angular.module('App',['ngMaterial','ui.router', 'App.router','App.controller' , 'AngularPrint'])
.run(function ($rootScope) {
  $rootScope.listaPassagemVendidas = [];
})
var appController = angular.module('App.controller', []);
