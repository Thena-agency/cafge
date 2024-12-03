import Image from "next/image";

export default function Blog_card() {
    return (
        <div className="w-[240px] h-[200px]  relative max-md:w-[200px] max-md:h-[160px] max-xs:w-[240px] max-xs:h-[200px]">
            <Image src={"/Images/Cafge_blogs.png"} fill={true} alt="Cafge" className="-z-10"/>
            <div className="flex items-end h-full pb-12 pl-2 ">
                <h3 className="text-[1.25rem] text-white">Blog Title</h3>
            </div>
        </div>
    );
  }