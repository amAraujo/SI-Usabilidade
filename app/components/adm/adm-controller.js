/**
 * Created by Arthur on 02/11/2016.
 */
appController.controller('admController', admController);

function admController($mdDialog, $rootScope,$timeout, $window) {
    var self = this;

    self.comprovante = {
        hora: '13:00',
        rota:'Campina Grande - João Pessoa',
        linha: Math.floor(Math.random() * 655364544655848484),
        valor: 'R$ 30,00',
        formaPagamenro: 'Boleto',
        cliente: 'Optimus Prime',
        cpf: '10758451357'
    };

    self.showAlert = function(indice, passagem) {
      var confirm = $mdDialog.confirm()
              .title('Informação !')
              .textContent('Você deseja confirmar o pagamento para esse bilhete ?')
              .ariaLabel('Lucky day')
              .ok('Confirmar')
              .cancel('Cancelar');

        $mdDialog.show(confirm).then(function() {
          self.showSpinner()
          $rootScope.listaPassagemVendidas[indice].statusPagamento = 'Pago'
        }, function() {

        });
  };

  self.showSpinner = function() {
      $mdDialog.show({
          // controller: ModalController,
          templateUrl: 'app/components/portal/modal/spinner.html',
          parent: angular.element(document.body),
          clickOutsideToClose:true
      }).then(function(answer) {
      }, function() {
      });

      $timeout(function () {
            self.hideModal();
          // console.log($rootScope.listaPassagemVendidas)

      }, 2000)
  };

  self.hideModal = function() {
      $mdDialog.hide();
  };

  self.imprimir = function () {
    $window.print()
  }


}
