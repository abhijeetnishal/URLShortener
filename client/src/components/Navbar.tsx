"use client"; // Added
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <div className="flex items-center py-3 dark:shadow-white">
      <Link href="/" className="flex items-center">
        <Image
          src="/chain.png"
          alt="logo"
          height="24"
          width="24"
          className="dark:invert ml-5"
        />
        <h1 className="ml-3 text-2xl font-extrabold">Short.Url</h1>
      </Link>

      <ThemeToggle />
    </div>
  );
};

export default Navbar;
