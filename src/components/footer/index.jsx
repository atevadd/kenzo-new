import Image from "next/image";
import PageLayout from "@/layout/page-layout";
import anim, { image_down } from "@/lib/animations";
import { motion } from "framer-motion";
import { Magnetic } from "@/components/magnetic";
import { Fragment } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
// const inter = Inter({ subsets: ["latin"] });
import styles from "./footer.module.scss";

{
      /* __ */
}

export default function Footer()
{
      console.log(styles, "this is what i got from the styles");

      return (
            <section className={cn("w-full py-6 gap-8  flex justify-center items-center px-12 bg-neutral-800")}>
                  <div className="logo">
                        <img className="nav-logo" src="/logo2-crop.png" width={180} alt="logo" />
                  </div>
            </section>
      );
}

// <h1 className="header1 uppercase text-[24px] italic leading-[90%] ">
//       some more beautifull
// </h1>
