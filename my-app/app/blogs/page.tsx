import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import Blog_card from "../components/Blog_card/Blog_card";
import { fetchPages, notion } from "@/lib/notion";

export default async function Blog() {
  const posts = await fetchPages();
//   console.log('yoo ', posts.results[1]);
  

	return (
		<div className="">
			<Navbar />
			<Hero />
			{posts.results.map((post) => {
				return (
					<Blog_card post={post}  />
				)
			})}
			<Footer />
		</div>
	);
}
