import Image from "next/image";
import Factsbar from "../Factsbar/Factsbar";

export default function About() {
    return (
        <section className="w-full h-[100dvh] flex flex-col justify-between">
            <div className=" mx-[120px]  flex justify-between">
                <div className="w-3/6">
                    <div className="title flex items-center mt-[60px] ">
                        <div className="w-[8rem] h-[3px] bg-ruby mr-8"></div>
                        <h2 className=" text-[3rem] text-ruby">About US</h2>
                    </div>
                    <div className="flex flex-col justify-between h-[60dvh] ml-16 my-8">
                        <div>
                            <h3 className="text-ruby text-[2.5rem] mb-8">Le Lorem Ipsum est simplement du faux texte employé</h3>
                            <p className="text-[1.5rem]">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500,</p>

                        </div>
                        <button className="border border-solid py-4 px-3 max-w-52 text-[1.75rem] bg-ruby text-white rounded-lg">contactez-nous</button>
                    </div>
                </div>
                <div className=" mx-[120px] w-3/6 relative">
                    <div className="h-5/6 w-5/6  bg-[url('/Images/Cafge_about.png')] bg-contain bg-center bg-no-repeat absolute bottom-0 left-0 z-10">
                    </div>
                    <div className="h-5/6 w-5/6  bg-[url('/Images/About_pattern.png')] bg-contain bg-center bg-no-repeat absolute top-0 right-0">
                    </div>
                </div>
            </div>
            <Factsbar/>
        </section>
    );
  }