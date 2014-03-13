// ------------------------
// DDD Repository - http://dddcommunity.org/resources/ddd_terms/
// ------------------------

var ClienteRepository;

ClienteRepository = (function() {
  function ClienteRepository(args) {
    
  }
  
  ClienteRepository.prototype.salvaDadosBasicos = function(dadosBasicos, callback) {
    var fs = require('fs');
    fs.writeFile("/vagrant/tmp/cliente.dadosBasicos.db.txt", JSON.stringify(dadosBasicos));
    callback(null, dadosBasicos);
  };

  return ClienteRepository;

})();


module.exports = ClienteRepository;