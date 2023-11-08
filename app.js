const express = require("express");
const app = express();
const cors = require("cors")
const mongoose = require("mongoose")


// middlewares
app.use(express.json());
app.use(cors());

const roomsrRoute = require("./routes/v1/rooms.route")
const accesstoken = require("./routes/v1/token.route")

app.use("/api/v1/rooms", roomsrRoute)
app.use("/api/v1/accesstoken", accesstoken)





module.exports = app;

