import { fetchBySlug, fetchPageBlocks, notionBlogs } from "@/lib/notion";
import React from "react";
import { notFound } from "next/navigation";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";

export default async function page({ params }: { params: { slug: string } }) {
	const post = await fetchBySlug(params.slug);
	if (!post) {
		return notFound();
	}

	const blocks = await fetchPageBlocks(post.id);

	const renderer = new NotionRenderer({
		client: notionBlogs,
	});

	renderer.use(hljsPlugin({}));
	renderer.use(bookmarkPlugin(undefined));

	const html = await renderer.render(...blocks);

	return (
		<>
		<Navbar />
		<div className="prose container min-h-[80dvh]" dangerouslySetInnerHTML={{ __html: html }}>

		</div>
		<Footer />
		</>
	);
}
