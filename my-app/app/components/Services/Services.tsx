import Image from "next/image";


export default function Services() {
    return (
        <section className="w-full h-[100dvh] bg-[url('/images/Services_BG.png')] border-[1px] border-solid border-transparent ">
            <div className="mx-[120px] ">
                <div className="w-full">
                    <div className="mt-[60px] title flex items-center">
                        <div className="w-[8rem] h-[3px] bg-ruby mr-8"></div>
                        <h2 className="text-[3rem] text-ruby">Our Services</h2>
                    </div>
                    <div className="h-[60dvh] ml-16 ">
                        <h3 className="text-ruby text-[2.5rem] my-12 ml-8 max">Le Lorem Ipsum est simplement <br/> du faux texte employé</h3>
                        <div className=" grid grid-rows-2 grid-cols-3 gap-x-8 gap-y-32">
                            <div className="Service 1">
                                <h4 className="text-[1.75rem] mb-4">Service 1</h4>
                                <p className="text-[1.25rem] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                            </div>
                            <div className="Service 1">
                                <h4 className="text-[1.75rem] mb-4">Service 1</h4>
                                <p className="text-[1.25rem] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                            </div>
                            <div className="Service 1">
                                <h4 className="text-[1.75rem] mb-4">Service 1</h4>
                                <p className="text-[1.25rem] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                            </div>
                            <div className="Service 1">
                                <h4 className="text-[1.75rem] mb-4">Service 1</h4>
                                <p className="text-[1.25rem] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                            </div>
                            <div className="Service 1">
                                <h4 className="text-[1.75rem] mb-4">Service 1</h4>
                                <p className="text-[1.25rem] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                            </div>
                            <div className="Service 1">
                                <h4 className="text-[1.75rem] mb-4">Service 1</h4>
                                <p className="text-[1.25rem] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                            </div>      
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }