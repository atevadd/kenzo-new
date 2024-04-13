import Image from "next/image";
import PageLayout from "@/layout/page-layout";
import anim, { image_down, text_up_in } from "@/lib/animations";
import { motion } from 'framer-motion';
import { Magnetic } from "@/components/magnetic";
import About from "@/components/about-us";
import Gallery from "@/sections/gallery";
import Hero from "@/sections/hero";
import Services from "@/sections/services";
import Contact from "@/sections/contact-section";
import { useEffect } from "react";

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


const HomePage = () =>
{
      return <div data-scroll-container>
            <Home />
      </div>
}


export default HomePage