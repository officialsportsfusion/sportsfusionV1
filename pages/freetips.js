import {
  FreeTips,
  Header,
  Premium,
  Series,
  Statistics,
  Testimonial,
  Footer,
  BannerAd,
  FreetipsStats,
} from "@/components";
import { Sora } from "@next/font/google";
const sora = Sora({ subsets: ["latin"] });

export default function Freetips() {
  return (
    <main
      className={`min-h-screen bg-app-black text-app-white-500 ${sora.className}`}
    >
      <Header />
      <FreeTips />
      <BannerAd />
      <FreetipsStats />
      <Testimonial />
      <Footer />
    </main>
  );
}
