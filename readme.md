# Projeto Módulo 3 - API RESTFULL 
__Nome:__ Greiciane Araujo de Assis 


Esse projeto é um CRUD - (Create, Read, Update, Delete) <br/> 
É capaz criar, listar, atualizar e deletar um usuário específico

Rotas disponíveis: __GET, POST, PUT e DELETE__

Rota get => '/listar' <br/> 
Rota post => '/criar' <br/> 
Rota delete => '/deletar/:email' (deleção a partir do email colocado como parâmetro) <br/> 
Rota put => 'alterar/:email' (alteração a partir do email colocado como parâmetro) <br/> 

As dependências são : *express, bodyParser, sqlite3, test e SuperTest* o que é possível encontrar todas elas no package.json 
Para instalar é necessário utilizar __npm i/instal <nome_da_dependência>__

É necessário utilização do insominia/postman para acessar as rotas

  __Roadmap__ :pushpin:
  - [x] implementação do CRUD em tarefas 
  - [x] implemetação de testes unitários
  - [ ] Utilização de async/await para operações no banco (DAO)
  - [ ] Validação e verificação de dados (tipo e características) utilizando models
 -  [ ] Utilização de algum ORM ou ODM 
