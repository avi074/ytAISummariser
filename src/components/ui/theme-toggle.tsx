import { Moon, Sun } from "lucide-react";
import { Button } from "./button";
import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="fixed top-4 right-4 rounded-full bg-white/50 backdrop-blur-sm 
        hover:bg-white/80 dark:bg-gray-800/50 dark:hover:bg-gray-800/80
        border border-blue-200 dark:border-blue-500/30
        transform hover:scale-110 active:scale-95 transition-all duration-200
        hover:shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20"
    >
      <Sun className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all text-blue-600
        dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all text-blue-400
        dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}