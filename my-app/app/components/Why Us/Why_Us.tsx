import Image from "next/image";


export default function Why_Us() {
    return (
        <section className="w-full overflow-hidden">
            <div className="container">
                <div className="w-full ">
                    <div className="mt-[60px] title flex items-center">
                        <div className="w-[8rem] h-[3px] bg-ruby mr-8"></div>
                        <h2 className="text-[3rem] text-ruby max-xs:text-[2.5rem]">WHY US</h2>
                    </div>
                    <div className="my-[60px]">
                        <div className="grid grid-rows-3 grid-cols-2 gap-x-24 gap-y-16 grid-flow-col relative max-lg:grid-flow-row max-md:flex max-md:flex-col max-xs:gap-12">
                            <span className="h-[110%] aspect-square bg-[#F9F4F5] absolute -z-10 rounded-full -left-[20%] -bottom-[5 %] max-lg:h-[475px] max-lg:top-0"></span>
                            <span className="hidden aspect-square bg-[#F9F4F5] absolute -z-10 rounded-full -right-[20%] -bottom-[5%] max-lg:h-[475px] max-lg:inline"></span>
                            <div className="flex gap-12">
                                <h4 className="text-[5rem] textShadow text-white max-lg:text-[4rem] max-xs:text-[3rem]">01</h4>
                                <div>   
                                    <h4 className="text-[1.75rem] mb-4 max-xs:text-[1.5rem]">Reason 01</h4>
                                    <p className="text-[1.25rem] leading-normal max-xs:text-[1rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                                </div>
                            </div>
                            <div className="flex gap-12">
                                <h4 className="text-[5rem] textShadow text-white max-lg:text-[4rem] max-xs:text-[3rem]">02</h4>
                                <div>
                                    <h4 className="text-[1.75rem] mb-4 max-xs:text-[1.5rem]">Reason 02</h4>
                                    <p className="text-[1.25rem] leading-normal max-xs:text-[1rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                                </div>
                            </div>
                            <div className="flex gap-12">
                                <h4 className="text-[5rem] textShadow text-white max-lg:text-[4rem] max-xs:text-[3rem]">03</h4>
                                <div>
                                    <h4 className="text-[1.75rem] mb-4 max-xs:text-[1.5rem]">Reason 03</h4>
                                    <p className="text-[1.25rem] leading-normal max-xs:text-[1rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                                </div>
                            </div>
                            <div className="flex gap-12">
                                <h4 className="text-[5rem] textShadow text-white max-lg:text-[4rem] max-xs:text-[3rem]">04</h4>
                                <div>
                                    <h4 className="text-[1.75rem] mb-4 max-xs:text-[1.5rem]">Reason 04</h4>
                                    <p className="text-[1.25rem] leading-normal max-xs:text-[1rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                                </div>
                            </div>
                            <div className="flex gap-12">
                                <h4 className="text-[5rem] textShadow text-white max-lg:text-[4rem] max-xs:text-[3rem]">05</h4>
                                <div>
                                    <h4 className="text-[1.75rem] mb-4 max-xs:text-[1.5rem]">Reason 05</h4>
                                    <p className="text-[1.25rem] leading-normal max-xs:text-[1rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                                </div>
                            </div>
                            <div className="flex gap-12">
                                <h4 className="text-[5rem] textShadow text-white max-lg:text-[4rem] max-xs:text-[3rem]">06</h4>
                                <div>
                                    <h4 className="text-[1.75rem] mb-4 max-xs:text-[1.5rem]">Reason 06</h4>
                                    <p className="text-[1.25rem] leading-normal max-xs:text-[1rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }