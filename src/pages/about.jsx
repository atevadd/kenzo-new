import Image from "next/image";
import PageLayout from "@/layout/page-layout";

// const inter = Inter({ subsets: ["latin"] });

export default function Home()
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
            </PageLayout>
      );
}
