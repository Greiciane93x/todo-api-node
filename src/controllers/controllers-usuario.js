const Usuario = require('../models/usuario.js')
const bd = require('../infra/bd')
module.exports = (app,bd)=> {
    app.get(`/usuario`, (req, resp) =>  {
        resp.send('<h1> Rota GET ativada - USUÁRIO</h1> ')
    }) 

    app.get(`/usuario/:email`, (req, resp)=> {    
        resp.send(`<h1>${req.body.email}</h1>`)
    })

    app.post(`/usuario`, (req, resp)=> {
        resp.send(req.body.nome, req.body.email, req.body.senha)        

    })

    app.delete(`/usuario/:nome`, (req, resp)=> {
     
        let arr = ["Alice", "Greici", "Teste"] 
        for(let i = 0; i < arr.length; i++){
            req.body.nome !== arr[i] ? arr[i] : undefined
         }            
        resp.send(`<h1>deletado com sucesso${arr} </h1>`); 
       
        console.log(bd)
        return arr
    })


} 