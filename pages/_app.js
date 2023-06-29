import "@/styles/globals.css";
import { Sora } from "@next/font/google";

const sora = Sora({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
