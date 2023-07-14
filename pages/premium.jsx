import { BannerAd } from "@components/BannerAd";
import Head from "next/head";
import { FreetipsStats } from "@components/FreetipsStats";
import { Premium } from "@components/Premium";
import { Testimonial } from "@components/Testimonial";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

export default function Page() {
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
        <title> Premium Tips | SportsFusion</title>
      </Head>
      {
        status === 'authenticated' ?
        <>
         <Premium />
      <BannerAd />
      <FreetipsStats />
      <Testimonial />
        </>:
        <div>
          <p>Loading</p>
        </div>
      }
     
    </>
  );
}
