"use client";

import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Image Container */}
        {/* <motion.div animate={{ scale: 1.5 }} transition={{ duration: 3 }}> */}
          <div className="h-1/2 relative flex justify-center lg:w-1/2 lg:h-full">
            <img src="/hero.png" alt="" className="h-full object-contain"></img>
          </div>
        {/* </motion.div> */}

        {/* Text Conatainer */}
        <div className="h-1/2 flex flex-col gap-8 items-center justify-center lg:h-full lg:w-1/2">
          {/* Title */}
          <h1 className="font-bold text-4xl md:text-6xl w-full">
            Crafting Digital Experiences, Designing Tomorrow
          </h1>
          {/* Descrp */}
          <p className="md:text-xl w-full">Welcome to my portfolio website</p>
          {/* Buttons */}
          <div className="flex gap-4 w-full">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
