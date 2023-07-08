export const AuthButton = ({ children, ...rest }) => {
    return (
        <button className="bg-[#262626f2] w-full py-3 rounded-lg md:max-lg:py-2" {...rest}>{children || "Submit"}</button>
    )
}
