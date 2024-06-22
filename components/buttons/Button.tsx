import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  gen?: boolean;
};

export default function Button({ href, children, gen }: Props) {
  return (
    <Link
      href={href}
      className={`${
        gen ? "bg-purple-600" : "bg-green-600"
      } text-white px-6 py-2 rounded-md`}
    >
      {children}
    </Link>
  );
}
