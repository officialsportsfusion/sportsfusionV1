import { Header} from "./components"
import Signin from "./components/signIn"
import { Sora } from '@next/font/google'
const sora = Sora({ subsets: ['latin'] })

export default function Login (){
    return(
        <main className={`min-h-screen bg-app-black text-app-white-500 ${sora.className}`}>
        <Header/>
        <Signin/>
        </main>
    )
}