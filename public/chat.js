console.log("Working")
var socket = io.connect("http://localhost:3000/");


let username = document.getElementById('handle'),
    msg = document.getElementById('message'),
    output = document.getElementById('output'),
    send = document.getElementById('send');


   

    send.addEventListener("click", (e=>{

        alert(msg.value)
        alert(username.value)

        socket.emit('chat', {
            msg: msg.value,
            username: username.value
        })

     
    }) )