// ------------------------
// DDD Repository - http://dddcommunity.org/resources/ddd_terms/ 
// ------------------------

var ClienteRepository;

ClienteRepository = (function() {

  function ClienteRepository(args) {
    this.http = args.http;
  }
  
  ClienteRepository.prototype.post = function(data, url, successCallback, errorCallback) {

    this.http({
      url: url,
      method: 'POST',
      data: data
    })
    .success(function(data, status, headers, config){
      successCallback(status, data);
    })
    .error(function(data, status, headers, config){
      errorCallback(status, data);
      return;
    });

  }

  ClienteRepository.prototype.salvaDadosBasicos = function(dadosBasicos, callback) {
    this.post(dadosBasicos, '/clientes', callback, callback);
  }

  return ClienteRepository;

})();


module.exports = ClienteRepository;