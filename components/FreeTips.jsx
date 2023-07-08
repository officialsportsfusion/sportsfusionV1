import { FaUser } from "react-icons/fa"
import axios from 'axios';
import { useState, useEffect } from "react"

export const FreeTips = () => {
    const [tips, setTips] = useState([])
    const fetchdata = async () => {
        try {
            const freetip = await axios.get('https://tasty-duck-coveralls.cyclic.app/v1/freetip')
            const response = freetip.data
            console.log(response)
            setTips(response)
        } catch (err) {
            console.log(err.message)
        }
    }


    useEffect(() => {
        fetchdata();
    }, []);

    return (
        <section className="bg-app-black py-12">
            <h1 className="text-app-orange font-bold text-4xl text-center mb-4">Fusion Free Tips</h1>

            <p className="text-center text-app-white max-w-2xl app-container">We provide free evaluated tips by experts daily from tipsters and sources all around the world, that will hlp you make better betting decisions and profits. They are basically free for all users.</p>

            <TipsTable tips={tips} />
        </section>
    )
}

export default FreeTips

const TipsTable = ({ tips }) => {
    return (
        <div className="md:app-container">
            <div className="relative">
                <table className="w-full mt-8 bg-[#1E2124]">
                    <thead>
                        <tr className="text-app-white bg-app-orange w-full border-b-solid border-b-[#4E443D] border-b-[1px]">
                            <th className="py-2 text-left pl-4">Time</th>
                            <th className="hidden md:py-2 md:table-cell text-left pl-1">League</th>
                            <th className="py-2 text-left pl-1">Match</th>
                            <th className="py-2 text-left pl-1">Tips</th>
                            <th className="hidden py-2 md:table-cell text-left pl-1">Odds</th>
                            <th className="hidden py-2 text-left pl-1 md:table-cell">Tipster</th>
                            <th className="py-2">Scores</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            tips && tips.length !== 0 ?
                                tips.map((tip, index) => {
                                    return <tr key={index} className="border-b-solid border-b-[#4E443D] border-b-[1px] last-of-type:border-none">
                                        <td className="pl-2"><p className="inline-flex text-sm flex-col ml-1 min-[420px]:text-md min-[420px]:flex-row"><span>{tip.date}</span> <span className='mx-4'>{tip.time}</span></p></td>
                                        <td className="hidden md:table-cell">{tip.league}</td>
                                        <td><span className="hidden sm:inline">{tip.match}</span><span className="sm:hidden">{tip.match}</span></td>
                                        <td>{tip.tip}</td>
                                        <td className="hidden md:table-cell ">{tip.odds}</td>
                                        <td className="hidden md:table-cell"><FaUser className="text-app-orange inline mb-1" />{' '}{tip.tipster}</td>
                                        <td className="text-center">{tip.scores}</td>
                                    </tr>
                                }) : null
                        }
                    </tbody>
                </table>
                <div className="bg-gradient-to-t from-[#0D0D0D] to-[#0D0D0D00] h-48 absolute bottom-0 left-0 right-0" />
            </div>
            <div className="grid place-items-center pt-3">
                <button className='h-[2.25rem] w-[6.5rem] grid place-items-center bg-gradient-to-r from-app-orange via-app-sky to-app-orange p-[1px] rounded-lg cursor-pointer hover:p-[2px]' ><span className='bg-app-black w-full h-full rounded-lg inline-grid place-items-center '>See More</span></button>
            </div>
        </div>
    )
}