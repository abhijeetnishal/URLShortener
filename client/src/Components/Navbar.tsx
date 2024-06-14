"use client"

import Link from 'next/link';
import { useEffect, useState } from 'react';
import {UrlLogo} from '@/icons/UrlLogo';
import {Hamburger} from '@/icons/Hamburger';

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
            <UrlLogo  height="" width="" className="w-[60%] h-auto"/>
          </div>
        </Link>
      </div>

      {isClient && (
        <>
          <div className="hidden lg:flex lg:space-x-20 xxl:gap-10 justify-center items-center  text-lg flex-grow">
            <Link href="/home">
              <div className="relative inline-block before:block before:absolute before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-current before:scale-x-0 before:origin-bottom-right before:transition-transform before:duration-300 hover:before:scale-x-100 hover:before:origin-bottom-left">Home</div>
            </Link>
            <Link href="">
              <div className="relative inline-block before:block before:absolute before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-current before:scale-x-0 before:origin-bottom-right before:transition-transform before:duration-300 hover:before:scale-x-100 hover:before:origin-bottom-left">Pricing</div>
            </Link>
            <Link href="/about">
              <div className="relative inline-block before:block before:absolute before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-current before:scale-x-0 before:origin-bottom-right before:transition-transform before:duration-300 hover:before:scale-x-100 hover:before:origin-bottom-left">About</div>
            </Link>
            <Link href="/contact">
              <div className="relative inline-block before:block before:absolute before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-current before:scale-x-0 before:origin-bottom-right before:transition-transform before:duration-300 hover:before:scale-x-100 hover:before:origin-bottom-left">Contact</div>
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
              <Hamburger className="w-[65%] h-auto"/>
              <div className="w-screen pb-10 bg-white absolute -top-full group-focus:top-0 right-0 duration-150 flex flex-col space-y-3 justify-end">
                <button className="px-10 py-8 relative ml-auto">
                  <div className="w-6 h-1 rotate-45 absolute bg-black"></div>
                  <div className="w-6 h-1 -rotate-45 absolute bg-black"></div>
                </button>
                <Link href="/home">
                  <div className="flex justify-center w-full py-2 hover:bg-[#8d8888]">Home</div>
                </Link>

                <div className="flex justify-center w-full py-2 hover:bg-[#8d8888]">Pricing</div>

                <Link href="/about">
                  <div className="flex justify-center w-full py-2 hover:bg-[#8d8888]">About</div>
                </Link>

                <Link href="/contact">
                  <div className="flex justify-center w-full py-2 hover:bg-[#8d8888]">Contact</div>
                </Link>

                <Link href="/auth/login">
                  <div className="flex justify-center w-full py-2 hover:bg-[#8d8888]">Sign in</div>
                </Link>

                <Link href="/auth/signup">
                <div className="flex justify-center w-max mx-auto p-[50px] py-2 hover:bg-[#8d8888] bg-[#2C4E80] rounded-[20px] text-white">Sign Up</div>
                </Link>
              </div>
            </button>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
