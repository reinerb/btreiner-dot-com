import React from "react";
import { NavLink } from "../types/Generics";
import Link from "next/link";

type SidebarNavProps = {
  navItems: NavLink[];
  activeNav?: "home" | "portfolio" | "about" | "contact";
  className?: string;
};

function SidebarNav({ navItems, activeNav, className }: SidebarNavProps) {
  return (
    <nav className={className}>
      <ul className="gap-0 divide-y-2 divide-slate-800 text-center text-lg font-semibold dark:divide-slate-200">
        {navItems.map(({ name, href }, index) => (
          <li key={index} className="py-2">
            <Link
              className={activeNav === name.toLowerCase() ? "active" : ""}
              href={href}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SidebarNav;
