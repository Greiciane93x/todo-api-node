const ControllerUsuario = require('./controllers/controllers-usuario')
const ControllerTarefas = require('./controllers/controllers-tarefa')

module.exports = (app) => {

   // Rotas Usuário
    app.get('/usuario', ControllerUsuario.buscaUsuarios())
    app.get('/usuario/:id', ControllerUsuario.buscaUsuariosPorId())
    app.post('/usuario', ControllerUsuario.criaUsuario())
    app.delete('/usuario/:id', ControllerUsuario.deletarUsuario())
    app.put('/usuario/:id', ControllerUsuario.alterarUsuario())

    //Rotas Tarefa 
    app.get('/tarefa', ControllerTarefas.buscaTarefas())
    app.get('/tarefa/:id', ControllerTarefas.buscaTarefasPorId())
    app.post('/tarefa', ControllerTarefas.criaTarefa())
    app.delete('/tarefa/:id', ControllerTarefas.deletarTarefa())
    app.put('/tarefa/:id', ControllerTarefas.alterarTarefa())


}