"use client";

import { motion } from "framer-motion";
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
  "AWS",
];
const AboutPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll lg:flex">
        {/* Text */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
          {/* Biography */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            <p className="text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <span className="italic">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </span>
          </div>
          {/* Skills */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">SKILLS</h1>
            <div className="flex gap-4 flex-wrap">
              {skillList.map((skl) => (
                <div
                  className="rounded p-2 text-sm cursor-pointer text-white bg-black hover:bg-white hover:text-black"
                  key={skl}
                >
                  {skl}
                </div>
              ))}
            </div>
          </div>
          {/* Education */}
          <div className="flex flex-col gap-12 justify-center pb-48">
            <h1 className="font-bold text-2xl">EDUCATION</h1>
            {/* List */}
            <div>
              {/* List Item */}
              <div className="flex justify-between h-48">
                {/* Left */}
                <div className="w-1/3">
                  {/* title */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
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
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
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
            </div>
          </div>
        </div>
        {/* Svg */}
        <div className="hidden lg:block w-1/3 lg:w-1/2"></div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
