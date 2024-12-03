import Image from "next/image";
import Link from "next/link";
import { MdPhone } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

export default function Navbar() {
    return (
    <header className="">
        <nav className=" h-[100px]  font-poppins">
            <div className="">
                <div className="bg-[#AF1837] h-[30px]  flex max-sm:hidden">
                    <div className="container flex  justify-between items-center w-full">
                        <div className="flex  content-center">
                            <div className="flex  mr-4 gap-2">
                                <MdPhone />
                                <span className="">0777777777</span>
                            </div>
                            <div className="flex gap-2">
                                <IoMdMail />
                                <span>test@gmail.com</span>
                            </div>
                        </div>
                        <div className="flex gap-2">
                                <IoLocationSharp />
                                <span>db tazi casablanca</span>
                        </div>
                    </div>
                </div>
                <div className="bg-white h-[70px] flex max-sm:h-[100px] ">
                    <div className="container flex flex-column justify-between items-center mx-[120px] w-full">
                        <Link href="/">
                            <Image src={"/Logo/Cafge_logo.svg"}  alt="logo of Cafge accountant firm" width={128} height={64}></Image> 
                        </Link>
                        <div className="">
                            <ul className="flex flex-column items-center max-md:hidden">
                                <Link href="/" scroll={true}><li>Accueil</li></Link>
                                <Link href="#About" scroll={true}><li className="ml-4 ">A propos</li></Link>
                                <Link href="#Services" scroll={true}><li className="ml-4 ">Services</li></Link>
                                <Link href="/Partners"><li className="ml-4 ">Partenaires</li></Link>
                                <Link href=""><li className="ml-4 ">Blog</li></Link>
                                <Link href="#Contact" scroll={true}><li className="ml-4"><button className="border border-solid px-2 py-3 bg-[#AF1837] text-white">contactez-nous</button></li></Link>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    );
  }