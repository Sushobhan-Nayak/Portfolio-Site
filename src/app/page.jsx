"use client";

import TextAnimation from "@/components/textanimation";
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
          className="h-1/2 flex justify-left lg:w-1/2 lg:h-full"
          // whileHover={{
          //   scaleY: 1.1,
          //   scaleX: 1.1,
          //   transition: {
          //     duration: 0.5,
          //     ease: "easeInOut",
          //     type: "spring",
          //   },
          // }}
        >
          <img
            src="/sn1.png"
            alt=""
            className="h-full object-contain xl:w-11/12"
          ></img>
        </motion.div>

        {/* Text Conatainer */}
        <div className="h-1/2 flex flex-col gap-12 lg:gap-24 items-start justify-center lg:h-full lg:w-1/2 text-white">
          {/* Title */}
          <h1 className="font-bold text-4xl lg:text-6xl w-full text-center lg:text-start">
            Techfolio: Sushobhan Nayak's Digital Portfolio
          </h1>
          {/* Descrp */}
          <div className="flex justify-center w-2/5 md:w-3/5 lg:justify-start">
            <TextAnimation></TextAnimation>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 w-full justify-center lg:justify-start">
            <Link href="/portfolio">
              <button className="p-4 rounded-lg ring-1 ring-white bg-black text-white">
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-white">
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
