import Image from "next/image";
import PageLayout from "@/layout/page-layout";
import anim, { image_down } from "@/lib/animations";
import { motion } from "framer-motion";
import { Magnetic } from "@/components/magnetic";

// const inter = Inter({ subsets: ["latin"] });

{/* __ */ }

export default function About()
{
      return (
            <section className="w-full centered min-h-screen bg-neutral-900 py-20 px-12">
                  <div className="inner-container w-full min-h-[70vh] grid grid-cols-2 gap-x-20">

                        {/* _left container_ */}
                        <div className="text-content h-full flex flex-col justify-between  w-[90%]">
                              {/* _inner text_ */}
                              <div className="words text-white space-y-2">
                                    <h1 className="header1 uppercase text-[84px] w-full text-left leading-[90%] ">see their</h1>
                                    <h1 className="header1 uppercase text-[84px] text-center w-full leading-[90%] italic">words</h1>
                                    <div className="w-full text-right  flex justify-end">
                                          <h1 className="header1 uppercase text-[84px] w-auto text-right leading-[90%] hero_main-text hero_main-text-two">about us</h1>
                                    </div>
                              </div>

                              {/* _bottom caption_ */}
                              <p className="typo-one text-xm mt-2 text-justify font-semibold w-full text-neutral-500 ">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque minus quidem, Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Consequuntur, alias non. Et perferendis quo facilis placeat culpa, nihil velit
                                    cum, consequatur non est dignissimos odit enim sit. Facilis, ullam quibusdam?
                                    Et perferendis quo facilis placeat culpa, nihil velit
                                    cum, consequatur non est dignissimos odit enim sit. Facilis, ullam quibusdam?
                              </p>
                        </div>

                        {/* _right container_ */}
                        <div className="w-full h-full flex flex-col gap-6">
                              <div className="image-box w-full h-[500px] bg-neutral-400">
                                    <img src="/tour-1.jpg" alt="" className="full object-cover" />
                              </div>

                              <div className="w-full flex justify-between items-center text-white">
                                    <h1 className="name font-bold uppercase text-neutral-400">
                                          bobby dev @studios  labs
                                    </h1>


                                    <p className="date text-neutral-500">
                                          MAR 22, 2024
                                    </p>
                              </div>
                        </div>
                  </div>
            </section>
      );
}

// <h1 className="header1 uppercase text-[24px] italic leading-[90%] ">
//       some more beautifull
// </h1>