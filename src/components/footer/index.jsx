import Image from "next/image";
import PageLayout from "@/layout/page-layout";
import anim, { image_down } from "@/lib/animations";
import { motion } from "framer-motion";
import { Magnetic } from "@/components/magnetic";
import { Fragment } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
// const inter = Inter({ subsets: ["latin"] });
import styles from './footer.module.scss'

{/* __ */ }

export default function Footer()
{
      console.log(styles, "this is what i got from the styles");

      return (
            <section className={cn("w-full min-h-[400px] gap-8  flex justify-between items-center px-12 bg-neutral-800")}>
                  <div className="section-text  w-[60%]">
                        <div className="words text-white space-y-2">
                              <h1 className="header1 uppercase text-[84px] w-full text-left leading-[90%] ">Best Music </h1>
                              <div className="w-full text-right  flex justify-end italic">
                                    <h1 className="header1 uppercase text-[84px] w-auto text-right leading-[90%] hero_main-text hero_main-text-two">Promoter</h1>
                              </div>
                        </div>

                  </div>

                  <div className="w-[40%] p-6">
                        <p className="text-sm font-medium text-neutral-500">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sed excepturi hic quos. Blanditiis numquam
                              delectus, dicta aut ullam velit asperiores, nobis magnam eveniet maiores rerum tenetur officia sit iusto.
                              dicta aut ullam velit asperiores, nobis magnam eveniet maiores rerum tenetur officia sit iusto.
                              dicta aut ullam velit asperiores, nobis magnam eveniet maiores rerum tenetur officia sit iusto.
                        </p>

                        <Link href="/home">
                              <h1 className="link_text font-semibold underline text-neutral-300 uppercase mt-8">
                                    Work with us
                              </h1>
                        </Link>
                  </div>
            </section>

      );
}

// <h1 className="header1 uppercase text-[24px] italic leading-[90%] ">
//       some more beautifull
// </h1>
