import { Header} from "../components"
import Signup from "../components/signupPage"
import { Sora } from '@next/font/google'
const sora = Sora({ subsets: ['latin'] })
export default function signup (){
    return(
        <main className={`min-h-screen bg-app-black text-app-white-500 ${sora.className}`}>
        <Header/>
        <Signup/>
        </main>
    )
}