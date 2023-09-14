import React from "react";
import Link from "next/link";

type RootNavProps = {
  activeNav: "home" | "portfolio" | "about" | "contact";
  className?: string;
};

function RootNav({ activeNav, className }: RootNavProps) {
  return (
    <nav>
      <ul className="font-lg divide-y-2 text-center font-semibold sm:text-lg">
        <li className="py-2">
          <Link className={activeNav === "home" ? "active" : ""} href="/">
            Home
          </Link>
        </li>
        <li className="py-2">
          <Link
            className={activeNav === "portfolio" ? "active" : ""}
            href="/portfolio"
          >
            Portfolio
          </Link>
        </li>
        <li className="py-2">
          <Link className={activeNav === "about" ? "active" : ""} href="/about">
            About
          </Link>
        </li>
        <li className="py-2">
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
