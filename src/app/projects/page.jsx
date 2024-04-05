"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
const projects = [
  {
    id: 1,
    color: "from-orange-200 to-pink-400",
    title: "Lets Connect",
    desc: "A social media app to connect with your friends with many interactive and unique features.",
    img: "/lc.png",
    link: "https://letsconnect-social.vercel.app/",
  },
  {
    id: 2,
    color: "from-violet-300 to-orange-200",
    title: "NER Profile",
    desc: "An app to detect imperosnations on Twitter and Instagram.",
    img: "/ner.png",
    link: "https://github.com/Impersonation-Profile-Detector/App",
  },
  {
    id: 3,
    color: "from-pink-200 to-blue-300",
    title: "Saathi App",
    desc: "An app for travellers to store important travel info and share it with others using groups.",
    img: "/Saathi.png",
    link: "https://github.com/Sushobhan-Nayak/Saathi",
  },
  {
    id: 4,
    color: "from-red-200 to-blue-300",
    title: "Dukaan",
    desc: "A frontend project using react and tailwind.",
    img: "/dukaan.png",
    link: "https://dukaan-tailwind.vercel.app/",
  },
  {
    id: 5,
    color: "from-green-200 to-orange-300",
    title: "Find My Loved Ones",
    desc: "An app to unite lost person with their loved ones using flutter and firebase",
    img: "/fmlo.png",
    link: "https://github.com/EnigmaEnforcers",
  },
];
const PortfolioPage = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: useRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center text-white">
          My Projects
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-red-500" />
            {projects.map((item) => (
              <div
                className={`w-screen h-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-black w-1/2 h-3/4">
                  <h1 className="font-semibold text-xl md:text-4xl lg:text-6xl xl:text-7xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[520px] ring-1 ring-black rounded-lg">
                    <Image
                      src={item.img}
                      alt=""
                      fill
                      className="rounded-lg"
                      objectFit="cover"
                    />
                  </div>
                  <p className="w-80 md:w-96 lg:w-[500px] lg:text-xl xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link
                    href={item.link}
                    className="flex justify-end"
                    target="_blank"
                  >
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-black text-white font-semibold m-4 rounded-b-lg rounded-tr-lg">
                      See Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
            <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-red-200" />
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-4 items-center justify-center text-center bg-black text-white">
        <h1 className="text-7xl font-semibold">Do you have a project ?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#fff">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Full Stack App and Web Developer.
              </textPath>
            </text>
          </motion.svg>
          <Link
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto text-black bg-white rounded-full flex items-center justify-center z-50"
            href="/contact"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
