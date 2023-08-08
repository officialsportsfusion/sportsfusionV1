import { useState } from "react";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";

export const PInput = ({ name, formik, type, ...rest }) => {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => { setIsVisible(v => !v) };

    return (
        <div className='relative py-1'>
            <button type="button" onClick={toggleVisibility} className='absolute right-4 top-3 text-[#9b9b9b] text-2xl'>{isVisible ? <RiEyeOffFill /> : <RiEyeFill />}</button>
            <input type={isVisible ? 'text' : 'password'} name={name || ''} className='pr-14 rounded-full w-full py-2 mb-7 pl-6 outline-none text-[#00070d]' {...rest}  {...formik.getFieldProps(name)} />
            {formik.touched[name] && formik.errors[name] && <p className='text-red-400 absolute bottom-2'>{formik.errors[name]}</p>}
        </div>
    )
}
