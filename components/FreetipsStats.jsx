import React from 'react'
import Image from 'next/image'

const FreetipsStats = () => {
    return (
        <section className='w-full'>
            <div className='app-container'>

                <div className='grid  gap-y-6 md:mt-12 md:grid-cols-12 pb-6'>
                    <div className=' sm:w-[28rem] sm:mx-auto md:mx-0 md:w-auto md:col-span-5 md:max-w-[23rem] mt-24'>
                    <h2 className=' text-app-orange text-3xl font-bold md:text-4xl mb-4'>Statistics</h2>
                    <p className=''>We provide stats to help you verify the value of all our tips without compromising digits or results to suit or lure investors. 
                        Trasparency is 100% value on all our offers.</p>
                    </div>

                    <div className=' sm:w-[28rem] sm:mx-auto md:col-span-7 md:ml-8 md:w-auto md:mx-0 lg:ml-12'>
                        <StatsSummary />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FreetipsStats


const StatsSummary = ({ stats }) => {
    return (
        <div className='mb-14 mt-20 relative md:mt-24 md:mb-16'>
            <div className='w-full h-16 absolute bottom-full z-0 md:h-20'>
                <div className='h-full absolute top-0 left-1/2 right-[14.5%] md:right-[11%]'><Image src='/arc.svg' alt='' width='200' height='80' className='w-full h-full' />
                </div>
            </div>
            <div className='flex items-center justify-between z-50'>
                <Pill stats='Wins' value={23} />
                <Pill stats='Loss' value={6} />
                <Pill stats='Profits' value={2361} />
            </div>
            <div className='w-full h-16 absolute top-full z-0 md:h-20'>
                <div className='h-full absolute top-0 right-1/2 left-[14.5%] md:left-[11%]'>
                    <Image src='/arc2.svg' alt='' width='200' height='80' className='w-full h-full' />
                </div>
            </div>
        </div>
    )
}

const Pill = ({ stats, value }) => {
    return (
        <div className='bg-[#334B5D] rounded-full p-[2px] md:p-[3px]'>
            <div className='text-xl text-center pt-4 mb-8 font-bold md:pt-8 md:mb-10 md:text-2xl'>
                <p>Total</p>
                <p>{stats}</p>
            </div>
            <div className='rounded-full w-20 h-20 bg-[rgba(255,255,255,0.13)] grid place-items-center min-[360px]:w-24 min-[360px]:h-24 md:h-28 md:w-28 lg:w-32 lg:h-32'>
                <p className='text-app-orange-light text-2xl md:text-3xl'>{value || 0}</p>
            </div>
        </div>
    )
}