"use client";

import { usePathname } from "next/navigation";
import Navbar from "./navbar";

const { AnimatePresence, motion } = require("framer-motion");

const TransititonProvider = ({ children }) => {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div
        className="w-screen h-screen bg-gradient-to-b from-blue-50 to-red-100"
        key={pathName}
      >
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-7xl cursor-default w-fit h-fit z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {pathName === "/" ? "HOME" : pathName.substring(1).toUpperCase()}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-40"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]"> {children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransititonProvider;
