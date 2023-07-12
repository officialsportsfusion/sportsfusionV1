import { FreeTips } from "@components/FreeTips";
import { Hero } from "@components/Hero";
import { Premium } from "@components/Premium";
import { Series } from "@components/Series";
import { Statistics } from "@components/Statistics";
import { Testimonial } from "@components/Testimonial";
import { useSession } from "next-auth/react";

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

export default function Page({ tips }) {
  const session = useSession();

  return (
    <>
      <Hero />
      <Statistics />
      <FreeTips tips={tips} />
      {session.status === 'authenticated' && <Premium />}
      <Series />
      <Testimonial />
    </>
  );
}
