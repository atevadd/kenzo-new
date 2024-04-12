import Image from "next/image";
import PageLayout from "@/layout/page-layout";
import anim, { image_down, fade } from "@/lib/animations";
import { AnimatePresence, motion } from "framer-motion";
import { Magnetic } from "@/components/magnetic";
import React, { useState } from "react";


{/* __ */ }

export default function ServicesItem({ data: { sub_component, index, label } })
{
      const [isOpen, setIsOpen] = useState(false)
      // console.log(data, " this is the data");

      // return <div></div>
      function handleOpenContent(e)
      {
            e.stopPropagation()
            setIsOpen(true)
      }
      function handleCloseContent(e)
      {
            e.stopPropagation()
            setIsOpen(false)
      }

      return (

            <div key={index} onMouseEnter={handleOpenContent} onMouseLeave={handleCloseContent} className="service_item w-full border-y border-neutral-400  h-uto">
                  <div className="trigger flex items-center justify-between">
                        <div className="w-auto flex items-center gap-2 h-[130px]">
                              <div className="arrow_bar h-1 rounded bg-neutral-300" />

                              <h1 className="uppercase text-[64px] text-neutral-200 font-jb-mono shimmer italic">{label}</h1>
                        </div>

                        <div className="index">
                              <h1 className="uppercase font-mono text-neutral-400 italic">
                                    ({index})
                              </h1>
                        </div>
                  </div>

                  <AnimatePresence mode="wait">
                        {isOpen && <motion.div className="sub_content h-[400px] w-full my-3">

                              {
                                    sub_component()
                              }
                        </motion.div>}
                  </AnimatePresence>
            </div>





      );
}

