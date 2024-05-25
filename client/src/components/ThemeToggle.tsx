// // components/ThemeToggle.tsx
// "use client";
// import { useTheme } from "next-themes";
// import { useEffect, useState } from "react";

// const ThemeToggle = () => {
//   const { theme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return null;

//   return (
//     <button
//       onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//       className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full focus:outline-none"
//     >
//       {theme === "light" ? "🌞" : "🌜"}
//     </button>
//   );
// };

// export default ThemeToggle;

// components/ThemeToggle.tsx
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { IconBaseProps } from "react-icons";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center space-x-2">
      <FaSun
        className={`text-xl ${
          theme === "dark" ? "text-gray-400" : "text-yellow-500"
        } cursor-pointer`}
        onClick={() => setTheme("light")}
      />
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={() => setTheme(theme === "light" ? "dark" : "light")}
          className="sr-only"
        />
        <div className="w-10 h-5 bg-gray-200 rounded-full dark:bg-gray-700 transition-colors duration-300">
          <div
            className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
              theme === "dark" ? "translate-x-5" : ""
            }`}
          ></div>
        </div>
      </label>
      <FaMoon
        className={`text-xl ${
          theme === "dark" ? "text-blue-500" : "text-gray-400"
        } cursor-pointer`}
        onClick={() => setTheme("dark")}
      />
    </div>
  );
};

export default ThemeToggle;
