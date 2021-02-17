const Usuario = require('../models/usuario.js')
const UsuarioDAO = require('../DAO/usuarioDAO')
const { response } = require('express')



class ControllerUsuario {

    static buscaUsuarios() {
        return ((req, resp) => {
            try{
                const ListaUsuarios = UsuarioDAO.buscaTodosUsuariosInBD(); 
                resp.status(200).send(ListaUsuarios);  
            }catch(erro){
                resp.status(400).send(erro); 

            }
        })
    }

  

    static buscaUsuariosPorId(){
        
        return((req, resp) => {
            try {
                var parametroId = req.params.id 
        
                const  ListaUsuariosPorId = UsuarioDAO.buscaUsuarioPorId(parametroId); 
                
                resp.status(200).send(ListaUsuariosPorId); 
            }catch(erro) {
                resp.status(400).send(console.log(erro))
                
            }
        })

        

    }

    static criaUsuario() {
        return (req, resp) => {
           try{
                let usuarioBody = [req.body.nome, req.body.email, req.body.senha]; 
                const insereUsuario = UsuarioDAO.criaUsuarioInBD(usuarioBody)
                resp.status(200).send(insereUsuario)
           }catch(erro){
               resp.status(400).send(erro)
           }
        }

    }


    static deletarUsuario() {
        return (req, resp) => {
            try{
                let parametroId = req.params.id
                const deletaUsuario = UsuarioDAO.deleteUsuarioInBD(parametroId);
                resp.status(200).send(deletaUsuario); 
            }catch(erro){
                resp.status(400).send(erro); 

            }
              
        }
    }


    static alterarUsuario(){
        return ((req, resp) => {
            try {
                
                let parametroId = req.params.id 
                let bodyUsuario = [req.body.nome, req.body.email, req.body.senha, parametroId];
                
                const alteraUsuario = UsuarioDAO.alterarUsuarioInBD(bodyUsuario); 
                resp.status(200).send(alteraUsuario); 
            }catch(erro){
                resp.status(400).send(erro); 
            }
        })
    }



}

module.exports = ControllerUsuario