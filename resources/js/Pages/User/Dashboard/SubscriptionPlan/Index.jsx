import SubscriptionCard from "@/Components/SubscriptionCard";
import Authenticated from "@/Layouts/Authenticated/Index";
import { router } from '@inertiajs/react'

export default function SubscriptionPlan({ auth, subscriptionPlans }) {
    const selectSubscription = (id) => {
        router.post(route('user.dashboard.subscriptionPlan.userSubscribe', { subscriptionPlan: id }))
    }
    return (

        <Authenticated user={auth.user}>
            <div className=" px-[50px]">
                <div className="py-20 flex flex-col items-center">
                    <div className="text-black font-semibold text-[26px] mb-3">
                        Pricing for Everyone
                    </div>
                    <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                        Invest your little money to get a whole new experiences from movies.
                    </p>


                    <div className="flex justify-center gap-10 mt-[70px]">
                        {subscriptionPlans.map((subs, i) => (
                            <SubscriptionCard isPremium={subs.name === 'Premium'} name={subs.name} price={subs.price} durationInMonth={subs.active_period_in_month} features={JSON.parse(subs.features)} key={subs.id} onSelectSubscription={() => selectSubscription(subs.id)} />
                        ))}


                    </div>

                </div>
            </div>
        </Authenticated>

    )
}
