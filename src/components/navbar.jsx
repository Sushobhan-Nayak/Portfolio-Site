"use client";

import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";

const Links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* Links */}
      <div className="hidden md:flex gap-4 w-1/3">
        {Links.map((link) => (
          <NavLink link={link} key={link.title}></NavLink>
        ))}
      </div>
      {/* Logo */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Sushobhan</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>
      {/* Social Links */}
      <div className="hidden md:flex gap-4 w-1/3">
        <Link href="https://github.com/Sushobhan-Nayak" target="_blank">
          <img src="/github.png" alt="" width={24} height={24}></img>
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
      </div>
      {/* Responsive menu */}
      <div className="md:hidden">
        {/* Menu button */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
        </button>
        {/* Menu List */}
        {open && (
          <div className="absolute top-0 left-0 bg-black w-screen h-screen text-white flex flex-col items-center justify-center gap-8 text-xl">
            {Links.map((link) => (
              <Link href={link.url} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
