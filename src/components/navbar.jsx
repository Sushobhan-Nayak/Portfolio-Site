import { Span } from "next/dist/trace";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* Logo */}
      <div className="">
        <Link href="/">
          <span>Sushobhan</span>
          <span>Nayak</span>
        </Link>
      </div>
      <div>2</div>
    </div>
  );
};

export default Navbar;
