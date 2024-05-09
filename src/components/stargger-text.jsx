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
import { text_fade_in_stg } from "@/lib/animation/text-stagger-in";

{
  /* __ */
}
export default function StarggerText({
  main_text,
  animationType = "fade",
  className,
}) {
  const textRef = useRef(null);
  const TextInView = useInView(textRef);

  let phrase = main_text || "we make";

  return (
    <h1 ref={textRef} className={cn(className, "")}>
      {phrase.split("").map((word, index) => (
        <span className="overflow-hidden relative inline-flex mr-1">
          <motion.span
            variants={text_fade_in_stg}
            custom={index}
            initial="initial"
            animate={TextInView ? "enter" : "exit"}
            className=""
          >
            {word === " " ? "_" : word}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}

// <img src="/image1.jpeg" alt="" className="w-full h-[500px] object-cover " />
// <h1 className="header1 uppercase text-[24px] italic leading-[90%] ">
//       some more beautifull
// </h1>
