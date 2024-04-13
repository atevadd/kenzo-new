// import Image from "next/image";
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import anim, { slides, fade, paspective } from "@/lib/animations"
import { useRouter } from "next/router";
import Footer from "@/sections/footer";
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
                  <motion.div  {...anim(slides)} className="fixed top-0 left-0 z-10 w-screen h-screen bg-white slide" />
                  <motion.div  {...anim(paspective)} className="bg-white page">
                        <motion.div  {...anim(fade)} className="overflow-x-hidden slide page ">
                              <div ref={cursorRef} className="fixed w-12 h-12 border-2 rounded-full cursor border-neutral-200"></div>
                              <Navbar />
                              {children}
                              <Footer />
                        </motion.div>
                  </motion.div>
            </main>
      );
}

// <Navbar />

