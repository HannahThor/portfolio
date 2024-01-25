import React from "react";

import Link from "next/link";

export default function Nav() {
  return (
    <nav className="sm:absolute sm:right-20 top-10 pb-3 md:block md:pb-0 md:mt-0 sm:text-xl text-base flex flex-row justify-center">
      <Link
        className="cursor-pointer highlight hover:font-bold tracking-wide hover:tracking-normal mr-5"
        aria-label="projects"
        href="#projects"
      >
        projects
      </Link>
      <Link
        className="cursor-pointer highlight hover:font-bold tracking-wide hover:tracking-normal mr-5"
        aria-label="about"
        href="#about"
      >
        about
      </Link>
      <Link
        className="cursor-pointer highlight hover:font-bold tracking-wide hover:tracking-normal mr-5"
        aria-label="contact"
        href="#contact"
      >
        contact
      </Link>
      <Link
        href="/HannahThorley.pdf"
        target="_blank"
        className="cursor-pointer highlight hover:font-bold tracking-wide hover:tracking-normal mr-5"
        aria-label="download CV"
        download
      >
        cv
      </Link>
    </nav>
  );
}
