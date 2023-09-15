"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useWindowSize } from "@uidotdev/usehooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { twMerge } from "tailwind-merge";

type RootNavProps = {
  activeNav: "home" | "portfolio" | "about" | "contact";
  className?: string;
};

const navItems = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/portfolio",
    title: "Portfolio",
  },
  {
    href: "/about",
    title: "About",
  },
  {
    href: "/contact",
    title: "Contact",
  },
];

function RootNav({ activeNav, className }: RootNavProps) {
  const { width, height } = useWindowSize();
  const [active, setActive] = useState<boolean>(false);

  const nav = (
    <nav className={className}>
      <ul className="gap-0 divide-y-2 divide-slate-800 text-center text-lg font-semibold dark:divide-slate-200">
        {navItems.map(({ href, title }) => (
          <li key={title} className="py-2">
            <Link
              className={activeNav === title.toLowerCase() ? "active" : ""}
              href={href}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );

  return width && width >= 768 ? (
    nav
  ) : (
    <>
      <button aria-label="open nav" onClick={() => setActive(true)}>
        <FontAwesomeIcon icon={faBars} className="text-2xl" />
      </button>
      <div
        aria-hidden
        className={twMerge(
          "fixed left-0 top-0 z-40 h-screen w-screen bg-slate-950 bg-opacity-50 transition-opacity duration-300",
          active ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setActive(false)}
      />
      <div
        className={twMerge(
          "fixed right-0 top-0 z-50 flex h-screen flex-col items-center bg-slate-200 p-8 transition-transform duration-300 dark:bg-slate-800",
          active ? "translate-x-0" : "translate-x-full",
        )}
      >
        <button
          aria-label="close nav"
          className="self-end"
          onClick={() => setActive(false)}
        >
          <FontAwesomeIcon icon={faX} />
        </button>
        {nav}
      </div>
    </>
  );
}

export default RootNav;
