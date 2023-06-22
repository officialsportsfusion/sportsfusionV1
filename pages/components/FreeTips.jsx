import { FaUser } from "react-icons/fa"
const FreeTips = () => {
    const tips = [
        { date: '25/05', time: '03:00', league: 'PRE 1', match: { long: 'Chelsea FC - Manchester City FC', short: 'CFC - MCC' }, tip: 'Over 2.5', odd: '1.85', tipster: 'JesseJAY', score: '1:2' },
        { date: '27/05', time: '03:00', league: 'PRE 1', match: { long: 'Liverpool FC - Manchester United FC', short: 'LFC - MNU' }, tip: 'Over 2.5', odd: '1.55', tipster: 'SammyJAY', score: '1:2' },
        { date: '27/05', time: '03:00', league: 'PRE 1', match: { long: 'Chelsea FC - Manchester City FC', short: 'CFC - MCC' }, tip: 'Over 1.5', odd: '1.95', tipster: 'JesseJAY', score: '1:2' },
        { date: '29/05', time: '03:00', league: 'PRE 1', match: { long: 'Bolton Albion FC - Manchester City FC', short: 'BAF - MCC' }, tip: 'Over 2.5', odd: '2.85', tipster: 'JesseJat', score: '1:2' },
        { date: '27/05', time: '03:00', league: 'PRE 1', match: { long: 'Chelsea FC - Manchester City FC', short: 'CFC - MCC' }, tip: 'Over 1.5', odd: '1.50', tipster: 'JesseJAY', score: '1:2' },
        { date: '29/05', time: '03:00', league: 'PRE 1', match: { long: 'Bolton Albion FC - Manchester City FC', short: 'BAF - MCC' }, tip: 'Over 2.5', odd: '2.85', tipster: 'JesseJat', score: '1:2' },
        { date: '27/05', time: '03:00', league: 'PRE 1', match: { long: 'Chelsea FC - Manchester City FC', short: 'CFC - MCC' }, tip: 'Over 1.5', odd: '1.50', tipster: 'JesseJAY', score: '1:2' },
        { date: '29/05', time: '03:00', league: 'PRE 1', match: { long: 'Bolton Albion FC - Manchester City FC', short: 'BAF - MCC' }, tip: 'Over 2.5', odd: '2.85', tipster: 'JesseJat', score: '1:2' },
        { date: '27/05', time: '03:00', league: 'PRE 1', match: { long: 'Chelsea FC - Manchester City FC', short: 'CFC - MCC' }, tip: 'Over 1.5', odd: '1.50', tipster: 'JesseJAY', score: '1:2' },
        { date: '30/05', time: '03:00', league: 'PRE 1', match: { long: 'Chelsea FC - Manchester City FC', short: 'CFC - MCC' }, tip: 'Under 2.5', odd: '2.20', tipster: 'JesseJAY', score: '1:1' },
    ]
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
                                        <td className="pl-2"><p className="inline-flex text-sm flex-col ml-1 min-[420px]:text-md min-[420px]:flex-row"><span>27/05</span><span>05:40</span></p></td>
                                        <td className="hidden md:table-cell">{tip.league}</td>
                                        <td><span className="hidden sm:inline">{tip.match.long}</span><span className="sm:hidden">{tip.match.short}</span></td>
                                        <td>{tip.tip}</td>
                                        <td className="hidden md:table-cell">{tip.odd}</td>
                                        <td className="hidden md:table-cell"><FaUser className="text-app-orange inline mb-1" />{' '}{tip.tipster}</td>
                                        <td className="text-center">{tip.score}</td>
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