import Image from "next/image";
import PageLayout from "@/layout/page-layout";
import anim, { image_down, text_in } from "@/lib/animations";
import { motion } from "framer-motion";
import { Magnetic } from "@/components/magnetic";
import { useEffect, useRef } from "react";
import React from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useScroll, useInView } from "framer-motion";
import style from "./hero.module.scss";
import { cn } from "@/lib/utils";
import TextSlider from "./text-slider";
import HeroCarousel from "./hero-carousel";
import DescText from "../../components/desc-text";
import { slide_in_left } from "@/lib/animation/slide-in-left";
import StarggerText from "../../components/stargger-text";

{
  /* __ */
}
export const navs = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Tours",
    href: "/",
  },
  {
    label: "Blogs",
    href: "/",
  },
  {
    label: "News",
    href: "/",
  },
];

const dis =
  "Experience the best in music promotion! Elevating local talent to new heights. From intimate gigs to massive festivals, we're your ultimate music destination. From intimate gigs to massive festivals, our passion for music knows no bounds. ";

export default function Hero() {
  const headerRef = useRef(null);

  return (
    <React.Fragment>
      <section data-scroll-section className={`w-full min-h-screen hero`}>
        <div className="w-full grid grid-cols-2">
          {/* _container one_ */}
          <div className=" hero-content  w-full relative font-fira">
            {/* -hero nav_ */}
            <div className="absolute top-4 left-12 ">
              <motion.div ref={headerRef} className="flex nav-list gap-6">
                {navs.map((item, key) => (
                  <Link key={key} href={item.href}>
                    <Magnetic>
                      <div className="nav-item font-medium text-xs text-neutral-800 font-jb-mono px-0 p-2 overflow-hidden">
                        <motion.p {...anim(text_in())}>{item.label}</motion.p>
                      </div>
                    </Magnetic>
                  </Link>
                ))}
              </motion.div>
            </div>

            <div className="absolute w-full p-10 bottom-6 h-auto flex flex-col">
              <div className="hero-text overflow-hidden text-neutral-400">
                <StarggerText
                  className={
                    "header1 uppercase text-[64px] text-right pr-16 hero_main-text italic "
                  }
                />
              </div>

              <div className="hero-box-one flex p-0 gap-6 items-start justify-end h-auto overflow-hidden">
                <motion.div
                  {...anim(slide_in_left)}
                  className="w-auto h-full flex flex-col space-y-6"
                >
                  <h1 className="header1 uppercase text-[64px] text-right italic leading-[90%] ">
                    memories
                  </h1>
                  <h1 className="header1 uppercase text-[64px] text-right leading-[90%] italic">
                    last
                  </h1>
                  <h1 className="header1 uppercase text-[64px] text-right leading-[90%] italic underline">
                    a time
                  </h1>
                </motion.div>

                <div className="hero-sub-image-box w-[40%] h-full">
                  <div className="w-full h-[140px]">
                    <Magnetic>
                      <motion.div
                        {...anim(image_down)}
                        className="w-full h-[140px] bg-neutral-300 relative hero_sub-image"
                      ></motion.div>
                    </Magnetic>
                  </div>

                  <DescText />
                </div>
              </div>
            </div>
          </div>

          <HeroCarousel />
        </div>
      </section>

      <section
        data-scroll-section
        className="w-full min-h-[400px] gap-8  flex justify-between items-center px-12 bg-neutral-800"
      >
        <div className="section-text  w-[60%]">
          <div className="words text-white space-y-2">
            {/*<h1 className="header1 uppercase text-[84px] w-full text-left leading-[90%]">Best Music </h1>*/}
            <StarggerText
              main_text={"Best Music"}
              className={
                "header1 uppercase text-[84px] w-full text-left leading-[90%]"
              }
            />

            <div className="w-full text-right  flex justify-end italic">
              <h1 className="header1 uppercase text-[84px] w-auto text-right leading-[90%] hero_main-text hero_main-text-two">
                Promoter
              </h1>
            </div>
          </div>
        </div>

        <div className="w-[40%] p-6">
          <DescText main_text={dis} className={"text-neutral-400"} />

          <Link href="/home">
            <h1 className="link_text font-semibold underline text-neutral-300 uppercase mt-8">
              Work with us
            </h1>
          </Link>
        </div>
      </section>

      {/* _sider_ */}
      <TextSlider />
    </React.Fragment>
  );
}

// <img src="/image1.jpeg" alt="" className="w-full h-[500px] object-cover " />
// <h1 className="header1 uppercase text-[24px] italic leading-[90%] ">
//       some more beautifull
// </h1>
