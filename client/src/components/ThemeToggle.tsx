import { MoonIcon } from "@/icons/MoonIcon";
import { SunIcon } from "@/icons/SunIcon";
import useThemeStore from "@/store/themeStore";
import { useEffect, useRef, useState } from "react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeStore();
  const themeContainerRef = useRef<HTMLDivElement>(null);

  const [sunIconFill, setSunIconFill] = useState<string>("#FFD700");
  const [moonIconFill, setMoonIconFill] = useState<string>("gray");

  useEffect(() => {
    if (theme === "dark") {
      setSunIconFill("gray");
      setMoonIconFill("white");
    } else {
      setSunIconFill("#FFD700");
      setMoonIconFill("gray");
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
            toggleTheme();
            const newTheme = theme === "light" ? "dark" : "light";
            localStorage.setItem("theme", newTheme);
          }}
          className="sr-only"
        />
        <div className="w-10 h-5 bg-togb rounded-full transition-colors duration-300">
          <div
            className={`w-5 h-5 bg-tog rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
              theme === "dark" ? "translate-x-5" : ""
            }`}
            ref={themeContainerRef}
          ></div>
        </div>
      </label>
      <MoonIcon fillColor={moonIconFill} />
    </div>
  );
};

export default ThemeToggle;
