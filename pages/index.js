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

export default function Home() {
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
