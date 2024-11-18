import Image from "next/image";
import { SlSocialFacebook } from "react-icons/sl";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineLinkedin } from "react-icons/ai";
import { PiLinkedinLogoLight } from "react-icons/pi";
import { TbBrandLinkedin } from "react-icons/tb";




export default function Contact() {
    return (
        <section className="w-full h-[90dvh]">
            <div className="mx-[120px]">
                <div>
                    <div className="w-2/5">
                        <div>
                            <h2 className="text-[3rem] text-ruby mb-8"> Let's Talk</h2>
                            <p className="">We collaborate with thousands of creators, 
                            entrepreneurs and complete legends.</p>
                        </div>
                        <div className="my-8 py-8 border border-x-0 border-solid border-gray-500">
                            <div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-ruby rounded-full flex items-center justify-center">
                                        <div className="w-8 h-8 relative">
                                            <Image src={"/icons/Experience.png"} fill={true} alt=""></Image>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="mb-1">Our email</h4>
                                        <p>test@gmail.com</p>
                                    </div>                                
                                </div>
                            </div>
                            <div className="my-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-ruby rounded-full flex items-center justify-center">
                                        <div className="w-8 h-8 relative">
                                            <Image src={"/icons/Experience.png"} fill={true} alt=""></Image>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="mb-1">Our email</h4>
                                        <p>test@gmail.com</p>
                                    </div>                                
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-ruby rounded-full flex items-center justify-center">
                                        <div className="w-8 h-8 relative">
                                            <Image src={"/icons/Experience.png"} fill={true} alt=""></Image>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="mb-1">Our email</h4>
                                        <p>test@gmail.com</p>
                                    </div>                                
                                </div>
                            </div>
                        </div>
                        <div className=" flex  items-center gap-8">
                            <FiFacebook size={30}/>
                            <FaInstagram size={30}/>
                            <TbBrandLinkedin size={33}/>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                </div>
                <div>

                </div>
            </div>
        </section>
    );
  }