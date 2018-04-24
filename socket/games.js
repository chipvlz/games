var app = require('express')();
var http = require('http').Server(app);
var request = require('request');
const format = require('string-format');
format.extend(String.prototype, {})

const clientUrl = 'http://abc.sub24h.net';

const roomIo = require('socket.io')(http, {
    path: '/room',
    serveClient: false,
    // below are engine.IO options
    pingInterval: 10000,
    pingTimeout: 5000,
    cookie: false
});

roomIo.on('connection', function(socket) {
    //console.log('a user connected');
    socket.on('join', function(userId, roomId) {
		/*
		socket.userId = userId;
		socket.roomId = roomId;
        console.log('userId: ' + userId + ' roomId: ' + roomId);
        roomIo.emit('update-rooms', '1');*/
		
		request('{0}/api/room/count-users/{1}'.format(clientUrl, roomId), function (error, response, body) {
			console.log('error:', error); // Print the error if one occurred
			console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
			console.log('body:', body);
			
			console.log('count users : {}'.format(response) );
			
			if(body == 1){
				var hasTwoUser = false;
				
				roomIo.emit('join2', hasTwoUser, roomId);
			}else{
				var hasTwoUser = true;
				
				roomIo.emit('join2', hasTwoUser, roomId);
			}
		});
    });
	
	
	socket.on('play', function(userId, roomId, board){
		roomIo.emit('play', userId, roomId, board);
	});

    socket.on('update-rooms', function(gameId) {
        console.log('Update rooms of game : {} '.format(gameId));
    });

	
    //user roi khoi phong
	/*
    socket.on('disconnect', function(){
		console.log('user : {0} roi khoi phong {1}'.format(socket.userId, socket.roomId) );
		//console.log('a user disconnect');
		
		//update user in rooms of game
		roomIo.emit('update-rooms', '1');
		
		//delete user in room
        request.post('{}/api/room/delete-user'.format(clientUrl), {
            form: {
                user_id: socket.userId,
                room_id: socket.roomId
            }
        }, function(err, httpResponse, body) {
            console.log('Delete user {0} in room {1} : {2}'.format(socket.userId, socket.roomId, httpResponse));
        });
	});*/

});

http.listen(3000, function() {
    console.log('listening on *:3000');
});