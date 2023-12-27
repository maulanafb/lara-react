import CButton from "@/Components/CButton";
import FlashMessage from "@/Components/FlashMessage";
import Authenticated from "@/Layouts/Authenticated/Index"
import { Head, Link, usePage, router, useForm } from '@inertiajs/react'
export default function Index({ movies }) {
    const { flashMessage } = usePage().props
    const { delete: destroy, put } = useForm()
    console.log(flashMessage.message)
    const { auth } = usePage().props

    return (<>
        <Authenticated auth={auth} >
            <Head>
                <title>List Movie</title>
            </Head>
            <Link href={route('admin.dashboard.movie.create')}>
                <CButton type="button" className="w-40 mb-8">
                    Insert New Movie
                </CButton>
            </Link>
            {flashMessage && (<FlashMessage message={flashMessage.message} />)}
            <table className="table-auto w-full text-center">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Rating</th>
                        <th colSpan={1}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie, index) => (
                        <tr key={movie.id}>
                            <td>
                                <img src={`/storage/${movie.thumbnail}`} alt="thumbnail" className="w-32 rounded-md" />
                            </td>
                            <td>
                                {movie.name}
                            </td>
                            <td>
                                {movie.category}
                            </td>
                            <td>
                                {movie.rating.toFixed(1)}
                            </td>
                            <td className="flex justify-center mx-auto items-center text-center">
                                <Link href={route('admin.dashboard.movie.edit', movie.id)}>
                                    <CButton type="button" variant="warning">
                                        Edit
                                    </CButton>
                                </Link>
                                <div onClick={() => {
                                    movie.deleted_at ? put(route('admin.dashboard.movie.restore', movie.id)) :
                                        destroy(route('admin.dashboard.movie.destroy', movie.id))
                                }}>
                                    <CButton type="submit" className="mt-4" >
                                        {movie.deleted_at ? 'Restore' : "Delete"}
                                    </CButton>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Authenticated>
    </>)
}
