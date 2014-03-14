POC
---

- Criar uma modelagem em camadas
- Criar uma modelagem com entidades menores
- Reutilização de cógido entre o client e o server
- Restrição de código apenas para o server
- Menor quantidade de dependências (lib, modules, frameworks) possívels 

Visão Geral
-----------

        Usuario
            +
            |                     App
            |       +-----------------------------+
            |       |           Browser           |
            |       |                             |
            |       |    +-------------------+----+
            |       |    |                   |    |
            +---->  |    |     Business      |    |
                    |    |                   |    |
                    |    |                   |    |
                    |    |                   |    |
                    |    |                   |    |
                    |    +-------------------+    |
                    |    |      Server            |
                    |    |                        |
                    +----+------------------------+


Browser e Server = Infraestrutura. 


Sequência Geral:
----------------

B                                    +---------------+  +----------------+
U                                    |               |  |                |
S                                    |  Use Case     |  |  Models        |
I                                    |               |  |                |
                                     +---------------+  +----------------+
     +------------------------------------------------------------------------------------------>
I      +-----------+  +-------------+                                         +----------------+
N      |           |  |             |                                         |                |
F      |  View     |  |  Controller |                                         |  Repository    |
R      |           |  |             |                                         |                |
A      +-----------+  +-------------+                                         +----------------+


        
Sequência Client:
-----------------

B                                    +---------------+  +----------------+
U                                    |               |  |                |
S                                    |  Use Case     |  |  Models        |
I                                    |               |  |                |
                                     +---------------+  +----------------+
     +------------------------------------------------------------------------------------------>
I      +-----------+  +-------------+                                         +----------------+
N      |           |  |             |                                         |                |
F      |  Angular  |  |  Angular    |                                         |   Repository   |
R      |  Template |  |  Controller |                                         | (Ajax / $HTTP) |
A      +-----------+  +-------------+                                         +----------------+
   


Sequência Server:
-----------------

B                                    +---------------+  +----------------------+  
U                                    |               |  |                      |
S                                    |  Use Case     |  |  Models              |
I                                    |               |  | (alguns com código   |
N                                    |               |  |  apenas para server) |
                                     +---------------+  +----------------------+
     +------------------------------------------------------------------------------------------>
I      +-----------+  +-------------+                                         +----------------+
N      |  Express  |  |             |                                         |                |
F      |  Routes / |  |  Express    |                                         |   Repository   |
R      |  JSon     |  |  Controller |                                         | (node fs + mem)|
A      +-----------+  +-------------+                                         +----------------+
   


Instalação e Uso
----------

    vagrant up
    vagrant ssh
    cd /vagrant
    ./setup.sh
    ./start.sh


Teste
-----

    cd /vagrant/business/
    ./test.sh