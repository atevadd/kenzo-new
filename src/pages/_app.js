import "@/styles/globals.scss";
import { AnimatePresence } from "framer-motion"
import Link from "next/link";


export default function App({ Component, pageProps, router })
{

  return (
    <main className="w-screen h-screen relative">
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />;
      </AnimatePresence>
    </main>
  )


}
