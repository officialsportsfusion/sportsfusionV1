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

import { Sora } from "@next/font/google";
const sora = Sora({ subsets: ["latin"] });

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
