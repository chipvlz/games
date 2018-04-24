var express = require('express')
  , http = require('http');
//make sure you keep this order
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);

server.listen(8080);

// routing
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

// usernames which are currently connected to the chat
var usernames = {};

io.sockets.on('connection', function (socket) {

	// when the client emits 'sendchat', this listens and executes
	socket.on('gui_chat', function (data) {
		// we tell the client to execute 'updatechat' with 2 parameters
		io.sockets.emit('thong_bao', socket.username, data);
	});

	// when the client emits 'them_thanh_vien', this listens and executes
	socket.on('them_thanh_vien', function(username){
		// we store the username in the socket session for this client
		socket.username = username;
		// add the client's username to the global list
		usernames[username] = username;
		// echo to client they've connected
		socket.emit('thong_bao', 'SERVER', 'you have connected');
		// echo globally (all clients) that a person has connected
		socket.broadcast.emit('thong_bao', 'SERVER', username + ' has connected');
		// update the list of users in chat, client-side
		io.sockets.emit('cap_nhat_thanh_vien', usernames);
	});

	// when the user disconnects.. perform this
	socket.on('disconnect', function(){
		// remove the username from global usernames list
		delete usernames[socket.username];
		// update list of users in chat, client-side
		io.sockets.emit('cap_nhat_thanh_vien', usernames);
		// echo globally that this client has left
		socket.broadcast.emit('thong_bao', 'SERVER', socket.username + ' has disconnected');
	});
});