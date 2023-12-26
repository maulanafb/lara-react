import { Link } from "@inertiajs/react"
export default function MenuItem({ link, icon, text, isActive, method = 'get' }) {
    return (
        <Link method={method} as="button" href={link ? route(link) : null} className={`side-link ${isActive && 'active'} `}>
            {icon}
            {text}
        </Link>
    )
}
