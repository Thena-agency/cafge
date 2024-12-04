import Image from "next/image";

export default function Partner({ post }: any) {
	console.log("ana: ", post);
	const Tag: string | null = post.properties.Tags.multi_select[0].name;
	const Title: string | null = post.properties.Name.title[0].plain_text;
	const coverImg: string =
		post.cover && "file" in post.cover
			? post.cover.file.url
			: "/logo/Cafge_logo.svg";

	return (
		<div className="w-[240px] h-[200px] border border-solid border-ruby rounded-2xl relative max-md:w-[200px] max-md:h-[160px] max-xs:w-[240px] max-xs:h-[200px]">
			<Image
				unoptimized
				src={coverImg}
				height={120}
				width={160}
				alt="Cafge logo"
				className="absolute top-[35%] left-[50%] translate-x-[-50%] "
			/>
			<div className="flex gap-4 flex-col justify-end h-full p-4">
				<h3 className="text-[1.25rem]">{Title}</h3>
				<p className="text-[1rem]">{Tag}</p>
			</div>
		</div>
	);
}
