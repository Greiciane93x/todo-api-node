const Usuario = require('../models/usuario.js')
const bd = require('../infra/bd.js')
const Tarefas = require('../models/tarefas.js')

module.exports = (app)=> {
    app.get(`/tarefas`, (req, resp) =>  {
        resp.send('<h1> Rota GET ativada - TAREFA</h1> ')
    }) 

    app.post(`/tarefas`, (req, resp)=> {
        
    
    const task = new Tarefas(req.body.titulo, req.body.descricao, req.body.status, req.body.data_criacao)
    bd.Usuario.push(task); 
    console.log(task) 
    resp.send("Ok"); 
    })

} 