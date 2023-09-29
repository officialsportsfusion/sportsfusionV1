import Link from "next/link"
export const FreeAcca = ({tip}) => {
    return (
        <section className="bg-app-black py-12 mt-20">
            <h1 className="text-app-orange font-bold text-4xl text-center mb-4">Fusion Accumulator Tips</h1>

            <p className="text-center text-app-white max-w-4xl app-container">Our experts have curated an exciting lineup of high-odds games. Ready to play? Click Stake if you are in or Sign Up to join the action. Every bet is a chance to win big, and every game is an adventure!</p>

            <Table tip={tip} />
        </section>
    )
}

const Table = ({ tip }) => {
    return (
        <div className="md:app-container">
            <table className="w-full mt-8 bg-[#1E2124] text-xs border-collapse min-[540px]:text-sm sm:text-base">
                <thead>
                    <tr className="text-app-white bg-app-orange w-full border-b-solid border-b-[#4E443D] border-b-[1px]">
                        <th className="py-3 text-center pl-4">Date</th>
                        <th className="text-center md:py-2 md:table-cell pl-1">Category</th>
                        <th className=" py-2 pl-1">Stake</th>
                        <th className="py-2 pl-1 text-center md:table-cell">Signup</th>
                        <th className="py-2 pl-1 md:table-cell text-center">Status</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        tip && tip.length !== 0 ?
                            tip.map((serie, index) => {
                                return <tr key={index} className="border-b-solid border-b-[#4E443D] border-b-[1px] last-of-type:border-none">

                                    <td className="py-1 px-[2px] text-center"><p className="gap-x-1 inline-flex flex-col min-[412px]:text-sm min-[412px]:flex-row"><span>{serie.date}</span><span>{serie.time}</span></p></td>
                                    {/* <td className="hidden md:py-2 md:table-cell pl-1 text-center">{serie.time}</td> */}
                                    <td className=" py-2 pl-1 text-center">{serie.category}</td>
                                    <td className=" py-2 pl-1 md:table-cell text-[#AAAAAA] text-center"><a href={serie.gameLink}  target="_blank" rel="noopener noreferrer" ><button className="rounded-md h-6 w-12 text-sm bg-gray-500">stake</button></a></td>
                                    <td className=" py-2 pl-1 md:table-cell text-[#AAAAAA] text-center"><a href={serie.signupLink} target="_blank" rel="noopener noreferrer"><button className="rounded-md h-7 w-16 text-sm bg-gray-500">sign up</button></a></td>
                                    <td className="py-2 text-center pr-2"><Status won={serie.status} /></td>
                                </tr>
                            }) : null
                    }
                </tbody>
            </table>
        </div>
    )
}

const Status = ({ won }) => {
    if (won === null) {
        return <button className="rounded-md h-6 w-12 text-sm bg-gray-500">N/A</button>;
      }
    return (
        <button className={`rounded-md h-6 w-12 text-sm ${won && won === true ? 'text-[#0C9700] border-solid border-[#0C9700] border-[1px]' : 'text-[#CE2E1C] border-solid border-[1px] border-[#CE2E1C]'}`}>{won && won === true ? 'WON' : 'LOSS'}</button>
    )
}


