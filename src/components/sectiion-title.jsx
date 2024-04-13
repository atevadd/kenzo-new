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
import StarggerText from "@/components/stargger-text";
import HorizontalLine from "./full-horizontal-line";


{/* __ */ }
export default function SectionTitle({ titleLable, linkLabel, linkUrl, line = false })
{

      return (
            <div className="header pb-6 relative flex justify-between font-medium  items-center header1 uppercase text-[64px] text-right leading-[90%]">
                  <StarggerText main_text={titleLable} className="font-jb-mono" />
                  <Link href={linkUrl}>
                        <h1 className="italic font-fira">{linkLabel}</h1>
                  </Link>

                  {
                        line &&
                        <HorizontalLine className={"absolute  w-full h-[2px] bg-neutral-400 bottom-0 left-0"} />

                  }
            </div>


      );
}


// <img src="/image1.jpeg" alt="" className="w-full h-[500px] object-cover " />
// <h1 className="header1 uppercase text-[24px] italic leading-[90%] ">
//       some more beautifull
// </h1>


