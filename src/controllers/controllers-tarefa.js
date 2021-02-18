const Tarefas = require('../models/tarefas.js')
const Tarefa = require('../models/tarefas')
const TarefasDAO = require('../DAO/tarefasDAO')
const {response} = require('express');
const { deletarUsuario } = require('./controllers-usuario.js');

class ControllerTarefas {

    static buscaTarefas(){
        return((req, resp) => {
            try{
                const ListaTarefas = TarefasDAO.buscaTarefasInBD(); 
                resp.status(200).send(ListaTarefas); 
            }catch(erro){
                resp.status(400).send(erro); 
            }
        })

    }
    static buscaTarefasPorId(){
        
        return((req, resp) => {
            try {
                var parametroId = req.params.id 
                const  ListaTarefaPorId = TarefasDAO.buscaTarefaPorIdInBD(parametroId); 
                resp.status(200).send(ListaTarefaPorId); 
            }catch(erro) {
                resp.status(400).send(console.log(erro)) 
            }
        })
    }
    static criaTarefa() {
        return (req, resp) => {
           try{
                let tarefaBody = [req.body.titulo, req.body.descricao, req.body.status, req.body.datacriacao, req.body.id_usuario]; 

                for(let i = 0; i < tarefaBody.length; i++){
                    if(tarefaBody[0] === ''){
                        return resp.status(400).send('Campo Título Obrigatório!')
                    }else if(tarefaBody[1] === ''){
                        return resp.status(400).send('Campo Descrição Obrigatório!')
                    }else if(tarefaBody[2] === ''){
                        return resp.status(400).send('Campo Status Obrigatório!')
                    }else if(tarefaBody[3] === ''){
                        return resp.status(400).send('Campo Data Criação Obrigatório!')
                    }else if(tarefaBody[4] === ''){
                        return resp.status(400).send('Campo Usuário Obrigatório!')
                    }else{
                        const insereTarefa = TarefasDAO.criaTarefaInBD(tarefaBody)
                        return  resp.status(201).send(insereTarefa)

                    }
                }

           }catch(erro){
               resp.status(400).send(erro)
           }
        }

    }
    static deletarTarefa(){
        return(req, resp) => {
            try{
                let parametroId = req.params.id
                const deletaTarefa = TarefasDAO.deletaTarefaInBD(parametroId); 
                resp.status(200).send(deletaTarefa)
            }catch(erro){
                resp.status(400).send(erro); 
            }
        }
    }

    static alterarTarefa(){
        return((req, resp) => {
            try{
                let parametroId = req.params.id 
                let bodyTarefa = [req.body.titulo, req.body.descricao, req.body.status, req.body.datacriacao, req.body.id_usuario, parametroId]
                const alterarTarefa = TarefasDAO.alteraTarefaInBD(bodyTarefa); 
                resp.send(200).send(alterarTarefa); 
            }catch(erro){
                resp.send(400).send(erro); 
            }

        })
    }

}

module.exports = ControllerTarefas