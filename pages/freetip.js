import {
  FreeTips,
  Header,
  Testimonial,
  Footer,
  BannerAd,
  FreetipsStats,
} from "@/components";

export default function Freetips() {
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
