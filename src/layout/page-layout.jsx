// import Image from "next/image";
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import anim, { slides, fade, paspective } from "@/lib/animations"
import { useEffect } from "react";
import { useRouter } from "next/router";


// // const inter = Inter({ subsets: ["latin"] });
// const anim = (variants) =>
// {
//       return {
//             initial: "initial",
//             animate: "enter",
//             exit: "exit",
//             variants
//       }
// }



export default function PageLayout({ children })
{
      const router = useRouter()



      useEffect(() =>
      {

            (

                  async () =>
                  {

                        const LocomotiveScroll = (await import('locomotive-scroll')).default

                        const locomotiveScroll = new LocomotiveScroll();

                  }

            )()

      }, [])


      return (

            <main className={`main-layout min-h-screen bg-black`}>
                  <motion.div  {...anim(slides)} className="w-screen h-screen top-0 left-0 fixed  bg-white slide z-10" />
                  <motion.div  {...anim(paspective)} className="page bg-white">
                        <motion.div  {...anim(fade)} className="slide page overflow-x-hidden">
                              <Navbar />
                              {children}
                        </motion.div>
                  </motion.div>
            </main>
      );
}


