"use client";

import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";
const skillList = [
  "JavaScript",
  "TypeScript",
  "Python",
  "HTML",
  "CSS",
  "Flutter",
  "Dart",
  "ReactJs",
  "NextJs",
  "Firebase",
  "Verilog",
  "MongoDB",
  "SQL",
  "AWS",
];
const AboutPage = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });
  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, {
    margin: "-100px",
  });
  const eduRef = useRef();
  const isEduRefInView = useInView(eduRef, {
    margin: "-100px",
  });
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* Text */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-3/5">
          {/* Biography */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            <p className="text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has be It has survived not only five
              centuries, but also the leapy unchanged. It was popularised in the
              passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <span className="italic">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </span>
          </div>

          {/* Skills */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            <motion.h1
              className="font-bold text-2xl"
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              SKILLS
            </motion.h1>
            <motion.div
              className="flex gap-4 flex-wrap"
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              {skillList.map((skl) => (
                <div
                  className="rounded p-2 text-sm cursor-pointer text-white bg-black hover:bg-white hover:text-black"
                  key={skl}
                >
                  {skl}
                </div>
              ))}
            </motion.div>
          </div>
          {/* Education */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={eduRef}
          >
            <motion.h1
              className="font-bold text-2xl"
              initial={{ x: "-300px" }}
              animate={isEduRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              EDUCATION
            </motion.h1>
            {/* List */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isEduRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              {/* List Item */}
              <div className="flex justify-between h-48">
                {/* Left */}
                <div className="w-1/3">
                  {/* title */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg w-fit">
                    Bachelor of Technology
                  </div>
                  <div className="p-3 text-sm">
                    Electronics and Communication
                  </div>
                  <div className="p-3 text-sm text-red-400 font-semibold">
                    2021 - Present
                  </div>
                  <div className="p-2 text-sm font-semibold rounded-lg bg-white w-fit">
                    National Institute of Technology, Calicut
                  </div>
                </div>
                {/* center */}
                <div className="w-1/6 flex justify-center">
                  {/* Line */}
                  <div className="w-1 h-full bg-gray-500 rounded relative">
                    {/* Line Circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-500 bg-white -left-2"></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3"></div>
              </div>
              <div className="flex justify-between h-48">
                {/* Left */}
                <div className="w-1/3"></div>
                {/* center */}
                <div className="w-1/6 flex justify-center">
                  {/* Line */}
                  <div className="w-1 h-full bg-gray-500 rounded relative">
                    {/* Line Circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-500 bg-white -left-2"></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3">
                  {/* title */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg w-fit">
                    Intermediate
                  </div>
                  <div className="p-3 text-sm">
                    Central Board of Secondary Education
                  </div>
                  <div className="p-3 text-sm text-red-400 font-semibold">
                    2019 - 2021
                  </div>
                  <div className="p-2 text-sm font-semibold rounded-lg bg-white w-fit">
                    Blossom Public School, Pune
                  </div>
                </div>
              </div>
              <div className="flex justify-between h-48">
                {/* Left */}
                <div className="w-1/3">
                  {/* title */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    High School
                  </div>
                  <div className="p-3 text-sm">
                    Central Board of Secondary Education
                  </div>
                  <div className="p-3 text-sm text-red-400 font-semibold">
                    2016 - 2019
                  </div>
                  <div className="p-2 text-sm font-semibold rounded-lg bg-white w-fit">
                    Podar International School, Pune
                  </div>
                </div>
                {/* center */}
                <div className="w-1/6 flex justify-center">
                  {/* Line */}
                  <div className="w-1 h-full bg-gray-500 rounded relative">
                    {/* Line Circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-500 bg-white -left-2"></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3"></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Svg */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-2/5">
          <Brain scrollYProgress={scrollYProgress}></Brain>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
