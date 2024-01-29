import React from "react";

import Link from "next/link";

export default function Nav() {
  return (
    <nav className="sm:absolute sm:right-10 top-10 pb-3 md:block md:pb-0 md:mt-0 sm:text-xl text-base flex flex-row justify-center font-light">
      <a
        className="cursor-pointer highlight hover:font-semibold tracking-wide hover:tracking-normal  mx-2"
        aria-label="projects"
        href="/#projects"
      >
        projects
      </a>
      <a
        className="cursor-pointer highlight hover:font-semibold tracking-wide hover:tracking-normal  mx-2"
        aria-label="skills"
        href="/#skills"
      >
        skills
      </a>
      <a
        className="cursor-pointer highlight hover:font-semibold  tracking-wide hover:tracking-normal  mx-2"
        aria-label="about"
        href="/#about"
      >
        about
      </a>
      <a
        className="cursor-pointer highlight hover:font-semibold  tracking-wide hover:tracking-normal   mx-2"
        aria-label="contact"
        href="/#contact"
      >
        contact
      </a>
      <a
        href="/HannahThorley.pdf"
        target="_blank"
        className="cursor-pointer highlight hover:font-semibold  tracking-wide hover:tracking-normal mx-2"
        aria-label="download CV"
        download
      >
        cv
      </a>
    </nav>
  );
}
