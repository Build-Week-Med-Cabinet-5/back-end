const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

// -- add auth routers -- //
const authRouter = require("../auth/auth-router");
const userRouter = require("../users/users-router.js");
const strainRecommendationRouter = require('../strains/strain-recommendation-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

// -- Add web routes here --- //
server.use("/api/auth", authRouter);
server.use("/api/users", userRouter);
server.use("/api/strain_recommendations", strainRecommendationRouter);

// Displays message in body if server is running
server.get("/", (req, res) => {
    res.send(`<h2>Server is responding.</h2>`);
});

module.exports = server;
