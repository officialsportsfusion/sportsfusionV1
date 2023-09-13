import { BannerAd } from "@components/BannerAd";
import { FreeAcca } from "@components/FreeAcca";
import Head from "next/head";
import { FreetipsStats } from "@components/FreetipsStats";
import { Testimonial } from "@components/Testimonial";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

export default function Page({ tips }) {
  const router = useRouter()
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/auth/signin');
    }
  })

  return (
    <>
      <Head>
        <title> Free Tips Acca | SportsFusion</title>
      </Head>
      
      {
        status === 'authenticated' ?
      <>
      <FreeAcca tip ={tips} />
      <BannerAd />
      <FreetipsStats />
      <Testimonial />
      </>:
      <div>
      <p>Loading...</p>
      </div>
      } 
    
      
     
    </>
  );
}

export const getServerSideProps = async () => {
  let tips;
  try {
    const res = await fetch('https://teal-worried-adder.cyclic.app/v1/accatip')
    tips = await res.json();
    console.log(tips)
  } catch (err) {
    console.log(err.message)
  }
  return {
    props: { tips }
  }
}