import { FaUser } from "react-icons/fa"

export const FreeTips = ({ tips }) => {
    return (
        <section className="bg-app-black py-12 mt-8">
            <h1 className="text-app-orange font-bold text-4xl text-center mb-4">Fusion Free Tips</h1>

            <p className="text-center text-app-white max-w-2xl app-container">We provide free evaluated tips by experts daily from tipsters and sources all around the world, that will hlp you make better betting decisions and profits. They are basically free for all users.</p>

            <TipsTable tips={tips}/>
        </section>
    )
}

const TipsTable = ({ tips}) => {
    return (
        <div className="md:app-container">
            <div className="relative">
                <table className="w-full mt-8 bg-[#1E2124]">
                    <thead>
                        <tr className="text-app-white bg-app-orange w-full border-b-solid border-b-[#4E443D] border-b-[1px]">
                            <th className="py-2 text-left pl-4 text-center">Time</th>
                            <th className="hidden md:py-2 md:table-cell text-left pl-1 text-center">League</th>
                            <th className="py-2 text-left pl-1 text-center">Match</th>
                            <th className="py-2 text-left pl-1 text-center">Tips</th>
                            <th className="hidden py-2 md:table-cell text-left pl-1 text-center">Odds</th>
                            <th className="hidden py-2 text-left pl-1 md:table-cell text-center">Tipster</th>
                            <th className="py-2 text-center">Scores</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            tips && tips.length !== 0 ?
                                tips.map((tip, index) => {
                                    return <tr key={index} className="border-b-solid border-b-[#4E443D] border-b-[1px] last-of-type:border-none">
                                        <td className="pl-2 py-3 text-center"><p className="inline-flex text-sm flex-col ml-1 min-[420px]:text-md min-[420px]:flex-row"><span>{tip.date}</span> <span className='mx-4'>{tip.time}</span></p></td>
                                        <td className="hidden md:table-cell text-center">{tip.league}</td>
                                        <td className='text-center'><span className="hidden sm:inline">{tip.match}</span><span className="sm:hidden">{tip.match}</span></td>
                                        <td className='text-center'>{tip.tip}</td>
                                        <td className="hidden md:table-cell text-center">{tip.odds}</td>
                                        <td className="hidden md:table-cell text-center"><FaUser className="text-app-orange inline mb-1" />{' '}{tip.tipster}</td>
                                        <td className="text-center text-center">{tip.scores}</td>
                                    </tr>
                                }) : null
                        }
                    </tbody>
                </table>
                {/* <div className="bg-gradient-to-t from-[#0D0D0D] to-[#0D0D0D00] h-48 absolute bottom-0 left-0 right-0" /> */}
                {/* <div className="bg-gradient-to-t from-[#0D0D0D] to-[#0D0D0D00] h-48 absolute bottom-0 left-0 right-0" /> */}
            </div>
            {/* <div className="grid place-items-center pt-3">
                <button className='h-[2.25rem] w-[6.5rem] app-border-gradient-rounded-lg cursor-pointer hover:p-[2px]' >
                    <span className='inline-grid place-items-center'>See More</span>
                </button>
            </div> */}
        </div>
    )
}