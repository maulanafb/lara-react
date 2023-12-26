import CButton from "@/Components/CButton";
import CInput from "@/Components/CInput";
import InputLabel from "@/Components/InputLabel";
import { Link, Head, useForm, } from '@inertiajs/react'
import { useEffect } from 'react';
import InputError from '@/Components/InputError';



export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });


    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);


    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
        console.log(errors)
        console.log(data);
    };
    return (
        <>
            <Head title="Sign Up" />
            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
                <div className="fixed top-[-50px] hidden lg:block">
                    <img src="/images/signup-image.png"
                        className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]" alt="" />
                </div>
                <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div>
                        <img src="/images/moonton-white.svg" alt="" />
                        <div className="my-[70px]">
                            <div className="font-semibold text-[26px] mb-3">
                                Sign Up
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <form className="w-[370px]" onSubmit={submit}>
                            <div className="flex flex-col gap-6">

                                <div>
                                    <InputLabel htmlFor="name" value={'Full Name'} />
                                    <CInput onChange={(e) => setData('name', e.target.value)}
                                        required type="text" name="name" placeholder="Your Full Name" value={data.name} />

                                </div>
                                <div>
                                    <InputLabel htmlFor="email" value={'Email Address'} />
                                    <CInput onChange={(e) => setData('email', e.target.value)}
                                        required type='email' name="email" placeholder="Email Address" value={data.email} />
                                    <InputError message={errors.email} className="mt-2" />
                                </div>
                                <div>
                                    <InputLabel htmlFor="password" value={'Password'} />
                                    <CInput onChange={(e) => setData('password', e.target.value)}
                                        required type='password' name="password" placeholder="password" value={data.password} />
                                    <InputError message={errors.password} className="mt-2" />
                                </div>
                                <div>
                                    <InputLabel htmlFor="password" value={'Confirm Password'} />
                                    <CInput onChange={(e) => setData('password_confirmation', e.target.value)}
                                        required type='password' name="password_confirmation" placeholder="confirm Password" value={data.password_confirmation} />
                                    <InputError message={errors.password_confirmation} className="mt-2" />
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">

                                <CButton type="submit" processing={processing}>
                                    <span className="text-base font-semibold">
                                        Sign Up
                                    </span>
                                </CButton>

                                <Link href={route('login')} className="rounded-2xl  py-[13px] text-center">
                                    <CButton processing={processing} variant="light-outline">
                                        Sign In to My Account
                                    </CButton>
                                </Link>
                                {/* <button type="submit" className="rounded-2xl bg-alerange py-[13px] text-center">
                                <span className="text-base font-semibold">
                                    Sign Up
                                </span>
                            </button> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
