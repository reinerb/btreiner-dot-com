import React from "react";
import RootNav from "./RootNav";
import { twMerge } from "tailwind-merge";

type HeaderProps = {
  className?: string;
};

function Header({ className }: HeaderProps) {
  return (
    <header
      className={twMerge("flex flex-col items-center px-8 py-4", className)}
    >
      <RootNav />
    </header>
  );
}

export default Header;
