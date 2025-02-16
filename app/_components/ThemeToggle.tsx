/* eslint-disable react/react-in-jsx-scope */
"use client";

import { Moon, Sun } from "lucide-react"; // Icônes de ShadCN UI
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();


  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-lg p-2 transition-all "
    >
      {theme === "light" ? <Moon className="text-destructive" size={20} /> : <Sun className="text-destructive" size={20} />}
    </button>
  );
}
