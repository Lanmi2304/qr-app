import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, className, ...props }: Props) {
  return (
    <button
      className={cn("rounded-md text-white px-4 py-2 bg-purple-500", className)}
      {...props}
    >
      {children}
    </button>
  );
}
