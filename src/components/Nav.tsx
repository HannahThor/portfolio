import React from "react";

import Link from "next/link";

export default function Nav() {
  return (
    <nav className="sm:absolute sm:right-10 top-10 pb-3 md:block md:pb-0 md:mt-0 sm:text-xl text-base flex flex-row justify-center font-light">
      <Link
        className="cursor-pointer highlight hover:font-semibold tracking-wide hover:tracking-normal  mx-2"
        aria-label="projects"
        scroll={false}
        href="/#projects"
      >
        projects
      </Link>
      <Link
        className="cursor-pointer highlight hover:font-semibold  tracking-wide hover:tracking-normal  mx-2"
        aria-label="about"
        scroll={false}
        href="/#about"
      >
        about
      </Link>
      <Link
        className="cursor-pointer highlight hover:font-semibold  tracking-wide hover:tracking-normal   mx-2"
        aria-label="contact"
        scroll={false}
        href="/#contact"
      >
        contact
      </Link>
      <Link
        href="/HannahThorley.pdf"
        target="_blank"
        className="cursor-pointer highlight hover:font-semibold  tracking-wide hover:tracking-normal mx-2"
        aria-label="download CV"
        download
      >
        cv
      </Link>
    </nav>
  );
}
