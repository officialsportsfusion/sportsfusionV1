const Series = () => {
    const series = [
        { date: '28-06', time: '03:45', match: 'Inter Turku vs Haka', league: 'ENG P1', odd: '1.92', tip: 'Over 2.5', stake: 500, result: '+440', profit: '+440', score: '4:1', won: true, series: 'X1' },
        { date: '28-06', time: '03:45', match: 'Inter Turku vs Haka', league: 'FRA P1', odd: '2.22', tip: 'Over 2.5', stake: 1000, result: '+440', profit: '+440', score: '4:1', won: true, series: 'X2' },
        { date: '28-06', time: '03:45', match: 'Inter Turku vs Haka', league: 'FIN D1', odd: '2.92', tip: 'Under 2.5', stake: 750, result: '+440', profit: '+440', score: '4:1', won: false, series: 'X3' },
        { date: '28-06', time: '03:45', match: 'Inter Turku vs Haka', league: 'DEN D1', odd: '1.76', tip: 'Over 2.5', stake: 550, result: '+440', profit: '+440', score: '4:1', won: true, series: 'X4' },
    ]
    return (
        <section className="bg-app-black py-12">
            <h1 className="text-app-orange font-bold text-4xl text-center mb-4">Fusion Series</h1>

            <p className="text-center text-app-white max-w-2xl app-container">Fusion series is our biggest and exclusive tips from Sport Fusion. This system distributes carefully evaluated paid tips from exclusive sourcs to double your capital and provide profit to all our VIP investors. It is been distributed daily at different match time intervals with high success rates and testimonies. The aim is to double funds daily with high risk management tactics.</p>

            <Table series={series} />
        </section>
    )
}

export default Series

const Table = ({ series }) => {

    return (
        <div className="md:app-container">
            <table className="w-full mt-8 bg-[#1E2124] text-xs border-collapse min-[540px]:text-sm sm:text-base">
                <thead>
                    <tr className="text-app-white bg-app-orange w-full border-b-solid border-b-[#4E443D] border-b-[1px]">
                        <th className="py-3 text-left pl-4">Series</th>
                        <th className="py-2 pl-1 text-left">Time</th>
                        <th className="hidden text-left md:py-2 md:table-cell pl-1">League</th>
                        <th className=" py-2 pl-1">Match</th>
                        <th className="hidden py-2 pl-1 text-left md:table-cell">Tips</th>
                        <th className="hidden py-2 pl-1 md:table-cell">Odds</th>
                        <th className="hidden py-2 pl-1 text-left md:table-cell">Stake</th>
                        <th className="hidden py-2 pl-1 md:table-cell">Score</th>
                        <th className="hidden py-2 pl-1 md:table-cell">Result</th>
                        <th className="hidden py-2 pl-1 md:table-cell">Profit</th>
                        <th className="py-2 text-right pr-3">Status</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        series && series.length !== 0 ?
                            series.map((serie, index) => {
                                return <tr key={index} className="border-b-solid border-b-[#4E443D] border-b-[1px] last-of-type:border-none">
                                    <td className="py-3 pl-4">{serie.series}</td>
                                    <td className="py-1 px-[2px] text-left"><p className="gap-x-1 inline-flex flex-col min-[412px]:text-md min-[412px]:flex-row"><span>{serie.date}</span><span>{serie.time}</span></p></td>
                                    <td className="hidden md:py-2 md:table-cell pl-1">{serie.league}</td>
                                    <td className=" py-2 pl-1">{serie.match}</td>
                                    <td className="hidden py-2 pl-1 md:table-cell text-[#AAAAAA]">{serie.tip}</td>
                                    <td className="hidden py-2 pl-1 text-center md:table-cell">{serie.odd}</td>
                                    <td className="hidden py-2 pl-1 md:table-cell">${serie.stake}</td>
                                    <td className="hidden py-2 pl-1 text-center md:table-cell">{serie.score}</td>
                                    <td className="hidden py-2 pl-1 text-center text-[#AAAAAA] md:table-cell">{serie.result}</td>
                                    <td className="hidden py-2 pl-1 text-center text-[#AAAAAA] md:table-cell">{serie.profit}</td>
                                    <td className="py-2 text-right pr-2"><Status won={serie.won} /></td>

                                </tr>
                            }) : null
                    }
                </tbody>
            </table>
        </div>
    )
}

const Status = ({ won }) => {

    return (
        <button className={`rounded-md h-8 w-14 ${won && won === true ? 'text-[#0C9700] border-solid border-[#0C9700] border-[1px]' : 'text-[#CE2E1C] border-solid border-[1px] border-[#CE2E1C]'}`}>{won && won === true ? 'WIN' : 'LOSS'}</button>
    )
}