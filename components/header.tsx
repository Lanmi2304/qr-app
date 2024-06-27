"use client";

import { cn } from "@/lib/utils";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { text: "Home", path: "/" },
  { text: "QR Generator", path: "/qr-generator" },
  { text: "QR Scanner", path: "/qr-scanner" },
  { text: "Generated link history", path: "/scan-history" },
];

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<boolean>(false);
  const path = usePathname();

  const activeLink = navLinks.find((link) => link.path === path);

  return (
    <>
      {" "}
      <FontAwesomeIcon
        icon={faBars}
        className="text-menu-btn block fixed top-4 z-50 right-4 text-4xl sm:hidden"
        onClick={() => setActiveMenu((prev) => !prev)}
      />
      <ul
        className={cn(
          "w-3/4 border-l-2 border-purple-400 bg-bkg tracking-tight fixed top-0 text-xl shadow-2xl transition-all duration-300 z-40 px-4 flex flex-col pt-40 gap-8 items-center h-screen sm:w-screen sm:flex sm:right-0 sm:px-0 sm:border-none sm:h-10 sm:fixed sm:top-0 sm:py-4 sm:flex-row sm:justify-center sm:bg-transparent, sm:bg-red",
          activeMenu ? "right-0" : "-right-full"
        )}
      >
        {navLinks.map((link) => (
          <li key={link.path} onClick={() => setActiveMenu(false)}>
            <Link
              href={link.path}
              className={cn(
                `${link.path === activeLink?.path && "text-purple-500"}`
              )}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
