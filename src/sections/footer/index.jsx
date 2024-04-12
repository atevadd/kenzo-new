import Image from "next/image";
import PageLayout from "@/layout/page-layout";
import anim, { image_down } from "@/lib/animations";
import { motion } from "framer-motion";
import { Magnetic } from "@/components/magnetic";
import { Fragment } from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

import { cn } from "@/lib/utils";
{
      /* __ */
}

export default function Footer()
{

      return (
            <section id="footer" className={"footer w-full py-4 h-auto items-end  flex px-12 bg-neutral-800 justify-between"}>
                  <img className="nav-logo" src="/logo2-crop.png" width={180} alt="logo" />


                  <p className="text-xs tracking-tighter uppercase rights font-jb-mono text-neutral-400">
                        2024 all right reserves - powered by kendo productions - created by bob.studio
                  </p>
                  <div className="flex items-center h-auto p-0 space-x-3 text-sm text-neutral-400">
                        <div className="p-1 hover:text-accent">
                              <Facebook />
                        </div>
                        <div className="p-1">
                              <Twitter />
                        </div><div className="p-1">
                              <Instagram />
                        </div><div className="p-1">
                              <Youtube />
                        </div>

                  </div>
            </section>
      );
}
