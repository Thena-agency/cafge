import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import Blog_list from "../components/Blog_list/Blog_list";

export default async function Blog() {
	
	//   console.log('yoo ', posts.results[1]);

	return (
		<div className="">
			<Navbar />
			<Hero />
			<Blog_list />
			<Footer />
		</div>
	);
}
