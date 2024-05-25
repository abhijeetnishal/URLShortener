"use client"; // Added
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-3 px-5 bg-white dark:bg-slate-800 text-black dark:text-white shadow-md">
      <div className="flex items-center">
        <Image
          src="/chain.png"
          alt="logo"
          height="24"
          width="24"
          className="dark:invert"
        />
        <h1 className="ml-3 text-2xl font-extrabold">Short.Url</h1>
      </div>
      <ThemeToggle />
    </div>
  );
};

export default Navbar;
