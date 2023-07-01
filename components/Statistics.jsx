import React from 'react'
import Image from 'next/image'
import { Count, CountUp } from '.'

const Statistics = () => {

    const stats = [
        { date: '2/2/2023', wins: 20, loss: 0, profits: 500 },
        { date: '2/3/2023', wins: 19, loss: 0, profits: 3200 },
        { date: '2/4/2023', wins: 20, loss: 3, profits: 2500 },
        { date: '2/5/2023', wins: 30, loss: 1, profits: 5200 },
        { date: '2/6/2023', wins: 40, loss: 3, profits: 6500 },
        { date: '2/7/2023', wins: 50, loss: 5, profits: 4500 },
        { date: '2/8/2023', wins: 10, loss: 0, profits: 800 },
        { date: '2/9/2023', wins: 15, loss: 1, profits: 500 },
        { date: '2/10/2023', wins: 9, loss: 0, profits: 500 },
        { date: '2/11/2023', wins: 5, loss: 0, profits: 300 },
        { date: '2/12/2023', wins: 12, loss: 2, profits: 600 },
    ]

    return (
        <section className='w-full'>
            <div className='app-container'>
                <h2 className='text-center text-app-orange text-3xl font-bold md:text-4xl mb-4'><span className='hidden md:inline'>Fusion</span> Statistics</h2>

                <p className='text-app-white text-center max-w-2xl mx-auto'>
                    We provide stats to help you verify the value of all our tips without compromising digits or results to suit or lure investors. Trasparency is 100% value on all our offers.
                </p>

                <div className='grid mt-6 gap-y-12 md:mt-12 md:grid-cols-12 pb-6'>
                    <div className='bg-[#43] rounded-lg py-4 sm:w-[28rem] sm:mx-auto md:mx-0 md:w-auto md:col-span-5 md:max-w-[23rem]'>
                        <h2 className='text-app-orange text-center font-bold md:text-xl md:mt-4'>SPORTSFUSION STATISTICS</h2>

                        <div className='flex items-center gap-4 justify-center mt-3 mb-5'>
                            <div className='h-1 rounded-full w-12 bg-gradient-to-tr from-[rgba(225,107,0,0.5)] to-[rgba(41,165,255,0.5)]' />
                            <div className='h-1 rounded-full w-8 bg-gradient-to-tr from-[rgba(225,107,0,0.5)] to-[rgba(41,165,255,0.5)]' />
                            <div className='h-1 rounded-full w-12 bg-gradient-to-tr from-[rgba(225,107,0,0.5)] to-[rgba(41,165,255,0.5)]' />
                        </div>

                        <StatsTable stats={stats} />
                    </div>

                    <div className='pt-7 sm:w-[28rem] sm:mx-auto md:col-span-7 md:ml-8 md:w-auto md:mx-0 lg:ml-12'>
                        <h2 className='text-app-orange-light text-center font-bold text-xl md:text-4xl'>OUR PERFORMANCES</h2>

                        <div className='flex items-center gap-4 justify-center mt-4 mb-8'>
                            <div className='h-1 rounded-full w-12 bg-gradient-to-tr from-[rgba(225,107,0,0.5)] to-[rgba(41,165,255,0.5)]' />
                            <div className='h-1 rounded-full w-8 bg-gradient-to-tr from-[rgba(225,107,0,0.5)] to-[rgba(41,165,255,0.5)]' />
                            <div className='h-1 rounded-full w-12 bg-gradient-to-tr from-[rgba(225,107,0,0.5)] to-[rgba(41,165,255,0.5)]' />
                        </div>

                        <StatsSummary />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Statistics

const StatsTable = ({ stats }) => {
    return (
        <table className='w-full text-base'>
            <thead>
                <tr>
                    <th className='text-app-orange text-left pl-4 md:pl-8'>Date</th>
                    <th className='text-app-orange text-left'>Win</th>
                    <th className='text-app-orange text-left'>Loss</th>
                    <th className='text-app-orange text-left'>Profits</th>
                </tr>
            </thead>
            <tbody>
                {
                    stats && stats.length !== 0 ?
                        stats.map((stat, index) => <tr key={index} className='text-app-white text-sm sm:text-lg md:text-md'>
                            <td className='pl-4 md:pl-8 py-1 md:w-[10rem] text-sm'>{stat?.date}</td>
                            <td className='pl-2 py-1 text-sm'>{stat?.wins}</td>
                            <td className='pl-2 py-1 text-sm'>{stat?.loss}</td>
                            <td className='py-1 text-sm'>${stat?.profits}</td>
                        </tr>) :
                        null
                }
            </tbody>
        </table>
    )
}

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
                <p className='text-app-orange-light text-2xl md:text-3xl'> <CountUp end={value} duration={3} /></p>
            </div>
        </div>
    )
}