<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Movie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $featuredMovies = Movie::whereIsFeatured(true)->get();
        $isActive = Auth::user()->isActive;

        // dd($coba);
        $movies = Movie::all();
        return inertia('User/Dashboard/Index', compact(['featuredMovies', 'movies',]));
    }
}
