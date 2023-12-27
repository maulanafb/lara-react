import CButton from "@/Components/CButton";
import CInput from "@/Components/CInput";
import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Authenticated from "@/Layouts/Authenticated/Index"
import { Link, usePage, useForm, Head, } from '@inertiajs/react'
export default function Create() {
    const { auth } = usePage().props
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        category: '',
        video_url: '',
        thumbnail: '',
        rating: '',
        is_featured: false
    });

    const onHandleChange = (event) => {
        const { name, type, value, files } = event.target;

        // Use a conditional to check if the input type is a file
        setData(name, type === 'file' ? files[0] : value);

        // Handle checkbox state separately
        if (type === 'checkbox') {
            setData('is_featured', event.target.checked);
        }
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.dashboard.movie.store'));
    };
    return (
        <Authenticated auth={auth}>
            <Head>
                <title>Insert Movie</title>
            </Head>
            <h1 className="text-xl">Insert a new Movie</h1>
            <hr className="mb-4" />

            <form onSubmit={submit} >
                <InputLabel className="text-base block mb-2"
                    value={'Movie Name'}
                    htmlFor="name"
                />
                <CInput
                    id="name"
                    value={data.name}
                    autoComplete="current-name"
                    onChange={onHandleChange}
                    type="text"
                    name="name"
                    variant="primary-outline"
                    placeholder="Movie name"
                    className="rounded-2xl bg-form-bg py-[13px] px-7 w-full  focus:outline-none"
                />
                <InputError message={errors.name} className="mt-2" />

                <InputLabel className="text-base block mb-2 mt-4"
                    value={'Movie Category'}
                    htmlFor="category"
                />
                <CInput
                    id="category"
                    value={data.category}
                    autoComplete="current-category"
                    onChange={onHandleChange}
                    type="text"
                    name="category"
                    variant="primary-outline"
                    placeholder="Movie Category"
                    className="rounded-2xl bg-form-bg py-[13px] px-7 w-full  focus:outline-none"
                />
                <InputError message={errors.category} className="mt-2" />

                <InputLabel className="text-base block mb-2 mt-4"
                    value={'Movie Url'}
                    htmlFor="video_url"
                />
                <CInput
                    id="video_url"
                    value={data.video_url}
                    autoComplete="current-video_url"
                    onChange={onHandleChange}
                    type="text"
                    name="video_url"
                    variant="primary-outline"
                    placeholder="Movie Url"
                    className="rounded-2xl bg-form-bg py-[13px] px-7 w-full  focus:outline-none"
                />
                <InputError message={errors.video_url} className="mt-2" />

                <InputLabel className="text-base block mb-2 mt-4"
                    value={'Movie Thumbnail'}
                    htmlFor="thumbnail"
                />
                <CInput
                    id="thumbnail"
                    // value={data.thumbnail}
                    autoComplete="current-thumbnail"
                    onChange={onHandleChange}
                    type="file"
                    name="thumbnail"
                    variant="primary-outline"
                    placeholder="Movie Url"
                    className="rounded-2xl bg-form-bg py-[13px] px-7 w-full  focus:outline-none"
                />
                <InputError message={errors.thumbnail} className="mt-2" />

                <InputLabel className="text-base block mb-2 mt-4"
                    value={'Movie Rating'}
                    htmlFor="rating"
                />
                <CInput
                    id="rating"
                    value={data.rating}
                    autoComplete="current-rating"
                    onChange={onHandleChange}
                    type="number"
                    name="rating"
                    variant="primary-outline"
                    placeholder="Movie Url"
                    className="rounded-2xl bg-form-bg py-[13px] px-7 w-full  focus:outline-none"
                />
                <InputError message={errors.rating} className="mt-2" />

                <div className="flex flex-row mt-4 items-center">
                    <InputLabel className="text-base block mr-3 mt-1"
                        value={'Movie Featured?'}
                        htmlFor="rating"
                    />
                    <Checkbox name="is_featured" checked={data.is_featured} onChange={onHandleChange} />
                </div>
                <CButton type="submit" className="mt-4" processing={processing}>
                    Save
                </CButton>
            </form>
        </Authenticated>
    )
}
