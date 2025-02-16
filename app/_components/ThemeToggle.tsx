/* eslint-disable react/react-in-jsx-scope */
"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react"; // Icônes de ShadCN UI
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();


  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      variant="logo" size="icon"
    >
      {theme === "light" ? <Moon className="text-destructive" size={22} /> : <Sun className="text-destructive" size={22} />}
    </Button>
  );
}
