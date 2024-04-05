import Image from "next/image";
import PageLayout from "@/layout/page-layout";
import anim, { image_down } from "@/lib/animations";
import { motion } from "framer-motion";
import { Magnetic } from "@/components/magnetic";
import { useEffect, useRef } from "react";
import React from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useScroll, useInView } from "framer-motion";
import style from './hero.module.scss'
import { cn } from "@/lib/utils";

{/* __ */ }
export default function TextSlider({ main_text, relative_text })
{

      const containerRef = useRef(null)
      const textRef = useRef(null)
      const secondTxtRef = useRef(null)
      let xPercent = 0
      let direction = 1

      // console.log(0.1 * direction, 'this is the current pervent');


      useGSAP(() =>
      {
            gsap.registerPlugin(ScrollTrigger)
            gsap.to(containerRef.current, {
                  scrollTrigger: {
                        trigger: document.documentElement,
                        start: 200,
                        end: window.innerHeight * 2,
                        scrub: 0.25,
                        onUpdate: e => direction = e.direction * -1

                  },
                  x: "-=60px"
            })

            requestAnimationFrame(animation)
      })

      // useEffect(() =>
      // {

      // }, [])


      function animation()
      {
            if (xPercent < -100)
            {
                  xPercent = 0;
            }
            else if (xPercent > 0)
            {
                  xPercent = -100;
            }
            gsap.set(textRef.current, { xPercent: xPercent })
            gsap.set(secondTxtRef.current, { xPercent: xPercent })
            xPercent += 0.18 * direction
            requestAnimationFrame(animation)
      }


      return (
            <div data-scroll-section className={cn(style.slide, "w-screen bg-neutral-800 overflow-hidden")}>
                  <div ref={containerRef} className={cn(style.slide_container, " relative")}>
                        <p ref={textRef} className="font-semibold text-neutral-700 font-fira text-[82px] italic uppercase">
                              {main_text || "kenzo da greate production - kenzo"}
                        </p>


                        <p ref={secondTxtRef} className="top-0 absolute  left-full  font-semibold text-neutral-700 font-fira text-[82px] italic  uppercase pr-11">
                              {relative_text || "kenzo da greate production - kenzo"}

                        </p>
                  </div>

            </div>

      );
}


// <img src="/image1.jpeg" alt="" className="w-full h-[500px] object-cover " />
// <h1 className="header1 uppercase text-[24px] italic leading-[90%] ">
//       some more beautifull
// </h1>


