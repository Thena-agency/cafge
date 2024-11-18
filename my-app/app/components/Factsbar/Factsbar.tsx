import Image from "next/image";

export default function Factsbar() {
    return (
        <div className="bg-black w-full h-[180px] flex items-center">
            <div className="mx-[120px] w-full flex justify-around">
                <div className="flex items-center">
                    <div className="w-20 h-20 bg-ruby rounded-full flex items-center justify-center mr-6 ">
                        <div className="w-14 h-14 relative">
                            <Image src={"/icons/Experience.png"} fill={true} alt=""></Image>
                        </div>
                    </div>
                    <p className="text-white flex flex-col items-center text-3xl">
                        <span>28+</span>
                        years
                    </p>
                </div>
                <div className="flex items-center">
                    <div className="w-20 h-20 bg-ruby rounded-full flex items-center justify-center mr-6 ">
                        <div className="w-14 h-14 relative">
                            <Image src={"/icons/Experience.png"} fill={true} alt=""></Image>
                        </div>
                    </div>
                    <p className="text-white flex flex-col items-center text-3xl">
                        <span>28+</span>
                        years
                    </p>
                </div>
                <div className="flex items-center">
                    <div className="w-20 h-20 bg-ruby rounded-full flex items-center justify-center mr-6 ">
                        <div className="w-14 h-14 relative">
                            <Image src={"/icons/Experience.png"} fill={true} alt=""></Image>
                        </div>
                    </div>
                    <p className="text-white flex flex-col items-center text-3xl">
                        <span>28+</span>
                        years
                    </p>
                </div>
            </div>
        </div>
    );
  }