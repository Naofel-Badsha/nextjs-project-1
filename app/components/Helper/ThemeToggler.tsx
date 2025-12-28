"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false);
const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="w-10 h-10 flex items-center justify-center rounded-full
                 bg-blue-950 dark:bg-white transition"
      aria-label="Toggle Theme"
    >
      {currentTheme === "dark" ? (
        <BiSun className="w-6 h-6 text-white dark:text-black cursor-pointer" />
      ) : (
        <BiMoon className="w-6 h-6 text-white dark:text-black cursor-pointer" />
      )}
    </button>
  );
};

export default ThemeToggler;
