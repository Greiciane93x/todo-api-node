const { response } = require('express')
const bd = require('../infra/sqlite-db')

class UsuarioDAO {




    static buscaTodosUsuariosInBD() {
        bd.all("SELECT * FROM USUARIOS", [], (erro, linhas) => {
            erro ? erro : console.log(linhas)
        })
    }

    static buscaUsuarioPorId(resultParam) {
        return new Promise((resolve, reject) => {
                bd.get(`SELECT * FROM USUARIOS WHERE ID = ? `, resultParam, (erro, linha) => {
                    erro ? reject(erro) : resolve(console.log(linha))

            })

        })
    }
    static criaUsuarioInBD(resultsBody) {
        return new Promise((resolve, reject) => {
            bd.run(`INSERT INTO USUARIOS (nome, email, senha) VALUES(? , ?,  ?)`, resultsBody, (erro) => {
                erro ? reject(erro) : resolve("Usuário adicionado!");
            })
        })
    }
    static deleteUsuarioInBD(resultParam) {
        return new Promise((resolve, reject) => {
            bd.run(`DELETE from USUARIOS WHERE ID = ?`, resultParam, (erro) => {
                erro ? reject(erro) : resolve("Usuário deletado!");
            })
        })
    }

    static alterarUsuarioInBD(resultBody) {
        return new Promise((resolve, reject) => {

            bd.run(`UPDATE USUARIOS SET nome = ?, email = ?, senha = ? WHERE (id = ?)`, resultBody, (erro) => {
                erro ? reject(erro) : resolve("Usuário Alterado!");
            })
        })

    }

}

module.exports = UsuarioDAO