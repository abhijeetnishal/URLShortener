"use client";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
  <div className="fixed top-5 flex items-center space-x-2 dark:shadow-white">
    <Image src="/chain.png" alt="logo" height="40" width="40" className="dark:invert" />
    <h1 className="text-2xl font-extrabold">Short.Url</h1>
  </div>);
};

export default Navbar;
