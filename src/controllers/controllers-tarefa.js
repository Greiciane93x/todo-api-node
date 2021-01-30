const Tarefas = require('../models/tarefas.js')


module.exports = (app)=> {
    // app.get(`/tarefa`, (req, resp) =>  {
    //     resp.send(`Rota Get Ok ${req.body.titulo}`)
    // }) 

    // app.post(`/tarefa`, (req, resp)=> {
        
    //     resp.send(`Rota Post OK`)
    // })

    // app.delete(`/tarefa/:titulo`, (req, resp) => {
    //     let taskDelete = []; 
    //     for(let i = 0; i < bd.tarefas.length; i++){
    //         if(bd.tarefas[i].titulo !== req.params.titulo){
    //             taskDelete.push(bd.tarefas[i])
    //         }
            
    //     }
    //     bd.tarefas = taskDelete 
    //     resp.send(`Rota de deleção ativada! ` )
    // })

    // const atualizaTarefa = (titulo, body) => {

    //     for(let task of bd.tarefas){
    //         if(task.titulo === titulo){
    //             task.descricao = body.descricao; 
    //             task.status = body.status;
    //             task.data_criacao = body.status;
    //         }
         
    //     }
    // } 

    // app.put(`/tarefa/:titulo`, (req, resp) => {
    //     atualizaTarefa(req.params.titulo, req.body)
    //     resp.send(`Tarefa atualizada!`)
    // })

} 

