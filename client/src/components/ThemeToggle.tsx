import { MoonIcon } from "@/icons/MoonIcon";
import { SunIcon } from "@/icons/SunIcon";
import { useTheme } from "next-themes";
import { useEffect } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // Check system theme
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    
    // Check local storage
    const storedTheme = localStorage.getItem("theme");
    
    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme);
    } else {
      setTheme(systemTheme);
    }
  }, [setTheme]);

  return (
    <div className="flex items-center space-x-3">
      <SunIcon fillColor={theme === "dark" ? "gray" : "#FFD700"} />

      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={() => setTheme(theme === "light" ? "dark" : "light")}
          className="sr-only"
        />
        <div className="w-10 h-5 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors duration-300">
          <div
            className={`w-5 h-5 bg-gray-400 dark:bg-blue-700 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
              theme === "dark" ? "translate-x-5" : ""
            }`}
          ></div>
        </div>
      </label>

      <MoonIcon fillColor={theme === "dark" ? "white" : "gray"} />
    </div>
  );
};

export default ThemeToggle;
