<?php

use Illuminate\Database\Seeder;

class RoomTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
		
		for($i=0; $i<20; $i++){
			DB::table('rooms')->insert([
				'name' => 'Room ' . ($i + 1),
				'game_id' => 1
			]);
		}
		
		
    }
}
