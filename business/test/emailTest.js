// ------------------------
// Unit Test
// ------------------------

var EMail = require('../model/email');
var expect = require('expect.js');

describe('EMail:', function() {

  describe('validate', function() {

    it("email válido", function() {

      //Given
      var email = "nome@cliente.com"

      //When
      var status = EMail.validate(email);

      //Then
      expect(status).to.be(true);

    });

    it("email inválido", function() {

      //Given
      var email = "nome@cliente"

      //When
      var status = EMail.validate(email);

      //Then
      expect(status).to.be(false);

    });

  });

});