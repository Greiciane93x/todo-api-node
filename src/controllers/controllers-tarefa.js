module.exports = (app)=> {
    app.get(`/tarefas`, (req, resp) =>  {
        resp.send('<h1> Rota GET ativada - TAREFA</h1> ')
    }) 

    app.post(`/tarefas`, (req, resp)=> {
        resp.send('<h1> Rota POST ativada- TAREFA</h1> ')
    })

} 