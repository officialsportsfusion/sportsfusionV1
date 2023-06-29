const Premium = () => {
    const data = [
        { date: '28-06-23', time: '03:45', event: { match: 'Pafos FC - Apollon Limassol', league: 'Cyprus 1-1, Division Championship Playoff' }, bettingType: { odd: 'Fixed Odd', duration: 'Full Time' }, tipster: { name: 'Jaxub Dabrowski', rank: 'Premium Tipster' }, price: '980' },
        { date: '29-06-23', time: '11:45', event: { match: 'Auda -FS Metta/LU', league: 'Latvia 1-Virisliga' }, bettingType: { odd: 'Asian Handicap', duration: 'Full Time' }, tipster: { name: 'Jaxub Dabrowski', rank: 'Premium Tipster' }, price: '560' },
        { date: '01-07-23', time: '05:15', event: { match: 'Tombense FC - Guarani', league: 'Brasil 2 - Serie B' }, bettingType: { odd: 'Fixed Odd', duration: 'Full Time' }, tipster: { name: 'Zahar Alekseeva', rank: 'Premium Tipster' }, price: '980' },
        { date: '05-07-23', time: '03:30', event: { match: 'Gudus FC - Enyimba FC', league: 'Dudely Division, Championship Playoff' }, bettingType: { odd: 'Fixed Odd', duration: 'Full Time' }, tipster: { name: 'Dudely Codez', rank: 'Premium Tipster' }, price: '325' },
    ]
    return (
        <section className="bg-app-black py-12">
            <h1 className="text-app-orange font-bold text-4xl text-center mb-4">Fusion Premium</h1>

            <p className="text-center text-app-white max-w-2xl app-container">Pick from our exclusive well sorted premium tips from all our biggest tipsters daily at different prices. Very low risk to help you make more profits and better betting decisions. These tips are paid and bought from various tipsters and sources, then repurposed and sold at cheaper rates to our investors.</p>

            <Table data={data} />
        </section>
    )
}

export default Premium

const Table = ({ data }) => {

    return (
        <div className="md:app-container">
            <table className="w-full mt-8 bg-[#1E2124] text-xs border-collapse min-[540px]:text-sm sm:text-base">
                <thead>
                    <tr className="text-app-white bg-app-orange w-full border-b-solid border-b-[#4E443D] border-b-[1px]">
                        <th className="py-3 pl-4">Date</th>
                        <th className="py-2 pl-1">Event</th>
                        <th className="hidden md:py-2 md:table-cell pl-1">Betting Type</th>
                        <th className="hidden py-2 pl-1 md:table-cell">Tipster</th>
                        <th className="py-2">Tips & Odds</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        data && data.length !== 0 ?
                            data.map((item, index) => {
                                return <tr key={index} className="border-b-solid border-b-[#4E443D] border-b-[1px] last-of-type:border-none">
                                    <td className="py-1 px-[2px] text-center border border-[#4E443D]"><p className="inline-flex flex-col min-[420px]:text-md"><span>{item.date}</span><span>{item.time}</span></p></td>

                                    <td className="p-1 text-center border border-[#4E443D] max-w-[12rem]"><p className="inline-flex flex-col ml-1 min-[420px]:text-md"><span className='text-[#AAAAAA]'>{item.event.match}</span><span>{item.event.league}</span></p></td>


                                    <td className="pl-2 text-center hidden border border-[#4E443D] md:table-cell"><p className="inline-flex flex-col ml-1 min-[420px]:text-md"><span>{item.bettingType.odd}</span><span>{item.bettingType.duration}</span></p></td>

                                    <td className="pl-2 text-center hidden border border-[#4E443D] md:table-cell"><p className="inline-flex flex-col ml-1 min-[420px]:text-md"><span className='text-[#AAAAAA]'>{item.tipster.name}</span><span>{item.tipster.rank}</span></p></td>

                                    <td className="text-center border border-[#4E443D]"><Button>{item.price}</Button></td>
                                </tr>
                            }) : null
                    }
                </tbody>
            </table>
        </div>
    )
}

const Button = ({ children }) => {

    return (
        <button className='bg-app-orange rounded-full py-1 px-4 sm:px-5 md:px-6'>${children}</button>
    )
}