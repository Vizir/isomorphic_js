// ------------------------
// Context - http://www.sitepoint.com/dci-the-evolution-of-the-object-oriented-paradigm/
// ------------------------

var Cliente = require('../model/cliente');

var SalvarCliente;

SalvarCliente = (function() {
  function SalvarCliente(args) {
    args || (args = {});
    this.cliente = args.cliente || Cliente;
    this.clienteRepository = args.clienteRepository;
  }

  SalvarCliente.prototype.dadosBasicos = function(data, callback) {

    var cliente = new this.cliente({ clienteRepository: this.clienteRepository });
    cliente.name = data.name;
    cliente.email = data.email;
    cliente.save(callback);
    return cliente;

  };

  return SalvarCliente;

})();


module.exports = SalvarCliente;