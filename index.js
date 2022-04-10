const express = require("express");
const mongoose = require("mongoose");

const dburl = "mongodb+srv://admin:admin@cluster0.8jcys.mongodb.net/crud?retryWrites=true&w=majority";

const app = express();

mongoose.connect(dburl);
const con = mongoose.connection;

con.on("open", () => {
    console.log("db connected");
});

app.use(express.json());

const userRouter = require("./routes/users")
app.use('/users', userRouter)

app.listen(9000, () => {
    console.log("server started")
});
