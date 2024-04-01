import Image from "next/image";
import PageLayout from "@/layout/page-layout";
import anim, { image_down } from "@/lib/animations";
import { motion } from "framer-motion";
import { Magnetic } from "@/components/magnetic";

// const inter = Inter({ subsets: ["latin"] });

{/* __ */ }

export default function Tour()
{
      return (
            <section className="w-full grid grid-cols-2 min-h-screen">

                  <div className="div_bg div_bg-one w-full h-full  flex flex-col">


                        <div className="full">
                              <div style={{
                                    backgroundImage: "url('/image3.jpeg')",
                                    backgroundPosition: "center",
                                    backgroundSize: "cover"
                              }} className="w-full h-full bg-red-400 p-10" />


                        </div>

                        <div className="w-full h-40 bg-black">
                              <div className="w-full flex justify-between items-center br py-4">
                                    <div className="left_text-box text-left text-neutral-600">
                                          <p className="font-medium text-sm capitalize">
                                                bobbydev
                                          </p>
                                          <p className="font-medium capitalize">
                                                @bobs studio Inc©️.
                                          </p>

                                    </div>

                                    <div className="right_text-box text-right text-neutral-400">
                                          <p className="font-medium text-sm capitalize">
                                                awesome new contect my mass lourise in personall devile
                                          </p>
                                          <p className="font-medium capitalize">
                                                meet the first new men to sub due the mansiion oversea
                                          </p>

                                    </div>
                              </div>
                        </div>

                  </div>
                  <div className="w-full h-full bg-lime-500"></div>

            </section>
      );
}


// <img src="/image1.jpeg" alt="" className="w-full h-[500px] object-cover " />
// <h1 className="header1 uppercase text-[24px] italic leading-[90%] ">
//       some more beautifull
// </h1>
