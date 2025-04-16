
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";
import { 
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleTheme} 
          className="rounded-full"
        >
          {theme === "light" ? (
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          ) : (
            <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Toggle {theme === "light" ? "dark" : "light"} mode</p>
      </TooltipContent>
    </Tooltip>
  );
}
