require('dotenv/config')

const dialect = process.env.DIALECT
const dbName = process.env.DB_NAME
const dbUser = process.env.DB_USER
const dbHost = process.env.DB_HOST
const dbPort = process.env.DB_PORT
const dbPassword = process.env.DB_PASSWORD

const dbNameProduction = process.env.DB_NAME
const dbUserProduction = process.env.DB_USER
const dbHostProduction = process.env.DB_HOST
const dbPortProduction = process.env.DB_PORT
const dbPasswordProduction = process.env.DB_PASSWORD


module.exports = {
    "development": {
        "username": dbUser,
        "password": dbPassword,
        "database": dbName,
        "host": dbHost,
        "port": dbPort,
        "dialect": dialect
    },
    "production": {
        "username": dbUserProduction,
        "password": dbPasswordProduction,
        "database": dbNameProduction,
        "host": dbHostProduction,
        "port": dbPortProduction,
        "dialect": dialect
    }
}