const Usuario = require('../models/usuario.js')
const bd = require('../infra/create-and-populate')

 module.exports = (app,bd)=> {
    app.get(`/usuario`, (req, resp) =>  {
        bd.all("SELECT * FROM USUARIOS", (err, rows)=> {
            if(err){
                throw new Error("Erro ao consultar banco: " + err); 
            }else{
                resp.send(rows)
            }
            
        })

    })

    app.get(`/usuario/:email`, (req, resp)=> {    
        resp.send(`<h1>${req.body.email}</h1>`)
    })

    app.post(`/usuario`, (req, resp)=> {
            bd.run("INSERT INTO USUARIOS (NOME , USUARIO, SENHA) VALUES (? , ?, ?)" , [req.body.nome ,req.body.email, rep.body.senha],(error)=> {
                if(error) {
                    throw new Error('Erro ao inserir')
                }else{
                    resp.send('Usuaário inserido!')
                }
            }); 
      
    })



    app.delete(`/usuario/:email`, (req, resp)=> {
        let usuariosNDelet = [];
        for(let i = 0; i < bd.usuarios.length; i++){
            if(bd.usuarios[i].email !== req.params.email){
                usuariosNDelet.push(bd.usuarios[i])
            } 
        }
            bd.usuarios = usuariosNDelet 
           
            resp.send(`Rota deleção ativada! O usuário${req.params.nome} foi deletado!`)
        


    })

    const atualizaRegistro = (email, body) => {
        for(let user of bd.usuarios){
            if(user.email === email){
                user.nome = body.nome; 
                user.senha = body.senha; 
            }
        }
    }
    app.put(`/usuarios/:email` , (req, resp) => {
        atualizaRegistro(req.params.email, rep.body)
        resp.send("Usuario atualizado!")
    })    

}

