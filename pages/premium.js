import {
  FreeTips,
  Header,
  Premium,
  Series,
  Statistics,
  Footer,
  Testimonial,
  FreetipsStats,
  BannerAd,
} from "@/components";
import { Sora } from "@next/font/google";
const sora = Sora({ subsets: ["latin"] });

export default function premium() {
  return (
    <div>
      <main
        className={`min-h-screen bg-app-black text-app-white-500 ${sora.className}`}
      >
        <Header />
        <Premium />
        <BannerAd />
        <FreetipsStats />
        <Testimonial />
        <Footer />
      </main>
    </div>
  );
}
