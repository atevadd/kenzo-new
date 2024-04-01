import Image from "next/image";
import PageLayout from "@/layout/page-layout";
import anim, { image_down } from "@/lib/animations";
import { motion } from "framer-motion";
import { Magnetic } from "@/components/magnetic";

// const inter = Inter({ subsets: ["latin"] });

{/* __ */ }

export default function Contact()
{
      return (
            <section className="w-full min-h-screen px-12 p-6 contact  flex items-center">
                  <div className=" w-full h-full">



                        {/* _form_ */}
                        <div className="w-full grid grid-cols-3 gap-6 h-[600px]  mt-8">

                              <div className="form_box flex flex-col justify-between items-start col-span-2  ">
                                    <div className="header_text-box space-y-8">
                                          <h1 className="header1 uppercase text-[84px] w-full text-left leading-[90%] ">Do not let your </h1>
                                          <h1 className="header1 uppercase text-[84px] w-full text-left leading-[90%] "> <i>Memories</i> just </h1>
                                          <h1 className="header1 uppercase text-[84px] w-full text-left leading-[90%] ">Passing Away </h1>
                                    </div>


                                    <div className="email_form w-[70%] h-[150px] flex flex-col justify-between">
                                          <div className="header_text-box">
                                                <h2 className="header2 text-xl font-semibold uppercase font-fira ">Stay updated for promo</h2>

                                                <h2 className="header2 text-xl font-semibold uppercase font-fira ">Subscribe to our news letter.</h2>
                                          </div>

                                          <div className="imput">
                                                <form action="" className="wfull h-16 relative">

                                                      <input type="text" name="email" placeholder="enter your email address" id="" className=" border-b text-sm font-mono full border-neutral-600" />

                                                      <button className="absolute right-0 p-2 px-3 text-neutral-100  uppercase bg-black top-1/2 -translate-y-1/2">
                                                            submit
                                                      </button>

                                                </form>

                                          </div>

                                    </div>

                              </div>

                              <div className="w-full h-full bg-neutral-200  ">

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
