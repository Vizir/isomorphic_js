// ------------------------
// Express Route - https://github.com/visionmedia/express/tree/master/examples/route-separation
// ------------------------

var clienteController = require('./controllers/clienteController');

exports.apply = function (app) {
  
  // --  Cliente --

  app.get('/clientes', clienteController.index);

  app.get('/clientes/list', clienteController.list);

  app.post('/clientes', clienteController.new);

};