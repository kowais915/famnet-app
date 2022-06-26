const express = require("express");
const mongoose = require("mongoose");
const { on } = require("nodemon");
const socket = require("socket.io");


const app = express();

app.use(express.static('public'));

app.set("view engine", "ejs");




const server = app.listen(process.env.PORT || 3000, ()=>{
    console.log("Listening to requests at port 3000");
});



//socket
const io = socket(server);

io.on("connection", function(socket){
    console.log("Made a connection", socket.id);

    socket.on('chat', function(data){
        io.sockets.emit('chat', data);
    })
})



//chat route
app.get("/chat", (req, res)=>{
    res.render("chat");
})

//login route
app.get("/", (req, res)=>{
    res.render("login");
})

//blog route

app.get("/blog", (req, res)=>{
    res.render("blog");
})