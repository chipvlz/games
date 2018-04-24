@extends('home')

@section('title')
{{ $game->name }}
@endsection

@section('content')
<div class="content">
    <!-- [START OF] MAIN  GAME -->
    <div id="main-game">
        <div class="box-header">

        </div>
        <div class="box-body">
            <div id="slider-list-game" class="">
                <div class="owl-carousel owl-theme" id="owl-listgame" style="opacity: 1; display: block;">
                    <div class="owl-wrapper-outer">
                        <div class="owl-wrapper" style="width: 4444px; left: 0px; display: block;">
                            <div class="owl-item" style="width: 202px;">
                                <div class="item">
                                    <div class="box-game">

                                        <a href="{{ url('game') }}/1" class="center-parent0" title="Cờ Tướng">
                                            <span class="icon-game ">
												<img src="{{ url('') }}/index_files/chinesechess.png" alt="">
											</span>
                                            <span class="name-game">Cờ Tướng</span>
                                            <span class="right_icon new-game"></span>
                                        </a>
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>
					
					<div class="owl-wrapper-outer">
                        <div class="owl-wrapper" style="width: 1010px; left: 0px; display: block;">
                            
							@foreach($rooms as $room)
							<div class="owl-item" style="width: 202px">
                                <div class="item">
                                    <div class="box-game">
										<a href="{{ url('/room/' . $room->id) }}" class="center-parent0" title="{{ $room->name }}">
                                            <span class="icon-game ">
												<img src="{{ url('images') }}/icongame-cotuong.png" alt="">
											</span>
                                            <span class="name-game room" data-roomid='{{ $room->id }}' >{{ $room->name }} <span class='users-in-room'>( {{ $room->users_in_room  }} )</span></span>
                                            <span class="right_icon new-game"></span>
                                        </a>
                                    </div>
								</div>
							</div>
							@endforeach()
							
							
                        </div>
                    </div>
                    
					
                </div>
            </div>
        </div>

    </div>
    

</div>

@endsection()

@section('javascript')
<script>

	var gameId = '{{ $game->id }}';

	$(function () {
		var socket = io('{{ env('SOCKET_URL') }}', {
			path: '/room'
		});
			
		socket.emit('update-rooms', gameId);	

		socket.on('update-rooms', function(msg){
			//console.log(msg);
			
			$.get('{{ url('') }}/api/room/users-in-room/' + gameId, function(data){
				
				//console.log(data);
				
				data.forEach(function(item, index){
					//console.log(index);
					$('.room span').eq(index).text('( ' + item['users_in_room'] + ' )');
				});
			});
		});	
			
	});
</script>
@endsection()