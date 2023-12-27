import SubscriptionCard from "@/Components/SubscriptionCard";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Head, router, usePage } from '@inertiajs/react'

export default function SubscriptionPlan({ subscriptionPlans, }) {
    const { env } = usePage().props
    const { auth } = usePage().props
    const selectSubscription = (id) => {
        router.post(route('user.dashboard.subscriptionPlan.userSubscribe', {
            subscriptionPlan: id
        }),
            {},
            {
                only: ['userSubscription'],
                onSuccess: ({ props }) => {
                    onSnapMidtrans(props.userSubscription);
                }
            }
        );
    }

    const onSnapMidtrans = (userSubscription) => {
        snap.pay(userSubscription.snap_token, {
            // Optional
            onSuccess: function (result) {
                router.visit(route('user.dashboard.index'))
            },
            // Optional
            onPending: function (result) {
                console.log(result)
            },
            // Optional
            onError: function (result) {
                console.log(result)
            }
        })
    }
    return (

        <Authenticated auth={auth}>
            <Head>
                <title>Subscription Plan</title>
                <script src="https://app.sandbox.midtrans.com/snap/snap.js" data-client-key={env.MIDTRANS_CLIENTKEY}></script>
            </Head>
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
