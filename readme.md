# Projeto Módulo 3 - API RESTFULL 
__Nome:__ Greiciane Araujo de Assis 


Esse projeto é um CRUD - (Create, Read, Update, Delete) <br/> 
É capaz criar, listar, atualizar e deletar um usuário específico

Rotas disponíveis: __GET, POST, PUT e DELETE__

  // Rotas Usuário
    [GET] - Rota de busca =>  '/usuario'
    [GET] - Rota de busca por id => '/usuario/:id'
    [POST] - Rota para criar usuario => '/usuario'
    [DELETE] - Rota para deletar usuario por id específico => '/usuario/:id'
    [POST] - Rota para alterar usuario por id específico => '/usuario/:id'
    
   // Rotas Tarefa 
    [GET] - Rota de busca => '/tarefa'
    [GET] - Rota de busca por id => '/tarefa/:id'
    [POST] - Rota para criar tarefa => '/tarefa'
    [DELETE] - Rota para deletar tarefa por id específico => '/tarefa/:id'
    [PUT] - Rota para alterar tarefa por id específico => '/tarefa/:id'



As dependências são : *express, bodyParser, sqlite3, test e SuperTest* o que é possível encontrar todas elas no package.json <br/> 
Para instalar é necessário utilizar __npm i/instal <nome_da_dependência>__

É necessário utilização do insominia/postman para acessar as rotas

  __Roadmap__ :pushpin:
  - [x] implementação do CRUD em tarefas 
  - [x] implemetação de testes unitários
  - [ ] Utilização de async/await para operações no banco (DAO)
  - [ ] Validação e verificação de dados (tipo e características) utilizando models
 -  [ ] Utilização de algum ORM ou ODM 
