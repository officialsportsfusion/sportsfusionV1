import Image from 'next/image'
import Logo from '../assets/logo (1).png'
import Link from 'next/link'
import { useState } from 'react'
import { FaSearch, FaTimes, FaBars, FaAngleDown, FaAngleUp, FaUser } from 'react-icons/fa'

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [displayMobile, setDisplayMobile] = useState(false);
    const showMobileNav = () => { setDisplayMobile(true) };
    const hideMobileNav = () => { setDisplayMobile(false) };

    const [tab, setTab] = useState('');
    const switchTab = (newTab) => {
        if (newTab === tab) {
            setTab('')
        } else {
            setTab(newTab)
        }
    }

    return (
        <div>
            <nav className='py-4 flex items-center justify-between app-container md:py-6'>
                <Link className='text-app-orange inline-flex items-center md:text-2xl' href='/'>
                    <Image src={Logo} alt='Logo' />
                </Link>

                {
                    isLoggedIn && (
                        <ul className='hidden md:gap-6 md:flex lg:text-2xl lg:gap-8 '>
                            <li className='group relative'>
                                <button className='pb-[8px] text-base'>Home</button>
                                <ul className='bg-black absolute text-white text-base h-0 overflow-hidden group-hover:h-auto group-hover:p-4 text-md'>
                                    <li>News</li>
                                    <li>Scores</li>
                                    <li>Shows</li>
                                    <li>About Us</li>
                                    <li>Community</li>
                                </ul>
                            </li>

                            <li className='group relative'>
                                <button className='pb-[8px] text-base'>Tips</button>
                                <ul className='bg-black absolute z-10 top-[100%] text-white text-base h-0 overflow-hidden group-hover:h-auto group-hover:p-4 w-[160px] text-md'>
                                    <li>Soccer Tips</li>
                                    <li>Soccer Tips</li>
                                    <li>Soccer Tips</li>
                                </ul>
                            </li>

                            <li className='group relative'>
                                <button className='pb-[8px] text-base'>Tipsters</button>
                                <ul className='bg-black z-10 absolute text-white  text-base h-0 w-[218px] overflow-hidden group-hover:h-auto group-hover:p-4 text-md'>
                                    <li>Junior Tipster</li>
                                    <li>Senior Tipster</li>
                                    <li>Premium Tipster</li>
                                </ul>
                            </li>
                        </ul>
                    )
                }

                <div className='hidden md:flex md:items-center md:gap-4'>
                    {isLoggedIn ?
                        (<>
                            <FaSearch className='text-app-orange text-2xl' />
                            <Profile />
                            <button className='h-[2.5rem] w-[6.5rem] grid place-items-center bg-gradient-to-r from-app-orange via-app-sky to-app-orange p-[1px] rounded-lg cursor-pointer hover:p-[2px]' onClick={() => { setIsLoggedIn(false) }}><span className='bg-app-black w-full h-full rounded-lg inline-grid place-items-center '>Log Out</span></button>
                        </>)
                        :
                        (<>
                            {/* <Button>Register</Button> */}
                            <Button classProps='ml-4' clickHandler={() => { setIsLoggedIn(true) }} >Login</Button>
                        </>)
                    }
                </div>

                <div className='flex items-center md:hidden'>
                    {
                        isLoggedIn ? (
                            <>
                                <FaSearch className='text-app-orange text-xl mr-2' />
                                <Profile />
                            </>
                        ) : null
                    }
                    <button onClick={showMobileNav} className='cursor-pointer py-1 pl-1'>
                        <FaBars className='text-2xl' />
                    </button>
                </div>
            </nav>

            {/* Mobile Nav */}
            <div className={`${displayMobile ? 'flex' : 'hidden'} flex-col bg-app-black min-h-screen absolute top-0 left-0 right-0`}>
                <div className='app-container py-4'>
                    <button onClick={hideMobileNav} className='cursor-pointer block ml-auto'><FaTimes className='text-3xl' /></button>
                </div>

                {isLoggedIn && (<ul>
                    <li className='bg-[#1E2124]'>
                        <div className='app-container'>
                            <button className='inline-flex items-center w-full py-3 text-xl' onClick={() => { switchTab('home') }}>Home {tab === 'home' ? <FaAngleUp className='text-app-orange ml-4' /> : <FaAngleDown className='text-app-orange ml-4' />}</button>
                            <ul className={`overflow-hidden ${tab === 'home' ? 'h-auto' : 'h-0'}`} >
                                <li>News</li>
                                <li>Scores</li>
                                <li>Shows</li>
                                <li>About Us</li>
                                <li>Community</li>
                            </ul>
                        </div>
                    </li>
                    <li className='bg-[#1E2124]'>
                        <div className='app-container'>
                            <button className='inline-flex items-center w-full py-3 text-xl' onClick={() => { switchTab('tips') }}>Tips {tab === 'tips' ? <FaAngleUp className='text-app-orange ml-4' /> : <FaAngleDown className='text-app-orange ml-4' />}</button>
                            <ul className={`overflow-hidden ${tab === 'tips' ? 'h-auto' : 'h-0'}`} >
                                <li>Soccer Tips</li>
                                <li>Soccer Tips</li>
                                <li>Soccer Tips</li>
                            </ul>
                        </div>
                    </li>
                    <li className='bg-[#1E2124]'>
                        <div className='app-container'>
                            <button className='inline-flex items-center w-full py-3 text-xl' onClick={() => { switchTab('tipsters') }}>Tipsters {tab === 'tipsters' ? <FaAngleUp className='text-app-orange ml-4' /> : <FaAngleDown className='text-app-orange ml-4' />}</button>
                            <ul className={`overflow-hidden ${tab === 'tipsters' ? 'h-auto pb-6' : 'h-0'}`}>
                                <li>Junior Tipster</li>
                                <li>Senior Tipster</li>
                                <li>Premium Tipster</li>
                            </ul>
                        </div>
                    </li>
                </ul>)}

                <div className='app-container pt-12'>
                    {isLoggedIn ?
                        (
                            <button className='w-full bg-gradient-to-r from-app-orange via-app-sky to-app-orange py-[1px] px-[1px] rounded-lg cursor-pointer' onClick={() => { setIsLoggedIn(false); hideMobileNav() }}><span className='bg-app-black w-full h-full inline-block rounded-lg py-3'>Log Out</span></button>
                        )
                        :
                        (<>
                            {/* <ButtonOutline>Register</ButtonOutline> */}
                            <ButtonOutline classProps='mt-4' clickHandler={() => { setIsLoggedIn(true); hideMobileNav() }}>Login</ButtonOutline>
                        </>)
                    }
                </div>

                <div className='mt-auto mb-4 pt-6'>
                    <p className='text-app-white-500 text-center'>@Sportsfusion</p>
                </div>
            </div>
        </div>
    )
}

