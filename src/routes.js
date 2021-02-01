const Controller = require('./controllers/controllers-usuario')

module.exports = (app) => {

   
    app.get('/listar', Controller.buscaUsuarios())
    app.post('/criar', Controller.criaUsuario())
    app.delete('/deletar/:email', Controller.deletarUsuario())
    app.put('/alterar/:email', Controller.alterarUsuario())

   

}

