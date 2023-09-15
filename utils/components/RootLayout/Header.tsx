import React from "react";
import RootNav from "./RootNav";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import Logo from "../Logo";

type HeaderProps = {
  activeNav: "home" | "portfolio" | "about" | "contact";
  className?: string;
};

function Header({ className, activeNav }: HeaderProps) {
  return (
    <header
      className={twMerge(
        "flex flex-row items-center justify-between gap-4 px-8 py-4 md:flex-col md:justify-start",
        className,
      )}
    >
      <Link href="/" aria-label="Home" className="flex flex-col items-center">
        <Logo className="w-8 fill-slate-950 transition-colors duration-200 hover:fill-slate-800 active:fill-slate-700 dark:fill-slate-50 dark:hover:fill-slate-200 dark:active:fill-slate-300 sm:w-12 md:w-20" />
      </Link>
      <RootNav activeNav={activeNav} />
    </header>
  );
}

export default Header;
