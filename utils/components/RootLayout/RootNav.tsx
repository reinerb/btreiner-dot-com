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
            <Logo className="w-12 fill-neutral-950 transition-colors duration-200 hover:fill-neutral-800 active:fill-neutral-700 dark:fill-neutral-50 dark:hover:fill-neutral-200 dark:active:fill-neutral-300 sm:w-16 lg:w-20" />
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
