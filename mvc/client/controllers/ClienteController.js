// ------------------------
// Angular Controller - http://docs.angularjs.org/guide/controller
// ------------------------

var ClienteController = function ($scope, $http) {

  $scope.submitForm = function () {

    var salvarCliente = new $scope.SalvarCliente({clienteRepository: new $scope.ClienteRepository({http: $http})});
    var cliente = salvarCliente.dadosBasicos($scope, salvarClienteCB);

    function salvarClienteCB(err, cliente) {
      console.log("ClienteController - submitForm: ", cliente, err);
      
      $scope.infraError = (err && err.infra != null);
      if ($scope.infraError) { return; }

      $scope.errors = cliente.errors;
      if ($scope.errors.length != 0) { return; }
      
      $scope.name = "";
      $scope.email = "";
      $scope.clientes.push(cliente);
    }
  }

  $scope.listar = function () {

    var listarClientes = new $scope.ListarClientes({clienteRepository: new $scope.ClienteRepository({http: $http})});
    listarClientes.listaCompleta({}, listarClientesCB);

    function listarClientesCB(err, lista) {
      console.log("ClienteController - listarClientesCB: ", lista, err);
      $scope.infraError = (err && err.infra != null);
      if ($scope.infraError) { return; }
      $scope.clientes = lista.clientes;
    }
  }

  $scope.errorFor = function(field, errors) {
    var error, _i, _len;
    
    if (errors == null) errors = $scope.errors;
    
    if (!errors) return "";
    
    for (_i = 0, _len = errors.length; _i < _len; _i++) {
      error = errors[_i];
      if (error[field]) return error[field];
    }
    
    return "";
  }

  $scope.SalvarCliente || ($scope.SalvarCliente = require('../../../business/usecase/salvarCliente.js'));
  $scope.ListarClientes || ($scope.ListarClientes = require('../../../business/usecase/listarClientes.js'));
  $scope.ClienteRepository || ($scope.ClienteRepository = require('../repository/clienteRepository'));

  $scope.erro = false;
  $scope.clientes = [];

  $scope.listar();


} 

module.exports = ClienteController;