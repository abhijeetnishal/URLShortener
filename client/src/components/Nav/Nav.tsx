'use client';

import UrlLogo from '@/assets/UrlLogo.svg';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Hamburger from '@/assets/hamburger.svg';
import Image from 'next/image';
import './Nav.css';

const Navbar = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <nav className="flex w-screen border-b-2">
      <div className="flex left md:w-1/4 justify-start items-center p-5">
        <Link href="/home">
          <div className="imgCnt md:w-[190%]">
            <Image src={UrlLogo} alt="logo" />
          </div>
        </Link>
      </div>

      {isClient && (
        <>
          <div className="hidden lg:flex space-x-4 center w-1/2 justify-center items-center gap-20 text-lg">
            <Link href="/home">
              <div className="navOption">Home</div>
            </Link>
            <Link href="">
              <div className="navOption">Pricing</div>
            </Link>
            <Link href="/about">
              <div className="navOption">About</div>
            </Link>
            <Link href="/contact">
              <div className="navOption">Contact</div>
            </Link>
          </div>
          <div className="hidden lg:flex space-x-4 right w-1/4 justify-center items-center gap-4 text-lg">
            <Link href="/auth/login">
              <div className="authOption">Sign in</div>
            </Link>
            <Link href="/auth/signup">
              <div className="authOption bg-[#2C4E80] p-[15px] rounded-[20px] text-white">Sign Up</div>
            </Link>
          </div>
          <div>
            <button className="w-3/4 flex justify-end items-center group lg:hidden p-9">
              <Image src={Hamburger} alt="menu" className="w-[30px]" />
              <div className="w-screen pb-10 bg-white absolute -top-full group-focus:top-0 right-0 duration-150 flex flex-col space-y-3 justify-end">
                <button className="px-10 py-8 relative ml-auto">
                  <div className="w-6 h-1 rotate-45 absolute bg-black"></div>
                  <div className="w-6 h-1 -rotate-45 absolute bg-black"></div>
                </button>
                <div className="flex justify-center w-full py-2 hover:bg-[#8d8888]">Features</div>
                <div className="flex justify-center w-full py-2 hover:bg-[#8d8888]">Pricing</div>
                <div className="flex justify-center w-full py-2 hover:bg-[#8d8888]">About</div>
                <Link href="/contact">
                  <div className="flex justify-center w-full py-2 hover:bg-[#8d8888]">Contact</div>
                </Link>
                <Link href="/auth/login">
                  <div className="flex justify-center w-full py-2 hover:bg-[#8d8888]">Sign in</div>
                </Link>
                <div className="flex justify-center w-max mx-auto p-[50px] py-2 hover:bg-[#8d8888] bg-[#2C4E80] rounded-[20px] text-white">Sign Up</div>
              </div>
            </button>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
