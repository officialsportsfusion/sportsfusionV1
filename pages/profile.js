import Footer from '@/pages/components/footer'
import Profile from './components/profilePage'
import { Header} from "./components"
import { Sora } from '@next/font/google'
const sora = Sora({ subsets: ['latin'] })

export default function ProfilePage(){
    return(
        <main className={`min-h-screen bg-app-black text-app-white-500 ${sora.className}`}>
        <Header/>
        <Profile/>
        <Footer/>
        </main>
    )
}