import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { NavLink } from "../types/Generics";
import SidebarNav from "./SidebarNav";
import { baseNav } from "../components/BaseNav";

type HamburgerNavProps = {
  navItems?: NavLink[];
  activeNav?: "home" | "portfolio" | "about" | "contact";
  className?: string;
};

function HamburgerNav({
  navItems = baseNav,
  activeNav,
  className,
}: HamburgerNavProps) {
  const [active, setActive] = useState<boolean>(false);

  return (
    <>
      <button
        aria-label="open nav"
        onClick={() => setActive(true)}
        className={twMerge("text-2xl", className)}
      >
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
          "fixed right-0 top-0 z-50 flex h-screen w-1/2 flex-col items-center bg-slate-200 p-6 transition-transform duration-300 dark:bg-slate-800 sm:w-1/4 lg:w-1/5 xl:w-1/6 2xl:w-1/12",
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
        <SidebarNav navItems={navItems} activeNav={activeNav} />
      </div>
    </>
  );
}

export default HamburgerNav;
