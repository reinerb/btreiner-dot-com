import React from "react";
import Link from "next/link";

function RootNav() {
  return (
    <nav>
      <ul className="font-lg divide-y-2 text-center font-semibold sm:text-lg">
        <li className="py-2">
          <Link href="/">Home</Link>
        </li>
        <li className="py-2">
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li className="py-2">
          <Link href="/about">About</Link>
        </li>
        <li className="py-2">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default RootNav;
