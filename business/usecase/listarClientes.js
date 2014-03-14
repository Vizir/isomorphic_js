// ------------------------
// Context - http://www.sitepoint.com/dci-the-evolution-of-the-object-oriented-paradigm/
// ------------------------

var Cliente = require('../model/cliente');

var ListarClientes;

ListarClientes = (function() {
  function ListarClientes(args) {
    args || (args = {});
    this.cliente = args.cliente || Cliente;
    this.clienteRepository = args.clienteRepository;
  }

  ListarClientes.prototype.listaCompleta = function(query, callback) {
    var cliente = new this.cliente({ clienteRepository: this.clienteRepository });
    cliente.list(query, callback);
  };

  return ListarClientes;

})();


module.exports = ListarClientes;