const Usuario = require('../models/usuario.js')
const UsuarioDAO = require('../DAO/usuarioDAO')
const { response } = require('express')



class Controller {

    static buscaUsuarios() {
        return ((req, resp) => {
            UsuarioDAO.buscaTodosUsuariosInBD().then(rows => resp.send(rows))
                .catch(err => {
                    console.log(err)
                    resp.send(err)
                })
        })
    }

    static criaUsuario() {
        return (req, resp) => {
            UsuarioDAO.criaUsuarioInBD(req.body).then(msg => resp.send(msg))
                .catch(err => {
                    console.log(err)
                    resp.send('erro')
                })

        }

    }


    static deletarUsuario() {
        return (req, resp) => {
            UsuarioDAO.deleteUsuarioInBD(req.body).then(msg => resp.send(msg))
                .catch(err => {
                    console.log(err)
                    resp.send('erro', err)
                })
        }
    }


    static alterarUsuario(){
        return ((req, resp) => {
            UsuarioDAO.alterarUsuarioInBD(req.params.email).then(msg => resp.send(msg))
                .catch(err => {
                    console.log(err)
                    resp.send
                })
        })
    }





module.exports = Controller