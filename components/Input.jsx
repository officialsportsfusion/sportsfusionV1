export const Input = ({ type, name, formik, ...rest }) => {
    return (
        <div className='relative py-1'>
            <input type={type || 'text'} name={name || ''} className='rounded-full w-full py-2 mb-7 px-6 outline-none text-[#00070d]' {...rest}  {...formik.getFieldProps(name)} />
            {formik.touched[name] && formik.errors[name] && <p className='text-red-400 absolute bottom-2'>{formik.errors[name]}</p>}
        </div>
    )
}
