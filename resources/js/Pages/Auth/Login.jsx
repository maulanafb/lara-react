
import CButton from "@/Components/CButton";
import CInput from "@/Components/CInput";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";

import { Link, Head, useForm } from '@inertiajs/react'
import { useEffect } from "react";



export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <>
            <Head title="Login" />
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
                                Welcome Back
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>

                        <form className="w-[370px]" onSubmit={submit}>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <InputLabel className="text-base block mb-2" value={'Email Address'} htmlFor="email" />
                                    <CInput
                                        id="email"
                                        value={data.email}
                                        autoComplete="username"
                                        isFocused={true}
                                        onChange={(e) => setData('email', e.target.value)}
                                        type="email"
                                        name="email"
                                        placeholder="Email Address..."
                                        className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none" />
                                    <InputError message={errors.email} className="mt-2" />
                                </div>
                                <div>
                                    <InputLabel className="text-base block mb-2"
                                        value={'Password'}
                                        htmlFor="password"
                                    />
                                    <CInput
                                        id="password"
                                        value={data.password}
                                        autoComplete="current-password"
                                        onChange={(e) => setData('password', e.target.value)}
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                                    />
                                    <InputError message={errors.password} className="mt-2" />
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                <CButton type="submit">
                                    <span className="text-base font-semibold">
                                        Start Watching
                                    </span>
                                </CButton>
                                <Link href={route('register')} className="rounded-2xl border border-white py-[13px] text-center">
                                    <span className="text-base text-white">
                                        Create New Account
                                    </span>
                                </Link>
                                {/* <CButton variant="primary">
                                <span className="text-base font-semibold">
                                    Start Watching
                                </span>
                            </CButton> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
