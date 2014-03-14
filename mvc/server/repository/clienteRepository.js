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

    global.memoryDataStorage.push(data);

    console.log("-- DATA -- ", global.memoryDataStorage);

    var fs = require('fs');
    fs.writeFile("/vagrant/tmp/cliente.dadosBasicos.db.txt", JSON.stringify(data));
    callback(null, data);


  };

  return ClienteRepository;

})();


module.exports = ClienteRepository;