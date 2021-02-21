const Usuario = require('../models/usuario.js')
const UsuarioDAO = require('../DAO/usuarioDAO')

const { response } = require('express')



class ControllerUsuario {

    static  buscaUsuarios() {
        return (async (req, resp) => {
            try{
                const ListaUsuarios =  UsuarioDAO.buscaTodosUsuariosInBD(); 
                await resp.status(200).send(ListaUsuarios);  
            }catch(erro){
                resp.status(400).send(erro); 

            }
        })
    }

  

    static buscaUsuariosPorId(){
        
        return(async (req, resp) => {
            try {
                var parametroId = req.params.id 
        
                const  ListaUsuariosPorId = UsuarioDAO.buscaUsuarioPorId(parametroId); 
                
                await resp.status(200).send(ListaUsuariosPorId); 
            }catch(erro) {
                resp.status(400).send(console.log(erro))
                
            }
        })

        

    }

    static criaUsuario() {
        
        return (async (req, resp) => {
            try{

                let mensagemErros = {
                    nome : 'Campo Nome Obrigatório!', 
                    email: 'Campo Email Obrigatório!', 
                    senha: 'Campo Senha Obrigatório!'
                }
                
                let usuarioBody = [req.body.nome, req.body.email, req.body.senha]; 
                
                for(let i = 0; i < usuarioBody.length; i++){
                    if(usuarioBody[0] === ''){
                        return resp.status(400).send(mensagemErros.nome)
                    }else if(usuarioBody[1] === ''){
                        return resp.status(400).send(mensagemErros.email)
                    }else if(usuarioBody[2] === '' ){
                        return resp.status(400).send(mensagemErros.senha)
                    }else{
                        const insereUsuario = UsuarioDAO.criaUsuarioInBD(usuarioBody)
                       return await resp.status(201).send(insereUsuario); 
                    }
                }
               
                
           }catch(erro){
               resp.status(400).send(erro)
           }
        })

    }


    static deletarUsuario() {
        return (async (req, resp) => {
            try{
                let parametroId = req.params.id
                const deletaUsuario = UsuarioDAO.deleteUsuarioInBD(parametroId);
                await resp.status(200).send(deletaUsuario); 
            }catch(erro){
                resp.status(400).send(erro); 

            }
              
        })
    }


    static alterarUsuario(){
        return (async (req, resp) => {
            try {
                
                let parametroId = req.params.id 
                let bodyUsuario = [req.body.nome, req.body.email, req.body.senha, parametroId];
                
                const alteraUsuario = UsuarioDAO.alterarUsuarioInBD(bodyUsuario); 
                await resp.status(200).send(alteraUsuario); 
            }catch(erro){
                resp.status(400).send(erro); 
            }
        })
    }



}

module.exports = ControllerUsuario