export const Input = ({ type, ...rest }) => {
    return (
        <input type={type || 'text'} className='rounded-full w-full py-3 mb-6 px-6 outline-none text-[#00070d] md:max-lg:py-2' {...rest} />
    )
}
