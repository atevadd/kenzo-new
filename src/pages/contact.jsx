import Image from "next/image";
import PageLayout from "@/layout/page-layout";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionTitle from "@/components/sectiion-title";
import ContactSection from "@/sections/contact-section";

// const inter = Inter({ subsets: ["latin"] });

export default function Contact()
{
      return (
            <PageLayout>
                  <ContactSection line={true} comp={<ContactBanner />} />
            </PageLayout>
      );
}

// <SectionTitle titleLable={"Contact"} linkUrl={"/"} linkLabel={"Tours"} />

function ContactBanner()
{
      return (
            <div className="w-full py-3 my-6">
                  <div className="w-full mt-6 h-[400px]  contact-banner"></div>
            </div>
      );
}
