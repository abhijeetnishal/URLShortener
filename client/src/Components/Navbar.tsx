"use client";
import Link from "next/link";
import { Hamburger } from "@/icons/Hamburger";
import { useState } from "react";
import Image from "next/image";
import logo from "./../../public/chain.png";

const Navbar = () => {
  const [hamburgerClick, setHamburgerClick] = useState(false);

  return (
    <nav className="flex w-full border-b-2 p-5 justify-between items-center">
      <div className="flex items-center">
        <Link href="/">
          <div className="flex flex-row items-center">
            <Image alt="logo" className="w-6 h-6" src={logo} />
            <p className="ml-3 text-xl font-medium">Short.url</p>
          </div>
        </Link>
      </div>

      <div className="hidden lg:flex lg:space-x-20 xxl:gap-10 justify-center items-center text-lg flex-grow">
        <Link href="/">
          <div className="relative inline-block before:block before:absolute before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-current before:scale-x-0 before:origin-bottom-right before:transition-transform before:duration-300 hover:before:scale-x-100 hover:before:origin-bottom-left">
            Home
          </div>
        </Link>
        <Link href="/about">
          <div className="relative inline-block before:block before:absolute before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-current before:scale-x-0 before:origin-bottom-right before:transition-transform before:duration-300 hover:before:scale-x-100 hover:before:origin-bottom-left">
            About
          </div>
        </Link>
        <Link href="/contact">
          <div className="relative inline-block before:block before:absolute before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-current before:scale-x-0 before:origin-bottom-right before:transition-transform before:duration-300 hover:before:scale-x-100 hover:before:origin-bottom-left">
            Contact
          </div>
        </Link>
      </div>

      <div className="hidden lg:flex space-x-4 items-center text-lg">
        <Link href="/auth/login">
          <div className="authOption px-4 py-2 text-blue-900 rounded-[20px] hover:bg-blue-900 hover:text-white">
            Sign in
          </div>
        </Link>
        <Link href="/auth/signup">
          <div className="authOption bg-[#2C4E80] px-4 py-2 rounded-[20px] text-white">
            Sign Up
          </div>
        </Link>
      </div>

      <div className="w-[10%] lg:hidden">
        {hamburgerClick ? (
          <div className="w-screen pb-10 bg-white absolute top-0 right-0 duration-150 flex flex-col space-y-3 justify-end">
            <button
              onClick={() => setHamburgerClick(false)}
              className="px-10 py-8 relative ml-auto"
            >
              <div className="w-6 h-1 rotate-45 absolute bg-black"></div>
              <div className="w-6 h-1 -rotate-45 absolute bg-black"></div>
            </button>
            <Link href="/">
              <div className="flex justify-center w-full py-2 hover:bg-[#8d8888]">
                Home
              </div>
            </Link>

            <Link href="/about">
              <div className="flex justify-center w-full py-2 hover:bg-[#8d8888]">
                About
              </div>
            </Link>

            <Link href="/contact">
              <div className="flex justify-center w-full py-2 hover:bg-[#8d8888]">
                Contact
              </div>
            </Link>

            <Link href="/auth/login">
              <div className="flex justify-center w-full py-2 hover:bg-[#8d8888]">
                Sign in
              </div>
            </Link>

            <Link href="/auth/signup">
              <div className="flex justify-center w-max mx-auto p-[50px] py-2 hover:bg-[#8d8888] bg-[#2C4E80] rounded-[20px] text-white">
                Sign Up
              </div>
            </Link>
          </div>
        ) : (
          <button
            onClick={() => setHamburgerClick(true)}
            className="flex justify-end items-center lg:hidden"
          >
            <Hamburger />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
