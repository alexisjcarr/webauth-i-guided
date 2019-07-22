const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const db = require("./database/dbConfig.js");
const Users = require("./users/users-model.js");
const authRouter = require("./routers/authRouter");
const usersRouter = require("./routers/usersRouter");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
  res.send("It's alive!");
});

server.use(authRouter);
server.use("/api/users", usersRouter);

module.exports = server;
