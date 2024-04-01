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
                  <div className=" w-full h-full min-h-screen px-12 p-6 about">
                        <div className="header flex justify-between items-center ">
                              <h1 className="header1 uppercase text-[64px] text-right leading-[90%] font-fira font-medium italic">About</h1>
                        </div>

                        <div className="w-full br mt-6 h-[500px] bg-red-200 about-banner"></div>

                        <div className="w-full flex justify-between items-start mt-20">
                              <div className="w-auto font-medium">
                                    <h2 className="header2 text-[24px]">Kenzo</h2>
                                    <h2 className="header2 text-[24px]">MUSIC PROMOTION</h2>
                              </div>

                              <div className="w-1/2 text-left flex flex-col gap-6">
                                    <p className="font-medium text-sm text-neitral-600">
                                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum impedit voluptatem ipsam numquam
                                          expedita, aperiam tempore, ad totam doloribus quaerat reiciendis quibusdam dolore corporis inventore illo
                                          quia voluptas molestiae. Fugiat.
                                    </p>

                                    <p className="font-medium text-sm text-neitral-600">
                                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum impedit voluptatem ipsam numquam
                                          expedita, aperiam tempore, ad totam doloribus quaerat reiciendis quibusdam dolore corporis inventore illo
                                          quia voluptas molestiae. Fugiat.
                                    </p>
                              </div>
                        </div>
                  </div>

                  <div className="w-ful h-auto flex justify-between items-start my-20 px-12">
                        <div className="w-[250px] h-[250px] bg-neutral-500 shadow"></div>

                        <div className="w-1/2 text-left flex flex-col gap-6">
                              <div className="w-full font-medium">
                                    <div className="hero-text overflow-hidden w-full flex justify-start">
                                          <motion.h1 className="header1 uppercase text-[64px] text-left pr-16 hero_main-text">pictures</motion.h1>
                                    </div>
                                    <div className="hero-text overflow-hidden flex w-full justify-end">
                                          <motion.h1 className="header1 uppercase text-[64px] italic">to tell stories</motion.h1>
                                    </div>
                              </div>
                        </div>
                  </div>

                  <section className="w-full min-h-[400px] gap-8  flex justify-between items-center px-12 bg-neutral-800">
                        <div className="section-text  w-[60%]">
                              <div className="words text-white space-y-2">
                                    <h1 className="header1 uppercase text-[84px] w-full text-left leading-[90%] ">our company </h1>
                                    <div className="w-full text-right  flex justify-end italic">
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
                                    <h1 className="link_text font-semibold underline text-neutral-300 uppercase mt-8">
                                          Work with us
                                    </h1>
                              </Link>
                        </div>
                  </section>
            </PageLayout>
      );
}
