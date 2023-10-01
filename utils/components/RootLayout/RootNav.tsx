"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useWindowSize } from "@uidotdev/usehooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { twMerge } from "tailwind-merge";
import SidebarNav from "@/utils/Navigation/SidebarNav";
import HamburgerNav from "@/utils/Navigation/HamburgerNav";

type RootNavProps = {
  activeNav?: "home" | "portfolio" | "about" | "contact";
  className?: string;
};

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

function RootNav(props: RootNavProps) {
  const { width } = useWindowSize();

  return width && width >= 768 ? (
    <SidebarNav navItems={navItems} {...props} />
  ) : (
    <HamburgerNav navItems={navItems} {...props} />
  );
}

export default RootNav;
