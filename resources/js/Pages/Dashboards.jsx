import Authenticated from "@/Layouts/Authenticated/Index"
import Flickity from "react-flickity-component"
import { Head } from "@inertiajs/react"
import FeaturedMovies from "@/Components/FeaturedMovies"
import BrowseMovies from "@/Components/MovieCard"
import MovieCard from "@/Components/MovieCard"
import { usePage, } from '@inertiajs/react'

export default function Dashboard({ auth }) {
    const { auth } = usePage().props;
    console.log(auth)
    return (
        <Authenticated auth={auth}>
            <Head>
                <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
                <title>Dashboard</title>
            </Head>
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">Featured Movies</div>
                <Flickity className="gap-[30px] __scroll-selector" options={flickityOption}>
                    {[1, 2, 3, 4].map((i) => (
                        <FeaturedMovies name={"de badman in lof"} slug={`the-batman-in-love${i}`} thumbnail={'/images/browse-1.png'} category={"Film"} rating={i + 1} key={i} />
                    ))}
                </Flickity>
            </div>
            <div>
                <div className="font-semibold text-[22px] text-black mb-4 mt-5 mb-5">Browse</div>
                <div className="__scroll-selector">
                    <Flickity options={flickityOption}>
                        {[1, 2, 3, 4].map((i) => (
                            <MovieCard key={i} title={`Badman in lope ${i}`} slug={`badman-in-loper${i}`} category={'Film'} thumbnail={`/images/browse-1.png`} />
                        ))}
                    </Flickity>
                </div>
            </div>
        </Authenticated>
    )
}
