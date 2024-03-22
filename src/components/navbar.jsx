// import Image from "next/image";
// import { menuRef } from "@/components/ui/menuRef"
import anim, { text_in } from "@/lib/animations";
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { RoundBtn } from "./round-btn";
import { cn } from "@/lib/utils";
import { Magnetic } from "./magnetic";
import { NavSheet } from "./nav-sheet";
import { useRouter } from "next/router";

export const navs = [
      {
            label: "Home",
            href: "/"
      },
      {
            label: "About",
            href: "/about"
      },
      {
            label: "Contact",
            href: "/contact"
      },
      {
            label: "Tours",
            href: "/home"
      },
]


export default function Navbar({ children })
{
      const [navActive, setNavActive] = useState(false);
      const router = useRouter()

      const menuRef = useRef(null)
      const headerRef = useRef(null)
      const logoRef = useRef(null)


      useGSAP(() =>
      {
            gsap.registerPlugin(ScrollTrigger)
            gsap.to(menuRef.current, {
                  scrollTrigger: {
                        trigger: document.documentElement,
                        start: 0,
                        end: window.innerHeight,
                        onLeave: () =>
                        {
                              gsap.to(menuRef.current, { scale: 1, duration: 0.25, ease: "power1.out" })
                              gsap.to(headerRef.current, { y: -80, duration: 0.25, ease: "power1.out" })

                        },
                        onEnterBack: () =>
                        {
                              gsap.to(menuRef.current, { scale: 0, duration: 0.25, ease: "power1.out" })
                              gsap.to(headerRef.current, { y: 0, duration: 0.25, ease: "power1.out" },
                                    setNavActive(false))
                        }
                  }
            })

      }, { scope: menuRef.current })


      useGSAP(() =>
      {
            console.log(router.pathname, "the curent path name");

            if (['/about'].includes(router.pathname))
            {
                  gsap.to(menuRef.current, { scale: 1, duration: 0.25, ease: "power1.out" })
                  gsap.to(headerRef.current, { y: -80, duration: 0.25, ease: "power1.out" })
                  gsap.to(logoRef.current, { y: -80, duration: 0.25, ease: "power1.out" })
            }

      }, { scope: menuRef.current })
      return (

            <React.Fragment>
                  <nav className="w-full px-12 p-2 fixed top-0 bg-transparent z-10 flex justify-between  items-center">


                        <div ref={logoRef} className="logo">
                              <img className="nav-logo" src="/logo2-crop.png" width={180} alt="logo" />
                        </div>

                        {/* <menuRef variant="nav">Menu</menuRef>*/}

                        <motion.div ref={headerRef} className="flex nav-list gap-6">
                              {
                                    navs.map((item, key) => (
                                          <Link key={key} href={item.href}>
                                                <Magnetic>
                                                      <div className="nav-item text-sm text-white font-mono px-0 p-2 overflow-hidden">
                                                            <motion.p {...anim(text_in())}>{item.label}</motion.p>
                                                      </div>
                                                </Magnetic>
                                          </Link>
                                    ))
                              }
                        </motion.div>

                        <div ref={menuRef} onClick={() => setNavActive(!navActive)} className="headerButtonContainer p-4  scale-0 fixed -top-6 right-12">

                              <RoundBtn className="button">
                                    <div className={cn(`burger ${navActive ? 'burgerActive' : ""}`)}></div>
                              </RoundBtn>

                        </div>


                  </nav>

                  <AnimatePresence mode="wait">
                        {navActive &&
                              <NavSheet />}
                  </AnimatePresence>

            </React.Fragment>

      );
}


