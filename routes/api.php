<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});



Route::prefix('room')->group(function () {
	Route::get('/users/{room_id}', function () {
        
    });
	
	Route::post('/user', function(Request $request){
		//kiem tra xem user da o trong phong hay chua
		$check = DB::table('user_room')
		->where('user_id', $request->user_id)
		->where('room_id', $request->room_id)
		->where('status', 0)
		->first();
		
		if($check){
			return $check;
		}
		
		DB::table('user_room')->insert([
			'user_id' => $request->user_id,
			'room_id' => $request->room_id
		]);
		
	});
	
	Route::get('/count-users/{room_id}', function($room_id){
		return DB::table('user_room')->where('room_id', $room_id)->count();
	});
	
	Route::get('users-in-room/{game_id}', function($game_id){
		$users_in_room = DB::select(DB::raw('SELECT (SELECT COUNT(*) FROM user_room  WHERE user_room.room_id = rooms.id AND user_room.status != 2) as users_in_room FROM rooms WHERE rooms.game_id = ' . $game_id));
	
		return $users_in_room;
	});
	
	Route::post('/delete-user', function(Request $request){
		//kiem tra xem user da o trong phong hay chua
		$check = DB::table('user_room')
		->where('user_id', $request->user_id)
		->where('room_id', $request->room_id)
		->where('status', '!=', 2)
		->delete();
		
	});
});