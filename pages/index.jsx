import { Footer } from "@components/Footer";
import FreeTips from "@components/FreeTips";
import { Header } from "@components/Header";
import { Hero } from "@components/Hero";
import { Premium } from "@components/Premium";
import { Series } from "@components/Series";
import { Statistics } from "@components/Statistics";
import { Testimonial } from "@components/Testimonial";

export default function Page() {
  return (
    <div className="min-h-screen bg-app-black text-app-white-500">
      <Header />
      <Hero />
      <Statistics />
      <FreeTips />
      <Premium />
      <Series />
      <Testimonial />
      <Footer />
    </div>
  );
}
