import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Why_Us from "./components/Why Us/Why_Us";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Hero />
      <About />
      <Services />
      <Why_Us />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
