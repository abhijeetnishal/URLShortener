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
    <nav className="flex w-full border-b-2 p-5 justify-between items-center">
      <div className="flex items-center">
        <Link href="/home">
          <div className="imgCnt w-[60%] md:w-[90%]">
            <Image src={UrlLogo} alt="logo" />
          </div>
        </Link>
      </div>

      {isClient && (
        <>
          <div className="hidden lg:flex space-x-4 justify-center items-center gap-20 text-lg flex-grow">
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

          <div className="hidden lg:flex space-x-4 items-center text-lg">
            <Link href="/auth/login">
              <div className="authOption px-4 py-2 text-blue-900 rounded-[20px] hover:bg-blue-900 hover:text-white">Sign in</div>
            </Link>
            <Link href="/auth/signup">
              <div className="authOption bg-[#2C4E80] px-4 py-2 rounded-[20px] text-white">Sign Up</div>
            </Link>
          </div>

          <div className='w-[10%] lg:hidden'>
            <button className="flex justify-end items-center group lg:hidden">
              <Image src={Hamburger} alt="menu" className="w-[80%] right-1" />
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
