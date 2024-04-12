import Image from "next/image";
import PageLayout from "@/layout/page-layout";
import anim, { image_down, text_up_in } from "@/lib/animations";
import { motion } from 'framer-motion';
import { Magnetic } from "@/components/magnetic";
import About from "@/components/about-us";
import Gallery from "@/components/gallery";
import Hero from "@/sections/hero";
import Services from "@/sections/services";
import Contact from "@/components/contact";
import { useEffect } from "react";


// const inter = Inter({ subsets: ["latin"] });
{/*<Tour />*/ }



function Home()
{
      return (
            <PageLayout>
                  <Hero />
                  <Gallery />
                  <About />
                  <Services />
                  <Contact />
            </PageLayout>
      );
}

// <h1 className="header1 uppercase text-[24px] italic leading-[90%] ">
//       some more beautifull
// </h1>



const HomePage = () =>
{
      return <div data-scroll-container>
            <Home />
      </div>
}


export default HomePage