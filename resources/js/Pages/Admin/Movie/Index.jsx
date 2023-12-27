import CButton from "@/Components/CButton";
import Authenticated from "@/Layouts/Authenticated/Index"
import { Link, usePage, } from '@inertiajs/react'
export default function Index() {
    const { auth } = usePage().props

    return (<>
        <Authenticated auth={auth} >
            <Link href={route('admin.dashboard.movie.create')}>
                <CButton type="button" className="w-40 mb-8">
                    Insert New Movie
                </CButton>
            </Link>
        </Authenticated>
    </>)
}
