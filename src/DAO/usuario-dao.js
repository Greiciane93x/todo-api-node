module.exports = class UsuariosDao {

    constructor(bd){
        this.bd = bd;
    }

    listaUsuarios() {

        return new Promise( (res, rej) => {
            this.bd.all("SELECT * FROM USUARIOS;", (error, rows) => {
                error ? rej = 'Erro na consulta' + error : res(rows)
            })
        })
    }
}