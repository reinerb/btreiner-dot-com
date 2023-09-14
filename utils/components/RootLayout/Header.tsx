import React from "react";
import RootNav from "./RootNav";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import Logo from "../Logo";

type HeaderProps = {
  className?: string;
};

function Header({ className }: HeaderProps) {
  return (
    <header
      className={twMerge(
        "flex flex-col items-center gap-4 px-8 py-4",
        className,
      )}
    >
      <Link href="/" aria-label="Home" className="flex flex-col items-center">
        <Logo className="w-12 fill-slate-950 transition-colors duration-200 hover:fill-slate-800 active:fill-slate-700 dark:fill-slate-50 dark:hover:fill-slate-200 dark:active:fill-slate-300 sm:w-16 lg:w-20" />
      </Link>
      <RootNav />
    </header>
  );
}

export default Header;
