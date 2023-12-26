import { Link, usePage, } from '@inertiajs/react'
import SubscriptionDetail from './SubscriptionDetail'
import { UserMenu, UserOthers } from './MenuList'
import MenuItem from './MenuItem'
export function Sidebar({ user }) {
    const { auth } = usePage().props

    return (
        <aside className="fixed z-50 w-[300px] h-full scrollbar-hide overflow-auto">
            <div className="flex flex-col p-[30px] pr-0 border-r border-gray-[#F1F1F1]  h-full">
                <Link href="/">

                    <img src="/images/moonton.svg" alt="" />
                </Link>
                <div className="links flex flex-col mt-[60px] h-full gap-[50px] ">
                    <div>
                        {UserMenu.map((menu, index) => (
                            <MenuItem key={`${menu.text} + ${index}`} link={menu.link} icon={menu.icon} text={menu.text} isActive={menu.link && route().current(menu.link)} />
                        ))}
                    </div>
                    <div>
                        {UserOthers.map((menu, index) => (
                            <MenuItem key={`${menu.text} + ${index}`} link={menu.link} icon={menu.icon} text={menu.text} isActive={menu.link && route().current(menu.link)} method={menu.method} />
                        ))}
                    </div>
                    {/* <SubscriptionDetail isPremium={true} /> */}
                    {auth.activePlan && (
                        <SubscriptionDetail name={auth.activePlan.name} isPremium={auth.activePlan.name === 'Premium'} remainingActiveDays={auth.activePlan.remainingActiveDays} activeDays={auth.activePlan.activeDays} />
                    )}
                </div>
            </div>
        </aside>
    )
}
