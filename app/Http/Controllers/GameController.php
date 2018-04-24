<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Game;

class GameController extends Controller
{
    //
	
	public function index($id){
		
		$game = Game::find($id);
		//$rooms = DB::table('rooms')->where('game_id', $id)->get();
		
		/*
		$rooms = DB::table('rooms')
		->select('rooms.*', DB::raw('SELECT COUNT(*) as user_in_room FROM user_room  WHERE user_room.room_id = rooms.id') )
		//->leftJoin('user_room', 'rooms.id', '=', 'user_room.room_id')
		//->leftJoin('users', 'user_room.user_id', '=', 'users.id')
		->where('rooms.game_id', $id)
		//->where('user_room.status', '!=', 2)
		->get();*/
		
		
		$rooms = DB::select(DB::raw('SELECT * , (SELECT COUNT(*) FROM user_room  WHERE user_room.room_id = rooms.id ) as users_in_room FROM rooms'));
		
		//var_dump($rooms);
		
		
		return view('game', [
			'rooms' => $rooms,
			'game' => $game
		]);
	}
}
