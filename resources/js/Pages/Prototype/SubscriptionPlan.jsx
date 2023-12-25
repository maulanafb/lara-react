import SubscriptionCard from "@/Components/SubscriptionCard";
import Authenticated from "@/Layouts/Authenticated/Index";

export default function SubscriptionPlan() {
    return (

        <Authenticated >
            <div className=" px-[50px]">
                <div className="py-20 flex flex-col items-center">
                    <div className="text-black font-semibold text-[26px] mb-3">
                        Pricing for Everyone
                    </div>
                    <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                        Invest your little money to get a whole new experiences from movies.
                    </p>


                    <div className="flex justify-center gap-10 mt-[70px]">

                        {/* basic  */}
                        <SubscriptionCard isPremium={false} name={"Basic"} price={299000} durationInMonth={3} features={["feature 1", "feature 2", "feature 3",]} />

                        {/* Premium  */}
                        <SubscriptionCard isPremium={true} name={'Our Greatest'} price={800000} durationInMonth={6} features={["feature 1", "feature 2", "feature 3",]} />

                    </div>

                </div>
            </div>
        </Authenticated>

    )
}
