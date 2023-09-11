import React from "react";
import Link from "next/link";
import Logo from "../Logo";

function RootNav() {
  return (
    <nav>
      <ul className="font-lg flex items-center gap-3 font-semibold sm:gap-4 sm:text-lg">
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/projects">Portfolio</Link>
        </li>
        <li>
          <Link href="/" aria-label="Home">
            <Logo className="w-12 sm:w-16 lg:w-20" />
          </Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default RootNav;
