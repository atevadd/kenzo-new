import Image from "next/image";
import PageLayout from "@/layout/page-layout";
import anim, { image_down } from "@/lib/animations";
import { motion } from "framer-motion";
import { Magnetic } from "@/components/magnetic";
import { Fragment } from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  FacebookLogo,
  InstagramLogo,
  SnapchatLogo,
  TiktokLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
{
  /* __ */
}

export default function Footer() {
  return (
    <section
      id="footer"
      className={
        "footer w-full py-8 h-auto items-end  flex px-12 bg-neutral-800 justify-between"
      }
    >
      <img className="nav-logo" src="/logo2-crop.png" width={180} alt="logo" />

      <p className="text-xs tracking-tighter uppercase rights font-jb-mono text-neutral-400">
        2024 all right reserves - powered by kendo productions
      </p>
      <div className="flex items-center h-auto p-0 space-x-3 text-sm text-neutral-400">
        <a
          href="https://web.facebook.com/kenzodagr8productions"
          target="_blank"
          className="p-1 hover:text-accent"
        >
          <FacebookLogo size={25} />
        </a>
        <a
          href="https://www.tiktok.com/@kenzodagr8productions"
          target="_blank"
          className="p-1 hover:text-accent"
        >
          <TiktokLogo size={25} />
        </a>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="p-1 hover:text-accent"
        >
          <InstagramLogo size={25} />
        </a>
        <a
          href="https://t.snapchat.com/jiNEnJGB"
          target="_blank"
          rel="noopener noreferrer"
          className="p-1 hover:text-accent"
        >
          <SnapchatLogo size={25} />
        </a>
        <a
          href="https://www.youtube.com/@kenzodagr8productions"
          target="_blank"
          rel="noopener noreferrer"
          className="p-1 hover:text-accent"
        >
          <YoutubeLogo size={25} />
        </a>
      </div>
    </section>
  );
}
