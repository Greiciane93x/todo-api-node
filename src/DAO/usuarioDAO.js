const { response } = require('express')
const bd = require('../infra/sqlite-db')

class UsuarioDAO {

    static async buscaTodosUsuariosInBD(){
        await bd.all("SELECT * FROM usuario" , [] , (err, rows) => {
                err ? err : console.log(rows)
        })
    }
    static async criaUsuarioInBD(body){
            await bd.run(`INSERT INTO usuario (email, senha) VALUES(? , ?)`, [body.email, body.senha])

    }
    static async deleteUsuarioInBD(email){
           await bd.run(`DELETE from usuario WHERE email = ?` , [email])
             
    }
    static async alterarUsuarioInBD(email){
          await  bd.run(`UPDATE usuario SET email = 'alice@bol' WHERE email = ? ` , [email])
            
    }

 

}

module.exports = UsuarioDAO