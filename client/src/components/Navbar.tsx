"use client"; // Added
import Image from "next/image";
<<<<<<< HEAD
import Link from "next/link";

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
=======
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
>>>>>>> 876ddef7ec1a034263a9b92b0ef1e79f484e79e4
    </div>
  );
};

export default Navbar;
