import PropTypes from 'prop-types'
CButton.propTypes = {
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    className: PropTypes.string,
    variant: PropTypes.oneOf(['primary', 'warning', 'danger', 'light-outline', 'white-outline']),
    processing: PropTypes.bool,
    children: PropTypes.node
}

export default function CButton({ type = "submit", className = "", variant = "primary", children, processing }) {
    return (
        <button className={`rounded-2xl py-[13px] text-center w-full ${processing && "opacity-30"} btn-${variant} ${className}`} type={type} disabled={processing}>
            {children}
        </button>
    )
}
