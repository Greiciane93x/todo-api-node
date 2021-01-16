module.exports = (app)=> {
    app.get(`/usuario`, (req, resp) =>  {
        resp.send('<h1> Rota GET ativada</h1> ')
    }) 

    app.post(`/usuario`, (req, resp)=> {
        resp.send('<h1> Rota POST ativada </h1> ')
    })

} 