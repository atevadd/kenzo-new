import Image from "next/image";
import PageLayout from "@/layout/page-layout";
import anim, { image_down } from "@/lib/animations";
import { motion } from "framer-motion";
import { Magnetic } from "@/components/magnetic";

// const inter = Inter({ subsets: ["latin"] });

{/* __ */ }

export default function Gallery()
{
      return (
            <section className="w-full min-h-screen py-20">
                  <div className=" w-full h-full min-h-screen px-12 p-6 about">
                        <div className="header flex justify-between font-medium  items-center header1 uppercase text-[64px] text-right leading-[90%]">
                              <h1 className="font-jb-mono">Gallery</h1>
                              <h1 className=" font-fira italic">Artist</h1>
                        </div>


                        {/* _tool bar_ */}
                        <div className="w-full py-4 flex justify-between items-center relative">
                              <button className="font-jb font-semibold uppercase">
                                    prev
                              </button>

                              <div className="counts p-1">
                                    <h1 className="uppercase font-mono text-neutral-400 italic">
                                          All(89)
                                    </h1>
                              </div>

                              <button className="font-jb font-semibold uppercase">
                                    next
                              </button>

                              <div className="absolute  w-full h-[2px] bg-neutral-400 bottom-0 left-0" />
                        </div>

                        {/* Picture slides_ */}
                        <div className="grid w-full h-[500px] grid-cols-2 gap-12 mt-8">
                              <div className="w-full h-full bg-red-200">
                                    <div
                                          style={{
                                                backgroundImage: "url('/image3.jpeg')"
                                          }}
                                          className="image_box w-full h-full bg-neutral-500">

                                    </div>

                                    <div className="w-full py-2 flex justify-between mt-3">
                                          <div className="text_box h-full flex flex-col text-neutral-700">
                                                <h2 className="header2 text-xl font-semibold uppercase font-fira ">Feel the kenzo moment and grand launching.</h2>
                                                <p className="header2 font-fira">Limited time offer to purchase this ticket</p>
                                          </div>

                                          <div className="date_box text-[34px] font-bold font-jb-mono tracking-normal h-full">
                                                10 / 23
                                          </div>

                                    </div>

                              </div>
                              <div className="w-full h-full bg-red-200">
                                    <div
                                          style={{
                                                backgroundImage: "url('/image5.jpeg')"
                                          }}
                                          className="image_box w-full h-full bg-neutral-500">

                                    </div>


                                    <div className="w-full py-2 flex justify-between mt-3">
                                          <div className="text_box h-full flex flex-col text-neutral-700">
                                                <h2 className="header2 text-xl font-semibold uppercase font-fira ">Feel the kenzo moment and grand launching.</h2>
                                                <p className="header2 font-fira">Limited time offer to purchase this ticket</p>
                                          </div>

                                          <div className="date_box text-[34px] font-bold font-jb-mono tracking-normal h-full">
                                                10 / 23
                                          </div>

                                    </div>

                              </div>
                        </div>


                  </div>

            </section>
      );
}


// <img src="/image1.jpeg" alt="" className="w-full h-[500px] object-cover " />
// <h1 className="header1 uppercase text-[24px] italic leading-[90%] ">
//       some more beautifull
// </h1>
