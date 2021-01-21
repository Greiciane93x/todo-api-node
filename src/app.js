const express = require('express'); 
const bodyParser = require('body-parser'); 
const app = express(); 
const port = 3000; 
app.use(bodyParser.json()); 
const controllersUsuario = require('./controllers/controllers-usuario'); 
controllersUsuario(app); 

const controllersTarefa = require('./controllers/controllers-tarefa'); 
controllersTarefa(app); 



app.listen(port, ()=> {
    console.log(`APP rodando na porta ${port}`)
})

