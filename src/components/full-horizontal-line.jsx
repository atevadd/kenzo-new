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
import { full_hr_line } from "@/lib/animation/horizontal-line";

{/* __ */ }
export default function HorizontalLine({ className })
{

      const hrRef = useRef(null)
      const lineInView = useInView(hrRef)



      return (
            <motion.div ref={hrRef} role="hr" variants={full_hr_line} initial="initial" animate={lineInView ? "enter" : "exit"} className={cn(className, "")} />

      );
}



