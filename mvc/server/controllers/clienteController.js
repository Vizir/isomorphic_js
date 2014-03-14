// ------------------------
// Express Controller - https://github.com/visionmedia/express/tree/master/examples/route-separation
// ------------------------

var SalvarCliente = require('../../../business/usecase/salvarCliente.js');
var ListarClientes = require('../../../business/usecase/listarClientes.js');
var Cliente = require('../../../business/model/clienteServer');
var ClienteRepository = require('../repository/clienteRepository');

exports.new = function(req, res){

  var salvarCliente = new SalvarCliente({clienteRepository: new ClienteRepository(), cliente: Cliente});
  salvarCliente.dadosBasicos(req.body, salvarClienteCB);

  function salvarClienteCB(err, cliente) {
    var status = (err && err.repository) ? 500 : 200;

    res.status(status).json(cliente);
  }

};

exports.index = function(req, res){

  res.render('cliente/index', { title: 'Clientes' });

};

exports.list = function(req, res){

  var listarClientes = new ListarClientes({clienteRepository: new ClienteRepository()});
  listarClientes.listaCompleta({}, listarClientesCB);

  function listarClientesCB(err, clientes) {
    var status = (err) ? 500 : 200;

    res.status(status).json({clientes: clientes});
  }

};