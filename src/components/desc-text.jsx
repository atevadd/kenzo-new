import Image from "next/image";
import PageLayout from "@/layout/page-layout";
import anim, { image_down, desc_text } from "@/lib/animations";
import { motion } from "framer-motion";
import { Magnetic } from "@/components/magnetic";
import { useEffect, useRef } from "react";
import React from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useScroll, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { text_down_up } from "@/lib/animation/text-down-up";

{/* __ */ }
export default function DescText({ main_text, className })
{

      const descRef = useRef(null)
      const DescTextInView = useInView(descRef)

      let phrase = main_text || "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque minus quidem Atque minus quidem"


      return (
            <div ref={descRef} data-scroll-section className={cn("", className)}>
                  <p className="typo-one text-xm mt-2 text-left font-semibold gap-3">
                        {
                              phrase.split(" ").map((word, index) => (
                                    <span className="overflow-hidden relative inline-flex mr-1">
                                          <motion.span variants={text_down_up} custom={index} initial="initial" animate={DescTextInView ? "enter" : "exit"} className="mr-1">
                                                {word}
                                          </motion.span>
                                    </span>
                              ))
                        }

                  </p>

            </div>

      );
}


// <img src="/image1.jpeg" alt="" className="w-full h-[500px] object-cover " />
// <h1 className="header1 uppercase text-[24px] italic leading-[90%] ">
//       some more beautifull
// </h1>


