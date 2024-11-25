import Image from "next/image";
import { MdOutlineStar } from "react-icons/md";


export default function Form() {
    return (
        <div className="bg-[#F4F4F4] h-full border rounded-2xl">
            <form action="" className="m-10 w-[40dvw]">
                <div className="grid grid-cols-2 grid-rows-3 h-[45dvh] gap-y-[7vh] mb-10">
                    <div className="row-start-1 row-end-2 col-start-1 col-end-2 flex flex-col justify-between mr-12">
                        <span className="mb-4 flex-end">First name</span>
                        <input type="text" className="bg-[#F4F4F4] border border-solid border-x-0 border-t-0 outline-none" placeholder="test" />
                    </div>
                    <div className="row-start-1 row-end-2 col-start-2 col-end-3 flex flex-col justify-between">
                        <span className="mb-4 ">Last name</span>
                        <input type="text" className="bg-[#F4F4F4] border border-solid border-x-0 border-t-0 outline-none" placeholder="test"/>
                    </div>
                    <div className="row-start-2 row-end-3 col-start-1 col-end-2 flex flex-col justify-between mr-12">
                        <span className="mb-4 col-start-1 col-end-4 row-start-3 row-end-4">Email</span>
                        <input type="text"  className="bg-[#F4F4F4] border border-solid border-x-0 border-t-0 outline-none" placeholder="test"/>
                    </div>
                    <div className="row-start-2 row-end-3 col-start-2 col-end-3 flex flex-col justify-between">
                        <span className="mb-4">Phone</span>
                        <input type="text" className="bg-[#F4F4F4] border border-solid border-x-0 border-t-0 outline-none" placeholder="test"/>
                    </div>
                    <div className="row-start-3 row-end-4 col-start-1 col-end-4 flex flex-col justify-between">
                        <span className="mb-4 ">Message</span>
                        <input type="text" className="bg-[#F4F4F4] border border-solid border-x-0 border-t-0 outline-none c " placeholder="test"/>
                    </div>
                </div>
                <button className="bg-ruby p-4 text-1xl border rounded-3xl text-white mb-4">Submit Now</button>
            </form>
        </div>
    );
  }