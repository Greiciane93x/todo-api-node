const Usuario = require('../models/usuario.js')
const bd = require('../infra/bd.js')
module.exports = (app,bd)=> {
    app.get(`/usuario`, (req, resp) =>  {
        resp.send('<h1> Rota GET ativada - USUÁRIO</h1> ')
    }) 

    app.post(`/usuario`, (req, resp)=> {

    
    const user = new Usuario(req.body.nome, req.body.email, req.body.senha)
    bd.Usuario.push(user); 
    console.log(user) 
    resp.send("Ok"); 
    })

} 