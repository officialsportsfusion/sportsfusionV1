import { useState } from 'react'
import Image from 'next/image'
import Logo from '/images/logo1.png'
import Link from 'next/link'
import { FaTimes, FaBars } from 'react-icons/fa'

export const AuthHeader = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header className='py-4'>
            <div className='app-container flex items-center justify-between'>
                <Link href='/'>
                    <Image src={Logo} alt='SportsFusion Brand Logo' className='' />
                </Link>
                <button className='text-2xl md:hidden' onClick={() => setIsOpen(true)}> <FaBars /></button>
                <nav className='hidden md:block'>
                    <ul className='flex gap-6 hover:[&>li_a]:text-app-sky'>
                        <li>
                            <Link href='/about-us'>About Us</Link>
                        </li>
                        <li>
                            <Link href='/testimonials'>Testimonials</Link>
                        </li>
                      
                    </ul>
                </nav>
            </div>

            <div className={`${isOpen ? 'block' : 'hidden'} fixed top-0 left-0 right-0 bottom-0 overflow-y-auto bg-[#00070d] z-10`}>
                <div className='app-container min-h-full flex flex-col'>
                    <header className='flex items-center justify-between py-5'>
                        <h2 className='text-app-orange text-2xl'>Menu</h2>
                        <button className='text-3xl' onClick={() => setIsOpen(false)}><FaTimes /></button>
                    </header>
                    <nav className='mb-8'>
                        <ul className='[&>li]:mb-4 hover:[&>li_a]:text-app-sky'>
                            <li>
                                <Link href='/about-us'>About Us</Link>
                            </li>
                            <li>
                                <Link href='/testimonials'>Testimonials</Link>
                            </li>
                            <li>
                                <Link href='/partners'>Partners</Link>
                            </li>
                        </ul>
                    </nav>
                    <p className='mt-auto text-center mb-4'>@SportsFusion</p>
                </div>
            </div>
        </header>
    )
}