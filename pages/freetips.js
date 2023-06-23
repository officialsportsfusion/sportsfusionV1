import { FreeTips, Header, Premium, Series, Statistics} from "./components"
import Footer from '@/pages/components/footer'
import Testimonial from './components/Testimonial'
import BannerAd from "./components/BannerAd"
import FreetipsStats from './components/freetipsStats'
import { Sora } from '@next/font/google'
const sora = Sora({ subsets: ['latin'] })

export default function Freetips(){
    return(
        <main className={`min-h-screen bg-app-black text-app-white-500 ${sora.className}`}>
        <Header/>
        <FreeTips/>
        <BannerAd/>
        <FreetipsStats/>
        <Testimonial/>
        <Footer/>
        </main>
    )
}