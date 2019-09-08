var express = require('express')
var app=express()



app.get('/',(req,res,next)=>{
 res.sendFile(__dirname + '/index.html')  
})

var PORT = process.env.PORT||3000 
var server = app.listen(PORT,()=> console.log(`server listen on port ${PORT}`))

var io = require('socket.io')(server)
io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
      });
  });

