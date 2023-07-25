import { FreeTips } from "@components/FreeTips";
import { Hero } from "@components/Hero";
import { Premium } from "@components/Premium";
import { Series } from "@components/Series";
import { Statistics } from "@components/Statistics";
import { Testimonial } from "@components/Testimonial";
import { useSession } from "next-auth/react";

export const getServerSideProps = async () => {
  let tips;
  let firstTwentyTips;
  let Tip
  let firstTwentyPremiumTips
  let seriestipData
  let firstTwentySeriesTips
  try {
    const res = await fetch('https://teal-worried-adder.cyclic.app/v1/freetip')
    tips = await res.json();
    firstTwentyTips = tips.slice(0, 10);
    const response = await fetch('https://teal-worried-adder.cyclic.app/v1/premium')
    Tip = await response.json()
    firstTwentyPremiumTips = Tip.slice(0,10)
    const seriesTip = await fetch('https://teal-worried-adder.cyclic.app/v1/series')
    seriestipData=await seriesTip.json()
    firstTwentySeriesTips = seriestipData.slice(0,1)
  } catch (err) {
    console.log(err.message)
  }
  return {
    props: { tips : firstTwentyTips,
            Tip:firstTwentyPremiumTips,
            firstTwentySeriesTips
          }
  }
}

export default function Page({ tips , Tip, firstTwentySeriesTips}) {
  const session = useSession();

  return (
    <>
      <Hero />
      <Statistics />
      <FreeTips tips={tips} />
      {session.status === 'authenticated' && <Premium Tip={Tip}/>}
      <Series tip={firstTwentySeriesTips}/>
      <Testimonial />
    </>
  );
}
