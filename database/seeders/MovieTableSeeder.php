<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $movies = [
            [
                'name' => "The shawsank redeemption",
                'slug' => 'the-shawsank-redeemption',
                'category' => 'Drama',
                'video_url' => 'https://youtube.com/watch?v=6hB3S9bIaco',
                'thumbnail' => 'https://th.bing.com/th/id/OIP.tdaEZbIrBom8UbIs7kGlWQHaEK?rs=1&pid=ImgDetMain',
                'rating' => 9.3
            ],
            [
                'name' => "The Godfather",
                'slug' => 'the-Godfather',
                'category' => 'Drama',
                'video_url' => 'https://youtube.com/watch?v=6hB3S9bIaco',
                'thumbnail' => 'https://i1.wp.com/maroonersrock.com/wp-content/uploads/2020/10/godfather.jpg?ssl=1',
                'rating' => 8.3
            ],
            [
                'name' => "The Godfather Part2",
                'slug' => 'the-Godfather-part2',
                'category' => 'Drama',
                'video_url' => 'https://youtube.com/watch?v=6hB3S9bIaco',
                'thumbnail' => 'https://2.bp.blogspot.com/-sZ_fCaTZEiE/V0_i6OugQkI/AAAAAAAAAFM/oevjkl_Dw_EN6GAW1lt-uRm0KiA6PnnPgCKgB/s1600/The%2BGodfather%2BPart%2BII%2B1976%2Bposter.jpg',
                'rating' => 7.3
            ],
        ];
        Movie::insert($movies);
    }
}
