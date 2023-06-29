import { Header} from "../components"
import Reset from "../components/reset"
import { Sora } from '@next/font/google'

const sora = Sora({ subsets: ['latin'] })


export default function resetpassword(){
return(
    <main className={`min-h-screen bg-app-black text-app-white-500 ${sora.className}`}>
    <Header/>
    <Reset/>
    </main>
)
}