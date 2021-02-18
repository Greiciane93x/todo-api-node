# Projeto Módulo 3 - API RESTFULL 
__Nome:__ Greiciane Araujo de Assis 


Esse projeto é um CRUD - (Create, Read, Update, Delete) <br/> 
Tem a finalidade de criar, listar, atualizar e deletar um usuário e uma tarefa específica. 

Rotas disponíveis: __GET, POST, PUT e DELETE__

  // Rotas Usuário <br/> 
    [GET] - Rota de busca =>  '/usuario' <br/> 
    [GET] - Rota de busca por id => '/usuario/:id' <br/> 
    [POST] - Rota para criar usuario => '/usuario' <br/> 
    [DELETE] - Rota para deletar usuario por id específico => '/usuario/:id' <br/> 
    [POST] - Rota para alterar usuario por id específico => '/usuario/:id' <br/> 
    
   // Rotas Tarefa <br/> 
    [GET] - Rota de busca => '/tarefa' <br/>
    [GET] - Rota de busca por id => '/tarefa/:id' <br/> 
    [POST] - Rota para criar tarefa => '/tarefa' <br/> 
    [DELETE] - Rota para deletar tarefa por id específico => '/tarefa/:id' <br/> 
    [PUT] - Rota para alterar tarefa por id específico => '/tarefa/:id' <br/> 

__Não permite cadastrar campo de usuários e tarefas vazios__

As dependências são : *express, bodyParser, sqlite3, test e SuperTest* o que é possível encontrar todas elas no package.json <br/> 
Para instalar é necessário utilizar __npm i/instal <nome_da_dependência>__

É necessário utilização do insominia/postman para acessar as rotas

  :pushpin: __Roadmap__ :pushpin:
  - [x] implementação do CRUD em tarefas 
  - [x] implemetação de testes unitários
  - [ ] Utilização de async/await para operações no banco (DAO)
  - [x] Validação e verificação de dados (tipo e características)
  - [ ] Utilização de algum ORM ou ODM 

