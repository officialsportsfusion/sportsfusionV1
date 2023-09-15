import Head from "next/head";
import { FreeTips } from "@components/FreeTips";
import { FreeAcca } from "@components/FreeAcca";
import { Hero } from "@components/Hero";
import { Premium } from "@components/Premium";
import { Testimonial } from "@components/Testimonial";
import { Series } from "@components/Series";
import { Statistics } from "@components/Statistics";
import { useSession } from "next-auth/react";

export const getServerSideProps = async () => {
  let tips;
  let firstTwentyTips;
  let Tip
  let firstTwentyPremiumTips
  let seriestipData
  let firstTwentySeriesTips
  let acca
  let firstfiveAcca
  try {
    const res = await fetch('https://teal-worried-adder.cyclic.app/v1/freetip')
    tips = await res.json();
    firstTwentyTips = tips.slice(0, 10);
    const response = await fetch('https://teal-worried-adder.cyclic.app/v1/premium')
    Tip = await response.json()
    firstTwentyPremiumTips = Tip.slice(0, 10)
    const seriesTip = await fetch('https://teal-worried-adder.cyclic.app/v1/series')
    seriestipData = await seriesTip.json()
    firstTwentySeriesTips = seriestipData.slice(0, 1)
    const freeAcca = await fetch('https://teal-worried-adder.cyclic.app/v1/accatip')
    acca = await freeAcca.json()
    console.log(acca)
    firstfiveAcca = acca.slice(0,5)
  } catch (err) {
    console.log(err.message)
  }
  return {
    props: {
      tips: firstTwentyTips,
      Tip: firstTwentyPremiumTips,
      firstTwentySeriesTips,
      acca:firstfiveAcca
    }
  }
}

export default function Page({ tips, Tip, firstTwentySeriesTips, acca }) {
  const session = useSession();

  return (
    <>
      <Head>
        <title> SportsFusion | Crypto Meets Sports</title>
        <meta name="google-site-verification" content="mpo1KJPs717-AKR73Marre0X8CIg9hX3TMr0FxlER8E" />
        <meta property="og:title" content="Sports Fusion" />
        <meta property="og:description" content="Exclusive way to earn big from the multiple systems for tips
              on the marketplace, carefully collated and evaluated from the
              best tipsters around the world. A platform that is Profit driven
              where u can either buy and sell your predictions." />
        <meta property="og:image" content="/public/Layer1.png" />
        <meta property="og:url" content="https://www.sportsfusion.io" />
      </Head>
      <>
        <Hero />
        <Statistics />
        <FreeTips tips={tips} />
        {/* {session.status === 'authenticated' && <Premium Tip={Tip} />} */}
        {session.status === 'authenticated' && <FreeAcca tip={acca} />}
        {/* <Series tip={firstTwentySeriesTips} /> */}
        <Testimonial />
      </>
    </>

  );
}
