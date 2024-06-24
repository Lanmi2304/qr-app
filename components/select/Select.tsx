import React, { ReactNode, useContext } from "react";
import * as Select from "@radix-ui/react-select";
import classnames from "classnames";

import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";

type SelectProps = {
  items: MediaDeviceInfo[];
  deviceID: string;
  setDeviceID: (deviceID: string) => void;
};

function SelectEl({ items, deviceID, setDeviceID }: SelectProps) {
  return (
    <div className="relative mb-20 w-screen">
      <div className="absolute mb-10 mx-auto z-20">
        <Select.Root value={deviceID} onValueChange={setDeviceID}>
          <Select.Trigger className=" flex w-96 max-h-10 px-6 py-2 text-white justify-between bg-bg rounded-lg">
            <Select.Value
              aria-valuetext={deviceID}
              placeholder="Select a Device"
            />
            <Select.Icon className="text-purple-800">
              <ChevronDownIcon />
            </Select.Icon>
          </Select.Trigger>

          <Select.Content className="w-96 overflow-hidden  bg-bg text-red-500 rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
            <Select.Group>
              <Select.Label className="text-pink-700 font-semibold px-4 py-2 text-xl">
                Devices
              </Select.Label>
              {items.map((device, index) => (
                <SelectItem
                  key={index}
                  value={device.deviceId}
                  className="p-4 cursor-pointer"
                >
                  <span className="text-white">{device.label}</span>
                </SelectItem>
              ))}
              <SelectItem value="kurac" className="px-4 py-8 cursor-pointer">
                <span className="text-white">Shaomi 123</span>
              </SelectItem>
            </Select.Group>
          </Select.Content>
        </Select.Root>
      </div>
    </div>
  );
}

interface Props {
  children: ReactNode;
  value: string;
  className?: string;
}

const SelectItem = React.forwardRef<HTMLDivElement, Props>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={classnames(
          "text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
      </Select.Item>
    );
  }
);
SelectItem.displayName = "SelectItem";

export default SelectEl;
