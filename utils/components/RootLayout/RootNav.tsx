import React from "react";
import Link from "next/link";

type RootNavProps = {
  activeNav: "home" | "portfolio" | "about" | "contact";
  className?: string;
};

function RootNav({ activeNav, className }: RootNavProps) {
  return (
    <nav>
      <ul className="flex flex-row gap-2 text-center font-semibold sm:gap-4 sm:text-lg md:flex-col md:gap-0 md:divide-y-2 md:divide-slate-800 md:text-lg md:dark:divide-slate-200">
        <li className="md:py-2">
          <Link className={activeNav === "home" ? "active" : ""} href="/">
            Home
          </Link>
        </li>
        <li className="md:py-2">
          <Link
            className={activeNav === "portfolio" ? "active" : ""}
            href="/portfolio"
          >
            Portfolio
          </Link>
        </li>
        <li className="md:py-2">
          <Link className={activeNav === "about" ? "active" : ""} href="/about">
            About
          </Link>
        </li>
        <li className="md:py-2">
          <Link
            className={activeNav === "contact" ? "active" : ""}
            href="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default RootNav;
