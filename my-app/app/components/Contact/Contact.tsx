import Image from "next/image";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { TbBrandLinkedin } from "react-icons/tb";
import Form from "../utils/Form/Form";



export default function Contact() {
    return (
        <section className="container w-full">
            <div className="container">
                <div className="w-full flex justify-between h-[70dvh] mb-8 ">
                    <div className="w-2/5 ">
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
                    <Form />
                </div>
                <div className="w-full border rounded-lg">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.640116843133!2d-7.6190971244117485!3d33.588692142065014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2993a7f1d03%3A0xd240d8f389164a18!2sCabinet%20fiduciaire%20de%20gestion%20des%20entreprises!5e0!3m2!1sfr!2sma!4v1732275177885!5m2!1sfr!2sma" width="1400" height="300"  loading="lazy"  className="border w-full  rounded-lg"></iframe>
                </div>
            </div>
        </section>
    );
  }