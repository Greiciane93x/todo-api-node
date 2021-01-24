const Usuario = require("../models/usuario")
const Tarefas = require("../models/tarefas") 
module.exports = {
	usuarios: [new Usuario('Perispúcio', 'perispucio@teste', 'senha123'), 
		   new Usuario('Astrogildo', 'Astrogildo@teste', '21321') 
		   ] , 
	tarefas : [new Tarefas('Estudar dev Fullstack', 'Estudando abstracao de banco de dados com API REST'
	, 'Em andamento', '24/01/2021')
		] 


}

