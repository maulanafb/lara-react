
import CInput from "@/Components/CInput";
import InputLabel from "@/Components/InputLabel";

import { Link, Head } from '@inertiajs/react'



export default function Login() {
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
                        <form className="w-[370px]">
                            <div className="flex flex-col gap-6">
                                <div>
                                    <InputLabel className="text-base block mb-2" value={'Email Address'} for="email" />
                                    <CInput type="email" name="email" placeholder="Email Address..." className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none" />
                                </div>
                                <div>
                                    <InputLabel className="text-base block mb-2" value={'Password'} for="password" />
                                    <CInput type="password" name="password" placeholder="Password" className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none" />
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                <Link href="/" className="rounded-2xl bg-alerange py-[13px] text-center">
                                    <span className="text-base font-semibold">
                                        Start Watching
                                    </span>
                                </Link>
                                <Link href={route('prototype.register')} className="rounded-2xl border border-white py-[13px] text-center">
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
