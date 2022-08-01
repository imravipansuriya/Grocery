const express = require("express");
const app = express();
const mongoose = require("mongoose")


mongoose.connect("mongodb://localhost:27017/TodoApp", {
    useNewUrlParser: true,
  useUnifiedTopology: true,
})

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");


// routes
app.use(require("./routes/index"))
app.use(require("./routes/todo"))


app.listen(3000, ()=>{
    console.log(`Server is listaning on Port 3000`)
})