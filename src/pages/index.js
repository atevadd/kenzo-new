import PageLayout from "@/layout/page-layout";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Image } from 'next/image';
import { useRouter } from "next/router";

export default function Home()
{
  const [preloading, setPreloading] = useState(true)
  const router = useRouter()

  useEffect(() =>
  {

    setTimeout(() =>
    {
      setPreloading(false)
      router.push('/home')
    }, 2000);


  }, [])




  return (
    <PageLayout>
      <div className="w-screen h-screen grid place-content-center bg-black z-50">
        <img className="animate-pulse" src="/logo2-crop.png" width={200} height={100} alt="logo" />
      </div>
    </PageLayout>

  );
}
