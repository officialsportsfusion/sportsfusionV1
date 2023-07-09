import "@/styles/globals.css";
import { Sora } from "@next/font/google";
const sora = Sora({ subsets: ["latin"] });
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const getLayout = Component.getLayout || ((page) => page)
  
  return (
    <SessionProvider session={session}>
      <div className={sora.className}>
        {getLayout(<Component {...pageProps} />)}
      </div>
    </SessionProvider>
  );
}