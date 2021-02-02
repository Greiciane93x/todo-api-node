# Projeto Módulo 3 - API RESTFULL 
__Nome:__ Greiciane Araujo de Assis 


Esse projeto é um CRUD - (Create, Read, Update, Delete) 
É capaz criar, listar, atualizar e deletar um usuário específico

As rotas disponíveis são: __GET, POST, PUT e DELETE__

Rota get => '/listar'
Rota post => '/criar'
Rota delete => '/deletar/:email' (deleção a partir do email colocado como parâmetro)
Rota put => 'alterar/:email' (alteração a partir do email colocado como parâmetro)

As dependências são : *express, bodyParser, sqlite3* o que é possível encontrar todas elas no package.json 


É necessário utilização do insominia/postman para acessar

  __Roadmap__ :pushpin:
  - [ ] implementação do CRUD em tarefas 
  - [ ] implemetação de testes unitários