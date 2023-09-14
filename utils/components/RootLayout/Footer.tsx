import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import dynamic from "next/dynamic";
import { twMerge } from "tailwind-merge";

const ColorModeSwitcher = dynamic(() => import("../ColorModeSwitcher"), {
  ssr: false,
});

type FooterProps = {
  className?: string;
};

function Footer({ className }: FooterProps) {
  return (
    <footer
      className={twMerge(
        "flex flex-col items-center justify-center gap-2 px-4 py-2 sm:flex-row sm:gap-4",
        className,
      )}
    >
      <div className="flex items-center gap-4">
        <Link
          href="https://github.com/reinerb"
          className="block text-2xl"
          aria-label="View my GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/benjamin-t-reiner/"
          className="block text-2xl"
          aria-label="Find me on LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </Link>
        <ColorModeSwitcher className="text-2xl" />
      </div>
    </footer>
  );
}

export default Footer;
