require('dotenv').config() // Esto permite a Node a acceder a las variables de .env

const jsonServer = require("json-server")

const server = jsonServer.create() // Crea el código del servidor json

// middlewares son configuraciones del servidor
const middlewares = jsonServer.defaults() // crea las configuraciones esenciales de el server

server.use(middlewares) // hacer uso de las configuraciones

const allowAccessFromAnywhere = (req, res, next) => {

    res.header("Access-Control-Allow-Origin", "*")
    next()
}

server.use(allowAccessFromAnywhere) // Esto permite que cualquier cliente pueda acceder a mi servidor desde cualquier sitio

const router = jsonServer.router("db.json")

server.use(router) // Esto crea todas las rutas básicas de acceso y modificación a la base de datos (get, post, patch, put, delete)

const PORT = process.env.PORT | 5005

server.listen(PORT, () => {
    console.log("Servidor ANDANDO")
    console.log(`Ejecutándose localmente en http://localhost:${PORT}`)
}) // Ponemos a andar al servidor y que escuche las llamadas del cliente por el puerto 5005

// Prueba bla bla

