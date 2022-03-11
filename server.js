const express = require('express');
const cors = require('cors')
const userRouter = require('./routers/users-router')
const registerRouter = require('./routers/register-router')
const loginRouter = require('./routers/login-router')


const server = express();


server.use(cors())
server.use(express.json())

server.use("/api/users", userRouter);

server.use("/api/register", registerRouter)

server.use("/api/login", loginRouter)

module.exports = server;
