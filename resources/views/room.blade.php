<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width">
	<link rel="stylesheet" type="text/css" href="{{ url('chess-room') }}/cn-chess.css">
	<title>{{ $room->name }}</title>
	
	{{--
	@if($type == 2)
	<style>	
		.blackpiece{
			/*color: #f00;*/
			transform: rotate(180deg);
		}
		
		.redpiece{
			/*color: #000;*/
			transform: rotate(180deg);
		}
		
		#board{
			transform: rotate(180deg);
		}
		
	</style>
	@endif--}}
</head>
<body>
	<div id="cn-chess">
		<div id="board">
			<div id="sq00">?</div>
			<div id="sq01">?</div>
			<div id="sq02">¶H</div>
			<div id="sq03">¤h</div>
			<div id="sq04">?</div>
			<div id="sq05">¤h</div>
			<div id="sq06">¶H</div>
			<div id="sq07">?</div>
			<div id="sq08">?</div>
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
			<div id="sq21">¬¶</div>
			<div id="sq22"> </div>
			<div id="sq23"> </div>
			<div id="sq24"> </div>
			<div id="sq25"> </div>
			<div id="sq26"> </div>
			<div id="sq27">¬¶</div>
			<div id="sq28"> </div>
			<div id="sq30">¨ò</div>
			<div id="sq31"> </div>
			<div id="sq32">¨ò</div>
			<div id="sq33"> </div>
			<div id="sq34">¨ò</div>
			<div id="sq35"> </div>
			<div id="sq36">¨ò</div>
			<div id="sq37"> </div>
			<div id="sq38">¨ò</div>
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
			<div id="sq60">§L</div>
			<div id="sq61"> </div>
			<div id="sq62">§L</div>
			<div id="sq63"> </div>
			<div id="sq64">§L</div>
			<div id="sq65"> </div>
			<div id="sq66">§L</div>
			<div id="sq67"> </div>
			<div id="sq68">§L</div>
			<div id="sq70"> </div>
			<div id="sq71">¬¶</div>
			<div id="sq72"> </div>
			<div id="sq73"> </div>
			<div id="sq74"> </div>
			<div id="sq75"> </div>
			<div id="sq76"> </div>
			<div id="sq77">¬¶</div>
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
			<div id="sq90">?</div>
			<div id="sq91">?</div>
			<div id="sq92">¬Û</div>
			<div id="sq93">¥K</div>
			<div id="sq94">?</div>
			<div id="sq95">¥K</div>
			<div id="sq96">¬Û</div>
			<div id="sq97">?</div>
			<div id="sq98">?</div>
			
		</div>
		
		<div id='tmpboard' style='display: none'></div>
		
		<div id= "information">
			<h1 id="name">player 2</h1>
			<p id="player"> </p>
		</div>
		<div id= "control">
			<h1 id="tip">TIP</h1>
			<p id="start">B?T ??U</p>
			<p id="retract">?I L?I</p>
		</div>
		<div id="report">
			<h1 id="name">{{ $user->name }}</h1>
			<p id="player"> </p>
		</div>
	</div>
	<script type="text/javascript" src="{{ url('chess-room') }}/global.js"></script>
	<script type="text/javascript" src="{{ url('chess-room') }}/cn-chess.js"></script>
	
	<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.1.0/socket.io.js"></script>
	<script src="https://code.jquery.com/jquery-1.11.1.js"></script>
	
	<script>
		
	
		var userId = {{ $user->id }};
		var roomId = {{ $room->id }};
		var type = {{ $type }};
		
		var setClickAble = function(state, piece){
			$('.' + piece).each(function(){
				$(this).click(state);
			});
		}
		
		var getBoard = function(){
			return $('#board').html();
		}
		
		var setBoard = function(inner){
			$('#tmpboard').html(inner);
			
			//setTimeout(function(){}, 1000);
			$('#tmpboard').css('transform', 'rotate(180deg)');
			$('#tmpboard .redpiece').css('transform', 'rotate(180deg)');
			$('#tmpboard .blackpiece').css('transform', 'rotate(180deg)');
			
			$('#board').html( $('#tmpboard').html() );
		}
		
		
		//set piece click when a user just join room
		$(document).ready(function(){
			@if($type == 2)
			$('#board').css('transform', 'rotate(180deg)');
			$('#board .redpiece').css('transform', 'rotate(180deg)');
			$('#board .blackpiece').css('transform', 'rotate(180deg)');
			@endif
			
			setClickAble(false, 'redpiece');
			setClickAble(false, 'blackpiece');
			
			console.log(getBoard());
			
			
			
			
			setTimeout(function(){
				setBoard(getBoard());
			}, 5000);
		});
		
		//socket
		$(function () {
			var socket = io('{{ env('SOCKET_URL') }}', {
				path: '/room'
			});
			
			socket.on('connect', function(){
				socket.emit('join', userId, roomId);
			});
			
			
			//socket.on('disconnect', userId, roomId);
			
		});
	</script>
	
</body>
</html>
