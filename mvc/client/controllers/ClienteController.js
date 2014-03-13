// ------------------------
// Angular Controller - http://docs.angularjs.org/guide/controller
// ------------------------

var ClienteController = function ($scope, $http) {

  $scope.SalvarCliente || ($scope.SalvarCliente = require('../../../business/usecase/salvarCliente.js'));
  $scope.ClienteRepository || ($scope.ClienteRepository = require('../repository/clienteRepository'));

  $scope.submitForm = function () {

    var salvarCliente = new $scope.SalvarCliente();
    salvarCliente.dadosBasicos($scope, new $scope.ClienteRepository({http: $http}), salvarClienteCB);

    function salvarClienteCB(err, cliente) {
      console.log("ClienteController: ", cliente, err);
      $scope.errors = cliente.errors;      
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
} 

module.exports = ClienteController;