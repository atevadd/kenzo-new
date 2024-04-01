// import Image from "next/image";
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import anim, { slides, fade, paspective } from "@/lib/animations"
import { useRouter } from "next/router";
import Footer from "@/components/footer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";


export default function PageLayout({ children })
{
      const router = useRouter()
      const cursorRef = useRef()

      function followCursor(e)
      {
            gsap.to(cursorRef.current, {
                  x: e.clientX,
                  y: e.clientY,
                  duration: 0.2,
            })

      }


      useGSAP(() =>
      {
            // gsap.set(cursorRef.current, {
            //       xPercent: 0,
            //       yPercent: 0
            // })
            window.addEventListener('mousemove', followCursor)
      })

      return (

            <main className={`main-layout min-h-screen bg-black`}>
                  <motion.div  {...anim(slides)} className="w-screen h-screen top-0 left-0 fixed  bg-white slide z-10" />
                  <motion.div  {...anim(paspective)} className="page bg-white">
                        <motion.div  {...anim(fade)} className="slide page overflow-x-hidden ">
                              <div ref={cursorRef} className="cursor fixed w-8 h-8 border-4 rounded-full border-neutral-800"></div>
                              <Navbar />
                              {children}
                              <Footer />
                        </motion.div>
                  </motion.div>
            </main>
      );
}

// <Navbar />

