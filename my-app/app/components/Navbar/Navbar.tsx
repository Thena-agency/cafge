import Image from "next/image";
import Link from "next/link";
import { MdPhone } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

export default function Navbar() {
    return (
    <header className="">
        <nav className=" h-[10dvh]  font-poppins">
            <div className="">
                <div className="bg-[#AF1837] h-[3dvh]  flex max-sm:hidden">
                    <div className="container flex  justify-between items-center w-full">
                        <div className="flex  content-center">
                            <div className="flex  mr-4">
                                <MdPhone />
                                <span className="">0777777777</span>
                            </div>
                            <div className="flex ">
                                <IoMdMail />
                                <span>test@gmail.com</span>
                            </div>
                        </div>
                        <div className="flex ">
                                <IoLocationSharp />
                                <span>db tazi casablanca</span>
                        </div>
                    </div>
                </div>
                <div className="bg-white h-[7dvh] flex max-sm:h-[10dvh] ">
                    <div className="container flex flex-column justify-between items-center mx-[120px] w-full">
                        <div className="">
                            <Image src={"/Logo/Cafge_logo.svg"}  alt="logo of Cafge accountant firm" width={128} height={64}></Image> 
                        </div>
                        <div className="">
                            <ul className="flex flex-column items-center max-md:hidden">
                                <li>Accueil</li>
                                <li className="ml-4 ">A propos</li>
                                <li className="ml-4 ">Services</li>
                                <li className="ml-4 ">Partenaires</li>
                                <li className="ml-4 ">Blog</li>
                                <li className="ml-4"><button className="border border-solid px-2 py-3 bg-[#AF1837] text-white">contactez-nous</button></li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    );
  }