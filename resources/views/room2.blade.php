<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width">
	<link rel="stylesheet" type="text/css" href="{{ url('chess-room') }}/cn-chess.css">
	<title>{{ $room->name }}</title>
	
	@if($type == 2)
	<style>
		#board{
			transform: rotate(180deg);
		}
		
		.redpiece, .blackpiece{
			transform: rotate(180deg);
		}
	</style>
	@endif
</head>
<body>
	<div id="cn-chess">
		<div id="board">
			
			<div id="sq00">车</div>
			<div id="sq01">马</div>
			<div id="sq02">象</div>
			<div id="sq03">士</div>
			<div id="sq04">将</div>
			<div id="sq05">士</div>
			<div id="sq06">象</div>
			<div id="sq07">马</div>
			<div id="sq08">车</div>
			<div id="sq10"> </div>
			<div id="sq11"> </div>
			<div id="sq12"> </div>
			<div id="sq13"> </div>
			<div id="sq14"> </div>
			<div id="sq15"> </div>
			<div id="sq16"> </div>
			<div id="sq17"> </div>
			<div id="sq18"> </div>
			<div id="sq20"> </div>
			<div id="sq21">炮</div>
			<div id="sq22"> </div>
			<div id="sq23"> </div>
			<div id="sq24"> </div>
			<div id="sq25"> </div>
			<div id="sq26"> </div>
			<div id="sq27">炮</div>
			<div id="sq28"> </div>
			<div id="sq30">卒</div>
			<div id="sq31"> </div>
			<div id="sq32">卒</div>
			<div id="sq33"> </div>
			<div id="sq34">卒</div>
			<div id="sq35"> </div>
			<div id="sq36">卒</div>
			<div id="sq37"> </div>
			<div id="sq38">卒</div>
			<div id="sq40"> </div>
			<div id="sq41"> </div>
			<div id="sq42"> </div>
			<div id="sq43"> </div>
			<div id="sq44"> </div>
			<div id="sq45"> </div>
			<div id="sq46"> </div>
			<div id="sq47"> </div>
			<div id="sq48"> </div>
			
			<div id="sq50"> </div>
			<div id="sq51"> </div>
			<div id="sq52"> </div>
			<div id="sq53"> </div>
			<div id="sq54"> </div>
			<div id="sq55"> </div>
			<div id="sq56"> </div>
			<div id="sq57"> </div>
			<div id="sq58"> </div>
			<div id="sq60">兵</div>
			<div id="sq61"> </div>
			<div id="sq62">兵</div>
			<div id="sq63"> </div>
			<div id="sq64">兵</div>
			<div id="sq65"> </div>
			<div id="sq66">兵</div>
			<div id="sq67"> </div>
			<div id="sq68">兵</div>
			<div id="sq70"> </div>
			<div id="sq71">炮</div>
			<div id="sq72"> </div>
			<div id="sq73"> </div>
			<div id="sq74"> </div>
			<div id="sq75"> </div>
			<div id="sq76"> </div>
			<div id="sq77">炮</div>
			<div id="sq78"> </div>
			<div id="sq80"> </div>
			<div id="sq81"> </div>
			<div id="sq82"> </div>
			<div id="sq83"> </div>
			<div id="sq84"> </div>
			<div id="sq85"> </div>
			<div id="sq86"> </div>
			<div id="sq87"> </div>
			<div id="sq88"> </div>
			<div id="sq90">车</div>
			<div id="sq91">马</div>
			<div id="sq92">相</div>
			<div id="sq93">仕</div>
			<div id="sq94">帅</div>
			<div id="sq95">仕</div>
			<div id="sq96">相</div>
			<div id="sq97">马</div>
			<div id="sq98">车</div>
			
			
		</div>
		
		
		<div id= "information">
			<h1 id="name">player 2</h1>
			<p id="player"> </p>
		</div>
		
		<div id= "control">
			<h1 id="msg"></h1>
			<h1 id="tip">TIP</h1>
			<p id="start">BẮT ĐẦU</p>
			<p id="retract">ĐI LẠI</p>
		</div>
		<div id="report">
			<h1 id="name">{{ $user->name }}</h1>
			<p id="player"> </p>
		</div>
	</div>
	
	
	<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.1.0/socket.io.js"></script> 
	<script src="https://code.jquery.com/jquery-1.11.1.js"></script>
	<script type="text/javascript" src="{{ url('chess-room') }}/global.js"></script>
	
	
	<script>
		var userId = {{ $user->id }};
		var roomId = {{ $room->id }};
		var type = {{ $type }};
		var name = '{{ $user->name }}';
		var turn = type == 1 ? 1 : 0;
		//var step = 0;
		
		var setClickAble = function(state, piece){
			$(document).ready(function(){
				console.log(state + ' - ' + piece);
			
				setTimeout(function(){
					$('.' + piece).each(function(){
						$(this).click(state);
					});	
				});
				
			});
			
			
		}
		
		
		var getBoard = function(){
			setTimeout(function(){
				$('#board div').removeClass('lastpiece');
			}, 2000);
			
			return $('#board').html();
		}
		
		var setBoard = function(inner){
			
			
			$('#board').html( inner );
		}
		
		
		//set piece click when a user just join room
		$(document).ready(function(){
			//setClickAble(false, 'redpiece');
			//setClickAble(false, 'blackpiece');
		});
		
		//socket
		
			var socket = io('{{ env('SOCKET_URL') }}', {
				path: '/room'
			});
			
			socket.on('connect', function(){
				socket.emit('join', userId, roomId);
			});
			
			socket.on('join2', function(hasTwoUser, _roomId){
				if(_roomId == roomId){
					if(hasTwoUser == true){
						//$('#msg').text('Chuẩn bị bắt đầu !');
						//socket.emit('play', userId, roomId);
						
						if(type == 1){
							$('#msg').text('Đến lượt bạn đi !' );
							
							//setClickAble(true, 'redpiece');
							//step = 0;
							
							
							
						}else{
							$('#msg').text('Đến lượt đối thủ đi !' );
							//step = false;
						}
						
					}else{
						$('#msg').text('Đang chờ đối thủ !');
					}
				}
			});
			
			socket.on('play', function(_userId, _roomId, _board){
				if(_roomId == roomId){
					if(_userId != userId){
						$('#board').html(_board);
						$('#msg').text('Đến lượt bạn đi !' );
						
						if(type == 1){
							//step = 0;	
						}else{
							//step = 1;
						}
						//step++;
						
						
					}else{
						$('#board').html(_board);
						$('#msg').text('Đến lượt đối thủ !' );
						
						//step++;
						//step = false;
						
						
					}
				}
				
			});
			
			
			
			
		
	</script>
	
	
	<script type="text/javascript" src="{{ url('chess-room') }}/cn-chess.js"></script>
	
</body>
</html>
