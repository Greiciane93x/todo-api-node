const sqlite3 = require('sqlite3').verbose(); 

const path = require('path')
const dbPath = path.resolve(__dirname, 'database.db')
const db = new sqlite3.Database(dbPath)

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS usuario (email varchar(256), senha varchar(20))`)

    db.run(`INSERT INTO usuario (email, senha) VALUES ('alice@teste', '****')`)

    db.run(`INSERT INTO usuario (email, senha) VALUES ('greici@teste', '****')`)

    db.run(`INSERT INTO usuario (email, senha) VALUES ('bruno@teste', '****')`)



})