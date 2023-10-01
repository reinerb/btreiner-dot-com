"use client";

import React from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import SidebarNav from "@/utils/Navigation/SidebarNav";
import HamburgerNav from "@/utils/Navigation/HamburgerNav";
import { baseNav } from "../BaseNav";

type RootNavProps = {
  activeNav?: "home" | "portfolio" | "about" | "contact";
  className?: string;
};

function RootNav(props: RootNavProps) {
  const { width } = useWindowSize();

  return width && width >= 768 ? (
    <SidebarNav navItems={baseNav} {...props} />
  ) : (
    <HamburgerNav navItems={baseNav} {...props} />
  );
}

export default RootNav;
