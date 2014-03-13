// ------------------------
// Context - http://www.sitepoint.com/dci-the-evolution-of-the-object-oriented-paradigm/
// ------------------------

var Cliente = require('../model/cliente');

var SalvarCliente;

SalvarCliente = (function() {
  function SalvarCliente(args) {
    args || (args = {});
    this.cliente = args.cliente || Cliente;
  }

  SalvarCliente.prototype.dadosBasicos = function(data, clienteRepository, callback) {

    var cliente = new this.cliente({ clienteRepository: clienteRepository });
    cliente.name = data.name;
    cliente.email = data.email;
    cliente.save(callback);

  };

  return SalvarCliente;

})();


module.exports = SalvarCliente;