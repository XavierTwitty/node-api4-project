require('dotenv').config()

const PORT = process.env.PORT || 9000

const express = require('express')

const server = express()

server.get('/', (req, res) => {
    res.end('Hello World')
})
 
server.listen(PORT, () => {
    console.log(`server is up on ${PORT}`)
})

