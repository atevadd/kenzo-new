// import Image from "next/image";
import PageLayout from "@/layout/page-layout";
import { motion } from "framer-motion";
// import { Link } from 'next/link';
import Link from "next/link";

// const inter = Inter({ subsets: ["latin"] });

export default function AboutUs()
{
      return (
            <PageLayout>
                  <div className="w-full h-full min-h-screen p-6 px-12  about">
                        <div className="flex items-center justify-between header ">
                              <h1 className="header1 uppercase text-[64px] text-right leading-[90%] font-fira font-medium italic">About</h1>
                        </div>

                        <div className="w-full br mt-6 h-[500px] bg-red-200 about-banner"></div>

                        <div className="flex items-start justify-between w-full mt-20">
                              <div className="w-auto font-medium">
                                    <h2 className="header2 text-[24px]">Kenzo</h2>
                                    <h2 className="header2 text-[24px]">MUSIC PROMOTION</h2>
                              </div>

                              <div className="flex flex-col w-1/2 gap-6 text-left">
                                    <p className="text-sm font-medium text-neitral-600">
                                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum impedit voluptatem ipsam numquam
                                          expedita, aperiam tempore, ad totam doloribus quaerat reiciendis quibusdam dolore corporis inventore illo
                                          quia voluptas molestiae. Fugiat.
                                    </p>

                                    <p className="text-sm font-medium text-neitral-600">
                                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum impedit voluptatem ipsam numquam
                                          expedita, aperiam tempore, ad totam doloribus quaerat reiciendis quibusdam dolore corporis inventore illo
                                          quia voluptas molestiae. Fugiat.
                                    </p>
                              </div>
                        </div>
                  </div>

                  <div className="flex items-start justify-between h-auto px-12 my-20 w-ful">
                        <div className="w-[250px] h-[250px] bg-neutral-500 shadow"></div>

                        <div className="flex flex-col w-1/2 gap-6 text-left">
                              <div className="w-full font-medium">
                                    <div className="flex justify-start w-full overflow-hidden hero-text">
                                          <motion.h1 className="header1 uppercase text-[64px] text-left pr-16 hero_main-text">pictures</motion.h1>
                                    </div>
                                    <div className="flex justify-end w-full overflow-hidden hero-text">
                                          <motion.h1 className="header1 uppercase text-[64px] italic">to tell stories</motion.h1>
                                    </div>
                              </div>
                        </div>
                  </div>

                  <section className="w-full min-h-[400px] gap-8  flex justify-between items-center px-12 bg-neutral-800">
                        <div className="section-text  w-[60%]">
                              <div className="space-y-2 text-white words">
                                    <h1 className="header1 uppercase text-[84px] w-full text-left leading-[90%] ">our company </h1>
                                    <div className="flex justify-end w-full italic text-right">
                                          <h1 className="header1 uppercase text-[84px] w-auto text-right leading-[90%] hero_main-text hero_main-text-two">values</h1>
                                    </div>
                              </div>

                        </div>

                        <div className="w-[40%] p-6">
                              <p className="text-sm font-medium text-neutral-500">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sed excepturi hic quos. Blanditiis numquam
                                    delectus, dicta aut ullam velit asperiores, nobis magnam eveniet maiores rerum tenetur officia sit iusto.
                                    dicta aut ullam velit asperiores, nobis magnam eveniet maiores rerum tenetur officia sit iusto.
                                    dicta aut ullam velit asperiores, nobis magnam eveniet maiores rerum tenetur officia sit iusto.
                              </p>

                              <Link href="/home">
                                    <h1 className="mt-8 font-semibold underline uppercase link_text text-neutral-300">
                                          Work with us
                                    </h1>
                              </Link>
                        </div>
                  </section>
            </PageLayout>
      );
}
