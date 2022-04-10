const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config()
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const port = process.env.PORT || 9000;
const dburl = `mongodb+srv://${username}:${password}@cluster0.8jcys.mongodb.net/crud?retryWrites=true&w=majority`;

const app = express();
mongoose.connect(dburl);

mongoose.connection.on("open", () => {
    console.log("db connected");
});

app.use(express.json());

const userRouter = require("./routes/users")
app.use('/users', userRouter)

app.listen(port, () => {
    console.log("server started")
});
