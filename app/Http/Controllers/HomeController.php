<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(){
        return Inertia::render('Home', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'products' => Product::whereHas('user', function ($query) {
                $query->where('blocked', '0')->where('status', '1')->where('subscribe_id', '>', 0);
            })
            ->with('user')->orderByDesc('id')->take(15)->get(),
        ]);
    }
}
