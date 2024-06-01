import React, { useEffect, useState, useRef } from "react";
import { MoonIcon } from "@/icons/MoonIcon";
import { SunIcon } from "@/icons/SunIcon";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const themeContainerRef = useRef<HTMLDivElement>(null);

  const [sunIconFill, setSunIconFill] = useState<string>("#FFD700");
  const [moonIconFill, setMoonIconFill] = useState<string>("gray");

  useEffect(() => {
    // Check system theme
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    
    // Check local storage
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark" || storedTheme === "light") {
      setTheme(storedTheme);
    } else {
      setTheme(systemTheme);
    }

    // Apply translation and icon fill colors based on the stored theme
    const themeContainer = themeContainerRef.current;
    if (themeContainer) {
      if (storedTheme === "dark" || systemTheme === "dark") {
        themeContainer.classList.add("translate-x-5");
        setSunIconFill("gray");
        setMoonIconFill("white");
      } else {
        themeContainer.classList.remove("translate-x-5");
        setSunIconFill("#FFD700");
        setMoonIconFill("gray");
      }
    }
  }, [setTheme]);

  useEffect(() => {
    // Update translation when theme changes
    const themeContainer = themeContainerRef.current;
    if (themeContainer) {
      if (theme === "dark") {
        themeContainer.classList.add("translate-x-5");
        setSunIconFill("gray");
        setMoonIconFill("white");
      } else {
        themeContainer.classList.remove("translate-x-5");
        setSunIconFill("#FFD700");
        setMoonIconFill("gray");
      }
    }
  }, [theme]);

  return (
    <div className="flex items-center space-x-3">
      <SunIcon fillColor={sunIconFill} />
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={() => {
            const newTheme = theme === "light" ? "dark" : "light";
            setTheme(newTheme);
            localStorage.setItem("theme", newTheme);

            // Update translation and icon fill colors when theme changes
            const themeContainer = themeContainerRef.current;
            if (themeContainer) {
              if (newTheme === "dark") {
                themeContainer.classList.add("translate-x-5");
                setSunIconFill("gray");
                setMoonIconFill("white");
              } else {
                themeContainer.classList.remove("translate-x-5");
                setSunIconFill("#FFD700");
                setMoonIconFill("gray");
              }
            }
          }}
          className="sr-only"
        />
        <div className="w-10 h-5 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors duration-300">
          <div
            className="w-5 h-5 bg-gray-400 dark:bg-blue-700 rounded-full shadow-md transform transition-transform duration-300 ease-in-out"
            id="theme_container"
            ref={themeContainerRef}
          ></div>
        </div>
      </label>
      <MoonIcon fillColor={moonIconFill} />
    </div>
  );
};

export default ThemeToggle;
