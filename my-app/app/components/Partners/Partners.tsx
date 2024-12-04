import Image from "next/image";
import Partner from "../Partner/Partner";
import { fetchPagesPartners } from "@/lib/notion";

export default async function Partners_list() {
	const posts = await fetchPagesPartners();
	console.log("yoo222 ", posts.results);

	return (
		<section className="w-full">
			<div className="container grid grid-cols-5 my-12 gap-4 max-xl:grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-2 max-xs:flex max-xs:flex-col max-xs:items-center">
				{posts.results.map((post) => {
					return (
						<article key={post.id}>
							<Partner post={post} />
						</article>
					);
				})}
			</div>
		</section>
	);
}
