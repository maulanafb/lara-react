import { Sidebar } from "./Sidebar";
import Topbar from "./Topbar";

export default function Authenticated({ children }) {
    return (
        <>
            <div className="mx-auto max-w-screen hidden lg:block">
                {/* Start : sidebar  */}
                <Sidebar />
                {/* end : sidebar  */}

                {/* Start Content  */}
                <div className="ml-[300px] px-[50px]">
                    <div className="py-10 flex flex-col gap-[50px]">
                        {/* Start topBar */}
                        <Topbar />
                        {/* End topBar */}
                        <main>{children}</main>
                    </div>
                </div>


                {/* End Content  */}
            </div>
            {/* <div className="mx-auto px-4 w-full h-screen lg:hidden flex bg-black">
                <div className="text-white text-2xl text-center leaading-snug font-medium my-auto">
                    Sorry this page only supported on 1024px screen or above
                </div>
            </div> */}
        </>
    )
}
