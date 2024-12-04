import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "react-scroll";

interface SlidingMenuProps {
  isOpen: boolean;
  onClick: () => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SlidingMenu: React.FC<SlidingMenuProps> = ({
  isOpen,
  onClick,
  setIsOpen,
}) => {
  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 h-screen bg-black"
        />
      )}

      {/* Sliding Menu */}
      <motion.div
        initial={{ x: "100%" }} // Start off-screen
        animate={{ x: isOpen ? 0 : "100%" }} // Slide in/out
        exit={{ x: "100%" }} // Slide out when closed
        transition={{ type: "spring", stiffness: 300, damping: 30 }} // Smooth transition
        className="fixed right-0 top-0 z-20 h-screen w-screen bg-gray-800 text-white shadow-lg"
      >
        <div className="relative flex h-full min-h-72 flex-col items-center justify-around bg-black z-20 select-none">
        <div
              className="absolute left-1/2 right-0 top-[40%] h-full w-full -translate-x-1/2 -translate-y-1/2 transform z-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgb(80, 76, 255) -53%, rgba(0, 0, 0, 0.94) 40%)",
              }}
            />
          <Image
            src={"/images/logo.svg"}
            alt="Thena agency logo"
            width={130}
            height={130}
            priority
            className="absolute left-16 top-6"
          />

          <ul className="mt-20 flex flex-col items-center space-y-4 font-satoshiBold max-md:text-2xl text-3xl z-20">
            <Link
              to={"home"}
              smooth={true}
              offset={-50} // Adjust the offset value as needed
              className="cursor-pointer"
              onClick={onClick}
            >
              <li
                className="my-2 cursor-pointer rounded px-2 text-white transition duration-100 hover:text-deep_blue"
                onClick={() => setIsOpen(false)}
              >
                Home
              </li>
            </Link>
            <Link
              to={"about"}
              smooth={true}
              offset={-50} // Adjust the offset value as needed
              className="cursor-pointer"
              onClick={onClick}
            >
              <li
                className="my-2 cursor-pointer rounded px-2 text-white transition duration-100 hover:text-deep_blue"
                onClick={() => setIsOpen(false)}
              >
                About
              </li>
            </Link>
            <Link
              to={"services"}
              smooth={true}
              offset={-50} // Adjust the offset value as needed
              className="cursor-pointer"
              onClick={onClick}
            >
              <li
                className="my-2 cursor-pointer rounded px-2 text-white transition duration-100 hover:text-deep_blue"
                onClick={() => setIsOpen(false)}
              >
                Services
              </li>
            </Link>
            <Link
              to={"portfolio"}
              smooth={true}
              offset={-50}
              className="cursor-pointer"
              onClick={onClick}
            >
              <li
                className="my-2 cursor-pointer rounded px-2 text-white transition duration-100 hover:text-deep_blue"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </li>
            </Link>
            <Link
              to={"lets_talk"}
              smooth={true}
              offset={-50}
              className="cursor-pointer"
              onClick={onClick}
            >
              <li
                className="my-2 cursor-pointer rounded px-2 text-white transition duration-100 hover:text-deep_blue"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </li>
            </Link>
          </ul>
          <a
            href="mailto:contact@thena.agency"
            target="_blank"
            rel="noopener noreferrer"
            className="z-20"
            >
            <h2 className="text-white text-xl">contact@Thena.Agency</h2>
          </a>
           
        </div>
      </motion.div>
    </>
  );
};

export default SlidingMenu;
