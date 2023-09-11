import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import dayjs from "dayjs";
import Link from "next/link";

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-2 px-4 py-2 sm:flex-row sm:gap-4">
      <div className="flex items-center gap-4">
        <Link
          href="https://github.com/reinerb"
          className="block text-2xl"
          aria-label="View my GitHub"
        >
          <FontAwesomeIcon icon={faGithub} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/benjamin-t-reiner/"
          className="block text-2xl"
          aria-label="Find me on LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
