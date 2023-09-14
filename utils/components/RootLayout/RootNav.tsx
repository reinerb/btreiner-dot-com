import React from "react";
import Link from "next/link";
import Logo from "../Logo";

function RootNav() {
  return (
    <nav>
      <ul className="font-lg flex items-center gap-3 font-semibold sm:gap-4 sm:text-lg">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/" aria-label="Home">
            <Logo className="w-12 fill-slate-950 transition-colors duration-200 hover:fill-slate-800 active:fill-slate-700 dark:fill-slate-50 dark:hover:fill-slate-200 dark:active:fill-slate-300 sm:w-16 lg:w-20" />
          </Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default RootNav;
