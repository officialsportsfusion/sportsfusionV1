import "@/styles/globals.css";
import { Layout } from "@components/Layout";
import { Sora } from "@next/font/google";
import { SessionProvider } from 'next-auth/react'
import Head from "next/head";
const sora = Sora({ subsets: ["latin"] });

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const getLayout = Component.getLayout

  return (
    <SessionProvider session={session}>
      <div className={sora.className}>
        <Head>
          <title>Home | SportsFusion</title>
          <meta name="description" content="Your Home for AI sport betting prediction and tips" />
        </Head>

        {
          getLayout && typeof getLayout === 'function' ?
            getLayout(<Component {...pageProps} />) :
            <Layout>
              <Component {...pageProps} />
            </Layout>
        }

      </div>
    </SessionProvider>
  );
}

