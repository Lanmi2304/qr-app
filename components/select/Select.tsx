import React, { ReactNode } from "react";
import * as Select from "@radix-ui/react-select";
import classnames from "classnames";

import { ChevronDownIcon } from "@radix-ui/react-icons";

type Option = {
  label: string;
  value: string;
}[];

type SelectProps = {
  items: Option;
  labelTitle: string;
  label: string;
  value: string;
  setValue: (deviceID: string) => void;
};

function SelectEl({ items, labelTitle, label, value, setValue }: SelectProps) {
  return (
    <div className="relative mb-20 w-screen">
      <div className="absolute mb-10 mx-auto z-20">
        <Select.Root
          value={value}
          onValueChange={setValue}
          defaultValue={items[0].value}
        >
          <Select.Trigger className=" flex w-96 max-h-10 px-6 py-2 text-text justify-between bg-select-bkg rounded-lg">
            <Select.Value aria-valuetext={value} placeholder={labelTitle} />
            <Select.Icon className="text-purple-800">
              <ChevronDownIcon />
            </Select.Icon>
          </Select.Trigger>

          <Select.Content className="w-96 overflow-hidden bg-select-bkg z-20 text-text rounded-md ">
            <Select.Group>
              <Select.Label className="text-purple-700 font-semibold px-4 py-2 text-xl">
                {label}
              </Select.Label>
              {items?.map((item, index) => (
                <SelectItem
                  key={index}
                  value={item.value}
                  className="p-4 cursor-pointer"
                >
                  <span className="text-text">{item.label}</span>
                </SelectItem>
              ))}
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
          "text-[13px] leading-none rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none",
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
