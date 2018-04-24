var app = require('express')();
var http = require('http').Server(app);


const roomIo = require('socket.io')(http, {
  path: '/room',
  serveClient: false,
  // below are engine.IO options
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false
});

roomIo.on('connection', function(socket){
  //console.log('a user connected');
  
  
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
