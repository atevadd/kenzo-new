import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import anim, { nav_sheet } from "@/lib/animations";
import { useRouter } from "next/router";
import { navs } from "./navbar";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function NavSheet({ toggleMenu }) {
  // const pathname = usePathname();
  const router = useRouter();
  const [selectedIndicator, setSelectedIndicator] = useState(router.pathname);
  // console.log(pathname);

  return (
    <motion.div {...anim(nav_sheet())} className={"nav_sheet-menu"}>
      <div className={"body relative"}>
        <div className="toggle absolute top-6 right-6">
          <button
            onClick={toggleMenu}
            className="px-3 p-1 bg-red-400 text-white rounded ml-5 ring-red-400 uppercase font-jb-mono font-medium"
          >
            close
          </button>
        </div>

        <div
          onMouseLeave={() => {
            setSelectedIndicator(router.pathname);
          }}
          className={"nav"}
        >
          <div className={"header"}>explore kenzo</div>
          {navs.map((data, index) => {
            return (
              <Navlink
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></Navlink>
            );
          })}
        </div>

        <div className="w-full absolute bottom-4 left-0 px-4 flex items-center justify-between">
          <img
            className="nav-logo"
            src="/logo2-crop.png"
            width={160}
            alt="logo"
          />

          <div className="socials flex items-center space-x-3">
            <div className="p-1">
              <Facebook />
            </div>
            <div className="p-1">
              <Twitter />
            </div>
            <div className="p-1">
              <Instagram />
            </div>
            <div className="p-1">
              <Youtube />
            </div>
          </div>
        </div>
      </div>
      <CurvedEdge />
    </motion.div>
  );
}

function CurvedEdge() {
  const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${
    window.innerHeight / 2
  } 100 0`;
  const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${
    window.innerHeight / 2
  } 100 0`;

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <svg className={"svgCurve"}>
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
      ></motion.path>
    </svg>
  );
}

function Navlink({ data, index, label, isActive, setSelectedIndicator }) {
  console.log(data);

  const slide = {
    initial: { x: 80 },
    enter: (i) => ({
      x: 0,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
    }),
    exit: (i) => ({
      x: 80,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
    }),
  };

  const scale = {
    open: { scale: 1, transition: { duration: 0.3 } },
    closed: { scale: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      className={"link"}
      onMouseEnter={() => {
        setSelectedIndicator(data.href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className={"indicator"}
      ></motion.div>
      <Link href={data.href}>{data.label}</Link>
    </motion.div>
  );
}
