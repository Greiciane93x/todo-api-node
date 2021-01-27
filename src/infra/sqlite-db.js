


const sqlite3 = require('sqlite3').verbose();

const path = require('path')
const dbPath = path.resolve(__dirname, 'database.db')
const bd = new sqlite3.Database(dbPath)




//Processamento de sinal
process.on('SIGINT', () =>
    bd.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);

module.exports = bd;

