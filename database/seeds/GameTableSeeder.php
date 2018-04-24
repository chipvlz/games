<?php

use Illuminate\Database\Seeder;

class GameTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
		DB::table('games')->insert([
            'name' => 'Cờ Tướng'
            
        ]);
		
		DB::table('games')->insert([
            'name' => 'Tài Xỉu'
            
        ]);
    }
}
