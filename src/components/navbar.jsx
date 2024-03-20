"use client";

import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";
import Image from "next/image";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const topVariants = {
  closed: { rotate: 0 },
  opened: { rotate: 45, backgroundColor: "rgb(255,255,255)" },
};

const centerVariants = {
  closed: { opacity: 1 },
  opened: { opacity: 0 },
};

const bottomVariants = {
  closed: { rotate: 0 },
  opened: { rotate: -45, backgroundColor: "rgb(255,255,255)" },
};

const listVariants = {
  closed: { x: "100vw" },
  opened: {
    x: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const listItemVariants = {
  closed: { x: -10, opacity: 0 },
  opened: { x: 0, opacity: 1 },
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl overflow-x-hidden">
      {/* Links */}
      <div className="hidden md:flex gap-4 w-1/3 text-white">
        {links.map((link) => (
          <NavLink link={link} key={link.title}></NavLink>
        ))}
      </div>
      {/* Logo */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1 p-1">SN</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>
      {/* Social Links */}
      <div className="hidden md:flex gap-4 w-1/3 xl:justify-center">
        <Link href="https://github.com/Sushobhan-Nayak" target="_blank">
          <img src="/git-light.png" alt="" width={24} height={24}></img>
        </Link>
        <Link
          href="https://www.linkedin.com/in/sushobhan-nayak/"
          target="_blank"
        >
          <img src="/linkedin.png" alt="" width={24} height={24}></img>
        </Link>
        <Link href="https://github.com/Sushobhan-Nayak" target="_blank">
          <img src="/instagram.png" alt="" width={24} height={24}></img>
        </Link>
        <Link href="https://leetcode.com/tech_bro_17/" target="_blank">
          <img src="/leetcode-light.png" alt="" width={24} height={24}></img>
        </Link>
        <Link href="https://codeforces.com/profile/tech_bro_17" target="_blank">
          <img src="/codeforces.png" alt="" width={24} height={24}></img>
        </Link>
      </div>
      {/* Responsive menu */}
      <div className="md:hidden">
        {/* Menu button */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded origin-left"
          ></motion.div>
        </button>
        {/* Menu List */}
        {open && (
          <motion.div
            variants={listVariants}
            animate="opened"
            initial="closed"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-3xl z-40"
          >
            {links.map((link) => (
              <motion.div key={link.title} variants={listItemVariants}>
                <Link href={link.url} key={link.title} className="relative z-1">
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
