"use client";

import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import useThemeStore from "@/store/themeStore";
import { useEffect } from "react";

const Navbar = () => {
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark" || storedTheme === "light") {
      setTheme(storedTheme as "dark" | "light");
    } else {
      setTheme(systemTheme);
    }
  }, [setTheme]);

  return (
    <div
      className={`flex items-center justify-between py-3 px-5 bg-nt text-inv drop-shadow-lg ${theme}`}
    >
      <div className="flex items-center">
        <Image
          src="/chain.png"
          alt="logo"
          height="24"
          width="24"
          className={`${theme === "dark" ? "invert" : ""}`}
        />
        <h1 className="ml-3 text-2xl font-extrabold">Short.Url</h1>
      </div>
      <ThemeToggle />
    </div>
  );
};

export default Navbar;
