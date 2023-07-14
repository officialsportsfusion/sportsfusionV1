import { BannerAd } from "@components/BannerAd";
import { FreeTips } from "@components/FreeTips";
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
        <title> Free Tips | SportsFusion</title>
      </Head>
      
      {
        status === 'authenticated' ?
      <>
      <FreeTips tips={tips} />
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
    const res = await fetch('https://teal-worried-adder.cyclic.app/v1/freetip')
    tips = await res.json();
  } catch (err) {
    console.log(err.message)
  }
  return {
    props: { tips }
  }
}