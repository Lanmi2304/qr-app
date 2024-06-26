"use client";
import React from "react";
import * as Switch from "@radix-ui/react-switch";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

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

  // const switchThemeHandler = () => {
  //   const newTheme = theme === "light" ? "dark" : "light";
  //   setTheme(newTheme);
  // };

  return (
    <select value={theme} onChange={(e) => setTheme(e.target.value)}>
      <option value="system">System</option>
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>
  );

  // return (
  //   <form>
  //     <div className="flex items-center">
  //       <label
  //         className="text-text text-[15px] leading-none pr-[15px]"
  //         htmlFor="airplane-mode"
  //       >
  //         Airplane mode
  //       </label>
  //       <Switch.Root
  //         onCheckedChange={switchThemeHandler}
  //         className="w-[42px] h-[25px] bg-blackA6 rounded-full relative shadow-[0_2px_10px]  focus:shadow-[0_0_0_2px] data-[state=checked]:bg-span-purple outline-none cursor-default"
  //         id="airplane-mode"
  //       >
  //         <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full shadow-[0_2px_2px]  transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
  //       </Switch.Root>
  //     </div>
  //   </form>
  // );
};
