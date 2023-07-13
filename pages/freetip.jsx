import { BannerAd } from "@components/BannerAd";
import { FreeTips } from "@components/FreeTips";
import { FreetipsStats } from "@components/FreetipsStats";
import { Testimonial } from "@components/Testimonial";

export default function Page({ tips }) {
  return (
    <>
      <FreeTips tips={tips} />
      <BannerAd />
      <FreetipsStats />
      <Testimonial />
    </>
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