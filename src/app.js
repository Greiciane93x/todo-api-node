const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const routes = require('./routes')

const port = process.env.PORT

routes(app)

app.listen(port, () => console.log(`Servidor online na porta ${port}`))



