

export default function Hero() {
    return (
        <section className="w-full h-[90dvh] bg-hero-pattern bg-cover bg-center bg-no-repeat relative" id="Hero">
            <div className="absolute w-full h-full top-0 left-0 hero-fg">

            </div>
            <div className="container">
                <div className="flex flex-col justify-center items-start h-[90dvh] w-2/5 max-2xl:w-3/5 max-md:w-5/6 max-xs:w-full">
                    <h1 className=" text-white text-[3.5rem] mb-4 max-lg:text-[3rem] max-sm:text-[2.5rem] max-xs:text-[2rem] z-10">
                        Precision Accounting <br />for Confident <br /> Decisions.
                    </h1>
                    <p className=" text-2xl text-white max-lg:text-xl max-sm:text-lg max-xs:text-md z-10">
                        Expert accounting services focused on clarity, precision, and empowering your financial growth.
                    </p>
                </div>
            </div>
        </section>
    );
  }