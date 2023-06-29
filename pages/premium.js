import {
  BannerAd,
  Footer,
  FreetipsStats,
  Header,
  Premium,
  Testimonial,
} from "@/components";
export default function premium() {
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
