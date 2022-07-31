const express = require("express");
const app = express();
const mongoose = require("mongoose");
var port = 3000;
const dotenv = require("dotenv")
dotenv.config()


app.use("/public", express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const TodoTask = require("./models/TodoTask");



app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.get("/list.ejs", (req, res) => {

    // res.render("/list.ejs")
    TodoTask.find( (err, found)=>{
        if(err){
            console.log(err)
        } else{
            res.render("/list.ejs", {content: found})
        }
    })

});


app.post('/list.ejs', (req, res) => {

    console.log(req.body)
    const input = req.body.input
    const todoList = new TodoTask({
        content: input
    })
    todoList.save((err)=>{
        if(err){
            console.log(err)
        } else{
            res.redirect('/list.ejs')
        }
    })
});



// mongoose.set("useFindAndModify", false);

mongoose.connect(process.env.DB_CONNECT,
    { userNewUrlParser: true }, () => {

        console.log("Connected to db!");

        app.listen(port, () => { console.log(`Server is listaning on Port ${port}`) })
    })

