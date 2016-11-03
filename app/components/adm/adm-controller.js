/**
 * Created by Arthur on 02/11/2016.
 */
appController.controller('admController', admController);

function admController($state) {
    var self = this;

    self.mensagem = "controlador do adm";

    self.getPassagensVendidas = getPassagensVendidas;

    function getPassagensVendidas() {
        var passagens = json;
        console.log("PASS: ", passagens);
    };
}