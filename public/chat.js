
var socket = io.connect("http://localhost:3000");


let handle = document.getElementById('handle'),
    msg = document.getElementById('message'),
    output = document.getElementById('output'),
    send = document.getElementById('send');

    

   

    send.addEventListener("click", function() {

        socket.emit('chat', {
            msg: msg.value,
            username: handle.value
        }); 


    } );



    socket.on('chat', function(data){
    
    alert(data.msg);
      output.innerHTML += "<p><strong>" + data.username + ": </strong>" + data.msg +"</p>";
    })