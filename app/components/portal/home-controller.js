/**
 * Created by mateu on 02/11/2016.
 */
appController.controller('PortalController',function ($mdDialog, $scope) {
    var self = this;
    self.horarios = [];

    self.comprovante = {
        hora: '13:00',
        rota:'Campina Grande - João Pessoa',
        linha: Math.floor(Math.random() * 655364544655848484),
        valor: 'R$ 30,00',
        formaPagamenro: 'Boleto',
        cliente: 'Optimus Prime',
        cpf: '10758451357'
    };

    var mockHorarios = [{
        hora: '13:00',
        rota:'Campina Grande - João Pessoa',
        assentosDisponiveis: '30',
        valor: 'R$ 30,00'

    },{
        hora: '14:00',
        rota:'Campina Grande - João Pessoa',
        assentosDisponiveis: '10',
        valor: 'R$ 30,00'

    },{
        hora: '15:00',
        rota:'Campina Grande - João Pessoa',
        assentosDisponiveis: '2',
        valor: 'R$ 30,00'

    },{
        hora: '16:00',
        rota:'Campina Grande - João Pessoa',
        assentosDisponiveis: '40',
        valor: 'R$ 30,00'

    },{
        hora: '17:00',
        rota:'Campina Grande - João Pessoa',
        assentosDisponiveis: '5',
        valor: 'R$ 30,00'

    }];

    self.salvarMock = function () {
        localStorage.setItem('horarios', JSON.stringify(mockHorarios));
    };

    self.pesquisarHorarios = function () {
        self.horarios = JSON.parse(localStorage.getItem('horarios'));
    };

    self.limpar = function () {
        self.horarios = [];
        self.obj = {}
    };

    self.modalComprar = function () {
        $mdDialog.show({
            controller: ModalController,
            templateUrl: 'app/components/portal/modal/modal-comprar.html',
            parent: angular.element(document.body),
            clickOutsideToClose:true
        }).then(function(formaDePagamento) {
                $scope.formaDePagamento = formaDePagamento;
            }, function() {
            });
    };

    function ModalController($scope,$timeout,$window) {
        $scope.codigoBilhete = Math.floor(Math.random() * 65536);
        $scope.formaDePagamento = 'Boleto';

        $scope.hideModal = function() {
            $mdDialog.hide();
        };

        $scope.showAlert = function() {
            $mdDialog.show({
                controller: ModalController,
                templateUrl: 'app/components/portal/modal/modal-confirmar-compra.html',
                parent: angular.element(document.body),
                clickOutsideToClose:true
            }).then(function(answer) {

            }, function() {

            });
        };

        $scope.showSpinner = function() {

            $mdDialog.show({
                controller: ModalController,
                templateUrl: 'app/components/portal/modal/spinner.html',
                parent: angular.element(document.body),
                clickOutsideToClose:true
            }).then(function(answer) {
            }, function() {
            });

            $timeout(function () {
                $scope.hideModal();
                $window.print()
            }, 3000)
        };
    }
});
