import { BannerAd } from "@components/BannerAd";
import { Footer } from "@components/Footer";
import FreeTips from "@components/FreeTips";
import { FreetipsStats } from "@components/FreetipsStats";
import { Header } from "@components/Header";
import { Testimonial } from "@components/Testimonial";

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

export const getServerSideProps = async () => {
  let tips;
  try {
    const res = await fetch('https://teal-worried-adder.cyclic.app/v1/freetip')
    tips = await res.json();
  } catch (err) {
    console.log(err.message)
  }
  return {
    props: { tips }
  }
}