export default Header

const Button = ({ children, classProps, clickHandler }) => {
    const onClick = () => {
        if (clickHandler) {
            return clickHandler();
        }
    }
    return (
        <button className={`h-[2.25rem] w-[6.8rem] grid place-items-center bg-gradient-to-r from-app-orange via-app-sky to-app-orange p-[1px] rounded-lg cursor-pointer hover:p-[2px] ${classProps}`} onClick={onClick}><span className='bg-app-black w-full h-full p-[1px] text-sm rounded-lg inline-grid place-items-center '>{children}</span></button>
    )
}

const ButtonOutline = ({ children, clickHandler, classProps }) => {
    const onClick = () => {
        if (clickHandler) {
            return clickHandler();
        }
    }
    return (

        // <button className={`w-full bg-gradient-to-r from-app-orange via-app-sky to-app-orange py-[1px] px-[1px] rounded-lg cursor-pointer ${classProps}`} onClick={onClick}><span className='bg-app-black w-full h-full inline-block rounded-lg py-3'>{children}</span></button>
        <button className={`h-[2.25rem] w-[6.8rem] grid place-items-center bg-gradient-to-r from-app-orange via-app-sky to-app-orange p-[1px] rounded-lg cursor-pointer hover:p-[2px] ${classProps}`} onClick={onClick}><span className='bg-app-black w-full h-full p-[1px] text-sm rounded-lg inline-grid place-items-center '>{children}</span></button>
    )
}

const Profile = ({ balance }) => {
    return (
        <div className='bg-app-orange-light rounded-full py-[2px] pl-[2px] pr-3 flex items-center gap-x-2 mr-3'>
            <div className='grid place-items-center  bg-app-orange rounded-full w-[32px] h-[32px] md:w-[36px] md:h-[36px]'>
                <FaUser className='text-app-orange-light text-xl' />
            </div>
            <p className='text-app-black text-lg'>{balance || '$ 0.00'}</p>
        </div>
    )
};