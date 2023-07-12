import { BannerAd } from "@components/BannerAd";
import { FreetipsStats } from "@components/FreetipsStats";
import { Premium } from "@components/Premium";
import { Testimonial } from "@components/Testimonial";

export default function Page() {
  return (
    <>
      <Premium />
      <BannerAd />
      <FreetipsStats />
      <Testimonial />
    </>
  );
}
