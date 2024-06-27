"use client";
import React from "react";
import * as Switch from "@radix-ui/react-switch";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const getCurrentTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches;

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    console.log(getCurrentTheme);
  }, []);

  if (!mounted) {
    return null;
  }

  const switchThemeHandler = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <form>
      <div className="flex items-center fixed top-4 right-16 z-40 sm:top-2 sm:right-6">
        <label
          className="text-text text-sm leading-none pr-[15px]"
          htmlFor="airplane-mode"
        >
          <p>{theme?.toUpperCase()}</p>
        </label>
        <Switch.Root
          onCheckedChange={switchThemeHandler}
          className={cn(
            "w-10 h-6  rounded-full relative shadow-[0_2px_10px]  focus:shadow-[0_0_0_2px] data-[state=checked]:bg-span-purple outline-none cursor-default"
          )}
          id="airplane-mode"
        >
          <Switch.Thumb className="block w-5 h-5 bg-white rounded-full shadow-[0_2px_2px]  transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
        </Switch.Root>
      </div>
    </form>
  );
};
