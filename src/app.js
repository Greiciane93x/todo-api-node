const express = require('express'); 
const app = express(); 
const port = 8080; 

const controllersUsuario = require('./controllers/controllers-usuario'); 
controllersUsuario(app); 

const controllersTarefa = require('./controllers/controllers-tarefa'); 
controllersTarefa(app); 

app.listen(port, ()=> {
    console.log(`APP rodando na porta ${port}`)
})