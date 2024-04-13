import Image from "next/image";
import PageLayout from "@/layout/page-layout";
import anim, { image_down } from "@/lib/animations";
import { motion } from "framer-motion";
import { Magnetic } from "@/components/magnetic";
import StarggerText from "@/components/stargger-text";
import SectionTitle from "@/components/sectiion-title";
// const inter = Inter({ subsets: ["latin"] });

{
      /* __ */
}

export default function ContactSection({ comp })
{
      return (
            <section className="flex items-center w-full min-h-screen p-6 px-12 contact">
                  <div className="w-full h-full ">
                        <SectionTitle titleLable={"Contact"} linkUrl={"/"} linkLabel={"News"} line={true} />

                        {
                              comp && comp
                        }

                        {/* _form_ */}
                        <div className="w-full grid grid-cols-3 gap-6 h-[600px]  mt-8">
                              <div className="flex flex-col items-start justify-between col-span-2 form_box ">
                                    <div className="space-y-8 header_text-box">
                                          <h1 className="header1 uppercase text-[84px] w-full text-left leading-[90%] ">Do not let your </h1>
                                          <h1 className="header1 uppercase text-[84px] w-full text-left leading-[90%] ">
                                                {" "}
                                                <i>Memories</i> just{" "}
                                          </h1>
                                          <h1 className="header1 uppercase text-[84px] w-full text-left leading-[90%] ">Passing Away </h1>
                                    </div>

                                    <div className="email_form w-[70%] h-[150px] flex flex-col justify-between">
                                          <div className="header_text-box">
                                                <h2 className="text-xl font-semibold uppercase header2 font-fira ">Stay updated for promo</h2>

                                                <h2 className="text-xl font-semibold uppercase header2 font-fira ">Subscribe to our news letter.</h2>
                                          </div>

                                          <div className="imput">
                                                <form action="" className="relative h-16 wfull">
                                                      <input
                                                            type="text"
                                                            name="email"
                                                            placeholder="enter your email address"
                                                            id=""
                                                            className="font-mono text-sm border-b full border-neutral-600"
                                                      />

                                                      <button className="absolute right-0 p-2 px-3 uppercase -translate-y-1/2 bg-black text-neutral-100 top-1/2">
                                                            submit
                                                      </button>
                                                </form>
                                          </div>
                                    </div>
                              </div>

                              <div className="w-full h-full bg-neutral-200 "></div>
                        </div>
                  </div>
            </section>
      );
}

// <img src="/image1.jpeg" alt="" className="w-full h-[500px] object-cover " />
// <h1 className="header1 uppercase text-[24px] italic leading-[90%] ">
//       some more beautifull
// </h1>
