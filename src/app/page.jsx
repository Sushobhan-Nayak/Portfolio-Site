"use client";

import { useMouse } from "@uidotdev/usehooks";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 overflow-x-hidden">
        {/* Image Container */}

        <motion.div
          className="h-1/2 relative flex justify-left lg:w-1/2 lg:h-full"
          whileHover={{
            scaleY: 1.1,
            scaleX: 1.1,
            transition: {
              duration: 0.5,
              ease: "easeInOut",
              type: "spring",
            },
          }}
        >
          <img
            src="/sn1.png"
            alt=""
            className="h-full object-contain xl:w-11/12"
          ></img>
        </motion.div>

        {/* Text Conatainer */}
        <div className="h-1/2 flex flex-col gap-8 items-center justify-center lg:h-full lg:w-1/2">
          {/* Title */}
          <h1 className="font-bold text-4xl md:text-6xl w-full">
            Techfolio: Sushobhan Nayak's Digital Portfolio
          </h1>
          {/* Descrp */}
          <p className="md:text-xl w-full">Welcome to my portfolio website</p>
          {/* Buttons */}
          <div className="flex gap-4 w-full">
            <Link href="/portfolio">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-black">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
