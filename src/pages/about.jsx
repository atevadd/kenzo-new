// import Image from "next/image";
import PageLayout from "@/layout/page-layout";
import { motion } from "framer-motion";
// import { Link } from 'next/link';
import Link from "next/link";

// const inter = Inter({ subsets: ["latin"] });

export default function AboutUs() {
  return (
    <PageLayout>
      <div className="w-full h-full min-h-screen p-6 px-12  about">
        <div className="flex items-center justify-between header ">
          <h1 className="header1 uppercase text-[64px] text-right leading-[90%] font-fira font-medium italic">
            Kenzo
          </h1>
          <h1 className="header1 uppercase text-[64px] text-right leading-[90%] font-fira font-medium italic">
            About
          </h1>
        </div>

        <div className="w-full br mt-6 h-[500px] bg-red-200 about-banner"></div>

        <div className="flex relative min-h-screen items-start justify-between w-full mt-20">
          <div className="w-auto font-medium self-start sticky top-0">
            <h2 className="header2 text-[28px]">Kenzo</h2>
            <h2 className="header2 text-[28px]">The Great Productions</h2>
          </div>

          <div className="flex flex-col w-1/2 gap-4 text-left">
            <h2 className="font-bold">Mission & Values</h2>
            <p className="text-sm font-normal leading-6 text-neutral-600">
              Our commitment to excellence, creativity, and artist empowerment.
              At Kenzo The Great Productions, we embody a mission rooted in
              excellence, fueled by creativity, and dedicated to artist
              empowerment. We believe in fostering a creative environment where
              talent thrives, pushing boundaries, and setting new standards of
              excellence. Our commitment extends to empowering artists with the
              tools, resources, and opportunities they need to shine on the
              international stage.
            </p>

            <h2 className="font-bold">Global Presence and Expertise</h2>
            <p className="text-sm font-normal leading-6 text-neutral-600">
              Based in Atlanta, GA, Kenzo The Great Productions operates as a
              global talent management company with a primary focus on artists
              from Africa and the USA. Our reach extends far beyond borders,
              enabling us to handle talents worldwide. We take pride in our
              ability to secure bookings and visas for our artists in key
              international markets, including the USA, UK, Australia, South
              Africa, France, Kenya, and Dubai.
            </p>

            <h2 className="font-bold">Comprehensive Services</h2>
            <p className="text-sm font-normal leading-6 text-neutral-600">
              Our services go beyond talent representation. We specialize in
              organizing and executing seamless international tours, ensuring
              our artists captivate audiences across continents. Additionally,
              we navigate the complexities of obtaining visas, facilitating
              smooth entry for our talents into diverse regions.
            </p>

            <h2 className="font-bold">Media Tours and Content Placement</h2>
            <p className="text-sm font-normal leading-6 text-neutral-600">
              Kenzo The Great Productions is not just a talent management
              agency; we are architects of strategic media tours and content
              placement. Leveraging our extensive network, we curate
              opportunities for our artists to engage with diverse audiences,
              secure media coverage, and strategically place content for maximum
              impact.
            </p>
            <h2 className="font-bold">Expansive Network</h2>
            <p className="text-sm font-normal leading-6 text-neutral-600">
              Our success is fueled by a vast and continually expanding network.
              We have established strong connections in the entertainment
              industry, forging partnerships that open doors for our artists.
              This network is the backbone of our ability to create unparalleled
              opportunities and elevate our talents to new heights.
            </p>
            <p className="text-sm font-normal leading-6 text-neutral-600">
              As we continue to grow, our commitment to excellence, creativity,
              and artist empowerment remains unwavering. Join us on this
              journey, where dreams are not just imagined but brought to life
              with Kenzo The Great Productions.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-start justify-between h-auto px-12 my-20 w-ful">
        <div className="w-[250px] h-[250px] bg-neutral-500 shadow"></div>

        <div className="flex flex-col w-1/2 gap-6 text-left">
          <div className="w-full font-medium">
            <div className="flex justify-start w-full overflow-hidden hero-text">
              <motion.h1 className="header1 uppercase text-[64px] text-left pr-16 hero_main-text">
                pictures
              </motion.h1>
            </div>
            <div className="flex justify-end w-full overflow-hidden hero-text">
              <motion.h1 className="header1 uppercase text-[64px] italic">
                to tell stories
              </motion.h1>
            </div>
          </div>
        </div>
      </div>

      <section className="w-full min-h-[400px] gap-8  flex justify-between items-center px-12 bg-neutral-800">
        <div className="section-text  w-[60%]">
          <div className="space-y-2 text-white words">
            <h1 className="header1 uppercase text-[84px] w-full text-left leading-[90%] ">
              our company{" "}
            </h1>
            <div className="flex justify-end w-full italic text-right">
              <h1 className="header1 uppercase text-[84px] w-auto text-right leading-[90%] hero_main-text hero_main-text-two">
                values
              </h1>
            </div>
          </div>
        </div>

        <div className="w-[40%] p-6">
          <p className="text-sm font-medium text-neutral-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sed
            excepturi hic quos. Blanditiis numquam delectus, dicta aut ullam
            velit asperiores, nobis magnam eveniet maiores rerum tenetur officia
            sit iusto. dicta aut ullam velit asperiores, nobis magnam eveniet
            maiores rerum tenetur officia sit iusto. dicta aut ullam velit
            asperiores, nobis magnam eveniet maiores rerum tenetur officia sit
            iusto.
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
