import Authenticated from "@/Layouts/Authenticated/Index"
import Flickity from "react-flickity-component"
import { Head } from "@inertiajs/react"
import FeaturedMovies from "@/Components/FeaturedMovies"
import BrowseMovies from "@/Components/MovieCard"
import MovieCard from "@/Components/MovieCard"
export default function Dashboard({ auth, featuredMovies, movies }) {
    const flickityOption = {
        "cellAlign": "left",
        "contain": true,
        "groupCells": 1,
        "wrapAround": false,
        "pageDots": false,
        "prevNextButtons": false,
        "draggable": ">1"
    }
    return (
        <Authenticated user={auth.user}>
            <Head>
                <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
                <title>Dashboard</title>
            </Head>
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">Featured Movies</div>
                <Flickity className="gap-[30px] __scroll-selector" options={flickityOption}>
                    {featuredMovies.map((featuredMovie, i) => (
                        <FeaturedMovies name={featuredMovie.name} slug={`${featuredMovie.slug}${i}`} thumbnail={featuredMovie.thumbnail} category={featuredMovie.category} rating={featuredMovie.rating} key={featuredMovie.slug + 'awdsadaw'} />
                    ))}
                </Flickity>
            </div>
            <div>
                <div className="font-semibold text-[22px] text-black mb-4 mt-5 mb-5">Browse</div>
                <div className="__scroll-selector">
                    <Flickity options={flickityOption}>
                        {movies.map((movie, i) => (
                            <MovieCard key={i} title={`${movie.name}`} slug={`${movie.slug}${i}`} category={movie.category} thumbnail={movie.thumbnail} />
                        ))}
                    </Flickity>
                </div>
            </div>
        </Authenticated>
    )
}
