import Image from "next/image";
import Testimonial from "../utils/Testimonial/Testimonial";


export default function Testimonials() {
    return (
        <section className="w-full h-[100dvh]">
            <div className="container ">
                <div className="w-full">
                    <div className="mt-[60px] title flex items-center">
                        <div className="w-[8rem] h-[3px] bg-ruby mr-8"></div>
                        <h2 className="text-[3rem] text-ruby">Testimonials</h2>
                    </div>
                    <div className="">
                        <h3 className="text-ruby text-[2.5rem] my-12 font-[600]">Le Lorem Ipsum est simplement <br/> du faux texte employé</h3>
                        <div className=" flex justify-between">
                            <Testimonial></Testimonial>
                            <Testimonial></Testimonial>
                            <Testimonial></Testimonial>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }