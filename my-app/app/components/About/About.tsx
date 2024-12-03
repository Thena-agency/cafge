import Image from "next/image";
import Factsbar from "../Factsbar/Factsbar";

export default function About() {
    return (
        <section className="w-full" id="About">
            <div className="container flex justify-between my-[60px] max-lg:flex-col max-sm:items-center">
                <div className="w-3/6 mr-12 max-lg:w-full max-lg:mx-0">
                    <div className="title flex items-center">
                        <div className="w-[8rem] h-[3px] bg-ruby mr-8"></div>
                        <h2 className=" text-[3rem] text-ruby max-xs:text-[2.5rem] ">About US</h2>
                    </div>
                    <div className="my-8 max-lg:h-auto">
                        <div className="mb-12 max-lg:mb-8">
                            <h3 className="text-ruby text-[2.5rem] mb-8 max-xs:text-[2rem] max-xs:mb-8 ">Le Lorem Ipsum est simplement du faux texte employé</h3>
                            <p className="text-[1.5rem] max-lg:text-[1.25rem] ">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500,</p>

                        </div>
                        <button className="border border-solid py-4 px-3 text-[1.5rem] max-w-60 bg-ruby text-white rounded-lg">contactez-nous</button>
                    </div>
                </div>
                <div className="w-3/6 h-[600px] relative max-xl:h-[475px] max-lg:w-full max-sm:h-[325px]">
                    <div className="h-[475px] w-[475px] max-xl:h-[375px] max-xl:w-[375px] max-lg:h-[475px] max-lg:w-[475px] max-sm:w-[325px] max-sm:h-[325px] bg-[url('/Images/Cafge_about.png')] bg-contain bg-center bg-no-repeat absolute bottom-0 left-0 z-10 max-sm:left-[50%] max-sm:translate-x-[-50%]">
                    </div>
                    <div className="h-[475px] max-xl:h-[375px] w-[475px] max-xl:w-[375px] bg-[url('/Images/About_pattern.png')] bg-contain bg-center bg-no-repeat absolute top-0 right-0 max-lg:hidden">
                    </div>
                </div>
            </div>
        </section>
    );
  }