const bd = require('../infra/sqlite-db')

class UsuarioDAO {

    static buscaTodosUsuariosInBD(){
        return (new Promise ( (resolve, reject) => {
            bd.all(`SELECT * FROM usuario`, [], (err, rows) => {
                if(err) reject(err)
                else{
                    resolve(rows)
                }
            })

        })
    )}

    static criaUsuarioInBD(body){
        return(new Promise ((resolve, reject) => {
            bd.run(`INSERT INTO usuario (email, senha) VALUES(? , ?)`, [body.email, body.senha], (err) => {
                if(err) reject (err)
                else{
                    resolve('Usuário Cadastrado com sucesso!')
                }
            })
        }))
    }
  


    static deleteUsuarioInBD(email){
        return (new Promise( (resolve, reject) => {
            bd.run(`DELETE from usuario WHERE email = ?` , [email] , (err) => {
                if(err) reject(err)
                else{
                    resolve('Usuário deletado com sucesso!')
                }
            })
        }))
    }

 

}

module.exports = UsuarioDAO