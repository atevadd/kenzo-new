import Image from "next/image";
import PageLayout from "@/layout/page-layout";
import anim, { image_down } from "@/lib/animations";
import { motion } from "framer-motion";
import { Magnetic } from "@/components/magnetic";
import React from "react";
import ServicesItem from "./service-item";

// const inter = Inter({ subsets: ["latin"] });

{/* __ */ }


const accordion_content = [
      {
            label: "ARTIST",
            sub_component: () => <ArtistSlider />
      },
      {
            label: "MUSIC",
            sub_component: () => <ArtistSlider />
      },
      {
            label: "TOUR",
            sub_component: () => <ArtistSlider />
      },
      {
            label: "CONCERT",
            sub_component: () => <ArtistSlider />
      },
]

export default function Services()
{
      return (
            <section className="services">
                  <section className="w-full min-h-screen px-12 p-6 ">
                        <div className="header flex justify-between font-medium  items-center header1 uppercase text-[64px] text-right leading-[90%]">
                              <h1 className="font-jb-mono">Project</h1>
                              <h1 className=" font-fira italic">Services</h1>
                        </div>

                        {/* _carousel_ */}
                        <div className="w-full h-auto mt-12 grid grid-cols-3 min-h-[500px] gap-6">
                              <div className="w-full h-full bg-neutral-400 imge_box col-span-2"></div>
                              <div className="flex flex-col items-end justify-end gap-6">

                                    <div className="h-[250px] w-full flex gap-4 items-end">
                                          <h1 className="w-full font-medium text-sm">
                                                the things we do at kenzo to project your needs.
                                          </h1>


                                          <div className="h-full w-full bg-neutral-400"></div>

                                    </div>

                                    <div className="w-full h-[200px] bg-neutral-400"></div>

                              </div>

                        </div>

                  </section>


                  <motion.section className="w-full min-h-screen py-20 bg-neutral-900 px-12">
                        {
                              accordion_content.map((item, index) => (
                                    <ServicesItem data={{ ...item, index }} />
                              ))
                        }
                  </motion.section>
            </section>

      );
}


function ArtistSlider()
{
      return (
            <div className="w-full h-full grid grid-cols-3 gap-4">

                  <div className="full bg-neutral-400"></div>
                  <div className="full bg-neutral-400"></div>
                  <div className="full bg-neutral-400"></div>

            </div>
      )
}