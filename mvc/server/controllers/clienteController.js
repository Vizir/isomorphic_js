// ------------------------
// Express Controller - https://github.com/visionmedia/express/tree/master/examples/route-separation
// ------------------------

var SalvarCliente = require('../../../business/usecase/salvarCliente.js');
var Cliente = require('../../../business/model/clienteServer');
var ClienteRepository = require('../repository/clienteRepository');

exports.new = function(req, res){

  var salvarCliente = new SalvarCliente({ cliente: Cliente});
  salvarCliente.dadosBasicos(req.body, new ClienteRepository(), salvarClienteCB);

  function salvarClienteCB(err, cliente) {
    var status = (cliente.errors.length == 0) ? 200 : 400;

    res.status(status).json({errors: cliente.errors});
  }

};

exports.index = function(req, res){

  res.render('cliente/index', { title: 'Clientes' });

};


exports.show = function(req, res){

  res.render('cliente/index', { nome: 'Fulano de Tales', telefone: '(11) 9988-9977' });

};