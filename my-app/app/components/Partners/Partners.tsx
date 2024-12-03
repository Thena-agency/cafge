import Image from "next/image";
import Partner from "../Partner/Partner";

export default function Partners_list() {
    return (
        <section className="w-full">
            <div className="container grid grid-cols-5 my-12 gap-4 max-xl:grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-2 max-xs:flex max-xs:flex-col max-xs:items-center">
                <Partner />
                <Partner />
                <Partner />
                <Partner />
                <Partner />
                <Partner />
                <Partner />
                <Partner />
                <Partner />
                <Partner />
            </div>
        </section>
    );
  }