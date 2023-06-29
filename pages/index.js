import {
  FreeTips,
  Header,
  Premium,
  Series,
  Statistics,
  Footer,
  Hero,
  Testimonial,
} from "@/components";

// import Footer from '@/components/footer'
// import Hero from '../components/Hero'
// import Testimonial from '../components/Testimonial'
// import { FreeTips, Header, Premium, Series, Statistics} from "../components"
import { Sora } from '@next/font/google'
const sora = Sora({ subsets: ['latin'] })


export default function Home() {
  return (
    <main
      className={`min-h-screen bg-app-black text-app-white-500 ${sora.className}`}
    >
      <Header />
      <Hero />
      <Statistics />
      <FreeTips />
      <Premium />
      <Series />
      <Testimonial />
      <Footer />
    </main>
  );
}
