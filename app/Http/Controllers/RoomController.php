<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Room;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class RoomController extends Controller
{
    //
	public function index($id){
		
		$room = Room::find($id);
		$user = Auth::user();
		$checkInRoom = DB::table('user_room')
			->where('room_id', $id)
			->where('user_id', $user->id)
			->where('status', '!=', 2)
			->first();	
		
		$type = 1;
		
		if( !$checkInRoom ){
			$checkTypePlayer = DB::table('user_room')
			->where('room_id', $id)
			->where('status', '!=', 2)
			->first();
			
			if(!$checkTypePlayer){
				
				DB::table('user_room')->insert([
					'user_id' => $user->id,
					'room_id' => $id,
					'type' => 1
				]);
			}else{
				$type = 2;
				
				DB::table('user_room')->insert([
					'user_id' => $user->id,
					'room_id' => $id,
					'type' => 2
				]);
			}
		}else{
			$type = $checkInRoom->type;
		}
		
		return view('room2', [
			'room' => $room,
			'user' => $user,
			'type' => $type
		]);
	}
}
