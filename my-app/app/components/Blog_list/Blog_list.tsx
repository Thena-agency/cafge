import Image from "next/image";
import Blog_card from "../Blog_card/Blog_card";
import { fetchPages } from "@/lib/notion";

export default async function Blog_list() {
    const posts = await fetchPages();

    return (
        <section className="w-full">
            <div className="container grid grid-cols-5 my-12 gap-4 max-xl:grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-2 max-xs:flex max-xs:flex-col max-xs:items-center">
			{posts.results.map((post) => {
				return (
					<article key={post.id} className="w-[240px] h-[200px] relative max-md:w-[200px] max-md:h-[160px] max-xs:w-[240px] max-xs:h-[200px]">
						<Blog_card post={post} />
					</article>
				);
			})}
            </div>
        </section>
    );
  }