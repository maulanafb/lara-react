import CButton from "@/Components/CButton";
import FlashMessage from "@/Components/FlashMessage";
import Authenticated from "@/Layouts/Authenticated/Index"
import { Link, usePage, } from '@inertiajs/react'
export default function Index() {
    const { flashMessage } = usePage().props
    console.log(flashMessage.message)
    const { auth } = usePage().props

    return (<>
        <Authenticated auth={auth} >
            <Link href={route('admin.dashboard.movie.create')}>
                <CButton type="button" className="w-40 mb-8">
                    Insert New Movie
                </CButton>
            </Link>
            {flashMessage && (<FlashMessage message={flashMessage.message} />)}
        </Authenticated>
    </>)
}
