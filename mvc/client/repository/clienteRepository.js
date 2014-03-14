// ------------------------
// DDD Repository - http://dddcommunity.org/resources/ddd_terms/ 
// ------------------------

var ClienteRepository;

ClienteRepository = (function() {

  function ClienteRepository(args) {
    this.http = args.http;
  }

  ClienteRepository.prototype.httpRequest = function(data, url, method, successCallback, errorCallback) {

    this.http({
      url: url,
      method: method,
      data: data
    })
    .success(function(data, status, headers, config){
      successCallback(null, data);
    })
    .error(function(data, status, headers, config){
      errorCallback({infra: status}, data);
      return;
    });

  }

  ClienteRepository.prototype.get = function(data, url, successCallback, errorCallback) {
    this.httpRequest(data, url, 'GET', successCallback, errorCallback);
  }
  
  ClienteRepository.prototype.post = function(data, url, successCallback, errorCallback) {
    this.httpRequest(data, url, 'POST', successCallback, errorCallback);
  }

  ClienteRepository.prototype.salvaDadosBasicos = function(dadosBasicos, callback) {
    this.post(dadosBasicos, '/clientes', callback, callback);
  }

  ClienteRepository.prototype.list = function(query, callback) {
    this.get(query, '/clientes/list', callback, callback);
  }

  return ClienteRepository;

})();


module.exports = ClienteRepository;