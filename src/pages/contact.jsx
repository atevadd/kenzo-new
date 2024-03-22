import Image from "next/image";
import PageLayout from "@/layout/page-layout";


// const inter = Inter({ subsets: ["latin"] });

export default function Home()
{
      return (
            <PageLayout>
                  <main className={` min-h-screen`}>
                        <div className="w-full p-11">
                              <h1 className="font-semibold capitalize">contact</h1>

                              <div className="mt-6 flex justify-between items-start text-2xl">
                                    <p className="text-left">
                                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio quod, officia a enim ut, iusto,
                                          repellendus sed fugiat eius qui id animi cupiditate incidunt. Eaque excepturi voluptate velit quae cumque!
                                    </p>

                                    <p className="text-left">
                                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio quod, officia a enim ut, iusto,
                                          repellendus sed fugiat eius qui id animi cupiditate incidunt. Eaque excepturi voluptate velit quae cumque!
                                    </p>
                              </div>
                        </div>
                  </main>
            </PageLayout>
      );
}
