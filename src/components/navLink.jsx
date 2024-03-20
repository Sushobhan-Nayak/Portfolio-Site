"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathname = usePathname();

  return (
    <Link
      className={`rounded p-1 ${
        pathname === link.url && "bg-white text-black"
      }`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};
export default NavLink;
