module.exports = (app)=> {
    app.get(`/usuario`, (req, resp) =>  {
        resp.send('<h1> Rota GET ativada - USUÁRIO</h1> ')
    }) 

    app.post(`/usuario`, (req, resp)=> {
        resp.send('<h1> Rota POST ativada - USUÁRIO</h1> ')
    })

} 