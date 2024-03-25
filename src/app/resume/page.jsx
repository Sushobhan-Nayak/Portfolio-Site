"use client"
import { motion } from "framer-motion";
import PDFViewer from "@/components/pdf";

const PDFPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full p-4 sm:p-8 md:p-12 lg:p-20 xl:p-24 overflow-x-hidden">
        <div className="flex flex-col items-center justify-center gap-12">
          <h1 className="font-semibold text-white text-4xl sm:text-6xl md:text-7xl">
            My Resume
          </h1>
          <PDFViewer></PDFViewer>
        </div>
      </div>
    </motion.div>
  );
};

export default PDFPage;
