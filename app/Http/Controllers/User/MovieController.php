<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Movie;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MovieController extends Controller
{
    public function show(Movie $movie)
    {
        // return $movie;
        return inertia('User/Dashboard/Movie/Show', ['movie' => $movie]);
    }
}
