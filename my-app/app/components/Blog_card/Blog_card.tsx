import Image from "next/image";
import Link from "next/link";

// export default function Blog_card(post: pages_result) {

// if you want to use homemade type bc the built-in type is bugy you need to put all the proprities
export default function Blog_card({ post }: any) {
	// console.log("aaa: ", post);
	let Slug: string =
		"blogs/" + post.properties.slug?.rich_text?.[0]?.plain_text;

	const Title: string | null = post.properties.Title.title[0].plain_text;
	const coverImg: string =
		post.cover && "file" in post.cover
			? post.cover.file.url
			: "/Images/Cafge_blogs.png";

	return (
		<Link
			key={post}
			href={Slug}
			className="w-[240px] h-[200px]  relative max-md:w-[200px] max-md:h-[160px] max-xs:w-[240px] max-xs:h-[200px]"
		>
			<Image
				unoptimized
				src={coverImg}
				fill={true}
				alt="Cafge"
				className="-z-10"
			/>
			<div className="flex items-end h-full pb-12 pl-2 ">
				<h3 className="text-[1.25rem] text-blue-700">
					{Title ? Title : "Blog Title"}
				</h3>
			</div>
		</Link>
	);
}
