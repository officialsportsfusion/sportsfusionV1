import FreeTips from "@components/FreeTips";
import { Hero } from "@components/Hero";
import { Premium } from "@components/Premium";
import { Series } from "@components/Series";
import { Statistics } from "@components/Statistics";
import { Testimonial } from "@components/Testimonial";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Page() {
  const session = useSession();
  useEffect(() => {
    console.log(session)
  })

  return (
    <>
      <Hero />
      <Statistics />
      <FreeTips />
      <Premium />
      <Series />
      <Testimonial />
    </>
  );
}
