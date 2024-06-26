import React from "react";
import * as Switch from "@radix-ui/react-switch";

const ToggleTheme = () => (
  <form>
    <div className="flex items-center">
      <label
        className="text-text text-[15px] leading-none pr-[15px]"
        htmlFor="airplane-mode"
      >
        Airplane mode
      </label>
      <Switch.Root
        className="w-[42px] h-[25px] bg-blackA6 rounded-full relative shadow-[0_2px_10px]  focus:shadow-[0_0_0_2px] data-[state=checked]:bg-span-purple outline-none cursor-default"
        id="airplane-mode"
      >
        <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full shadow-[0_2px_2px]  transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
      </Switch.Root>
    </div>
  </form>
);

export default ToggleTheme;
