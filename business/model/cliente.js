// ------------------------
// Domain Entity - http://dddcommunity.org/resources/ddd_terms/
// ------------------------

var EMail = require('./email')

var Cliente = (function() {

  function Cliente(args) {
    args || (args = {});
    this.errors = [];
    this.clienteRepository = args.clienteRepository;
  }

  Cliente.prototype.validate = function() {
    this.errors = [];

    // Nome
    if (typeof this.name === "undefined" || this.name === null || this.name.trim() == "") 
      this.errors.push({name: "Nome não pode ficar em branco."});
    
    if (this.name && this.name.length > 30)
      this.errors.push({name: "Nome não pode ter mais do que 30 letras"});

    // EMail
    if (typeof this.email === "undefined" || this.email === null || this.email.trim() == "") 
      this.errors.push({email: "E-mail não pode ficar em branco."});
    
    if (!EMail.validate(this.email))
      this.errors.push({email: "E-mail não é um endereço válido."});

    return !this.hasErrors()
  };

  Cliente.prototype.hasErrors = function() {
    return (this.errors.length != 0)
  }

  Cliente.prototype.save = function(callback) {
    if (this.validate() == false) 
      return callback("Dados do cliente não está em um estado válido para ser salvos", this); 

    this.clienteRepository.salvaDadosBasicos(this, callback);
  };

  return Cliente;

})();


module.exports = Cliente;