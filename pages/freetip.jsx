import { BannerAd } from "@components/BannerAd";
import { Footer } from "@components/Footer";
import FreeTips from "@components/FreeTips";
import { FreetipsStats } from "@components/FreetipsStats";
import { Header } from "@components/Header";
import { Testimonial } from "@components/Testimonial";

export default function Page() {
  return (
    <main className="min-h-screen bg-app-black text-app-white-500">
      <Header />
      <FreeTips />
      <BannerAd />
      <FreetipsStats />
      <Testimonial />
      <Footer />
    </main>
  );
}
