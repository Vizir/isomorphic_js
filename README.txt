POC
---

- Criar uma modelagem em camadas
- Criar uma modelagem com entidades menores
- Reutilização de cógido entre o client e o server
- Fatiar o cadastro em pequenos pedaços, com persistência independênte


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


Estrutura de diretórios

                         +------------------+----------------+
                         |    MVC (Infra)   |    BUSINESS    |
     +-------------------|------------------|----------------|
     |     CLIENT        |        X         |                |
     +-------------------|------------------|----------------|
     |     SERVER        |        X         |       X        |
     +-------------------|------------------|----------------|
     


MVC = Infraestrutura

Business = Modelagem do negócio em classes, sem influencia de infraestrutura



