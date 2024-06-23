import { cn } from "@/lib/utils";
import { error } from "console";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  error?: boolean;
}
export default function Text({ children, error }: Props) {
  return (
    <p className={cn("text-gray-200 text-md", `${error && "text-red-500"}`)}>
      {children}
    </p>
  );
}
