import { BannerAd } from "@components/BannerAd";
import { FreeTips } from "@components/FreeTips";
import { Privacy } from "@components/privacy";
import { Terms } from "@components/terms";
import Head from "next/head";
import { FreetipsStats } from "@components/FreetipsStats";
import { Testimonial } from "@components/Testimonial";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

export default function Page() {
  
  
    return (
      <>
        <Head>
          <title> Terms of Services | SportsFusion</title>
        </Head>
        
       
       
       
        <Terms/> 
         <BannerAd />          
        <FreetipsStats />
        <Testimonial />
        
      
        
       
      </>
    );
  }