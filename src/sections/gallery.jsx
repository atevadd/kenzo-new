import Image from "next/image";
import PageLayout from "@/layout/page-layout";
import anim, { image_down } from "@/lib/animations";
import { motion } from "framer-motion";
import { Magnetic } from "@/components/magnetic";
import StarggerText from "../components/stargger-text";
import HorizontalLine from "../components/full-horizontal-line";

// const inter = Inter({ subsets: ["latin"] });

{
  /* __ */
}

export default function Gallery() {
  return (
    <section className="w-full min-h-screen py-20 pb-40">
      <div className="w-full h-full min-h-screen p-6 px-12  about">
        <div className="header flex justify-between font-medium  items-center header1 uppercase text-[64px] text-right leading-[90%]">
          {/* _<h1 className="font-jb-mono">Gallery</h1>_ */}

          <StarggerText main_text={"Events"} className="font-jb-mono" />
          {/* <h1 className="italic  font-fira">Artist</h1> */}
        </div>

        {/* _tool bar_ */}
        <div className="relative flex items-center justify-between w-full py-4">
          {/* <button className="font-semibold uppercase font-jb">prev</button>

          <div className="p-1 counts">
            <h1 className="font-mono italic uppercase text-neutral-400">
              All(89)
            </h1>
          </div>

          <button className="font-semibold uppercase font-jb">next</button> */}

          <HorizontalLine
            className={
              "absolute  w-full h-[2px] bg-neutral-400 bottom-0 left-0"
            }
          />
        </div>

        {/* Picture slides_ */}
        <div className="grid w-full h-[500px] grid-cols-2 gap-12 mt-8">
          <div className="w-full h-full bg-red-200">
            <div
              style={{
                backgroundImage: "url('/image3.jpeg')",
              }}
              className="w-full h-full image_box bg-neutral-500"
            ></div>

            <div className="flex justify-between w-full py-2 mt-3">
              <div className="flex flex-col h-full text_box text-neutral-700">
                <h2 className="text-xl font-semibold uppercase header2 font-fira ">
                  Feel the kenzo moment and grand launching.
                </h2>
                <p className="header2 font-fira">
                  Limited time offer to purchase this ticket
                </p>
              </div>

              <div className="date_box text-[34px] font-bold font-jb-mono tracking-normal h-full">
                10 / 23
              </div>
            </div>
          </div>
          <div className="w-full h-full bg-red-200">
            <div
              style={{
                backgroundImage: "url('/image5.jpeg')",
              }}
              className="w-full h-full image_box bg-neutral-500"
            ></div>

            <div className="flex justify-between w-full py-2 mt-3">
              <div className="flex flex-col h-full text_box text-neutral-700">
                <h2 className="text-xl font-semibold uppercase header2 font-fira ">
                  Feel the kenzo moment and grand launching.
                </h2>
                <p className="header2 font-fira">
                  Limited time offer to purchase this ticket
                </p>
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
