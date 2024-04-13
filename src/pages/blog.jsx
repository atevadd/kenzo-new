import Image from "next/image";
import PageLayout from "@/layout/page-layout";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionTitle from "@/components/sectiion-title";
import HorizontalLine from "@/components/full-horizontal-line";

// const inter = Inter({ subsets: ["latin"] });

export default function Blog()
{
	return (
		<PageLayout>
			<div className="w-full h-full min-h-screen p-6 px-12 about">
				<SectionTitle titleLable={"Blog"} linkUrl={"/"} linkLabel={"Tours"} />

				<div className="blog-section">
					<div className="relative w-full pb-8 blog_title-container">
						<div className="blog_title-content text-[80px] font-fira -space-y-6 w-[600px]">
							<h1 className="text-black leading-[100%]">Creating a Function home office space.</h1>
						</div>

						<div className="absolute right-6 top-8">
							<div className="w-auto p-3 font-medium border border-neutral-500">
								<h2 className="header2 text-[24px]">Kenzo</h2>
								<h2 className="header2 text-[24px]">MUSIC PROMOTION</h2>
							</div>
						</div>

						<HorizontalLine className={"absolute  w-full h-[2px] bg-neutral-400 bottom-0 left-0"} />
					</div>

					<div className="mt-4 blog_body-container  w-[70%] mx-auto pb-12">
						<div className="flex items-center justify-between w-full py-1 blog-author-date">
							<div className="flex gap-6">
								<h2 className="text-sm font-neutral-500">bobbydev</h2>
								<h2 className="text-sm font-neutral-500">August 24, 2023</h2>
							</div>

							<h2 className="text-sm font-neutral-500">23 comments</h2>
						</div>

						<div className="w-full h-[400px] bg-neutral-500 mt-6"></div>

						<div className="text-left blog_content">
							<h1 className="mt-8 text-4xl font-medium title">
								this is the title of the blog and can be edited to suit your pref this is the title of the blog
							</h1>

							<p className="mt-6 font-medium">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolores ipsam blanditiis qui sunt
								facere, dicta omnis nesciunt, nostrum nulla corporis totam vel aliquid quae deleniti suscipit sapiente
								pariatur minus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolores ipsam
								blanditiis qui sunt facere, dicta omnis nesciunt, nostrum nulla corporis totam vel aliquid quae deleniti
								suscipit sapiente pariatur minus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
								dolores ipsam blanditiis qui sunt facere, dicta omnis nesciunt, nostrum nulla corporis totam vel aliquid
								quae deleniti suscipit sapiente pariatur minus? Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Adipisci dolores ipsam blanditiis qui sunt facere, dicta omnis nesciunt, nostrum nulla corporis totam
								vel aliquid quae deleniti suscipit sapiente pariatur minus?
							</p>

							<br />

							<p className="mt-6 font-medium">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolores ipsam blanditiis qui sunt
								facere, dicta omnis nesciunt, nostrum nulla corporis totam vel aliquid quae deleniti suscipit sapiente
								pariatur minus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolores ipsam
								blanditiis qui sunt facere, dicta omnis nesciunt, nostrum nulla corporis totam vel aliquid quae deleniti
								suscipit sapiente pariatur minus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
								dolores ipsam blanditiis qui sunt facere, dicta omnis nesciunt, nostrum nulla corporis totam vel aliquid
								quae deleniti suscipit sapiente pariatur minus? Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Adipisci dolores ipsam blanditiis qui sunt facere, dicta omnis nesciunt, nostrum nulla corporis totam
								vel aliquid quae deleniti suscipit sapiente pariatur minus?
							</p>
						</div>

						<hr className="w-full mt-6" />

						<div className="flex justify-start w-auto mt-6">

							<div className="p-4 space-y-4 border border-neutral-200">

								<p className="font-medium font-fira">Next</p>
								<h1 className="text-2xl font-medium label">How we manage artist in the studio.</h1>

								<div className="space-x-4 next">
									<p className="underline next_label">Read more </p>

								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</PageLayout>
	);
}
