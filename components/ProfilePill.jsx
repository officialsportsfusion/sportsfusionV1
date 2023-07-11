import { FaSearch, FaTimes, FaBars, FaAngleDown, FaAngleUp, FaUser } from 'react-icons/fa'
export const Profile = ({ balance }) => {
    return (
        <div className='bg-app-orange-light rounded-full py-[2px] pl-[2px] pr-2 flex items-center gap-x-2 mr-3'>
            <div className='grid place-items-center  bg-app-orange rounded-full w-[28px] h-[28px] md:w-[36px] md:h-[36px]'>
                <FaUser className='text-app-orange-light text-lg' />
            </div>
            <p className='text-app-black'>{balance || '$0.00'}</p>
        </div>
    )
};