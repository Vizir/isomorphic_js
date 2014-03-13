// ------------------------
// Refactor to value Object: http://martinfowler.com/bliki/ValueObject.html
// ------------------------

var addrs = require("email-addresses")

var Email = (function() {
  function Email() {}

  Email.parse = function(email) {
    var parsedEmail = addrs.parseOneAddress(email);
    return addrs(email);
  }

  Email.validate = function(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  return Email;

})();

module.exports = Email;

