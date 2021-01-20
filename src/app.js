const express = require('express'); 
const bodyParser = require('body-parser'); 
const app = express(); 
const port = 302; 
app.use(bodyParser.json()); 
const controllersUsuario = require('./controllers/controllers-usuario'); 
controllersUsuario(app); 

const controllersTarefa = require('./controllers/controllers-tarefa'); 
controllersTarefa(app); 



app.listen(port, ()=> {
    console.log(`APP rodando na porta ${port}`)
})



let usuario = require('./models/usuario.js')
let tarefa = require('./models/tarefas.js')
let user = new usuario("Greiciane Assis", "email@teste", "12132")
let tar = new tarefa("Dentista", "Tratar Canal", "Em andamento",  "20/01/2021")
console.log(user)
console.log(tar)

