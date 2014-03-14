// ------------------------
// Use case Tests
// ------------------------
var Cliente = require('../model/clienteServer');
var SalvarCliente = require('../usecase/salvarCliente');
var ListarClientes = require('../usecase/listarClientes');

var expect = require('expect.js');

describe('Clientes:', function() {

  describe('Listagem:', function() {

    var clienteRepository;

    // Setup
    beforeEach(function() {

      clienteRepository = {
        _repository: [],
        list: function(query, cb) { 
          cb(null, [new Cliente(), new Cliente()]);
        }
      }
      
    });

    it("listar todos os clientes", function(done) {

      //Given
      var query = {};

      //When
      var listarClientes = new ListarClientes({clienteRepository: clienteRepository});
      listarClientes.listaCompleta(query, listarClientesCB);

      function listarClientesCB(err, clientes) {
        //Then
        expect(err).to.be(null);
        expect(clientes).to.have.length(2);
        expect(clientes[0]).to.a(Cliente);
        done();
      };

    });

  });


  describe('Gravar:', function() {

    var clienteRepository;

    // Setup
    beforeEach(function() {

      clienteRepository = {
        _repository: [],
        salvaDadosBasicos: function(cliente, cb) { 
          this._repository.push(cliente); 
          cb(null, cliente);
        }
      }
      
    });

    it("deve ser salvo com todas as suas inforções", function(done) {

      //Given
      var formDados = {
        name: "Fulano de Tal",
        email: "fulano@detal.com"
      };

      //When
      var salvarCliente = new SalvarCliente({clienteRepository: clienteRepository});
      salvarCliente.dadosBasicos(formDados, salvarClienteCB);

      function salvarClienteCB(err, cliente) {
        //Then
        expect(err).to.be(null);
        expect(cliente.errors).to.have.length(0);
        expect(clienteRepository._repository).to.have.length(1);
        expect(clienteRepository._repository[0].name).to.be.equal("Fulano de Tal");
        done();
      };

    });

    it("não deve ser salvo com informações inválidas", function(done) {

      //Given
      var formDados = { };

      //When
      var salvarCliente = new SalvarCliente({clienteRepository: clienteRepository});
      salvarCliente.dadosBasicos(formDados, salvarClienteCB);

      function salvarClienteCB(err, cliente) {
        
        //Then
        expect(err).to.not.be(null);
        expect(cliente.errors).to.have.length(3);
        expect(clienteRepository._repository).to.have.length(0);
        done();

      };      

    });

    it("deve ser salvo com endereço de email válido", function(done) {

      //Given
      var formDados = {
        name: "Fulano de Tal",
        email: "fulano@detal.com"
      };

      //When
      var salvarCliente = new SalvarCliente({clienteRepository: clienteRepository});
      salvarCliente.dadosBasicos(formDados, salvarClienteCB);

      function salvarClienteCB(err, cliente) {
        //Then
        expect(err).to.be(null);
        expect(clienteRepository._repository).to.have.length(1);
        expect(clienteRepository._repository[0].email).to.be.equal("fulano@detal.com");
        done();
      };

    });

    it("não deve ser salvo com endereço de email inválido", function(done) {

      //Given
      var formDados = {
        name: "Fulano de Tal",
        email: "fulano@detal"
      };

      //When
      var salvarCliente = new SalvarCliente({clienteRepository: clienteRepository});
      salvarCliente.dadosBasicos(formDados, salvarClienteCB);

      function salvarClienteCB(err, cliente) {
        
        //Then
        expect(err).to.not.be(null);
        expect(cliente.errors).to.have.length(1);
        expect(cliente.errors[0]).to.have.key('email');
        expect(clienteRepository._repository).to.have.length(0);
        done();

      };

    });

    it("não deve ser salvo com endereço de email do GMAIL", function(done) {

      //INFO: Validação servidor

      //Given
      var formDados = {
        name: "Fulano de Tal",
        email: "fulano@gmail.com"
      };

      //When
      var salvarCliente = new SalvarCliente({clienteRepository: clienteRepository, cliente: Cliente});
      salvarCliente.dadosBasicos(formDados, salvarClienteCB);

      function salvarClienteCB(err, cliente) {
        
        //Then
        expect(err).to.not.be(null);
        expect(cliente.errors).to.have.length(1);
        expect(cliente.errors[0]).to.have.key('email');
        expect(clienteRepository._repository).to.have.length(0);
        done();

      };

    });

  });

});

