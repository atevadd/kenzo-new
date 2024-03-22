import Image from "next/image";
import PageLayout from "@/layout/page-layout";
import anim, { image_down, text_up_in } from "@/lib/animations";
import { motion } from 'framer-motion';
import { Magnetic } from "@/components/magnetic";
import About from "@/components/about-us";
import Tour from "@/components/tours";


// const inter = Inter({ subsets: ["latin"] });

export default function Home()
{
      return (
            <PageLayout>
                  <main className={`w-full min-h-screen`}>
                        <div className="w-full grid grid-cols-2">

                              <div className=" hero-content  w-full relative font-fira">

                                    <div className="absolute w-full p-10 bottom-6 h-auto flex flex-col">

                                          <div className="hero-text overflow-hidden">
                                                <motion.h1 className="header1 uppercase text-[64px] text-right pr-16 hero_main-text">
                                                      We make
                                                </motion.h1>
                                          </div>

                                          <div className="hero-box-one flex p-0 gap-6 items-start justify-end h-auto">
                                                <div className="w-auto h-full flex flex-col space-y-6">
                                                      <h1 className="header1 uppercase text-[64px] text-right italic leading-[90%] ">
                                                            memories
                                                      </h1>
                                                      <h1 className="header1 uppercase text-[64px] text-right leading-[90%]">
                                                            last
                                                      </h1>
                                                      <h1 className="header1 uppercase text-[64px] text-right leading-[90%]">
                                                            a time
                                                      </h1>
                                                </div>

                                                <div className="hero-sub-image-box w-[40%] h-full">

                                                      <div className="w-full h-[140px]">
                                                            <Magnetic>

                                                                  <motion.div {...anim(image_down)} className="w-full h-[140px] bg-neutral-300 relative hero_sub-image">
                                                                  </motion.div>
                                                            </Magnetic>

                                                      </div>

                                                      <p className="typo-one text-xm mt-2 text-left font-semibold w-full">
                                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque minus quidem
                                                      </p>
                                                </div>
                                          </div>

                                    </div>
                              </div>

                              <div className="hero-image w-full relative">
                                    <div className="absolute p-6 left-0 top-0 w-auto z-20">
                                          <div className="w-auto h-full flex flex-col space-y-6 text-left text-neutral-300">

                                                <h1 className="header1 uppercase text-xs leading-[90%] italic">
                                                      content here.
                                                </h1>

                                          </div>

                                    </div>
                                    <img src="/image5.jpeg" alt="" className="w-full h-screen object-cover" />
                              </div>

                        </div>
                  </main>

                  <Tour />

                  <About />

            </PageLayout>
      );
}

// <h1 className="header1 uppercase text-[24px] italic leading-[90%] ">
//       some more beautifull
// </h1>
