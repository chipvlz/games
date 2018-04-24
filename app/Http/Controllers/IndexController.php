<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IndexController extends Controller
{
    //
	
	public function index(){
		return view('home.index');
	}
	
	public function loginForm(){
		return view('home.login');
	}
}
