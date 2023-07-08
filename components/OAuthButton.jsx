export const OAuthButton = ({ children, ...rest }) => {
    return (
        <button className='app-border-gradient-rounded-lg w-[4.5rem] h-[2.25rem] hover:bg-gradient-to-tr hover:from-app-sky hover:to-app-orange' {...rest}>
            <span className="bg-[#00070d] rounded-lg inline-grid place-items-center hover:bg-transparent"> {children} </span>
        </button>
    )
}
