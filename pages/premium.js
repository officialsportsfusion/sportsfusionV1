import { BannerAd } from "@components/BannerAd";
import { Footer } from "@components/Footer";
import { FreetipsStats } from "@components/FreetipsStats";
import { Header } from "@components/Header";
import { Premium } from "@components/Premium";
import { Testimonial } from "@components/Testimonial";

export default function Page() {
  return (
    <main className="min-h-screen bg-app-black text-app-white-500">
      <Header />
      <Premium />
      <BannerAd />
      <FreetipsStats />
      <Testimonial />
      <Footer />
    </main>
  );
}
