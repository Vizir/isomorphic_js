// ------------------------
// DDD Repository - http://dddcommunity.org/resources/ddd_terms/
// ------------------------

var ClienteRepository;

global.memoryDataStorage = [];

ClienteRepository = (function() {
  function ClienteRepository(args) {
    
  }
  
  ClienteRepository.prototype.salvaDadosBasicos = function(dadosBasicos, callback) {

    var data = {name: dadosBasicos.name, email: dadosBasicos.email};

    // -- Memoria -- 
    global.memoryDataStorage.push(data);
    console.log("-- Memory Data Storage -- ", global.memoryDataStorage);

    // -- Arquivo -- 
    var fs = require('fs');
    fs.writeFile("/vagrant/tmp/cliente.dadosBasicos.db.txt", JSON.stringify(data));
    callback(null, dadosBasicos);

  };

  ClienteRepository.prototype.list = function(query, callback) {

    callback(null, global.memoryDataStorage);

  };

  return ClienteRepository;

})();


module.exports = ClienteRepository;