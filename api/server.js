const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const session = require("express-session"); // 1: npm i express-session
const KnexSessionStorage = require("connect-session-knex")(session); // <<<<<< for storing sessions in db


const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const jokesRouter = require('../jokes/jokes-router.js');
const knexConnection = require('../database/dbConfig');
const userRouter = require('../users/usersRouter');

const server = express();

server.use('/api/users', userRouter);
server.use(helmet());
server.use(cors());
server.use(express.json());


server.use('/api/auth', authRouter);
server.use('/api/jokes', authenticate, jokesRouter);


server.get("/", (req, res) => {
    res.json({ api: "up"});
  });

module.exports = server;
