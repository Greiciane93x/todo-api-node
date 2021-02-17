const { response } = require('express')
const bd = require('../infra/sqlite-db')

class TarefasDAO {

    static buscaTarefasInBD() {
        bd.all("SELECT * FROM TAREFAS", [], (erro, linhas) => {
            erro ? erro : console.log(linhas)
        })
    }

    static buscaTarefaPorIdInBD(resultParam) {
        return new Promise((resolve, reject) => {

            bd.get(`SELECT * FROM TAREFAS WHERE ID = ? `, resultParam, (erro, linha) => {
                erro ? reject(erro) : resolve(console.log(linha))

            })

        })
    }
    static criaTarefaInBD(resultsBody) {
        return new Promise((resolve, reject) => {
            bd.run(`INSERT INTO TAREFAS (titulo, descricao, status, datacriacao, id_usuario) VALUES(? , ?,  ?, ? , ? )`, resultsBody, (erro) => {
                erro ? reject(erro) : resolve(console.log("Tarefa adicionada!"));
            })
        })
    }

    static deletaTarefaInBD(resultParam) {
        bd.run(`DELETE from TAREFAS WHERE ID = ?`, resultParam, (erro) => {
            erro ? erro : console.log('Tarefa deletada!');
        })
    }

    static alteraTarefaInBD(resultBody) {
        return new Promise((resolve, reject) => {
    
                bd.run(`UPDATE TAREFAS SET titulo = ?, descricao = ?, status = ?, datacriacao = ? , id_usuario = ? WHERE (id = ?)`, resultBody, (erro) => {
                erro ? reject(erro) : resolve(console.log("Tarefa Alterada!"));
                })
            })
    }
}
module.exports = TarefasDAO