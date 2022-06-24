const express = require('express')
const app = express();
const cors = require('cors')
const morgan = require('morgan');

require('./database');

const rotesAccount = require('./routes/accounts');

// Log das requisições a api
app.use(morgan('dev'))

app.use(express.urlencoded({ extended: false }))
app.use(express.json()) // config para aceitar apenas json como entrada 


// Config cors
app.use(cors())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }
    next();
});

app.use('/account', rotesAccount)

// Rota não encontrada!
app.use((req, res, next) => {
    const erro = new Error('Não encontrado.')
    erro.status = 404
    next(erro)
})

// Captura todo tipo de erro ligado a rota
app.use((error, req, res, next) => {
    res.status(error.status || 500)
    console.log(error)
    return res.send({
        erro: {
            message: error.message
        }
    })
})

module.exports = app