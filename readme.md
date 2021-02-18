# Projeto Módulo 3 - API RESTFULL 
__Nome:__ Greiciane Araujo de Assis 


Esse projeto é um CRUD - (Create, Read, Update, Delete) 
É capaz criar, listar, atualizar e deletar um usuário específico

As rotas disponíveis são: __GET, POST, PUT e DELETE__

Rota get => '/listar'
Rota post => '/criar'
Rota delete => '/deletar/:email' (deleção a partir do email colocado como parâmetro)
Rota put => 'alterar/:email' (alteração a partir do email colocado como parâmetro)

As dependências são : *express, bodyParser, sqlite3, test e SuperTest* o que é possível encontrar todas elas no package.json 
Para instalar é necessário utilizar __npm i/instal <nome_da_dependência>__

É necessário utilização do insominia/postman para acessar

  __Roadmap__ :pushpin:
  - [x] implementação do CRUD em tarefas 
  - [x] implemetação de testes unitários
  - [ ] Utilização de async/await para operações no banco (DAO)
  - [x] Validação e verificação de dados (tipo e características)
  __Não permite cadastrar campo de usuários e tarefas vazios__
  - [ ] Utilização de algum ORM ou ODM 