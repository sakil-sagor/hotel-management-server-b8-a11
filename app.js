const express = require("express");
const app = express();
const cors = require("cors")
const mongoose = require("mongoose")


// middlewares
app.use(express.json());

app.use(cors());

const roomsrRoute = require("./routes/v1/rooms.route")

app.use("/api/v1/rooms", roomsrRoute)




module.exports = app;

