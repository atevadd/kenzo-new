import Image from "next/image";
import PageLayout from "@/layout/page-layout";
import anim, { fade, image_down } from "@/lib/animations";
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

import TextSlider from "./text-slider";
import Autoplay from "embla-carousel-autoplay"
import
{
      Carousel,
      CarouselContent,
      CarouselItem,
      CarouselNext,
      CarouselPrevious,
} from "@/components/ui/carousel"

{/* __ */ }

const hero_carousel_img = [
      {
            image: "/image0.jpeg",
            sub_content: {
                  label: "ramdom text can go here",
                  label2: "short random text"
            }
      },
      {
            image: "/image2.jpeg",
            sub_content: {
                  label: "ramdom text can go here",
                  label2: "short random text"
            }
      },
      {
            image: "/mixing.jpg",
            sub_content: {
                  label: "ramdom text can go here",
                  label2: "short random text"
            }
      },
      {
            image: "/image8.jpeg",
            sub_content: {
                  label: "ramdom text can go here",
                  label2: "short random text"
            }
      },
]

export default function HeroCarousel()
{

      // return (


      // );

      return (
            <div className="hero-image w-full relative">

                  <Carousel opts={{
                        loop: true
                  }} plugins={[
                        Autoplay({
                              delay: 3000,
                        })
                  ]

                  } className="w-full">
                        <CarouselContent className="-ml-0">
                              {hero_carousel_img.map((item, index) => (
                                    <CarouselItem className="pl-0" key={index}>
                                          <motion.div {...anim(fade)} className="relative w-full h-screen image_box">
                                                <Image src={item.image} alt="" fill className="w-full h-screen object-cover" />
                                                <div className="absolute p-6 left-0 top-0 w-auto z-20">
                                                      <div data-scroll data-scroll-speed={4} className="text-left text-neutral-300 header1 uppercase text-lg leading-[90%] italic  font-jb-mono">
                                                            <h1 className="">
                                                                  {item.sub_content.label}
                                                            </h1>
                                                            <h1 className="text-xs mt-3">
                                                                  {item.sub_content.label2}

                                                            </h1>

                                                      </div>

                                                </div>
                                          </motion.div>

                                    </CarouselItem>
                              ))}
                        </CarouselContent>

                  </Carousel>
            </div>

      );
}


// <img src="/image1.jpeg" alt="" className="w-full h-[500px] object-cover " />
// <h1 className="header1 uppercase text-[24px] italic leading-[90%] ">
//       some more beautifull
// </h1>


// return (
//       <div className="hero-image w-full relative">
// <div className="absolute p-6 left-0 bottom-0 w-auto z-20">
//       <div data-scroll data-scroll-speed={4} className="text-left text-neutral-300 header1 uppercase text-lg leading-[90%] italic  font-jb-mono">
//             <h1 className="">
//                   see the future is here.
//             </h1>
//             <h1 className="text-xs mt-3">
//                   content here.
//             </h1>

//       </div>

// </div>
// <div className="relative w-full h-screen">
//       <Image src="/image5.jpeg" alt="" fill className="w-full h-screen object-cover" />
// </div>
//       </div>

// );