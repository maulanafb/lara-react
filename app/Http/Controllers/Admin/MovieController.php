<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Movie\Store;
use App\Http\Requests\Admin\Movie\Update;
use App\Models\Movie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Str;

class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $movies = Movie::withTrashed()->orderBy('deleted_at')->get();
        return inertia('Admin/Movie/Index', compact('movies'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Admin/Movie/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Store $request)
    {
        $data = $request->validated();

        if ($request->hasFile('thumbnail')) {
            $thumbnailFile = $request->file('thumbnail');

            // Generate a unique filename for the uploaded thumbnail
            $fileName = uniqid('movie_') . '_' . time() . '.' . $thumbnailFile->getClientOriginalExtension();

            // Move the file to the 'public/movies' directory with the generated filename
            $thumbnailFile->move(public_path('storage/movies'), $fileName);

            // Update the 'thumbnail' field in the $data array with the storage path
            $data['thumbnail'] = 'movies/' . $fileName;
        }

        // Set the slug
        $data['slug'] = Str::slug($data['name']);
        // dd($data);

        // Continue with creating the Movie record
        $movie = Movie::create($data);

        return redirect(route('admin.dashboard.movie.index'))->with([
            'message' => "Berhasil menambah movie",
            'type' => 'success'
        ]);
    }


    /**
     * Display the specified resource.
     */
    public function show(Movie $movie)
    {
        return $movie;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Movie $movie)
    {
        return inertia('Admin/Movie/Edit', compact('movie'));

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Update $request, Movie $movie)
    {
        // dd($request);
        $data = $request->validated();

        if ($request->hasFile('thumbnail')) {
            $thumbnailFile = $request->file('thumbnail');

            // Generate a unique filename for the uploaded thumbnail
            $fileName = uniqid('movie_') . '_' . time() . '.' . $thumbnailFile->getClientOriginalExtension();

            // Move the file to the 'public/movies' directory with the generated filename
            $thumbnailFile->move(public_path('storage/movies'), $fileName);

            // Update the 'thumbnail' field in the $data array with the storage path
            $data['thumbnail'] = 'movies/' . $fileName;
        } else {
            $data['thumbnail'] = $movie->thumbnail;
        }

        $movie->update($data);

        return redirect(route('admin.dashboard.movie.index'))->with([
            'message' => "berhasil update movie",
            'type' => "success"
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Movie $movie)
    {
        $movie->delete();
        return redirect(route('admin.dashboard.movie.index'))->with([
            'message' => 'Berhasil Hapus Movie',
            'type' => 'success'
        ]);
    }

    public function restore($movie)
    {
        Movie::withTrashed()->find($movie)->restore();
        return redirect(route('admin.dashboard.movie.index'))->with([
            'message' => "Berhasil Mengembalikan MOvie",
            'type' => 'success'
        ]);
    }
}
