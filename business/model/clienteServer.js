// ------------------------
// Domain Entity - http://dddcommunity.org/resources/ddd_terms/
// ------------------------

var $ = require('../util/OO')
var ClienteCommon = require('./cliente')
var EMail = require('./email')

var Cliente = (function() {
  $.extends(Cliente, ClienteCommon);

  function Cliente(args) {
    $.ctorSuper(Cliente, this, arguments);
  }

  Cliente.prototype.validate = function() {
    $.callSuper(Cliente, 'validate', this);

    // --- Server validation ---

    // Email com GMAIL
    if (EMail.validate(this.email) && EMail.parse(this.email).addresses[0].domain  == "gmail.com")
      this.errors.push({email: "Ops!!! GMAIL não pode."});

    return !this.hasErrors()

  }

  return Cliente;

})();

module.exports = Cliente;