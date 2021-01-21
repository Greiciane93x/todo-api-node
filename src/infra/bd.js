const Usuario = require("../models/usuario")
const Tarefas = require("../models/tarefas")

let usuarios = new Usuario(); 
     
usuarios.nome = "Alice"; 
usuarios.email = "teste@teste"; 
usuarios.senha = "8797987987"

let tarefas = new Tarefas(); 
tarefas.titulo = "Learning Programming"; 
tarefas.descricao = "Learning Programming FullStack", 
tarefas.status = "Em andamento", 
tarefas.data_criacao = "10/11/2020"

module.exports = {

usuarios,  
tarefas
  
}



console.log(usuarios, tarefas)